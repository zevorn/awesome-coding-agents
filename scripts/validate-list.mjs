import { readFile } from 'node:fs/promises';

import { CATEGORIES, parseCatalog } from './catalog.mjs';

try {
  const markdown = await readFile('list.md', 'utf8');
  const tools = parseCatalog(markdown);
  const counts = new Map(CATEGORIES.map((category) => [category, 0]));

  for (const tool of tools) {
    counts.set(tool.category, (counts.get(tool.category) ?? 0) + 1);
  }

  console.log(`Validated list.md: ${tools.length} tools across ${CATEGORIES.length} categories.`);
  for (const category of CATEGORIES) {
    console.log(`- ${category}: ${counts.get(category)} tools`);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
