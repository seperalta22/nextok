/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['media-exp1.licdn.com'],
        optimizeImages: true,
    },
};

module.exports = nextConfig;
