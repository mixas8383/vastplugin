/* global videojs */
console.log('dsdsdsdsdsdsd');
'use strict';
console.log('rnew');
require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

videojs.plugin('vastClient', videoJsVAST);
