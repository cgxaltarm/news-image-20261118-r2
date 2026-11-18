// news-image-20261118-r2 — sum up 18 November 2026's world news in one image.
//
// The entry image is the v4b front page: a newspaper front page for
// Wednesday 18 November 2026, "THE DAY IN WORLD NEWS", 35 stories
// across 6 continents, in a unified navy / cream / gold palette.
// The 3 lead stories carry Flow-illustrated panels (Nano Banana Pro),
// with stories 4-9, BY THE NUMBERS, a dotted world map, and an
// ALSO ON list of 26 more stories below.
// This program only copies it to the output directory make.fun expects,
// so the judged artefact is exactly the prepared image.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const destination = join(outputDir, "entry.png");
copyFileSync(source, destination);

console.log(`Wrote ${destination}`);
