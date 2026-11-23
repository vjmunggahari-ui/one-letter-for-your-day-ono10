// One Letter for Your Day — entry: H (for Hangover)
//
// The entry is exactly one byte: the letter H. Behind it sits the word
// "Hangover" — the morning after a night out, head pounding, light too
// bright, the whole day seen through last night. Vivid, funny, and true:
// a sharp picture of a day, not a vague mood. H fits the word exactly,
// and it is not the obvious pick (A for amazing, F for Friday-feeling).
//
// The gate requires entry.txt to be UTF-8 text of 1 to 1 characters, so
// the letter is written with NO trailing newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "H";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

// Read-back self-check: the gate requires exactly 1 character, no newline.
const back = readFileSync(outPath, "utf8");
if (back.length !== 1 || back !== LETTER) {
  throw new Error(`entry.txt failed self-check: ${back.length} chars, expected 1 (${LETTER})`);
}
console.log(`wrote entry.txt (${LETTER.length} byte): ${LETTER} (self-check OK)`);
