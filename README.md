# PlantGuard documentation

System architecture documentation for PlantGuard, an IoT water monitoring device and mobile app.

## Generating bundle

Run the following command:

```sh
# If you want to run a one-off render
yarn render
# If you want to watch for changes and re-render
yarn watch
```

### Previewing

Currently, there's no integrated server with live reload. There's plans for an integrated server, but on the meantime please use Visual Studio Code's [Live Server](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension from Microsoft.

The repository already includes the configuration neccesary to use this extension correctly. Just right-click on the output file (`output/index.html`), then on `Show Preview`.

### PDF generation

Currently, there's no automatic generation of PDF. You can manually render the PDF by opening the preview server on any browser and using <kbd>Ctrl</kbd>+<kbd>P</kbd>.

## Writing documentation

The entrypoint for the renderer is [`docs/index.md`](docs/index.md). This file will be preprocessed with [markedpp](https://www.npmjs.com/package/markedpp). Also, if it has a front matter, it will be parsed by [gray-matter](https://www.npmjs.com/package/gray-matter).

The Markdown syntax chosen is MultiMarkdown 6, parsed by the [markdown-it](https://www.npmjs.com/package/markdown-it) and [markdown-it-multimd-table](https://www.npmjs.com/package/markdown-it-multimd-table). This syntax allows us to make better tables. You can check the [user guide](https://fletcher.github.io/MultiMarkdown-6/) or the [cheatsheet](https://rawgit.com/fletcher/MultiMarkdown-6-Syntax-Guide/master/index.html) for more info on how to make complex tables.

> There might be some differences with how markdown-it-multimd-table parses the file compared to the original multimarkdown binary.

### Front Matter

The front matter is only parsed for the entrypoint file.

```yaml
---
title: Document
lang: en
---
```

In the [rendered template](src/templates/markdown-template.hbs):

- `title` will be used for the header title element: `<title>{{title}}</title>`.
- `lang` will be used for the `html` tag attribute with the same name: `<html lang="{{lang}}">...</html>`

### Inserting page breaks

```markdown
{.page-break}
```

This will create an empty element with the class `.page-break`, as follows:

```html
<p class="page-break"></p>
```

This element is setup to force a page break on the printed PDF file. It **will not** be shown in the HTML preview.

### Loaded plugins for markdown-it

In order of execution:

- [markdown-it-replace-link](https://www.npmjs.com/package/markdown-it-replace-link)
- [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
- [markdown-it-toc-done-right](https://www.npmjs.com/package/markdown-it-toc-done-right)
- [markdown-it-multimd-table](https://www.npmjs.com/package/markdown-it-multimd-table)
- [markdown-it-highlightjs](https://www.npmjs.com/package/markdown-it-highlightjs)
- [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)

### Template

The template rendering is handled by [Handlebars](https://www.npmjs.com/package/handlebars).

### Code blocks

Syntax highlighting for code blocks is handled automatically by [highlight.js](https://www.npmjs.com/package/highlight.js). It has all the common languages loaded.

### Friendly URLs

Slugs for the table of contents and anchors are handled by [@sindresorhus/slugify](https://www.npmjs.com/package/@sindresorhus/slugify).
