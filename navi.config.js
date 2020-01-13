import path from "path";

export const renderPageToString = require.resolve("./src/renderPageToString");

/**
 * Get the file to write each URL to during the build
 */
export function getPagePathname({ url }) {
  if (url.pathname === "/") {
    return "index.html";
  }
  return path.join(url.pathname.slice(1), "index.html");
}
