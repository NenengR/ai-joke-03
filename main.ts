import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const joke = "My coding agent fixed the bug by moving it into a new service. The bug remained, but it had a dashboard now.";
const outputPath = (process.env.MAKEFUN_OUTPUT_DIR ?? "/output") + "/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, joke, "utf8");
