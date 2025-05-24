import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/jira-clone",
	images: {
		unoptimized: false, // SSR 模式可以使用優化
	},
};

export default nextConfig;
