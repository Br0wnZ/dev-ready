import tailwind from "@astrojs/tailwind";

/** @type {import('astro').AstroUserConfig} */
export default {
  integrations: [tailwind({ applyBaseStyles: false })],
  experimental: {
    assets: true
  }
};
