import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/jira-clone",
	assetPrefix: "/jira-clone/",
	trailingSlash: true,
	// 確保圖片能正常載入
	images: {
		unoptimized: false, // SSR 模式可以使用優化
	},
};

export default nextConfig;
