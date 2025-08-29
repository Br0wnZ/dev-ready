import { readFile, writeFile } from "node:fs/promises";
import { slugify } from "../src/core/utils/slug";
import type { Topic } from "../src/core/entities/topic";

function extractIndex(md: string): Topic[] {
  const lines = md.split("\n");
  const start = lines.findIndex((l) => l.trim() === "## Índice");
  const result: Topic[] = [];
  if (start === -1) return result;
  let depthStack: string[] = [];
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^##\s/.test(line)) break;
    const match = line.match(/^(\s*)- \[(.+?)\]\((.+?)\)/);
    if (!match) continue;
    const indent = match[1].length;
    const depth = Math.floor(indent / 2);
    const title = match[2];
    const url = match[3];
    if (depth === 1) {
      depthStack[1] = title;
    } else if (depth >= 2) {
      const category = depthStack[1] ?? "";
      result.push({
        id: slugify(title),
        title,
        category,
        url,
      });
    }
  }
  return result;
}

async function main() {
  const md = await readFile("README.md", "utf8");
  const topics = extractIndex(md);
  await writeFile("src/content/index.json", JSON.stringify(topics, null, 2));
  console.log(`Generated ${topics.length} topics`);
}

main();
