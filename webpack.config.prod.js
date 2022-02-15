const baseConfig = require('./webpack.config.base');
const Dotenv = require("dotenv-webpack");

module.exports = {
    ...baseConfig,
    mode: 'production',
    plugins: [
        ...baseConfig.plugins,
        new Dotenv({
            path: "./.env-prod"
        }),
    ]
};
