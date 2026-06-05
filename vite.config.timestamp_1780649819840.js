// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
var vite_config_default = defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" }
  },
  nitro: {
    // Target vercel-static for pure static SPA deployment on Vercel
    // This outputs to .output/public which Vercel can serve directly
    preset: "vercel-static"
  }
});
export {
  vite_config_default as default
};
