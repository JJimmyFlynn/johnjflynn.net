<?php

return [
  // Global settings
  '*' => [
    // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
    'useDevServer' => false,
    // Enforce Absolute URLs on includes
    'useAbsoluteUrl' => true,
    // The JavaScript entry from the manifest.json to inject on Twig error pages
    'errorEntry' => '',
    // String to be appended to the cache key
    'cacheKeySuffix' => '',
    // Manifest file names
    'manifest' => [
      'legacy' => 'manifest-legacy.json',
      'modern' => 'manifest.json',
    ],
    // Public server config
    'server' => [
      'manifestPath' => '@webroot/dist',
      'publicPath' => '/',
    ],
    // webpack-dev-server config
    'devServer' => [
      'manifestPath' => 'http://localhost:8080/dist',
      'publicPath' => 'http://localhost:8080/',
    ],
    // Local files config
    'localFiles' => [
      'basePath' => '@webroot/',
      'criticalPrefix' => 'dist/criticalcss/',
      'criticalSuffix' => '_critical.min.css',
    ],
  ],
  // Live (production) environment
  'live' => [
  ],
  // Staging (pre-production) environment
  'staging' => [
  ],
  // Development environment
  'dev' => [
    // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
    'useDevServer' => true,
  ],
];
