import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export", // 靜態輸出
	distDir: "jira-clone", // 改變輸出資料夾名稱
	basePath: "/jira-clone", // 這裡是用來改網站基底路徑（替代 homepage）
	assetPrefix: "/jira-clone/", // 靜態資源路徑前綴
};

export default nextConfig;
