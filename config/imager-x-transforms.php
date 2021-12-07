<?php

return [
  'default' => [
    'transforms' => [
      ['width' => 250],
      ['width' => 500],
      ['width' => 700],
      ['width' => 900],
      ['width' => 1100],
      ['width' => 1300],
      ['width' => 1500],
      ['width' => 1800],
      ['width' => 2000],
    ],
  ],
  'defaultWebp' => [
    'transforms' => 'default',
    'defaults' => [
      'format' => 'webp',
    ],
  ],
];
