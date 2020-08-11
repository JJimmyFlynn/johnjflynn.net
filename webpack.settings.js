module.exports = {
  name: 'John Flynn Dot Net',
  paths: {
    src: {
      base: './assets/',
      js: './assets/scripts/',
      css: './assets/styles/',
      images: './assets/images/'
    },
    dist: {
      base: './web/dist',
      images: './images'
    }
  },
  entries: {
    main: 'main.js'
  },
  urls: {
    live: 'https://johnjflynn.net/',
    local: 'http://johnjflynn.test/',
    critical: 'https://johnjflynn.net/',
    publicPath: () => process.env.PUBLIC_PATH || "/dist/"
  }
}
