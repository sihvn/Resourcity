/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/images',
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