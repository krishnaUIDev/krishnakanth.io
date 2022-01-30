const withTM = require("next-transpile-modules")([
  "react-flexbox-grid",
  "react-syntax-highlighter",
]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
});
