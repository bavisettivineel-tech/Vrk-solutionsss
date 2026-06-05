import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  prerender: {
    crawlLinks: true,
    ignore: ["/api"],
    routes: ["/sitemap.xml", "/robots.txt"],
  },
  storage: {
    redis: {
      driver: "memory",
    },
  },
  timing: false,
});
