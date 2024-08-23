/** @type {import("next").NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/campsite-chat",
				permanent: true,
			},
			{
				source: "/twitter",
				destination: "https://twitter.com/campsitechat",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://instagram.com/campsitechat",
				permanent: true,
			},
		];
	},
};

export default nextConfig
