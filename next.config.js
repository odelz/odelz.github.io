// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  experimental: {
    turbotrace: {
      // control if the log of turbotrace should contain the details of the analysis, default is `false`
      logDetail: true,
      // show all log messages without limit
      // turbotrace only show 1 log message for each categories by default
      logAll: true
    },
  },

};

module.exports = nextConfig;