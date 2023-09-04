import { render, watch } from "./render.js";
import { createLogger } from "./utils/logger.js";

const logger = createLogger("cli");

const args = process.argv.slice(2);

if (args.length === 0) {
  args.push("render");
}

const [command] = args;

switch (command) {
  case "render": {
    logger.info("Initializing rendering engine...");
    await render();
    break;
  }
  case "watch": {
    logger.info("Starting in watch mode...");
    await watch();
    break;
  }
  default: {
    logger.error(`Unknown command: '${command}'.`);
    break;
  }
}
