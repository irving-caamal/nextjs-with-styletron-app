const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withImages = require('next-images')
const localeSubpaths = {}

module.exports = {

  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,

  },
  webpack(config) {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  },
}
