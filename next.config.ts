import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS export — deployable to any Apache/cPanel docroot.
  output: "export",
  // Each route becomes a folder with index.html, which Apache serves cleanly.
  trailingSlash: true,
  // No image optimization server on static hosting.
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
