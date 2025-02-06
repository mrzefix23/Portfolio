/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap",
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  