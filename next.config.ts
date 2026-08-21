import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* /vision-mission was folded into /company. Keep the old URL reachable. */
  async redirects() {
    return [{ source: "/vision-mission", destination: "/company", permanent: true }];
  },
};

export default nextConfig;
