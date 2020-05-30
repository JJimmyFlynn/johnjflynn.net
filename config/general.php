<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,
        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,
        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,
        // Control Panel trigger word
        'cpTrigger' => 'admin',
        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),
        'allowUpdates' => false,
        'useProjectConfigFile' => true,
        'cacheDuration' => false
    ],

    // Dev environment settings
    'dev' => [
        // Base site URL
        'siteUrl' => 'http://johnjflynn.test',
        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        'allowUpdates' => true,
        'enableTemplateCaching' => false
    ],

    // Staging environment settings
    'staging' => [
        // Base site URL
        'siteUrl' => 'https://beta.johnjflynn.net',
        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        'allowAdminChanges' => false
    ],

    // Production environment settings
    'production' => [
        // Base site URL
        'siteUrl' => 'https://www.johnjflynn.net',
        'allowAdminChanges' => false,
        'allowUpdates'      => false
    ],
];
