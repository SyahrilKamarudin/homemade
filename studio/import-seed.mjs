// One-time seed import: loads the starter content into your Sanity dataset so
// the Studio opens pre-populated with the current site content (products, page
// copy, SEO and the 4 guide articles). Safe to re-run — `--replace` overwrites
// the same seed documents by id. Run AFTER `npx sanity init` (which sets the
// project id). Usage from the studio/ folder:  npm run import-seed
import { execFileSync } from 'node:child_process';

const dataset = process.env.SANITY_STUDIO_DATASET || 'production';
if (!/^[a-z0-9_-]+$/i.test(dataset)) {
  console.error(`Invalid dataset name: ${dataset}`);
  process.exit(1);
}
const files = ['content', 'products', 'seo', 'posts'];
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';

for (const f of files) {
  console.log(`\n→ Importing ${f}.ndjson …`);
  // execFileSync with an argument array — no shell, no injection surface.
  execFileSync(npx, ['sanity', 'dataset', 'import', `./seed/${f}.ndjson`, dataset, '--replace'], { stdio: 'inherit' });
}
console.log('\n✅ Seed import complete. Open the Studio to review and edit.');
