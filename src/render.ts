import fs from "node:fs/promises";
import path from "node:path";

import slugify from "@sindresorhus/slugify";
import matter from "gray-matter";
import { z } from "zod";

import MarkdownTemplate from "./templates/markdown-template.js";
import { dirname } from "./utils/filename-dirname.js";
import { createLogger } from "./utils/logger.js";
import { Preprocessor } from "./utils/preprocessor.js";
import { Renderer } from "./utils/renderer.js";
import { ensureSymlink } from "./utils/symlinks.js";

const renderLogger = createLogger("render");
const watchLogger = createLogger("watch");
const __dirname = dirname(import.meta);

const renderer = new Renderer({
  slugify: s => slugify(s),
});

const inputFolder = path.resolve(__dirname, "../docs/");
const inputFile = path.resolve(inputFolder, "index.md");

const outputFolder = path.resolve(__dirname, "../output/");
const outputFile = path.resolve(outputFolder, "index.html");
// Make sure the output directory exists
await fs.mkdir(outputFolder, { recursive: true });

// Create symlinks for styles and static folders
const stylesFolder = path.resolve(__dirname, "css/");
const staticFolder = path.resolve(inputFolder, "static/");
await ensureSymlink(stylesFolder, path.resolve(outputFolder, "css/"), "dir");
await ensureSymlink(staticFolder, path.resolve(outputFolder, "static/"), "dir");

const preprocessor = new Preprocessor({
  dirname: inputFolder,
  toc: false,
  marked: false,
});

const DocumentFrontMatter = z.object({
  lang: z.string().default("en"),
  title: z.string().default("Markdown Document"),
});

export async function render() {
  renderLogger.info("Initializing render...");

  const source = await fs.readFile(inputFile, { encoding: "utf8" });
  const { content, data } = matter(source);
  const metadata = DocumentFrontMatter.parse(data);
  const preprocessed = await preprocessor.render(content);
  const rendered = renderer.render(preprocessed);
  const templated = await MarkdownTemplate.render({
    lang: metadata.lang,
    title: metadata.title,
    content: rendered,
  });
  await fs.writeFile(outputFile, templated, { encoding: "utf8" });

  renderLogger.success("Render finished!");
}

export async function watch() {
  watchLogger.info("Initializing watcher...");
  const controller = new AbortController();
  const watcher = fs.watch(inputFolder, { recursive: true, signal: controller.signal });
  const signals: NodeJS.Signals[] = ["SIGHUP", "SIGKILL"];
  for (const signal of signals) {
    process.once(signal, () => {
      watchLogger.info("Killing watcher...");
      controller.abort();
    });
  }
  await render();
  for await (const _ of watcher) {
    watchLogger.info("Change detected, launching render...");
    await render();
  }
}
