import fs from "node:fs/promises";
import { relative } from "node:path";

import { createLogger } from "./logger.js";

const logger = createLogger("symlink");

export type SymlinkType = "dir" | "file" | "junction";

const cwd = process.cwd();

function simplify(path: string): string {
  return relative(cwd, path);
}

export async function ensureSymlink(target: string, from: string, type?: SymlinkType): Promise<void> {
  try {
    const state = await fs.lstat(from);
    if (!state.isSymbolicLink()) {
      return logger.error(`Unable to create symlink for ${from}: another file already exists.`);
    }
    const currentTarget = await fs.readlink(from, { encoding: "utf8" });
    if (relative(target, currentTarget) === "") {
      return logger.info(`Found symlink from ${simplify(from)} to ${simplify(target)}.`);
    }
    return logger.warn(`Found symlink for ${simplify(from)} but it has another target: ${simplify(currentTarget)}.`);
  } catch {
    await fs.symlink(target, from, type);
    logger.info(`Created symlink from ${simplify(from)} to ${simplify(target)}.`);
  }
}
