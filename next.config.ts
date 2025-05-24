import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
	basePath: isProd ? "/jira-clone" : "",
	images: {
		unoptimized: false, // SSR 模式可以使用優化
	},
};

export default nextConfig;
