/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
			},
			{
				protocol: "https",
				hostname: "media.licdn.com",
			},
			{
				protocol: "https",
				hostname: "a.travel-assets.com",
			},
			{
				protocol: "https",
				hostname: "cdn-icons-png.flaticon.com",
			},
			{
				protocol: "https",
				hostname: "github.githubassets.com",
			},
		],
	},
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
