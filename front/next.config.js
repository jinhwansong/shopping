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
    postcss: {
        plugins: {
            'postcss-import': {},
            'postcss-flexbugs-fixes': {},
            'postcss-preset-env': {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                    'nesting-rules': true,
                },
            },
        },
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
