import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/jira-clone", // 這裡是用來改網站基底路徑（替代 homepage）
	assetPrefix: "/jira-clone/", // 靜態資源路徑前綴
};

export default nextConfig;
