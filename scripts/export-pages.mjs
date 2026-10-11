#!/usr/bin/env node
/**
 * Snapshot the production server into a static GitHub Pages folder.
 * TanStack Start on this app is a server build; Pages can only host files.
 */
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const base = (process.env.PAGES_BASE ?? "/wiseong-cho-portfolio").replace(/\/$/, "");
const outDir = join(root, "pages-out");
const handlerPath = join(root, ".vercel/output/functions/__server.func/index.mjs");
const staticDir = join(root, ".vercel/output/static");

const { default: handler } = await import(handlerPath);

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://127.0.0.1");
  const response = await handler.fetch(
    new Request(url, { method: req.method, headers: req.headers }),
  );
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") return;
    res.setHeader(key, value);
  });
  res.end(Buffer.from(await response.arrayBuffer()));
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

async function grab(path) {
  const response = await fetch(`http://127.0.0.1:${port}${path}`);
  const text = await response.text();
  return { status: response.status, text, type: response.headers.get("content-type") ?? "" };
}

const home = await grab(`${base}/`);
const fallback = home.status === 200 && home.text.includes("<html") ? home : await grab("/");
server.close();

if (fallback.status !== 200 || !fallback.text.includes("Wiseong")) {
  console.error("pages export failed", fallback.status, fallback.text.slice(0, 400));
  process.exit(1);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(staticDir, outDir, { recursive: true });
await writeFile(join(outDir, "index.html"), fallback.text);
await writeFile(join(outDir, "404.html"), fallback.text);
await writeFile(join(outDir, ".nojekyll"), "");
console.log(`exported ${outDir} (${fallback.text.length} bytes)`);
