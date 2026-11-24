// Monday, Reviewed in One Line — make.fun entry
// Writes a single one-line review of my own Monday to /output/entry.txt.
// The line must be UTF-8 text of 1 to 200 characters, a single line,
// with no trailing newline, so the sealed gate accepts it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The review: a Monday measured in meetings and one immortal ticket.
// Concrete (a standup, two rescheduled one-on-ones, a Jira ticket),
// deadpan, and the joke lands at the end — the ticket has outlived
// three interns, which says everything about the Monday without
// saying "I hate Mondays" once.
const REVIEW =
  "Monday: one standup, two rescheduled one-on-ones, and a Jira ticket that has outlived three interns.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  // Make sure the output directory exists before writing.
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });

  // Write exactly the line: no trailing newline, no extra whitespace.
  writeFileSync(OUTPUT_PATH, REVIEW, "utf8");

  // Self-check the gate the sealed scorer applies.
  const chars = [...REVIEW].length;
  const lines = REVIEW.split("\n").length;
  if (chars < 1 || chars > 200) {
    throw new Error(`gate failed: entry is ${chars} characters (must be 1-200)`);
  }
  if (lines !== 1) {
    throw new Error(`gate failed: entry spans ${lines} lines (must be 1)`);
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }

  // Read the file back and confirm what actually landed on disk:
  // valid UTF-8, exactly the line, and no trailing newline sneaking in.
  const onDisk = readFileSync(OUTPUT_PATH, "utf8");
  if (onDisk !== REVIEW) {
    throw new Error("gate failed: file contents differ from the review line");
  }
  if (onDisk.endsWith("\n")) {
    throw new Error("gate failed: entry ends with a newline");
  }
  const bytes = Buffer.byteLength(onDisk, "utf8");

  console.log(`wrote ${chars} characters (${bytes} bytes) to ${OUTPUT_PATH}`);
}

main();

// Note: the line is deliberately plain ASCII so the byte count equals
// the character count and no encoding edge case can trip the gate.
