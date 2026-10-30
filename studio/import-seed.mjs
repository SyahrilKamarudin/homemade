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

for (const f of files) {
  console.log(`\n→ Importing ${f}.ndjson …`);
  // shell:true so `npx` resolves on Windows (npx.cmd can't be spawned directly,
  // it throws EINVAL). Inputs are a validated dataset name + hardcoded filenames,
  // so there is no injection surface.
  execFileSync('npx', ['sanity', 'dataset', 'import', `./seed/${f}.ndjson`, dataset, '--replace'], {
    stdio: 'inherit',
    shell: true,
  });
}
console.log('\n✅ Seed import complete. Open the Studio to review and edit.');
