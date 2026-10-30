// Next 16 static export writes nested segment prefetch files as
//   out/about/__next.about/__PAGE__.txt
// but the client router requests
//   out/about/__next.about.__PAGE__.txt
// Copy each nested file to the flat name so prefetches resolve on static hosting.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out/", import.meta.url));

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      flatten(dir, name, full, name);
    } else if (!name.startsWith("_next")) {
      walk(full);
    }
  }
}

function flatten(parentDir, prefix, dir, flatPrefix) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const flatName = `${flatPrefix}.${name}`;
    if (statSync(full).isDirectory()) {
      flatten(parentDir, prefix, full, flatName);
    } else {
      const target = join(parentDir, flatName);
      if (!existsSync(target)) copyFileSync(full, target);
    }
  }
}

if (!existsSync(OUT)) {
  console.error(`flatten-segments: ${OUT} not found; run next build first`);
  process.exit(1);
}
walk(OUT);
console.log("flatten-segments: done");
