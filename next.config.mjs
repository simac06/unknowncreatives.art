import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  experimental: {
    reactCompiler: false,
  },
};

export default withPayload(nextConfig);
