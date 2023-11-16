const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'd2trgt3k7y66er.cloudfront.net',
      'uidu-production.s3.eu-west-3.amazonaws.com',
      'source.unsplash.com',
    ],
  },
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgoConfig: { plugins: [{ removeViewBox: false }] } },
        },
      ],
    });

    // config.module.rules.push({
    //   test: /\.(le|c)ss$/,
    //   use: [
    //     MiniCssExtractPlugin.loader,
    //     {
    //       loader: 'css-loader',
    //     },
    //     {
    //       loader: 'less-loader',
    //       options: {
    //         sourceMap: true,
    //         lessOptions: {
    //           javascriptEnabled: true,
    //           modifyVars: { '@enable-css-reset': false },
    //         },
    //       },
    //     },
    //   ],
    // });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[contenthash].css',
      }),
    );

    return config;
  },
};
