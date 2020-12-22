<?php

$LOCK_FILE = __DIR__ .'/composer.lock';

if (!file_exists($LOCK_FILE)) {
  echo "Missing $LOCK_FILE" . PHP_EOL;
  exit(0);
}

// Download installer
copy('https://getcomposer.org/installer', '/tmp/composer-setup.php');

// Install a specific major version
echo shell_exec('php /tmp/composer-setup.php --install-dir=/tmp --1');

// Execute custom composer
echo shell_exec('php /tmp/composer.phar install --prefer-dist -n -d $PWD');

// Remove composer.lock file to prevent default composer install
unlink($LOCK_FILE);
