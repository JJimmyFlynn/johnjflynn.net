/*
------------------------------

Mix File

This site uses The Laravel Mix Webpack API Wrapper
Additional Information: https://github.com/JeffreyWay/laravel-mix

Available Commands:

- npm run dev
-- Runs all tasks
-- Alias for 'npm run development'

- npm run prod --production
-- Runs all tasks and minifys JS and CSS
-- Alias for 'npm run production'

- npm watch
-- Run development build, watches SCSS and JS files for changes and runs all tasks on change,
   also launches BrowserSync (set browserSyncProxy variable below)
------------------------------
 */

let mix = require('laravel-mix');
let ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;

/**
 * Set BrowserSync Proxy URL
 *
 * EDIT THIS
 */
const browserSyncProxy = 'http://johnjflynn.test/';

/**
 * Set the public path so Mix puts its 'mix-manifest.json'
 * file in the proper place
 */
mix.setPublicPath('./web/dist');

/**
 * Setup additional Webpack plugins
 */
mix.webpackConfig({
  plugins: [
    /**
     * Add image optimization when
     * image files are copied
     */
    new ImageminPlugin({
      pngquant: {
        quality: '95-100',
      },
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ]
});

/**
 * SASS Task
 */
mix.sass('assets/styles/main.scss', 'styles').options({
  autoprefixer: {
    options: {
      grid: true,
    }
  }
}).sourceMaps();

/**
 * JS Task
 */
mix.js('assets/scripts/main.js', 'scripts').sourceMaps();

/**
 * Copy Tasks
 */
// mix.copyDirectory('assets/images', 'dist/images');
// mix.copyDirectory('assets/fonts', 'dist/fonts');

/**
 * Versioning Task
 */
if(mix.inProduction) {
  mix.version();
}

/**
 * Browsersync
 */
mix.browserSync({
  proxy: browserSyncProxy,
  files: ['dist/**/*.js', 'dist/**/*.css']
});
