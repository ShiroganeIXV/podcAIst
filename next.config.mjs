/** @type {import('next').NextConfig} */
const nextConfig = {
    // add hostname to the list of allowed domains
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lovely-flamingo-139.convex.cloud',
            }
        ]
    }
};

export default nextConfig;
