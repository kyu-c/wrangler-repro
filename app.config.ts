import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import { cloudflare } from 'unenv'

export default defineConfig({
  server: {
    preset: 'cloudflare-pages',
    unenv: {
      ...cloudflare,
      // Without the below aliases, the following error occurs:
      //   ERROR  Error: Could not load .../node_modules/nitropack/dist/presets/_unenv/workerd/process.mjs/:
      //   ENOTDIR: not a directory, open '.../node_modules/nitropack/dist/presets/_unenv/workerd/process.mjs/'
      alias: {
        'process/': 'process/',
        'buffer/': 'buffer/',
        'string_decoder/': 'string_decoder/',
      },
    },
  },
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})
