import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(projectRoot, "dist", "client");
const serverEntryPath = path.join(projectRoot, "dist", "server", "server.js");
const pagesBasePath = (process.env.GITHUB_PAGES_BASE_PATH ?? "/").replace(/\/?$/, "/");

const serverEntry = await import(pathToFileURL(serverEntryPath).href);
const response = await serverEntry.default.fetch(new Request(`https://example.com${pagesBasePath}`));

if (!response.ok) {
  throw new Error(`Prerender failed with status ${response.status}`);
}

const html = await response.text();

await mkdir(clientDir, { recursive: true });
await writeFile(path.join(clientDir, "index.html"), html, "utf8");
await writeFile(path.join(clientDir, "404.html"), html, "utf8");
await writeFile(path.join(clientDir, ".nojekyll"), "", "utf8");

console.log(`Prerendered GitHub Pages output in ${clientDir}`);