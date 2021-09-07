/**
 * Disabling no-var-requires here as this is a node file.
 * There is probably a better way to do this that we should
 * look into at some point.
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [autoprefixer],
};
