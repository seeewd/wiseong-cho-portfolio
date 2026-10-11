import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const shot = "/tmp/portfolio-screen.png";
const out = "/workspace/artifacts/wiseong-cho-portfolio.pdf";
await mkdir("/workspace/artifacts", { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 1,
});
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle", timeout: 60000 });
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
});
await page.emulateMedia({ media: "screen" });
await page.screenshot({ path: shot, fullPage: true });
await browser.close();

const py = spawnSync(
  "python3",
  [
    "-c",
    `
from PIL import Image
im = Image.open(${JSON.stringify(shot)}).convert("RGB")
im.save(${JSON.stringify(out)}, "PDF", resolution=96.0)
print(im.size[0], im.size[1])
`,
  ],
  { encoding: "utf8" },
);
if (py.status !== 0) {
  console.error(py.stderr);
  process.exit(py.status ?? 1);
}
console.log(py.stdout.trim());
console.log(out);
