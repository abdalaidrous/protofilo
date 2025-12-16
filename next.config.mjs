/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const manualBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

const basePath = manualBasePath || (isGithubActions && repositoryName ? `/${repositoryName}` : '');
const assetPrefix = basePath || undefined;

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix,
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
