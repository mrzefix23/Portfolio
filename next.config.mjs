/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.licdn.com",
			},
			{
				protocol: "https",
				hostname: "a.travel-assets.com",
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
