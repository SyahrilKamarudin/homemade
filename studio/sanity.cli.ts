import { defineCliConfig } from 'sanity/cli';

// CLI config for `sanity deploy` / `sanity dataset import`. Project id is public.
export default defineCliConfig({
  api: {
    projectId: 'wdldkf9t',
    dataset: 'production',
  },
  studioHost: 'kabinetkajang', // deployed at https://kabinetkajang.sanity.studio
  // Auto-updates off: its version check chokes on the bundled @sanity/vision
  // version. Redeploy manually (npx sanity deploy) when you want a newer Studio.
  autoUpdates: false,
});
