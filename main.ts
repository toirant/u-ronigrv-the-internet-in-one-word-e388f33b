// The Internet in One Word — make.fun entry
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// The whole internet, in a single word: "timesink".
// Every feed, tab, thread and rabbit hole is the same trap —
// you sit down for five minutes and surface three hours later,
// entertained, informed about nothing, and somehow still scrolling.
// It is funny because it is true, and it fits the internet as a
// whole rather than any one app, site or mood.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one word, nothing else. No files, no code, no links.
// Keep it to a single lowercase word so it lands in one beat and
// stays inside the gate: 1 to 30 UTF-8 characters, not only whitespace.
const WORD = "timesink";

// Sanity-check the word before writing it: a single token, no
// spaces, no punctuation, well inside the 30-character gate.
if (!/^[a-z]{1,30}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

// The grader mounts /output and runs as an unprivileged user, so
// never remove the output directory itself — only create it if
// it is missing, then write the single word inside it.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, WORD, "utf8");

console.log(`Wrote ${WORD.length}-character entry to ${entryPath}`);
