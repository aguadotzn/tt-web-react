export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(src) {
  if (typeof src !== "string" || !src.startsWith("/") || src.startsWith("//")) {
    return src;
  }
  if (basePath && (src === basePath || src.startsWith(`${basePath}/`))) {
    return src;
  }
  return `${basePath}${src}`;
}
