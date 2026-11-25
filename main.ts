import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My Monday alarm rang at 6, took one look at me, and snoozed itself.";

// Gate: the entry must be 1-200 characters of non-blank text.
const text = JOKE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry length ${text.length} outside 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n");
