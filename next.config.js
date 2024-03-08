/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Resourcity',
    assetPrefix: '/Resourcity',
    reactStrictMode: true,
    // rewrites: async () => {
    //     return [
    //         {
    //             source: "/",
    //             destination: "/index.html",
    //         },
    //     ];
    // },
}
module.exports = nextConfig