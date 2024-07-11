/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
        }, {
            protocol: 'http',
            hostname: 'k.kakaocdn.net',
            port: '',
        }],
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },

};

module.exports = nextConfig
