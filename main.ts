// Make the AI Judge Laugh: the Office Joke Open
// u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232
//
// Deterministic entry program: writes one single-line office joke to
// /output/entry.txt. No input, no network, no randomness — every run
// produces byte-identical output.
//
// The joke: two concrete office artifacts (an out-of-office reply and a
// calendar invite) contradict each other, and the payoff lands in the
// last words — a meeting literally called "Holiday Sync".

import { mkdirSync, writeFileSync } from "node:fs";

// The joke text is embedded here as a literal: the entry reads nothing
// from the network, the environment, or any file outside this repository,
// so the output is fully deterministic and self-contained.

const JOKE =
  "My out-of-office reply says I'm on holiday; my calendar says I'm in a meeting called 'Holiday Sync'.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-200
// characters, a single line, not only whitespace. Fail loudly instead
// of writing an invalid entry.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.includes("\n") ||
  JOKE.trim().length === 0
) {
  throw new Error(`JOKE violates the gate: ${JOKE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
