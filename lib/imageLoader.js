import { withBasePath } from "./basePath";

// GitHub Pages has no image optimizer: serve files as-is, prefixing basePath
// to local paths (next/image does not add it to string srcs).
export default function imageLoader({ src }) {
  return withBasePath(src);
}
