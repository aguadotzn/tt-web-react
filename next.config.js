// Static export for GitHub Pages (project site served under /tt-web-react).
// Set NEXT_PUBLIC_BASE_PATH="" to build for a root domain (e.g. a custom domain).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/tt-web-react";

module.exports = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.js",
  },
};
