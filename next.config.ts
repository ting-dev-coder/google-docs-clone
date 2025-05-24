import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		unoptimized: false, // SSR 模式可以使用優化
	},
};

export default nextConfig;
