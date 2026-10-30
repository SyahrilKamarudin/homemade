import { defineCliConfig } from 'sanity/cli';

// CLI config for `sanity deploy` / `sanity dataset import`. Project id is public.
export default defineCliConfig({
  api: {
    projectId: 'wdldkf9t',
    dataset: 'production',
  },
  autoUpdates: true,
});
