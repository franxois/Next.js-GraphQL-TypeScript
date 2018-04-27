const withAwesomeTypescript = require("next-awesome-typescript");

module.exports = withAwesomeTypescript({
  webpack(config, options) {
    return config;
  }
});
