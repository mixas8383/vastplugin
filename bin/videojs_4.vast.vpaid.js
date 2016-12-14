(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//simple representation of the API

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var IVPAIDAdUnit = exports.IVPAIDAdUnit = function () {
    function IVPAIDAdUnit() {
        _classCallCheck(this, IVPAIDAdUnit);
    }

    _createClass(IVPAIDAdUnit, [{
        key: 'handshakeVersion',

        //all methods below
        //are async methods
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2.0';
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        }

        //creativeData is an object to be consistent with VPAIDHTML

    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { AdParameters: '' };
            var environmentVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : { flashVars: '' };
            var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {}
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {}
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {}
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {}
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {}
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {}
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {}
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(soundVolume) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {}
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {}
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {}
    }]);

    return IVPAIDAdUnit;
}();

Object.defineProperty(IVPAIDAdUnit, 'EVENTS', {
    writable: false,
    configurable: false,
    value: ['AdLoaded', 'AdStarted', 'AdStopped', 'AdSkipped', 'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange', 'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange', 'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange', 'AdImpression', 'AdVideoStart', 'AdVideoFirstQuartile', 'AdVideoMidpoint', 'AdVideoThirdQuartile', 'AdVideoComplete', 'AdClickThru', 'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation', 'AdUserMinimize', 'AdUserClose', 'AdPaused', 'AdPlaying', 'AdLog', 'AdError']
});

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var IVPAIDAdUnit = require('./IVPAIDAdUnit').IVPAIDAdUnit;
var ALL_VPAID_METHODS = Object.getOwnPropertyNames(IVPAIDAdUnit.prototype).filter(function (property) {
    return ['constructor'].indexOf(property) === -1;
});

var VPAIDAdUnit = exports.VPAIDAdUnit = function (_IVPAIDAdUnit) {
    _inherits(VPAIDAdUnit, _IVPAIDAdUnit);

    function VPAIDAdUnit(flash) {
        _classCallCheck(this, VPAIDAdUnit);

        var _this = _possibleConstructorReturn(this, (VPAIDAdUnit.__proto__ || Object.getPrototypeOf(VPAIDAdUnit)).call(this));

        _this._destroyed = false;
        _this._flash = flash;
        return _this;
    }

    _createClass(VPAIDAdUnit, [{
        key: '_destroy',
        value: function _destroy() {
            var _this2 = this;

            this._destroyed = true;
            ALL_VPAID_METHODS.forEach(function (methodName) {
                _this2._flash.removeCallbackByMethodName(methodName);
            });
            IVPAIDAdUnit.EVENTS.forEach(function (event) {
                _this2._flash.offEvent(event);
            });

            this._flash = null;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._flash.on(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            this._flash.off(eventName, callback);
        }

        //VPAID interface

    }, {
        key: 'handshakeVersion',
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2.0';
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            this._flash.callFlashMethod('handshakeVersion', [playerVPAIDVersion], callback);
        }
    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { AdParameters: '' };
            var environmentVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : { flashVars: '' };
            var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;

            //resize element that has the flash object
            this._flash.setSize(width, height);
            creativeData = creativeData || { AdParameters: '' };
            environmentVars = environmentVars || { flashVars: '' };

            this._flash.callFlashMethod('initAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode, desiredBitrate, creativeData.AdParameters || '', environmentVars.flashVars || ''], callback);
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

            //resize element that has the flash object
            this._flash.setSize(width, height);

            //resize ad inside the flash
            this._flash.callFlashMethod('resizeAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode], callback);
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('startAd', [], callback);
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('stopAd', [], callback);
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('pauseAd', [], callback);
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('resumeAd', [], callback);
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('expandAd', [], callback);
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('collapseAd', [], callback);
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('skipAd', [], callback);
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {
            this._flash.callFlashMethod('getAdLinear', [], callback);
        }
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {
            this._flash.callFlashMethod('getAdWidth', [], callback);
        }
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {
            this._flash.callFlashMethod('getAdHeight', [], callback);
        }
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {
            this._flash.callFlashMethod('getAdExpanded', [], callback);
        }
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {
            this._flash.callFlashMethod('getAdSkippableState', [], callback);
        }
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {
            this._flash.callFlashMethod('getAdRemainingTime', [], callback);
        }
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {
            this._flash.callFlashMethod('getAdDuration', [], callback);
        }
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(volume) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            this._flash.callFlashMethod('setAdVolume', [volume], callback);
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {
            this._flash.callFlashMethod('getAdVolume', [], callback);
        }
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {
            this._flash.callFlashMethod('getAdCompanions', [], callback);
        }
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {
            this._flash.callFlashMethod('getAdIcons', [], callback);
        }
    }]);

    return VPAIDAdUnit;
}(IVPAIDAdUnit);

},{"./IVPAIDAdUnit":1}],3:[function(require,module,exports){
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var swfobject = require('swfobject');

var JSFlashBridge = require('./jsFlashBridge').JSFlashBridge;
var VPAIDAdUnit = require('./VPAIDAdUnit').VPAIDAdUnit;

var noop = require('./utils').noop;
var callbackTimeout = require('./utils').callbackTimeout;
var isPositiveInt = require('./utils').isPositiveInt;
var createElementWithID = require('./utils').createElementWithID;
var uniqueVPAID = require('./utils').unique('vpaid');
var createFlashTester = require('./flashTester.js').createFlashTester;

var ERROR = 'error';
var FLASH_VERSION = '10.1.0';

var flashTester = { isSupported: function isSupported() {
        return true;
    } }; // if the runFlashTest is not run the flashTester will always return true

var VPAIDFLASHClient = function () {
    function VPAIDFLASHClient(vpaidParentEl, callback) {
        var swfConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { data: 'VPAIDFlash.swf', width: 800, height: 400 };

        var _this = this;

        var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { wmode: 'transparent', salign: 'tl', align: 'left', allowScriptAccess: 'always', scale: 'noScale', allowFullScreen: 'true', quality: 'high' };
        var vpaidOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { debug: false, timeout: 10000 };

        _classCallCheck(this, VPAIDFLASHClient);

        var me = this;

        this._vpaidParentEl = vpaidParentEl;
        this._flashID = uniqueVPAID();
        this._destroyed = false;
        callback = callback || noop;

        swfConfig.width = isPositiveInt(swfConfig.width, 800);
        swfConfig.height = isPositiveInt(swfConfig.height, 400);

        createElementWithID(vpaidParentEl, this._flashID, true);

        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + this._flashID + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER + '&debug=' + vpaidOptions.debug + '&salign=' + params.salign;

        if (!VPAIDFLASHClient.isSupported()) {
            return onError('user don\'t support flash or doesn\'t have the minimum required version of flash ' + FLASH_VERSION);
        }

        this.el = swfobject.createSWF(swfConfig, params, this._flashID);

        if (!this.el) {
            return onError('swfobject failed to create object in element');
        }

        var handler = callbackTimeout(vpaidOptions.timeout, function (err, data) {
            $loadPendedAdUnit.call(_this);
            callback(err, data);
        }, function () {
            callback('vpaid flash load timeout ' + vpaidOptions.timeout);
        });

        this._flash = new JSFlashBridge(this.el, swfConfig.data, this._flashID, swfConfig.width, swfConfig.height, handler);

        function onError(error) {
            setTimeout(function () {
                callback(new Error(error));
            }, 0);
            return me;
        }
    }

    _createClass(VPAIDFLASHClient, [{
        key: 'destroy',
        value: function destroy() {
            this._destroyAdUnit();

            if (this._flash) {
                this._flash.destroy();
                this._flash = null;
            }
            this.el = null;
            this._destroyed = true;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: '_destroyAdUnit',
        value: function _destroyAdUnit() {
            delete this._loadLater;

            if (this._adUnitLoad) {
                this._adUnitLoad = null;
                this._flash.removeCallback(this._adUnitLoad);
            }

            if (this._adUnit) {
                this._adUnit._destroy();
                this._adUnit = null;
            }
        }
    }, {
        key: 'loadAdUnit',
        value: function loadAdUnit(adURL, callback) {
            var _this2 = this;

            $throwIfDestroyed.call(this);

            if (this._adUnit) {
                this._destroyAdUnit();
            }

            if (this._flash.isReady()) {
                this._adUnitLoad = function (err, message) {
                    if (!err) {
                        _this2._adUnit = new VPAIDAdUnit(_this2._flash);
                    }
                    _this2._adUnitLoad = null;
                    callback(err, _this2._adUnit);
                };

                this._flash.callFlashMethod('loadAdUnit', [adURL], this._adUnitLoad);
            } else {
                this._loadLater = { url: adURL, callback: callback };
            }
        }
    }, {
        key: 'unloadAdUnit',
        value: function unloadAdUnit() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            $throwIfDestroyed.call(this);

            this._destroyAdUnit();
            this._flash.callFlashMethod('unloadAdUnit', [], callback);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashID();
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashURL();
        }
    }]);

    return VPAIDFLASHClient;
}();

setStaticProperty('isSupported', function () {
    return swfobject.hasFlashPlayerVersion(FLASH_VERSION) && flashTester.isSupported();
}, true);

setStaticProperty('runFlashTest', function (swfConfig) {
    flashTester = createFlashTester(document.body, swfConfig);
});

function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error('VPAIDFlashToJS is destroyed!');
    }
}

function $loadPendedAdUnit() {
    if (this._loadLater) {
        this.loadAdUnit(this._loadLater.url, this._loadLater.callback);
        delete this._loadLater;
    }
}

function setStaticProperty(propertyName, value) {
    var writable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    Object.defineProperty(VPAIDFLASHClient, propertyName, {
        writable: writable,
        configurable: false,
        value: value
    });
}

VPAIDFLASHClient.swfobject = swfobject;

module.exports = VPAIDFLASHClient;

},{"./VPAIDAdUnit":2,"./flashTester.js":4,"./jsFlashBridge":5,"./utils":8,"swfobject":14}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var swfobject = require('swfobject');

var FLASH_TEST = 'vpaid_video_flash_tester';
var FLASH_TEST_EL = 'vpaid_video_flash_tester_el';
var JSFlashBridge = require('./jsFlashBridge').JSFlashBridge;
var utils = require('./utils');
var MultipleValuesRegistry = require('./registry').MultipleValuesRegistry;

var FlashTester = function () {
    function FlashTester(parent) {
        var _this = this;

        var swfConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { data: 'VPAIDFlash.swf', width: 800, height: 400 };

        _classCallCheck(this, FlashTester);

        this.parentEl = utils.createElementWithID(parent, FLASH_TEST_EL); // some browsers create global variables using the element id http://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables
        utils.hideFlashEl(this.parentEl);
        var params = {};
        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + FLASH_TEST_EL + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER;
        params.allowScriptAccess = 'always';

        this.el = swfobject.createSWF(swfConfig, params, FLASH_TEST_EL);
        this._handlers = new MultipleValuesRegistry();
        this._isSupported = false;
        if (this.el) {
            utils.hideFlashEl(this.el);
            this._flash = new JSFlashBridge(this.el, swfConfig.data, FLASH_TEST_EL, swfConfig.width, swfConfig.height, function () {
                var support = true;
                _this._isSupported = support;
                _this._handlers.get('change').forEach(function (callback) {
                    setTimeout(function () {
                        callback('change', support);
                    }, 0);
                });
            });
        }
    }

    _createClass(FlashTester, [{
        key: 'isSupported',
        value: function isSupported() {
            return this._isSupported;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }]);

    return FlashTester;
}();

var createFlashTester = exports.createFlashTester = function createFlashTester(el, swfConfig) {
    if (!window[FLASH_TEST]) {
        window[FLASH_TEST] = new FlashTester(el, swfConfig);
    }
    return window[FLASH_TEST];
};

},{"./jsFlashBridge":5,"./registry":7,"./utils":8,"swfobject":14}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var unique = require('./utils').unique;
var isPositiveInt = require('./utils').isPositiveInt;
var stringEndsWith = require('./utils').stringEndsWith;
var SingleValueRegistry = require('./registry').SingleValueRegistry;
var MultipleValuesRegistry = require('./registry').MultipleValuesRegistry;
var registry = require('./jsFlashBridgeRegistry');
var VPAID_FLASH_HANDLER = 'vpaid_video_flash_handler';
var ERROR = 'AdError';

var JSFlashBridge = exports.JSFlashBridge = function () {
    function JSFlashBridge(el, flashURL, flashID, width, height, loadHandShake) {
        _classCallCheck(this, JSFlashBridge);

        this._el = el;
        this._flashID = flashID;
        this._flashURL = flashURL;
        this._width = width;
        this._height = height;
        this._handlers = new MultipleValuesRegistry();
        this._callbacks = new SingleValueRegistry();
        this._uniqueMethodIdentifier = unique(this._flashID);
        this._ready = false;
        this._handShakeHandler = loadHandShake;

        registry.addInstance(this._flashID, this);
    }

    _createClass(JSFlashBridge, [{
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            return this._handlers.remove(eventName, callback);
        }
    }, {
        key: 'offEvent',
        value: function offEvent(eventName) {
            return this._handlers.removeByKey(eventName);
        }
    }, {
        key: 'offAll',
        value: function offAll() {
            return this._handlers.removeAll();
        }
    }, {
        key: 'callFlashMethod',
        value: function callFlashMethod(methodName) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            var callbackID = '';
            // if no callback, some methods the return is void so they don't need callback
            if (callback) {
                callbackID = this._uniqueMethodIdentifier() + '_' + methodName;
                this._callbacks.add(callbackID, callback);
            }

            try {
                //methods are created by ExternalInterface.addCallback in as3 code, if for some reason it failed
                //this code will throw an error
                this._el[methodName]([callbackID].concat(args));
            } catch (e) {
                if (callback) {
                    $asyncCallback.call(this, callbackID, e);
                } else {

                    //if there isn't any callback to return error use error event handler
                    this._trigger(ERROR, e);
                }
            }
        }
    }, {
        key: 'removeCallback',
        value: function removeCallback(callback) {
            return this._callbacks.removeByValue(callback);
        }
    }, {
        key: 'removeCallbackByMethodName',
        value: function removeCallbackByMethodName(suffix) {
            var _this = this;

            this._callbacks.filterKeys(function (key) {
                return stringEndsWith(key, suffix);
            }).forEach(function (key) {
                _this._callbacks.remove(key);
            });
        }
    }, {
        key: 'removeAllCallbacks',
        value: function removeAllCallbacks() {
            return this._callbacks.removeAll();
        }
    }, {
        key: '_trigger',
        value: function _trigger(eventName, event) {
            var _this2 = this;

            this._handlers.get(eventName).forEach(function (callback) {
                //clickThru has to be sync, if not will be block by the popupblocker
                if (eventName === 'AdClickThru') {
                    callback(event);
                } else {
                    setTimeout(function () {
                        if (_this2._handlers.get(eventName).length > 0) {
                            callback(event);
                        }
                    }, 0);
                }
            });
        }
    }, {
        key: '_callCallback',
        value: function _callCallback(methodName, callbackID, err, result) {

            var callback = this._callbacks.get(callbackID);

            //not all methods callback's are mandatory
            //but if there exist an error, fire the error event
            if (!callback) {
                if (err && callbackID === '') {
                    this.trigger(ERROR, err);
                }
                return;
            }

            $asyncCallback.call(this, callbackID, err, result);
        }
    }, {
        key: '_handShake',
        value: function _handShake(err, data) {
            this._ready = true;
            if (this._handShakeHandler) {
                this._handShakeHandler(err, data);
                delete this._handShakeHandler;
            }
        }

        //methods like properties specific to this implementation of VPAID

    }, {
        key: 'getSize',
        value: function getSize() {
            return { width: this._width, height: this._height };
        }
    }, {
        key: 'setSize',
        value: function setSize(newWidth, newHeight) {
            this._width = isPositiveInt(newWidth, this._width);
            this._height = isPositiveInt(newHeight, this._height);
            this._el.setAttribute('width', this._width);
            this._el.setAttribute('height', this._height);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this._width;
        }
    }, {
        key: 'setWidth',
        value: function setWidth(newWidth) {
            this.setSize(newWidth, this._height);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this._height;
        }
    }, {
        key: 'setHeight',
        value: function setHeight(newHeight) {
            this.setSize(this._width, newHeight);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            return this._flashID;
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            return this._flashURL;
        }
    }, {
        key: 'isReady',
        value: function isReady() {
            return this._ready;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.offAll();
            this.removeAllCallbacks();
            registry.removeInstanceByID(this._flashID);
            if (this._el.parentElement) {
                this._el.parentElement.removeChild(this._el);
            }
        }
    }]);

    return JSFlashBridge;
}();

function $asyncCallback(callbackID, err, result) {
    var _this3 = this;

    setTimeout(function () {
        var callback = _this3._callbacks.get(callbackID);
        if (callback) {
            _this3._callbacks.remove(callbackID);
            callback(err, result);
        }
    }, 0);
}

Object.defineProperty(JSFlashBridge, 'VPAID_FLASH_HANDLER', {
    writable: false,
    configurable: false,
    value: VPAID_FLASH_HANDLER
});

/**
 * External interface handler
 *
 * @param {string} flashID identifier of the flash who call this
 * @param {string} typeID what type of message is, can be 'event' or 'callback'
 * @param {string} typeName if the typeID is a event the typeName will be the eventName, if is a callback the typeID is the methodName that is related this callback
 * @param {string} callbackID only applies when the typeID is 'callback', identifier of the callback to call
 * @param {object} error error object
 * @param {object} data
 */
window[VPAID_FLASH_HANDLER] = function (flashID, typeID, typeName, callbackID, error, data) {
    var instance = registry.getInstanceByID(flashID);
    if (!instance) return;
    if (typeName === 'handShake') {
        instance._handShake(error, data);
    } else {
        if (typeID !== 'event') {
            instance._callCallback(typeName, callbackID, error, data);
        } else {
            instance._trigger(typeName, data);
        }
    }
};

},{"./jsFlashBridgeRegistry":6,"./registry":7,"./utils":8}],6:[function(require,module,exports){
'use strict';

var SingleValueRegistry = require('./registry').SingleValueRegistry;
var instances = new SingleValueRegistry();

var JSFlashBridgeRegistry = {};
Object.defineProperty(JSFlashBridgeRegistry, 'addInstance', {
    writable: false,
    configurable: false,
    value: function value(id, instance) {
        instances.add(id, instance);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'getInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.get(id);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'removeInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.remove(id);
    }
});

module.exports = JSFlashBridgeRegistry;

},{"./registry":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var MultipleValuesRegistry = exports.MultipleValuesRegistry = function () {
    function MultipleValuesRegistry() {
        _classCallCheck(this, MultipleValuesRegistry);

        this._registries = {};
    }

    _createClass(MultipleValuesRegistry, [{
        key: 'add',
        value: function add(id, value) {
            if (!this._registries[id]) {
                this._registries[id] = [];
            }
            if (this._registries[id].indexOf(value) === -1) {
                this._registries[id].push(value);
            }
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id] || [];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this._registries[key].indexOf(value) !== -1;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(key, value) {
            if (!this._registries[key]) {
                return;
            }

            var index = this._registries[key].indexOf(value);

            if (index < 0) {
                return;
            }
            return this._registries[key].splice(index, 1);
        }
    }, {
        key: 'removeByKey',
        value: function removeByKey(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this2 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this2.remove(key, value);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return MultipleValuesRegistry;
}();

var SingleValueRegistry = exports.SingleValueRegistry = function () {
    function SingleValueRegistry() {
        _classCallCheck(this, SingleValueRegistry);

        this._registries = {};
    }

    _createClass(SingleValueRegistry, [{
        key: 'add',
        value: function add(id, value) {
            this._registries[id] = value;
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this3 = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this3._registries[key] === value;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this4 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this4.remove(key);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return SingleValueRegistry;
}();

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unique = unique;
exports.noop = noop;
exports.callbackTimeout = callbackTimeout;
exports.createElementWithID = createElementWithID;
exports.isPositiveInt = isPositiveInt;
exports.stringEndsWith = stringEndsWith;
exports.hideFlashEl = hideFlashEl;
function unique(prefix) {
    var count = -1;
    return function (f) {
        return prefix + '_' + ++count;
    };
}

function noop() {}

function callbackTimeout(timer, onSuccess, onTimeout) {

    var timeout = setTimeout(function () {

        onSuccess = noop;
        onTimeout();
    }, timer);

    return function () {
        clearTimeout(timeout);
        onSuccess.apply(this, arguments);
    };
}

function createElementWithID(parent, id) {
    var cleanContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var nEl = document.createElement('div');
    nEl.id = id;
    if (cleanContent) {
        parent.innerHTML = '';
    }
    parent.appendChild(nEl);
    return nEl;
}

function isPositiveInt(newVal, oldVal) {
    return !isNaN(parseFloat(newVal)) && isFinite(newVal) && newVal > 0 ? newVal : oldVal;
}

var endsWith = function () {
    if (String.prototype.endsWith) return String.prototype.endsWith;
    return function endsWith(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}();

function stringEndsWith(string, search) {
    return endsWith.call(string, search);
}

function hideFlashEl(el) {
    // can't use display none or visibility none because will block flash in some browsers
    el.style.position = 'absolute';
    el.style.left = '-1px';
    el.style.top = '-1px';
    el.style.width = '1px';
    el.style.height = '1px';
}

},{}],9:[function(require,module,exports){
'use strict';

var METHODS = [
    'handshakeVersion',
    'initAd',
    'startAd',
    'stopAd',
    'skipAd', // VPAID 2.0 new method
    'resizeAd',
    'pauseAd',
    'resumeAd',
    'expandAd',
    'collapseAd',
    'subscribe',
    'unsubscribe'
];

var EVENTS = [
    'AdLoaded',
    'AdStarted',
    'AdStopped',
    'AdSkipped',
    'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange',
    'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange',
    'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange',
    'AdImpression',
    'AdVideoStart',
    'AdVideoFirstQuartile',
    'AdVideoMidpoint',
    'AdVideoThirdQuartile',
    'AdVideoComplete',
    'AdClickThru',
    'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation',
    'AdUserMinimize',
    'AdUserClose',
    'AdPaused',
    'AdPlaying',
    'AdLog',
    'AdError'
];

var GETTERS = [
    'getAdLinear',
    'getAdWidth', // VPAID 2.0 new getter
    'getAdHeight', // VPAID 2.0 new getter
    'getAdExpanded',
    'getAdSkippableState', // VPAID 2.0 new getter
    'getAdRemainingTime',
    'getAdDuration', // VPAID 2.0 new getter
    'getAdVolume',
    'getAdCompanions', // VPAID 2.0 new getter
    'getAdIcons' // VPAID 2.0 new getter
];

var SETTERS = [
    'setAdVolume'
];


/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * IVPAIDAdUnit
 *
 * @class
 *
 * @param {object} creative
 * @param {HTMLElement} el
 * @param {HTMLVideoElement} video
 */
function IVPAIDAdUnit(creative, el, video) {}


/**
 * handshakeVersion
 *
 * @param {string} VPAIDVersion
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.handshakeVersion = function (VPAIDVersion, callback) {};

/**
 * initAd
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version
 * @param {NodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};

/**
 * startAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.startAd = function(callback) {};

/**
 * stopAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.stopAd = function(callback) {};

/**
 * skipAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.skipAd = function(callback) {};

/**
 * resizeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resizeAd = function(width, height, viewMode, callback) {};

/**
 * pauseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.pauseAd = function(callback) {};

/**
 * resumeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resumeAd = function(callback) {};

/**
 * expandAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.expandAd = function(callback) {};

/**
 * collapseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.collapseAd = function(callback) {};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
IVPAIDAdUnit.prototype.subscribe = function(event, handler, context) {};

/**
 * startAd
 *
 * @param {string} event
 * @param {function} handler
 */
IVPAIDAdUnit.prototype.unsubscribe = function(event, handler) {};



/**
 * getAdLinear
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdLinear = function(callback) {};

/**
 * getAdWidth
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdWidth = function(callback) {};

/**
 * getAdHeight
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdHeight = function(callback) {};

/**
 * getAdExpanded
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdExpanded = function(callback) {};

/**
 * getAdSkippableState
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdSkippableState = function(callback) {};

/**
 * getAdRemainingTime
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdRemainingTime = function(callback) {};

/**
 * getAdDuration
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdDuration = function(callback) {};

/**
 * getAdVolume
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdVolume = function(callback) {};

/**
 * getAdCompanions
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdCompanions = function(callback) {};

/**
 * getAdIcons
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdIcons = function(callback) {};

/**
 * setAdVolume
 *
 * @param {number} volume
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.setAdVolume = function(volume, callback) {};

addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);
addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);
addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);
addStaticToInterface(IVPAIDAdUnit, 'EVENTS',  EVENTS);


var VPAID1_METHODS = METHODS.filter(function(method) {
    return ['skipAd'].indexOf(method) === -1;
});

addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface (creative) {
    var result = VPAID1_METHODS.every(function(key) {
        return typeof creative[key] === 'function';
    });
    return result;
});

module.exports = IVPAIDAdUnit;

function addStaticToInterface(Interface, name, value) {
    Object.defineProperty(Interface, name, {
        writable: false,
        configurable: false,
        value: value
    });
}


},{}],10:[function(require,module,exports){
'use strict';

var IVPAIDAdUnit = require('./IVPAIDAdUnit');
var Subscriber = require('./subscriber');
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = require('./utils');
var METHODS = IVPAIDAdUnit.METHODS;
var ERROR = 'AdError';
var AD_CLICK = 'AdClickThru';
var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function (event) {
    return event != AD_CLICK;
});

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * VPAIDAdUnit
 * @class
 *
 * @param VPAIDCreative
 * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined
 * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined
 */
function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {
    this._isValid = checkVPAIDInterface(VPAIDCreative);
    if (this._isValid) {
        this._creative = VPAIDCreative;
        this._el = el;
        this._videoEl = video;
        this._iframe = iframe;
        this._subscribers = new Subscriber();
        utils.setFullSizeStyle(el);
        $addEventsSubscribers.call(this);
    }
}

VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);

/**
 * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not
 *
 * @return {boolean}
 */
VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {
    return this._isValid;
};

IVPAIDAdUnit.METHODS.forEach(function(method) {
    //NOTE: this methods arguments order are implemented differently from the spec
    var ignores = [
        'subscribe',
        'unsubscribe',
        'initAd'
    ];

    if (ignores.indexOf(method) !== -1) return;

    VPAIDAdUnit.prototype[method] = function () {
        var ariaty = IVPAIDAdUnit.prototype[method].length;
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        var callback = (ariaty === args.length) ? args.pop() : undefined;

        setTimeout(function () {
            var result, error = null;
            try {
                result = this._creative[method].apply(this._creative, args);
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});


/**
 * initAd concreate implementation
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object
 * @param {NodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {
    creativeData = creativeData || {};
    environmentVars = utils.extend({
        slot: this._el,
        videoSlot: this._videoEl
    }, environmentVars || {});

    setTimeout(function () {
        var error;
        try {
            this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        } catch (e) {
            error = e;
        }

        callOrTriggerEvent(callback, this._subscribers, error);
    }.bind(this), 0);
};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {
    this._subscribers.subscribe(handler, event, context);
};


/**
 * unsubscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 */
VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {
    this._subscribers.unsubscribe(handler, event);
};

//alias
VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;
VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;

IVPAIDAdUnit.GETTERS.forEach(function(getter) {
    VPAIDAdUnit.prototype[getter] = function (callback) {
        setTimeout(function () {

            var result, error = null;
            try {
                result = this._creative[getter]();
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * setAdVolume
 *
 * @param volume
 * @param {nodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {
    setTimeout(function () {

        var result, error = null;
        try {
            this._creative.setAdVolume(volume);
            result = this._creative.getAdVolume();
        } catch(e) {
            error = e;
        }

        if (!error) {
            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);
        }
        callOrTriggerEvent(callback, this._subscribers, error, result);
    }.bind(this), 0);
};

VPAIDAdUnit.prototype._destroy = function destroy() {
    this.stopAd();
    this._subscribers.unsubscribeAll();
};

function $addEventsSubscribers() {
    // some ads implement
    // so they only handle one subscriber
    // to handle this we create our one
    FILTERED_EVENTS.forEach(function (event) {
        this._creative.subscribe($trigger.bind(this, event), event);
    }.bind(this));

    // map the click event to be an object instead of depending of the order of the arguments
    // and to be consistent with the flash
    this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);

    // because we are adding the element inside the iframe
    // the user is not able to click in the video
    if (this._videoEl) {
        var documentElement = this._iframe.contentDocument.documentElement;
        var videoEl = this._videoEl;
        documentElement.addEventListener('click', function(e) {
            if (e.target === documentElement) {
                videoEl.click();
            }
        });
    }
}

function $clickThruHook(url, id, playerHandles) {
    this._subscribers.triggerSync(AD_CLICK, {url: url, id: id, playerHandles: playerHandles});
}

function $trigger(event) {
    // TODO avoid leaking arguments
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    this._subscribers.trigger(event, Array.prototype.slice(arguments, 1));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;


},{"./IVPAIDAdUnit":9,"./subscriber":12,"./utils":13}],11:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = require('./VPAIDAdUnit');

var defaultTemplate = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body style="margin:0;padding:0"><div class="ad-element"></div>' +
    '<script type="text/javascript" src="{{iframeURL_JS}}"></script>' +
    '<script type="text/javascript">' +
    'window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');' +
    '</script>' +
    '</body>' +
    '</html>';

var AD_STOPPED = 'AdStopped';

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDHTML5Client
 * @class
 *
 * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot
 * @param {HTMLVideoElement} video default video element to be used by adUnit
 * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template
 * @param {object} [vpaidOptions] timeout: when loading adUnit
 */
function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {
    templateConfig = templateConfig || {};

    this._id = unique();
    this._destroyed = false;

    this._frameContainer = utils.createElementInEl(el, 'div');
    this._videoEl = video;
    this._vpaidOptions = vpaidOptions || {timeout: 10000};

    this._templateConfig = {
        template: templateConfig.template || defaultTemplate,
        extraOptions: templateConfig.extraOptions || {}
    };
}

/**
 * destroy
 *
 */
VPAIDHTML5Client.prototype.destroy = function destroy() {
    if (this._destroyed) {
        return;
    }
    this._destroyed = true;
    $unloadPreviousAdUnit.call(this);
};

/**
 * isDestroyed
 *
 * @return {boolean}
 */
VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {
    return this._destroyed;
};

/**
 * loadAdUnit
 *
 * @param {string} adURL url of the js of the adUnit
 * @param {nodeStyleCallback} callback
 */
VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {
    $throwIfDestroyed.call(this);
    $unloadPreviousAdUnit.call(this);
    var that = this;

    var frame = utils.createIframeWithContent(
        this._frameContainer,
        this._templateConfig.template,
        utils.extend({
            iframeURL_JS: adURL,
            iframeID: this.getID(),
            origin: getOrigin()
        }, this._templateConfig.extraOptions)
    );

    this._frame = frame;

    this._onLoad = utils.callbackTimeout(
        this._vpaidOptions.timeout,
        onLoad.bind(this),
        onTimeout.bind(this)
    );

    window.addEventListener('message', this._onLoad);

    function onLoad (e) {
        /*jshint validthis: false */
        //don't clear timeout
        if (e.origin !== getOrigin()) return;
        var result = JSON.parse(e.data);

        //don't clear timeout
        if (result.id !== that.getID()) return;

        var adUnit, error, createAd;
        if (!that._frame.contentWindow) {

            error = 'the iframe is not anymore in the DOM tree';

        } else {
            createAd = that._frame.contentWindow.getVPAIDAd;
            error = utils.validate(typeof createAd === 'function', 'the ad didn\'t return a function to create an ad');
        }

        if (!error) {
            var adEl = that._frame.contentWindow.document.querySelector('.ad-element');
            adUnit = new VPAIDAdUnit(createAd(), adEl, that._videoEl, that._frame);
            adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(that));
            error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');
        }

        that._adUnit = adUnit;
        $destroyLoadListener.call(that);
        callback(error, error ? null : adUnit);

        //clear timeout
        return true;
    }

    function onTimeout() {
        callback('timeout', null);
    }
};

/**
 * unloadAdUnit
 *
 */
VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {
    $unloadPreviousAdUnit.call(this);
};

/**
 * getID will return the unique id
 *
 * @return {string}
 */
VPAIDHTML5Client.prototype.getID = function () {
    return this._id;
};


/**
 * $removeEl
 *
 * @param {string} key
 */
function $removeEl(key) {
    var el = this[key];
    if (el) {
        el.remove();
        delete this[key];
    }
}

function $adDestroyed() {
    $removeAdElements.call(this);
    delete this._adUnit;
}

function $unloadPreviousAdUnit() {
    $removeAdElements.call(this);
    $destroyAdUnit.call(this);
}

function $removeAdElements() {
    $removeEl.call(this, '_frame');
    $destroyLoadListener.call(this);
}

/**
 * $destroyLoadListener
 *
 */
function $destroyLoadListener() {
    if (this._onLoad) {
        window.removeEventListener('message', this._onLoad);
        utils.clearCallbackTimeout(this._onLoad);
        delete this._onLoad;
    }
}


function $destroyAdUnit() {
    if (this._adUnit) {
        this._adUnit.stopAd();
        delete this._adUnit;
    }
}

/**
 * $throwIfDestroyed
 *
 */
function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error ('VPAIDHTML5Client already destroyed!');
    }
}

function getOrigin() {
    if( window.location.origin ) {
        return window.location.origin;
    }
    else {
        return window.location.protocol + "//" +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port: '');
    }
}

module.exports = VPAIDHTML5Client;


},{"./VPAIDAdUnit":10,"./utils":13}],12:[function(require,module,exports){
'use strict';

function Subscriber() {
    this._subscribers = {};
}

Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {
    if (!this.isHandlerAttached(handler, eventName)) {
        this.get(eventName).push({handler: handler, context: context, eventName: eventName});
    }
};

Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {
    this._subscribers[eventName] = this.get(eventName).filter(function (subscriber) {
        return handler !== subscriber.handler;
    });
};

Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {
    this._subscribers = {};
};

Subscriber.prototype.trigger = function(eventName, data) {
    var that = this;
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        setTimeout(function () {
            if (that.isHandlerAttached(subscriber.handler, subscriber.eventName)) {
                subscriber.handler.call(subscriber.context, data);
            }
        }, 0);
    });
};

Subscriber.prototype.triggerSync = function(eventName, data) {
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        subscriber.handler.call(subscriber.context, data);
    });
};

Subscriber.prototype.get = function get(eventName) {
    if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
    }
    return this._subscribers[eventName];
};

Subscriber.prototype.isHandlerAttached = function isHandlerAttached(handler, eventName) {
    return this.get(eventName).some(function(subscriber) {
        return handler === subscriber.handler;
    })
};

module.exports = Subscriber;


},{}],13:[function(require,module,exports){
'use strict';

/**
 * noop a empty function
 */
function noop() {}

/**
 * validate if is not validate will return an Error with the message
 *
 * @param {boolean} isValid
 * @param {string} message
 */
function validate(isValid, message) {
    return isValid ? null : new Error(message);
}

var timeouts = {};
/**
 * clearCallbackTimeout
 *
 * @param {function} func handler to remove
 */
function clearCallbackTimeout(func) {
    var timeout = timeouts[func];
    if (timeout) {
        clearTimeout(timeout);
        delete timeouts[func];
    }
}

/**
 * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called
 *
 * @param {number} timer
 * @param {function} onSuccess
 * @param {function} onTimeout
 */
function callbackTimeout(timer, onSuccess, onTimeout) {
    var callback, timeout;

    timeout = setTimeout(function () {
        onSuccess = noop;
        delete timeout[callback];
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        if (onSuccess.apply(this, arguments)) {
            clearCallbackTimeout(callback);
        }
    };

    timeouts[callback] = timeout;

    return callback;
}


/**
 * createElementInEl
 *
 * @param {HTMLElement} parent
 * @param {string} tagName
 * @param {string} id
 */
function createElementInEl(parent, tagName, id) {
    var nEl = document.createElement(tagName);
    if (id) nEl.id = id;
    parent.appendChild(nEl);
    return nEl;
}

/**
 * createIframeWithContent
 *
 * @param {HTMLElement} parent
 * @param {string} template simple template using {{var}}
 * @param {object} data
 */
function createIframeWithContent(parent, template, data) {
    var iframe = createIframe(parent, null, data.zIndex);
    if (!setIframeContent(iframe, simpleTemplate(template, data))) return;
    return iframe;
}

/**
 * createIframe
 *
 * @param {HTMLElement} parent
 * @param {string} url
 */
function createIframe(parent, url, zIndex) {
    var nEl = document.createElement('iframe');
    nEl.src = url || 'about:blank';
    nEl.marginWidth = '0';
    nEl.marginHeight = '0';
    nEl.frameBorder = '0';
    nEl.width = '100%';
    nEl.height = '100%';
    setFullSizeStyle(nEl);

    if(zIndex){
        nEl.style.zIndex = zIndex;
    }

    nEl.setAttribute('SCROLLING','NO');
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

function setFullSizeStyle(element) {
    element.style.position = 'absolute';
    element.style.left = '0';
    element.style.top = '0';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.border = 'none';
    element.style.width = '100%';
    element.style.height = '100%';
}

/**
 * simpleTemplate
 *
 * @param {string} template
 * @param {object} data
 */
function simpleTemplate(template, data) {
    Object.keys(data).forEach(function (key) {
        var value = (typeof value === 'object') ? JSON.stringify(data[key]) : data[key];
        template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
    });
    return template;
}

/**
 * setIframeContent
 *
 * @param {HTMLIframeElement} iframeEl
 * @param content
 */
function setIframeContent(iframeEl, content) {
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;
    if (!iframeDoc) return false;

    iframeDoc.write(content);

    return true;
}


/**
 * extend object with keys from another object
 *
 * @param {object} toExtend
 * @param {object} fromSource
 */
function extend(toExtend, fromSource) {
    Object.keys(fromSource).forEach(function(key) {
        toExtend[key] = fromSource[key];
    });
    return toExtend;
}


/**
 * unique will create a unique string everytime is called, sequentially and prefixed
 *
 * @param {string} prefix
 */
function unique(prefix) {
    var count = -1;
    return function () {
        return prefix + '_' + (++count);
    };
}

module.exports = {
    noop: noop,
    validate: validate,
    clearCallbackTimeout: clearCallbackTimeout,
    callbackTimeout: callbackTimeout,
    createElementInEl: createElementInEl,
    createIframeWithContent: createIframeWithContent,
    createIframe: createIframe,
    setFullSizeStyle: setFullSizeStyle,
    simpleTemplate: simpleTemplate,
    setIframeContent: setIframeContent,
    extend: extend,
    unique: unique
};


},{}],14:[function(require,module,exports){
/*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

/* global ActiveXObject: false */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node, CommonJS-like
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.swfobject = factory();
  }
}(this, function () {

    var UNDEF = "undefined",
        OBJECT = "object",
        SHOCKWAVE_FLASH = "Shockwave Flash",
        SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
        FLASH_MIME_TYPE = "application/x-shockwave-flash",
        EXPRESS_INSTALL_ID = "SWFObjectExprInst",
        ON_READY_STATE_CHANGE = "onreadystatechange",

        win = window,
        doc = document,
        nav = navigator,

        plugin = false,
        domLoadFnArr = [],
        regObjArr = [],
        objIdArr = [],
        listenersArr = [],
        storedFbContent,
        storedFbContentId,
        storedCallbackFn,
        storedCallbackObj,
        isDomLoaded = false,
        isExpressInstallActive = false,
        dynamicStylesheet,
        dynamicStylesheetMedia,
        autoHideShow = true,
        encodeURIEnabled = false,

    /* Centralized function for browser feature detection
        - User agent string detection is only used when no good alternative is possible
        - Is executed directly for optimal performance
    */
    ua = function () {
        var w3cdom = typeof doc.getElementById !== UNDEF && typeof doc.getElementsByTagName !== UNDEF && typeof doc.createElement !== UNDEF,
            u = nav.userAgent.toLowerCase(),
            p = nav.platform.toLowerCase(),
            windows = p ? /win/.test(p) : /win/.test(u),
            mac = p ? /mac/.test(p) : /mac/.test(u),
            webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
            ie = nav.appName === "Microsoft Internet Explorer",
            playerVersion = [0, 0, 0],
            d = null;
        if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
            d = nav.plugins[SHOCKWAVE_FLASH].description;
            // nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
            if (d && (typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
                plugin = true;
                ie = false; // cascaded feature detection for Internet Explorer
                d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                playerVersion[0] = toInt(d.replace(/^(.*)\..*$/, "$1"));
                playerVersion[1] = toInt(d.replace(/^.*\.(.*)\s.*$/, "$1"));
                playerVersion[2] = /[a-zA-Z]/.test(d) ? toInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0;
            }
        }
        else if (typeof win.ActiveXObject !== UNDEF) {
            try {
                var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                if (a) { // a will return null when ActiveX is disabled
                    d = a.GetVariable("$version");
                    if (d) {
                        ie = true; // cascaded feature detection for Internet Explorer
                        d = d.split(" ")[1].split(",");
                        playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
                    }
                }
            }
            catch (e) {}
        }
        return {w3: w3cdom, pv: playerVersion, wk: webkit, ie: ie, win: windows, mac: mac};
    }(),

    /* Cross-browser onDomLoad
        - Will fire an event as soon as the DOM of a web page is loaded
        - Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
        - Regular onload serves as fallback
    */
    onDomLoad = function () {
        if (!ua.w3) { return; }
        if ((typeof doc.readyState !== UNDEF && (doc.readyState === "complete" || doc.readyState === "interactive")) || (typeof doc.readyState === UNDEF && (doc.getElementsByTagName("body")[0] || doc.body))) { // function is fired after onload, e.g. when script is inserted dynamically
            callDomLoadFunctions();
        }
        if (!isDomLoaded) {
            if (typeof doc.addEventListener !== UNDEF) {
                doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false);
            }
            if (ua.ie) {
                doc.attachEvent(ON_READY_STATE_CHANGE, function detach() {
                    if (doc.readyState === "complete") {
                        doc.detachEvent(ON_READY_STATE_CHANGE, detach);
                        callDomLoadFunctions();
                    }
                });
                if (win == top) { // if not inside an iframe
                    (function checkDomLoadedIE() {
                        if (isDomLoaded) { return; }
                        try {
                            doc.documentElement.doScroll("left");
                        }
                        catch (e) {
                            setTimeout(checkDomLoadedIE, 0);
                            return;
                        }
                        callDomLoadFunctions();
                    }());
                }
            }
            if (ua.wk) {
                (function checkDomLoadedWK() {
                    if (isDomLoaded) { return; }
                    if (!/loaded|complete/.test(doc.readyState)) {
                        setTimeout(checkDomLoadedWK, 0);
                        return;
                    }
                    callDomLoadFunctions();
                }());
            }
        }
    }();

    function callDomLoadFunctions() {
        if (isDomLoaded || !document.getElementsByTagName("body")[0]) { return; }
        try { // test if we can really add/remove elements to/from the DOM; we don't want to fire it too early
            var t, span = createElement("span");
            span.style.display = "none"; //hide the span in case someone has styled spans via CSS
            t = doc.getElementsByTagName("body")[0].appendChild(span);
            t.parentNode.removeChild(t);
            t = null; //clear the variables
            span = null;
        }
        catch (e) { return; }
        isDomLoaded = true;
        var dl = domLoadFnArr.length;
        for (var i = 0; i < dl; i++) {
            domLoadFnArr[i]();
        }
    }

    function addDomLoadEvent(fn) {
        if (isDomLoaded) {
            fn();
        }
        else {
            domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
        }
    }

    /* Cross-browser onload
        - Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
        - Will fire an event as soon as a web page including all of its assets are loaded
     */
    function addLoadEvent(fn) {
        if (typeof win.addEventListener !== UNDEF) {
            win.addEventListener("load", fn, false);
        }
        else if (typeof doc.addEventListener !== UNDEF) {
            doc.addEventListener("load", fn, false);
        }
        else if (typeof win.attachEvent !== UNDEF) {
            addListener(win, "onload", fn);
        }
        else if (typeof win.onload === "function") {
            var fnOld = win.onload;
            win.onload = function () {
                fnOld();
                fn();
            };
        }
        else {
            win.onload = fn;
        }
    }

    /* Detect the Flash Player version for non-Internet Explorer browsers
        - Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
          a. Both release and build numbers can be detected
          b. Avoid wrong descriptions by corrupt installers provided by Adobe
          c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
        - Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
    */
    function testPlayerVersion() {
        var b = doc.getElementsByTagName("body")[0];
        var o = createElement(OBJECT);
        o.setAttribute("style", "visibility: hidden;");
        o.setAttribute("type", FLASH_MIME_TYPE);
        var t = b.appendChild(o);
        if (t) {
            var counter = 0;
            (function checkGetVariable() {
                if (typeof t.GetVariable !== UNDEF) {
                    try {
                        var d = t.GetVariable("$version");
                        if (d) {
                            d = d.split(" ")[1].split(",");
                            ua.pv = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
                        }
                    } catch (e) {
                        //t.GetVariable("$version") is known to fail in Flash Player 8 on Firefox
                        //If this error is encountered, assume FP8 or lower. Time to upgrade.
                        ua.pv = [8, 0, 0];
                    }
                }
                else if (counter < 10) {
                    counter++;
                    setTimeout(checkGetVariable, 10);
                    return;
                }
                b.removeChild(o);
                t = null;
                matchVersions();
            }());
        }
        else {
            matchVersions();
        }
    }

    /* Perform Flash Player and SWF version matching; static publishing only
    */
    function matchVersions() {
        var rl = regObjArr.length;
        if (rl > 0) {
            for (var i = 0; i < rl; i++) { // for each registered object element
                var id = regObjArr[i].id;
                var cb = regObjArr[i].callbackFn;
                var cbObj = {success: false, id: id};
                if (ua.pv[0] > 0) {
                    var obj = getElementById(id);
                    if (obj) {
                        if (hasPlayerVersion(regObjArr[i].swfVersion) && !(ua.wk && ua.wk < 312)) { // Flash Player version >= published SWF version: Houston, we have a match!
                            setVisibility(id, true);
                            if (cb) {
                                cbObj.success = true;
                                cbObj.ref = getObjectById(id);
                                cbObj.id = id;
                                cb(cbObj);
                            }
                        }
                        else if (regObjArr[i].expressInstall && canExpressInstall()) { // show the Adobe Express Install dialog if set by the web page author and if supported
                            var att = {};
                            att.data = regObjArr[i].expressInstall;
                            att.width = obj.getAttribute("width") || "0";
                            att.height = obj.getAttribute("height") || "0";
                            if (obj.getAttribute("class")) { att.styleclass = obj.getAttribute("class"); }
                            if (obj.getAttribute("align")) { att.align = obj.getAttribute("align"); }
                            // parse HTML object param element's name-value pairs
                            var par = {};
                            var p = obj.getElementsByTagName("param");
                            var pl = p.length;
                            for (var j = 0; j < pl; j++) {
                                if (p[j].getAttribute("name").toLowerCase() !== "movie") {
                                    par[p[j].getAttribute("name")] = p[j].getAttribute("value");
                                }
                            }
                            showExpressInstall(att, par, id, cb);
                        }
                        else { // Flash Player and SWF version mismatch or an older Webkit engine that ignores the HTML object element's nested param elements: display fallback content instead of SWF
                            displayFbContent(obj);
                            if (cb) { cb(cbObj); }
                        }
                    }
                }
                else { // if no Flash Player is installed or the fp version cannot be detected we let the HTML object element do its job (either show a SWF or fallback content)
                    setVisibility(id, true);
                    if (cb) {
                        var o = getObjectById(id); // test whether there is an HTML object element or not
                        if (o && typeof o.SetVariable !== UNDEF) {
                            cbObj.success = true;
                            cbObj.ref = o;
                            cbObj.id = o.id;
                        }
                        cb(cbObj);
                    }
                }
            }
        }
    }

    /* Main function
        - Will preferably execute onDomLoad, otherwise onload (as a fallback)
    */
    domLoadFnArr[0] = function () {
        if (plugin) {
            testPlayerVersion();
        }
        else {
            matchVersions();
        }
    };

    function getObjectById(objectIdStr) {
        var r = null,
            o = getElementById(objectIdStr);

        if (o && o.nodeName.toUpperCase() === "OBJECT") {
            //If targeted object is valid Flash file
            if (typeof o.SetVariable !== UNDEF) {
                r = o;
            } else {
                //If SetVariable is not working on targeted object but a nested object is
                //available, assume classic nested object markup. Return nested object.

                //If SetVariable is not working on targeted object and there is no nested object,
                //return the original object anyway. This is probably new simplified markup.

                r = o.getElementsByTagName(OBJECT)[0] || o;
            }
        }

        return r;
    }

    /* Requirements for Adobe Express Install
        - only one instance can be active at a time
        - fp 6.0.65 or higher
        - Win/Mac OS only
        - no Webkit engines older than version 312
    */
    function canExpressInstall() {
        return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
    }

    /* Show the Adobe Express Install dialog
        - Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
    */
    function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {

        var obj = getElementById(replaceElemIdStr);

        //Ensure that replaceElemIdStr is really a string and not an element
        replaceElemIdStr = getId(replaceElemIdStr);

        isExpressInstallActive = true;
        storedCallbackFn = callbackFn || null;
        storedCallbackObj = {success: false, id: replaceElemIdStr};

        if (obj) {
            if (obj.nodeName.toUpperCase() === "OBJECT") { // static publishing
                storedFbContent = abstractFbContent(obj);
                storedFbContentId = null;
            }
            else { // dynamic publishing
                storedFbContent = obj;
                storedFbContentId = replaceElemIdStr;
            }
            att.id = EXPRESS_INSTALL_ID;
            if (typeof att.width === UNDEF || (!/%$/.test(att.width) && toInt(att.width) < 310)) { att.width = "310"; }
            if (typeof att.height === UNDEF || (!/%$/.test(att.height) && toInt(att.height) < 137)) { att.height = "137"; }
            var pt = ua.ie ? "ActiveX" : "PlugIn",
                fv = "MMredirectURL=" + encodeURIComponent(win.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + pt + "&MMdoctitle=" + encodeURIComponent(doc.title.slice(0, 47) + " - Flash Player Installation");
            if (typeof par.flashvars !== UNDEF) {
                par.flashvars += "&" + fv;
            }
            else {
                par.flashvars = fv;
            }
            // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
            // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            if (ua.ie && obj.readyState != 4) {
                var newObj = createElement("div");
                replaceElemIdStr += "SWFObjectNew";
                newObj.setAttribute("id", replaceElemIdStr);
                obj.parentNode.insertBefore(newObj, obj); // insert placeholder div that will be replaced by the object element that loads expressinstall.swf
                obj.style.display = "none";
                removeSWF(obj); //removeSWF accepts elements now
            }
            createSWF(att, par, replaceElemIdStr);
        }
    }

    /* Functions to abstract and display fallback content
    */
    function displayFbContent(obj) {
        if (ua.ie && obj.readyState != 4) {
            // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
            // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            obj.style.display = "none";
            var el = createElement("div");
            obj.parentNode.insertBefore(el, obj); // insert placeholder div that will be replaced by the fallback content
            el.parentNode.replaceChild(abstractFbContent(obj), el);
            removeSWF(obj); //removeSWF accepts elements now
        }
        else {
            obj.parentNode.replaceChild(abstractFbContent(obj), obj);
        }
    }

    function abstractFbContent(obj) {
        var ac = createElement("div");
        if (ua.win && ua.ie) {
            ac.innerHTML = obj.innerHTML;
        }
        else {
            var nestedObj = obj.getElementsByTagName(OBJECT)[0];
            if (nestedObj) {
                var c = nestedObj.childNodes;
                if (c) {
                    var cl = c.length;
                    for (var i = 0; i < cl; i++) {
                        if (!(c[i].nodeType == 1 && c[i].nodeName === "PARAM") && !(c[i].nodeType == 8)) {
                            ac.appendChild(c[i].cloneNode(true));
                        }
                    }
                }
            }
        }
        return ac;
    }

    function createIeObject(url, paramStr) {
        var div = createElement("div");
        div.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + url + "'>" + paramStr + "</object>";
        return div.firstChild;
    }

    /* Cross-browser dynamic SWF creation
    */
    function createSWF(attObj, parObj, id) {
        var r, el = getElementById(id);
        id = getId(id); // ensure id is truly an ID and not an element

        if (ua.wk && ua.wk < 312) { return r; }

        if (el) {
            var o = (ua.ie) ? createElement("div") : createElement(OBJECT),
                attr,
                attrLower,
                param;

            if (typeof attObj.id === UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the fallback content
                attObj.id = id;
            }

            //Add params
            for (param in parObj) {
                //filter out prototype additions from other potential libraries and IE specific param element
                if (parObj.hasOwnProperty(param) && param.toLowerCase() !== "movie") {
                    createObjParam(o, param, parObj[param]);
                }
            }

            //Create IE object, complete with param nodes
            if (ua.ie) { o = createIeObject(attObj.data, o.innerHTML); }

            //Add attributes to object
            for (attr in attObj) {
                if (attObj.hasOwnProperty(attr)) { // filter out prototype additions from other potential libraries
                    attrLower = attr.toLowerCase();

                    // 'class' is an ECMA4 reserved keyword
                    if (attrLower === "styleclass") {
                        o.setAttribute("class", attObj[attr]);
                    } else if (attrLower !== "classid" && attrLower !== "data") {
                        o.setAttribute(attr, attObj[attr]);
                    }
                }
            }

            if (ua.ie) {
                objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
            } else {
                o.setAttribute("type", FLASH_MIME_TYPE);
                o.setAttribute("data", attObj.data);
            }

            el.parentNode.replaceChild(o, el);
            r = o;
        }

        return r;
    }

    function createObjParam(el, pName, pValue) {
        var p = createElement("param");
        p.setAttribute("name", pName);
        p.setAttribute("value", pValue);
        el.appendChild(p);
    }

    /* Cross-browser SWF removal
        - Especially needed to safely and completely remove a SWF in Internet Explorer
    */
    function removeSWF(id) {
        var obj = getElementById(id);
        if (obj && obj.nodeName.toUpperCase() === "OBJECT") {
            if (ua.ie) {
                obj.style.display = "none";
                (function removeSWFInIE() {
                    if (obj.readyState == 4) {
                        //This step prevents memory leaks in Internet Explorer
                        for (var i in obj) {
                            if (typeof obj[i] === "function") {
                                obj[i] = null;
                            }
                        }
                        obj.parentNode.removeChild(obj);
                    } else {
                        setTimeout(removeSWFInIE, 10);
                    }
                }());
            }
            else {
                obj.parentNode.removeChild(obj);
            }
        }
    }

    function isElement(id) {
        return (id && id.nodeType && id.nodeType === 1);
    }

    function getId(thing) {
        return (isElement(thing)) ? thing.id : thing;
    }

    /* Functions to optimize JavaScript compression
    */
    function getElementById(id) {

        //Allow users to pass an element OR an element's ID
        if (isElement(id)) { return id; }

        var el = null;
        try {
            el = doc.getElementById(id);
        }
        catch (e) {}
        return el;
    }

    function createElement(el) {
        return doc.createElement(el);
    }

    //To aid compression; replaces 14 instances of pareseInt with radix
    function toInt(str) {
        return parseInt(str, 10);
    }

    /* Updated attachEvent function for Internet Explorer
        - Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
    */
    function addListener(target, eventType, fn) {
        target.attachEvent(eventType, fn);
        listenersArr[listenersArr.length] = [target, eventType, fn];
    }

    /* Flash Player and SWF content version matching
    */
    function hasPlayerVersion(rv) {
        rv += ""; //Coerce number to string, if needed.
        var pv = ua.pv, v = rv.split(".");
        v[0] = toInt(v[0]);
        v[1] = toInt(v[1]) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
        v[2] = toInt(v[2]) || 0;
        return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
    }

    /* Cross-browser dynamic CSS creation
        - Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
    */
    function createCSS(sel, decl, media, newStyle) {
        var h = doc.getElementsByTagName("head")[0];
        if (!h) { return; } // to also support badly authored HTML pages that lack a head element
        var m = (typeof media === "string") ? media : "screen";
        if (newStyle) {
            dynamicStylesheet = null;
            dynamicStylesheetMedia = null;
        }
        if (!dynamicStylesheet || dynamicStylesheetMedia != m) {
            // create dynamic stylesheet + get a global reference to it
            var s = createElement("style");
            s.setAttribute("type", "text/css");
            s.setAttribute("media", m);
            dynamicStylesheet = h.appendChild(s);
            if (ua.ie && typeof doc.styleSheets !== UNDEF && doc.styleSheets.length > 0) {
                dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
            }
            dynamicStylesheetMedia = m;
        }
        // add style rule
        if (dynamicStylesheet) {
            if (typeof dynamicStylesheet.addRule !== UNDEF) {
                dynamicStylesheet.addRule(sel, decl);
            } else if (typeof doc.createTextNode !== UNDEF) {
                dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
            }
        }
    }

    function setVisibility(id, isVisible) {
        if (!autoHideShow) { return; }
        var v = isVisible ? "visible" : "hidden",
            el = getElementById(id);
        if (isDomLoaded && el) {
            el.style.visibility = v;
        } else if (typeof id === "string") {
            createCSS("#" + id, "visibility:" + v);
        }
    }

    /* Filter to avoid XSS attacks
    */
    function urlEncodeIfNecessary(s) {
        var regex = /[\\\"<>\.;]/;
        var hasBadChars = regex.exec(s) !== null;
        return hasBadChars && typeof encodeURIComponent !== UNDEF ? encodeURIComponent(s) : s;
    }

    /* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
    */
    var cleanup = function () {
        if (ua.ie) {
            window.attachEvent("onunload", function () {
                // remove listeners to avoid memory leaks
                var ll = listenersArr.length;
                for (var i = 0; i < ll; i++) {
                    listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
                }
                // cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
                var il = objIdArr.length;
                for (var j = 0; j < il; j++) {
                    removeSWF(objIdArr[j]);
                }
                // cleanup library's main closures to avoid memory leaks
                for (var k in ua) {
                    ua[k] = null;
                }
                ua = null;
                for (var l in swfobject) {
                    swfobject[l] = null;
                }
                swfobject = null;
            });
        }
    }();

    return {
        /* Public API
            - Reference: http://code.google.com/p/swfobject/wiki/documentation
        */
        registerObject: function (objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
            if (ua.w3 && objectIdStr && swfVersionStr) {
                var regObj = {};
                regObj.id = objectIdStr;
                regObj.swfVersion = swfVersionStr;
                regObj.expressInstall = xiSwfUrlStr;
                regObj.callbackFn = callbackFn;
                regObjArr[regObjArr.length] = regObj;
                setVisibility(objectIdStr, false);
            }
            else if (callbackFn) {
                callbackFn({success: false, id: objectIdStr});
            }
        },

        getObjectById: function (objectIdStr) {
            if (ua.w3) {
                return getObjectById(objectIdStr);
            }
        },

        embedSWF: function (swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {

            var id = getId(replaceElemIdStr),
                callbackObj = {success: false, id: id};

            if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
                setVisibility(id, false);
                addDomLoadEvent(function () {
                    widthStr += ""; // auto-convert to string
                    heightStr += "";
                    var att = {};
                    if (attObj && typeof attObj === OBJECT) {
                        for (var i in attObj) { // copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
                            att[i] = attObj[i];
                        }
                    }
                    att.data = swfUrlStr;
                    att.width = widthStr;
                    att.height = heightStr;
                    var par = {};
                    if (parObj && typeof parObj === OBJECT) {
                        for (var j in parObj) { // copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
                            par[j] = parObj[j];
                        }
                    }
                    if (flashvarsObj && typeof flashvarsObj === OBJECT) {
                        for (var k in flashvarsObj) { // copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
                            if (flashvarsObj.hasOwnProperty(k)) {

                                var key = (encodeURIEnabled) ? encodeURIComponent(k) : k,
                                    value = (encodeURIEnabled) ? encodeURIComponent(flashvarsObj[k]) : flashvarsObj[k];

                                if (typeof par.flashvars !== UNDEF) {
                                    par.flashvars += "&" + key + "=" + value;
                                }
                                else {
                                    par.flashvars = key + "=" + value;
                                }

                            }
                        }
                    }
                    if (hasPlayerVersion(swfVersionStr)) { // create SWF
                        var obj = createSWF(att, par, replaceElemIdStr);
                        if (att.id == id) {
                            setVisibility(id, true);
                        }
                        callbackObj.success = true;
                        callbackObj.ref = obj;
                        callbackObj.id = obj.id;
                    }
                    else if (xiSwfUrlStr && canExpressInstall()) { // show Adobe Express Install
                        att.data = xiSwfUrlStr;
                        showExpressInstall(att, par, replaceElemIdStr, callbackFn);
                        return;
                    }
                    else { // show fallback content
                        setVisibility(id, true);
                    }
                    if (callbackFn) { callbackFn(callbackObj); }
                });
            }
            else if (callbackFn) { callbackFn(callbackObj); }
        },

        switchOffAutoHideShow: function () {
            autoHideShow = false;
        },

        enableUriEncoding: function (bool) {
            encodeURIEnabled = (typeof bool === UNDEF) ? true : bool;
        },

        ua: ua,

        getFlashPlayerVersion: function () {
            return {major: ua.pv[0], minor: ua.pv[1], release: ua.pv[2]};
        },

        hasFlashPlayerVersion: hasPlayerVersion,

        createSWF: function (attObj, parObj, replaceElemIdStr) {
            if (ua.w3) {
                return createSWF(attObj, parObj, replaceElemIdStr);
            }
            else {
                return undefined;
            }
        },

        showExpressInstall: function (att, par, replaceElemIdStr, callbackFn) {
            if (ua.w3 && canExpressInstall()) {
                showExpressInstall(att, par, replaceElemIdStr, callbackFn);
            }
        },

        removeSWF: function (objElemIdStr) {
            if (ua.w3) {
                removeSWF(objElemIdStr);
            }
        },

        createCSS: function (selStr, declStr, mediaStr, newStyleBoolean) {
            if (ua.w3) {
                createCSS(selStr, declStr, mediaStr, newStyleBoolean);
            }
        },

        addDomLoadEvent: addDomLoadEvent,

        addLoadEvent: addLoadEvent,

        getQueryParamValue: function (param) {
            var q = doc.location.search || doc.location.hash;
            if (q) {
                if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
                if (!param) {
                    return urlEncodeIfNecessary(q);
                }
                var pairs = q.split("&");
                for (var i = 0; i < pairs.length; i++) {
                    if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                        return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
                    }
                }
            }
            return "";
        },

        // For internal usage only
        expressInstallCallback: function () {
            if (isExpressInstallActive) {
                var obj = getElementById(EXPRESS_INSTALL_ID);
                if (obj && storedFbContent) {
                    obj.parentNode.replaceChild(storedFbContent, obj);
                    if (storedFbContentId) {
                        setVisibility(storedFbContentId, true);
                        if (ua.ie) { storedFbContent.style.display = "block"; }
                    }
                    if (storedCallbackFn) { storedCallbackFn(storedCallbackObj); }
                }
                isExpressInstallActive = false;
            }
        },

        version: "2.3"

    };
}));

},{}],15:[function(require,module,exports){
'use strict';

var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

function Ad(adJTree) {
  if (!(this instanceof Ad)) {
    return new Ad(adJTree);
  }
  this.initialize(adJTree);
}

Ad.prototype.initialize = function(adJTree) {
  this.id = adJTree.attr('id');
  this.sequence = adJTree.attr('sequence');

  if(adJTree.inLine) {
    this.inLine = new InLine(adJTree.inLine);
  }

  if(adJTree.wrapper){
    this.wrapper = new Wrapper(adJTree.wrapper);
  }
};

module.exports = Ad;
},{"./InLine":18,"./Wrapper":28}],16:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');

var utilities = require('../../utils/utilityFunctions');

var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');


function Companion(companionJTree) {
  if (!(this instanceof Companion)) {
    return new Companion(companionJTree);
  }

  logger.info ("<Companion> found companion ad");
  logger.debug ("<Companion>  companionJTree:", companionJTree);

  //Required Elements
  this.creativeType = xml.attr(companionJTree.staticResource, 'creativeType');
  this.staticResource = xml.keyValue(companionJTree.staticResource);

  logger.info ("<Companion>  creativeType: " + this.creativeType);
  logger.info ("<Companion>  staticResource: " + this.staticResource);

  // Weird bug when the JXON tree is built it doesn't handle casing properly in this situation...
  var htmlResource = null;
  if (xml.keyValue(companionJTree.HTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.HTMLResource);
  } else if (xml.keyValue(companionJTree.hTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.hTMLResource);
  }

  if (htmlResource !== null)
  {
    logger.info ("<Companion> found html resource", htmlResource);
  }

  this.htmlResource = htmlResource;

  var iframeResource = null;
  if (xml.keyValue(companionJTree.IFrameResource)) {
    iframeResource = xml.keyValue(companionJTree.IFrameResource);
  } else if (xml.keyValue(companionJTree.iFrameresource)) {
    iframeResource = xml.keyValue(companionJTree.iFrameresource);
  }

  if (iframeResource !== null)
  {
    logger.info ("<Companion> found iframe resource", iframeResource);
  }

  this.iframeResource = iframeResource;

  //Optional fields
  this.id = xml.attr(companionJTree, 'id');
  this.width = xml.attr(companionJTree, 'width');
  this.height = xml.attr(companionJTree, 'height');
  this.expandedWidth = xml.attr(companionJTree, 'expandedWidth');
  this.expandedHeight = xml.attr(companionJTree, 'expandedHeight');
  this.scalable = xml.attr(companionJTree, 'scalable');
  this.maintainAspectRatio = xml.attr(companionJTree, 'maintainAspectRatio');
  this.minSuggestedDuration = xml.attr(companionJTree, 'minSuggestedDuration');
  this.apiFramework = xml.attr(companionJTree, 'apiFramework');
  this.companionClickThrough = xml.keyValue(companionJTree.companionClickThrough);
  this.trackingEvents = parseTrackingEvents(companionJTree.trackingEvents && companionJTree.trackingEvents.tracking);

  logger.info ("<Companion>  companionClickThrough: " + this.companionClickThrough);


  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData));
      });
    }
    return trackings;
  }
}

module.exports = Companion;
},{"../../utils/consoleLogger":41,"../../utils/utilityFunctions":47,"../../utils/xml":48,"./TrackingEvent":21}],17:[function(require,module,exports){
'use strict';

var Linear = require('./Linear');
var Companion = require('./Companion');
var utilities = require('../../utils/utilityFunctions');

function Creative(creativeJTree) {
  if(!(this instanceof Creative)) {
    return new Creative(creativeJTree);
  }

  this.id = creativeJTree.attr('id');
  this.sequence = creativeJTree.attr('sequence');
  this.adId = creativeJTree.attr('adId');
  this.apiFramework = creativeJTree.attr('apiFramework');

  if(creativeJTree.linear) {
    this.linear = new Linear(creativeJTree.linear);
  }

  if (creativeJTree.companionAds) {
    var companions = [];
    var companionAds = creativeJTree.companionAds && creativeJTree.companionAds.companion;
    if (utilities.isDefined(companionAds)) {
      companionAds = utilities.isArray(companionAds) ? companionAds : [companionAds];
      companionAds.forEach(function (companionData) {
        companions.push(new Companion(companionData));
      });
    }
    this.companionAds = companions;
  }
}

/**
 * Returns true if the browser supports at the creative.
 */
Creative.prototype.isSupported = function(){
  if(this.linear) {
    return this.linear.isSupported();
  }

  return true;
};

Creative.parseCreatives = function parseCreatives(creativesJTree) {
  var creatives = [];
  var creativesData;
  if (utilities.isDefined(creativesJTree) && utilities.isDefined(creativesJTree.creative)) {
    creativesData = utilities.isArray(creativesJTree.creative) ? creativesJTree.creative : [creativesJTree.creative];
    creativesData.forEach(function (creative) {
      creatives.push(new Creative(creative));
    });
  }
  return creatives;
};

module.exports = Creative;

},{"../../utils/utilityFunctions":47,"./Companion":16,"./Linear":19}],18:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function InLine(inlineJTree) {
  if (!(this instanceof InLine)) {
    return new InLine(inlineJTree);
  }

  //Required Fields
  this.adTitle = xml.keyValue(inlineJTree.adTitle);
  this.adSystem = xml.keyValue(inlineJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(inlineJTree.impression);
  this.creatives = Creative.parseCreatives(inlineJTree.creatives);

  //Optional Fields
  this.description = xml.keyValue(inlineJTree.description);
  this.advertiser = xml.keyValue(inlineJTree.advertiser);
  this.surveys = parseSurveys(inlineJTree.survey);
  this.error = xml.keyValue(inlineJTree.error);
  this.pricing = xml.keyValue(inlineJTree.pricing);
  this.extensions = inlineJTree.extensions;

  /*** Local Functions ***/
  function parseSurveys(inlineSurveys) {
    if (inlineSurveys) {
      return utilities.transformArray(utilities.isArray(inlineSurveys) ? inlineSurveys : [inlineSurveys], function (survey) {
        if(utilities.isNotEmptyString(survey.keyValue)){
          return {
            uri: survey.keyValue,
            type: survey.attr('type')
          };
        }

        return undefined;
      });
    }
    return [];
  }
}


/**
 * Returns true if the browser supports all the creatives.
 */
InLine.prototype.isSupported = function(){
  var i,len;

  if(this.creatives.length === 0) {
    return false;
  }

  for(i = 0, len = this.creatives.length; i< len; i+=1){
    if(!this.creatives[i].isSupported()){
      return false;
    }
  }
  return true;
};

module.exports = InLine;

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Creative":17,"./vastUtil":30}],19:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');
var MediaFile = require('./MediaFile');
var VideoClicks = require('./VideoClicks');

var utilities = require('../../utils/utilityFunctions');
var parsers = require('./parsers');

var xml = require('../../utils/xml');


function Linear(linearJTree) {
  if (!(this instanceof Linear)) {
    return new Linear(linearJTree);
  }

  //Required Elements
  this.duration = parsers.duration(xml.keyValue(linearJTree.duration));
  this.mediaFiles = parseMediaFiles(linearJTree.mediaFiles && linearJTree.mediaFiles.mediaFile);

  //Optional fields
  this.trackingEvents = parseTrackingEvents(linearJTree.trackingEvents && linearJTree.trackingEvents.tracking, this.duration);
  this.skipoffset = parsers.offset(xml.attr(linearJTree, 'skipoffset'), this.duration);

  if (linearJTree.videoClicks) {
    this.videoClicks = new VideoClicks(linearJTree.videoClicks);
  }

  if(linearJTree.adParameters) {
    this.adParameters = xml.keyValue(linearJTree.adParameters);

    if(xml.attr(linearJTree.adParameters, 'xmlEncoded')) {
      this.adParameters = xml.decode(this.adParameters);
    }
  }

  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents, duration) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData, duration));
      });
    }
    return trackings;
  }

  function parseMediaFiles(mediaFilesJxonTree) {
    var mediaFiles = [];
    if (utilities.isDefined(mediaFilesJxonTree)) {
      mediaFilesJxonTree = utilities.isArray(mediaFilesJxonTree) ? mediaFilesJxonTree : [mediaFilesJxonTree];

      mediaFilesJxonTree.forEach(function (mfData) {
        mediaFiles.push(new MediaFile(mfData));
      });
    }
    return mediaFiles;
  }
}

/**
 * Must return true if at least one of the MediaFiles' type is supported
 */
Linear.prototype.isSupported = function () {
  var i, len;
  for(i=0, len=this.mediaFiles.length; i<len; i+=1) {
    if(this.mediaFiles[i].isSupported()) {
      return true;
    }
  }

  return false;
};

module.exports = Linear;

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./MediaFile":20,"./TrackingEvent":21,"./VideoClicks":27,"./parsers":29}],20:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var vastUtil = require('./vastUtil');

var attributesList = [
  //Required attributes
  'delivery',
  'type',
  'width',
  'height',
  //Optional attributes
  'codec',
  'id',
  'bitrate',
  'minBitrate',
  'maxBitrate',
  'scalable',
  'maintainAspectRatio',
  'apiFramework'
];

function MediaFile(mediaFileJTree) {
  if (!(this instanceof MediaFile)) {
    return new MediaFile(mediaFileJTree);
  }

  //Required attributes
  this.src = xml.keyValue(mediaFileJTree);

  for(var x=0; x<attributesList.length; x++) {
    var attribute = attributesList[x];
    this[attribute] = mediaFileJTree.attr(attribute);
  }
}

MediaFile.prototype.isSupported = function(){
  if(vastUtil.isVPAID(this)) {
    return !!vastUtil.findSupportedVPAIDTech(this.type);
  }

  if (this.type === 'video/x-flv') {
    return vastUtil.isFlashSupported();
  }

  return true;
};

module.exports = MediaFile;

},{"../../utils/xml":48,"./vastUtil":30}],21:[function(require,module,exports){
'use strict';

var parsers = require('./parsers');

var xml = require('../../utils/xml');

function TrackingEvent(trackingJTree, duration) {
  if (!(this instanceof TrackingEvent)) {
    return new TrackingEvent(trackingJTree, duration);
  }

  this.name = trackingJTree.attr('event');
  this.uri = xml.keyValue(trackingJTree);

  if('progress' === this.name) {
    this.offset = parsers.offset(trackingJTree.attr('offset'), duration);
  }
}

module.exports = TrackingEvent;
},{"../../utils/xml":48,"./parsers":29}],22:[function(require,module,exports){
/* global options */

'use strict';

var Ad = require('./Ad');
var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var http = require('../../utils/http').http;
var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

var logger = require('../../utils/consoleLogger');

function VASTClient(options) {

    if (!(this instanceof VASTClient)) {
        return new VASTClient(options);
    }
    var defaultOptions = {
        WRAPPER_LIMIT: 5
    };

    options = options || {};
    this.settings = utilities.extend({}, options, defaultOptions);
    this.errorURLMacros = [];
}

VASTClient.prototype.getVASTResponse = function getVASTResponse(adTagUrl, callback) {
    var that = this;

    var error = sanityCheck(adTagUrl, callback);
    if (error) {
        if (utilities.isFunction(callback)) {
            return callback(error);
        }
        throw error;
    }


    async.waterfall([
        this._getVASTAd.bind(this, adTagUrl),
        buildVASTResponse
    ],
            callback);

    /*** Local functions ***/
    function buildVASTResponse(adsChain, cb) {
        try {
            var response = that._buildVASTResponse(adsChain);
            if (that.settings.skipOffset)
            {
                response.skipoffset = that.settings.skipOffset;
            }
            cb(null, response);
        } catch (e) {
            cb(e);
        }
    }

    function sanityCheck(adTagUrl, cb) {
        if (!adTagUrl) {
            return new VASTError('on VASTClient.getVASTResponse, missing ad tag URL');
        }

        if (!utilities.isFunction(cb)) {
            return new VASTError('on VASTClient.getVASTResponse, missing callback function');
        }
    }
};

VASTClient.prototype._getVASTAd = function (adTagUrl, callback) {
    var that = this;

    getAdWaterfall(adTagUrl, function (error, vastTree) {
        var waterfallAds = vastTree && utilities.isArray(vastTree.ads) ? vastTree.ads : null;
        if (error) {
            that._trackError(error, waterfallAds);
            return callback(error, waterfallAds);
        }

        getAd(waterfallAds.shift(), [], waterfallHandler);

        /*** Local functions ***/
        function waterfallHandler(error, adChain) {
            if (error) {
                that._trackError(error, adChain);
                if (waterfallAds.length > 0) {
                    getAd(waterfallAds.shift(), [], waterfallHandler);
                } else {
                    callback(error, adChain);
                }
            } else {
                callback(null, adChain);
            }
        }
    });

    /*** Local functions ***/
    function getAdWaterfall(adTagUrl, callback) {
        var requestVastXML = that._requestVASTXml.bind(that, adTagUrl);
        async.waterfall([
            requestVastXML,
            buildVastWaterfall
        ], callback);
    }

    function buildVastWaterfall(xmlStr, callback) {
        var vastTree;
        try {
            vastTree = xml.toJXONTree(xmlStr);
            logger.debug("built JXONTree from VAST response:", vastTree);

            if (utilities.isArray(vastTree.ad)) {
                vastTree.ads = vastTree.ad;
            } else if (vastTree.ad) {
                vastTree.ads = [vastTree.ad];
            } else {
                vastTree.ads = [];
            }
            callback(validateVASTTree(vastTree), vastTree);

        } catch (e) {
            callback(new VASTError("on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml", 100), null);
        }
    }

    function validateVASTTree(vastTree) {
        var vastVersion = xml.attr(vastTree, 'version');

        if (!vastTree.ad) {
            return new VASTError('on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree', 303);
        }

        if (vastVersion && (vastVersion != 3 && vastVersion != 2)) {
            return new VASTError('on VASTClient.getVASTAd.validateVASTTree, not supported VAST version "' + vastVersion + '"', 102);
        }

        return null;
    }

    function getAd(adTagUrl, adChain, callback) {
        if (adChain.length >= that.WRAPPER_LIMIT) {
            return callback(new VASTError("on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is " + that.WRAPPER_LIMIT + ")", 302), adChain);
        }

        async.waterfall([
            function (next) {
                if (utilities.isString(adTagUrl)) {
                    requestVASTAd(adTagUrl, next);
                } else {
                    next(null, adTagUrl);
                }
            },
            buildAd
        ], function (error, ad) {
            if (ad) {
                adChain.push(ad);
            }

            if (error) {
                return callback(error, adChain);
            }
            if (ad.wrapper) {


                return getAd(ad.wrapper.VASTAdTagURI, adChain, callback);
            }

            return callback(null, adChain);
        });
    }

    function buildAd(adJxonTree, callback) {
        try {
            var ad = new Ad(adJxonTree);
            callback(validateAd(ad), ad);
        } catch (e) {
            callback(new VASTError('on VASTClient.getVASTAd.buildAd, error parsing xml', 100), null);
        }
    }

    function validateAd(ad) {
        var wrapper = ad.wrapper;
        var inLine = ad.inLine;
        var errMsgPrefix = 'on VASTClient.getVASTAd.validateAd, ';

        if (inLine && wrapper) {
            return new VASTError(errMsgPrefix + "InLine and Wrapper both found on the same Ad", 101);
        }

        if (!inLine && !wrapper) {
            return new VASTError(errMsgPrefix + "nor wrapper nor inline elements found on the Ad", 101);
        }

        if (inLine && !inLine.isSupported()) {
            return new VASTError(errMsgPrefix + "could not find MediaFile that is supported by this video player", 403);
        }

        if (wrapper && !wrapper.VASTAdTagURI) {
            return new VASTError(errMsgPrefix + "missing 'VASTAdTagURI' in wrapper", 101);
        }

        return null;
    }

    function requestVASTAd(adTagUrl, callback) {
        that._requestVASTXml(adTagUrl, function (error, xmlStr) {
            if (error) {
                return callback(error);
            }
            try {
                var vastTree = xml.toJXONTree(xmlStr);
                callback(validateVASTTree(vastTree), vastTree.ad);
            } catch (e) {
                callback(new VASTError("on VASTClient.getVASTAd.requestVASTAd, error parsing xml", 100));
            }
        });
    }
};

VASTClient.prototype._requestVASTXml = function requestVASTXml(adTagUrl, callback) {
    try {
        if (utilities.isFunction(adTagUrl)) {
            adTagUrl(requestHandler);
        } else {
            logger.info("requesting adTagUrl: " + adTagUrl);
            http.get(adTagUrl, requestHandler, {
                withCredentials: true
            });
        }
    } catch (e) {
        callback(e);
    }

    /*** Local functions ***/
    function requestHandler(error, response, status) {
        if (error) {
            var errMsg = utilities.isDefined(status) ?
                    "on VASTClient.requestVastXML, HTTP request error with status '" + status + "'" :
                    "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn";
            return callback(new VASTError(errMsg, 301), null);
        }

        callback(null, response);
    }
};

VASTClient.prototype._buildVASTResponse = function buildVASTResponse(adsChain) {
    var response = new VASTResponse();
    addAdsToResponse(response, adsChain);
    validateResponse(response);

    return response;

    //*** Local function ****
    function addAdsToResponse(response, ads) {
        ads.forEach(function (ad) {
            response.addAd(ad);
        });
    }

    function validateResponse(response) {
        var progressEvents = response.trackingEvents.progress;

        if (!response.hasLinear()) {
            throw new VASTError("on VASTClient._buildVASTResponse, Received an Ad type that is not supported", 200);
        }

        if (response.duration === undefined) {
            throw new VASTError("on VASTClient._buildVASTResponse, Missing duration field in VAST response", 101);
        }

        if (progressEvents) {
            progressEvents.forEach(function (progressEvent) {
                if (!utilities.isNumber(progressEvent.offset)) {
                    throw new VASTError("on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event", 101);
                }
            });
        }
    }
};

VASTClient.prototype._trackError = function (error, adChain) {
    if (!utilities.isArray(adChain) || adChain.length === 0) { //There is nothing to track
        return;
    }

    var errorURLMacros = [];
    adChain.forEach(addErrorUrlMacros);
    vastUtil.track(errorURLMacros, {ERRORCODE: error.code || 900});  //900 <== Undefined error

    /*** Local functions  ***/
    function addErrorUrlMacros(ad) {
        if (ad.wrapper && ad.wrapper.error) {
            errorURLMacros.push(ad.wrapper.error);
        }

        if (ad.inLine && ad.inLine.error) {
            errorURLMacros.push(ad.inLine.error);
        }
    }
};

module.exports = VASTClient;

},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/http":43,"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Ad":15,"./VASTError":23,"./VASTResponse":25,"./vastUtil":30}],23:[function(require,module,exports){
'use strict';

function VASTError(message, code) {
  this.message = 'VAST Error: ' + (message || '');
  if (code) {
    this.code = code;
  }
}

VASTError.prototype = new Error();
VASTError.prototype.name = "VAST Error";

module.exports = VASTError;
},{}],24:[function(require,module,exports){
'use strict';

/**
 * Inner helper class that deals with the logic of the individual steps needed to setup an ad in the player.
 *
 * @param player {object} instance of the player that will play the ad. It assumes that the videojs-contrib-ads plugin
 *                        has been initialized when you use its utility functions.
 *
 * @constructor
 */

var VASTResponse = require('./VASTResponse');
var VASTError = require('./VASTError');
var VASTTracker = require('./VASTTracker');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require('../../utils/consoleLogger');

function VASTIntegrator(player) {



    if (!(this instanceof VASTIntegrator)) {
        return new VASTIntegrator(player);
    }

    this.player = player;
}

VASTIntegrator.prototype.playAd = function playAd(vastResponse, callback) {
    var that = this;
    callback = callback || utilities.noop;

    if (!(vastResponse instanceof VASTResponse)) {
        return callback(new VASTError('On VASTIntegrator, missing required VASTResponse'));
    }

    async.waterfall([
        function (next) {
            next(null, vastResponse);
        },
        this._selectAdSource.bind(this),
        this._createVASTTracker.bind(this),
        this._addClickThrough.bind(this),
        this._addSkipButton.bind(this),
        this._setupEvents.bind(this),
        this._playSelectedAd.bind(this)
    ], function (error, response) {
        if (error && response) {
            that._trackError(error, response);
        }
        callback(error, response);
    });

    this._adUnit = {
        _src: null,
        type: 'VAST',
        pauseAd: function () {
            that.player.pause(true);
        },
        resumeAd: function () {
            that.player.play(true);
        },
        isPaused: function () {
            return that.player.paused(true);
        },
        getSrc: function () {
            return this._src;
        }
    };

    return this._adUnit;
};

VASTIntegrator.prototype._selectAdSource = function selectAdSource(response, callback) {
    var source;

    var playerWidth = dom.getDimension(this.player.el()).width;
    response.mediaFiles.sort(function compareTo(a, b) {
        var deltaA = Math.abs(playerWidth - a.width);
        var deltaB = Math.abs(playerWidth - b.width);
        return deltaA - deltaB;
    });

    source = this.player.selectSource(response.mediaFiles).source;

    if (source) {
        logger.info("selected source: ", source);
        if (this._adUnit) {
            this._adUnit._src = source;
        }
        return callback(null, source, response);
    }

    // code 403 <== Couldn't find MediaFile that is supported by this video player
    callback(new VASTError("Could not find Ad mediafile supported by this player", 403), response);
};

VASTIntegrator.prototype._createVASTTracker = function createVASTTracker(adMediaFile, response, callback) {
    try {
        callback(null, adMediaFile, new VASTTracker(adMediaFile.src, response), response);
    } catch (e) {
        callback(e, response);
    }
};

VASTIntegrator.prototype._setupEvents = function setupEvents(adMediaFile, tracker, response, callback) {
    var previouslyMuted;
    var player = this.player;
    player.on('fullscreenchange', trackFullscreenChange);
    player.on('vast.adStart', trackImpressions);
    player.on('pause', trackPause);
    player.on('timeupdate', trackProgress);
    player.on('volumechange', trackVolumeChange);

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], unbindEvents);
    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip'], function (evt) {
        if (evt.type === 'vast.adEnd') {
            tracker.trackComplete();
        }
    });

    return callback(null, adMediaFile, response);

    /*** Local Functions ***/
    function unbindEvents() {
        player.off('fullscreenchange', trackFullscreenChange);
        player.off('vast.adStart', trackImpressions);
        player.off('pause', trackPause);
        player.off('timeupdate', trackProgress);
        player.off('volumechange', trackVolumeChange);
    }

    function trackFullscreenChange() {
        if (player.isFullscreen()) {
            tracker.trackFullscreen();
        } else {
            tracker.trackExitFullscreen();
        }
    }

    function trackPause() {
        //NOTE: whenever a video ends the video Element triggers a 'pause' event before the 'ended' event.
        //      We should not track this pause event because it makes the VAST tracking confusing again we use a
        //      Threshold of 2 seconds to prevent false positives on IOS.
        if (Math.abs(player.duration() - player.currentTime()) < 2) {
            return;
        }

        tracker.trackPause();
        playerUtils.once(player, ['play', 'vast.adEnd', 'vast.adsCancel'], function (evt) {
            if (evt.type === 'play') {
                tracker.trackResume();
            }
        });
    }

    function trackProgress() {
        var currentTimeInMs = player.currentTime() * 1000;
        tracker.trackProgress(currentTimeInMs);
    }

    function trackImpressions() {
        tracker.trackImpressions();
        tracker.trackCreativeView();
    }

    function trackVolumeChange() {
        var muted = player.muted();
        if (muted) {
            tracker.trackMute();
        } else if (previouslyMuted) {
            tracker.trackUnmute();
        }
        previouslyMuted = muted;
    }
};

VASTIntegrator.prototype._addSkipButton = function addSkipButton(source, tracker, response, callback) {
    var skipOffsetInSec;
    var that = this;

    if (utilities.isNumber(response.skipoffset)) {
        skipOffsetInSec = response.skipoffset / 1000;
        addSkipButtonToPlayer(this.player, skipOffsetInSec);
    }
    callback(null, source, tracker, response);

    /*** Local function ***/
    function addSkipButtonToPlayer(player, skipOffset) {
        var skipButton = createSkipButton(player);
        var updateSkipButton = updateSkipButtonState.bind(that, skipButton, skipOffset, player);

        player.el().appendChild(skipButton);
        player.on('timeupdate', updateSkipButton);

        playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

        function removeSkipButton() {
            player.off('timeupdate', updateSkipButton);
            dom.remove(skipButton);
        }
    }

    function createSkipButton(player) {
        var skipButton = window.document.createElement("div");
        dom.addClass(skipButton, "vast-skip-button");

        skipButton.onclick = function (e) {
            if (dom.hasClass(skipButton, 'enabled')) {
                tracker.trackSkip();
                player.trigger('vast.adSkip');
            }

            //We prevent event propagation to avoid problems with the clickThrough and so on
            if (window.Event.prototype.stopPropagation !== undefined) {
                e.stopPropagation();
            } else {
                return false;
            }
        };

        return skipButton;
    }

    function updateSkipButtonState(skipButton, skipOffset, player) {
        var timeLeft = Math.ceil(skipOffset - player.currentTime());
        if (timeLeft > 0) {
            var text = player.options_.plugins['ads-setup'].skipInButtonText ? player.options_.plugins['ads-setup'].skipInButtonText : "Skip in "
            skipButton.innerHTML = text + utilities.toFixedDigits(timeLeft, 2) + "...";
        } else {
            if (!dom.hasClass(skipButton, 'enabled')) {

                dom.addClass(skipButton, 'enabled');
                skipButton.innerHTML = player.options_.plugins['ads-setup'].skipButtonText ? player.options_.plugins['ads-setup'].skipButtonText : "Skip ad";
            }
        }
    }
};

VASTIntegrator.prototype._addClickThrough = function addClickThrough(mediaFile, tracker, response, callback) {
    var player = this.player;
    var blocker = createClickThroughBlocker(player, tracker, response);
    var updateBlocker = updateBlockerURL.bind(this, blocker, response, player);

    player.el().insertBefore(blocker, player.controlBar.el());
    player.on('timeupdate', updateBlocker);
    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeBlocker);

    return callback(null, mediaFile, tracker, response);

    /*** Local Functions ***/

    function createClickThroughBlocker(player, tracker, response) {
        var blocker = window.document.createElement("a");
        var clickThroughMacro = response.clickThrough;

        dom.addClass(blocker, 'vast-blocker');
        blocker.href = generateClickThroughURL(clickThroughMacro, player);

        if (utilities.isString(clickThroughMacro)) {
            blocker.target = "_blank";
        }

        blocker.onclick = function (e) {
            if (player.paused()) {
                player.play();

                //We prevent event propagation to avoid problems with the player's normal pause mechanism
                if (window.Event.prototype.stopPropagation !== undefined) {
                    e.stopPropagation();
                }
                return false;
            }

            player.pause();
            tracker.trackClick();
        };

        return blocker;
    }

    function updateBlockerURL(blocker, response, player) {
        blocker.href = generateClickThroughURL(response.clickThrough, player);
    }

    function generateClickThroughURL(clickThroughMacro, player) {
        var variables = {
            ASSETURI: mediaFile.src,
            CONTENTPLAYHEAD: vastUtil.formatProgress(player.currentTime() * 1000)
        };

        return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : '#';
    }

    function removeBlocker() {
        player.off('timeupdate', updateBlocker);
        dom.remove(blocker);
    }
};

VASTIntegrator.prototype._playSelectedAd = function playSelectedAd(source, response, callback) {
    var player = this.player;

    player.preload("auto"); //without preload=auto the durationchange event is never fired
    player.src(source);

    logger.debug("<VASTIntegrator._playSelectedAd> waiting for durationchange to play the ad...");

    playerUtils.once(player, ['durationchange', 'error', 'vast.adsCancel'], function (evt) {
        if (evt.type === 'durationchange') {
            logger.debug("<VASTIntegrator._playSelectedAd> got durationchange; calling playAd()");
            playAd();
        } else if (evt.type === 'error') {
            callback(new VASTError("on VASTIntegrator, Player is unable to play the Ad", 400), response);
        }
        //NOTE: If the ads get canceled we do nothing/
    });

    /**** local functions ******/
    function playAd() {

        playerUtils.once(player, ['playing', 'vast.adsCancel'], function (evt) {
            if (evt.type === 'vast.adsCancel') {
                return;
            }

            logger.debug("<VASTIntegrator._playSelectedAd/playAd> got playing event; triggering vast.adStart...");

            player.trigger('vast.adStart');

            player.on('ended', proceed);
            player.on('vast.adsCancel', proceed);
            player.on('vast.adSkip', proceed);

            function proceed(evt) {

                if (evt.type === 'ended' && (player.duration() - player.currentTime()) > 3) {
                    // Ignore ended event if the Ad time was not 'near' the end
                    // avoids issues where IOS controls could skip the Ad
                    return;
                }

                player.off('ended', proceed);
                player.off('vast.adsCancel', proceed);
                player.off('vast.adSkip', proceed);

                //NOTE: if the ads get cancel we do nothing apart removing the listners
                if (evt.type === 'ended' || evt.type === 'vast.adSkip') {
                    callback(null, response);
                }
            }
        });

        logger.debug("<VASTIntegrator._playSelectedAd/playAd> calling player.play()...");

        player.play();
    }
};

VASTIntegrator.prototype._trackError = function trackError(error, response) {
    vastUtil.track(response.errorURLMacros, {ERRORCODE: error.code || 900});
};

module.exports = VASTIntegrator;
},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/playerUtils":45,"../../utils/utilityFunctions":47,"./VASTError":23,"./VASTResponse":25,"./VASTTracker":26,"./vastUtil":30}],25:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VideoClicks = require('./VideoClicks');
var Linear = require('./Linear');
var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

window.InLine__A = InLine;
function VASTResponse() {
  if (!(this instanceof VASTResponse)) {
    return new VASTResponse();
  }

  this._linearAdded = false;
  this.ads = [];
  this.errorURLMacros = [];
  this.impressions = [];
  this.clickTrackings = [];
  this.customClicks = [];
  this.trackingEvents = {};
  this.mediaFiles = [];
  this.clickThrough = undefined;
  this.adTitle = '';
  this.duration = undefined;
  this.skipoffset = undefined;
}

VASTResponse.prototype.addAd = function (ad) {
  var inLine, wrapper;
  if (ad instanceof Ad) {
    inLine = ad.inLine;
    wrapper = ad.wrapper;

    this.ads.push(ad);

    if (inLine) {
      this._addInLine(inLine);
    }

    if (wrapper) {
      this._addWrapper(wrapper);
    }
  }
};

VASTResponse.prototype._addErrorTrackUrl = function (error) {
  var errorURL = error instanceof xml.JXONTree ? xml.keyValue(error) : error;
  if (errorURL) {
    this.errorURLMacros.push(errorURL);
  }
};

VASTResponse.prototype._addImpressions = function (impressions) {
  utilities.isArray(impressions) && appendToArray(this.impressions, impressions);
};

VASTResponse.prototype._addClickThrough = function (clickThrough) {
  if (utilities.isNotEmptyString(clickThrough)) {
    this.clickThrough = clickThrough;
  }
};

VASTResponse.prototype._addClickTrackings = function (clickTrackings) {
  utilities.isArray(clickTrackings) && appendToArray(this.clickTrackings, clickTrackings);
};

VASTResponse.prototype._addCustomClicks = function (customClicks) {
  utilities.isArray(customClicks) && appendToArray(this.customClicks, customClicks);
};

VASTResponse.prototype._addTrackingEvents = function (trackingEvents) {
  var eventsMap = this.trackingEvents;

  if (trackingEvents) {
    trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
    trackingEvents.forEach(function (trackingEvent) {
      if (!eventsMap[trackingEvent.name]) {
        eventsMap[trackingEvent.name] = [];
      }
      eventsMap[trackingEvent.name].push(trackingEvent);
    });
  }
};

VASTResponse.prototype._addTitle = function (title) {
  if (utilities.isNotEmptyString(title)) {
    this.adTitle = title;
  }
};

VASTResponse.prototype._addDuration = function (duration) {
  if (utilities.isNumber(duration)) {
    this.duration = duration;
  }
};

VASTResponse.prototype._addVideoClicks = function (videoClicks) {
  if (videoClicks instanceof VideoClicks) {
    this._addClickThrough(videoClicks.clickThrough);
    this._addClickTrackings(videoClicks.clickTrackings);
    this._addCustomClicks(videoClicks.customClicks);
  }
};

VASTResponse.prototype._addMediaFiles = function (mediaFiles) {
  utilities.isArray(mediaFiles) && appendToArray(this.mediaFiles, mediaFiles);
};

VASTResponse.prototype._addSkipoffset = function (offset) {
  if (offset) {
    this.skipoffset = offset;
  }
};

VASTResponse.prototype._addAdParameters = function (adParameters) {
  if (adParameters) {
    this.adParameters = adParameters;
  }
};

VASTResponse.prototype._addLinear = function (linear) {
  if (linear instanceof Linear) {
    this._addDuration(linear.duration);
    this._addTrackingEvents(linear.trackingEvents);
    this._addVideoClicks(linear.videoClicks);
    this._addMediaFiles(linear.mediaFiles);
    this._addSkipoffset(linear.skipoffset);
    this._addAdParameters(linear.adParameters);
    this._linearAdded = true;
  }
};

VASTResponse.prototype._addInLine = function (inLine) {
  var that = this;

  if (inLine instanceof InLine) {
    this._addTitle(inLine.adTitle);
    this._addErrorTrackUrl(inLine.error);
    this._addImpressions(inLine.impressions);

    inLine.creatives.forEach(function (creative) {
      if (creative.linear) {
        that._addLinear(creative.linear);
      }
    });
  }
};

VASTResponse.prototype._addWrapper = function (wrapper) {
  var that = this;

  if (wrapper instanceof Wrapper) {
    this._addErrorTrackUrl(wrapper.error);
    this._addImpressions(wrapper.impressions);

    wrapper.creatives.forEach(function (creative) {
      var linear = creative.linear;
      if (linear) {
        that._addVideoClicks(linear.videoClicks);
        that.clickThrough = undefined;//We ensure that no clickThrough has been added
        that._addTrackingEvents(linear.trackingEvents);
      }
    });
  }
};

VASTResponse.prototype.hasLinear = function(){
  return this._linearAdded;
};

function appendToArray(array, items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

module.exports = VASTResponse;


},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Ad":15,"./InLine":18,"./Linear":19,"./VideoClicks":27,"./Wrapper":28}],26:[function(require,module,exports){
'use strict';

var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');
var utilities = require('../../utils/utilityFunctions');

function VASTTracker(assetURI, vastResponse) {
  if (!(this instanceof VASTTracker)) {
    return new VASTTracker(assetURI, vastResponse);
  }

  this.sanityCheck(assetURI, vastResponse);
  this.initialize(assetURI, vastResponse);

}

VASTTracker.prototype.initialize = function(assetURI, vastResponse) {
  this.response = vastResponse;
  this.assetURI = assetURI;
  this.progress = 0;
  this.quartiles = {
    firstQuartile: {tracked: false, time: Math.round(25 * vastResponse.duration) / 100},
    midpoint: {tracked: false, time: Math.round(50 * vastResponse.duration) / 100},
    thirdQuartile: {tracked: false, time: Math.round(75 * vastResponse.duration) / 100}
  };
};

VASTTracker.prototype.sanityCheck = function(assetURI, vastResponse) {
  if (!utilities.isString(assetURI) || utilities.isEmptyString(assetURI)) {
    throw new VASTError('on VASTTracker constructor, missing required the URI of the ad asset being played');
  }

  if (!(vastResponse instanceof VASTResponse)) {
    throw new VASTError('on VASTTracker constructor, missing required VAST response');
  }
};

VASTTracker.prototype.trackURLs = function trackURLs(urls, variables) {
  if (utilities.isArray(urls) && urls.length > 0) {
    variables = utilities.extend({
      ASSETURI: this.assetURI,
      CONTENTPLAYHEAD: vastUtil.formatProgress(this.progress)
    }, variables || {});

    vastUtil.track(urls, variables);
  }
};

VASTTracker.prototype.trackEvent = function trackEvent(eventName, trackOnce) {
  this.trackURLs(getEventUris(this.response.trackingEvents[eventName]));
  if (trackOnce) {
    this.response.trackingEvents[eventName] = undefined;
  }

  /*** Local function ***/
  function getEventUris(trackingEvents) {
    var uris;

    if (trackingEvents) {
      uris = [];
      trackingEvents.forEach(function (event) {
          if (!event.uri) {
              return;
          }

          uris.push(event.uri);
      });
    }
    return uris;
  }
};

VASTTracker.prototype.trackProgress = function trackProgress(newProgressInMs) {
  var that = this;
  var events = [];
  var ONCE = true;
  var ALWAYS = false;
  var trackingEvents = this.response.trackingEvents;

  if (utilities.isNumber(newProgressInMs)) {
    addTrackEvent('start', ONCE, newProgressInMs > 0);
    addTrackEvent('rewind', ALWAYS, hasRewound(this.progress, newProgressInMs));
    addQuartileEvents(newProgressInMs);
    trackProgressEvents(newProgressInMs);
    trackEvents();
    this.progress = newProgressInMs;
  }

  /*** Local function ***/
  function hasRewound(currentProgress, newProgress) {
    var REWIND_THRESHOLD = 3000; //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that there was a rewind an that it was on purpose.
    return currentProgress > newProgressInMs && Math.abs(newProgress - currentProgress) > REWIND_THRESHOLD;
  }

  function addTrackEvent(eventName, trackOnce, canBeAdded) {
    if (trackingEvents[eventName] && canBeAdded) {
      events.push({
        name: eventName,
        trackOnce: !!trackOnce
      });
    }
  }

  function addQuartileEvents(progress) {
    var quartiles = that.quartiles;
    var firstQuartile = that.quartiles.firstQuartile;
    var midpoint = that.quartiles.midpoint;
    var thirdQuartile = that.quartiles.thirdQuartile;

    if (!firstQuartile.tracked) {
      trackQuartile('firstQuartile', progress);
    } else if (!midpoint.tracked) {
      trackQuartile('midpoint', progress);
    } else if (!thirdQuartile.tracked){
      trackQuartile('thirdQuartile', progress);
    }

    /*** Local function ***/
    function trackQuartile(quartileName, progress){
      var quartile = quartiles[quartileName];
      if(canBeTracked(quartile, progress)){
        quartile.tracked = true;
        addTrackEvent(quartileName, ONCE, true);
      }
    }
  }

  function canBeTracked(quartile, progress) {
    var quartileTime = quartile.time;
    //We only fire the quartile event if the progress is bigger than the quartile time by 5 seconds at most.
    return progress >= quartileTime && progress <= (quartileTime + 5000);
  }

  function trackProgressEvents(progress) {
    if (!utilities.isArray(trackingEvents.progress)) {
      return; //Nothing to track
    }

    var pendingProgressEvts = [];

    trackingEvents.progress.forEach(function (evt) {
      if (evt.offset <= progress) {
        that.trackURLs([evt.uri]);
      } else {
        pendingProgressEvts.push(evt);
      }
    });
    trackingEvents.progress = pendingProgressEvts;
  }

  function trackEvents() {
    events.forEach(function (event) {
      that.trackEvent(event.name, event.trackOnce);
    });
  }
};

[
  'rewind',
  'fullscreen',
  'exitFullscreen',
  'pause',
  'resume',
  'mute',
  'unmute',
  'acceptInvitation',
  'acceptInvitationLinear',
  'collapse',
  'expand'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName);
    };
  });

[
  'start',
  'skip',
  'close',
  'closeLinear'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName, true);
    };
  });

[
  'firstQuartile',
  'midpoint',
  'thirdQuartile'
].forEach(function (quartile) {
    VASTTracker.prototype['track' + utilities.capitalize(quartile)] = function () {
      this.quartiles[quartile].tracked = true;
      this.trackEvent(quartile, true);
    };
  });

VASTTracker.prototype.trackComplete = function () {
  if(this.quartiles.thirdQuartile.tracked){
    this.trackEvent('complete', true);
  }
};

VASTTracker.prototype.trackErrorWithCode = function trackErrorWithCode(errorcode) {
  if (utilities.isNumber(errorcode)) {
    this.trackURLs(this.response.errorURLMacros, {ERRORCODE: errorcode});
  }
};

VASTTracker.prototype.trackImpressions = function trackImpressions() {
  this.trackURLs(this.response.impressions);
};

VASTTracker.prototype.trackCreativeView = function trackCreativeView() {
  this.trackEvent('creativeView');
};

VASTTracker.prototype.trackClick = function trackClick() {
  this.trackURLs(this.response.clickTrackings);
};

module.exports = VASTTracker;

},{"../../utils/utilityFunctions":47,"./VASTError":23,"./VASTResponse":25,"./vastUtil":30}],27:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function VideoClicks(videoClickJTree) {
  if (!(this instanceof VideoClicks)) {
    return new VideoClicks(videoClickJTree);
  }

  this.clickThrough = xml.keyValue(videoClickJTree.clickThrough);
  this.clickTrackings = parseClickTrackings(videoClickJTree.clickTracking);
  this.customClicks = parseClickTrackings(videoClickJTree.customClick);

  /*** Local functions ***/
  function parseClickTrackings(trackingData) {
    var clickTrackings = [];
    if (trackingData) {
      trackingData = utilities.isArray(trackingData) ? trackingData : [trackingData];
      trackingData.forEach(function (clickTrackingData) {
        clickTrackings.push(xml.keyValue(clickTrackingData));
      });
    }
    return clickTrackings;
  }
}

module.exports = VideoClicks;
},{"../../utils/utilityFunctions":47,"../../utils/xml":48}],28:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function Wrapper(wrapperJTree) {
  if(!(this instanceof Wrapper)) {
    return new Wrapper(wrapperJTree);
  }

  //Required elements
  this.adSystem = xml.keyValue(wrapperJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(wrapperJTree.impression);
  this.VASTAdTagURI = xml.keyValue(wrapperJTree.vASTAdTagURI);

  //Optional elements
  this.creatives = Creative.parseCreatives(wrapperJTree.creatives);
  this.error = xml.keyValue(wrapperJTree.error);
  this.extensions = wrapperJTree.extensions;

  //Optional attrs
  this.followAdditionalWrappers = utilities.isDefined(xml.attr(wrapperJTree, 'followAdditionalWrappers'))? xml.attr(wrapperJTree, 'followAdditionalWrappers'): true;
  this.allowMultipleAds = xml.attr(wrapperJTree, 'allowMultipleAds');
  this.fallbackOnNoAd = xml.attr(wrapperJTree, 'fallbackOnNoAd');
}

module.exports = Wrapper;

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Creative":17,"./vastUtil":30}],29:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');

var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;

var parsers = {

  duration: function parseDuration(durationStr) {

    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  offset: function parseOffset(offset, duration) {
    if(isPercentage(offset)){
      return calculatePercentage(offset, duration);
    }
    return parsers.duration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if(duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent){
      return quantity * percent / 100;
    }
  }

};


module.exports = parsers;
},{"../../utils/utilityFunctions":47}],30:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var VPAIDHTML5Tech = require('../vpaid/VPAIDHTML5Tech');
var VPAIDFlashTech = require('../vpaid/VPAIDFlashTech');
var VPAIDFLASHClient = require('VPAIDFLASHClient/js/VPAIDFLASHClient');

var vastUtil = {

  track: function track(URLMacros, variables) {
    var sources = vastUtil.parseURLMacros(URLMacros, variables);
    var trackImgs = [];
    sources.forEach(function (src) {
      var img = new Image();
      img.src = src;
      trackImgs.push(img);
    });
    return trackImgs;
  },

  parseURLMacros: function parseMacros(URLMacros, variables) {
    var parsedURLs = [];

    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    URLMacros.forEach(function (URLMacro) {
      parsedURLs.push(vastUtil._parseURLMacro(URLMacro, variables));
    });

    return parsedURLs;
  },

  parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    return vastUtil._parseURLMacro(URLMacro, variables);
  },

  _parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    utilities.forEach(variables, function (value, key) {
      URLMacro = URLMacro.replace(new RegExp("\\[" + key + "\\\]", 'gm'), value);
    });

    return URLMacro;
  },

  parseDuration: function parseDuration(durationStr) {
    var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  parseImpressions: function parseImpressions(impressions) {
    if (impressions) {
      impressions = utilities.isArray(impressions) ? impressions : [impressions];
      return utilities.transformArray(impressions, function (impression) {
        if (utilities.isNotEmptyString(impression.keyValue)) {
          return impression.keyValue;
        }
        return undefined;
      });
    }
    return [];
  },


  //We assume that the progress is going to arrive in milliseconds
  formatProgress: function formatProgress(progress) {
    var hours, minutes, seconds, milliseconds;
    hours = progress / (60 * 60 * 1000);
    hours = Math.floor(hours);
    minutes = (progress / (60 * 1000)) % 60;
    minutes = Math.floor(minutes);
    seconds = (progress / 1000) % 60;
    seconds = Math.floor(seconds);
    milliseconds = progress % 1000;
    return utilities.toFixedDigits(hours, 2) + ':' + utilities.toFixedDigits(minutes, 2) + ':' + utilities.toFixedDigits(seconds, 2) + '.' + utilities.toFixedDigits(milliseconds, 3);
  },

  parseOffset: function parseOffset(offset, duration) {
    if (isPercentage(offset)) {
      return calculatePercentage(offset, duration);
    }
    return vastUtil.parseDuration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if (duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent) {
      return quantity * percent / 100;
    }
  },


  //List of supported VPAID technologies
  VPAID_techs: [
    VPAIDFlashTech,
    VPAIDHTML5Tech
  ],

  isVPAID: function isVPAIDMediaFile(mediaFile) {
    return !!mediaFile && mediaFile.apiFramework === 'VPAID';
  },

  findSupportedVPAIDTech: function findSupportedVPAIDTech(mimeType) {
    var i, len, VPAIDTech;

    for (i = 0, len = this.VPAID_techs.length; i < len; i += 1) {
      VPAIDTech = this.VPAID_techs[i];
      if (VPAIDTech.supports(mimeType)) {
        return VPAIDTech;
      }
    }
    return null;
  },

  isFlashSupported: function isFlashSupported() {
    return VPAIDFLASHClient.isSupported();
  },

  /**
   * Necessary step for VPAIDFLAShClient to know if flash is supported and not blocked.
   * IMPORTANT NOTE: This is an async test and needs to be run as soon as possible.
   *
   * @param vpaidFlashLoaderPath the path to the vpaidFlashLoader swf obj.
   */
  runFlashSupportCheck: function runFlashSupportCheck(vpaidFlashLoaderPath) {
    VPAIDFLASHClient.runFlashTest({data: vpaidFlashLoaderPath});
  }

};

module.exports = vastUtil;

},{"../../utils/utilityFunctions":47,"../vpaid/VPAIDFlashTech":32,"../vpaid/VPAIDHTML5Tech":33,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],31:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var utilities = require('../../utils/utilityFunctions');

function VPAIDAdUnitWrapper(vpaidAdUnit, opts) {
  if (!(this instanceof VPAIDAdUnitWrapper)) {
    return new VPAIDAdUnitWrapper(vpaidAdUnit, opts);
  }
  sanityCheck(vpaidAdUnit, opts);

  this.options = utilities.extend({}, opts);

  this._adUnit = vpaidAdUnit;

  /*** Local Functions ***/
  function sanityCheck(adUnit, opts) {
    if (!adUnit || !VPAIDAdUnitWrapper.checkVPAIDInterface(adUnit)) {
      throw new VASTError('on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface');
    }

    if (!utilities.isObject(opts)) {
      throw new VASTError("on VPAIDAdUnitWrapper, expected options hash  but got '" + opts + "'");
    }

    if (!("responseTimeout" in opts) || !utilities.isNumber(opts.responseTimeout) ){
      throw new VASTError("on VPAIDAdUnitWrapper, expected responseTimeout in options");
    }
  }
}

VPAIDAdUnitWrapper.checkVPAIDInterface = function checkVPAIDInterface(VPAIDAdUnit) {
  //NOTE: skipAd is not part of the method list because it only appears in VPAID 2.0 and we support VPAID 1.0
  var VPAIDInterfaceMethods = [
    'handshakeVersion', 'initAd', 'startAd', 'stopAd', 'resizeAd', 'pauseAd', 'expandAd', 'collapseAd'
  ];

  for (var i = 0, len = VPAIDInterfaceMethods.length; i < len; i++) {
    if (!VPAIDAdUnit || !utilities.isFunction(VPAIDAdUnit[VPAIDInterfaceMethods[i]])) {
      return false;
    }
  }


  return canSubscribeToEvents(VPAIDAdUnit) && canUnsubscribeFromEvents(VPAIDAdUnit);

  /*** Local Functions ***/

  function canSubscribeToEvents(adUnit) {
    return utilities.isFunction(adUnit.subscribe) || utilities.isFunction(adUnit.addEventListener) || utilities.isFunction(adUnit.on);
  }

  function canUnsubscribeFromEvents(adUnit) {
    return utilities.isFunction(adUnit.unsubscribe) || utilities.isFunction(adUnit.removeEventListener) || utilities.isFunction(adUnit.off);

  }
};

VPAIDAdUnitWrapper.prototype.adUnitAsyncCall = function () {
  var args = utilities.arrayLikeObjToArray(arguments);
  var method = args.shift();
  var cb = args.pop();
  var timeoutId;

  sanityCheck(method, cb, this._adUnit);
  args.push(wrapCallback());

  this._adUnit[method].apply(this._adUnit, args);
  timeoutId = setTimeout(function () {
    timeoutId = null;
    cb(new VASTError("on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" + method + "'"));
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(method, cb, adUnit) {
    if (!utilities.isString(method) || !utilities.isFunction(adUnit[method])) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback");
    }
  }

  function wrapCallback() {
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      cb.apply(this, arguments);
    };
  }
};

VPAIDAdUnitWrapper.prototype.on = function (evtName, handler) {
  var addEventListener = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;
  addEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.off = function (evtName, handler) {
  var removeEventListener = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;
  removeEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.waitForEvent = function (evtName, cb, context) {
  var timeoutId;
  sanityCheck(evtName, cb);
  context = context || null;

  this.on(evtName, responseListener);

  timeoutId = setTimeout(function () {
    cb(new VASTError("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + evtName + "'"));
    timeoutId = null;
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(evtName, cb) {
    if (!utilities.isString(evtName)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing evt name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing callback");
    }
  }

  function responseListener() {
    var args = utilities.arrayLikeObjToArray(arguments);

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    args.unshift(null);
    cb.apply(context, args);
  }
};

// VPAID METHODS
VPAIDAdUnitWrapper.prototype.handshakeVersion = function (version, cb) {
  this.adUnitAsyncCall('handshakeVersion', version, cb);
};

/* jshint maxparams:6 */
VPAIDAdUnitWrapper.prototype.initAd = function (width, height, viewMode, desiredBitrate, adUnitData, cb) {
  this.waitForEvent('AdLoaded', cb);
  this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData);
};

VPAIDAdUnitWrapper.prototype.resizeAd = function (width, height, viewMode, cb) {
  // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it
  // and will assume that everything is fine after the async call
  this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);
};

VPAIDAdUnitWrapper.prototype.startAd = function (cb) {
  this.waitForEvent('AdStarted', cb);
  this._adUnit.startAd();
};

VPAIDAdUnitWrapper.prototype.stopAd = function (cb) {
  this.waitForEvent('AdStopped', cb);
  this._adUnit.stopAd();
};

VPAIDAdUnitWrapper.prototype.pauseAd = function (cb) {
  this.waitForEvent('AdPaused', cb);
  this._adUnit.pauseAd();
};

VPAIDAdUnitWrapper.prototype.resumeAd = function (cb) {
  this.waitForEvent('AdPlaying', cb);
  this._adUnit.resumeAd();
};

VPAIDAdUnitWrapper.prototype.expandAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.expandAd();
};

VPAIDAdUnitWrapper.prototype.collapseAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.collapseAd();
};

VPAIDAdUnitWrapper.prototype.skipAd = function (cb) {
  this.waitForEvent('AdSkipped', cb);
  this._adUnit.skipAd();
};

//VPAID property getters
[
  'adLinear',
  'adWidth',
  'adHeight',
  'adExpanded',
  'adSkippableState',
  'adRemainingTime',
  'adDuration',
  'adVolume',
  'adCompanions',
  'adIcons'
].forEach(function (property) {
  var getterName = 'get' + utilities.capitalize(property);

  VPAIDAdUnitWrapper.prototype[getterName] = function (cb) {
    this.adUnitAsyncCall(getterName, cb);
  };
});

//VPAID property setters
VPAIDAdUnitWrapper.prototype.setAdVolume = function(volume, cb){
  this.adUnitAsyncCall('setAdVolume',volume, cb);
};

module.exports = VPAIDAdUnitWrapper;

},{"../../utils/utilityFunctions":47,"../vast/VASTError":23}],32:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');

var VASTError = require('../vast/VASTError');

var VPAIDFLASHClient = require('VPAIDFLASHClient/js/VPAIDFLASHClient');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

var logger = require ('../../utils/consoleLogger');

function VPAIDFlashTech(mediaFile, settings) {
  if (!(this instanceof VPAIDFlashTech)) {
    return new VPAIDFlashTech(mediaFile);
  }
  sanityCheck(mediaFile);
  this.name = 'vpaid-flash';
  this.mediaFile = mediaFile;
  this.containerEl = null;
  this.vpaidFlashClient = null;
  this.settings = settings;

  /*** local functions ***/
  function sanityCheck(mediaFile) {
    if (!mediaFile || !utilities.isString(mediaFile.src)) {
      throw new VASTError('on VPAIDFlashTech, invalid MediaFile');
    }
  }
}

VPAIDFlashTech.VPAIDFLASHClient = VPAIDFLASHClient;

VPAIDFlashTech.supports = function (type) {
  return (MimeTypes.flash.indexOf(type) > -1) && VPAIDFlashTech.VPAIDFLASHClient.isSupported();
};

VPAIDFlashTech.prototype.loadAdUnit = function loadFlashCreative(containerEl, objectEl, callback) {
  var that = this;
  var flashClientOpts = this.settings && this.settings.vpaidFlashLoaderPath ? {data: this.settings.vpaidFlashLoaderPath} : undefined;
  sanityCheck(containerEl, callback);

  this.containerEl = containerEl;

  logger.debug ("<VPAIDFlashTech.loadAdUnit> loading VPAIDFLASHClient with opts:", flashClientOpts);

  this.vpaidFlashClient = new VPAIDFlashTech.VPAIDFLASHClient(containerEl, function (error) {
    if (error) {
      return callback(error);
    }

    logger.info ("<VPAIDFlashTech.loadAdUnit> calling VPAIDFLASHClient.loadAdUnit(); that.mediaFile:", that.mediaFile);
    that.vpaidFlashClient.loadAdUnit(that.mediaFile.src, callback);
  }, flashClientOpts);

  /*** Local Functions ***/
  function sanityCheck(container, cb) {

    if (!dom.isDomElement(container)) {
      throw new VASTError('on VPAIDFlashTech.loadAdUnit, invalid dom container element');
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError('on VPAIDFlashTech.loadAdUnit, missing valid callback');
    }
  }
};

VPAIDFlashTech.prototype.unloadAdUnit = function () {
  if (this.vpaidFlashClient) {
    try{
      this.vpaidFlashClient.destroy();
    } catch(e){
      logger.error ('VAST ERROR: trying to unload the VPAID adunit');
    }
    this.vpaidFlashClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

module.exports = VPAIDFlashTech;

},{"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],33:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');

var VASTError = require('../vast/VASTError');

var VPAIDHTML5Client = require('VPAIDHTML5Client/js/VPAIDHTML5Client');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

var logger = require ('../../utils/consoleLogger');

function VPAIDHTML5Tech(mediaFile) {

  if(!(this instanceof VPAIDHTML5Tech)) {
    return new VPAIDHTML5Tech(mediaFile);
  }

  sanityCheck(mediaFile);

  this.name = 'vpaid-html5';
  this.containerEl = null;
  this.videoEl = null;
  this.vpaidHTMLClient = null;

  this.mediaFile = mediaFile;

  function sanityCheck(mediaFile) {
      if (!mediaFile || !utilities.isString(mediaFile.src)) {
        throw new VASTError(VPAIDHTML5Tech.INVALID_MEDIA_FILE);
      }
  }
}

VPAIDHTML5Tech.VPAIDHTML5Client = VPAIDHTML5Client;

VPAIDHTML5Tech.supports = function (type) {
  return !utilities.isOldIE() && MimeTypes.html5.indexOf(type) > -1;
};

VPAIDHTML5Tech.prototype.loadAdUnit = function loadAdUnit(containerEl, videoEl, callback) {
  sanityCheck(containerEl, videoEl, callback);

  this.containerEl = containerEl;
  this.videoEl = videoEl;
  this.vpaidHTMLClient = new VPAIDHTML5Tech.VPAIDHTML5Client(containerEl, videoEl, {});
  this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, callback);

  function sanityCheck(container, video, cb) {
    if (!dom.isDomElement(container)) {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!dom.isDomElement(video) || video.tagName.toLowerCase() !== 'video') {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError(VPAIDHTML5Tech.MISSING_CALLBACK);
    }
  }
};

VPAIDHTML5Tech.prototype.unloadAdUnit = function unloadAdUnit() {
  if (this.vpaidHTMLClient) {
    try {
      this.vpaidHTMLClient.destroy();
    } catch(e) {
      logger.error ('VAST ERROR: trying to unload the VPAID adunit');
    }

    this.vpaidHTMLClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

var PREFIX = 'on VPAIDHTML5Tech';
VPAIDHTML5Tech.INVALID_MEDIA_FILE = PREFIX + ', invalid MediaFile';
VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL = PREFIX + ', invalid container HtmlElement';
VPAIDHTML5Tech.INVALID_DOM_VIDEO_EL = PREFIX + ', invalid HTMLVideoElement';
VPAIDHTML5Tech.MISSING_CALLBACK = PREFIX + ', missing valid callback';

module.exports = VPAIDHTML5Tech;

},{"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"VPAIDHTML5Client/js/VPAIDHTML5Client":11}],34:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');
var VASTError = require('../vast/VASTError');
var VASTResponse = require('../vast/VASTResponse');
var VASTTracker = require('../vast/VASTTracker');
var vastUtil = require('../vast/vastUtil');

var VPAIDAdUnitWrapper = require('./VPAIDAdUnitWrapper');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require ('../../utils/consoleLogger');

function VPAIDIntegrator(player, settings) {
  if (!(this instanceof VPAIDIntegrator)) {
    return new VPAIDIntegrator(player);
  }

  this.VIEW_MODE = {
    NORMAL: 'normal',
    FULLSCREEN: "fullscreen",
    THUMBNAIL: "thumbnail"
  };
  this.player = player;
  this.containerEl = createVPAIDContainerEl(player);
  this.options = {
    responseTimeout: 5000,
    VPAID_VERSION: '2.0'
  };
  this.settings = settings;

  /*** Local functions ***/

  function createVPAIDContainerEl() {
    var containerEl = document.createElement('div');
    dom.addClass(containerEl, 'VPAID-container');
    player.el().insertBefore(containerEl, player.controlBar.el());
    return containerEl;

  }
}

VPAIDIntegrator.prototype.playAd = function playVPaidAd(vastResponse, callback) {
  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('on VASTIntegrator.playAd, missing required VASTResponse'));
  }

  var that = this;
  var player = this.player;
  logger.debug ("<VPAIDIntegrator.playAd> looking for supported tech...");
  var tech = this._findSupportedTech(vastResponse, this.settings);

  callback = callback || utilities.noop;

  this._adUnit = null;

  dom.addClass(player.el(), 'vjs-vpaid-ad');

  player.on('vast.adsCancel', triggerVpaidAdEnd);
  player.one('vpaid.adEnd', function(){
    player.off('vast.adsCancel', triggerVpaidAdEnd);
    removeAdUnit();
  });

  if (tech) {
    logger.info ("<VPAIDIntegrator.playAd> found tech: ", tech);

    async.waterfall([
      function (next) {
        next(null, tech, vastResponse);
      },
      this._loadAdUnit.bind(this),
      this._playAdUnit.bind(this),
      this._finishPlaying.bind(this)

    ], adComplete);

    this._adUnit = {
      _paused: true,
      type: 'VPAID',
      pauseAd: function() {
        player.trigger('vpaid.pauseAd');
        player.pause(true);//we make sure that the video content gets stopped.
      },
      resumeAd: function() {
          player.trigger('vpaid.resumeAd');
      },
      isPaused: function() {
        return this._paused;
      },
      getSrc: function() {
        return tech.mediaFile;
      }
    };

  } else {
    logger.debug ("<VPAIDIntegrator.playAd> could not find suitable tech");
    var error = new VASTError('on VPAIDIntegrator.playAd, could not find a supported mediaFile', 403);
    adComplete(error, this._adUnit, vastResponse);
  }

  return this._adUnit;

  /*** Local functions ***/
  function adComplete(error, adUnit, vastResponse) {
    if (error && vastResponse) {
      that._trackError(vastResponse, error.code);
    }
    player.trigger('vpaid.adEnd');
    callback(error, vastResponse);
  }

  function triggerVpaidAdEnd(){
    player.trigger('vpaid.adEnd');
  }

  function removeAdUnit() {
    if (tech) {
      tech.unloadAdUnit();
    }
    dom.removeClass(player.el(), 'vjs-vpaid-ad');
  }
};

VPAIDIntegrator.prototype._findSupportedTech = function (vastResponse, settings) {
  if (!(vastResponse instanceof VASTResponse)) {
    return null;
  }

  var vpaidMediaFiles = vastResponse.mediaFiles.filter(vastUtil.isVPAID);
  var preferredTech = settings && settings.preferredTech;
  var skippedSupportTechs = [];
  var i, len, mediaFile, VPAIDTech, isPreferedTech;

  for (i = 0, len = vpaidMediaFiles.length; i < len; i += 1) {
    mediaFile = vpaidMediaFiles[i];
    VPAIDTech = vastUtil.findSupportedVPAIDTech(mediaFile.type);

    // no supported VPAID tech found, skip mediafile
    if (!VPAIDTech) { continue; }

    // do we have a prefered tech, does it play this media file ?
    isPreferedTech = preferredTech ?
      (mediaFile.type === preferredTech || (MimeTypes[preferredTech] && MimeTypes[preferredTech].indexOf(mediaFile.type) > -1 )) :
      false;

    // our prefered tech can read this mediafile, defaulting to it.
    if (isPreferedTech) {
      return new VPAIDTech(mediaFile, settings);
    }

    skippedSupportTechs.push({ mediaFile: mediaFile, tech: VPAIDTech });
  }

  if (skippedSupportTechs.length) {
    var firstTech = skippedSupportTechs[0];
    return new firstTech.tech(firstTech.mediaFile, settings);
  }

  return null;
};

VPAIDIntegrator.prototype._createVPAIDAdUnitWrapper = function(adUnit, src, responseTimeout) {
  return new VPAIDAdUnitWrapper(adUnit, {src: src, responseTimeout: responseTimeout});
};

VPAIDIntegrator.prototype._loadAdUnit = function (tech, vastResponse, next) {
  var that = this;
  var player = this.player;
  var vjsTechEl = player.el().querySelector('.vjs-tech');
  var responseTimeout = this.settings.responseTimeout || this.options.responseTimeout;
  tech.loadAdUnit(this.containerEl, vjsTechEl, function (error, adUnit) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    try {
      var WrappedAdUnit = that._createVPAIDAdUnitWrapper(adUnit, tech.mediaFile.src, responseTimeout);
      var techClass = 'vjs-' + tech.name + '-ad';
      dom.addClass(player.el(), techClass);
      player.one('vpaid.adEnd', function() {
        dom.removeClass(player.el(),techClass);
      });
      next(null, WrappedAdUnit, vastResponse);
    } catch (e) {
      next(e, adUnit, vastResponse);
    }
  });
};

VPAIDIntegrator.prototype._playAdUnit = function (adUnit, vastResponse, callback) {
  async.waterfall([
    function (next) {
      next(null, adUnit, vastResponse);
    },
    this._handshake.bind(this),
    this._initAd.bind(this),
    this._setupEvents.bind(this),
    this._addSkipButton.bind(this),
    this._linkPlayerControls.bind(this),
    this._startAd.bind(this)
  ], callback);
};

VPAIDIntegrator.prototype._handshake = function handshake(adUnit, vastResponse, next) {
  adUnit.handshakeVersion(this.options.VPAID_VERSION, function (error, version) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    if (version && isSupportedVersion(version)) {
      return next(null, adUnit, vastResponse);
    }

    return next(new VASTError('on VPAIDIntegrator._handshake, unsupported version "' + version + '"'), adUnit, vastResponse);
  });

  function isSupportedVersion(version) {
    var majorNum = major(version);
    return majorNum >= 1 && majorNum <= 2;
  }

  function major(version) {
    var parts = version.split('.');
    return parseInt(parts[0], 10);
  }
};

VPAIDIntegrator.prototype._initAd = function (adUnit, vastResponse, next) {
  var tech = this.player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  adUnit.initAd(dimension.width, dimension.height, this.VIEW_MODE.NORMAL, -1, {AdParameters: vastResponse.adParameters || ''}, function (error) {
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._createVASTTracker = function(adUnitSrc, vastResponse) {
  return new VASTTracker(adUnitSrc, vastResponse);
};

VPAIDIntegrator.prototype._setupEvents = function (adUnit, vastResponse, next) {
  var adUnitSrc = adUnit.options.src;
  var tracker = this._createVASTTracker(adUnitSrc, vastResponse);
  var player = this.player;
  var that = this;

  adUnit.on('AdSkipped', function () {
    player.trigger('vpaid.AdSkipped');
    tracker.trackSkip();
  });

  adUnit.on('AdImpression', function () {
    player.trigger('vpaid.AdImpression');
    tracker.trackImpressions();
  });

  adUnit.on('AdStarted', function () {
    player.trigger('vpaid.AdStarted');
    tracker.trackCreativeView();
    notifyPlayToPlayer();
  });

  adUnit.on('AdVideoStart', function () {
    player.trigger('vpaid.AdVideoStart');
    tracker.trackStart();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPlaying', function () {
    player.trigger('vpaid.AdPlaying');
    tracker.trackResume();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPaused', function () {
    player.trigger('vpaid.AdPaused');
    tracker.trackPause();
    notifyPauseToPlayer();
  });

  function notifyPlayToPlayer(){
    if(that._adUnit && that._adUnit.isPaused()){
      that._adUnit._paused = false;
    }
    player.trigger('play');

  }

  function notifyPauseToPlayer() {
    if(that._adUnit){
      that._adUnit._paused = true;
    }
    player.trigger('pause');
  }

  adUnit.on('AdVideoFirstQuartile', function () {
    player.trigger('vpaid.AdVideoFirstQuartile');
    tracker.trackFirstQuartile();
  });

  adUnit.on('AdVideoMidpoint', function () {
    player.trigger('vpaid.AdVideoMidpoint');
    tracker.trackMidpoint();
  });

  adUnit.on('AdVideoThirdQuartile', function () {
    player.trigger('vpaid.AdVideoThirdQuartile');
    tracker.trackThirdQuartile();
  });

  adUnit.on('AdVideoComplete', function () {
    player.trigger('vpaid.AdVideoComplete');
    tracker.trackComplete();
  });

  adUnit.on('AdClickThru', function (data) {
    player.trigger('vpaid.AdClickThru');
    var url = data.url;
    var playerHandles = data.playerHandles;
    var clickThruUrl = utilities.isNotEmptyString(url) ? url : generateClickThroughURL(vastResponse.clickThrough);

    tracker.trackClick();
    if (playerHandles && clickThruUrl) {
      window.open(clickThruUrl, '_blank');
    }

    function generateClickThroughURL(clickThroughMacro) {
      var variables = {
        ASSETURI: adUnit.options.src,
        CONTENTPLAYHEAD: 0 //In VPAID there is no method to know the current time from the adUnit
      };

      return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : null;
    }
  });

  adUnit.on('AdUserAcceptInvitation', function () {
    player.trigger('vpaid.AdUserAcceptInvitation');
    tracker.trackAcceptInvitation();
    tracker.trackAcceptInvitationLinear();
  });

  adUnit.on('AdUserClose', function () {
    player.trigger('vpaid.AdUserClose');
    tracker.trackClose();
    tracker.trackCloseLinear();
  });

  adUnit.on('AdUserMinimize', function () {
    player.trigger('vpaid.AdUserMinimize');
    tracker.trackCollapse();
  });

  adUnit.on('AdError', function () {
    player.trigger('vpaid.AdError');
    //NOTE: we track errors code 901, as noted in VAST 3.0
    tracker.trackErrorWithCode(901);
  });

  adUnit.on('AdVolumeChange', function () {
    player.trigger('vpaid.AdVolumeChange');
    var lastVolume = player.volume();
    adUnit.getAdVolume(function (error, currentVolume) {
      if (lastVolume !== currentVolume) {
        if (currentVolume === 0 && lastVolume > 0) {
          tracker.trackMute();
        }

        if (currentVolume > 0 && lastVolume === 0) {
          tracker.trackUnmute();
        }

        player.volume(currentVolume);
      }
    });
  });

  var updateViewSize = resizeAd.bind(this, player, adUnit, this.VIEW_MODE);
  var updateViewSizeThrottled = utilities.throttle(updateViewSize, 100);
  var autoResize = this.settings.autoResize;

  if (autoResize) {
    dom.addEventListener(window, 'resize', updateViewSizeThrottled);
    dom.addEventListener(window, 'orientationchange', updateViewSizeThrottled);
  }

  player.on('vast.resize', updateViewSize);
  player.on('vpaid.pauseAd', pauseAdUnit);
  player.on('vpaid.resumeAd', resumeAdUnit);

  player.one('vpaid.adEnd', function () {
    player.off('vast.resize', updateViewSize);
    player.off('vpaid.pauseAd', pauseAdUnit);
    player.off('vpaid.resumeAd', resumeAdUnit);

    if (autoResize) {
      dom.removeEventListener(window, 'resize', updateViewSizeThrottled);
      dom.removeEventListener(window, 'orientationchange', updateViewSizeThrottled);
    }
  });

  next(null, adUnit, vastResponse);

  /*** Local Functions ***/
  function pauseAdUnit() {
    adUnit.pauseAd(utilities.noop);
  }

  function resumeAdUnit() {
    adUnit.resumeAd(utilities.noop);
  }
};

VPAIDIntegrator.prototype._addSkipButton = function (adUnit, vastResponse, next) {
  var skipButton;
  var player = this.player;

  adUnit.on('AdSkippableStateChange', updateSkipButtonState);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

  next(null, adUnit, vastResponse);

  /*** Local function ***/
  function updateSkipButtonState() {
    player.trigger('vpaid.AdSkippableStateChange');
    adUnit.getAdSkippableState(function (error, isSkippable) {
      if (isSkippable) {
        if (!skipButton) {
          addSkipButton(player);
        }
      } else {
        removeSkipButton(player);
      }
    });
  }

  function addSkipButton(player) {
    skipButton = createSkipButton(player);
    player.el().appendChild(skipButton);
  }

  function removeSkipButton() {
    dom.remove(skipButton);
    skipButton = null;
  }

  function createSkipButton() {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");
    dom.addClass(skipButton, "enabled");
    skipButton.innerHTML = "Skip ad";

    skipButton.onclick = function (e) {
      adUnit.skipAd(utilities.noop);//We skip the adUnit

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }
};

VPAIDIntegrator.prototype._linkPlayerControls = function (adUnit, vastResponse, next) {
  var that = this;
  linkVolumeControl(this.player, adUnit);
  linkFullScreenControl(this.player, adUnit, this.VIEW_MODE);

  next(null, adUnit, vastResponse);

  /*** Local functions ***/
  function linkVolumeControl(player, adUnit) {
    player.on('volumechange', updateAdUnitVolume);
    adUnit.on('AdVolumeChange', updatePlayerVolume);

    player.one('vpaid.adEnd', function () {
      player.off('volumechange', updateAdUnitVolume);
    });


    /*** local functions ***/
    function updateAdUnitVolume() {
      var vol = player.muted() ? 0 : player.volume();
      adUnit.setAdVolume(vol, logError);
    }

    function updatePlayerVolume() {
      player.trigger('vpaid.AdVolumeChange');
      var lastVolume = player.volume();
      adUnit.getAdVolume(function (error, vol) {
        if (error) {
          logError(error);
        } else {
          if (lastVolume !== vol) {
            player.volume(vol);
          }
        }
      });
    }
  }

  function linkFullScreenControl(player, adUnit, VIEW_MODE) {
    var updateViewSize = resizeAd.bind(that, player, adUnit, VIEW_MODE);

    player.on('fullscreenchange', updateViewSize);

    player.one('vpaid.adEnd', function () {
      player.off('fullscreenchange', updateViewSize);
    });
  }
};

VPAIDIntegrator.prototype._startAd = function (adUnit, vastResponse, next) {
  var player = this.player;

  adUnit.startAd(function (error) {
    if (!error) {
      player.trigger('vast.adStart');
    }
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._finishPlaying = function (adUnit, vastResponse, next) {
  var player = this.player;
  adUnit.on('AdStopped', function () {
   player.trigger('vpaid.AdStopped');
   finishPlayingAd(null);
  });

  adUnit.on('AdError', function (error) {
    var errMsg = error? error.message : 'on VPAIDIntegrator, error while waiting for the adUnit to finish playing';
    finishPlayingAd(new VASTError(errMsg));
  });

  /*** local functions ***/
  function finishPlayingAd(error) {
    next(error, adUnit, vastResponse);
  }
};

VPAIDIntegrator.prototype._trackError = function trackError(response, errorCode) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: errorCode || 901});
};

function resizeAd(player, adUnit, VIEW_MODE) {
  var tech = player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  var MODE = player.isFullscreen() ? VIEW_MODE.FULLSCREEN : VIEW_MODE.NORMAL;
  adUnit.resizeAd(dimension.width, dimension.height, MODE, logError);
}

function logError(error) {
  if (error) {
    logger.error ('ERROR: ' + error.message, error);
  }
}

module.exports = VPAIDIntegrator;

},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/playerUtils":45,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"../vast/VASTResponse":25,"../vast/VASTTracker":26,"../vast/vastUtil":30,"./VPAIDAdUnitWrapper":31}],35:[function(require,module,exports){
'use strict';

var dom = require('../../utils/dom');

var element = document.createElement('div');
element.className = 'vjs-ads-label vjs-control vjs-label-hidden';
element.innerHTML = 'Advertisement';

var AdsLabelFactory = function (baseComponent) {
    return {
        /** @constructor */ 
        init: function init(player, options) {

            element.innerHTML = player.options_.plugins['ads-setup'].advertismentLabel ? player.options_.plugins['ads-setup'].advertismentLabel : 'Advertisement';
            options.el = element;


            baseComponent.call(this, player, options);

            // We asynchronously reposition the ads label element
            setTimeout(function () {
                var currentTimeComp = player.controlBar && (player.controlBar.getChild("timerControls") || player.controlBar.getChild("currentTimeDisplay"));
                if (currentTimeComp) {
                    player.controlBar.el().insertBefore(element, currentTimeComp.el());
                }
                dom.removeClass(element, 'vjs-label-hidden');
            }, 0);
        },
        el: function getElement() {
            return element;
        }
    };
}; 

module.exports = AdsLabelFactory;
},{"../../utils/dom":42}],36:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.Component;

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.AdsLabel = videojs.Component.extend(AdsLabel);

},{"./ads-label":35}],37:[function(require,module,exports){
'use strict';

/**
 * The component that shows a black screen until the ads plugin has decided if it can or it can not play the ad.
 *
 * Note: In case you wonder why instead of this black poster we don't just show the spinner loader.
 *       IOS devices do not work well with animations and the browser chrashes from time to time That is why we chose to
 *       have a secondary black poster.
 *
 *       It also makes it much more easier for the users of the plugin since it does not change the default behaviour of the
 *       spinner and the player works the same way with and without the plugin.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
var element = document.createElement('div');

var BlackPosterFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      element.className = 'vjs-black-poster';
      baseComponent.call(this, player, options);

      var posterImg = player.getChild('posterImage');

      //We need to do it asynchronously to be sure that the black poster el is on the dom.
      setTimeout(function() {
        if(posterImg && player && player.el()) {
          player.el().insertBefore(element, posterImg.el());
        }
      }, 0);
    },
    el: function getElement() {
      return element;
    }
  };
};

module.exports = BlackPosterFactory;
},{}],38:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.Component;

var BlackPoster = require('./black-poster')(baseVideoJsComponent);

videojs.BlackPoster = videojs.Component.extend(BlackPoster);

},{"./black-poster":37}],39:[function(require,module,exports){
'use strict';

var VASTClient = require('../ads/vast/VASTClient');
var VASTError = require('../ads/vast/VASTError');
var vastUtil = require('../ads/vast/vastUtil');

var VASTIntegrator = require('../ads/vast/VASTIntegrator');
var VPAIDIntegrator = require('../ads/vpaid/VPAIDIntegrator');

var async = require('../utils/async');
var dom = require('../utils/dom');
var playerUtils = require('../utils/playerUtils');
var utilities = require('../utils/utilityFunctions');

var logger = require('../utils/consoleLogger');

module.exports = function VASTPlugin(options) {


    var snapshot;
    var postsnapshot;
    var player = this;

    var vastClientOption = options.adCancelTimeout ? {skipOffset: options.adCancelTimeout} : {};
    var vast = new VASTClient(vastClientOption);
    var adsCanceled = false;
    var postrollRuning = false;
    var playPreRollOnce = false;
    var playPostRollOnce = false;
    var defaultOpts = {
        // maximum amount of time in ms to wait to receive `adsready` from the ad
        // implementation after play has been requested. Ad implementations are
        // expected to load any dynamic libraries and make any requests to determine
        // ad policies for a video during this time.
        timeout: 500,
        //TODO:finish this IOS FIX
        //Whenever you play an add on IOS, the native player kicks in and we loose control of it. On very heavy pages the 'play' event
        // May occur after the video content has already started. This is wrong if you want to play a preroll ad that needs to happen before the user
        // starts watching the content. To prevent this usec
        iosPrerollCancelTimeout: 2000,
        // maximun amount of time for the ad to actually start playing. If this timeout gets
        // triggered the ads will be cancelled
        adCancelTimeout: 3000,
        // Boolean flag that configures the player to play a new ad before the user sees the video again
        // the current video
        playAdAlways: false,
        // Flag to enable or disable the ads by default.
        adsEnabled: true,
        // Boolean flag to enable or disable the resize with window.resize or orientationchange
        autoResize: true,
        // Path to the VPAID flash ad's loader
        vpaidFlashLoaderPath: '/VPAIDFlash.swf',
        // verbosity of console logging:
        // 0 - error
        // 1 - error, warn
        // 2 - error, warn, info
        // 3 - error, warn, info, log
        // 4 - error, warn, info, log, debug
        verbosity: 0
    };


    var settings = utilities.extend({}, defaultOpts, options || {});

    if (utilities.isUndefined(settings.adTagUrl) && utilities.isDefined(settings.url)) {
        settings.adTagUrl = settings.url;
    }

    if (utilities.isString(settings.adTagUrl)) {
        settings.adTagUrl = utilities.echoFn(settings.adTagUrl);
    }

    if (utilities.isDefined(settings.adTagXML) && !utilities.isFunction(settings.adTagXML)) {
        return trackAdError(new VASTError('on VideoJS VAST plugin, the passed adTagXML option does not contain a function'));
    }

    if (!utilities.isDefined(settings.adTagUrl) && !utilities.isFunction(settings.adTagXML)) {
        return trackAdError(new VASTError('on VideoJS VAST plugin, missing adTagUrl on options object'));
    }


    if (utilities.isUndefined(settings.adPostTagUrl) && utilities.isDefined(settings.url)) {
        settings.adPostTagUrl = settings.url;
    }

    if (utilities.isString(settings.adPostTagUrl)) {
        settings.adPostTagUrl = utilities.echoFn(settings.adPostTagUrl);
    }

    if (utilities.isDefined(settings.adTagXML) && !utilities.isFunction(settings.adTagXML)) {
        return trackAdError(new VASTError('on VideoJS VAST plugin, the passed adTagXML option does not contain a function'));
    }

    if (!utilities.isDefined(settings.adTagUrl) && !utilities.isFunction(settings.adTagXML) && !utilities.isFunction(settings.adPostTagUrl)) {
        return trackAdError(new VASTError('on VideoJS VAST plugin, missing adTagUrl on options object'));
    }





    logger.setVerbosity(0);

    vastUtil.runFlashSupportCheck(settings.vpaidFlashLoaderPath);// Necessary step for VPAIDFLASHClient to work.

    playerUtils.prepareForAds(player);

    if (settings.playAdAlways) {
        // No matter what happens we play a new ad before the user sees the video again.
        player.on('vast.contentEnd', function () {
            setTimeout(function () {
                player.trigger('vast.reset');
            }, 0);
        });
    }

    player.on('vast.firstPlay', tryToPlayPrerollAd);

    player.on('vast.reset', function () {
        //If we are reseting the plugin, we don't want to restore the content
        snapshot = null;
        //  playPreRollOnce = false;

        cancelAds();
    });

    player.on('vast.contentEnd', tryToPlayPostrollAd);


    player.vast = {
        isEnabled: function () {
            return settings.adsEnabled;
        },
        enable: function () {
            settings.adsEnabled = true;
        },
        disable: function () {
            settings.adsEnabled = false;
        }
    };

    return player.vast;

    /**** Local functions ****/
    function tryToPlayPrerollAd() {

        //We remove the poster to prevent flickering whenever the content starts playing

        playerUtils.removeNativePoster(player);


//mixas check preroll once
        if (playPreRollOnce)
        {
            return;
        } else {
            playPreRollOnce = true;
        }
        playerUtils.once(player, ['vast.adsCancel', 'vast.adEnd'], function () {
            removeAdUnit();
            restoreVideoContent();
        });
        player.trigger('vast.blockPostRoll'); // MIXAS blocking postroll
        async.waterfall([
            checkAdsEnabled,
            preparePlayerForAd,
            startAdCancelTimeout,
            playPrerollAd
        ], function (error, response) {
            if (error) {
                trackAdError(error, response);
            } else {
                player.trigger('vast.adEnd');
            }
        });

        /*** Local functions ***/

        function removeAdUnit() {
            if (player.vast && player.vast.adUnit) {
                player.vast.adUnit = null; //We remove the adUnit
            }
        }

        function restoreVideoContent() {

            setupContentEvents();
            if (snapshot) {
               playerUtils.restorePlayerSnapshot(player, snapshot);
                //snapshot = null;
            }
        }

        function setupContentEvents() {
            playerUtils.once(player, ['playing', 'vast.reset', 'vast.firstPlay'], function (evt) {
                if (evt.type !== 'playing') {
                    return;
                }

                player.trigger('vast.contentStart');

                playerUtils.once(player, ['ended', 'vast.reset', 'vast.firstPlay'], function (evt) {
                    if (evt.type === 'ended') {
                        player.trigger('vast.contentEnd');
                    }
                });
            });
        }

        function checkAdsEnabled(next) {

            if (settings.adsEnabled) {
                return next(null);
            }
            next(new VASTError('Ads are not enabled'));
        }

        function preparePlayerForAd(next) {
            if (canPlayPrerollAd()) {

                snapshot = playerUtils.getPlayerSnapshot(player);
                postsnapshot = playerUtils.getPlayerSnapshot(player);
               
                player.pause();
                addSpinnerIcon();

                if (player.paused()) {
                    next(null);
                } else {
                    playerUtils.once(player, ['playing'], function () {
                        player.pause();
                        next(null);
                    });
                }
            } else {
                next(new VASTError('video content has been playing before preroll ad'));
            }
        }

        function canPlayPrerollAd() {
            return !utilities.isIPhone() || player.currentTime() <= settings.iosPrerollCancelTimeout;
        }

        function startAdCancelTimeout(next) {
            var adCancelTimeoutId;
            adsCanceled = false;

            adCancelTimeoutId = setTimeout(function () {
                trackAdError(new VASTError('timeout while waiting for the video to start playing', 402));
            }, settings.adCancelTimeout);

            playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], clearAdCancelTimeout);

            /*** local functions ***/
            function clearAdCancelTimeout() {
                if (adCancelTimeoutId) {
                    clearTimeout(adCancelTimeoutId);
                    adCancelTimeoutId = null;
                }
            }

            next(null);
        }

        function addSpinnerIcon() {
            dom.addClass(player.el(), 'vjs-vast-ad-loading');
            playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], removeSpinnerIcon);
        }

        function removeSpinnerIcon() {
            //IMPORTANT NOTE: We remove the spinnerIcon asynchronously to give time to the browser to start the video.
            // If we remove it synchronously we see a flash of the content video before the ad starts playing.
            setTimeout(function () {
                dom.removeClass(player.el(), 'vjs-vast-ad-loading');
            }, 100);
        }

    }
    function tryToPlayPostrollAd() {

        // player.trigger('vast.blockPostRoll');

        //We remove the poster to prevent flickering whenever the content starts playing
        playerUtils.removeNativePoster(player);

//        playerUtils.once(player, ['vast.adsCancel', 'vast.adEnd'], function () {
//            console.log('removing once');
//            removeAdUnit();
//            restoreVideoContent();
//        });

        //  player.trigger('vast.blockPostRoll');

        async.waterfall([
            checkAdsEnabled,
            preparePlayerForAd,
            startAdCancelTimeout,
            playPostrollAd
        ], function (error, response) {
            if (error) {
                trackAdError(error, response);
            } else {
                player.trigger('vast.adEnd');
            }
        });

        playerUtils.once(player, ['vast.adEnd'], function () {

            // player.trigger('vast.adSkip');
            removeAdUnit();
            restoreVideoContent();

        });
        /*** Local functions ***/
        function resetPreroll()
        {
            //mixas trying to reset player to start
            playPreRollOnce = true;
            player.trigger('vast.blockPostRoll');
         
        }

        function removeAdUnit() {
            if (player.vast && player.vast.adUnit) {
                player.vast.adUnit = null; //We remove the adUnit
            }
        }

        function restoreVideoContent() {

            setupContentEvents();
            
            if (postsnapshot) {
                postsnapshot.playing = false;
                playerUtils.restorePlayerSnapshot(player, postsnapshot);
                player.pause(true);
                snapshot = null;
            }
        }

        function setupContentEvents() {
            playerUtils.once(player, ['playing', 'vast.reset', 'vast.firstPlay'], function (evt) {
                if (evt.type !== 'playing') {
                    return;
                }

                player.trigger('vast.contentStart');

                playerUtils.once(player, ['ended', 'vast.reset', 'vast.firstPlay'], function (evt) {
                    if (evt.type === 'ended') {
                        player.trigger('vast.contentEnd');
                    }
                });
            });
        }

        function checkAdsEnabled(next) {
            if (settings.adsEnabled) {
                return next(null);
            }
            next(new VASTError('Ads are not enabled'));
        }

        function preparePlayerForAd(next) {
            if (canPlayPrerollAd()) {
                //    snapshot = playerUtils.getPlayerSnapshot(player);
                player.pause();
                addSpinnerIcon();

                if (player.paused()) {
                    next(null);
                } else {
                    playerUtils.once(player, ['playing'], function () {
                        player.pause();
                        next(null);
                    });
                }
            } else {
                next(new VASTError('video content has been playing before preroll ad'));
            }
        }

        function canPlayPrerollAd() {
            return !utilities.isIPhone() || player.currentTime() <= settings.iosPrerollCancelTimeout;
        }

        function startAdCancelTimeout(next) {
            var adCancelTimeoutId;
            adsCanceled = false;

            adCancelTimeoutId = setTimeout(function () {
                trackAdError(new VASTError('timeout while waiting for the video to start playing', 402));
            }, settings.adCancelTimeout);

            playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], clearAdCancelTimeout);

            /*** local functions ***/
            function clearAdCancelTimeout() {
                if (adCancelTimeoutId) {
                    clearTimeout(adCancelTimeoutId);
                    adCancelTimeoutId = null;
                }
            }

            next(null);
        }

        function addSpinnerIcon() {
            dom.addClass(player.el(), 'vjs-vast-ad-loading');
            playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], removeSpinnerIcon);
        }

        function removeSpinnerIcon() {
            //IMPORTANT NOTE: We remove the spinnerIcon asynchronously to give time to the browser to start the video.
            // If we remove it synchronously we see a flash of the content video before the ad starts playing.
            setTimeout(function () {
                dom.removeClass(player.el(), 'vjs-vast-ad-loading');
            }, 100);
        }

    }

    function cancelAds() {
        player.trigger('vast.adsCancel');
        adsCanceled = true;
    }

    function playPrerollAd(callback) {
        async.waterfall([
            getVastResponse,
            playAd
        ], callback);
    }
    function playPostrollAd(callback) {

        
        async.waterfall([
            getVastPostResponse,
            playAd
        ], callback);
    }

    function getVastResponse(callback) {
        vast.getVASTResponse(settings.adTagUrl ? settings.adTagUrl() : settings.adTagXML, callback);
    }
    function getVastPostResponse(callback) {
        vast.getVASTResponse(settings.adPostTagUrl ? settings.adPostTagUrl() : settings.adTagXML, callback);
    }

    function playAd(vastResponse, callback) {
        //TODO: Find a better way to stop the play. The 'playPrerollWaterfall' ends in an inconsistent situation
        //If the state is not 'preroll?' it means the ads were canceled therefore, we break the waterfall

        if (adsCanceled) {
            return;
        }

        var adIntegrator = isVPAID(vastResponse) ? new VPAIDIntegrator(player, settings) : new VASTIntegrator(player);
        var adFinished = false;

        playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], function (evt) {
            if (evt.type === 'vast.adStart') {
                addAdsLabel();
            }
        });

        playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeAdsLabel);

        if (utilities.isIDevice()) {
            preventManualProgress();
        }

        player.vast.vastResponse = vastResponse;
        logger.debug("calling adIntegrator.playAd() with vastResponse:", vastResponse);
        player.vast.adUnit = adIntegrator.playAd(vastResponse, callback);

        /*** Local functions ****/
        function addAdsLabel() {
            if (adFinished || player.controlBar.getChild('AdsLabel')) {
                return;
            }

            player.controlBar.addChild('AdsLabel');
        }

        function removeAdsLabel() {
            player.controlBar.removeChild('AdsLabel');
            adFinished = true;
        }

        function preventManualProgress() {
            //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that the user forwarded/rewound the ad
            var PROGRESS_THRESHOLD = 3;
            var previousTime = 0;
            var skipad_attempts = 0;

            player.on('timeupdate', preventAdSeek);
            player.on('ended', preventAdSkip);

            playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adError'], stopPreventManualProgress);

            /*** Local functions ***/
            function preventAdSkip() {
                // Ignore ended event if the Ad time was not 'near' the end
                // and revert time to the previous 'valid' time
                if ((player.duration() - previousTime) > PROGRESS_THRESHOLD) {
                    player.pause(true); // this reduce the video jitter if the IOS skip button is pressed
                    player.play(true); // we need to trigger the play to put the video element back in a valid state
                    player.currentTime(previousTime);
                }
            }

            function preventAdSeek() {
                var currentTime = player.currentTime();
                var progressDelta = Math.abs(currentTime - previousTime);
                if (progressDelta > PROGRESS_THRESHOLD) {
                    skipad_attempts += 1;
                    if (skipad_attempts >= 2) {
                        player.pause(true);
                    }
                    player.currentTime(previousTime);
                } else {
                    previousTime = currentTime;
                }
            }

            function stopPreventManualProgress() {
                player.off('timeupdate', preventAdSeek);
                player.off('ended', preventAdSkip);

            }
        }
    }

    function trackAdError(error, vastResponse) {
        player.trigger({type: 'vast.adError', error: error});
        cancelAds();
        logger.error('AD ERROR:', error.message, error, vastResponse);
    }

    function isVPAID(vastResponse) {
        var i, len;
        var mediaFiles = vastResponse.mediaFiles;
        for (i = 0, len = mediaFiles.length; i < len; i++) {
            if (vastUtil.isVPAID(mediaFiles[i])) {
                return true;
            }
        }
        return false;
    }
};

},{"../ads/vast/VASTClient":22,"../ads/vast/VASTError":23,"../ads/vast/VASTIntegrator":24,"../ads/vast/vastUtil":30,"../ads/vpaid/VPAIDIntegrator":34,"../utils/async":40,"../utils/consoleLogger":41,"../utils/dom":42,"../utils/playerUtils":45,"../utils/utilityFunctions":47}],40:[function(require,module,exports){
//Small subset of async

var utilities = require('./utilityFunctions');

var async = {};

async.setImmediate = function (fn) {
  setTimeout(fn, 0);
};

async.iterator = function (tasks) {
  var makeCallback = function (index) {
    var fn = function () {
      if (tasks.length) {
        tasks[index].apply(null, arguments);
      }
      return fn.next();
    };
    fn.next = function () {
      return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
    };
    return fn;
  };
  return makeCallback(0);
};


async.waterfall = function (tasks, callback) {
  callback = callback || function () { };
  if (!utilities.isArray(tasks)) {
    var err = new Error('First argument to waterfall must be an array of functions');
    return callback(err);
  }
  if (!tasks.length) {
    return callback();
  }
  var wrapIterator = function (iterator) {
    return function (err) {
      if (err) {
        callback.apply(null, arguments);
        callback = function () {
        };
      }
      else {
        var args = Array.prototype.slice.call(arguments, 1);
        var next = iterator.next();
        if (next) {
          args.push(wrapIterator(next));
        }
        else {
          args.push(callback);
        }
        async.setImmediate(function () {
          iterator.apply(null, args);
        });
      }
    };
  };
  wrapIterator(async.iterator(tasks))();
};

async.when = function (condition, callback) {
  if (!utilities.isFunction(callback)) {
    throw new Error("async.when error: missing callback argument");
  }

  var isAllowed = utilities.isFunction(condition) ? condition : function () {
    return !!condition;
  };

  return function () {
    var args = utilities.arrayLikeObjToArray(arguments);
    var next = args.pop();

    if (isAllowed.apply(null, args)) {
      return callback.apply(this, arguments);
    }

    args.unshift(null);
    return next.apply(null, args);
  };
};

module.exports = async;


},{"./utilityFunctions":47}],41:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var _verbosity = 5;
var _prefix = "[videojs-vast-vpaid] ";

function setVerbosity (v)
{
    _verbosity = v;
}

function handleMsg (method, args)
{
    if ((args.length) > 0 && (typeof args[0] === 'string'))
    {
        args[0] = _prefix + args[0];
    }

    if (method.apply)
    {
        method.apply (console, Array.prototype.slice.call(args));
    }
    else
    {
        method (Array.prototype.slice.call(args));
    }
}

function debug ()
{
    if (_verbosity < 4)
    {
        return;
    }

    if (typeof console.debug === 'undefined')
    {
        // IE 10 doesn't have a console.debug() function
        handleMsg (console.log, arguments);
    }
    else
    {
        handleMsg (console.debug, arguments);
    }
}

function log ()
{
    if (_verbosity < 3)
    {
        return;
    }

    handleMsg (console.log, arguments);
}

function info ()
{
    if (_verbosity < 2)
    {
        return;
    }

    handleMsg (console.info, arguments);
}


function warn ()
{
    if (_verbosity < 1)
    {
        return;
    }

    handleMsg (console.warn, arguments);
}

function error ()
{
    handleMsg (console.error, arguments);
}

var consoleLogger = {
    setVerbosity: setVerbosity,
    debug: debug,
    log: log,
    info: info,
    warn: warn,
    error: error
};

if ((typeof (console) === 'undefined') || !console.log)
{
    // no console available; make functions no-op
    consoleLogger.debug = function () {};
    consoleLogger.log = function () {};
    consoleLogger.info = function () {};
    consoleLogger.warn = function () {};
    consoleLogger.error = function () {};
}

module.exports = consoleLogger;
},{}],42:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var dom = {};

dom.isVisible = function isVisible(el) {
  var style = window.getComputedStyle(el);
  return style.visibility !== 'hidden';
};

dom.isHidden = function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === 'none';
};

dom.isShown = function isShown(el) {
  return !dom.isHidden(el);
};

dom.hide = function hide(el) {
  el.__prev_style_display_ = el.style.display;
  el.style.display = 'none';
};

dom.show = function show(el) {
  if (dom.isHidden(el)) {
    el.style.display = el.__prev_style_display_;
  }
  el.__prev_style_display_ = undefined;
};

dom.hasClass = function hasClass(el, cssClass) {
  var classes, i, len;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.contains(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    cssClass = (cssClass || '');

    for (i = 0, len = classes.length; i < len; i += 1) {
      if (classes[i] === cssClass) {
        return true;
      }
    }
  }
  return false;
};

dom.addClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.add(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {
      classes.push(cssClass);
      el.setAttribute('class', classes.join(' '));
    }
  }
};

dom.removeClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.remove(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    var newClasses = [];
    var i, len;
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {

      for (i = 0, len = classes.length; i < len; i += 1) {
        if (cssClass !== classes[i]) {
          newClasses.push(classes[i]);
        }
      }
      el.setAttribute('class', newClasses.join(' '));
    }
  }
};

dom.addEventListener = function addEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.addEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.addEventListener(el, t, handler);
    });
    return;
  }

  if (el.addEventListener) {
    el.addEventListener(type, handler, false);
  } else if (el.attachEvent) {
    // WARNING!!! this is a very naive implementation !
    // the event object that should be passed to the handler
    // would not be there for IE8
    // we should use "window.event" and then "event.srcElement"
    // instead of "event.target"
    el.attachEvent("on" + type, handler);
  }
};

dom.removeEventListener = function removeEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.removeEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.removeEventListener(el, t, handler);
    });
    return;
  }

  if (el.removeEventListener) {
    el.removeEventListener(type, handler, false);
  } else if (el.detachEvent) {
    el.detachEvent("on" + type, handler);
  } else {
    el["on" + type] = null;
  }
};

dom.dispatchEvent = function dispatchEvent(el, event) {
  if (el.dispatchEvent) {
    el.dispatchEvent(event);
  } else {
    el.fireEvent("on" + event.eventType, event);
  }
};

dom.isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

dom.getTextContent = function getTextContent(el){
  return el.textContent || el.text;
};

dom.prependChild = function prependChild(parent, child) {
  if(child.parentNode){
    child.parentNode.removeChild(child);
  }
  return parent.insertBefore(child, parent.firstChild);
};

dom.remove = function removeNode(node){
  if(node && node.parentNode){
    node.parentNode.removeChild(node);
  }
};

dom.isDomElement = function isDomElement(o) {
  return o instanceof Element;
};

dom.click = function(el, handler) {
  dom.addEventListener(el, 'click', handler);
};

dom.once = function(el, type, handler) {
  function handlerWrap() {
    handler.apply(null, arguments);
    dom.removeEventListener(el, type, handlerWrap);
  }

  dom.addEventListener(el, type, handlerWrap);
};

//Note: there is no getBoundingClientRect on iPad so we need a fallback
dom.getDimension = function getDimension(element) {
  var rect;

  //On IE9 and below getBoundingClientRect does not work consistently
  if(!utilities.isOldIE() && element.getBoundingClientRect) {
    rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height
    };
  }

  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

module.exports = dom;
},{"./utilityFunctions":47}],43:[function(require,module,exports){
'use strict';

var urlUtils = require('./urlUtils');
var utilities = require('./utilityFunctions');

function HttpRequestError(message) {
  this.message = 'HttpRequest Error: ' + (message || '');
}
HttpRequestError.prototype = new Error();
HttpRequestError.prototype.name = "HttpRequest Error";

function HttpRequest(createXhr) {
  if (!utilities.isFunction(createXhr)) {
    throw new HttpRequestError('Missing XMLHttpRequest factory method');
  }

  this.createXhr = createXhr;
}

HttpRequest.prototype.run = function (method, url, callback, options) {
  sanityCheck(url, callback, options);
  var timeout, timeoutId;
  var xhr = this.createXhr();
  options = options || {};
  timeout = utilities.isNumber(options.timeout) ? options.timeout : 0;

  xhr.open(method, urlUtils.urlParts(url).href, true);

  if (options.headers) {
    setHeaders(xhr, options.headers);
  }

  if (options.withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.onload = function () {
    var statusText, response, status;

    /**
     * The only way to do a secure request on IE8 and IE9 is with the XDomainRequest object. Unfortunately, microsoft is
     * so nice that decided that the status property and the 'getAllResponseHeaders' method where not needed so we have to
     * fake them. If the request gets done with an XDomainRequest instance, we will assume that there are no headers and
     * the status will always be 200. If you don't like it, DO NOT USE ANCIENT BROWSERS!!!
     *
     * For mor info go to: https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx
     */
    if (!xhr.getAllResponseHeaders) {
      xhr.getAllResponseHeaders = function () {
        return null;
      };
    }

    if (!xhr.status) {
      xhr.status = 200;
    }

    if (utilities.isDefined(timeoutId)) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    statusText = xhr.statusText || '';

    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
    // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
    response = ('response' in xhr) ? xhr.response : xhr.responseText;

    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
    status = xhr.status === 1223 ? 204 : xhr.status;

    callback(
      status,
      response,
      xhr.getAllResponseHeaders(),
      statusText);
  };

  xhr.onerror = requestError;
  xhr.onabort = requestError;

  xhr.send();

  if (timeout > 0) {
    timeoutId = setTimeout(function () {
      xhr && xhr.abort();
    }, timeout);
  }

  function sanityCheck(url, callback, options) {
    if (!utilities.isString(url) || utilities.isEmptyString(url)) {
      throw new HttpRequestError("Invalid url '" + url + "'");
    }

    if (!utilities.isFunction(callback)) {
      throw new HttpRequestError("Invalid handler '" + callback + "' for the http request");
    }

    if (utilities.isDefined(options) && !utilities.isObject(options)) {
      throw new HttpRequestError("Invalid options map '" + options + "'");
    }
  }

  function setHeaders(xhr, headers) {
    utilities.forEach(headers, function (value, key) {
      if (utilities.isDefined(value)) {
        xhr.setRequestHeader(key, value);
      }
    });
  }

  function requestError() {
    callback(-1, null, null, '');
  }
};

HttpRequest.prototype.get = function (url, callback, options) {
  this.run('GET', url, processResponse, options);

  function processResponse(status, response, headersString, statusText) {
    if (isSuccess(status)) {
      callback(null, response, status, headersString, statusText);
    } else {
      callback(new HttpRequestError(statusText), response, status, headersString, statusText);
    }
  }

  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
};

function createXhr() {
  var xhr = new XMLHttpRequest();
  if (!("withCredentials" in xhr)) {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
  }
  return xhr;
}

var http = new HttpRequest(createXhr);

module.exports = {
  http: http,
  HttpRequest: HttpRequest,
  HttpRequestError: HttpRequestError,
  createXhr: createXhr
};

},{"./urlUtils":46,"./utilityFunctions":47}],44:[function(require,module,exports){
'use strict';

module.exports = {
  html5: [
    'text/javascript',
    'text/javascript1.0',
    'text/javascript1.2',
    'text/javascript1.4',
    'text/jscript',
    'application/javascript',
    'application/x-javascript',
    'text/ecmascript',
    'text/ecmascript1.0',
    'text/ecmascript1.2',
    'text/ecmascript1.4',
    'text/livescript',
    'application/ecmascript',
    'application/x-ecmascript',
  ],

  flash: [
    'application/x-shockwave-flash'
  ],
};

},{}],45:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var utilities = require('./utilityFunctions');
var _canPayPostRoll = true;
var playerUtils = {};

/**
 * Returns an object that captures the portions of player state relevant to
 * video playback. The result of this function can be passed to
 * restorePlayerSnapshot with a player to return the player to the state it
 * was in when this function was invoked.
 * @param {object} player The videojs player object
 */
playerUtils.getPlayerSnapshot = function getPlayerSnapshot(player) {
    var tech = player.el().querySelector('.vjs-tech');

    var snapshot = {
        ended: player.ended(),
        src: player.currentSrc(),
        currentTime: player.currentTime(),
        type: player.currentType(),
        playing: !player.paused(),
        suppressedTracks: getSuppressedTracks(player)
    };

    if (tech) {
        snapshot.nativePoster = tech.poster;
        snapshot.style = tech.getAttribute('style');
    }
    return snapshot;

    /**** Local Functions ****/
    function getSuppressedTracks(player) {
        var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];

        if (tracks && utilities.isArray(tracks.tracks_)) {
            tracks = tracks.tracks_;
        }

        if (!utilities.isArray(tracks)) {
            tracks = [];
        }

        var suppressedTracks = [];
        tracks.forEach(function (track) {
            suppressedTracks.push({
                track: track,
                mode: track.mode
            });
            track.mode = 'disabled';
        });

        return suppressedTracks;
    }
};

/**
 * Attempts to modify the specified player so that its state is equivalent to
 * the state of the snapshot.
 * @param {object} snapshot - the player state to apply
 */
playerUtils.restorePlayerSnapshot = function restorePlayerSnapshot(player, snapshot) {
    var tech = player.el().querySelector('.vjs-tech');
    var attempts = 20; // the number of remaining attempts to restore the snapshot

    if (snapshot.nativePoster) {
        tech.poster = snapshot.nativePoster;
    }

    if ('style' in snapshot) {
        // overwrite all css style properties to restore state precisely
        tech.setAttribute('style', snapshot.style || '');
    }

    if (hasSrcChanged(player, snapshot)) {

        // on ios7, fiddling with textTracks too early will cause safari to crash
        player.one('contentloadedmetadata', restoreTracks);

        player.one('canplay', tryToResume);
        ensureCanplayEvtGetsFired();

        // if the src changed for ad playback, reset it
        player.src({src: snapshot.src, type: snapshot.type});

        // safari requires a call to `load` to pick up a changed source
        player.load();

    } else {
        restoreTracks();

        if (snapshot.playing) {
            player.play();
        }
    }

    /*** Local Functions ***/

    /**
     * Sometimes firefox does not trigger the 'canplay' evt.
     * This code ensure that it always gets triggered triggered.
     */
    function ensureCanplayEvtGetsFired() {
        var timeoutId = setTimeout(function () {
            player.trigger('canplay');
        }, 1000);

        player.one('canplay', function () {
            clearTimeout(timeoutId);
        });
    }

    /**
     * Determine whether the player needs to be restored to its state
     * before ad playback began. With a custom ad display or burned-in
     * ads, the content player state hasn't been modified and so no
     * restoration is required
     */
    function hasSrcChanged(player, snapshot) {
        if (player.src()) {
            return player.src() !== snapshot.src;
        }
        // the player was configured through source element children
        return player.currentSrc() !== snapshot.src;
    }

    function restoreTracks() {
        var suppressedTracks = snapshot.suppressedTracks;
        suppressedTracks.forEach(function (trackSnapshot) {
            trackSnapshot.track.mode = trackSnapshot.mode;
        });
    }

    /**
     * Determine if the video element has loaded enough of the snapshot source
     * to be ready to apply the rest of the state
     */
    function tryToResume() {

        // if some period of the video is seekable, resume playback
        // otherwise delay a bit and then check again unless we're out of attempts

        if (!playerUtils.isReadyToResume(player) && attempts--) {
            setTimeout(tryToResume, 50);
        } else {
            try {
                if (player.currentTime() !== snapshot.currentTime) {
                    if (snapshot.playing) { // if needed restore playing status after seek completes
                        player.one('seeked', function () {
                            player.play();
                        });
                    }
                    player.currentTime(snapshot.currentTime);

                } else if (snapshot.playing) {
                    // if needed and no seek has been performed, restore playing status immediately
                    player.play();
                }

            } catch (e) {
                videojs.log.warn('Failed to resume the content after an advertisement', e);
            }
        }
    }
};

playerUtils.isReadyToResume = function (player) {

    if (player.readyState() > 1) {
        // some browsers and media aren't "seekable".
        // readyState greater than 1 allows for seeking without exceptions
        return true;
    }

    if (player.seekable() === undefined) {
        // if the player doesn't expose the seekable time ranges, try to
        // resume playback immediately
        return true;
    }

    if (player.seekable().length > 0) {
        // if some period of the video is seekable, resume playback
        return true;
    }

    return false;
};

/**
 * This function prepares the player to display ads.
 * Adding convenience events like the 'vast.firsPlay' that gets fired when the video is first played
 * and ads the blackPoster to the player to prevent content from being displayed before the preroll ad.
 *
 * @param player
 */
playerUtils.prepareForAds = function (player) {
    var blackPoster = player.addChild('blackPoster');
    var _firstPlay = true;
    var _prerollHasePlayed = false; //mixas added to detect first play
    playerUtils._canPayPostRoll = true;
    var volumeSnapshot;


    monkeyPatchPlayerApi();

    player.on('play', tryToTriggerFirstPlay);



    player.on('vast.reset', resetFirstPlay);//Every time we change the sources we reset the first play.
    player.on('vast.firstPlay', restoreContentVolume);
    player.on('error', hideBlackPoster);//If there is an error in the player we remove the blackposter to show the err msg
    player.on('vast.adStart', hideBlackPoster);
    player.on('vast.adsCancel', hideBlackPoster);
    player.on('vast.adError', hideBlackPoster);
    player.on('vast.adStart', addStyles);
    player.on('vast.adEnd', removeStyles);
    player.on('vast.adsCancel', removeStyles);
    player.on('vast.adEnd', function () {


    });




    player.on('vast.blockPostRoll', function () {
        _firstPlay = false;
        _canPayPostRoll = false;
    });
    player.on('vast.unblockPostRoll', function () {

        _canPayPostRoll = true;
    });

    playerUtils.isPlayedPreRol = function () {
        return _prerollHasePlayed;
    };
    playerUtils.canplayPostRoll = function ()
    {
        return _canPayPostRoll;
    };
    function tryToTriggerEndsPlay()
    {
        if (_canPayPostRoll)
        {
            _firstPlay = true;
            player.trigger('vast.firstPlay');
        }

    }

    /*** Local Functions ***/

    /**
     What this function does is ugly and horrible and I should think twice before calling myself a good developer. With that said,
     it is the best solution I could find to mute the video until the 'play' event happens (on mobile devices) and the plugin can decide whether
     to play the ad or not.
     
     We also need this monkeypatch to be able to pause and resume an ad using the player's API
     
     If you have a better solution please do tell me.
     */
    function monkeyPatchPlayerApi() {

        /**
         * Monkey patch needed to handle firstPlay and resume of playing ad.
         *
         * @param callOrigPlay necessary flag to prevent infinite loop when you are restoring a VAST ad.
         * @returns {player}
         */
        var origPlay = player.play;
        player.play = function (callOrigPlay) {
            var that = this;

            if (isFirstPlay()) {
                firstPlay();
            } else {
                resume(callOrigPlay);
            }

            return this;

            /*** local functions ***/
            function firstPlay() {
                if (!utilities.isIPhone()) {
                    volumeSnapshot = saveVolumeSnapshot();
                    player.muted(true);
                }

                origPlay.apply(that, arguments);
            }

            function resume(callOrigPlay) {
                if (isAdPlaying() && !callOrigPlay) {
                    player.vast.adUnit.resumeAd();
                } else {
                    origPlay.apply(that, arguments);
                }
            }
        };


        /**
         * Needed monkey patch to handle pause of playing ad.
         *
         * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
         * @returns {player}
         */
        var origPause = player.pause;
        player.pause = function (callOrigPause) {
            if (isAdPlaying() && !callOrigPause) {
                player.vast.adUnit.pauseAd();
            } else {
                origPause.apply(this, arguments);
            }
            return this;
        };


        /**
         * Needed monkey patch to handle paused state of the player when ads are playing.
         *
         * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
         * @returns {player}
         */
        var origPaused = player.paused;
        player.paused = function (callOrigPaused) {
            if (isAdPlaying() && !callOrigPaused) {
                return player.vast.adUnit.isPaused();
            }
            return origPaused.apply(this, arguments);
        };
    }
 
    function isAdPlaying() {
        return player.vast && player.vast.adUnit;
    }

    function tryToTriggerFirstPlay() {
        if (_prerollHasePlayed)
        {
            return;
        }
        if (isFirstPlay()) {
            _firstPlay = false;
            _prerollHasePlayed = true;//mixas added to detect first play
            player.trigger('vast.firstPlay');
        }
    }

    function resetFirstPlay() {
        _firstPlay = true;
        _prerollHasePlayed = false;
        _canPayPostRoll = true;
        blackPoster.show();
        restoreContentVolume();
    }

    function isFirstPlay() {
        return _firstPlay;
    }

    function saveVolumeSnapshot() {
        return {
            muted: player.muted(),
            volume: player.volume()
        };
    }

    function restoreContentVolume() {
        if (volumeSnapshot) {
            player.currentTime(0);
            restoreVolumeSnapshot(volumeSnapshot);
            volumeSnapshot = null;
        }
    }

    function restoreVolumeSnapshot(snapshot) {
        if (utilities.isObject(snapshot)) {
            player.volume(snapshot.volume);
            player.muted(snapshot.muted);
        }
    }

    function hideBlackPoster() {
        if (!dom.hasClass(blackPoster.el(), 'vjs-hidden')) {
            blackPoster.hide();
        }
    }

    function addStyles() {
        dom.addClass(player.el(), 'vjs-ad-playing');
    }

    function removeStyles() {
      
        dom.removeClass(player.el(), 'vjs-ad-playing');
    }
};

/**
 * Remove the poster attribute from the video element tech, if present. When
 * reusing a video element for multiple videos, the poster image will briefly
 * reappear while the new source loads. Removing the attribute ahead of time
 * prevents the poster from showing up between videos.
 * @param {object} player The videojs player object
 */
playerUtils.removeNativePoster = function (player) {
    var tech = player.el().querySelector('.vjs-tech');
    if (tech) {
        tech.removeAttribute('poster');
    }
};

/**
 * Helper function to listen to many events until one of them gets fired, then we
 * execute the handler and unsubscribe all the event listeners;
 *
 * @param player specific player from where to listen for the events
 * @param events array of events
 * @param handler function to execute once one of the events fires
 */
playerUtils.once = function once(player, events, handler) {
    function listener() {
        handler.apply(null, arguments);

        events.forEach(function (event) {
            player.off(event, listener);
        });
    }

    events.forEach(function (event) {
        player.on(event, listener);
    });
};


module.exports = playerUtils;
},{"./dom":42,"./utilityFunctions":47}],46:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

/**
 *
 * IMPORTANT NOTE: This function comes from angularJs and was originally called urlResolve
 *                 you can take a look at the original code here https://github.com/angular/angular.js/blob/master/src/ng/urlUtils.js
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE >= 8 and <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * IE7 does not normalize the URL when assigned to an anchor node.  (Apparently, it does, if one
 * uses the inner HTML approach to assign the URL as part of an HTML snippet -
 * http://stackoverflow.com/a/472729)  However, setting img[src] does normalize the URL.
 * Unfortunately, setting img[src] to something like "javascript:foo" on IE throws an exception.
 * Since the primary usage for normalizing URLs is to sanitize such URLs, we can't use that
 * method and IE < 8 is unsupported.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @kind function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                             |
 *   | hash          | The hash string, minus the hash symbol
 *   | hostname      | The hostname
 *   | port          | The port, without ":"
 *   | pathname      | The pathname, beginning with "/"
 *
 */

var urlParsingNode = document.createElement("a");
/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
var msie = document.documentMode;

function urlParts(url) {
  var href = url;

  if (msie) {
    // Normalize before parse.  Refer Implementation Notes on why this is
    // done in two steps on IE.
    urlParsingNode.setAttribute("href", href);
    href = urlParsingNode.href;
  }

  urlParsingNode.setAttribute('href', href);

  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  return {
    href: urlParsingNode.href,
    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    host: urlParsingNode.host,
    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: utilities.isNotEmptyString(urlParsingNode.port)? urlParsingNode.port: 80,
    pathname: (urlParsingNode.pathname.charAt(0) === '/')
      ? urlParsingNode.pathname
      : '/' + urlParsingNode.pathname
  };
}


/**
 * This function accepts a query string (search part of a url) and returns a dictionary with
 * the different key value pairs
 * @param {string} qs queryString
 */
function queryStringToObj(qs, cond) {
  var pairs, qsObj;

  cond = utilities.isFunction(cond)? cond : function() {
    return true;
  };

  qs = qs.trim().replace(/^\?/, '');
  pairs = qs.split('&');
  qsObj = {};

  utilities.forEach(pairs, function (pair) {
    var keyValue, key, value;
    if (pair !== '') {
      keyValue = pair.split('=');
      key = keyValue[0];
      value = keyValue[1];
      if(cond(key, value)){
        qsObj[key] = value;
      }
    }
  });

  return qsObj;
}

/**
 * This function accepts an object and serializes it into a query string without the leading '?'
 * @param obj
 * @returns {string}
 */
function objToQueryString(obj) {
  var pairs = [];
  utilities.forEach(obj, function (value, key) {
    pairs.push(key + '=' + value);
  });
  return pairs.join('&');
}

module.exports = {
  urlParts: urlParts,
  queryStringToObj: queryStringToObj,
  objToQueryString: objToQueryString
};

},{"./utilityFunctions":47}],47:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var NODE_TYPE_ELEMENT = 1;
var SNAKE_CASE_REGEXP = /[A-Z]/g;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
/*jslint maxlen: 500 */
var ISO8086_REGEXP = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;


function noop(){ }

function isNull(o) {
  return o === null;
}

function isDefined(o){
  return o !== undefined;
}

function isUndefined(o){
  return o === undefined;
}

function isObject(obj) {
  return typeof obj === 'object';
}

function isFunction(str){
  return typeof str === 'function';
}

function isNumber(num){
  return typeof num === 'number';
}

function isWindow(obj) {
  return utilities.isObject(obj) && obj.window === obj;
}

function isArray(array){
  return Object.prototype.toString.call( array ) === '[object Array]';
}

function isArrayLike(obj) {
  if (obj === null || utilities.isWindow(obj) || utilities.isFunction(obj) || utilities.isUndefined(obj)) {
    return false;
  }

  var length = obj.length;

  if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
    return true;
  }

  return utilities.isString(obj) || utilities.isArray(obj) || length === 0 ||
    typeof length === 'number' && length > 0 && (length - 1) in obj;
}

function isString(str) {
  return typeof str === 'string';
}

function isEmptyString(str) {
  return utilities.isString(str) && str.length === 0;
}

function isNotEmptyString(str) {
  return utilities.isString(str) && str.length !== 0;
}

function arrayLikeObjToArray(args) {
  return Array.prototype.slice.call(args);
}

function forEach(obj, iterator, context) {
  var key, length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        // Need to check if hasOwnProperty exists,
        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
        if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj)) {
      var isPrimitive = typeof obj !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
      obj.forEach(iterator, context, obj);
    } else {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}

function snake_case(name, separator) {
  separator = separator || '_';
  return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
    return (pos ? separator : '') + letter.toLowerCase();
  });
}

function isValidEmail(email){
  if(!utilities.isString(email)){
    return false;
  }

  return EMAIL_REGEXP.test(email.trim());
}

function extend (obj) {
  var arg, i, k;
  for (i = 1; i < arguments.length; i++) {
    arg = arguments[i];
    for (k in arg) {
      if (arg.hasOwnProperty(k)) {
        if(isObject(obj[k]) && !isNull(obj[k]) && isObject(arg[k])){
          obj[k] = extend({}, obj[k], arg[k]);
        }else {
          obj[k] = arg[k];
        }
      }
    }
  }
  return obj;
}

function capitalize(s){
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function decapitalize(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * This method works the same way array.prototype.map works but if the transformer returns undefine, then
 * it won't be added to the transformed Array.
 */
function transformArray(array, transformer) {
  var transformedArray = [];

  array.forEach(function(item, index){
    var transformedItem = transformer(item, index);
    if(utilities.isDefined(transformedItem)) {
      transformedArray.push(transformedItem);
    }
  });

  return transformedArray;
}

function toFixedDigits(num, digits) {
  var formattedNum = num + '';
  digits = utilities.isNumber(digits) ? digits : 0;
  num = utilities.isNumber(num) ? num : parseInt(num, 10);
  if(utilities.isNumber(num) && !isNaN(num)){
    formattedNum = num + '';
    while(formattedNum.length < digits) {
      formattedNum = '0' + formattedNum;
    }
    return formattedNum;
  }
  return NaN + '';
}

function throttle(callback, delay) {
  var previousCall = new Date().getTime() - (delay + 1);
  return function() {
    var time = new Date().getTime();
    if ((time - previousCall) >= delay) {
      previousCall = time;
      callback.apply(this, arguments);
    }
  };
}

function debounce (callback, wait) {
  var timeoutId;

  return function (){
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function(){
      callback.apply(this, arguments);
      timeoutId = undefined;
    }, wait);
  };
}

// a function designed to blow up the stack in a naive way
// but it is ok for videoJs children components
function treeSearch(root, getChildren, found){
  var children = getChildren(root);
  for (var i = 0; i < children.length; i++){
    if (found(children[i])) {
      return children[i];
    }
    else {
      var el = treeSearch(children[i], getChildren, found);
      if (el){
        return el;
      }
    }
  }
}

function echoFn(val) {
  return function () {
    return val;
  };
}

//Note: Supported formats come from http://www.w3.org/TR/NOTE-datetime
// and the iso8601 regex comes from http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
function isISO8601(value) {
  if(utilities.isNumber(value)){
    value = value + '';  //we make sure that we are working with strings
  }

  if(!utilities.isString(value)){
    return false;
  }

  return ISO8086_REGEXP.test(value.trim());
}

/**
 * Checks if the Browser is IE9 and below
 * @returns {boolean}
 */
function isOldIE() {
  var version = utilities.getInternetExplorerVersion(navigator);
  if (version === -1) {
    return false;
  }

  return version < 10;
}

/**
 * Returns the version of Internet Explorer or a -1 (indicating the use of another browser).
 * Source: https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 * @returns {number} the version of Internet Explorer or a -1 (indicating the use of another browser).
 */
function getInternetExplorerVersion(navigator) {
  var rv = -1;

  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    var res = re.exec(ua);
    if (res !== null) {
      rv = parseFloat(res[1]);
    }
  }

  return rv;
}

/*** Mobile Utility functions ***/
function isIDevice() {
  return /iP(hone|ad)/.test(utilities._UA);
}

function isMobile() {
  return /iP(hone|ad|od)|Android|Windows Phone/.test(utilities._UA);
}

function isIPhone() {
  return /iP(hone|od)/.test(utilities._UA);
}

function isAndroid() {
  return /Android/.test(utilities._UA);
}

var utilities = {
  _UA: navigator.userAgent,
  noop: noop,
  isNull: isNull,
  isDefined: isDefined,
  isUndefined: isUndefined,
  isObject: isObject,
  isFunction: isFunction,
  isNumber: isNumber,
  isWindow: isWindow,
  isArray: isArray,
  isArrayLike: isArrayLike,
  isString: isString,
  isEmptyString: isEmptyString,
  isNotEmptyString: isNotEmptyString,
  arrayLikeObjToArray: arrayLikeObjToArray,
  forEach: forEach,
  snake_case: snake_case,
  isValidEmail: isValidEmail,
  extend: extend,
  capitalize: capitalize,
  decapitalize: decapitalize,
  transformArray: transformArray,
  toFixedDigits: toFixedDigits,
  throttle: throttle,
  debounce: debounce,
  treeSearch: treeSearch,
  echoFn: echoFn,
  isISO8601: isISO8601,
  isOldIE: isOldIE,
  getInternetExplorerVersion: getInternetExplorerVersion,
  isIDevice: isIDevice,
  isMobile: isMobile,
  isIPhone: isIPhone,
  isAndroid: isAndroid
};

module.exports = utilities;

},{}],48:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var xml = {};

xml.strToXMLDoc = function strToXMLDoc(stringContainingXMLSource){
  //IE 8
  if(typeof window.DOMParser === 'undefined'){
    var xmlDocument = new ActiveXObject('Microsoft.XMLDOM');
    xmlDocument.async = false;
    xmlDocument.loadXML(stringContainingXMLSource);
    return xmlDocument;
  }

  return parseString(stringContainingXMLSource);

  function parseString(stringContainingXMLSource){
    var parser = new DOMParser();
    var parsedDocument;

    //Note: This try catch is to deal with the fact that on IE parser.parseFromString does throw an error but the rest of the browsers don't.
    try {
      parsedDocument = parser.parseFromString(stringContainingXMLSource, "application/xml");

      if(isParseError(parsedDocument) || utilities.isEmptyString(stringContainingXMLSource)){
        throw new Error();
      }
    }catch(e){
      throw new Error("xml.strToXMLDOC: Error parsing the string: '" + stringContainingXMLSource + "'");
    }

    return parsedDocument;
  }

  function isParseError(parsedDocument) {
    try { // parser and parsererrorNS could be cached on startup for efficiency
      var parser = new DOMParser(),
        erroneousParse = parser.parseFromString('INVALID', 'text/xml'),
        parsererrorNS = erroneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

      if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
        // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
        return parsedDocument.getElementsByTagName("parsererror").length > 0;
      }

      return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
    } catch (e) {
      //Note on IE parseString throws an error by itself and it will never reach this code. Because it will have failed before
    }
  }
};

xml.parseText = function parseText (sValue) {
  if (/^\s*$/.test(sValue)) { return null; }
  if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
  if (isFinite(sValue)) { return parseFloat(sValue); }
  if (utilities.isISO8601(sValue)) { return new Date(sValue); }
  return sValue.trim();
};

xml.JXONTree = function JXONTree (oXMLParent) {
  var parseText = xml.parseText;

  //The document object is an especial object that it may miss some functions or attrs depending on the browser.
  //To prevent this problem with create the JXONTree using the root childNode which is a fully fleshed node on all supported
  //browsers.
  if(oXMLParent.documentElement){
    return new xml.JXONTree(oXMLParent.documentElement);
  }

  if (oXMLParent.hasChildNodes()) {
    var sCollectedTxt = "";
    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
      oNode = oXMLParent.childNodes.item(nItem);
      /*jshint bitwise: false*/
      if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; }
      else if (oNode.nodeType === 1 && !oNode.prefix) {
        sProp = utilities.decapitalize(oNode.nodeName);
        vContent = new xml.JXONTree(oNode);
        if (this.hasOwnProperty(sProp)) {
          if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }
          this[sProp].push(vContent);
        } else { this[sProp] = vContent; }
      }
    }
    if (sCollectedTxt) { this.keyValue = parseText(sCollectedTxt); }
  }

  //IE8 Stupid fix
  var hasAttr = typeof oXMLParent.hasAttributes === 'undefined'? oXMLParent.attributes.length > 0: oXMLParent.hasAttributes();
  if (hasAttr) {
    var oAttrib;
    for (var nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {
      oAttrib = oXMLParent.attributes.item(nAttrib);
      this["@" + utilities.decapitalize(oAttrib.name)] = parseText(oAttrib.value.trim());
    }
  }
};

xml.JXONTree.prototype.attr = function(attr) {
  return this['@' + utilities.decapitalize(attr)];
};

xml.toJXONTree = function toJXONTree(xmlString){
  var xmlDoc = xml.strToXMLDoc(xmlString);
  return new xml.JXONTree(xmlDoc);
};

/**
 * Helper function to extract the keyvalue of a JXONTree obj
 *
 * @param xmlObj {JXONTree}
 * return the key value or undefined;
 */
xml.keyValue = function getKeyValue(xmlObj) {
  if(xmlObj){
    return xmlObj.keyValue;
  }
  return undefined;
};

xml.attr = function getAttrValue(xmlObj, attr) {
  if(xmlObj) {
    return xmlObj['@' + utilities.decapitalize(attr)];
  }
  return undefined;
};

xml.encode = function encodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

xml.decode = function decodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
};

module.exports = xml;

},{"./utilityFunctions":47}],49:[function(require,module,exports){
'use strict';

require('./plugin/components/ads-label_4');
require('./plugin/components/black-poster_4');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

videojs.plugin('vastClient', videoJsVAST);


},{"./plugin/components/ads-label_4":36,"./plugin/components/black-poster_4":38,"./plugin/videojs.vast.vpaid":39}]},{},[49])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50c1xcVlBBSURGTEFTSENsaWVudFxcanNcXFZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50c1xcVlBBSURGTEFTSENsaWVudFxcanNcXFZQQUlERkxBU0hDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcZmxhc2hUZXN0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcanNGbGFzaEJyaWRnZS5qcyIsImJvd2VyX2NvbXBvbmVudHNcXFZQQUlERkxBU0hDbGllbnRcXGpzXFxqc0ZsYXNoQnJpZGdlUmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xccmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcdXRpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsImJvd2VyX2NvbXBvbmVudHMvc3dmb2JqZWN0L3N3Zm9iamVjdC9zcmMvc3dmb2JqZWN0LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9Db21wYW5pb24uanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9DcmVhdGl2ZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0luTGluZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0xpbmVhci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L01lZGlhRmlsZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1RyYWNraW5nRXZlbnQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUQ2xpZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEludGVncmF0b3IuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUUmVzcG9uc2UuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZpZGVvQ2xpY2tzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvV3JhcHBlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC92YXN0VXRpbC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92cGFpZC9WUEFJREFkVW5pdFdyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURGbGFzaFRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURIVE1MNVRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzQuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXIuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNC5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi92aWRlb2pzLnZhc3QudnBhaWQuanMiLCJzcmMvc2NyaXB0cy91dGlscy9hc3luYy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL2NvbnNvbGVMb2dnZXIuanMiLCJzcmMvc2NyaXB0cy91dGlscy9kb20uanMiLCJzcmMvc2NyaXB0cy91dGlscy9odHRwLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvbWltZXR5cGVzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvcGxheWVyVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91cmxVdGlscy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvc2NyaXB0cy91dGlscy94bWwuanMiLCJzcmMvc2NyaXB0cy92aWRlb2pzXzQudmFzdC52cGFpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUFDYSx1QixBQUFBOzs7Ozs7YUFFVDs7QUFDQTs7MkNBQ21FO2dCQUFsRCxBQUFrRCx5RkFBN0IsQUFBNkI7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTtBQUVyRTs7Ozs7OytCLEFBQ1EsTyxBQUFPLFEsQUFBUSxVLEFBQVUsZ0JBQTJHO2dCQUEzRixBQUEyRixtRkFBNUUsRUFBQyxjQUFELEFBQWMsQUFBOEQ7Z0JBQXpELEFBQXlELHNGQUF2QyxFQUFDLFdBQUQsQUFBWSxBQUEyQjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUFFOzs7O2lDLEFBQ3JJLE8sQUFBTyxRLEFBQVEsVUFBZ0M7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTs7OztrQ0FFNUI7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTs7OztpQ0FDSDtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUFFOzs7O2tDQUNEO2dCQUF0QixBQUFzQiwrRUFBWCxBQUFXLEFBQUU7Ozs7bUNBQ0Q7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTs7OzttQ0FDRjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUFFOzs7O3FDQUNBO2dCQUF0QixBQUFzQiwrRUFBWCxBQUFXLEFBQUU7Ozs7aUNBQ047Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTtBQUUvQjs7Ozs7O29DLEFBQ1ksVUFBVSxBQUFFOzs7bUMsQUFDYixVQUFVLEFBQUU7OztvQyxBQUNYLFVBQVUsQUFBRTs7O3NDLEFBQ1YsVUFBVSxBQUFFOzs7NEMsQUFDTixVQUFVLEFBQUU7OzsyQyxBQUNiLFVBQVUsQUFBRTs7O3NDLEFBQ2pCLFVBQVUsQUFBRTs7O29DLEFBQ2QsYUFBbUM7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFBRTs7OztvQyxBQUNyQyxVQUFVLEFBQUU7Ozt3QyxBQUNSLFVBQVUsQUFBRTs7O21DLEFBQ2pCLFVBQVUsQUFBRTs7Ozs7O0FBRzNCLE9BQUEsQUFBTyxlQUFQLEFBQXNCLGNBQXRCLEFBQW9DO2NBQVUsQUFDaEMsQUFDVjtrQkFGMEMsQUFFNUIsQUFDZDtXQUFPLENBQUEsQUFDSCxZQURHLEFBRUgsYUFGRyxBQUdILGFBSEcsQUFJSCxhQUpHLEFBS0gsMEJBQTBCLEFBQzFCO0FBTkcsb0JBTWEsQUFDaEI7QUFQRyxzQkFBQSxBQVFILG9CQUFvQixBQUNwQjtBQVRHLHdCQUFBLEFBVUgseUJBQXlCLEFBQ3pCO0FBWEcsc0JBQUEsQUFZSCxnQkFaRyxBQWFILGdCQWJHLEFBY0gsd0JBZEcsQUFlSCxtQkFmRyxBQWdCSCx3QkFoQkcsQUFpQkgsbUJBakJHLEFBa0JILGVBbEJHLEFBbUJILGlCQUFpQixBQUNqQjtBQXBCRyw4QkFBQSxBQXFCSCxrQkFyQkcsQUFzQkgsZUF0QkcsQUF1QkgsWUF2QkcsQUF3QkgsYUF4QkcsQUF5QkgsU0E1QlIsQUFBOEMsQUFHbkMsQUEwQkg7QUE3QnNDLEFBQzFDOzs7QUNwQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFBLEFBQVEsa0JBQTNCLEFBQTZDO0FBQzdDLElBQUksMkJBQW9CLEFBQU8sb0JBQW9CLGFBQTNCLEFBQXdDLFdBQXhDLEFBQW1ELE9BQU8sVUFBQSxBQUFVLFVBQVUsQUFDbEc7V0FBTyxDQUFBLEFBQUMsZUFBRCxBQUFnQixRQUFoQixBQUF3QixjQUFjLENBQTdDLEFBQThDLEFBQ2pEO0FBRkQsQUFBd0IsQ0FBQTs7SSxBQUlYLHNCLEFBQUE7MkJBQ1Q7O3lCQUFBLEFBQWEsT0FBTzs4QkFBQTs7d0hBRWhCOztjQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjtjQUFBLEFBQUssU0FIVyxBQUdoQixBQUFjO2VBQ2pCOzs7OzttQ0FFVTt5QkFDUDs7aUJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCOzhCQUFBLEFBQWtCLFFBQVEsVUFBQSxBQUFDLFlBQWUsQUFDdEM7dUJBQUEsQUFBSyxPQUFMLEFBQVksMkJBQVosQUFBdUMsQUFDMUM7QUFGRCxBQUdBO3lCQUFBLEFBQWEsT0FBYixBQUFvQixRQUFRLFVBQUEsQUFBQyxPQUFVLEFBQ25DO3VCQUFBLEFBQUssT0FBTCxBQUFZLFNBQVosQUFBcUIsQUFDeEI7QUFGRCxBQUlBOztpQkFBQSxBQUFLLFNBQUwsQUFBYyxBQUNqQjs7OztzQ0FFYyxBQUNYO21CQUFPLEtBQVAsQUFBWSxBQUNmOzs7OzJCLEFBRUUsVyxBQUFXLFVBQVUsQUFDcEI7aUJBQUEsQUFBSyxPQUFMLEFBQVksR0FBWixBQUFlLFdBQWYsQUFBMEIsQUFDN0I7Ozs7NEIsQUFFRyxXLEFBQVcsVUFBVSxBQUNyQjtpQkFBQSxBQUFLLE9BQUwsQUFBWSxJQUFaLEFBQWdCLFdBQWhCLEFBQTJCLEFBQzlCO0FBRUQ7Ozs7OzsyQ0FDbUU7Z0JBQWxELEFBQWtELHlGQUE3QixBQUE2QjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUMvRDs7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsb0JBQW9CLENBQWhELEFBQWdELEFBQUMscUJBQWpELEFBQXNFLEFBQ3pFOzs7OytCLEFBQ08sTyxBQUFPLFEsQUFBUSxVLEFBQVUsZ0JBQTRHO2dCQUE1RixBQUE0RixtRkFBN0UsRUFBQyxjQUFELEFBQWUsQUFBOEQ7Z0JBQXpELEFBQXlELHNGQUF2QyxFQUFDLFdBQUQsQUFBWSxBQUEyQjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUN6STs7QUFDQTtpQkFBQSxBQUFLLE9BQUwsQUFBWSxRQUFaLEFBQW9CLE9BQXBCLEFBQTJCLEFBQzNCOzJCQUFlLGdCQUFnQixFQUFDLGNBQWhDLEFBQStCLEFBQWUsQUFDOUM7OEJBQWtCLG1CQUFtQixFQUFDLFdBQXRDLEFBQXFDLEFBQVksQUFFakQ7O2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLFVBQVUsQ0FBQyxLQUFBLEFBQUssT0FBTixBQUFDLEFBQVksWUFBWSxLQUFBLEFBQUssT0FBOUIsQUFBeUIsQUFBWSxhQUFyQyxBQUFrRCxVQUFsRCxBQUE0RCxnQkFBZ0IsYUFBQSxBQUFhLGdCQUF6RixBQUF5RyxJQUFJLGdCQUFBLEFBQWdCLGFBQW5LLEFBQXNDLEFBQTBJLEtBQWhMLEFBQXFMLEFBQ3hMOzs7O2lDLEFBQ1EsTyxBQUFPLFEsQUFBUSxVQUFnQztnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUNwRDs7QUFDQTtpQkFBQSxBQUFLLE9BQUwsQUFBWSxRQUFaLEFBQW9CLE9BQXBCLEFBQTJCLEFBRTNCOztBQUNBO2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLFlBQVksQ0FBQyxLQUFBLEFBQUssT0FBTixBQUFDLEFBQVksWUFBWSxLQUFBLEFBQUssT0FBOUIsQUFBeUIsQUFBWSxhQUE3RSxBQUF3QyxBQUFrRCxXQUExRixBQUFxRyxBQUN4Rzs7OztrQ0FDNkI7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFDMUI7O2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLFdBQTVCLEFBQXVDLElBQXZDLEFBQTJDLEFBQzlDOzs7O2lDQUM0QjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUN6Qjs7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsVUFBNUIsQUFBc0MsSUFBdEMsQUFBMEMsQUFDN0M7Ozs7a0NBQzZCO2dCQUF0QixBQUFzQiwrRUFBWCxBQUFXLEFBQzFCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixXQUE1QixBQUF1QyxJQUF2QyxBQUEyQyxBQUM5Qzs7OzttQ0FDOEI7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFDM0I7O2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLFlBQTVCLEFBQXdDLElBQXhDLEFBQTRDLEFBQy9DOzs7O21DQUM4QjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUMzQjs7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsWUFBNUIsQUFBd0MsSUFBeEMsQUFBNEMsQUFDL0M7Ozs7cUNBQ2dDO2dCQUF0QixBQUFzQiwrRUFBWCxBQUFXLEFBQzdCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixjQUE1QixBQUEwQyxJQUExQyxBQUE4QyxBQUNqRDs7OztpQ0FDNEI7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFDekI7O2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLFVBQTVCLEFBQXNDLElBQXRDLEFBQTBDLEFBQzdDO0FBRUQ7Ozs7OztvQyxBQUNZLFVBQVUsQUFDbEI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsZUFBNUIsQUFBMkMsSUFBM0MsQUFBK0MsQUFDbEQ7Ozs7bUMsQUFDVSxVQUFVLEFBQ2pCO2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLGNBQTVCLEFBQTBDLElBQTFDLEFBQThDLEFBQ2pEOzs7O29DLEFBQ1csVUFBVSxBQUNsQjtpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixlQUE1QixBQUEyQyxJQUEzQyxBQUErQyxBQUNsRDs7OztzQyxBQUNhLFVBQVUsQUFDcEI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsaUJBQTVCLEFBQTZDLElBQTdDLEFBQWlELEFBQ3BEOzs7OzRDLEFBQ21CLFVBQVUsQUFDMUI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsdUJBQTVCLEFBQW1ELElBQW5ELEFBQXVELEFBQzFEOzs7OzJDLEFBQ2tCLFVBQVUsQUFDekI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsc0JBQTVCLEFBQWtELElBQWxELEFBQXNELEFBQ3pEOzs7O3NDLEFBQ2EsVUFBVSxBQUNwQjtpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixpQkFBNUIsQUFBNkMsSUFBN0MsQUFBaUQsQUFDcEQ7Ozs7b0MsQUFDVyxRQUE4QjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUN0Qzs7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsZUFBZSxDQUEzQyxBQUEyQyxBQUFDLFNBQTVDLEFBQXFELEFBQ3hEOzs7O29DLEFBQ1csVUFBVSxBQUNsQjtpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixlQUE1QixBQUEyQyxJQUEzQyxBQUErQyxBQUNsRDs7Ozt3QyxBQUNlLFVBQVUsQUFDdEI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsbUJBQTVCLEFBQStDLElBQS9DLEFBQW1ELEFBQ3REOzs7O21DLEFBQ1UsVUFBVSxBQUNqQjtpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixjQUE1QixBQUEwQyxJQUExQyxBQUE4QyxBQUNqRDs7Ozs7RSxBQXpHNEI7OztBQ1BqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQWxCLEFBQWtCLEFBQVE7O0FBRTFCLElBQU0sZ0JBQWdCLFFBQUEsQUFBUSxtQkFBOUIsQUFBaUQ7QUFDakQsSUFBTSxjQUFjLFFBQUEsQUFBUSxpQkFBNUIsQUFBNkM7O0FBRTdDLElBQU0sT0FBTyxRQUFBLEFBQVEsV0FBckIsQUFBZ0M7QUFDaEMsSUFBTSxrQkFBa0IsUUFBQSxBQUFRLFdBQWhDLEFBQTJDO0FBQzNDLElBQU0sZ0JBQWdCLFFBQUEsQUFBUSxXQUE5QixBQUF5QztBQUN6QyxJQUFNLHNCQUFzQixRQUFBLEFBQVEsV0FBcEMsQUFBK0M7QUFDL0MsSUFBTSxjQUFjLFFBQUEsQUFBUSxXQUFSLEFBQW1CLE9BQXZDLEFBQW9CLEFBQTBCO0FBQzlDLElBQU0sb0JBQW9CLFFBQUEsQUFBUSxvQkFBbEMsQUFBc0Q7O0FBRXRELElBQU0sUUFBTixBQUFjO0FBQ2QsSUFBTSxnQkFBTixBQUFzQjs7QUFFdEIsSUFBSSxnQkFBZSxhQUFhLHVCQUFBO2VBQUEsQUFBSztBLEFBQXJDLEFBQWtCLEtBQUEsSUFBMEI7O0ksQUFFdEMsK0JBQ0Y7OEJBQUEsQUFBYSxlQUFiLEFBQTRCLFVBQWtSO1lBQXhRLEFBQXdRLGdGQUE1UCxFQUFDLE1BQUQsQUFBTyxrQkFBa0IsT0FBekIsQUFBZ0MsS0FBSyxRQUFyQyxBQUE2QyxBQUErTTs7b0JBQUE7O1lBQXpNLEFBQXlNLDZFQUFoTSxFQUFFLE9BQUYsQUFBUyxlQUFlLFFBQXhCLEFBQWdDLE1BQU0sT0FBdEMsQUFBNkMsUUFBUSxtQkFBckQsQUFBd0UsVUFBVSxPQUFsRixBQUF5RixXQUFXLGlCQUFwRyxBQUFxSCxRQUFRLFNBQTdILEFBQXNJLEFBQTBEO1lBQWpELEFBQWlELG1GQUFsQyxFQUFFLE9BQUYsQUFBUyxPQUFPLFNBQWhCLEFBQXlCLEFBQVM7OzhCQUUxUzs7WUFBSSxLQUFKLEFBQVMsQUFFVDs7YUFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3RCO2FBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2hCO2FBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO21CQUFXLFlBQVgsQUFBdUIsQUFFdkI7O2tCQUFBLEFBQVUsUUFBUSxjQUFjLFVBQWQsQUFBd0IsT0FBMUMsQUFBa0IsQUFBK0IsQUFDakQ7a0JBQUEsQUFBVSxTQUFTLGNBQWMsVUFBZCxBQUF3QixRQUEzQyxBQUFtQixBQUFnQyxBQUVuRDs7NEJBQUEsQUFBb0IsZUFBZSxLQUFuQyxBQUF3QyxVQUF4QyxBQUFrRCxBQUVsRDs7ZUFBQSxBQUFPLFFBQVEsVUFBZixBQUF5QixBQUN6QjtlQUFBLEFBQU8seUJBQXVCLEtBQTlCLEFBQW1DLHlCQUFvQixjQUF2RCxBQUFxRSxrQ0FBNkIsYUFBbEcsQUFBK0cscUJBQWdCLE9BQS9ILEFBQXNJLEFBRXRJOztZQUFJLENBQUMsaUJBQUwsQUFBSyxBQUFpQixlQUFlLEFBQ2pDO21CQUFPLFFBQVEsc0ZBQWYsQUFBTyxBQUE4RixBQUN4RztBQUVEOzthQUFBLEFBQUssS0FBSyxVQUFBLEFBQVUsVUFBVixBQUFvQixXQUFwQixBQUErQixRQUFRLEtBQWpELEFBQVUsQUFBNEMsQUFFdEQ7O1lBQUksQ0FBQyxLQUFMLEFBQVUsSUFBSSxBQUNWO21CQUFPLFFBQVAsQUFBTyxBQUFTLEFBQ25CO0FBRUQ7O1lBQUksMEJBQTBCLGFBQWhCLEFBQTZCLFNBQ3ZDLFVBQUEsQUFBQyxLQUFELEFBQU0sTUFBUyxBQUNYOzhCQUFBLEFBQWtCLEtBQ2xCO3FCQUFBLEFBQVMsS0FBVCxBQUFjLEFBQ2pCO0FBSlMsU0FBQSxFQUlQLFlBQU0sQUFDTDtxQkFBUyw4QkFBOEIsYUFBdkMsQUFBb0QsQUFDdkQ7QUFOTCxBQUFjLEFBU2Q7O2FBQUEsQUFBSyxTQUFTLElBQUEsQUFBSSxjQUFjLEtBQWxCLEFBQXVCLElBQUksVUFBM0IsQUFBcUMsTUFBTSxLQUEzQyxBQUFnRCxVQUFVLFVBQTFELEFBQW9FLE9BQU8sVUFBM0UsQUFBcUYsUUFBbkcsQUFBYyxBQUE2RixBQUUzRzs7aUJBQUEsQUFBUyxRQUFULEFBQWlCLE9BQU8sQUFDcEI7dUJBQVcsWUFBTSxBQUNiO3lCQUFTLElBQUEsQUFBSSxNQUFiLEFBQVMsQUFBVSxBQUN0QjtBQUZELGVBQUEsQUFFRyxBQUNIO21CQUFBLEFBQU8sQUFDVjtBQUVKOzs7OztrQ0FFVSxBQUNQO2lCQUFBLEFBQUssQUFFTDs7Z0JBQUksS0FBSixBQUFTLFFBQVEsQUFDYjtxQkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNaO3FCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2pCO0FBQ0Q7aUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjtpQkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFDckI7Ozs7c0NBRWMsQUFDWDttQkFBTyxLQUFQLEFBQVksQUFDZjs7Ozt5Q0FFZ0IsQUFDYjttQkFBTyxLQUFQLEFBQVksQUFFWjs7Z0JBQUksS0FBSixBQUFTLGFBQWEsQUFDbEI7cUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3FCQUFBLEFBQUssT0FBTCxBQUFZLGVBQWUsS0FBM0IsQUFBZ0MsQUFDbkM7QUFFRDs7Z0JBQUksS0FBSixBQUFTLFNBQVMsQUFDZDtxQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO3FCQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2xCO0FBQ0o7Ozs7bUMsQUFFVSxPLEFBQU8sVUFBVTt5QkFDeEI7OzhCQUFBLEFBQWtCLEtBQWxCLEFBQXVCLEFBRXZCOztnQkFBSSxLQUFKLEFBQVMsU0FBUyxBQUNkO3FCQUFBLEFBQUssQUFDUjtBQUVEOztnQkFBSSxLQUFBLEFBQUssT0FBVCxBQUFJLEFBQVksV0FBVyxBQUN2QjtxQkFBQSxBQUFLLGNBQWMsVUFBQSxBQUFDLEtBQUQsQUFBTSxTQUFZLEFBQ2pDO3dCQUFJLENBQUosQUFBSyxLQUFLLEFBQ047K0JBQUEsQUFBSyxVQUFVLElBQUEsQUFBSSxZQUFZLE9BQS9CLEFBQWUsQUFBcUIsQUFDdkM7QUFDRDsyQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7NkJBQUEsQUFBUyxLQUFLLE9BQWQsQUFBbUIsQUFDdEI7QUFORCxBQVFBOztxQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixjQUFjLENBQTFDLEFBQTBDLEFBQUMsUUFBUSxLQUFuRCxBQUF3RCxBQUMzRDtBQVZELG1CQVVNLEFBQ0Y7cUJBQUEsQUFBSyxhQUFhLEVBQUMsS0FBRCxBQUFNLE9BQU8sVUFBL0IsQUFBa0IsQUFDckI7QUFDSjs7Ozt1Q0FFa0M7Z0JBQXRCLEFBQXNCLCtFQUFYLEFBQVcsQUFDL0I7OzhCQUFBLEFBQWtCLEtBQWxCLEFBQXVCLEFBRXZCOztpQkFBQSxBQUFLLEFBQ0w7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsZ0JBQTVCLEFBQTRDLElBQTVDLEFBQWdELEFBQ25EOzs7O3FDQUNZLEFBQ1Q7OEJBQUEsQUFBa0IsS0FBbEIsQUFBdUIsQUFDdkI7bUJBQU8sS0FBQSxBQUFLLE9BQVosQUFBTyxBQUFZLEFBQ3RCOzs7O3NDQUNhLEFBQ1Y7OEJBQUEsQUFBa0IsS0FBbEIsQUFBdUIsQUFDdkI7bUJBQU8sS0FBQSxBQUFLLE9BQVosQUFBTyxBQUFZLEFBQ3RCOzs7Ozs7O0FBR0wsa0JBQUEsQUFBa0IsZUFBZSxZQUFNLEFBQ25DO1dBQU8sVUFBQSxBQUFVLHNCQUFWLEFBQWdDLGtCQUFrQixZQUF6RCxBQUF5RCxBQUFZLEFBQ3hFO0FBRkQsR0FBQSxBQUVHOztBQUVILGtCQUFBLEFBQWtCLGdCQUFnQixVQUFBLEFBQUMsV0FBYyxBQUM3QztrQkFBYyxrQkFBa0IsU0FBbEIsQUFBMkIsTUFBekMsQUFBYyxBQUFpQyxBQUNsRDtBQUZEOztBQUlBLFNBQUEsQUFBUyxvQkFBb0IsQUFDekI7UUFBRyxLQUFILEFBQVEsWUFBWSxBQUNoQjtjQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNKOzs7QUFFRCxTQUFBLEFBQVMsb0JBQW9CLEFBQ3pCO1FBQUksS0FBSixBQUFTLFlBQVksQUFDakI7YUFBQSxBQUFLLFdBQVcsS0FBQSxBQUFLLFdBQXJCLEFBQWdDLEtBQUssS0FBQSxBQUFLLFdBQTFDLEFBQXFELEFBQ3JEO2VBQU8sS0FBUCxBQUFZLEFBQ2Y7QUFDSjs7O0FBRUQsU0FBQSxBQUFTLGtCQUFULEFBQTJCLGNBQTNCLEFBQXlDLE9BQXlCO1FBQWxCLEFBQWtCLCtFQUFQLEFBQU8sQUFDOUQ7O1dBQUEsQUFBTyxlQUFQLEFBQXNCLGtCQUF0QixBQUF3QztrQkFBYyxBQUN4QyxBQUNWO3NCQUZrRCxBQUVwQyxBQUNkO2VBSEosQUFBc0QsQUFHM0MsQUFFZDtBQUx5RCxBQUNsRDs7O0FBTVIsaUJBQUEsQUFBaUIsWUFBakIsQUFBNkI7O0FBRTdCLE9BQUEsQUFBTyxVQUFQLEFBQWlCOzs7QUNyS2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQWxCLEFBQWtCLEFBQVE7O0FBRTFCLElBQU0sYUFBTixBQUFtQjtBQUNuQixJQUFNLGdCQUFOLEFBQXNCO0FBQ3RCLElBQU0sZ0JBQWdCLFFBQUEsQUFBUSxtQkFBOUIsQUFBaUQ7QUFDakQsSUFBTSxRQUFRLFFBQWQsQUFBYyxBQUFRO0FBQ3RCLElBQU0seUJBQXlCLFFBQUEsQUFBUSxjQUF2QyxBQUFxRDs7SSxBQUUvQywwQkFDRjt5QkFBQSxBQUFZLFFBQXVFO29CQUFBOztZQUEvRCxBQUErRCxnRkFBbkQsRUFBQyxNQUFELEFBQU8sa0JBQWtCLE9BQXpCLEFBQWdDLEtBQUssUUFBckMsQUFBNkMsQUFBTTs7OEJBQy9FOzthQUFBLEFBQUssV0FBVyxNQUFBLEFBQU0sb0JBQU4sQUFBMEIsUUFEcUMsQUFDL0UsQUFBZ0IsQUFBa0MsZ0JBQWdCLEFBQ2xFO2NBQUEsQUFBTSxZQUFZLEtBQWxCLEFBQXVCLEFBQ3ZCO1lBQUksU0FBSixBQUFhLEFBQ2I7ZUFBQSxBQUFPLFFBQVEsVUFBZixBQUF5QixBQUN6QjtlQUFBLEFBQU8seUJBQVAsQUFBOEIsOEJBQXlCLGNBQXZELEFBQXFFLEFBQ3JFO2VBQUEsQUFBTyxvQkFBUCxBQUEyQixBQUUzQjs7YUFBQSxBQUFLLEtBQUssVUFBQSxBQUFVLFVBQVYsQUFBb0IsV0FBcEIsQUFBK0IsUUFBekMsQUFBVSxBQUF1QyxBQUNqRDthQUFBLEFBQUssWUFBWSxJQUFqQixBQUFpQixBQUFJLEFBQ3JCO2FBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCO1lBQUksS0FBSixBQUFTLElBQUksQUFDVDtrQkFBQSxBQUFNLFlBQVksS0FBbEIsQUFBdUIsQUFDdkI7aUJBQUEsQUFBSyxhQUFTLEFBQUksY0FBYyxLQUFsQixBQUF1QixJQUFJLFVBQTNCLEFBQXFDLE1BQXJDLEFBQTJDLGVBQWUsVUFBMUQsQUFBb0UsT0FBTyxVQUEzRSxBQUFxRixRQUFRLFlBQUssQUFDNUc7b0JBQU0sVUFBTixBQUFnQixBQUNoQjtzQkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7c0JBQUEsQUFBSyxVQUFMLEFBQWUsSUFBZixBQUFtQixVQUFuQixBQUE2QixRQUFRLFVBQUEsQUFBQyxVQUFhLEFBQy9DOytCQUFXLFlBQUssQUFDWjtpQ0FBQSxBQUFTLFVBQVQsQUFBbUIsQUFDdEI7QUFGRCx1QkFBQSxBQUVHLEFBQ047QUFKRCxBQUtIO0FBUkQsQUFBYyxBQVNqQixhQVRpQjtBQVVyQjs7Ozs7c0NBQ2EsQUFDVjttQkFBTyxLQUFQLEFBQVksQUFDZjs7OzsyQixBQUNFLFcsQUFBVyxVQUFVLEFBQ3BCO2lCQUFBLEFBQUssVUFBTCxBQUFlLElBQWYsQUFBbUIsV0FBbkIsQUFBOEIsQUFDakM7Ozs7Ozs7QUFHRSxJQUFJLGdEQUFvQixTQUFBLEFBQVMsa0JBQVQsQUFBMkIsSUFBM0IsQUFBK0IsV0FBVyxBQUNyRTtRQUFJLENBQUMsT0FBTCxBQUFLLEFBQU8sYUFBYSxBQUNyQjtlQUFBLEFBQU8sY0FBYyxJQUFBLEFBQUksWUFBSixBQUFnQixJQUFyQyxBQUFxQixBQUFvQixBQUM1QztBQUNEO1dBQU8sT0FBUCxBQUFPLEFBQU8sQUFDakI7QUFMTTs7O0FDM0NQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQUEsQUFBUSxXQUFyQixBQUFnQztBQUNoQyxJQUFJLGdCQUFnQixRQUFBLEFBQVEsV0FBNUIsQUFBdUM7QUFDdkMsSUFBSSxpQkFBaUIsUUFBQSxBQUFRLFdBQTdCLEFBQXdDO0FBQ3hDLElBQUksc0JBQXNCLFFBQUEsQUFBUSxjQUFsQyxBQUFnRDtBQUNoRCxJQUFJLHlCQUF5QixRQUFBLEFBQVEsY0FBckMsQUFBbUQ7QUFDbkQsSUFBTSxXQUFXLFFBQWpCLEFBQWlCLEFBQVE7QUFDekIsSUFBTSxzQkFBTixBQUE0QjtBQUM1QixJQUFNLFFBQU4sQUFBYzs7SSxBQUVELHdCLEFBQUEsNEJBQ1Q7MkJBQUEsQUFBYSxJQUFiLEFBQWlCLFVBQWpCLEFBQTJCLFNBQTNCLEFBQW9DLE9BQXBDLEFBQTJDLFFBQTNDLEFBQW1ELGVBQWU7OEJBQzlEOzthQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7YUFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7YUFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDakI7YUFBQSxBQUFLLFNBQUwsQUFBYyxBQUNkO2FBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjthQUFBLEFBQUssWUFBWSxJQUFqQixBQUFpQixBQUFJLEFBQ3JCO2FBQUEsQUFBSyxhQUFhLElBQWxCLEFBQWtCLEFBQUksQUFDdEI7YUFBQSxBQUFLLDBCQUEwQixPQUFPLEtBQXRDLEFBQStCLEFBQVksQUFDM0M7YUFBQSxBQUFLLFNBQUwsQUFBYyxBQUNkO2FBQUEsQUFBSyxvQkFBTCxBQUF5QixBQUV6Qjs7aUJBQUEsQUFBUyxZQUFZLEtBQXJCLEFBQTBCLFVBQTFCLEFBQW9DLEFBQ3ZDOzs7OzsyQixBQUVFLFcsQUFBVyxVQUFVLEFBQ3BCO2lCQUFBLEFBQUssVUFBTCxBQUFlLElBQWYsQUFBbUIsV0FBbkIsQUFBOEIsQUFDakM7Ozs7NEIsQUFFRyxXLEFBQVcsVUFBVSxBQUNyQjttQkFBTyxLQUFBLEFBQUssVUFBTCxBQUFlLE9BQWYsQUFBc0IsV0FBN0IsQUFBTyxBQUFpQyxBQUMzQzs7OztpQyxBQUVRLFdBQVcsQUFDaEI7bUJBQU8sS0FBQSxBQUFLLFVBQUwsQUFBZSxZQUF0QixBQUFPLEFBQTJCLEFBQ3JDOzs7O2lDQUVRLEFBQ0w7bUJBQU8sS0FBQSxBQUFLLFVBQVosQUFBTyxBQUFlLEFBQ3pCOzs7O3dDLEFBRWUsWUFBNkM7Z0JBQWpDLEFBQWlDLDJFQUExQixBQUEwQjtnQkFBdEIsQUFBc0IsK0VBQVgsQUFBVyxBQUN6RDs7Z0JBQUksYUFBSixBQUFpQixBQUNqQjtBQUNBO2dCQUFBLEFBQUksVUFBVSxBQUNWOzZCQUFnQixLQUFoQixBQUFnQixBQUFLLGtDQUFyQixBQUFrRCxBQUNsRDtxQkFBQSxBQUFLLFdBQUwsQUFBZ0IsSUFBaEIsQUFBb0IsWUFBcEIsQUFBZ0MsQUFDbkM7QUFHRDs7Z0JBQUksQUFDQTtBQUNBO0FBQ0E7cUJBQUEsQUFBSyxJQUFMLEFBQVMsWUFBWSxDQUFBLEFBQUMsWUFBRCxBQUFhLE9BQWxDLEFBQXFCLEFBQW9CLEFBRTVDO0FBTEQsY0FLRSxPQUFBLEFBQU8sR0FBRyxBQUNSO29CQUFBLEFBQUksVUFBVSxBQUNWO21DQUFBLEFBQWUsS0FBZixBQUFvQixNQUFwQixBQUEwQixZQUExQixBQUFzQyxBQUN6QztBQUZELHVCQUVPLEFBRUg7O0FBQ0E7eUJBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixBQUN4QjtBQUNKO0FBQ0o7Ozs7dUMsQUFFYyxVQUFVLEFBQ3JCO21CQUFPLEtBQUEsQUFBSyxXQUFMLEFBQWdCLGNBQXZCLEFBQU8sQUFBOEIsQUFDeEM7Ozs7bUQsQUFFMEIsUUFBUTt3QkFDL0I7O2lCQUFBLEFBQUssV0FBTCxBQUFnQixXQUFXLFVBQUEsQUFBQyxLQUFRLEFBQ2hDO3VCQUFPLGVBQUEsQUFBZSxLQUF0QixBQUFPLEFBQW9CLEFBQzlCO0FBRkQsZUFBQSxBQUVHLFFBQVEsVUFBQSxBQUFDLEtBQVEsQUFDaEI7c0JBQUEsQUFBSyxXQUFMLEFBQWdCLE9BQWhCLEFBQXVCLEFBQzFCO0FBSkQsQUFLSDs7Ozs2Q0FFb0IsQUFDakI7bUJBQU8sS0FBQSxBQUFLLFdBQVosQUFBTyxBQUFnQixBQUMxQjs7OztpQyxBQUVRLFcsQUFBVyxPQUFPO3lCQUN2Qjs7aUJBQUEsQUFBSyxVQUFMLEFBQWUsSUFBZixBQUFtQixXQUFuQixBQUE4QixRQUFRLFVBQUEsQUFBQyxVQUFhLEFBQ2hEO0FBQ0E7b0JBQUksY0FBSixBQUFrQixlQUFlLEFBQzdCOzZCQUFBLEFBQVMsQUFDWjtBQUZELHVCQUVPLEFBQ0g7K0JBQVcsWUFBTSxBQUNiOzRCQUFJLE9BQUEsQUFBSyxVQUFMLEFBQWUsSUFBZixBQUFtQixXQUFuQixBQUE4QixTQUFsQyxBQUEyQyxHQUFHLEFBQzFDO3FDQUFBLEFBQVMsQUFDWjtBQUNKO0FBSkQsdUJBQUEsQUFJRyxBQUNOO0FBQ0o7QUFYRCxBQVlIOzs7O3NDLEFBRWEsWSxBQUFZLFksQUFBWSxLLEFBQUssUUFBUSxBQUUvQzs7Z0JBQUksV0FBVyxLQUFBLEFBQUssV0FBTCxBQUFnQixJQUEvQixBQUFlLEFBQW9CLEFBRW5DOztBQUNBO0FBQ0E7Z0JBQUksQ0FBSixBQUFLLFVBQVUsQUFDWDtvQkFBSSxPQUFPLGVBQVgsQUFBMEIsSUFBSSxBQUMxQjt5QkFBQSxBQUFLLFFBQUwsQUFBYSxPQUFiLEFBQW9CLEFBQ3ZCO0FBQ0Q7QUFDSDtBQUVEOzsyQkFBQSxBQUFlLEtBQWYsQUFBb0IsTUFBcEIsQUFBMEIsWUFBMUIsQUFBc0MsS0FBdEMsQUFBMkMsQUFFOUM7Ozs7bUMsQUFFVSxLLEFBQUssTUFBTSxBQUNsQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxBQUNkO2dCQUFJLEtBQUosQUFBUyxtQkFBbUIsQUFDeEI7cUJBQUEsQUFBSyxrQkFBTCxBQUF1QixLQUF2QixBQUE0QixBQUM1Qjt1QkFBTyxLQUFQLEFBQVksQUFDZjtBQUNKO0FBRUQ7Ozs7OztrQ0FDVSxBQUNOO21CQUFPLEVBQUMsT0FBTyxLQUFSLEFBQWEsUUFBUSxRQUFRLEtBQXBDLEFBQU8sQUFBa0MsQUFDNUM7Ozs7Z0MsQUFDTyxVLEFBQVUsV0FBVyxBQUN6QjtpQkFBQSxBQUFLLFNBQVMsY0FBQSxBQUFjLFVBQVUsS0FBdEMsQUFBYyxBQUE2QixBQUMzQztpQkFBQSxBQUFLLFVBQVUsY0FBQSxBQUFjLFdBQVcsS0FBeEMsQUFBZSxBQUE4QixBQUM3QztpQkFBQSxBQUFLLElBQUwsQUFBUyxhQUFULEFBQXNCLFNBQVMsS0FBL0IsQUFBb0MsQUFDcEM7aUJBQUEsQUFBSyxJQUFMLEFBQVMsYUFBVCxBQUFzQixVQUFVLEtBQWhDLEFBQXFDLEFBQ3hDOzs7O21DQUNVLEFBQ1A7bUJBQU8sS0FBUCxBQUFZLEFBQ2Y7Ozs7aUMsQUFDUSxVQUFVLEFBQ2Y7aUJBQUEsQUFBSyxRQUFMLEFBQWEsVUFBVSxLQUF2QixBQUE0QixBQUMvQjs7OztvQ0FDVyxBQUNSO21CQUFPLEtBQVAsQUFBWSxBQUNmOzs7O2tDLEFBQ1MsV0FBVyxBQUNqQjtpQkFBQSxBQUFLLFFBQVEsS0FBYixBQUFrQixRQUFsQixBQUEwQixBQUM3Qjs7OztxQ0FDWSxBQUNUO21CQUFPLEtBQVAsQUFBWSxBQUNmOzs7O3NDQUNhLEFBQ1Y7bUJBQU8sS0FBUCxBQUFZLEFBQ2Y7Ozs7a0NBQ1MsQUFDTjttQkFBTyxLQUFQLEFBQVksQUFDZjs7OztrQ0FDUyxBQUNOO2lCQUFBLEFBQUssQUFDTDtpQkFBQSxBQUFLLEFBQ0w7cUJBQUEsQUFBUyxtQkFBbUIsS0FBNUIsQUFBaUMsQUFDakM7Z0JBQUksS0FBQSxBQUFLLElBQVQsQUFBYSxlQUFlLEFBQ3hCO3FCQUFBLEFBQUssSUFBTCxBQUFTLGNBQVQsQUFBdUIsWUFBWSxLQUFuQyxBQUF3QyxBQUMzQztBQUNKOzs7Ozs7O0FBR0wsU0FBQSxBQUFTLGVBQVQsQUFBd0IsWUFBeEIsQUFBb0MsS0FBcEMsQUFBeUMsUUFBUTtpQkFDN0M7O2VBQVcsWUFBTSxBQUNiO1lBQUksV0FBVyxPQUFBLEFBQUssV0FBTCxBQUFnQixJQUEvQixBQUFlLEFBQW9CLEFBQ25DO1lBQUEsQUFBSSxVQUFVLEFBQ1Y7bUJBQUEsQUFBSyxXQUFMLEFBQWdCLE9BQWhCLEFBQXVCLEFBQ3ZCO3FCQUFBLEFBQVMsS0FBVCxBQUFjLEFBQ2pCO0FBQ0o7QUFORCxPQUFBLEFBTUcsQUFDTjs7O0FBRUQsT0FBQSxBQUFPLGVBQVAsQUFBc0IsZUFBdEIsQUFBcUM7Y0FBdUIsQUFDOUMsQUFDVjtrQkFGd0QsQUFFMUMsQUFDZDtXQUhKLEFBQTRELEFBR2pEO0FBSGlELEFBQ3hEOztBQUtKOzs7Ozs7Ozs7O0FBVUEsT0FBQSxBQUFPLHVCQUF1QixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVYsQUFBa0IsVUFBbEIsQUFBNEIsWUFBNUIsQUFBd0MsT0FBeEMsQUFBK0MsTUFBUyxBQUNsRjtRQUFJLFdBQVcsU0FBQSxBQUFTLGdCQUF4QixBQUFlLEFBQXlCLEFBQ3hDO1FBQUksQ0FBSixBQUFLLFVBQVUsQUFDZjtRQUFJLGFBQUosQUFBaUIsYUFBYSxBQUMxQjtpQkFBQSxBQUFTLFdBQVQsQUFBb0IsT0FBcEIsQUFBMkIsQUFDOUI7QUFGRCxXQUVPLEFBQ0g7WUFBSSxXQUFKLEFBQWUsU0FBUyxBQUNwQjtxQkFBQSxBQUFTLGNBQVQsQUFBdUIsVUFBdkIsQUFBaUMsWUFBakMsQUFBNkMsT0FBN0MsQUFBb0QsQUFDdkQ7QUFGRCxlQUVPLEFBQ0g7cUJBQUEsQUFBUyxTQUFULEFBQWtCLFVBQWxCLEFBQTRCLEFBQy9CO0FBQ0o7QUFDSjtBQVpEOzs7QUMvTEE7O0FBRUEsSUFBSSxzQkFBc0IsUUFBQSxBQUFRLGNBQWxDLEFBQWdEO0FBQ2hELElBQUksWUFBWSxJQUFoQixBQUFnQixBQUFJOztBQUVwQixJQUFNLHdCQUFOLEFBQThCO0FBQzlCLE9BQUEsQUFBTyxlQUFQLEFBQXNCLHVCQUF0QixBQUE2QztjQUFlLEFBQzlDLEFBQ1Y7a0JBRndELEFBRTFDLEFBQ2Q7V0FBTyxlQUFBLEFBQVUsSUFBVixBQUFjLFVBQVUsQUFDM0I7a0JBQUEsQUFBVSxJQUFWLEFBQWMsSUFBZCxBQUFrQixBQUNyQjtBQUxMLEFBQTREO0FBQUEsQUFDeEQ7O0FBT0osT0FBQSxBQUFPLGVBQVAsQUFBc0IsdUJBQXRCLEFBQTZDO2NBQW1CLEFBQ2xELEFBQ1Y7a0JBRjRELEFBRTlDLEFBQ2Q7V0FBTyxlQUFBLEFBQVUsSUFBSSxBQUNqQjtlQUFPLFVBQUEsQUFBVSxJQUFqQixBQUFPLEFBQWMsQUFDeEI7QUFMTCxBQUFnRTtBQUFBLEFBQzVEOztBQU9KLE9BQUEsQUFBTyxlQUFQLEFBQXNCLHVCQUF0QixBQUE2QztjQUFzQixBQUNyRCxBQUNWO2tCQUYrRCxBQUVqRCxBQUNkO1dBQU8sZUFBQSxBQUFVLElBQUksQUFDakI7ZUFBTyxVQUFBLEFBQVUsT0FBakIsQUFBTyxBQUFpQixBQUMzQjtBQUxMLEFBQW1FO0FBQUEsQUFDL0Q7O0FBT0osT0FBQSxBQUFPLFVBQVAsQUFBaUI7OztBQzlCakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQUVhLGlDLEFBQUEscUNBQ1Q7c0NBQWU7OEJBQ1g7O2FBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ3RCOzs7Ozs0QixBQUNJLEksQUFBSSxPQUFPLEFBQ1o7Z0JBQUksQ0FBQyxLQUFBLEFBQUssWUFBVixBQUFLLEFBQWlCLEtBQUssQUFDdkI7cUJBQUEsQUFBSyxZQUFMLEFBQWlCLE1BQWpCLEFBQXVCLEFBQzFCO0FBQ0Q7Z0JBQUksS0FBQSxBQUFLLFlBQUwsQUFBaUIsSUFBakIsQUFBcUIsUUFBckIsQUFBNkIsV0FBVyxDQUE1QyxBQUE2QyxHQUFHLEFBQzVDO3FCQUFBLEFBQUssWUFBTCxBQUFpQixJQUFqQixBQUFxQixLQUFyQixBQUEwQixBQUM3QjtBQUNKOzs7OzRCLEFBQ0ksSUFBSSxBQUNMO21CQUFPLEtBQUEsQUFBSyxZQUFMLEFBQWlCLE9BQXhCLEFBQStCLEFBQ2xDOzs7O21DLEFBQ1csU0FBUyxBQUNqQjttQkFBTyxPQUFBLEFBQU8sS0FBSyxLQUFaLEFBQWlCLGFBQWpCLEFBQThCLE9BQXJDLEFBQU8sQUFBcUMsQUFDL0M7Ozs7b0MsQUFDWSxPQUFPO3dCQUNoQjs7Z0JBQUksY0FBTyxBQUFPLEtBQUssS0FBWixBQUFpQixhQUFqQixBQUE4QixPQUFPLFVBQUEsQUFBQyxLQUFRLEFBQ3JEO3VCQUFPLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQWpCLEFBQXNCLFFBQXRCLEFBQThCLFdBQVcsQ0FBaEQsQUFBaUQsQUFDcEQ7QUFGRCxBQUFXLEFBSVgsYUFKVzs7bUJBSVgsQUFBTyxBQUNWOzs7OytCLEFBQ00sSyxBQUFLLE9BQU8sQUFDZjtnQkFBSSxDQUFDLEtBQUEsQUFBSyxZQUFWLEFBQUssQUFBaUIsTUFBTSxBQUFFO0FBQVM7QUFFdkM7O2dCQUFJLFFBQVEsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBakIsQUFBc0IsUUFBbEMsQUFBWSxBQUE4QixBQUUxQzs7Z0JBQUksUUFBSixBQUFZLEdBQUcsQUFBRTtBQUFTO0FBQzFCO21CQUFPLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQWpCLEFBQXNCLE9BQXRCLEFBQTZCLE9BQXBDLEFBQU8sQUFBb0MsQUFDOUM7Ozs7b0MsQUFDWSxJQUFJLEFBQ2I7Z0JBQUksTUFBTSxLQUFBLEFBQUssWUFBZixBQUFVLEFBQWlCLEFBQzNCO21CQUFPLEtBQUEsQUFBSyxZQUFaLEFBQU8sQUFBaUIsQUFDeEI7bUJBQUEsQUFBTyxBQUNWOzs7O3NDLEFBQ2MsT0FBTzt5QkFDbEI7O2dCQUFJLE9BQU8sS0FBQSxBQUFLLFlBQWhCLEFBQVcsQUFBaUIsQUFDNUI7d0JBQU8sQUFBSyxJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3JCO3VCQUFPLE9BQUEsQUFBSyxPQUFMLEFBQVksS0FBbkIsQUFBTyxBQUFpQixBQUMzQjtBQUZELEFBQU8sQUFHVixhQUhVOzs7O29DQUlDLEFBQ1I7Z0JBQUksTUFBTSxLQUFWLEFBQWUsQUFDZjtpQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7bUJBQUEsQUFBTyxBQUNWOzs7OytCQUNNLEFBQ0g7bUJBQU8sT0FBQSxBQUFPLEtBQUssS0FBWixBQUFpQixhQUF4QixBQUFxQyxBQUN4Qzs7Ozs7OztJLEFBR1EsOEIsQUFBQSxrQ0FDVDttQ0FBZTs4QkFDWDs7YUFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDdEI7Ozs7OzRCLEFBQ0ksSSxBQUFJLE9BQU8sQUFDWjtpQkFBQSxBQUFLLFlBQUwsQUFBaUIsTUFBakIsQUFBdUIsQUFDMUI7Ozs7NEIsQUFDSSxJQUFJLEFBQ0w7bUJBQU8sS0FBQSxBQUFLLFlBQVosQUFBTyxBQUFpQixBQUMzQjs7OzttQyxBQUNXLFNBQVMsQUFDakI7bUJBQU8sT0FBQSxBQUFPLEtBQUssS0FBWixBQUFpQixhQUFqQixBQUE4QixPQUFyQyxBQUFPLEFBQXFDLEFBQy9DOzs7O29DLEFBQ1ksT0FBTzt5QkFDaEI7O2dCQUFJLGNBQU8sQUFBTyxLQUFLLEtBQVosQUFBaUIsYUFBakIsQUFBOEIsT0FBTyxVQUFBLEFBQUMsS0FBUSxBQUNyRDt1QkFBTyxPQUFBLEFBQUssWUFBTCxBQUFpQixTQUF4QixBQUFpQyxBQUNwQztBQUZELEFBQVcsQUFJWCxhQUpXOzttQkFJWCxBQUFPLEFBQ1Y7Ozs7K0IsQUFDTyxJQUFJLEFBQ1I7Z0JBQUksTUFBTSxLQUFBLEFBQUssWUFBZixBQUFVLEFBQWlCLEFBQzNCO21CQUFPLEtBQUEsQUFBSyxZQUFaLEFBQU8sQUFBaUIsQUFDeEI7bUJBQUEsQUFBTyxBQUNWOzs7O3NDLEFBQ2MsT0FBTzt5QkFDbEI7O2dCQUFJLE9BQU8sS0FBQSxBQUFLLFlBQWhCLEFBQVcsQUFBaUIsQUFDNUI7d0JBQU8sQUFBSyxJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3JCO3VCQUFPLE9BQUEsQUFBSyxPQUFaLEFBQU8sQUFBWSxBQUN0QjtBQUZELEFBQU8sQUFHVixhQUhVOzs7O29DQUlDLEFBQ1I7Z0JBQUksTUFBTSxLQUFWLEFBQWUsQUFDZjtpQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7bUJBQUEsQUFBTyxBQUNWOzs7OytCQUNNLEFBQ0g7bUJBQU8sT0FBQSxBQUFPLEtBQUssS0FBWixBQUFpQixhQUF4QixBQUFxQyxBQUN4Qzs7Ozs7Ozs7QUM5Rkw7Ozs7O1EsQUFFZ0IsUyxBQUFBO1EsQUFPQSxPLEFBQUE7USxBQUlBLGtCLEFBQUE7USxBQWdCQSxzQixBQUFBO1EsQUFVQSxnQixBQUFBO1EsQUFpQkEsaUIsQUFBQTtRLEFBSUEsYyxBQUFBO0FBMURULFNBQUEsQUFBUyxPQUFULEFBQWdCLFFBQVEsQUFDM0I7UUFBSSxRQUFRLENBQVosQUFBYSxBQUNiO1dBQU8sYUFBSyxBQUNSO2VBQUEsQUFBVSxlQUFVLEVBQXBCLEFBQXNCLEFBQ3pCO0FBRkQsQUFHSDs7O0FBRU0sU0FBQSxBQUFTLE9BQU8sQUFDdEI7O0FBR00sU0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQXpCLEFBQWdDLFdBQWhDLEFBQTJDLFdBQVcsQUFFekQ7O1FBQUkscUJBQXFCLFlBQU0sQUFFM0I7O29CQUFBLEFBQVksQUFDWjtBQUVIO0FBTGEsS0FBQSxFQUFkLEFBQWMsQUFLWCxBQUVIOztXQUFPLFlBQVksQUFDZjtxQkFBQSxBQUFhLEFBQ2I7a0JBQUEsQUFBVSxNQUFWLEFBQWdCLE1BQWhCLEFBQXNCLEFBQ3pCO0FBSEQsQUFJSDs7O0FBR00sU0FBQSxBQUFTLG9CQUFULEFBQTZCLFFBQTdCLEFBQXFDLElBQTBCO1FBQXRCLEFBQXNCLG1GQUFQLEFBQU8sQUFDbEU7O1FBQUksTUFBTSxTQUFBLEFBQVMsY0FBbkIsQUFBVSxBQUF1QixBQUNqQztRQUFBLEFBQUksS0FBSixBQUFTLEFBQ1Q7UUFBQSxBQUFJLGNBQWMsQUFDZDtlQUFBLEFBQU8sWUFBUCxBQUFtQixBQUN0QjtBQUNEO1dBQUEsQUFBTyxZQUFQLEFBQW1CLEFBQ25CO1dBQUEsQUFBTyxBQUNWOzs7QUFFTSxTQUFBLEFBQVMsY0FBVCxBQUF1QixRQUF2QixBQUErQixRQUFRLEFBQzFDO1dBQU8sQ0FBQyxNQUFNLFdBQVAsQUFBQyxBQUFNLEFBQVcsWUFBWSxTQUE5QixBQUE4QixBQUFTLFdBQVcsU0FBbEQsQUFBMkQsSUFBM0QsQUFBK0QsU0FBdEUsQUFBK0UsQUFDbEY7OztBQUVELElBQUksdUJBQXdCLEFBQ3hCO1FBQUksT0FBQSxBQUFPLFVBQVgsQUFBcUIsVUFBVSxPQUFPLE9BQUEsQUFBTyxVQUFkLEFBQXdCLEFBQ3ZEO1dBQU8sU0FBQSxBQUFTLFNBQVQsQUFBbUIsY0FBbkIsQUFBaUMsVUFBVSxBQUM5QztZQUFJLGdCQUFnQixLQUFwQixBQUFvQixBQUFLLEFBQ3pCO1lBQUksYUFBQSxBQUFhLGFBQWEsV0FBVyxjQUF6QyxBQUF1RCxRQUFRLEFBQzNEO3VCQUFXLGNBQVgsQUFBeUIsQUFDNUI7QUFDRDtvQkFBWSxhQUFaLEFBQXlCLEFBQ3pCO1lBQUksWUFBWSxjQUFBLEFBQWMsUUFBZCxBQUFzQixjQUF0QyxBQUFnQixBQUFvQyxBQUNwRDtlQUFPLGNBQWMsQ0FBZCxBQUFlLEtBQUssY0FBM0IsQUFBeUMsQUFDNUM7QUFSRCxBQVNIO0FBWEQsQUFBZSxDQUFDOztBQWFULFNBQUEsQUFBUyxlQUFULEFBQXdCLFFBQXhCLEFBQWdDLFFBQVEsQUFDM0M7V0FBTyxTQUFBLEFBQVMsS0FBVCxBQUFjLFFBQXJCLEFBQU8sQUFBc0IsQUFDaEM7OztBQUVNLFNBQUEsQUFBUyxZQUFULEFBQXFCLElBQUksQUFDNUI7QUFDQTtPQUFBLEFBQUcsTUFBSCxBQUFTLFdBQVQsQUFBb0IsQUFDcEI7T0FBQSxBQUFHLE1BQUgsQUFBUyxPQUFULEFBQWdCLEFBQ2hCO09BQUEsQUFBRyxNQUFILEFBQVMsTUFBVCxBQUFlLEFBQ2Y7T0FBQSxBQUFHLE1BQUgsQUFBUyxRQUFULEFBQWlCLEFBQ2pCO09BQUEsQUFBRyxNQUFILEFBQVMsU0FBVCxBQUFrQixBQUNyQjs7OztBQ25FRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vc2ltcGxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBBUElcbmV4cG9ydCBjbGFzcyBJVlBBSURBZFVuaXQge1xuXG4gICAgLy9hbGwgbWV0aG9kcyBiZWxvd1xuICAgIC8vYXJlIGFzeW5jIG1ldGhvZHNcbiAgICBoYW5kc2hha2VWZXJzaW9uKHBsYXllclZQQUlEVmVyc2lvbiA9ICcyLjAnLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cblxuICAgIC8vY3JlYXRpdmVEYXRhIGlzIGFuIG9iamVjdCB0byBiZSBjb25zaXN0ZW50IHdpdGggVlBBSURIVE1MXG4gICAgaW5pdEFkICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSA9IHtBZFBhcmFtZXRlcnM6Jyd9LCBlbnZpcm9ubWVudFZhcnMgPSB7Zmxhc2hWYXJzOiAnJ30sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHJlc2l6ZUFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cblxuICAgIHN0YXJ0QWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgc3RvcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHBhdXNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgcmVzdW1lQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgZXhwYW5kQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgY29sbGFwc2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBza2lwQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG5cbiAgICAvL3Byb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHRyZWF0IGFzIGFzeW5jIG1ldGhvZHNcbiAgICBnZXRBZExpbmVhcihjYWxsYmFjaykge31cbiAgICBnZXRBZFdpZHRoKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkSGVpZ2h0KGNhbGxiYWNrKSB7fVxuICAgIGdldEFkRXhwYW5kZWQoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRTa2lwcGFibGVTdGF0ZShjYWxsYmFjaykge31cbiAgICBnZXRBZFJlbWFpbmluZ1RpbWUoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWREdXJhdGlvbihjYWxsYmFjaykge31cbiAgICBzZXRBZFZvbHVtZShzb3VuZFZvbHVtZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgZ2V0QWRWb2x1bWUoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRDb21wYW5pb25zKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkSWNvbnMoY2FsbGJhY2spIHt9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IFtcbiAgICAgICAgJ0FkTG9hZGVkJyxcbiAgICAgICAgJ0FkU3RhcnRlZCcsXG4gICAgICAgICdBZFN0b3BwZWQnLFxuICAgICAgICAnQWRTa2lwcGVkJyxcbiAgICAgICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZExpbmVhckNoYW5nZScsXG4gICAgICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgICAgICdBZFJlbWFpbmluZ1RpbWVDaGFuZ2UnLCAvLyBbRGVwcmVjYXRlZCBpbiAyLjBdIGJ1dCB3aWxsIGJlIHN0aWxsIGZpcmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICAnQWRWb2x1bWVDaGFuZ2UnLFxuICAgICAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAgICAgJ0FkVmlkZW9TdGFydCcsXG4gICAgICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXG4gICAgICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICAgICAnQWRWaWRlb1RoaXJkUXVhcnRpbGUnLFxuICAgICAgICAnQWRWaWRlb0NvbXBsZXRlJyxcbiAgICAgICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAgICAgJ0FkSW50ZXJhY3Rpb24nLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcbiAgICAgICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAgICAgJ0FkVXNlckNsb3NlJyxcbiAgICAgICAgJ0FkUGF1c2VkJyxcbiAgICAgICAgJ0FkUGxheWluZycsXG4gICAgICAgICdBZExvZycsXG4gICAgICAgICdBZEVycm9yJ1xuICAgIF1cbn0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBJVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL0lWUEFJREFkVW5pdCcpLklWUEFJREFkVW5pdDtcbmxldCBBTExfVlBBSURfTUVUSE9EUyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKElWUEFJREFkVW5pdC5wcm90b3R5cGUpLmZpbHRlcihmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gWydjb25zdHJ1Y3RvciddLmluZGV4T2YocHJvcGVydHkpID09PSAtMTtcbn0pO1xuXG5leHBvcnQgY2xhc3MgVlBBSURBZFVuaXQgZXh0ZW5kcyBJVlBBSURBZFVuaXQge1xuICAgIGNvbnN0cnVjdG9yIChmbGFzaCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmxhc2ggPSBmbGFzaDtcbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgQUxMX1ZQQUlEX01FVEhPRFMuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZmxhc2gucmVtb3ZlQ2FsbGJhY2tCeU1ldGhvZE5hbWUobWV0aG9kTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBJVlBBSURBZFVuaXQuRVZFTlRTLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5vZmZFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoID0gbnVsbDtcbiAgICB9XG5cbiAgICBpc0Rlc3Ryb3llZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5vbihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5vZmYoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy9WUEFJRCBpbnRlcmZhY2VcbiAgICBoYW5kc2hha2VWZXJzaW9uKHBsYXllclZQQUlEVmVyc2lvbiA9ICcyLjAnLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2hhbmRzaGFrZVZlcnNpb24nLCBbcGxheWVyVlBBSURWZXJzaW9uXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBpbml0QWQgKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhID0ge0FkUGFyYW1ldGVyczogJyd9LCBlbnZpcm9ubWVudFZhcnMgPSB7Zmxhc2hWYXJzOiAnJ30sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vcmVzaXplIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGZsYXNoIG9iamVjdFxuICAgICAgICB0aGlzLl9mbGFzaC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjcmVhdGl2ZURhdGEgPSBjcmVhdGl2ZURhdGEgfHwge0FkUGFyYW1ldGVyczogJyd9O1xuICAgICAgICBlbnZpcm9ubWVudFZhcnMgPSBlbnZpcm9ubWVudFZhcnMgfHwge2ZsYXNoVmFyczogJyd9O1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnaW5pdEFkJywgW3RoaXMuX2ZsYXNoLmdldFdpZHRoKCksIHRoaXMuX2ZsYXNoLmdldEhlaWdodCgpLCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YS5BZFBhcmFtZXRlcnMgfHwgJycsIGVudmlyb25tZW50VmFycy5mbGFzaFZhcnMgfHwgJyddLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHJlc2l6ZUFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICAvL3Jlc2l6ZSBlbGVtZW50IHRoYXQgaGFzIHRoZSBmbGFzaCBvYmplY3RcbiAgICAgICAgdGhpcy5fZmxhc2guc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvL3Jlc2l6ZSBhZCBpbnNpZGUgdGhlIGZsYXNoXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgncmVzaXplQWQnLCBbdGhpcy5fZmxhc2guZ2V0V2lkdGgoKSwgdGhpcy5fZmxhc2guZ2V0SGVpZ2h0KCksIHZpZXdNb2RlXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdGFydEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc3RhcnRBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHN0b3BBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3N0b3BBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHBhdXNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdwYXVzZUFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmVzdW1lQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdyZXN1bWVBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGV4cGFuZEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZXhwYW5kQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBjb2xsYXBzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnY29sbGFwc2VBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNraXBBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3NraXBBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy9wcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSB0cmVhdCBhcyBhc3luYyBtZXRob2RzXG4gICAgZ2V0QWRMaW5lYXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZExpbmVhcicsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkV2lkdGgoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFdpZHRoJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRIZWlnaHQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEhlaWdodCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkRXhwYW5kZWQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEV4cGFuZGVkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRTa2lwcGFibGVTdGF0ZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZFJlbWFpbmluZ1RpbWUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFJlbWFpbmluZ1RpbWUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZER1cmF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWREdXJhdGlvbicsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNldEFkVm9sdW1lKHZvbHVtZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdzZXRBZFZvbHVtZScsIFt2b2x1bWVdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkVm9sdW1lKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRWb2x1bWUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZENvbXBhbmlvbnMoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZENvbXBhbmlvbnMnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZEljb25zKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRJY29ucycsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN3Zm9iamVjdCA9IHJlcXVpcmUoJ3N3Zm9iamVjdCcpO1xuXG5jb25zdCBKU0ZsYXNoQnJpZGdlID0gcmVxdWlyZSgnLi9qc0ZsYXNoQnJpZGdlJykuSlNGbGFzaEJyaWRnZTtcbmNvbnN0IFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpLlZQQUlEQWRVbml0O1xuXG5jb25zdCBub29wID0gcmVxdWlyZSgnLi91dGlscycpLm5vb3A7XG5jb25zdCBjYWxsYmFja1RpbWVvdXQgPSByZXF1aXJlKCcuL3V0aWxzJykuY2FsbGJhY2tUaW1lb3V0O1xuY29uc3QgaXNQb3NpdGl2ZUludCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5pc1Bvc2l0aXZlSW50O1xuY29uc3QgY3JlYXRlRWxlbWVudFdpdGhJRCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5jcmVhdGVFbGVtZW50V2l0aElEO1xuY29uc3QgdW5pcXVlVlBBSUQgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlKCd2cGFpZCcpO1xuY29uc3QgY3JlYXRlRmxhc2hUZXN0ZXIgPSByZXF1aXJlKCcuL2ZsYXNoVGVzdGVyLmpzJykuY3JlYXRlRmxhc2hUZXN0ZXI7XG5cbmNvbnN0IEVSUk9SID0gJ2Vycm9yJztcbmNvbnN0IEZMQVNIX1ZFUlNJT04gPSAnMTAuMS4wJztcblxubGV0IGZsYXNoVGVzdGVyID0ge2lzU3VwcG9ydGVkOiAoKT0+IHRydWV9OyAvLyBpZiB0aGUgcnVuRmxhc2hUZXN0IGlzIG5vdCBydW4gdGhlIGZsYXNoVGVzdGVyIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXG5cbmNsYXNzIFZQQUlERkxBU0hDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yICh2cGFpZFBhcmVudEVsLCBjYWxsYmFjaywgc3dmQ29uZmlnID0ge2RhdGE6ICdWUEFJREZsYXNoLnN3ZicsIHdpZHRoOiA4MDAsIGhlaWdodDogNDAwfSwgcGFyYW1zID0geyB3bW9kZTogJ3RyYW5zcGFyZW50Jywgc2FsaWduOiAndGwnLCBhbGlnbjogJ2xlZnQnLCBhbGxvd1NjcmlwdEFjY2VzczogJ2Fsd2F5cycsIHNjYWxlOiAnbm9TY2FsZScsIGFsbG93RnVsbFNjcmVlbjogJ3RydWUnLCBxdWFsaXR5OiAnaGlnaCd9LCB2cGFpZE9wdGlvbnMgPSB7IGRlYnVnOiBmYWxzZSwgdGltZW91dDogMTAwMDAgfSkge1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fdnBhaWRQYXJlbnRFbCA9IHZwYWlkUGFyZW50RWw7XG4gICAgICAgIHRoaXMuX2ZsYXNoSUQgPSB1bmlxdWVWUEFJRCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuXG4gICAgICAgIHN3ZkNvbmZpZy53aWR0aCA9IGlzUG9zaXRpdmVJbnQoc3dmQ29uZmlnLndpZHRoLCA4MDApO1xuICAgICAgICBzd2ZDb25maWcuaGVpZ2h0ID0gaXNQb3NpdGl2ZUludChzd2ZDb25maWcuaGVpZ2h0LCA0MDApO1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRXaXRoSUQodnBhaWRQYXJlbnRFbCwgdGhpcy5fZmxhc2hJRCwgdHJ1ZSk7XG5cbiAgICAgICAgcGFyYW1zLm1vdmllID0gc3dmQ29uZmlnLmRhdGE7XG4gICAgICAgIHBhcmFtcy5GbGFzaFZhcnMgPSBgZmxhc2hpZD0ke3RoaXMuX2ZsYXNoSUR9JmhhbmRsZXI9JHtKU0ZsYXNoQnJpZGdlLlZQQUlEX0ZMQVNIX0hBTkRMRVJ9JmRlYnVnPSR7dnBhaWRPcHRpb25zLmRlYnVnfSZzYWxpZ249JHtwYXJhbXMuc2FsaWdufWA7XG5cbiAgICAgICAgaWYgKCFWUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCd1c2VyIGRvblxcJ3Qgc3VwcG9ydCBmbGFzaCBvciBkb2VzblxcJ3QgaGF2ZSB0aGUgbWluaW11bSByZXF1aXJlZCB2ZXJzaW9uIG9mIGZsYXNoICcgKyBGTEFTSF9WRVJTSU9OKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCB0aGlzLl9mbGFzaElEKTtcblxuICAgICAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCAnc3dmb2JqZWN0IGZhaWxlZCB0byBjcmVhdGUgb2JqZWN0IGluIGVsZW1lbnQnICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFuZGxlciA9IGNhbGxiYWNrVGltZW91dCh2cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAkbG9hZFBlbmRlZEFkVW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ3ZwYWlkIGZsYXNoIGxvYWQgdGltZW91dCAnICsgdnBhaWRPcHRpb25zLnRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoID0gbmV3IEpTRmxhc2hCcmlkZ2UodGhpcy5lbCwgc3dmQ29uZmlnLmRhdGEsIHRoaXMuX2ZsYXNoSUQsIHN3ZkNvbmZpZy53aWR0aCwgc3dmQ29uZmlnLmhlaWdodCwgaGFuZGxlcik7XG5cbiAgICAgICAgZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHJldHVybiBtZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5fZmxhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc0Rlc3Ryb3llZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3lBZFVuaXQoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2FkTGF0ZXI7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FkVW5pdExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZmxhc2gucmVtb3ZlQ2FsbGJhY2sodGhpcy5fYWRVbml0TG9hZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgICAgICB0aGlzLl9hZFVuaXQuX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgICAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9mbGFzaC5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSAoZXJyLCBtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KHRoaXMuX2ZsYXNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRVbml0TG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCB0aGlzLl9hZFVuaXQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdsb2FkQWRVbml0JywgW2FkVVJMXSwgdGhpcy5fYWRVbml0TG9hZCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRMYXRlciA9IHt1cmw6IGFkVVJMLCBjYWxsYmFja307XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWRBZFVuaXQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kZXN0cm95QWRVbml0KCk7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgndW5sb2FkQWRVbml0JywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hJRCgpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoLmdldEZsYXNoSUQoKTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hVUkwoKSB7XG4gICAgICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaC5nZXRGbGFzaFVSTCgpO1xuICAgIH1cbn1cblxuc2V0U3RhdGljUHJvcGVydHkoJ2lzU3VwcG9ydGVkJywgKCkgPT4ge1xuICAgIHJldHVybiBzd2ZvYmplY3QuaGFzRmxhc2hQbGF5ZXJWZXJzaW9uKEZMQVNIX1ZFUlNJT04pICYmIGZsYXNoVGVzdGVyLmlzU3VwcG9ydGVkKCk7XG59LCB0cnVlKTtcblxuc2V0U3RhdGljUHJvcGVydHkoJ3J1bkZsYXNoVGVzdCcsIChzd2ZDb25maWcpID0+IHtcbiAgICBmbGFzaFRlc3RlciA9IGNyZWF0ZUZsYXNoVGVzdGVyKGRvY3VtZW50LmJvZHksIHN3ZkNvbmZpZyk7XG59KTtcblxuZnVuY3Rpb24gJHRocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVlBBSURGbGFzaFRvSlMgaXMgZGVzdHJveWVkIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGxvYWRQZW5kZWRBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2xvYWRMYXRlcikge1xuICAgICAgICB0aGlzLmxvYWRBZFVuaXQodGhpcy5fbG9hZExhdGVyLnVybCwgdGhpcy5fbG9hZExhdGVyLmNhbGxiYWNrKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRMYXRlcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRpY1Byb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUsIHdyaXRhYmxlID0gZmFsc2UpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVlBBSURGTEFTSENsaWVudCwgcHJvcGVydHlOYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiB3cml0YWJsZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cblZQQUlERkxBU0hDbGllbnQuc3dmb2JqZWN0ID0gc3dmb2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlERkxBU0hDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN3Zm9iamVjdCA9IHJlcXVpcmUoJ3N3Zm9iamVjdCcpO1xuXG5jb25zdCBGTEFTSF9URVNUID0gJ3ZwYWlkX3ZpZGVvX2ZsYXNoX3Rlc3Rlcic7XG5jb25zdCBGTEFTSF9URVNUX0VMID0gJ3ZwYWlkX3ZpZGVvX2ZsYXNoX3Rlc3Rlcl9lbCc7XG5jb25zdCBKU0ZsYXNoQnJpZGdlID0gcmVxdWlyZSgnLi9qc0ZsYXNoQnJpZGdlJykuSlNGbGFzaEJyaWRnZTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuY29uc3QgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5NdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5O1xuXG5jbGFzcyBGbGFzaFRlc3RlciB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCBzd2ZDb25maWcgPSB7ZGF0YTogJ1ZQQUlERmxhc2guc3dmJywgd2lkdGg6IDgwMCwgaGVpZ2h0OiA0MDB9KSB7XG4gICAgICAgIHRoaXMucGFyZW50RWwgPSB1dGlscy5jcmVhdGVFbGVtZW50V2l0aElEKHBhcmVudCwgRkxBU0hfVEVTVF9FTCk7IC8vIHNvbWUgYnJvd3NlcnMgY3JlYXRlIGdsb2JhbCB2YXJpYWJsZXMgdXNpbmcgdGhlIGVsZW1lbnQgaWQgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNDM0Mjc4L2RvLWRvbS10cmVlLWVsZW1lbnRzLXdpdGgtaWRzLWJlY29tZS1nbG9iYWwtdmFyaWFibGVzXG4gICAgICAgIHV0aWxzLmhpZGVGbGFzaEVsKHRoaXMucGFyZW50RWwpO1xuICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgIHBhcmFtcy5tb3ZpZSA9IHN3ZkNvbmZpZy5kYXRhO1xuICAgICAgICBwYXJhbXMuRmxhc2hWYXJzID0gYGZsYXNoaWQ9JHtGTEFTSF9URVNUX0VMfSZoYW5kbGVyPSR7SlNGbGFzaEJyaWRnZS5WUEFJRF9GTEFTSF9IQU5ETEVSfWA7XG4gICAgICAgIHBhcmFtcy5hbGxvd1NjcmlwdEFjY2VzcyA9ICdhbHdheXMnO1xuXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCBGTEFTSF9URVNUX0VMKTtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSBuZXcgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSgpO1xuICAgICAgICB0aGlzLl9pc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICAgICAgdXRpbHMuaGlkZUZsYXNoRWwodGhpcy5lbCk7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaCA9IG5ldyBKU0ZsYXNoQnJpZGdlKHRoaXMuZWwsIHN3ZkNvbmZpZy5kYXRhLCBGTEFTSF9URVNUX0VMLCBzd2ZDb25maWcud2lkdGgsIHN3ZkNvbmZpZy5oZWlnaHQsICgpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1cHBvcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzU3VwcG9ydGVkID0gc3VwcG9ydDtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVycy5nZXQoJ2NoYW5nZScpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygnY2hhbmdlJywgc3VwcG9ydCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1N1cHBvcnRlZDtcbiAgICB9XG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9oYW5kbGVycy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGNyZWF0ZUZsYXNoVGVzdGVyID0gZnVuY3Rpb24gY3JlYXRlRmxhc2hUZXN0ZXIoZWwsIHN3ZkNvbmZpZykge1xuICAgIGlmICghd2luZG93W0ZMQVNIX1RFU1RdKSB7XG4gICAgICAgIHdpbmRvd1tGTEFTSF9URVNUXSA9IG5ldyBGbGFzaFRlc3RlcihlbCwgc3dmQ29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvd1tGTEFTSF9URVNUXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCB1bmlxdWUgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlO1xubGV0IGlzUG9zaXRpdmVJbnQgPSByZXF1aXJlKCcuL3V0aWxzJykuaXNQb3NpdGl2ZUludDtcbmxldCBzdHJpbmdFbmRzV2l0aCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5zdHJpbmdFbmRzV2l0aDtcbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XG5sZXQgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5NdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5O1xuY29uc3QgcmVnaXN0cnkgPSByZXF1aXJlKCcuL2pzRmxhc2hCcmlkZ2VSZWdpc3RyeScpO1xuY29uc3QgVlBBSURfRkxBU0hfSEFORExFUiA9ICd2cGFpZF92aWRlb19mbGFzaF9oYW5kbGVyJztcbmNvbnN0IEVSUk9SID0gJ0FkRXJyb3InO1xuXG5leHBvcnQgY2xhc3MgSlNGbGFzaEJyaWRnZSB7XG4gICAgY29uc3RydWN0b3IgKGVsLCBmbGFzaFVSTCwgZmxhc2hJRCwgd2lkdGgsIGhlaWdodCwgbG9hZEhhbmRTaGFrZSkge1xuICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICB0aGlzLl9mbGFzaElEID0gZmxhc2hJRDtcbiAgICAgICAgdGhpcy5fZmxhc2hVUkwgPSBmbGFzaFVSTDtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLl9oYW5kbGVycyA9IG5ldyBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTaW5nbGVWYWx1ZVJlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuX3VuaXF1ZU1ldGhvZElkZW50aWZpZXIgPSB1bmlxdWUodGhpcy5fZmxhc2hJRCk7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIgPSBsb2FkSGFuZFNoYWtlO1xuXG4gICAgICAgIHJlZ2lzdHJ5LmFkZEluc3RhbmNlKHRoaXMuX2ZsYXNoSUQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmVCeUtleShldmVudE5hbWUpO1xuICAgIH1cblxuICAgIG9mZkFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlbW92ZUFsbCgpO1xuICAgIH1cblxuICAgIGNhbGxGbGFzaE1ldGhvZChtZXRob2ROYW1lLCBhcmdzID0gW10sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYWxsYmFja0lEID0gJyc7XG4gICAgICAgIC8vIGlmIG5vIGNhbGxiYWNrLCBzb21lIG1ldGhvZHMgdGhlIHJldHVybiBpcyB2b2lkIHNvIHRoZXkgZG9uJ3QgbmVlZCBjYWxsYmFja1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrSUQgPSBgJHt0aGlzLl91bmlxdWVNZXRob2RJZGVudGlmaWVyKCl9XyR7bWV0aG9kTmFtZX1gO1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFja0lELCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL21ldGhvZHMgYXJlIGNyZWF0ZWQgYnkgRXh0ZXJuYWxJbnRlcmZhY2UuYWRkQ2FsbGJhY2sgaW4gYXMzIGNvZGUsIGlmIGZvciBzb21lIHJlYXNvbiBpdCBmYWlsZWRcbiAgICAgICAgICAgIC8vdGhpcyBjb2RlIHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgIHRoaXMuX2VsW21ldGhvZE5hbWVdKFtjYWxsYmFja0lEXS5jb25jYXQoYXJncykpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICRhc3luY0NhbGxiYWNrLmNhbGwodGhpcywgY2FsbGJhY2tJRCwgZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpc24ndCBhbnkgY2FsbGJhY2sgdG8gcmV0dXJuIGVycm9yIHVzZSBlcnJvciBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihFUlJPUiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUJ5VmFsdWUoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrQnlNZXRob2ROYW1lKHN1ZmZpeCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MuZmlsdGVyS2V5cygoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nRW5kc1dpdGgoa2V5LCBzdWZmaXgpO1xuICAgICAgICB9KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmUoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsQ2FsbGJhY2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUFsbCgpO1xuICAgIH1cblxuICAgIF90cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSkuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIC8vY2xpY2tUaHJ1IGhhcyB0byBiZSBzeW5jLCBpZiBub3Qgd2lsbCBiZSBibG9jayBieSB0aGUgcG9wdXBibG9ja2VyXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnQWRDbGlja1RocnUnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzLmdldChldmVudE5hbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2FsbENhbGxiYWNrKG1ldGhvZE5hbWUsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KSB7XG5cbiAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2tzLmdldChjYWxsYmFja0lEKTtcblxuICAgICAgICAvL25vdCBhbGwgbWV0aG9kcyBjYWxsYmFjaydzIGFyZSBtYW5kYXRvcnlcbiAgICAgICAgLy9idXQgaWYgdGhlcmUgZXhpc3QgYW4gZXJyb3IsIGZpcmUgdGhlIGVycm9yIGV2ZW50XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChlcnIgJiYgY2FsbGJhY2tJRCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRVJST1IsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkYXN5bmNDYWxsYmFjay5jYWxsKHRoaXMsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KTtcblxuICAgIH1cblxuICAgIF9oYW5kU2hha2UoZXJyLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIoZXJyLCBkYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kU2hha2VIYW5kbGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9tZXRob2RzIGxpa2UgcHJvcGVydGllcyBzcGVjaWZpYyB0byB0aGlzIGltcGxlbWVudGF0aW9uIG9mIFZQQUlEXG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0fTtcbiAgICB9XG4gICAgc2V0U2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaXNQb3NpdGl2ZUludChuZXdXaWR0aCwgdGhpcy5fd2lkdGgpO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpc1Bvc2l0aXZlSW50KG5ld0hlaWdodCwgdGhpcy5faGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuX3dpZHRoKTtcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLl9oZWlnaHQpO1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cbiAgICBzZXRXaWR0aChuZXdXaWR0aCkge1xuICAgICAgICB0aGlzLnNldFNpemUobmV3V2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgfVxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gICAgc2V0SGVpZ2h0KG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFNpemUodGhpcy5fd2lkdGgsIG5ld0hlaWdodCk7XG4gICAgfVxuICAgIGdldEZsYXNoSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaElEO1xuICAgIH1cbiAgICBnZXRGbGFzaFVSTCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoVVJMO1xuICAgIH1cbiAgICBpc1JlYWR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub2ZmQWxsKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIHJlZ2lzdHJ5LnJlbW92ZUluc3RhbmNlQnlJRCh0aGlzLl9mbGFzaElEKTtcbiAgICAgICAgaWYgKHRoaXMuX2VsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkYXN5bmNDYWxsYmFjayhjYWxsYmFja0lELCBlcnIsIHJlc3VsdCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFja3MuZ2V0KGNhbGxiYWNrSUQpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmUoY2FsbGJhY2tJRCk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9LCAwKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTRmxhc2hCcmlkZ2UsICdWUEFJRF9GTEFTSF9IQU5ETEVSJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBWUEFJRF9GTEFTSF9IQU5ETEVSXG59KTtcblxuLyoqXG4gKiBFeHRlcm5hbCBpbnRlcmZhY2UgaGFuZGxlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmbGFzaElEIGlkZW50aWZpZXIgb2YgdGhlIGZsYXNoIHdobyBjYWxsIHRoaXNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlSUQgd2hhdCB0eXBlIG9mIG1lc3NhZ2UgaXMsIGNhbiBiZSAnZXZlbnQnIG9yICdjYWxsYmFjaydcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlTmFtZSBpZiB0aGUgdHlwZUlEIGlzIGEgZXZlbnQgdGhlIHR5cGVOYW1lIHdpbGwgYmUgdGhlIGV2ZW50TmFtZSwgaWYgaXMgYSBjYWxsYmFjayB0aGUgdHlwZUlEIGlzIHRoZSBtZXRob2ROYW1lIHRoYXQgaXMgcmVsYXRlZCB0aGlzIGNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tJRCBvbmx5IGFwcGxpZXMgd2hlbiB0aGUgdHlwZUlEIGlzICdjYWxsYmFjaycsIGlkZW50aWZpZXIgb2YgdGhlIGNhbGxiYWNrIHRvIGNhbGxcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBlcnJvciBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbndpbmRvd1tWUEFJRF9GTEFTSF9IQU5ETEVSXSA9IChmbGFzaElELCB0eXBlSUQsIHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSkgPT4ge1xuICAgIGxldCBpbnN0YW5jZSA9IHJlZ2lzdHJ5LmdldEluc3RhbmNlQnlJRChmbGFzaElEKTtcbiAgICBpZiAoIWluc3RhbmNlKSByZXR1cm47XG4gICAgaWYgKHR5cGVOYW1lID09PSAnaGFuZFNoYWtlJykge1xuICAgICAgICBpbnN0YW5jZS5faGFuZFNoYWtlKGVycm9yLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZUlEICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fY2FsbENhbGxiYWNrKHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdHJpZ2dlcih0eXBlTmFtZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XG5sZXQgaW5zdGFuY2VzID0gbmV3IFNpbmdsZVZhbHVlUmVnaXN0cnkoKTtcblxuY29uc3QgSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5ID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnYWRkSW5zdGFuY2UnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChpZCwgaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2VzLmFkZChpZCwgaW5zdGFuY2UpO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnZ2V0SW5zdGFuY2VCeUlEJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5nZXQoaWQpO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAncmVtb3ZlSW5zdGFuY2VCeUlEJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5yZW1vdmUoaWQpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTRmxhc2hCcmlkZ2VSZWdpc3RyeTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgfVxuICAgIGFkZCAoaWQsIHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVnaXN0cmllc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJpZXNbaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JlZ2lzdHJpZXNbaWRdLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cmllc1tpZF0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1tpZF0gfHwgW107XG4gICAgfVxuICAgIGZpbHRlcktleXMgKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgZmluZEJ5VmFsdWUgKHZhbHVlKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG4gICAgcmVtb3ZlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RyaWVzW2tleV0pIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fcmVnaXN0cmllc1trZXldLmluZGV4T2YodmFsdWUpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHsgcmV0dXJuOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmVtb3ZlQnlLZXkgKGlkKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICBsZXQga2V5cyA9IHRoaXMuZmluZEJ5VmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICBsZXQgb2xkID0gdGhpcy5fcmVnaXN0cmllcztcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbmdsZVZhbHVlUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgIH1cbiAgICBhZGQgKGlkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzW2lkXSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICB9XG4gICAgZmlsdGVyS2V5cyAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICBmaW5kQnlWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNba2V5XSA9PT0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cbiAgICByZW1vdmUgKGlkKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICBsZXQga2V5cyA9IHRoaXMuZmluZEJ5VmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzO1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuICAgIHNpemUoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5sZW5ndGg7XG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgbGV0IGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGYgPT4ge1xuICAgICAgICByZXR1cm4gYCR7cHJlZml4fV8keysrY291bnR9YDtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuXG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xuICAgICAgICBvblRpbWVvdXQoKTtcblxuICAgIH0sIHRpbWVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgb25TdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJRChwYXJlbnQsIGlkLCBjbGVhbkNvbnRlbnQgPSBmYWxzZSkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuRWwuaWQgPSBpZDtcbiAgICBpZiAoY2xlYW5Db250ZW50KSB7XG4gICAgICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9zaXRpdmVJbnQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobmV3VmFsKSkgJiYgaXNGaW5pdGUobmV3VmFsKSAmJiBuZXdWYWwgPiAwID8gbmV3VmFsIDogb2xkVmFsO1xufVxuXG5sZXQgZW5kc1dpdGggPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gZW5kc1dpdGggKHNlYXJjaFN0cmluZywgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHN1YmplY3RTdHJpbmcgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3ViamVjdFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gc3ViamVjdFN0cmluZy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHN1YmplY3RTdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0VuZHNXaXRoKHN0cmluZywgc2VhcmNoKSB7XG4gICAgcmV0dXJuIGVuZHNXaXRoLmNhbGwoc3RyaW5nLCBzZWFyY2gpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZsYXNoRWwoZWwpIHtcbiAgICAvLyBjYW4ndCB1c2UgZGlzcGxheSBub25lIG9yIHZpc2liaWxpdHkgbm9uZSBiZWNhdXNlIHdpbGwgYmxvY2sgZmxhc2ggaW4gc29tZSBicm93c2Vyc1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbC5zdHlsZS5sZWZ0ID0gJy0xcHgnO1xuICAgIGVsLnN0eWxlLnRvcCA9ICctMXB4JztcbiAgICBlbC5zdHlsZS53aWR0aCA9ICcxcHgnO1xuICAgIGVsLnN0eWxlLmhlaWdodCA9ICcxcHgnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUVUSE9EUyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsXG4gICAgJ2luaXRBZCcsXG4gICAgJ3N0YXJ0QWQnLFxuICAgICdzdG9wQWQnLFxuICAgICdza2lwQWQnLCAvLyBWUEFJRCAyLjAgbmV3IG1ldGhvZFxuICAgICdyZXNpemVBZCcsXG4gICAgJ3BhdXNlQWQnLFxuICAgICdyZXN1bWVBZCcsXG4gICAgJ2V4cGFuZEFkJyxcbiAgICAnY29sbGFwc2VBZCcsXG4gICAgJ3N1YnNjcmliZScsXG4gICAgJ3Vuc3Vic2NyaWJlJ1xuXTtcblxudmFyIEVWRU5UUyA9IFtcbiAgICAnQWRMb2FkZWQnLFxuICAgICdBZFN0YXJ0ZWQnLFxuICAgICdBZFN0b3BwZWQnLFxuICAgICdBZFNraXBwZWQnLFxuICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgJ0FkVm9sdW1lQ2hhbmdlJyxcbiAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxuICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9Db21wbGV0ZScsXG4gICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXG4gICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICdBZFBhdXNlZCcsXG4gICAgJ0FkUGxheWluZycsXG4gICAgJ0FkTG9nJyxcbiAgICAnQWRFcnJvcidcbl07XG5cbnZhciBHRVRURVJTID0gW1xuICAgICdnZXRBZExpbmVhcicsXG4gICAgJ2dldEFkV2lkdGgnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEhlaWdodCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkRXhwYW5kZWQnLFxuICAgICdnZXRBZFNraXBwYWJsZVN0YXRlJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRSZW1haW5pbmdUaW1lJyxcbiAgICAnZ2V0QWREdXJhdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkVm9sdW1lJyxcbiAgICAnZ2V0QWRDb21wYW5pb25zJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRJY29ucycgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbl07XG5cbnZhciBTRVRURVJTID0gW1xuICAgICdzZXRBZFZvbHVtZSdcbl07XG5cblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBJVlBBSURBZFVuaXRcbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvXG4gKi9cbmZ1bmN0aW9uIElWUEFJREFkVW5pdChjcmVhdGl2ZSwgZWwsIHZpZGVvKSB7fVxuXG5cbi8qKlxuICogaGFuZHNoYWtlVmVyc2lvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBWUEFJRFZlcnNpb25cbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uIChWUEFJRFZlcnNpb24sIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBpbml0QWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb25cbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RvcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2tpcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzaXplQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBwYXVzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc3VtZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBleHBhbmRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogY29sbGFwc2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7fTtcblxuXG5cbi8qKlxuICogZ2V0QWRMaW5lYXJcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkTGluZWFyID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkV2lkdGhcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkV2lkdGggPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRIZWlnaHRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSGVpZ2h0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRXhwYW5kZWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRXhwYW5kZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRTa2lwcGFibGVTdGF0ZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRTa2lwcGFibGVTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFJlbWFpbmluZ1RpbWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkUmVtYWluaW5nVGltZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZER1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZER1cmF0aW9uID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZENvbXBhbmlvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkQ29tcGFuaW9ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEljb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEljb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2FsbGJhY2spIHt9O1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdNRVRIT0RTJywgTUVUSE9EUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdHRVRURVJTJywgR0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdTRVRURVJTJywgU0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCAgRVZFTlRTKTtcblxuXG52YXIgVlBBSUQxX01FVEhPRFMgPSBNRVRIT0RTLmZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gWydza2lwQWQnXS5pbmRleE9mKG1ldGhvZCkgPT09IC0xO1xufSk7XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ2NoZWNrVlBBSURJbnRlcmZhY2UnLCBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlIChjcmVhdGl2ZSkge1xuICAgIHZhciByZXN1bHQgPSBWUEFJRDFfTUVUSE9EUy5ldmVyeShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjcmVhdGl2ZVtrZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJVlBBSURBZFVuaXQ7XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY1RvSW50ZXJmYWNlKEludGVyZmFjZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW50ZXJmYWNlLCBuYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0Jyk7XG52YXIgU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vc3Vic2NyaWJlcicpO1xudmFyIGNoZWNrVlBBSURJbnRlcmZhY2UgPSBJVlBBSURBZFVuaXQuY2hlY2tWUEFJREludGVyZmFjZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBNRVRIT0RTID0gSVZQQUlEQWRVbml0Lk1FVEhPRFM7XG52YXIgRVJST1IgPSAnQWRFcnJvcic7XG52YXIgQURfQ0xJQ0sgPSAnQWRDbGlja1RocnUnO1xudmFyIEZJTFRFUkVEX0VWRU5UUyA9IElWUEFJREFkVW5pdC5FVkVOVFMuZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudCAhPSBBRF9DTElDSztcbn0pO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIFZQQUlEQWRVbml0XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0gVlBBSURDcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnNsb3QgaWYgZGVmaW5lZFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSBbdmlkZW9dIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90IGlmIGRlZmluZWRcbiAqL1xuZnVuY3Rpb24gVlBBSURBZFVuaXQoVlBBSURDcmVhdGl2ZSwgZWwsIHZpZGVvLCBpZnJhbWUpIHtcbiAgICB0aGlzLl9pc1ZhbGlkID0gY2hlY2tWUEFJREludGVyZmFjZShWUEFJRENyZWF0aXZlKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZSA9IFZQQUlEQ3JlYXRpdmU7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICAgICAgdGhpcy5faWZyYW1lID0gaWZyYW1lO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgIHV0aWxzLnNldEZ1bGxTaXplU3R5bGUoZWwpO1xuICAgICAgICAkYWRkRXZlbnRzU3Vic2NyaWJlcnMuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSVZQQUlEQWRVbml0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogaXNWYWxpZFZQQUlEQWQgd2lsbCByZXR1cm4gaWYgdGhlIFZQQUlEQ3JlYXRpdmUgcGFzc2VkIGluIGNvbnN0cnVjdG9yIGlzIHZhbGlkIG9yIG5vdFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pc1ZhbGlkVlBBSURBZCA9IGZ1bmN0aW9uIGlzVmFsaWRWUEFJREFkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xufTtcblxuSVZQQUlEQWRVbml0Lk1FVEhPRFMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAvL05PVEU6IHRoaXMgbWV0aG9kcyBhcmd1bWVudHMgb3JkZXIgYXJlIGltcGxlbWVudGVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHNwZWNcbiAgICB2YXIgaWdub3JlcyA9IFtcbiAgICAgICAgJ3N1YnNjcmliZScsXG4gICAgICAgICd1bnN1YnNjcmliZScsXG4gICAgICAgICdpbml0QWQnXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVzLmluZGV4T2YobWV0aG9kKSAhPT0gLTEpIHJldHVybjtcblxuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJpYXR5ID0gSVZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdLmxlbmd0aDtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAoYXJpYXR5ID09PSBhcmdzLmxlbmd0aCkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVttZXRob2RdLmFwcGx5KHRoaXMuX2NyZWF0aXZlLCBhcmdzKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG5cbi8qKlxuICogaW5pdEFkIGNvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvbiwgaWYgZWwgJiB2aWRlbyB3YXMgdXNlZCBpbiBjb25zdHJ1Y3RvciBzbG90ICYgdmlkZW9TbG90IHdpbGwgYmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uIGluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge1xuICAgIGNyZWF0aXZlRGF0YSA9IGNyZWF0aXZlRGF0YSB8fCB7fTtcbiAgICBlbnZpcm9ubWVudFZhcnMgPSB1dGlscy5leHRlbmQoe1xuICAgICAgICBzbG90OiB0aGlzLl9lbCxcbiAgICAgICAgdmlkZW9TbG90OiB0aGlzLl92aWRlb0VsXG4gICAgfSwgZW52aXJvbm1lbnRWYXJzIHx8IHt9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yKTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnQsIGNvbnRleHQpO1xufTtcblxuXG4vKipcbiAqIHVuc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudW5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnQpO1xufTtcblxuLy9hbGlhc1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9uID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZTtcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vZmYgPSBWUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmU7XG5cbklWUEFJREFkVW5pdC5HRVRURVJTLmZvckVhY2goZnVuY3Rpb24oZ2V0dGVyKSB7XG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW2dldHRlcl0gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmVbZ2V0dGVyXSgpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbiBzZXRBZFZvbHVtZSh2b2x1bWUsIGNhbGxiYWNrKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuc2V0QWRWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlLmdldEFkVm9sdW1lKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShyZXN1bHQgPT09IHZvbHVtZSwgJ2ZhaWxlZCB0byBhcHBseSB2b2x1bWU6ICcgKyB2b2x1bWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMuc3RvcEFkKCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudW5zdWJzY3JpYmVBbGwoKTtcbn07XG5cbmZ1bmN0aW9uICRhZGRFdmVudHNTdWJzY3JpYmVycygpIHtcbiAgICAvLyBzb21lIGFkcyBpbXBsZW1lbnRcbiAgICAvLyBzbyB0aGV5IG9ubHkgaGFuZGxlIG9uZSBzdWJzY3JpYmVyXG4gICAgLy8gdG8gaGFuZGxlIHRoaXMgd2UgY3JlYXRlIG91ciBvbmVcbiAgICBGSUxURVJFRF9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCR0cmlnZ2VyLmJpbmQodGhpcywgZXZlbnQpLCBldmVudCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIG1hcCB0aGUgY2xpY2sgZXZlbnQgdG8gYmUgYW4gb2JqZWN0IGluc3RlYWQgb2YgZGVwZW5kaW5nIG9mIHRoZSBvcmRlciBvZiB0aGUgYXJndW1lbnRzXG4gICAgLy8gYW5kIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgZmxhc2hcbiAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJGNsaWNrVGhydUhvb2suYmluZCh0aGlzKSwgQURfQ0xJQ0spO1xuXG4gICAgLy8gYmVjYXVzZSB3ZSBhcmUgYWRkaW5nIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lXG4gICAgLy8gdGhlIHVzZXIgaXMgbm90IGFibGUgdG8gY2xpY2sgaW4gdGhlIHZpZGVvXG4gICAgaWYgKHRoaXMuX3ZpZGVvRWwpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHRoaXMuX2lmcmFtZS5jb250ZW50RG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgdmlkZW9FbCA9IHRoaXMuX3ZpZGVvRWw7XG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmlkZW9FbC5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRjbGlja1RocnVIb29rKHVybCwgaWQsIHBsYXllckhhbmRsZXMpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyU3luYyhBRF9DTElDSywge3VybDogdXJsLCBpZDogaWQsIHBsYXllckhhbmRsZXM6IHBsYXllckhhbmRsZXN9KTtcbn1cblxuZnVuY3Rpb24gJHRyaWdnZXIoZXZlbnQpIHtcbiAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlcihldmVudCwgQXJyYXkucHJvdG90eXBlLnNsaWNlKGFyZ3VtZW50cywgMSkpO1xufVxuXG5mdW5jdGlvbiBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHN1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgc3Vic2NyaWJlcnMudHJpZ2dlcihFUlJPUiwgZXJyb3IpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREFkVW5pdDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgdW5pcXVlID0gdXRpbHMudW5pcXVlKCd2cGFpZElmcmFtZScpO1xudmFyIFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpO1xuXG52YXIgZGVmYXVsdFRlbXBsYXRlID0gJzwhRE9DVFlQRSBodG1sPicgK1xuICAgICc8aHRtbCBsYW5nPVwiZW5cIj4nICtcbiAgICAnPGhlYWQ+PG1ldGEgY2hhcnNldD1cIlVURi04XCI+PC9oZWFkPicgK1xuICAgICc8Ym9keSBzdHlsZT1cIm1hcmdpbjowO3BhZGRpbmc6MFwiPjxkaXYgY2xhc3M9XCJhZC1lbGVtZW50XCI+PC9kaXY+JyArXG4gICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInt7aWZyYW1lVVJMX0pTfX1cIj48L3NjcmlwdD4nICtcbiAgICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+JyArXG4gICAgJ3dpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXFwne1wiZXZlbnRcIjogXCJyZWFkeVwiLCBcImlkXCI6IFwie3tpZnJhbWVJRH19XCJ9XFwnLCBcXCd7e29yaWdpbn19XFwnKTsnICtcbiAgICAnPC9zY3JpcHQ+JyArXG4gICAgJzwvYm9keT4nICtcbiAgICAnPC9odG1sPic7XG5cbnZhciBBRF9TVE9QUEVEID0gJ0FkU3RvcHBlZCc7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG4vKipcbiAqIFZQQUlESFRNTDVDbGllbnRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIHRoYXQgd2lsbCBjb250YWluIHRoZSBpZnJhbWUgdG8gbG9hZCBhZFVuaXQgYW5kIGEgZWwgdG8gYWRkIHRvIGFkVW5pdCBzbG90XG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvIGRlZmF1bHQgdmlkZW8gZWxlbWVudCB0byBiZSB1c2VkIGJ5IGFkVW5pdFxuICogQHBhcmFtIHtvYmplY3R9IFt0ZW1wbGF0ZUNvbmZpZ10gdGVtcGxhdGU6IGh0bWwgdGVtcGxhdGUgdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCBleHRyYU9wdGlvbnM6IHRvIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3ZwYWlkT3B0aW9uc10gdGltZW91dDogd2hlbiBsb2FkaW5nIGFkVW5pdFxuICovXG5mdW5jdGlvbiBWUEFJREhUTUw1Q2xpZW50KGVsLCB2aWRlbywgdGVtcGxhdGVDb25maWcsIHZwYWlkT3B0aW9ucykge1xuICAgIHRlbXBsYXRlQ29uZmlnID0gdGVtcGxhdGVDb25maWcgfHwge307XG5cbiAgICB0aGlzLl9pZCA9IHVuaXF1ZSgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZnJhbWVDb250YWluZXIgPSB1dGlscy5jcmVhdGVFbGVtZW50SW5FbChlbCwgJ2RpdicpO1xuICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICB0aGlzLl92cGFpZE9wdGlvbnMgPSB2cGFpZE9wdGlvbnMgfHwge3RpbWVvdXQ6IDEwMDAwfTtcblxuICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnID0ge1xuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVDb25maWcudGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlLFxuICAgICAgICBleHRyYU9wdGlvbnM6IHRlbXBsYXRlQ29uZmlnLmV4dHJhT3B0aW9ucyB8fCB7fVxuICAgIH07XG59XG5cbi8qKlxuICogZGVzdHJveVxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIGlzRGVzdHJveWVkXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuaXNEZXN0cm95ZWQgPSBmdW5jdGlvbiBpc0Rlc3Ryb3llZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdHJveWVkO1xufTtcblxuLyoqXG4gKiBsb2FkQWRVbml0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFkVVJMIHVybCBvZiB0aGUganMgb2YgdGhlIGFkVW5pdFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRBZFVuaXQoYWRVUkwsIGNhbGxiYWNrKSB7XG4gICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2YXIgZnJhbWUgPSB1dGlscy5jcmVhdGVJZnJhbWVXaXRoQ29udGVudChcbiAgICAgICAgdGhpcy5fZnJhbWVDb250YWluZXIsXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnLnRlbXBsYXRlLFxuICAgICAgICB1dGlscy5leHRlbmQoe1xuICAgICAgICAgICAgaWZyYW1lVVJMX0pTOiBhZFVSTCxcbiAgICAgICAgICAgIGlmcmFtZUlEOiB0aGlzLmdldElEKCksXG4gICAgICAgICAgICBvcmlnaW46IGdldE9yaWdpbigpXG4gICAgICAgIH0sIHRoaXMuX3RlbXBsYXRlQ29uZmlnLmV4dHJhT3B0aW9ucylcbiAgICApO1xuXG4gICAgdGhpcy5fZnJhbWUgPSBmcmFtZTtcblxuICAgIHRoaXMuX29uTG9hZCA9IHV0aWxzLmNhbGxiYWNrVGltZW91dChcbiAgICAgICAgdGhpcy5fdnBhaWRPcHRpb25zLnRpbWVvdXQsXG4gICAgICAgIG9uTG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICBvblRpbWVvdXQuYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTG9hZCk7XG5cbiAgICBmdW5jdGlvbiBvbkxvYWQgKGUpIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiBmYWxzZSAqL1xuICAgICAgICAvL2Rvbid0IGNsZWFyIHRpbWVvdXRcbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBnZXRPcmlnaW4oKSkgcmV0dXJuO1xuICAgICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxuICAgICAgICBpZiAocmVzdWx0LmlkICE9PSB0aGF0LmdldElEKCkpIHJldHVybjtcblxuICAgICAgICB2YXIgYWRVbml0LCBlcnJvciwgY3JlYXRlQWQ7XG4gICAgICAgIGlmICghdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdykge1xuXG4gICAgICAgICAgICBlcnJvciA9ICd0aGUgaWZyYW1lIGlzIG5vdCBhbnltb3JlIGluIHRoZSBET00gdHJlZSc7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyZWF0ZUFkID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5nZXRWUEFJREFkO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZSh0eXBlb2YgY3JlYXRlQWQgPT09ICdmdW5jdGlvbicsICd0aGUgYWQgZGlkblxcJ3QgcmV0dXJuIGEgZnVuY3Rpb24gdG8gY3JlYXRlIGFuIGFkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICB2YXIgYWRFbCA9IHRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkLWVsZW1lbnQnKTtcbiAgICAgICAgICAgIGFkVW5pdCA9IG5ldyBWUEFJREFkVW5pdChjcmVhdGVBZCgpLCBhZEVsLCB0aGF0Ll92aWRlb0VsLCB0aGF0Ll9mcmFtZSk7XG4gICAgICAgICAgICBhZFVuaXQuc3Vic2NyaWJlKEFEX1NUT1BQRUQsICRhZERlc3Ryb3llZC5iaW5kKHRoYXQpKTtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUoYWRVbml0LmlzVmFsaWRWUEFJREFkKCksICd0aGUgYWRkIGlzIG5vdCBmdWxseSBjb21wbGFpbnQgd2l0aCBWUEFJRCBzcGVjaWZpY2F0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll9hZFVuaXQgPSBhZFVuaXQ7XG4gICAgICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhhdCk7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBlcnJvciA/IG51bGwgOiBhZFVuaXQpO1xuXG4gICAgICAgIC8vY2xlYXIgdGltZW91dFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICAgIGNhbGxiYWNrKCd0aW1lb3V0JywgbnVsbCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiB1bmxvYWRBZFVuaXRcbiAqXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogZ2V0SUQgd2lsbCByZXR1cm4gdGhlIHVuaXF1ZSBpZFxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuZ2V0SUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xufTtcblxuXG4vKipcbiAqICRyZW1vdmVFbFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuZnVuY3Rpb24gJHJlbW92ZUVsKGtleSkge1xuICAgIHZhciBlbCA9IHRoaXNba2V5XTtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkYWREZXN0cm95ZWQoKSB7XG4gICAgJHJlbW92ZUFkRWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xufVxuXG5mdW5jdGlvbiAkdW5sb2FkUHJldmlvdXNBZFVuaXQoKSB7XG4gICAgJHJlbW92ZUFkRWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgICAkZGVzdHJveUFkVW5pdC5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiAkcmVtb3ZlQWRFbGVtZW50cygpIHtcbiAgICAkcmVtb3ZlRWwuY2FsbCh0aGlzLCAnX2ZyYW1lJyk7XG4gICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGlzKTtcbn1cblxuLyoqXG4gKiAkZGVzdHJveUxvYWRMaXN0ZW5lclxuICpcbiAqL1xuZnVuY3Rpb24gJGRlc3Ryb3lMb2FkTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX29uTG9hZCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTG9hZCk7XG4gICAgICAgIHV0aWxzLmNsZWFyQ2FsbGJhY2tUaW1lb3V0KHRoaXMuX29uTG9hZCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vbkxvYWQ7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uICRkZXN0cm95QWRVbml0KCkge1xuICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xuICAgIH1cbn1cblxuLyoqXG4gKiAkdGhyb3dJZkRlc3Ryb3llZFxuICpcbiAqL1xuZnVuY3Rpb24gJHRocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdWUEFJREhUTUw1Q2xpZW50IGFscmVhZHkgZGVzdHJveWVkIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0T3JpZ2luKCkge1xuICAgIGlmKCB3aW5kb3cubG9jYXRpb24ub3JpZ2luICkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgK1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICtcbiAgICAgICAgICAgICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESFRNTDVDbGllbnQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gU3Vic2NyaWJlcigpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xufVxuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlciwgZXZlbnROYW1lLCBjb250ZXh0KSB7XG4gICAgaWYgKCF0aGlzLmlzSGFuZGxlckF0dGFjaGVkKGhhbmRsZXIsIGV2ZW50TmFtZSkpIHtcbiAgICAgICAgdGhpcy5nZXQoZXZlbnROYW1lKS5wdXNoKHtoYW5kbGVyOiBoYW5kbGVyLCBjb250ZXh0OiBjb250ZXh0LCBldmVudE5hbWU6IGV2ZW50TmFtZX0pO1xuICAgIH1cbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnROYW1lKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IHRoaXMuZ2V0KGV2ZW50TmFtZSkuZmlsdGVyKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyICE9PSBzdWJzY3JpYmVyLmhhbmRsZXI7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHRoaXMuZ2V0KGV2ZW50TmFtZSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmdldCgnKicpKTtcblxuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhhdC5pc0hhbmRsZXJBdHRhY2hlZChzdWJzY3JpYmVyLmhhbmRsZXIsIHN1YnNjcmliZXIuZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuaGFuZGxlci5jYWxsKHN1YnNjcmliZXIuY29udGV4dCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlclN5bmMgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSB0aGlzLmdldChldmVudE5hbWUpXG4gICAgICAgIC5jb25jYXQodGhpcy5nZXQoJyonKSk7XG5cbiAgICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHN1YnNjcmliZXIuaGFuZGxlci5jYWxsKHN1YnNjcmliZXIuY29udGV4dCwgZGF0YSk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoZXZlbnROYW1lKSB7XG4gICAgaWYgKCF0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV07XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS5pc0hhbmRsZXJBdHRhY2hlZCA9IGZ1bmN0aW9uIGlzSGFuZGxlckF0dGFjaGVkKGhhbmRsZXIsIGV2ZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldChldmVudE5hbWUpLnNvbWUoZnVuY3Rpb24oc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlciA9PT0gc3Vic2NyaWJlci5oYW5kbGVyO1xuICAgIH0pXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN1YnNjcmliZXI7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBub29wIGEgZW1wdHkgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogdmFsaWRhdGUgaWYgaXMgbm90IHZhbGlkYXRlIHdpbGwgcmV0dXJuIGFuIEVycm9yIHdpdGggdGhlIG1lc3NhZ2VcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlKGlzVmFsaWQsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG5cbnZhciB0aW1lb3V0cyA9IHt9O1xuLyoqXG4gKiBjbGVhckNhbGxiYWNrVGltZW91dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgaGFuZGxlciB0byByZW1vdmVcbiAqL1xuZnVuY3Rpb24gY2xlYXJDYWxsYmFja1RpbWVvdXQoZnVuYykge1xuICAgIHZhciB0aW1lb3V0ID0gdGltZW91dHNbZnVuY107XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICBkZWxldGUgdGltZW91dHNbZnVuY107XG4gICAgfVxufVxuXG4vKipcbiAqIGNhbGxiYWNrVGltZW91dCBpZiB0aGUgb25TdWNjZXNzIGlzIG5vdCBjYWxsZWQgYW5kIHJldHVybnMgdHJ1ZSBpbiB0aGUgdGltZWxpbWl0IHRoZW4gb25UaW1lb3V0IHdpbGwgYmUgY2FsbGVkXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN1Y2Nlc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uVGltZW91dFxuICovXG5mdW5jdGlvbiBjYWxsYmFja1RpbWVvdXQodGltZXIsIG9uU3VjY2Vzcywgb25UaW1lb3V0KSB7XG4gICAgdmFyIGNhbGxiYWNrLCB0aW1lb3V0O1xuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xuICAgICAgICBkZWxldGUgdGltZW91dFtjYWxsYmFja107XG4gICAgICAgIG9uVGltZW91dCgpO1xuICAgIH0sIHRpbWVyKTtcblxuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICBpZiAob25TdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgIGNsZWFyQ2FsbGJhY2tUaW1lb3V0KGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aW1lb3V0c1tjYWxsYmFja10gPSB0aW1lb3V0O1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5cbi8qKlxuICogY3JlYXRlRWxlbWVudEluRWxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEluRWwocGFyZW50LCB0YWdOYW1lLCBpZCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGlmIChpZCkgbkVsLmlkID0gaWQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuLyoqXG4gKiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIHNpbXBsZSB0ZW1wbGF0ZSB1c2luZyB7e3Zhcn19XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudChwYXJlbnQsIHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgdmFyIGlmcmFtZSA9IGNyZWF0ZUlmcmFtZShwYXJlbnQsIG51bGwsIGRhdGEuekluZGV4KTtcbiAgICBpZiAoIXNldElmcmFtZUNvbnRlbnQoaWZyYW1lLCBzaW1wbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkpKSByZXR1cm47XG4gICAgcmV0dXJuIGlmcmFtZTtcbn1cblxuLyoqXG4gKiBjcmVhdGVJZnJhbWVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSWZyYW1lKHBhcmVudCwgdXJsLCB6SW5kZXgpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgbkVsLnNyYyA9IHVybCB8fCAnYWJvdXQ6YmxhbmsnO1xuICAgIG5FbC5tYXJnaW5XaWR0aCA9ICcwJztcbiAgICBuRWwubWFyZ2luSGVpZ2h0ID0gJzAnO1xuICAgIG5FbC5mcmFtZUJvcmRlciA9ICcwJztcbiAgICBuRWwud2lkdGggPSAnMTAwJSc7XG4gICAgbkVsLmhlaWdodCA9ICcxMDAlJztcbiAgICBzZXRGdWxsU2l6ZVN0eWxlKG5FbCk7XG5cbiAgICBpZih6SW5kZXgpe1xuICAgICAgICBuRWwuc3R5bGUuekluZGV4ID0gekluZGV4O1xuICAgIH1cblxuICAgIG5FbC5zZXRBdHRyaWJ1dGUoJ1NDUk9MTElORycsJ05PJyk7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbmZ1bmN0aW9uIHNldEZ1bGxTaXplU3R5bGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG59XG5cbi8qKlxuICogc2ltcGxlVGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IEpTT04uc3RyaW5naWZ5KGRhdGFba2V5XSkgOiBkYXRhW2tleV07XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKCd7eycgKyBrZXkgKyAnfX0nLCAnZycpLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vKipcbiAqIHNldElmcmFtZUNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxJZnJhbWVFbGVtZW50fSBpZnJhbWVFbFxuICogQHBhcmFtIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gc2V0SWZyYW1lQ29udGVudChpZnJhbWVFbCwgY29udGVudCkge1xuICAgIHZhciBpZnJhbWVEb2MgPSBpZnJhbWVFbC5jb250ZW50V2luZG93ICYmIGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgaWYgKCFpZnJhbWVEb2MpIHJldHVybiBmYWxzZTtcblxuICAgIGlmcmFtZURvYy53cml0ZShjb250ZW50KTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbi8qKlxuICogZXh0ZW5kIG9iamVjdCB3aXRoIGtleXMgZnJvbSBhbm90aGVyIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0b0V4dGVuZFxuICogQHBhcmFtIHtvYmplY3R9IGZyb21Tb3VyY2VcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRvRXh0ZW5kLCBmcm9tU291cmNlKSB7XG4gICAgT2JqZWN0LmtleXMoZnJvbVNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdG9FeHRlbmRba2V5XSA9IGZyb21Tb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9FeHRlbmQ7XG59XG5cblxuLyoqXG4gKiB1bmlxdWUgd2lsbCBjcmVhdGUgYSB1bmlxdWUgc3RyaW5nIGV2ZXJ5dGltZSBpcyBjYWxsZWQsIHNlcXVlbnRpYWxseSBhbmQgcHJlZml4ZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKi9cbmZ1bmN0aW9uIHVuaXF1ZShwcmVmaXgpIHtcbiAgICB2YXIgY291bnQgPSAtMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ18nICsgKCsrY291bnQpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5vb3A6IG5vb3AsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlLFxuICAgIGNsZWFyQ2FsbGJhY2tUaW1lb3V0OiBjbGVhckNhbGxiYWNrVGltZW91dCxcbiAgICBjYWxsYmFja1RpbWVvdXQ6IGNhbGxiYWNrVGltZW91dCxcbiAgICBjcmVhdGVFbGVtZW50SW5FbDogY3JlYXRlRWxlbWVudEluRWwsXG4gICAgY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQ6IGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50LFxuICAgIGNyZWF0ZUlmcmFtZTogY3JlYXRlSWZyYW1lLFxuICAgIHNldEZ1bGxTaXplU3R5bGU6IHNldEZ1bGxTaXplU3R5bGUsXG4gICAgc2ltcGxlVGVtcGxhdGU6IHNpbXBsZVRlbXBsYXRlLFxuICAgIHNldElmcmFtZUNvbnRlbnQ6IHNldElmcmFtZUNvbnRlbnQsXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgdW5pcXVlOiB1bmlxdWVcbn07XG5cbiIsIi8qISAgICBTV0ZPYmplY3QgdjIuMy4yMDEzMDUyMSA8aHR0cDovL2dpdGh1Yi5jb20vc3dmb2JqZWN0L3N3Zm9iamVjdD5cclxuICAgIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSA8aHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHA+XHJcbiovXHJcblxyXG4vKiBnbG9iYWwgQWN0aXZlWE9iamVjdDogZmFsc2UgKi9cclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgIC8vIEFNRFxyXG4gICAgZGVmaW5lKGZhY3RvcnkpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgIC8vIE5vZGUsIENvbW1vbkpTLWxpa2VcclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxyXG4gICAgcm9vdC5zd2ZvYmplY3QgPSBmYWN0b3J5KCk7XHJcbiAgfVxyXG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgVU5ERUYgPSBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgIE9CSkVDVCA9IFwib2JqZWN0XCIsXHJcbiAgICAgICAgU0hPQ0tXQVZFX0ZMQVNIID0gXCJTaG9ja3dhdmUgRmxhc2hcIixcclxuICAgICAgICBTSE9DS1dBVkVfRkxBU0hfQVggPSBcIlNob2Nrd2F2ZUZsYXNoLlNob2Nrd2F2ZUZsYXNoXCIsXHJcbiAgICAgICAgRkxBU0hfTUlNRV9UWVBFID0gXCJhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaFwiLFxyXG4gICAgICAgIEVYUFJFU1NfSU5TVEFMTF9JRCA9IFwiU1dGT2JqZWN0RXhwckluc3RcIixcclxuICAgICAgICBPTl9SRUFEWV9TVEFURV9DSEFOR0UgPSBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLFxyXG5cclxuICAgICAgICB3aW4gPSB3aW5kb3csXHJcbiAgICAgICAgZG9jID0gZG9jdW1lbnQsXHJcbiAgICAgICAgbmF2ID0gbmF2aWdhdG9yLFxyXG5cclxuICAgICAgICBwbHVnaW4gPSBmYWxzZSxcclxuICAgICAgICBkb21Mb2FkRm5BcnIgPSBbXSxcclxuICAgICAgICByZWdPYmpBcnIgPSBbXSxcclxuICAgICAgICBvYmpJZEFyciA9IFtdLFxyXG4gICAgICAgIGxpc3RlbmVyc0FyciA9IFtdLFxyXG4gICAgICAgIHN0b3JlZEZiQ29udGVudCxcclxuICAgICAgICBzdG9yZWRGYkNvbnRlbnRJZCxcclxuICAgICAgICBzdG9yZWRDYWxsYmFja0ZuLFxyXG4gICAgICAgIHN0b3JlZENhbGxiYWNrT2JqLFxyXG4gICAgICAgIGlzRG9tTG9hZGVkID0gZmFsc2UsXHJcbiAgICAgICAgaXNFeHByZXNzSW5zdGFsbEFjdGl2ZSA9IGZhbHNlLFxyXG4gICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0LFxyXG4gICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0TWVkaWEsXHJcbiAgICAgICAgYXV0b0hpZGVTaG93ID0gdHJ1ZSxcclxuICAgICAgICBlbmNvZGVVUklFbmFibGVkID0gZmFsc2UsXHJcblxyXG4gICAgLyogQ2VudHJhbGl6ZWQgZnVuY3Rpb24gZm9yIGJyb3dzZXIgZmVhdHVyZSBkZXRlY3Rpb25cclxuICAgICAgICAtIFVzZXIgYWdlbnQgc3RyaW5nIGRldGVjdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiBubyBnb29kIGFsdGVybmF0aXZlIGlzIHBvc3NpYmxlXHJcbiAgICAgICAgLSBJcyBleGVjdXRlZCBkaXJlY3RseSBmb3Igb3B0aW1hbCBwZXJmb3JtYW5jZVxyXG4gICAgKi9cclxuICAgIHVhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB3M2Nkb20gPSB0eXBlb2YgZG9jLmdldEVsZW1lbnRCeUlkICE9PSBVTkRFRiAmJiB0eXBlb2YgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBVTkRFRiAmJiB0eXBlb2YgZG9jLmNyZWF0ZUVsZW1lbnQgIT09IFVOREVGLFxyXG4gICAgICAgICAgICB1ID0gbmF2LnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBwID0gbmF2LnBsYXRmb3JtLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIHdpbmRvd3MgPSBwID8gL3dpbi8udGVzdChwKSA6IC93aW4vLnRlc3QodSksXHJcbiAgICAgICAgICAgIG1hYyA9IHAgPyAvbWFjLy50ZXN0KHApIDogL21hYy8udGVzdCh1KSxcclxuICAgICAgICAgICAgd2Via2l0ID0gL3dlYmtpdC8udGVzdCh1KSA/IHBhcnNlRmxvYXQodS5yZXBsYWNlKC9eLip3ZWJraXRcXC8oXFxkKyhcXC5cXGQrKT8pLiokLywgXCIkMVwiKSkgOiBmYWxzZSwgLy8gcmV0dXJucyBlaXRoZXIgdGhlIHdlYmtpdCB2ZXJzaW9uIG9yIGZhbHNlIGlmIG5vdCB3ZWJraXRcclxuICAgICAgICAgICAgaWUgPSBuYXYuYXBwTmFtZSA9PT0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIixcclxuICAgICAgICAgICAgcGxheWVyVmVyc2lvbiA9IFswLCAwLCAwXSxcclxuICAgICAgICAgICAgZCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYXYucGx1Z2lucyAhPT0gVU5ERUYgJiYgdHlwZW9mIG5hdi5wbHVnaW5zW1NIT0NLV0FWRV9GTEFTSF0gPT09IE9CSkVDVCkge1xyXG4gICAgICAgICAgICBkID0gbmF2LnBsdWdpbnNbU0hPQ0tXQVZFX0ZMQVNIXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgLy8gbmF2Lm1pbWVUeXBlc1tcImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCJdLmVuYWJsZWRQbHVnaW4gaW5kaWNhdGVzIHdoZXRoZXIgcGx1Zy1pbnMgYXJlIGVuYWJsZWQgb3IgZGlzYWJsZWQgaW4gU2FmYXJpIDMrXHJcbiAgICAgICAgICAgIGlmIChkICYmICh0eXBlb2YgbmF2Lm1pbWVUeXBlcyAhPT0gVU5ERUYgJiYgbmF2Lm1pbWVUeXBlc1tGTEFTSF9NSU1FX1RZUEVdICYmIG5hdi5taW1lVHlwZXNbRkxBU0hfTUlNRV9UWVBFXS5lbmFibGVkUGx1Z2luKSkge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGllID0gZmFsc2U7IC8vIGNhc2NhZGVkIGZlYXR1cmUgZGV0ZWN0aW9uIGZvciBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgICAgICAgICAgICAgZCA9IGQucmVwbGFjZSgvXi4qXFxzKyhcXFMrXFxzK1xcUyskKS8sIFwiJDFcIik7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJWZXJzaW9uWzBdID0gdG9JbnQoZC5yZXBsYWNlKC9eKC4qKVxcLi4qJC8sIFwiJDFcIikpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyVmVyc2lvblsxXSA9IHRvSW50KGQucmVwbGFjZSgvXi4qXFwuKC4qKVxccy4qJC8sIFwiJDFcIikpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyVmVyc2lvblsyXSA9IC9bYS16QS1aXS8udGVzdChkKSA/IHRvSW50KGQucmVwbGFjZSgvXi4qW2EtekEtWl0rKC4qKSQvLCBcIiQxXCIpKSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHdpbi5BY3RpdmVYT2JqZWN0ICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgQWN0aXZlWE9iamVjdChTSE9DS1dBVkVfRkxBU0hfQVgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEpIHsgLy8gYSB3aWxsIHJldHVybiBudWxsIHdoZW4gQWN0aXZlWCBpcyBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIGQgPSBhLkdldFZhcmlhYmxlKFwiJHZlcnNpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWUgPSB0cnVlOyAvLyBjYXNjYWRlZCBmZWF0dXJlIGRldGVjdGlvbiBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IGQuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyVmVyc2lvbiA9IFt0b0ludChkWzBdKSwgdG9JbnQoZFsxXSksIHRvSW50KGRbMl0pXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7dzM6IHczY2RvbSwgcHY6IHBsYXllclZlcnNpb24sIHdrOiB3ZWJraXQsIGllOiBpZSwgd2luOiB3aW5kb3dzLCBtYWM6IG1hY307XHJcbiAgICB9KCksXHJcblxyXG4gICAgLyogQ3Jvc3MtYnJvd3NlciBvbkRvbUxvYWRcclxuICAgICAgICAtIFdpbGwgZmlyZSBhbiBldmVudCBhcyBzb29uIGFzIHRoZSBET00gb2YgYSB3ZWIgcGFnZSBpcyBsb2FkZWRcclxuICAgICAgICAtIEludGVybmV0IEV4cGxvcmVyIHdvcmthcm91bmQgYmFzZWQgb24gRGllZ28gUGVyaW5pJ3Mgc29sdXRpb246IGh0dHA6Ly9qYXZhc2NyaXB0Lm53Ym94LmNvbS9JRUNvbnRlbnRMb2FkZWQvXHJcbiAgICAgICAgLSBSZWd1bGFyIG9ubG9hZCBzZXJ2ZXMgYXMgZmFsbGJhY2tcclxuICAgICovXHJcbiAgICBvbkRvbUxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF1YS53MykgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoKHR5cGVvZiBkb2MucmVhZHlTdGF0ZSAhPT0gVU5ERUYgJiYgKGRvYy5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHwgZG9jLnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIikpIHx8ICh0eXBlb2YgZG9jLnJlYWR5U3RhdGUgPT09IFVOREVGICYmIChkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdIHx8IGRvYy5ib2R5KSkpIHsgLy8gZnVuY3Rpb24gaXMgZmlyZWQgYWZ0ZXIgb25sb2FkLCBlLmcuIHdoZW4gc2NyaXB0IGlzIGluc2VydGVkIGR5bmFtaWNhbGx5XHJcbiAgICAgICAgICAgIGNhbGxEb21Mb2FkRnVuY3Rpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNEb21Mb2FkZWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2MuYWRkRXZlbnRMaXN0ZW5lciAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjYWxsRG9tTG9hZEZ1bmN0aW9ucywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1YS5pZSkge1xyXG4gICAgICAgICAgICAgICAgZG9jLmF0dGFjaEV2ZW50KE9OX1JFQURZX1NUQVRFX0NIQU5HRSwgZnVuY3Rpb24gZGV0YWNoKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2MucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5kZXRhY2hFdmVudChPTl9SRUFEWV9TVEFURV9DSEFOR0UsIGRldGFjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxEb21Mb2FkRnVuY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luID09IHRvcCkgeyAvLyBpZiBub3QgaW5zaWRlIGFuIGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbiBjaGVja0RvbUxvYWRlZElFKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEb21Mb2FkZWQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKFwibGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVja0RvbUxvYWRlZElFLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsRG9tTG9hZEZ1bmN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0oKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVhLndrKSB7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gY2hlY2tEb21Mb2FkZWRXSygpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNEb21Mb2FkZWQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGRvYy5yZWFkeVN0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrRG9tTG9hZGVkV0ssIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxEb21Mb2FkRnVuY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB9KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGxEb21Mb2FkRnVuY3Rpb25zKCkge1xyXG4gICAgICAgIGlmIChpc0RvbUxvYWRlZCB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRyeSB7IC8vIHRlc3QgaWYgd2UgY2FuIHJlYWxseSBhZGQvcmVtb3ZlIGVsZW1lbnRzIHRvL2Zyb20gdGhlIERPTTsgd2UgZG9uJ3Qgd2FudCB0byBmaXJlIGl0IHRvbyBlYXJseVxyXG4gICAgICAgICAgICB2YXIgdCwgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgLy9oaWRlIHRoZSBzcGFuIGluIGNhc2Ugc29tZW9uZSBoYXMgc3R5bGVkIHNwYW5zIHZpYSBDU1NcclxuICAgICAgICAgICAgdCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgIHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KTtcclxuICAgICAgICAgICAgdCA9IG51bGw7IC8vY2xlYXIgdGhlIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICBzcGFuID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaXNEb21Mb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBkbCA9IGRvbUxvYWRGbkFyci5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvbUxvYWRGbkFycltpXSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGREb21Mb2FkRXZlbnQoZm4pIHtcclxuICAgICAgICBpZiAoaXNEb21Mb2FkZWQpIHtcclxuICAgICAgICAgICAgZm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbUxvYWRGbkFycltkb21Mb2FkRm5BcnIubGVuZ3RoXSA9IGZuOyAvLyBBcnJheS5wdXNoKCkgaXMgb25seSBhdmFpbGFibGUgaW4gSUU1LjUrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIENyb3NzLWJyb3dzZXIgb25sb2FkXHJcbiAgICAgICAgLSBCYXNlZCBvbiBKYW1lcyBFZHdhcmRzJyBzb2x1dGlvbjogaHR0cDovL2Jyb3RoZXJjYWtlLmNvbS9zaXRlL3Jlc291cmNlcy9zY3JpcHRzL29ubG9hZC9cclxuICAgICAgICAtIFdpbGwgZmlyZSBhbiBldmVudCBhcyBzb29uIGFzIGEgd2ViIHBhZ2UgaW5jbHVkaW5nIGFsbCBvZiBpdHMgYXNzZXRzIGFyZSBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkTG9hZEV2ZW50KGZuKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW4uYWRkRXZlbnRMaXN0ZW5lciAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZuLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkb2MuYWRkRXZlbnRMaXN0ZW5lciAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZuLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB3aW4uYXR0YWNoRXZlbnQgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgIGFkZExpc3RlbmVyKHdpbiwgXCJvbmxvYWRcIiwgZm4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygd2luLm9ubG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHZhciBmbk9sZCA9IHdpbi5vbmxvYWQ7XHJcbiAgICAgICAgICAgIHdpbi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmbk9sZCgpO1xyXG4gICAgICAgICAgICAgICAgZm4oKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbi5vbmxvYWQgPSBmbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogRGV0ZWN0IHRoZSBGbGFzaCBQbGF5ZXIgdmVyc2lvbiBmb3Igbm9uLUludGVybmV0IEV4cGxvcmVyIGJyb3dzZXJzXHJcbiAgICAgICAgLSBEZXRlY3RpbmcgdGhlIHBsdWctaW4gdmVyc2lvbiB2aWEgdGhlIG9iamVjdCBlbGVtZW50IGlzIG1vcmUgcHJlY2lzZSB0aGFuIHVzaW5nIHRoZSBwbHVnaW5zIGNvbGxlY3Rpb24gaXRlbSdzIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgYS4gQm90aCByZWxlYXNlIGFuZCBidWlsZCBudW1iZXJzIGNhbiBiZSBkZXRlY3RlZFxyXG4gICAgICAgICAgYi4gQXZvaWQgd3JvbmcgZGVzY3JpcHRpb25zIGJ5IGNvcnJ1cHQgaW5zdGFsbGVycyBwcm92aWRlZCBieSBBZG9iZVxyXG4gICAgICAgICAgYy4gQXZvaWQgd3JvbmcgZGVzY3JpcHRpb25zIGJ5IG11bHRpcGxlIEZsYXNoIFBsYXllciBlbnRyaWVzIGluIHRoZSBwbHVnaW4gQXJyYXksIGNhdXNlZCBieSBpbmNvcnJlY3QgYnJvd3NlciBpbXBvcnRzXHJcbiAgICAgICAgLSBEaXNhZHZhbnRhZ2Ugb2YgdGhpcyBtZXRob2QgaXMgdGhhdCBpdCBkZXBlbmRzIG9uIHRoZSBhdmFpbGFiaWxpdHkgb2YgdGhlIERPTSwgd2hpbGUgdGhlIHBsdWdpbnMgY29sbGVjdGlvbiBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGVcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiB0ZXN0UGxheWVyVmVyc2lvbigpIHtcclxuICAgICAgICB2YXIgYiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XHJcbiAgICAgICAgdmFyIG8gPSBjcmVhdGVFbGVtZW50KE9CSkVDVCk7XHJcbiAgICAgICAgby5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IGhpZGRlbjtcIik7XHJcbiAgICAgICAgby5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIEZMQVNIX01JTUVfVFlQRSk7XHJcbiAgICAgICAgdmFyIHQgPSBiLmFwcGVuZENoaWxkKG8pO1xyXG4gICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgKGZ1bmN0aW9uIGNoZWNrR2V0VmFyaWFibGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQuR2V0VmFyaWFibGUgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0LkdldFZhcmlhYmxlKFwiJHZlcnNpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gZC5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWEucHYgPSBbdG9JbnQoZFswXSksIHRvSW50KGRbMV0pLCB0b0ludChkWzJdKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdC5HZXRWYXJpYWJsZShcIiR2ZXJzaW9uXCIpIGlzIGtub3duIHRvIGZhaWwgaW4gRmxhc2ggUGxheWVyIDggb24gRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0lmIHRoaXMgZXJyb3IgaXMgZW5jb3VudGVyZWQsIGFzc3VtZSBGUDggb3IgbG93ZXIuIFRpbWUgdG8gdXBncmFkZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdWEucHYgPSBbOCwgMCwgMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY291bnRlciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tHZXRWYXJpYWJsZSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGIucmVtb3ZlQ2hpbGQobyk7XHJcbiAgICAgICAgICAgICAgICB0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIG1hdGNoVmVyc2lvbnMoKTtcclxuICAgICAgICAgICAgfSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoVmVyc2lvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUGVyZm9ybSBGbGFzaCBQbGF5ZXIgYW5kIFNXRiB2ZXJzaW9uIG1hdGNoaW5nOyBzdGF0aWMgcHVibGlzaGluZyBvbmx5XHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gbWF0Y2hWZXJzaW9ucygpIHtcclxuICAgICAgICB2YXIgcmwgPSByZWdPYmpBcnIubGVuZ3RoO1xyXG4gICAgICAgIGlmIChybCA+IDApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBybDsgaSsrKSB7IC8vIGZvciBlYWNoIHJlZ2lzdGVyZWQgb2JqZWN0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHJlZ09iakFycltpXS5pZDtcclxuICAgICAgICAgICAgICAgIHZhciBjYiA9IHJlZ09iakFycltpXS5jYWxsYmFja0ZuO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiT2JqID0ge3N1Y2Nlc3M6IGZhbHNlLCBpZDogaWR9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHVhLnB2WzBdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBnZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzUGxheWVyVmVyc2lvbihyZWdPYmpBcnJbaV0uc3dmVmVyc2lvbikgJiYgISh1YS53ayAmJiB1YS53ayA8IDMxMikpIHsgLy8gRmxhc2ggUGxheWVyIHZlcnNpb24gPj0gcHVibGlzaGVkIFNXRiB2ZXJzaW9uOiBIb3VzdG9uLCB3ZSBoYXZlIGEgbWF0Y2ghXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5KGlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2JqLnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2JqLnJlZiA9IGdldE9iamVjdEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2JqLmlkID0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoY2JPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlZ09iakFycltpXS5leHByZXNzSW5zdGFsbCAmJiBjYW5FeHByZXNzSW5zdGFsbCgpKSB7IC8vIHNob3cgdGhlIEFkb2JlIEV4cHJlc3MgSW5zdGFsbCBkaWFsb2cgaWYgc2V0IGJ5IHRoZSB3ZWIgcGFnZSBhdXRob3IgYW5kIGlmIHN1cHBvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0LmRhdGEgPSByZWdPYmpBcnJbaV0uZXhwcmVzc0luc3RhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHQud2lkdGggPSBvYmouZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHQuaGVpZ2h0ID0gb2JqLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSB8fCBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpIHsgYXR0LnN0eWxlY2xhc3MgPSBvYmouZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouZ2V0QXR0cmlidXRlKFwiYWxpZ25cIikpIHsgYXR0LmFsaWduID0gb2JqLmdldEF0dHJpYnV0ZShcImFsaWduXCIpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSBIVE1MIG9iamVjdCBwYXJhbSBlbGVtZW50J3MgbmFtZS12YWx1ZSBwYWlyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBvYmouZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJhbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwbCA9IHAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBbal0uZ2V0QXR0cmlidXRlKFwibmFtZVwiKS50b0xvd2VyQ2FzZSgpICE9PSBcIm1vdmllXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyW3Bbal0uZ2V0QXR0cmlidXRlKFwibmFtZVwiKV0gPSBwW2pdLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHByZXNzSW5zdGFsbChhdHQsIHBhciwgaWQsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgLy8gRmxhc2ggUGxheWVyIGFuZCBTV0YgdmVyc2lvbiBtaXNtYXRjaCBvciBhbiBvbGRlciBXZWJraXQgZW5naW5lIHRoYXQgaWdub3JlcyB0aGUgSFRNTCBvYmplY3QgZWxlbWVudCdzIG5lc3RlZCBwYXJhbSBlbGVtZW50czogZGlzcGxheSBmYWxsYmFjayBjb250ZW50IGluc3RlYWQgb2YgU1dGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RmJDb250ZW50KG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHsgY2IoY2JPYmopOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHsgLy8gaWYgbm8gRmxhc2ggUGxheWVyIGlzIGluc3RhbGxlZCBvciB0aGUgZnAgdmVyc2lvbiBjYW5ub3QgYmUgZGV0ZWN0ZWQgd2UgbGV0IHRoZSBIVE1MIG9iamVjdCBlbGVtZW50IGRvIGl0cyBqb2IgKGVpdGhlciBzaG93IGEgU1dGIG9yIGZhbGxiYWNrIGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJpbGl0eShpZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gZ2V0T2JqZWN0QnlJZChpZCk7IC8vIHRlc3Qgd2hldGhlciB0aGVyZSBpcyBhbiBIVE1MIG9iamVjdCBlbGVtZW50IG9yIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiB0eXBlb2Ygby5TZXRWYXJpYWJsZSAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2JqLnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JPYmoucmVmID0gbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiT2JqLmlkID0gby5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYihjYk9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIE1haW4gZnVuY3Rpb25cclxuICAgICAgICAtIFdpbGwgcHJlZmVyYWJseSBleGVjdXRlIG9uRG9tTG9hZCwgb3RoZXJ3aXNlIG9ubG9hZCAoYXMgYSBmYWxsYmFjaylcclxuICAgICovXHJcbiAgICBkb21Mb2FkRm5BcnJbMF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHBsdWdpbikge1xyXG4gICAgICAgICAgICB0ZXN0UGxheWVyVmVyc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hWZXJzaW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0T2JqZWN0QnlJZChvYmplY3RJZFN0cikge1xyXG4gICAgICAgIHZhciByID0gbnVsbCxcclxuICAgICAgICAgICAgbyA9IGdldEVsZW1lbnRCeUlkKG9iamVjdElkU3RyKTtcclxuXHJcbiAgICAgICAgaWYgKG8gJiYgby5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIk9CSkVDVFwiKSB7XHJcbiAgICAgICAgICAgIC8vSWYgdGFyZ2V0ZWQgb2JqZWN0IGlzIHZhbGlkIEZsYXNoIGZpbGVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvLlNldFZhcmlhYmxlICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICAgICAgciA9IG87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL0lmIFNldFZhcmlhYmxlIGlzIG5vdCB3b3JraW5nIG9uIHRhcmdldGVkIG9iamVjdCBidXQgYSBuZXN0ZWQgb2JqZWN0IGlzXHJcbiAgICAgICAgICAgICAgICAvL2F2YWlsYWJsZSwgYXNzdW1lIGNsYXNzaWMgbmVzdGVkIG9iamVjdCBtYXJrdXAuIFJldHVybiBuZXN0ZWQgb2JqZWN0LlxyXG5cclxuICAgICAgICAgICAgICAgIC8vSWYgU2V0VmFyaWFibGUgaXMgbm90IHdvcmtpbmcgb24gdGFyZ2V0ZWQgb2JqZWN0IGFuZCB0aGVyZSBpcyBubyBuZXN0ZWQgb2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gdGhlIG9yaWdpbmFsIG9iamVjdCBhbnl3YXkuIFRoaXMgaXMgcHJvYmFibHkgbmV3IHNpbXBsaWZpZWQgbWFya3VwLlxyXG5cclxuICAgICAgICAgICAgICAgIHIgPSBvLmdldEVsZW1lbnRzQnlUYWdOYW1lKE9CSkVDVClbMF0gfHwgbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVxdWlyZW1lbnRzIGZvciBBZG9iZSBFeHByZXNzIEluc3RhbGxcclxuICAgICAgICAtIG9ubHkgb25lIGluc3RhbmNlIGNhbiBiZSBhY3RpdmUgYXQgYSB0aW1lXHJcbiAgICAgICAgLSBmcCA2LjAuNjUgb3IgaGlnaGVyXHJcbiAgICAgICAgLSBXaW4vTWFjIE9TIG9ubHlcclxuICAgICAgICAtIG5vIFdlYmtpdCBlbmdpbmVzIG9sZGVyIHRoYW4gdmVyc2lvbiAzMTJcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBjYW5FeHByZXNzSW5zdGFsbCgpIHtcclxuICAgICAgICByZXR1cm4gIWlzRXhwcmVzc0luc3RhbGxBY3RpdmUgJiYgaGFzUGxheWVyVmVyc2lvbihcIjYuMC42NVwiKSAmJiAodWEud2luIHx8IHVhLm1hYykgJiYgISh1YS53ayAmJiB1YS53ayA8IDMxMik7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU2hvdyB0aGUgQWRvYmUgRXhwcmVzcyBJbnN0YWxsIGRpYWxvZ1xyXG4gICAgICAgIC0gUmVmZXJlbmNlOiBodHRwOi8vd3d3LmFkb2JlLmNvbS9jZnVzaW9uL2tub3dsZWRnZWJhc2UvaW5kZXguY2ZtP2lkPTZhMjUzYjc1XHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2hvd0V4cHJlc3NJbnN0YWxsKGF0dCwgcGFyLCByZXBsYWNlRWxlbUlkU3RyLCBjYWxsYmFja0ZuKSB7XHJcblxyXG4gICAgICAgIHZhciBvYmogPSBnZXRFbGVtZW50QnlJZChyZXBsYWNlRWxlbUlkU3RyKTtcclxuXHJcbiAgICAgICAgLy9FbnN1cmUgdGhhdCByZXBsYWNlRWxlbUlkU3RyIGlzIHJlYWxseSBhIHN0cmluZyBhbmQgbm90IGFuIGVsZW1lbnRcclxuICAgICAgICByZXBsYWNlRWxlbUlkU3RyID0gZ2V0SWQocmVwbGFjZUVsZW1JZFN0cik7XHJcblxyXG4gICAgICAgIGlzRXhwcmVzc0luc3RhbGxBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHN0b3JlZENhbGxiYWNrRm4gPSBjYWxsYmFja0ZuIHx8IG51bGw7XHJcbiAgICAgICAgc3RvcmVkQ2FsbGJhY2tPYmogPSB7c3VjY2VzczogZmFsc2UsIGlkOiByZXBsYWNlRWxlbUlkU3RyfTtcclxuXHJcbiAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiT0JKRUNUXCIpIHsgLy8gc3RhdGljIHB1Ymxpc2hpbmdcclxuICAgICAgICAgICAgICAgIHN0b3JlZEZiQ29udGVudCA9IGFic3RyYWN0RmJDb250ZW50KG9iaik7XHJcbiAgICAgICAgICAgICAgICBzdG9yZWRGYkNvbnRlbnRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IC8vIGR5bmFtaWMgcHVibGlzaGluZ1xyXG4gICAgICAgICAgICAgICAgc3RvcmVkRmJDb250ZW50ID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgc3RvcmVkRmJDb250ZW50SWQgPSByZXBsYWNlRWxlbUlkU3RyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF0dC5pZCA9IEVYUFJFU1NfSU5TVEFMTF9JRDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHQud2lkdGggPT09IFVOREVGIHx8ICghLyUkLy50ZXN0KGF0dC53aWR0aCkgJiYgdG9JbnQoYXR0LndpZHRoKSA8IDMxMCkpIHsgYXR0LndpZHRoID0gXCIzMTBcIjsgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dC5oZWlnaHQgPT09IFVOREVGIHx8ICghLyUkLy50ZXN0KGF0dC5oZWlnaHQpICYmIHRvSW50KGF0dC5oZWlnaHQpIDwgMTM3KSkgeyBhdHQuaGVpZ2h0ID0gXCIxMzdcIjsgfVxyXG4gICAgICAgICAgICB2YXIgcHQgPSB1YS5pZSA/IFwiQWN0aXZlWFwiIDogXCJQbHVnSW5cIixcclxuICAgICAgICAgICAgICAgIGZ2ID0gXCJNTXJlZGlyZWN0VVJMPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHdpbi5sb2NhdGlvbi50b1N0cmluZygpLnJlcGxhY2UoLyYvZywgXCIlMjZcIikpICsgXCImTU1wbGF5ZXJUeXBlPVwiICsgcHQgKyBcIiZNTWRvY3RpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvYy50aXRsZS5zbGljZSgwLCA0NykgKyBcIiAtIEZsYXNoIFBsYXllciBJbnN0YWxsYXRpb25cIik7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyLmZsYXNodmFycyAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgICAgIHBhci5mbGFzaHZhcnMgKz0gXCImXCIgKyBmdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhci5mbGFzaHZhcnMgPSBmdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJRSBvbmx5OiB3aGVuIGEgU1dGIGlzIGxvYWRpbmcgKEFORDogbm90IGF2YWlsYWJsZSBpbiBjYWNoZSkgd2FpdCBmb3IgdGhlIHJlYWR5U3RhdGUgb2YgdGhlIG9iamVjdCBlbGVtZW50IHRvIGJlY29tZSA0IGJlZm9yZSByZW1vdmluZyBpdCxcclxuICAgICAgICAgICAgLy8gYmVjYXVzZSB5b3UgY2Fubm90IHByb3Blcmx5IGNhbmNlbCBhIGxvYWRpbmcgU1dGIGZpbGUgd2l0aG91dCBicmVha2luZyBicm93c2VyIGxvYWQgcmVmZXJlbmNlcywgYWxzbyBvYmoub25yZWFkeXN0YXRlY2hhbmdlIGRvZXNuJ3Qgd29ya1xyXG4gICAgICAgICAgICBpZiAodWEuaWUgJiYgb2JqLnJlYWR5U3RhdGUgIT0gNCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld09iaiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlRWxlbUlkU3RyICs9IFwiU1dGT2JqZWN0TmV3XCI7XHJcbiAgICAgICAgICAgICAgICBuZXdPYmouc2V0QXR0cmlidXRlKFwiaWRcIiwgcmVwbGFjZUVsZW1JZFN0cik7XHJcbiAgICAgICAgICAgICAgICBvYmoucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3T2JqLCBvYmopOyAvLyBpbnNlcnQgcGxhY2Vob2xkZXIgZGl2IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgb2JqZWN0IGVsZW1lbnQgdGhhdCBsb2FkcyBleHByZXNzaW5zdGFsbC5zd2ZcclxuICAgICAgICAgICAgICAgIG9iai5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVTV0Yob2JqKTsgLy9yZW1vdmVTV0YgYWNjZXB0cyBlbGVtZW50cyBub3dcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVTV0YoYXR0LCBwYXIsIHJlcGxhY2VFbGVtSWRTdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBGdW5jdGlvbnMgdG8gYWJzdHJhY3QgYW5kIGRpc3BsYXkgZmFsbGJhY2sgY29udGVudFxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlGYkNvbnRlbnQob2JqKSB7XHJcbiAgICAgICAgaWYgKHVhLmllICYmIG9iai5yZWFkeVN0YXRlICE9IDQpIHtcclxuICAgICAgICAgICAgLy8gSUUgb25seTogd2hlbiBhIFNXRiBpcyBsb2FkaW5nIChBTkQ6IG5vdCBhdmFpbGFibGUgaW4gY2FjaGUpIHdhaXQgZm9yIHRoZSByZWFkeVN0YXRlIG9mIHRoZSBvYmplY3QgZWxlbWVudCB0byBiZWNvbWUgNCBiZWZvcmUgcmVtb3ZpbmcgaXQsXHJcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgeW91IGNhbm5vdCBwcm9wZXJseSBjYW5jZWwgYSBsb2FkaW5nIFNXRiBmaWxlIHdpdGhvdXQgYnJlYWtpbmcgYnJvd3NlciBsb2FkIHJlZmVyZW5jZXMsIGFsc28gb2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSBkb2Vzbid0IHdvcmtcclxuICAgICAgICAgICAgb2JqLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgdmFyIGVsID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCBvYmopOyAvLyBpbnNlcnQgcGxhY2Vob2xkZXIgZGl2IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZmFsbGJhY2sgY29udGVudFxyXG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChhYnN0cmFjdEZiQ29udGVudChvYmopLCBlbCk7XHJcbiAgICAgICAgICAgIHJlbW92ZVNXRihvYmopOyAvL3JlbW92ZVNXRiBhY2NlcHRzIGVsZW1lbnRzIG5vd1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGFic3RyYWN0RmJDb250ZW50KG9iaiksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFic3RyYWN0RmJDb250ZW50KG9iaikge1xyXG4gICAgICAgIHZhciBhYyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaWYgKHVhLndpbiAmJiB1YS5pZSkge1xyXG4gICAgICAgICAgICBhYy5pbm5lckhUTUwgPSBvYmouaW5uZXJIVE1MO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG5lc3RlZE9iaiA9IG9iai5nZXRFbGVtZW50c0J5VGFnTmFtZShPQkpFQ1QpWzBdO1xyXG4gICAgICAgICAgICBpZiAobmVzdGVkT2JqKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG5lc3RlZE9iai5jaGlsZE5vZGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2wgPSBjLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY1tpXS5ub2RlVHlwZSA9PSAxICYmIGNbaV0ubm9kZU5hbWUgPT09IFwiUEFSQU1cIikgJiYgIShjW2ldLm5vZGVUeXBlID09IDgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYy5hcHBlbmRDaGlsZChjW2ldLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUllT2JqZWN0KHVybCwgcGFyYW1TdHIpIHtcclxuICAgICAgICB2YXIgZGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gXCI8b2JqZWN0IGNsYXNzaWQ9J2Nsc2lkOkQyN0NEQjZFLUFFNkQtMTFjZi05NkI4LTQ0NDU1MzU0MDAwMCc+PHBhcmFtIG5hbWU9J21vdmllJyB2YWx1ZT0nXCIgKyB1cmwgKyBcIic+XCIgKyBwYXJhbVN0ciArIFwiPC9vYmplY3Q+XCI7XHJcbiAgICAgICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENyb3NzLWJyb3dzZXIgZHluYW1pYyBTV0YgY3JlYXRpb25cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTV0YoYXR0T2JqLCBwYXJPYmosIGlkKSB7XHJcbiAgICAgICAgdmFyIHIsIGVsID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlkID0gZ2V0SWQoaWQpOyAvLyBlbnN1cmUgaWQgaXMgdHJ1bHkgYW4gSUQgYW5kIG5vdCBhbiBlbGVtZW50XHJcblxyXG4gICAgICAgIGlmICh1YS53ayAmJiB1YS53ayA8IDMxMikgeyByZXR1cm4gcjsgfVxyXG5cclxuICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgdmFyIG8gPSAodWEuaWUpID8gY3JlYXRlRWxlbWVudChcImRpdlwiKSA6IGNyZWF0ZUVsZW1lbnQoT0JKRUNUKSxcclxuICAgICAgICAgICAgICAgIGF0dHIsXHJcbiAgICAgICAgICAgICAgICBhdHRyTG93ZXIsXHJcbiAgICAgICAgICAgICAgICBwYXJhbTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0T2JqLmlkID09PSBVTkRFRikgeyAvLyBpZiBubyAnaWQnIGlzIGRlZmluZWQgZm9yIHRoZSBvYmplY3QgZWxlbWVudCwgaXQgd2lsbCBpbmhlcml0IHRoZSAnaWQnIGZyb20gdGhlIGZhbGxiYWNrIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGF0dE9iai5pZCA9IGlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0FkZCBwYXJhbXNcclxuICAgICAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJPYmopIHtcclxuICAgICAgICAgICAgICAgIC8vZmlsdGVyIG91dCBwcm90b3R5cGUgYWRkaXRpb25zIGZyb20gb3RoZXIgcG90ZW50aWFsIGxpYnJhcmllcyBhbmQgSUUgc3BlY2lmaWMgcGFyYW0gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgaWYgKHBhck9iai5oYXNPd25Qcm9wZXJ0eShwYXJhbSkgJiYgcGFyYW0udG9Mb3dlckNhc2UoKSAhPT0gXCJtb3ZpZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlT2JqUGFyYW0obywgcGFyYW0sIHBhck9ialtwYXJhbV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0NyZWF0ZSBJRSBvYmplY3QsIGNvbXBsZXRlIHdpdGggcGFyYW0gbm9kZXNcclxuICAgICAgICAgICAgaWYgKHVhLmllKSB7IG8gPSBjcmVhdGVJZU9iamVjdChhdHRPYmouZGF0YSwgby5pbm5lckhUTUwpOyB9XHJcblxyXG4gICAgICAgICAgICAvL0FkZCBhdHRyaWJ1dGVzIHRvIG9iamVjdFxyXG4gICAgICAgICAgICBmb3IgKGF0dHIgaW4gYXR0T2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0T2JqLmhhc093blByb3BlcnR5KGF0dHIpKSB7IC8vIGZpbHRlciBvdXQgcHJvdG90eXBlIGFkZGl0aW9ucyBmcm9tIG90aGVyIHBvdGVudGlhbCBsaWJyYXJpZXNcclxuICAgICAgICAgICAgICAgICAgICBhdHRyTG93ZXIgPSBhdHRyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICdjbGFzcycgaXMgYW4gRUNNQTQgcmVzZXJ2ZWQga2V5d29yZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyTG93ZXIgPT09IFwic3R5bGVjbGFzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYXR0T2JqW2F0dHJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJMb3dlciAhPT0gXCJjbGFzc2lkXCIgJiYgYXR0ckxvd2VyICE9PSBcImRhdGFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRPYmpbYXR0cl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVhLmllKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpJZEFycltvYmpJZEFyci5sZW5ndGhdID0gYXR0T2JqLmlkOyAvLyBzdG9yZWQgdG8gZml4IG9iamVjdCAnbGVha3MnIG9uIHVubG9hZCAoZHluYW1pYyBwdWJsaXNoaW5nIG9ubHkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgRkxBU0hfTUlNRV9UWVBFKTtcclxuICAgICAgICAgICAgICAgIG8uc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBhdHRPYmouZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG8sIGVsKTtcclxuICAgICAgICAgICAgciA9IG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPYmpQYXJhbShlbCwgcE5hbWUsIHBWYWx1ZSkge1xyXG4gICAgICAgIHZhciBwID0gY3JlYXRlRWxlbWVudChcInBhcmFtXCIpO1xyXG4gICAgICAgIHAuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBwTmFtZSk7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwVmFsdWUpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENyb3NzLWJyb3dzZXIgU1dGIHJlbW92YWxcclxuICAgICAgICAtIEVzcGVjaWFsbHkgbmVlZGVkIHRvIHNhZmVseSBhbmQgY29tcGxldGVseSByZW1vdmUgYSBTV0YgaW4gSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTV0YoaWQpIHtcclxuICAgICAgICB2YXIgb2JqID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChvYmogJiYgb2JqLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiT0JKRUNUXCIpIHtcclxuICAgICAgICAgICAgaWYgKHVhLmllKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIHJlbW92ZVNXRkluSUUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9UaGlzIHN0ZXAgcHJldmVudHMgbWVtb3J5IGxlYWtzIGluIEludGVybmV0IEV4cGxvcmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtpXSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2ldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlU1dGSW5JRSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmoucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRWxlbWVudChpZCkge1xyXG4gICAgICAgIHJldHVybiAoaWQgJiYgaWQubm9kZVR5cGUgJiYgaWQubm9kZVR5cGUgPT09IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldElkKHRoaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChpc0VsZW1lbnQodGhpbmcpKSA/IHRoaW5nLmlkIDogdGhpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRnVuY3Rpb25zIHRvIG9wdGltaXplIEphdmFTY3JpcHQgY29tcHJlc3Npb25cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCkge1xyXG5cclxuICAgICAgICAvL0FsbG93IHVzZXJzIHRvIHBhc3MgYW4gZWxlbWVudCBPUiBhbiBlbGVtZW50J3MgSURcclxuICAgICAgICBpZiAoaXNFbGVtZW50KGlkKSkgeyByZXR1cm4gaWQ7IH1cclxuXHJcbiAgICAgICAgdmFyIGVsID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBlbCA9IGRvYy5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7fVxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KGVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RvIGFpZCBjb21wcmVzc2lvbjsgcmVwbGFjZXMgMTQgaW5zdGFuY2VzIG9mIHBhcmVzZUludCB3aXRoIHJhZGl4XHJcbiAgICBmdW5jdGlvbiB0b0ludChzdHIpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogVXBkYXRlZCBhdHRhY2hFdmVudCBmdW5jdGlvbiBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgICAgICAtIFN0b3JlcyBhdHRhY2hFdmVudCBpbmZvcm1hdGlvbiBpbiBhbiBBcnJheSwgc28gb24gdW5sb2FkIHRoZSBkZXRhY2hFdmVudCBmdW5jdGlvbnMgY2FuIGJlIGNhbGxlZCB0byBhdm9pZCBtZW1vcnkgbGVha3NcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50VHlwZSwgZm4pIHtcclxuICAgICAgICB0YXJnZXQuYXR0YWNoRXZlbnQoZXZlbnRUeXBlLCBmbik7XHJcbiAgICAgICAgbGlzdGVuZXJzQXJyW2xpc3RlbmVyc0Fyci5sZW5ndGhdID0gW3RhcmdldCwgZXZlbnRUeXBlLCBmbl07XHJcbiAgICB9XHJcblxyXG4gICAgLyogRmxhc2ggUGxheWVyIGFuZCBTV0YgY29udGVudCB2ZXJzaW9uIG1hdGNoaW5nXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzUGxheWVyVmVyc2lvbihydikge1xyXG4gICAgICAgIHJ2ICs9IFwiXCI7IC8vQ29lcmNlIG51bWJlciB0byBzdHJpbmcsIGlmIG5lZWRlZC5cclxuICAgICAgICB2YXIgcHYgPSB1YS5wdiwgdiA9IHJ2LnNwbGl0KFwiLlwiKTtcclxuICAgICAgICB2WzBdID0gdG9JbnQodlswXSk7XHJcbiAgICAgICAgdlsxXSA9IHRvSW50KHZbMV0pIHx8IDA7IC8vIHN1cHBvcnRzIHNob3J0IG5vdGF0aW9uLCBlLmcuIFwiOVwiIGluc3RlYWQgb2YgXCI5LjAuMFwiXHJcbiAgICAgICAgdlsyXSA9IHRvSW50KHZbMl0pIHx8IDA7XHJcbiAgICAgICAgcmV0dXJuIChwdlswXSA+IHZbMF0gfHwgKHB2WzBdID09IHZbMF0gJiYgcHZbMV0gPiB2WzFdKSB8fCAocHZbMF0gPT0gdlswXSAmJiBwdlsxXSA9PSB2WzFdICYmIHB2WzJdID49IHZbMl0pKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDcm9zcy1icm93c2VyIGR5bmFtaWMgQ1NTIGNyZWF0aW9uXHJcbiAgICAgICAgLSBCYXNlZCBvbiBCb2JieSB2YW4gZGVyIFNsdWlzJyBzb2x1dGlvbjogaHR0cDovL3d3dy5ib2JieXZhbmRlcnNsdWlzLmNvbS9hcnRpY2xlcy9keW5hbWljQ1NTLnBocFxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNTUyhzZWwsIGRlY2wsIG1lZGlhLCBuZXdTdHlsZSkge1xyXG4gICAgICAgIHZhciBoID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuICAgICAgICBpZiAoIWgpIHsgcmV0dXJuOyB9IC8vIHRvIGFsc28gc3VwcG9ydCBiYWRseSBhdXRob3JlZCBIVE1MIHBhZ2VzIHRoYXQgbGFjayBhIGhlYWQgZWxlbWVudFxyXG4gICAgICAgIHZhciBtID0gKHR5cGVvZiBtZWRpYSA9PT0gXCJzdHJpbmdcIikgPyBtZWRpYSA6IFwic2NyZWVuXCI7XHJcbiAgICAgICAgaWYgKG5ld1N0eWxlKSB7XHJcbiAgICAgICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0ID0gbnVsbDtcclxuICAgICAgICAgICAgZHluYW1pY1N0eWxlc2hlZXRNZWRpYSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZHluYW1pY1N0eWxlc2hlZXQgfHwgZHluYW1pY1N0eWxlc2hlZXRNZWRpYSAhPSBtKSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBkeW5hbWljIHN0eWxlc2hlZXQgKyBnZXQgYSBnbG9iYWwgcmVmZXJlbmNlIHRvIGl0XHJcbiAgICAgICAgICAgIHZhciBzID0gY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICBzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcclxuICAgICAgICAgICAgcy5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtKTtcclxuICAgICAgICAgICAgZHluYW1pY1N0eWxlc2hlZXQgPSBoLmFwcGVuZENoaWxkKHMpO1xyXG4gICAgICAgICAgICBpZiAodWEuaWUgJiYgdHlwZW9mIGRvYy5zdHlsZVNoZWV0cyAhPT0gVU5ERUYgJiYgZG9jLnN0eWxlU2hlZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0ID0gZG9jLnN0eWxlU2hlZXRzW2RvYy5zdHlsZVNoZWV0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkeW5hbWljU3R5bGVzaGVldE1lZGlhID0gbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWRkIHN0eWxlIHJ1bGVcclxuICAgICAgICBpZiAoZHluYW1pY1N0eWxlc2hlZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkeW5hbWljU3R5bGVzaGVldC5hZGRSdWxlICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICAgICAgZHluYW1pY1N0eWxlc2hlZXQuYWRkUnVsZShzZWwsIGRlY2wpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2MuY3JlYXRlVGV4dE5vZGUgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljU3R5bGVzaGVldC5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoc2VsICsgXCIge1wiICsgZGVjbCArIFwifVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eShpZCwgaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgaWYgKCFhdXRvSGlkZVNob3cpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIHYgPSBpc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGVsID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChpc0RvbUxvYWRlZCAmJiBlbCkge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gdjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjcmVhdGVDU1MoXCIjXCIgKyBpZCwgXCJ2aXNpYmlsaXR5OlwiICsgdik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEZpbHRlciB0byBhdm9pZCBYU1MgYXR0YWNrc1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHVybEVuY29kZUlmTmVjZXNzYXJ5KHMpIHtcclxuICAgICAgICB2YXIgcmVnZXggPSAvW1xcXFxcXFwiPD5cXC47XS87XHJcbiAgICAgICAgdmFyIGhhc0JhZENoYXJzID0gcmVnZXguZXhlYyhzKSAhPT0gbnVsbDtcclxuICAgICAgICByZXR1cm4gaGFzQmFkQ2hhcnMgJiYgdHlwZW9mIGVuY29kZVVSSUNvbXBvbmVudCAhPT0gVU5ERUYgPyBlbmNvZGVVUklDb21wb25lbnQocykgOiBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbGVhc2UgbWVtb3J5IHRvIGF2b2lkIG1lbW9yeSBsZWFrcyBjYXVzZWQgYnkgY2xvc3VyZXMsIGZpeCBoYW5naW5nIGF1ZGlvL3ZpZGVvIHRocmVhZHMgYW5kIGZvcmNlIG9wZW4gc29ja2V0cy9OZXRDb25uZWN0aW9ucyB0byBkaXNjb25uZWN0IChJbnRlcm5ldCBFeHBsb3JlciBvbmx5KVxyXG4gICAgKi9cclxuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh1YS5pZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbGlzdGVuZXJzIHRvIGF2b2lkIG1lbW9yeSBsZWFrc1xyXG4gICAgICAgICAgICAgICAgdmFyIGxsID0gbGlzdGVuZXJzQXJyLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyc0FycltpXVswXS5kZXRhY2hFdmVudChsaXN0ZW5lcnNBcnJbaV1bMV0sIGxpc3RlbmVyc0FycltpXVsyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhbnVwIGR5bmFtaWNhbGx5IGVtYmVkZGVkIG9iamVjdHMgdG8gZml4IGF1ZGlvL3ZpZGVvIHRocmVhZHMgYW5kIGZvcmNlIG9wZW4gc29ja2V0cyBhbmQgTmV0Q29ubmVjdGlvbnMgdG8gZGlzY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgdmFyIGlsID0gb2JqSWRBcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU1dGKG9iaklkQXJyW2pdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNsZWFudXAgbGlicmFyeSdzIG1haW4gY2xvc3VyZXMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIHVhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWFba10gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWEgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCBpbiBzd2ZvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2ZvYmplY3RbbF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3dmb2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLyogUHVibGljIEFQSVxyXG4gICAgICAgICAgICAtIFJlZmVyZW5jZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL3N3Zm9iamVjdC93aWtpL2RvY3VtZW50YXRpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIHJlZ2lzdGVyT2JqZWN0OiBmdW5jdGlvbiAob2JqZWN0SWRTdHIsIHN3ZlZlcnNpb25TdHIsIHhpU3dmVXJsU3RyLCBjYWxsYmFja0ZuKSB7XHJcbiAgICAgICAgICAgIGlmICh1YS53MyAmJiBvYmplY3RJZFN0ciAmJiBzd2ZWZXJzaW9uU3RyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVnT2JqID0ge307XHJcbiAgICAgICAgICAgICAgICByZWdPYmouaWQgPSBvYmplY3RJZFN0cjtcclxuICAgICAgICAgICAgICAgIHJlZ09iai5zd2ZWZXJzaW9uID0gc3dmVmVyc2lvblN0cjtcclxuICAgICAgICAgICAgICAgIHJlZ09iai5leHByZXNzSW5zdGFsbCA9IHhpU3dmVXJsU3RyO1xyXG4gICAgICAgICAgICAgICAgcmVnT2JqLmNhbGxiYWNrRm4gPSBjYWxsYmFja0ZuO1xyXG4gICAgICAgICAgICAgICAgcmVnT2JqQXJyW3JlZ09iakFyci5sZW5ndGhdID0gcmVnT2JqO1xyXG4gICAgICAgICAgICAgICAgc2V0VmlzaWJpbGl0eShvYmplY3RJZFN0ciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNhbGxiYWNrRm4pIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRm4oe3N1Y2Nlc3M6IGZhbHNlLCBpZDogb2JqZWN0SWRTdHJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldE9iamVjdEJ5SWQ6IGZ1bmN0aW9uIChvYmplY3RJZFN0cikge1xyXG4gICAgICAgICAgICBpZiAodWEudzMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRPYmplY3RCeUlkKG9iamVjdElkU3RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVtYmVkU1dGOiBmdW5jdGlvbiAoc3dmVXJsU3RyLCByZXBsYWNlRWxlbUlkU3RyLCB3aWR0aFN0ciwgaGVpZ2h0U3RyLCBzd2ZWZXJzaW9uU3RyLCB4aVN3ZlVybFN0ciwgZmxhc2h2YXJzT2JqLCBwYXJPYmosIGF0dE9iaiwgY2FsbGJhY2tGbikge1xyXG5cclxuICAgICAgICAgICAgdmFyIGlkID0gZ2V0SWQocmVwbGFjZUVsZW1JZFN0ciksXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja09iaiA9IHtzdWNjZXNzOiBmYWxzZSwgaWQ6IGlkfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1YS53MyAmJiAhKHVhLndrICYmIHVhLndrIDwgMzEyKSAmJiBzd2ZVcmxTdHIgJiYgcmVwbGFjZUVsZW1JZFN0ciAmJiB3aWR0aFN0ciAmJiBoZWlnaHRTdHIgJiYgc3dmVmVyc2lvblN0cikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmlzaWJpbGl0eShpZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYWRkRG9tTG9hZEV2ZW50KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFN0ciArPSBcIlwiOyAvLyBhdXRvLWNvbnZlcnQgdG8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0U3RyICs9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRPYmogJiYgdHlwZW9mIGF0dE9iaiA9PT0gT0JKRUNUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gYXR0T2JqKSB7IC8vIGNvcHkgb2JqZWN0IHRvIGF2b2lkIHRoZSB1c2Ugb2YgcmVmZXJlbmNlcywgYmVjYXVzZSB3ZWIgYXV0aG9ycyBvZnRlbiByZXVzZSBhdHRPYmogZm9yIG11bHRpcGxlIFNXRnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dFtpXSA9IGF0dE9ialtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdHQuZGF0YSA9IHN3ZlVybFN0cjtcclxuICAgICAgICAgICAgICAgICAgICBhdHQud2lkdGggPSB3aWR0aFN0cjtcclxuICAgICAgICAgICAgICAgICAgICBhdHQuaGVpZ2h0ID0gaGVpZ2h0U3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXIgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyT2JqICYmIHR5cGVvZiBwYXJPYmogPT09IE9CSkVDVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHBhck9iaikgeyAvLyBjb3B5IG9iamVjdCB0byBhdm9pZCB0aGUgdXNlIG9mIHJlZmVyZW5jZXMsIGJlY2F1c2Ugd2ViIGF1dGhvcnMgb2Z0ZW4gcmV1c2UgcGFyT2JqIGZvciBtdWx0aXBsZSBTV0ZzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJbal0gPSBwYXJPYmpbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYXNodmFyc09iaiAmJiB0eXBlb2YgZmxhc2h2YXJzT2JqID09PSBPQkpFQ1QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBmbGFzaHZhcnNPYmopIHsgLy8gY29weSBvYmplY3QgdG8gYXZvaWQgdGhlIHVzZSBvZiByZWZlcmVuY2VzLCBiZWNhdXNlIHdlYiBhdXRob3JzIG9mdGVuIHJldXNlIGZsYXNodmFyc09iaiBmb3IgbXVsdGlwbGUgU1dGc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsYXNodmFyc09iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gKGVuY29kZVVSSUVuYWJsZWQpID8gZW5jb2RlVVJJQ29tcG9uZW50KGspIDogayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAoZW5jb2RlVVJJRW5hYmxlZCkgPyBlbmNvZGVVUklDb21wb25lbnQoZmxhc2h2YXJzT2JqW2tdKSA6IGZsYXNodmFyc09ialtrXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXIuZmxhc2h2YXJzICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIuZmxhc2h2YXJzICs9IFwiJlwiICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhci5mbGFzaHZhcnMgPSBrZXkgKyBcIj1cIiArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1BsYXllclZlcnNpb24oc3dmVmVyc2lvblN0cikpIHsgLy8gY3JlYXRlIFNXRlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gY3JlYXRlU1dGKGF0dCwgcGFyLCByZXBsYWNlRWxlbUlkU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dC5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJpbGl0eShpZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tPYmouc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrT2JqLnJlZiA9IG9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tPYmouaWQgPSBvYmouaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhpU3dmVXJsU3RyICYmIGNhbkV4cHJlc3NJbnN0YWxsKCkpIHsgLy8gc2hvdyBBZG9iZSBFeHByZXNzIEluc3RhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0LmRhdGEgPSB4aVN3ZlVybFN0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0V4cHJlc3NJbnN0YWxsKGF0dCwgcGFyLCByZXBsYWNlRWxlbUlkU3RyLCBjYWxsYmFja0ZuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgLy8gc2hvdyBmYWxsYmFjayBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHkoaWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tGbikgeyBjYWxsYmFja0ZuKGNhbGxiYWNrT2JqKTsgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2FsbGJhY2tGbikgeyBjYWxsYmFja0ZuKGNhbGxiYWNrT2JqKTsgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN3aXRjaE9mZkF1dG9IaWRlU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhdXRvSGlkZVNob3cgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlbmFibGVVcmlFbmNvZGluZzogZnVuY3Rpb24gKGJvb2wpIHtcclxuICAgICAgICAgICAgZW5jb2RlVVJJRW5hYmxlZCA9ICh0eXBlb2YgYm9vbCA9PT0gVU5ERUYpID8gdHJ1ZSA6IGJvb2w7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdWE6IHVhLFxyXG5cclxuICAgICAgICBnZXRGbGFzaFBsYXllclZlcnNpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHttYWpvcjogdWEucHZbMF0sIG1pbm9yOiB1YS5wdlsxXSwgcmVsZWFzZTogdWEucHZbMl19O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhc0ZsYXNoUGxheWVyVmVyc2lvbjogaGFzUGxheWVyVmVyc2lvbixcclxuXHJcbiAgICAgICAgY3JlYXRlU1dGOiBmdW5jdGlvbiAoYXR0T2JqLCBwYXJPYmosIHJlcGxhY2VFbGVtSWRTdHIpIHtcclxuICAgICAgICAgICAgaWYgKHVhLnczKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlU1dGKGF0dE9iaiwgcGFyT2JqLCByZXBsYWNlRWxlbUlkU3RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaG93RXhwcmVzc0luc3RhbGw6IGZ1bmN0aW9uIChhdHQsIHBhciwgcmVwbGFjZUVsZW1JZFN0ciwgY2FsbGJhY2tGbikge1xyXG4gICAgICAgICAgICBpZiAodWEudzMgJiYgY2FuRXhwcmVzc0luc3RhbGwoKSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0V4cHJlc3NJbnN0YWxsKGF0dCwgcGFyLCByZXBsYWNlRWxlbUlkU3RyLCBjYWxsYmFja0ZuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlbW92ZVNXRjogZnVuY3Rpb24gKG9iakVsZW1JZFN0cikge1xyXG4gICAgICAgICAgICBpZiAodWEudzMpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVNXRihvYmpFbGVtSWRTdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3JlYXRlQ1NTOiBmdW5jdGlvbiAoc2VsU3RyLCBkZWNsU3RyLCBtZWRpYVN0ciwgbmV3U3R5bGVCb29sZWFuKSB7XHJcbiAgICAgICAgICAgIGlmICh1YS53Mykge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ1NTKHNlbFN0ciwgZGVjbFN0ciwgbWVkaWFTdHIsIG5ld1N0eWxlQm9vbGVhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhZGREb21Mb2FkRXZlbnQ6IGFkZERvbUxvYWRFdmVudCxcclxuXHJcbiAgICAgICAgYWRkTG9hZEV2ZW50OiBhZGRMb2FkRXZlbnQsXHJcblxyXG4gICAgICAgIGdldFF1ZXJ5UGFyYW1WYWx1ZTogZnVuY3Rpb24gKHBhcmFtKSB7XHJcbiAgICAgICAgICAgIHZhciBxID0gZG9jLmxvY2F0aW9uLnNlYXJjaCB8fCBkb2MubG9jYXRpb24uaGFzaDtcclxuICAgICAgICAgICAgaWYgKHEpIHtcclxuICAgICAgICAgICAgICAgIGlmICgvXFw/Ly50ZXN0KHEpKSB7IHEgPSBxLnNwbGl0KFwiP1wiKVsxXTsgfSAvLyBzdHJpcCBxdWVzdGlvbiBtYXJrXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybEVuY29kZUlmTmVjZXNzYXJ5KHEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhaXJzID0gcS5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhaXJzW2ldLnN1YnN0cmluZygwLCBwYWlyc1tpXS5pbmRleE9mKFwiPVwiKSkgPT0gcGFyYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybEVuY29kZUlmTmVjZXNzYXJ5KHBhaXJzW2ldLnN1YnN0cmluZygocGFpcnNbaV0uaW5kZXhPZihcIj1cIikgKyAxKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBGb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxyXG4gICAgICAgIGV4cHJlc3NJbnN0YWxsQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGlzRXhwcmVzc0luc3RhbGxBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBnZXRFbGVtZW50QnlJZChFWFBSRVNTX0lOU1RBTExfSUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iaiAmJiBzdG9yZWRGYkNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc3RvcmVkRmJDb250ZW50LCBvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yZWRGYkNvbnRlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5KHN0b3JlZEZiQ29udGVudElkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVhLmllKSB7IHN0b3JlZEZiQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yZWRDYWxsYmFja0ZuKSB7IHN0b3JlZENhbGxiYWNrRm4oc3RvcmVkQ2FsbGJhY2tPYmopOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0V4cHJlc3NJbnN0YWxsQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB2ZXJzaW9uOiBcIjIuM1wiXHJcblxyXG4gICAgfTtcclxufSkpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgSW5MaW5lID0gcmVxdWlyZSgnLi9JbkxpbmUnKTtcclxudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcclxuXHJcbmZ1bmN0aW9uIEFkKGFkSlRyZWUpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQWQpKSB7XHJcbiAgICByZXR1cm4gbmV3IEFkKGFkSlRyZWUpO1xyXG4gIH1cclxuICB0aGlzLmluaXRpYWxpemUoYWRKVHJlZSk7XHJcbn1cclxuXHJcbkFkLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYWRKVHJlZSkge1xyXG4gIHRoaXMuaWQgPSBhZEpUcmVlLmF0dHIoJ2lkJyk7XHJcbiAgdGhpcy5zZXF1ZW5jZSA9IGFkSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcclxuXHJcbiAgaWYoYWRKVHJlZS5pbkxpbmUpIHtcclxuICAgIHRoaXMuaW5MaW5lID0gbmV3IEluTGluZShhZEpUcmVlLmluTGluZSk7XHJcbiAgfVxyXG5cclxuICBpZihhZEpUcmVlLndyYXBwZXIpe1xyXG4gICAgdGhpcy53cmFwcGVyID0gbmV3IFdyYXBwZXIoYWRKVHJlZS53cmFwcGVyKTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFkOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29tcGFuaW9uKGNvbXBhbmlvbkpUcmVlKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhbmlvbikpIHtcclxuICAgIHJldHVybiBuZXcgQ29tcGFuaW9uKGNvbXBhbmlvbkpUcmVlKTtcclxuICB9XHJcblxyXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGNvbXBhbmlvbiBhZFwiKTtcclxuICBsb2dnZXIuZGVidWcgKFwiPENvbXBhbmlvbj4gIGNvbXBhbmlvbkpUcmVlOlwiLCBjb21wYW5pb25KVHJlZSk7XHJcblxyXG4gIC8vUmVxdWlyZWQgRWxlbWVudHNcclxuICB0aGlzLmNyZWF0aXZlVHlwZSA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlLCAnY3JlYXRpdmVUeXBlJyk7XHJcbiAgdGhpcy5zdGF0aWNSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5zdGF0aWNSZXNvdXJjZSk7XHJcblxyXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBjcmVhdGl2ZVR5cGU6IFwiICsgdGhpcy5jcmVhdGl2ZVR5cGUpO1xyXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBzdGF0aWNSZXNvdXJjZTogXCIgKyB0aGlzLnN0YXRpY1Jlc291cmNlKTtcclxuXHJcbiAgLy8gV2VpcmQgYnVnIHdoZW4gdGhlIEpYT04gdHJlZSBpcyBidWlsdCBpdCBkb2Vzbid0IGhhbmRsZSBjYXNpbmcgcHJvcGVybHkgaW4gdGhpcyBzaXR1YXRpb24uLi5cclxuICB2YXIgaHRtbFJlc291cmNlID0gbnVsbDtcclxuICBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLkhUTUxSZXNvdXJjZSkpIHtcclxuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5IVE1MUmVzb3VyY2UpO1xyXG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmhUTUxSZXNvdXJjZSkpIHtcclxuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5oVE1MUmVzb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGh0bWxSZXNvdXJjZSAhPT0gbnVsbClcclxuICB7XHJcbiAgICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiBmb3VuZCBodG1sIHJlc291cmNlXCIsIGh0bWxSZXNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmh0bWxSZXNvdXJjZSA9IGh0bWxSZXNvdXJjZTtcclxuXHJcbiAgdmFyIGlmcmFtZVJlc291cmNlID0gbnVsbDtcclxuICBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLklGcmFtZVJlc291cmNlKSkge1xyXG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpO1xyXG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmlGcmFtZXJlc291cmNlKSkge1xyXG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaUZyYW1lcmVzb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlmcmFtZVJlc291cmNlICE9PSBudWxsKVxyXG4gIHtcclxuICAgIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGlmcmFtZSByZXNvdXJjZVwiLCBpZnJhbWVSZXNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmlmcmFtZVJlc291cmNlID0gaWZyYW1lUmVzb3VyY2U7XHJcblxyXG4gIC8vT3B0aW9uYWwgZmllbGRzXHJcbiAgdGhpcy5pZCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnaWQnKTtcclxuICB0aGlzLndpZHRoID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICd3aWR0aCcpO1xyXG4gIHRoaXMuaGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdoZWlnaHQnKTtcclxuICB0aGlzLmV4cGFuZGVkV2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2V4cGFuZGVkV2lkdGgnKTtcclxuICB0aGlzLmV4cGFuZGVkSGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdleHBhbmRlZEhlaWdodCcpO1xyXG4gIHRoaXMuc2NhbGFibGUgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3NjYWxhYmxlJyk7XHJcbiAgdGhpcy5tYWludGFpbkFzcGVjdFJhdGlvID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdtYWludGFpbkFzcGVjdFJhdGlvJyk7XHJcbiAgdGhpcy5taW5TdWdnZXN0ZWREdXJhdGlvbiA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnbWluU3VnZ2VzdGVkRHVyYXRpb24nKTtcclxuICB0aGlzLmFwaUZyYW1ld29yayA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYXBpRnJhbWV3b3JrJyk7XHJcbiAgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuY29tcGFuaW9uQ2xpY2tUaHJvdWdoKTtcclxuICB0aGlzLnRyYWNraW5nRXZlbnRzID0gcGFyc2VUcmFja2luZ0V2ZW50cyhjb21wYW5pb25KVHJlZS50cmFja2luZ0V2ZW50cyAmJiBjb21wYW5pb25KVHJlZS50cmFja2luZ0V2ZW50cy50cmFja2luZyk7XHJcblxyXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBjb21wYW5pb25DbGlja1Rocm91Z2g6IFwiICsgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2gpO1xyXG5cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHBhcnNlVHJhY2tpbmdFdmVudHModHJhY2tpbmdFdmVudHMpIHtcclxuICAgIHZhciB0cmFja2luZ3MgPSBbXTtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYWNraW5nRXZlbnRzKSkge1xyXG4gICAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcclxuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdEYXRhKSB7XHJcbiAgICAgICAgdHJhY2tpbmdzLnB1c2gobmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdEYXRhKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYWNraW5ncztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tcGFuaW9uOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xyXG52YXIgQ29tcGFuaW9uID0gcmVxdWlyZSgnLi9Db21wYW5pb24nKTtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpIHtcclxuICBpZighKHRoaXMgaW5zdGFuY2VvZiBDcmVhdGl2ZSkpIHtcclxuICAgIHJldHVybiBuZXcgQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmlkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdpZCcpO1xyXG4gIHRoaXMuc2VxdWVuY2UgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XHJcbiAgdGhpcy5hZElkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhZElkJyk7XHJcbiAgdGhpcy5hcGlGcmFtZXdvcmsgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2FwaUZyYW1ld29yaycpO1xyXG5cclxuICBpZihjcmVhdGl2ZUpUcmVlLmxpbmVhcikge1xyXG4gICAgdGhpcy5saW5lYXIgPSBuZXcgTGluZWFyKGNyZWF0aXZlSlRyZWUubGluZWFyKTtcclxuICB9XHJcblxyXG4gIGlmIChjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcykge1xyXG4gICAgdmFyIGNvbXBhbmlvbnMgPSBbXTtcclxuICAgIHZhciBjb21wYW5pb25BZHMgPSBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcyAmJiBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcy5jb21wYW5pb247XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChjb21wYW5pb25BZHMpKSB7XHJcbiAgICAgIGNvbXBhbmlvbkFkcyA9IHV0aWxpdGllcy5pc0FycmF5KGNvbXBhbmlvbkFkcykgPyBjb21wYW5pb25BZHMgOiBbY29tcGFuaW9uQWRzXTtcclxuICAgICAgY29tcGFuaW9uQWRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBhbmlvbkRhdGEpIHtcclxuICAgICAgICBjb21wYW5pb25zLnB1c2gobmV3IENvbXBhbmlvbihjb21wYW5pb25EYXRhKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wYW5pb25BZHMgPSBjb21wYW5pb25zO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhdCB0aGUgY3JlYXRpdmUuXHJcbiAqL1xyXG5DcmVhdGl2ZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xyXG4gIGlmKHRoaXMubGluZWFyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5lYXIuaXNTdXBwb3J0ZWQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMgPSBmdW5jdGlvbiBwYXJzZUNyZWF0aXZlcyhjcmVhdGl2ZXNKVHJlZSkge1xyXG4gIHZhciBjcmVhdGl2ZXMgPSBbXTtcclxuICB2YXIgY3JlYXRpdmVzRGF0YTtcclxuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChjcmVhdGl2ZXNKVHJlZSkgJiYgdXRpbGl0aWVzLmlzRGVmaW5lZChjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkpIHtcclxuICAgIGNyZWF0aXZlc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkgPyBjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSA6IFtjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZV07XHJcbiAgICBjcmVhdGl2ZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XHJcbiAgICAgIGNyZWF0aXZlcy5wdXNoKG5ldyBDcmVhdGl2ZShjcmVhdGl2ZSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBjcmVhdGl2ZXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0aXZlO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XHJcbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcbmZ1bmN0aW9uIEluTGluZShpbmxpbmVKVHJlZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbkxpbmUpKSB7XHJcbiAgICByZXR1cm4gbmV3IEluTGluZShpbmxpbmVKVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvL1JlcXVpcmVkIEZpZWxkc1xyXG4gIHRoaXMuYWRUaXRsZSA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZFRpdGxlKTtcclxuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkU3lzdGVtKTtcclxuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyhpbmxpbmVKVHJlZS5pbXByZXNzaW9uKTtcclxuICB0aGlzLmNyZWF0aXZlcyA9IENyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzKGlubGluZUpUcmVlLmNyZWF0aXZlcyk7XHJcblxyXG4gIC8vT3B0aW9uYWwgRmllbGRzXHJcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5kZXNjcmlwdGlvbik7XHJcbiAgdGhpcy5hZHZlcnRpc2VyID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkdmVydGlzZXIpO1xyXG4gIHRoaXMuc3VydmV5cyA9IHBhcnNlU3VydmV5cyhpbmxpbmVKVHJlZS5zdXJ2ZXkpO1xyXG4gIHRoaXMuZXJyb3IgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZXJyb3IpO1xyXG4gIHRoaXMucHJpY2luZyA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5wcmljaW5nKTtcclxuICB0aGlzLmV4dGVuc2lvbnMgPSBpbmxpbmVKVHJlZS5leHRlbnNpb25zO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gcGFyc2VTdXJ2ZXlzKGlubGluZVN1cnZleXMpIHtcclxuICAgIGlmIChpbmxpbmVTdXJ2ZXlzKSB7XHJcbiAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkodXRpbGl0aWVzLmlzQXJyYXkoaW5saW5lU3VydmV5cykgPyBpbmxpbmVTdXJ2ZXlzIDogW2lubGluZVN1cnZleXNdLCBmdW5jdGlvbiAoc3VydmV5KSB7XHJcbiAgICAgICAgaWYodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoc3VydmV5LmtleVZhbHVlKSl7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1cmk6IHN1cnZleS5rZXlWYWx1ZSxcclxuICAgICAgICAgICAgdHlwZTogc3VydmV5LmF0dHIoJ3R5cGUnKVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYWxsIHRoZSBjcmVhdGl2ZXMuXHJcbiAqL1xyXG5JbkxpbmUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcclxuICB2YXIgaSxsZW47XHJcblxyXG4gIGlmKHRoaXMuY3JlYXRpdmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZm9yKGkgPSAwLCBsZW4gPSB0aGlzLmNyZWF0aXZlcy5sZW5ndGg7IGk8IGxlbjsgaSs9MSl7XHJcbiAgICBpZighdGhpcy5jcmVhdGl2ZXNbaV0uaXNTdXBwb3J0ZWQoKSl7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEluTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRyYWNraW5nRXZlbnQgPSByZXF1aXJlKCcuL1RyYWNraW5nRXZlbnQnKTtcclxudmFyIE1lZGlhRmlsZSA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlJyk7XHJcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XHJcblxyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gTGluZWFyKGxpbmVhckpUcmVlKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExpbmVhcikpIHtcclxuICAgIHJldHVybiBuZXcgTGluZWFyKGxpbmVhckpUcmVlKTtcclxuICB9XHJcblxyXG4gIC8vUmVxdWlyZWQgRWxlbWVudHNcclxuICB0aGlzLmR1cmF0aW9uID0gcGFyc2Vycy5kdXJhdGlvbih4bWwua2V5VmFsdWUobGluZWFySlRyZWUuZHVyYXRpb24pKTtcclxuICB0aGlzLm1lZGlhRmlsZXMgPSBwYXJzZU1lZGlhRmlsZXMobGluZWFySlRyZWUubWVkaWFGaWxlcyAmJiBsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLm1lZGlhRmlsZSk7XHJcblxyXG4gIC8vT3B0aW9uYWwgZmllbGRzXHJcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMobGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMgJiYgbGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcsIHRoaXMuZHVyYXRpb24pO1xyXG4gIHRoaXMuc2tpcG9mZnNldCA9IHBhcnNlcnMub2Zmc2V0KHhtbC5hdHRyKGxpbmVhckpUcmVlLCAnc2tpcG9mZnNldCcpLCB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgaWYgKGxpbmVhckpUcmVlLnZpZGVvQ2xpY2tzKSB7XHJcbiAgICB0aGlzLnZpZGVvQ2xpY2tzID0gbmV3IFZpZGVvQ2xpY2tzKGxpbmVhckpUcmVlLnZpZGVvQ2xpY2tzKTtcclxuICB9XHJcblxyXG4gIGlmKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycykge1xyXG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwua2V5VmFsdWUobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICBpZih4bWwuYXR0cihsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMsICd4bWxFbmNvZGVkJykpIHtcclxuICAgICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwuZGVjb2RlKHRoaXMuYWRQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5nRXZlbnRzKHRyYWNraW5nRXZlbnRzLCBkdXJhdGlvbikge1xyXG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodHJhY2tpbmdFdmVudHMpKSB7XHJcbiAgICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xyXG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcclxuICAgICAgICB0cmFja2luZ3MucHVzaChuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0RhdGEsIGR1cmF0aW9uKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYWNraW5ncztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlTWVkaWFGaWxlcyhtZWRpYUZpbGVzSnhvblRyZWUpIHtcclxuICAgIHZhciBtZWRpYUZpbGVzID0gW107XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChtZWRpYUZpbGVzSnhvblRyZWUpKSB7XHJcbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZSA9IHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXNKeG9uVHJlZSkgPyBtZWRpYUZpbGVzSnhvblRyZWUgOiBbbWVkaWFGaWxlc0p4b25UcmVlXTtcclxuXHJcbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZS5mb3JFYWNoKGZ1bmN0aW9uIChtZkRhdGEpIHtcclxuICAgICAgICBtZWRpYUZpbGVzLnB1c2gobmV3IE1lZGlhRmlsZShtZkRhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWVkaWFGaWxlcztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNdXN0IHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgTWVkaWFGaWxlcycgdHlwZSBpcyBzdXBwb3J0ZWRcclxuICovXHJcbkxpbmVhci5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGksIGxlbjtcclxuICBmb3IoaT0wLCBsZW49dGhpcy5tZWRpYUZpbGVzLmxlbmd0aDsgaTxsZW47IGkrPTEpIHtcclxuICAgIGlmKHRoaXMubWVkaWFGaWxlc1tpXS5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lYXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG5cclxudmFyIGF0dHJpYnV0ZXNMaXN0ID0gW1xyXG4gIC8vUmVxdWlyZWQgYXR0cmlidXRlc1xyXG4gICdkZWxpdmVyeScsXHJcbiAgJ3R5cGUnLFxyXG4gICd3aWR0aCcsXHJcbiAgJ2hlaWdodCcsXHJcbiAgLy9PcHRpb25hbCBhdHRyaWJ1dGVzXHJcbiAgJ2NvZGVjJyxcclxuICAnaWQnLFxyXG4gICdiaXRyYXRlJyxcclxuICAnbWluQml0cmF0ZScsXHJcbiAgJ21heEJpdHJhdGUnLFxyXG4gICdzY2FsYWJsZScsXHJcbiAgJ21haW50YWluQXNwZWN0UmF0aW8nLFxyXG4gICdhcGlGcmFtZXdvcmsnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWVkaWFGaWxlKSkge1xyXG4gICAgcmV0dXJuIG5ldyBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpO1xyXG4gIH1cclxuXHJcbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXHJcbiAgdGhpcy5zcmMgPSB4bWwua2V5VmFsdWUobWVkaWFGaWxlSlRyZWUpO1xyXG5cclxuICBmb3IodmFyIHg9MDsgeDxhdHRyaWJ1dGVzTGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNMaXN0W3hdO1xyXG4gICAgdGhpc1thdHRyaWJ1dGVdID0gbWVkaWFGaWxlSlRyZWUuYXR0cihhdHRyaWJ1dGUpO1xyXG4gIH1cclxufVxyXG5cclxuTWVkaWFGaWxlLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgaWYodmFzdFV0aWwuaXNWUEFJRCh0aGlzKSkge1xyXG4gICAgcmV0dXJuICEhdmFzdFV0aWwuZmluZFN1cHBvcnRlZFZQQUlEVGVjaCh0aGlzLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMudHlwZSA9PT0gJ3ZpZGVvL3gtZmx2Jykge1xyXG4gICAgcmV0dXJuIHZhc3RVdGlsLmlzRmxhc2hTdXBwb3J0ZWQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYUZpbGU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XHJcblxyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG5mdW5jdGlvbiBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRyYWNraW5nRXZlbnQpKSB7XHJcbiAgICByZXR1cm4gbmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdKVHJlZSwgZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5uYW1lID0gdHJhY2tpbmdKVHJlZS5hdHRyKCdldmVudCcpO1xyXG4gIHRoaXMudXJpID0geG1sLmtleVZhbHVlKHRyYWNraW5nSlRyZWUpO1xyXG5cclxuICBpZigncHJvZ3Jlc3MnID09PSB0aGlzLm5hbWUpIHtcclxuICAgIHRoaXMub2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQodHJhY2tpbmdKVHJlZS5hdHRyKCdvZmZzZXQnKSwgZHVyYXRpb24pO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUcmFja2luZ0V2ZW50OyIsIi8qIGdsb2JhbCBvcHRpb25zICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGh0dHAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9odHRwJykuaHR0cDtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxudmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcclxuXHJcbmZ1bmN0aW9uIFZBU1RDbGllbnQob3B0aW9ucykge1xyXG5cclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUQ2xpZW50KSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVkFTVENsaWVudChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICBXUkFQUEVSX0xJTUlUOiA1XHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHV0aWxpdGllcy5leHRlbmQoe30sIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcclxuICAgIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcclxufVxyXG5cclxuVkFTVENsaWVudC5wcm90b3R5cGUuZ2V0VkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0VkFTVFJlc3BvbnNlKGFkVGFnVXJsLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBlcnJvciA9IHNhbml0eUNoZWNrKGFkVGFnVXJsLCBjYWxsYmFjayk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICAgIHRoaXMuX2dldFZBU1RBZC5iaW5kKHRoaXMsIGFkVGFnVXJsKSxcclxuICAgICAgICBidWlsZFZBU1RSZXNwb25zZVxyXG4gICAgXSxcclxuICAgICAgICAgICAgY2FsbGJhY2spO1xyXG5cclxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICAgIGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluLCBjYikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHRoYXQuX2J1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKTtcclxuICAgICAgICAgICAgaWYgKHRoYXQuc2V0dGluZ3Muc2tpcE9mZnNldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2tpcG9mZnNldCA9IHRoYXQuc2V0dGluZ3Muc2tpcE9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYihudWxsLCByZXNwb25zZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjYihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNiKSB7XHJcbiAgICAgICAgaWYgKCFhZFRhZ1VybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUUmVzcG9uc2UsIG1pc3NpbmcgYWQgdGFnIFVSTCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuVkFTVENsaWVudC5wcm90b3R5cGUuX2dldFZBU1RBZCA9IGZ1bmN0aW9uIChhZFRhZ1VybCwgY2FsbGJhY2spIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICBnZXRBZFdhdGVyZmFsbChhZFRhZ1VybCwgZnVuY3Rpb24gKGVycm9yLCB2YXN0VHJlZSkge1xyXG4gICAgICAgIHZhciB3YXRlcmZhbGxBZHMgPSB2YXN0VHJlZSAmJiB1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZHMpID8gdmFzdFRyZWUuYWRzIDogbnVsbDtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgd2F0ZXJmYWxsQWRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksIFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGVyZmFsbEhhbmRsZXIoZXJyb3IsIGFkQ2hhaW4pIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCBhZENoYWluKTtcclxuICAgICAgICAgICAgICAgIGlmICh3YXRlcmZhbGxBZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLCBbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhZENoYWluKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgZnVuY3Rpb24gZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RWYXN0WE1MID0gdGhhdC5fcmVxdWVzdFZBU1RYbWwuYmluZCh0aGF0LCBhZFRhZ1VybCk7XHJcbiAgICAgICAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgICAgICAgICAgcmVxdWVzdFZhc3RYTUwsXHJcbiAgICAgICAgICAgIGJ1aWxkVmFzdFdhdGVyZmFsbFxyXG4gICAgICAgIF0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZFZhc3RXYXRlcmZhbGwoeG1sU3RyLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciB2YXN0VHJlZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXN0VHJlZSA9IHhtbC50b0pYT05UcmVlKHhtbFN0cik7XHJcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcImJ1aWx0IEpYT05UcmVlIGZyb20gVkFTVCByZXNwb25zZTpcIiwgdmFzdFRyZWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0FycmF5KHZhc3RUcmVlLmFkKSkge1xyXG4gICAgICAgICAgICAgICAgdmFzdFRyZWUuYWRzID0gdmFzdFRyZWUuYWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFzdFRyZWUuYWQpIHtcclxuICAgICAgICAgICAgICAgIHZhc3RUcmVlLmFkcyA9IFt2YXN0VHJlZS5hZF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXN0VHJlZS5hZHMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5idWlsZFZhc3RXYXRlcmZhbGwsIGVycm9yIHBhcnNpbmcgeG1sXCIsIDEwMCksIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSB7XHJcbiAgICAgICAgdmFyIHZhc3RWZXJzaW9uID0geG1sLmF0dHIodmFzdFRyZWUsICd2ZXJzaW9uJyk7XHJcblxyXG4gICAgICAgIGlmICghdmFzdFRyZWUuYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vIEFkIGluIFZBU1QgdHJlZScsIDMwMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFzdFZlcnNpb24gJiYgKHZhc3RWZXJzaW9uICE9IDMgJiYgdmFzdFZlcnNpb24gIT0gMikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vdCBzdXBwb3J0ZWQgVkFTVCB2ZXJzaW9uIFwiJyArIHZhc3RWZXJzaW9uICsgJ1wiJywgMTAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkKGFkVGFnVXJsLCBhZENoYWluLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChhZENoYWluLmxlbmd0aCA+PSB0aGF0LldSQVBQRVJfTElNSVQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5nZXRBZCwgcGxheWVycyB3cmFwcGVyIGxpbWl0IHJlYWNoZWQgKHRoZSBsaW1pdCBpcyBcIiArIHRoYXQuV1JBUFBFUl9MSU1JVCArIFwiKVwiLCAzMDIpLCBhZENoYWluKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGFkVGFnVXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RWQVNUQWQoYWRUYWdVcmwsIG5leHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KG51bGwsIGFkVGFnVXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnVpbGRBZFxyXG4gICAgICAgIF0sIGZ1bmN0aW9uIChlcnJvciwgYWQpIHtcclxuICAgICAgICAgICAgaWYgKGFkKSB7XHJcbiAgICAgICAgICAgICAgICBhZENoYWluLnB1c2goYWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFkLndyYXBwZXIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEFkKGFkLndyYXBwZXIuVkFTVEFkVGFnVVJJLCBhZENoYWluLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBhZENoYWluKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZEFkKGFkSnhvblRyZWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGFkID0gbmV3IEFkKGFkSnhvblRyZWUpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh2YWxpZGF0ZUFkKGFkKSwgYWQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRBZCwgZXJyb3IgcGFyc2luZyB4bWwnLCAxMDApLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVBZChhZCkge1xyXG4gICAgICAgIHZhciB3cmFwcGVyID0gYWQud3JhcHBlcjtcclxuICAgICAgICB2YXIgaW5MaW5lID0gYWQuaW5MaW5lO1xyXG4gICAgICAgIHZhciBlcnJNc2dQcmVmaXggPSAnb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVBZCwgJztcclxuXHJcbiAgICAgICAgaWYgKGluTGluZSAmJiB3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwiSW5MaW5lIGFuZCBXcmFwcGVyIGJvdGggZm91bmQgb24gdGhlIHNhbWUgQWRcIiwgMTAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaW5MaW5lICYmICF3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibm9yIHdyYXBwZXIgbm9yIGlubGluZSBlbGVtZW50cyBmb3VuZCBvbiB0aGUgQWRcIiwgMTAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbkxpbmUgJiYgIWluTGluZS5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwiY291bGQgbm90IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXCIsIDQwMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod3JhcHBlciAmJiAhd3JhcHBlci5WQVNUQWRUYWdVUkkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJtaXNzaW5nICdWQVNUQWRUYWdVUkknIGluIHdyYXBwZXJcIiwgMTAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3RWQVNUQWQoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhhdC5fcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgeG1sU3RyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZS5hZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5yZXF1ZXN0VkFTVEFkLCBlcnJvciBwYXJzaW5nIHhtbFwiLCAxMDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuVkFTVENsaWVudC5wcm90b3R5cGUuX3JlcXVlc3RWQVNUWG1sID0gZnVuY3Rpb24gcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFRhZ1VybCkpIHtcclxuICAgICAgICAgICAgYWRUYWdVcmwocmVxdWVzdEhhbmRsZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKFwicmVxdWVzdGluZyBhZFRhZ1VybDogXCIgKyBhZFRhZ1VybCk7XHJcbiAgICAgICAgICAgIGh0dHAuZ2V0KGFkVGFnVXJsLCByZXF1ZXN0SGFuZGxlciwge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjYWxsYmFjayhlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVzcG9uc2UsIHN0YXR1cykge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICB2YXIgZXJyTXNnID0gdXRpbGl0aWVzLmlzRGVmaW5lZChzdGF0dXMpID9cclxuICAgICAgICAgICAgICAgICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEhUVFAgcmVxdWVzdCBlcnJvciB3aXRoIHN0YXR1cyAnXCIgKyBzdGF0dXMgKyBcIidcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJvbiBWQVNUQ2xpZW50LnJlcXVlc3RWYXN0WE1MLCBFcnJvciBnZXR0aW5nIHRoZSB0aGUgVkFTVCBYTUwgd2l0aCBoZSBwYXNzZWQgYWRUYWdYTUwgZm5cIjtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoZXJyTXNnLCAzMDEpLCBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcclxuICAgIH1cclxufTtcclxuXHJcblZBU1RDbGllbnQucHJvdG90eXBlLl9idWlsZFZBU1RSZXNwb25zZSA9IGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKSB7XHJcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgVkFTVFJlc3BvbnNlKCk7XHJcbiAgICBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHNDaGFpbik7XHJcbiAgICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcblxyXG4gICAgLy8qKiogTG9jYWwgZnVuY3Rpb24gKioqKlxyXG4gICAgZnVuY3Rpb24gYWRkQWRzVG9SZXNwb25zZShyZXNwb25zZSwgYWRzKSB7XHJcbiAgICAgICAgYWRzLmZvckVhY2goZnVuY3Rpb24gKGFkKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmFkZEFkKGFkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIHByb2dyZXNzRXZlbnRzID0gcmVzcG9uc2UudHJhY2tpbmdFdmVudHMucHJvZ3Jlc3M7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UuaGFzTGluZWFyKCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBSZWNlaXZlZCBhbiBBZCB0eXBlIHRoYXQgaXMgbm90IHN1cHBvcnRlZFwiLCAyMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBNaXNzaW5nIGR1cmF0aW9uIGZpZWxkIGluIFZBU1QgcmVzcG9uc2VcIiwgMTAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9ncmVzc0V2ZW50cykge1xyXG4gICAgICAgICAgICBwcm9ncmVzc0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5pc051bWJlcihwcm9ncmVzc0V2ZW50Lm9mZnNldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIG1pc3Npbmcgb3Igd3Jvbmcgb2Zmc2V0IGF0dHJpYnV0ZSBvbiBwcm9ncmVzcyB0cmFja2luZyBldmVudFwiLCAxMDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgYWRDaGFpbikge1xyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheShhZENoYWluKSB8fCBhZENoYWluLmxlbmd0aCA9PT0gMCkgeyAvL1RoZXJlIGlzIG5vdGhpbmcgdG8gdHJhY2tcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGVycm9yVVJMTWFjcm9zID0gW107XHJcbiAgICBhZENoYWluLmZvckVhY2goYWRkRXJyb3JVcmxNYWNyb3MpO1xyXG4gICAgdmFzdFV0aWwudHJhY2soZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7ICAvLzkwMCA8PT0gVW5kZWZpbmVkIGVycm9yXHJcblxyXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgICoqKi9cclxuICAgIGZ1bmN0aW9uIGFkZEVycm9yVXJsTWFjcm9zKGFkKSB7XHJcbiAgICAgICAgaWYgKGFkLndyYXBwZXIgJiYgYWQud3JhcHBlci5lcnJvcikge1xyXG4gICAgICAgICAgICBlcnJvclVSTE1hY3Jvcy5wdXNoKGFkLndyYXBwZXIuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFkLmluTGluZSAmJiBhZC5pbkxpbmUuZXJyb3IpIHtcclxuICAgICAgICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC5pbkxpbmUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVkFTVENsaWVudDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVkFTVEVycm9yKG1lc3NhZ2UsIGNvZGUpIHtcclxuICB0aGlzLm1lc3NhZ2UgPSAnVkFTVCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcclxuICBpZiAoY29kZSkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICB9XHJcbn1cclxuXHJcblZBU1RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcclxuVkFTVEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJWQVNUIEVycm9yXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RFcnJvcjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogSW5uZXIgaGVscGVyIGNsYXNzIHRoYXQgZGVhbHMgd2l0aCB0aGUgbG9naWMgb2YgdGhlIGluZGl2aWR1YWwgc3RlcHMgbmVlZGVkIHRvIHNldHVwIGFuIGFkIGluIHRoZSBwbGF5ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBwbGF5ZXIge29iamVjdH0gaW5zdGFuY2Ugb2YgdGhlIHBsYXllciB0aGF0IHdpbGwgcGxheSB0aGUgYWQuIEl0IGFzc3VtZXMgdGhhdCB0aGUgdmlkZW9qcy1jb250cmliLWFkcyBwbHVnaW5cclxuICogICAgICAgICAgICAgICAgICAgICAgICBoYXMgYmVlbiBpbml0aWFsaXplZCB3aGVuIHlvdSB1c2UgaXRzIHV0aWxpdHkgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcblxyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcclxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XHJcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4vVkFTVFRyYWNrZXInKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xyXG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcclxuXHJcbmZ1bmN0aW9uIFZBU1RJbnRlZ3JhdG9yKHBsYXllcikge1xyXG5cclxuXHJcblxyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RJbnRlZ3JhdG9yKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxufVxyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLnBsYXlBZCA9IGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xyXG5cclxuICAgIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignT24gVkFTVEludGVncmF0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgICAgZnVuY3Rpb24gKG5leHQpIHtcclxuICAgICAgICAgICAgbmV4dChudWxsLCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0QWRTb3VyY2UuYmluZCh0aGlzKSxcclxuICAgICAgICB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaC5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcclxuICAgICAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHRoaXMuX3BsYXlTZWxlY3RlZEFkLmJpbmQodGhpcylcclxuICAgIF0sIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoZXJyb3IgJiYgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYWRVbml0ID0ge1xyXG4gICAgICAgIF9zcmM6IG51bGwsXHJcbiAgICAgICAgdHlwZTogJ1ZBU1QnLFxyXG4gICAgICAgIHBhdXNlQWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5wbGF5ZXIucGF1c2UodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXN1bWVBZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnBsYXllci5wbGF5KHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNQYXVzZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoYXQucGxheWVyLnBhdXNlZCh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFNyYzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3JjO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2VsZWN0QWRTb3VyY2UgPSBmdW5jdGlvbiBzZWxlY3RBZFNvdXJjZShyZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBzb3VyY2U7XHJcblxyXG4gICAgdmFyIHBsYXllcldpZHRoID0gZG9tLmdldERpbWVuc2lvbih0aGlzLnBsYXllci5lbCgpKS53aWR0aDtcclxuICAgIHJlc3BvbnNlLm1lZGlhRmlsZXMuc29ydChmdW5jdGlvbiBjb21wYXJlVG8oYSwgYikge1xyXG4gICAgICAgIHZhciBkZWx0YUEgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGEud2lkdGgpO1xyXG4gICAgICAgIHZhciBkZWx0YUIgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGIud2lkdGgpO1xyXG4gICAgICAgIHJldHVybiBkZWx0YUEgLSBkZWx0YUI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzb3VyY2UgPSB0aGlzLnBsYXllci5zZWxlY3RTb3VyY2UocmVzcG9uc2UubWVkaWFGaWxlcykuc291cmNlO1xyXG5cclxuICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgICBsb2dnZXIuaW5mbyhcInNlbGVjdGVkIHNvdXJjZTogXCIsIHNvdXJjZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FkVW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hZFVuaXQuX3NyYyA9IHNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvZGUgNDAzIDw9PSBDb3VsZG4ndCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclxyXG4gICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIkNvdWxkIG5vdCBmaW5kIEFkIG1lZGlhZmlsZSBzdXBwb3J0ZWQgYnkgdGhpcyBwbGF5ZXJcIiwgNDAzKSwgcmVzcG9uc2UpO1xyXG59O1xyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uIGNyZWF0ZVZBU1RUcmFja2VyKGFkTWVkaWFGaWxlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIG5ldyBWQVNUVHJhY2tlcihhZE1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlKSwgcmVzcG9uc2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNhbGxiYWNrKGUsIHJlc3BvbnNlKTtcclxuICAgIH1cclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiBzZXR1cEV2ZW50cyhhZE1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgcHJldmlvdXNseU11dGVkO1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcclxuICAgIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XHJcbiAgICBwbGF5ZXIub24oJ3BhdXNlJywgdHJhY2tQYXVzZSk7XHJcbiAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcclxuICAgIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xyXG5cclxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgdW5iaW5kRXZlbnRzKTtcclxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZFNraXAnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ3Zhc3QuYWRFbmQnKSB7XHJcbiAgICAgICAgICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBhZE1lZGlhRmlsZSwgcmVzcG9uc2UpO1xyXG5cclxuICAgIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuICAgIGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcclxuICAgICAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcclxuICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcclxuICAgICAgICBwbGF5ZXIub2ZmKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xyXG4gICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcclxuICAgICAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKCkge1xyXG4gICAgICAgIGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkpIHtcclxuICAgICAgICAgICAgdHJhY2tlci50cmFja0Z1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cmFja2VyLnRyYWNrRXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhY2tQYXVzZSgpIHtcclxuICAgICAgICAvL05PVEU6IHdoZW5ldmVyIGEgdmlkZW8gZW5kcyB0aGUgdmlkZW8gRWxlbWVudCB0cmlnZ2VycyBhICdwYXVzZScgZXZlbnQgYmVmb3JlIHRoZSAnZW5kZWQnIGV2ZW50LlxyXG4gICAgICAgIC8vICAgICAgV2Ugc2hvdWxkIG5vdCB0cmFjayB0aGlzIHBhdXNlIGV2ZW50IGJlY2F1c2UgaXQgbWFrZXMgdGhlIFZBU1QgdHJhY2tpbmcgY29uZnVzaW5nIGFnYWluIHdlIHVzZSBhXHJcbiAgICAgICAgLy8gICAgICBUaHJlc2hvbGQgb2YgMiBzZWNvbmRzIHRvIHByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIG9uIElPUy5cclxuICAgICAgICBpZiAoTWF0aC5hYnMocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPCAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xyXG4gICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXknLCAndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChldnQudHlwZSA9PT0gJ3BsYXknKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50VGltZUluTXMgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDA7XHJcbiAgICAgICAgdHJhY2tlci50cmFja1Byb2dyZXNzKGN1cnJlbnRUaW1lSW5Ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcclxuICAgICAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcclxuICAgICAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhY2tWb2x1bWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgdmFyIG11dGVkID0gcGxheWVyLm11dGVkKCk7XHJcbiAgICAgICAgaWYgKG11dGVkKSB7XHJcbiAgICAgICAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c2x5TXV0ZWQpIHtcclxuICAgICAgICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2aW91c2x5TXV0ZWQgPSBtdXRlZDtcclxuICAgIH1cclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIGFkZFNraXBCdXR0b24oc291cmNlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBza2lwT2Zmc2V0SW5TZWM7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc051bWJlcihyZXNwb25zZS5za2lwb2Zmc2V0KSkge1xyXG4gICAgICAgIHNraXBPZmZzZXRJblNlYyA9IHJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xyXG4gICAgICAgIGFkZFNraXBCdXR0b25Ub1BsYXllcih0aGlzLnBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcclxuICAgIH1cclxuICAgIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xyXG5cclxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gICAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldCkge1xyXG4gICAgICAgIHZhciBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xyXG4gICAgICAgIHZhciB1cGRhdGVTa2lwQnV0dG9uID0gdXBkYXRlU2tpcEJ1dHRvblN0YXRlLmJpbmQodGhhdCwgc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKTtcclxuXHJcbiAgICAgICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XHJcbiAgICAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU2tpcEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcclxuICAgICAgICAgICAgZG9tLnJlbW92ZShza2lwQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpIHtcclxuICAgICAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XHJcblxyXG4gICAgICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdHJhY2tlci50cmFja1NraXAoKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU2tpcCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxyXG4gICAgICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBza2lwQnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZShza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpIHtcclxuICAgICAgICB2YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIHBsYXllci5jdXJyZW50VGltZSgpKTtcclxuICAgICAgICBpZiAodGltZUxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gcGxheWVyLm9wdGlvbnNfLnBsdWdpbnNbJ2Fkcy1zZXR1cCddLnNraXBJbkJ1dHRvblRleHQgPyBwbGF5ZXIub3B0aW9uc18ucGx1Z2luc1snYWRzLXNldHVwJ10uc2tpcEluQnV0dG9uVGV4dCA6IFwiU2tpcCBpbiBcIlxyXG4gICAgICAgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IHRleHQgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyh0aW1lTGVmdCwgMikgKyBcIi4uLlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gcGxheWVyLm9wdGlvbnNfLnBsdWdpbnNbJ2Fkcy1zZXR1cCddLnNraXBCdXR0b25UZXh0ID8gcGxheWVyLm9wdGlvbnNfLnBsdWdpbnNbJ2Fkcy1zZXR1cCddLnNraXBCdXR0b25UZXh0IDogXCJTa2lwIGFkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIGFkZENsaWNrVGhyb3VnaChtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpO1xyXG4gICAgdmFyIHVwZGF0ZUJsb2NrZXIgPSB1cGRhdGVCbG9ja2VyVVJMLmJpbmQodGhpcywgYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcik7XHJcblxyXG4gICAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGJsb2NrZXIsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xyXG4gICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XHJcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUJsb2NrZXIpO1xyXG5cclxuICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcclxuXHJcbiAgICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIGJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdmFyIGNsaWNrVGhyb3VnaE1hY3JvID0gcmVzcG9uc2UuY2xpY2tUaHJvdWdoO1xyXG5cclxuICAgICAgICBkb20uYWRkQ2xhc3MoYmxvY2tlciwgJ3Zhc3QtYmxvY2tlcicpO1xyXG4gICAgICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpO1xyXG5cclxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNsaWNrVGhyb3VnaE1hY3JvKSkge1xyXG4gICAgICAgICAgICBibG9ja2VyLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBibG9ja2VyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLnBhdXNlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBwbGF5ZXIncyBub3JtYWwgcGF1c2UgbWVjaGFuaXNtXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG4gICAgICAgICAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYmxvY2tlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyVVJMKGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpIHtcclxuICAgICAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChyZXNwb25zZS5jbGlja1Rocm91Z2gsIHBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllcikge1xyXG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSB7XHJcbiAgICAgICAgICAgIEFTU0VUVVJJOiBtZWRpYUZpbGUuc3JjLFxyXG4gICAgICAgICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogJyMnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJsb2NrZXIoKSB7XHJcbiAgICAgICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xyXG4gICAgICAgIGRvbS5yZW1vdmUoYmxvY2tlcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlTZWxlY3RlZEFkID0gZnVuY3Rpb24gcGxheVNlbGVjdGVkQWQoc291cmNlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuXHJcbiAgICBwbGF5ZXIucHJlbG9hZChcImF1dG9cIik7IC8vd2l0aG91dCBwcmVsb2FkPWF1dG8gdGhlIGR1cmF0aW9uY2hhbmdlIGV2ZW50IGlzIG5ldmVyIGZpcmVkXHJcbiAgICBwbGF5ZXIuc3JjKHNvdXJjZSk7XHJcblxyXG4gICAgbG9nZ2VyLmRlYnVnKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZD4gd2FpdGluZyBmb3IgZHVyYXRpb25jaGFuZ2UgdG8gcGxheSB0aGUgYWQuLi5cIik7XHJcblxyXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZHVyYXRpb25jaGFuZ2UnLCAnZXJyb3InLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2R1cmF0aW9uY2hhbmdlJykge1xyXG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiBnb3QgZHVyYXRpb25jaGFuZ2U7IGNhbGxpbmcgcGxheUFkKClcIik7XHJcbiAgICAgICAgICAgIHBsYXlBZCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RJbnRlZ3JhdG9yLCBQbGF5ZXIgaXMgdW5hYmxlIHRvIHBsYXkgdGhlIEFkXCIsIDQwMCksIHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9OT1RFOiBJZiB0aGUgYWRzIGdldCBjYW5jZWxlZCB3ZSBkbyBub3RoaW5nL1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqKiogbG9jYWwgZnVuY3Rpb25zICoqKioqKi9cclxuICAgIGZ1bmN0aW9uIHBsYXlBZCgpIHtcclxuXHJcbiAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChldnQudHlwZSA9PT0gJ3Zhc3QuYWRzQ2FuY2VsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkL3BsYXlBZD4gZ290IHBsYXlpbmcgZXZlbnQ7IHRyaWdnZXJpbmcgdmFzdC5hZFN0YXJ0Li4uXCIpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLm9uKCdlbmRlZCcsIHByb2NlZWQpO1xyXG4gICAgICAgICAgICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgcHJvY2VlZCk7XHJcbiAgICAgICAgICAgIHBsYXllci5vbigndmFzdC5hZFNraXAnLCBwcm9jZWVkKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByb2NlZWQoZXZ0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnZW5kZWQnICYmIChwbGF5ZXIuZHVyYXRpb24oKSAtIHBsYXllci5jdXJyZW50VGltZSgpKSA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGF2b2lkcyBpc3N1ZXMgd2hlcmUgSU9TIGNvbnRyb2xzIGNvdWxkIHNraXAgdGhlIEFkXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllci5vZmYoJ2VuZGVkJywgcHJvY2VlZCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLm9mZigndmFzdC5hZFNraXAnLCBwcm9jZWVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL05PVEU6IGlmIHRoZSBhZHMgZ2V0IGNhbmNlbCB3ZSBkbyBub3RoaW5nIGFwYXJ0IHJlbW92aW5nIHRoZSBsaXN0bmVyc1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnZW5kZWQnIHx8IGV2dC50eXBlID09PSAndmFzdC5hZFNraXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQvcGxheUFkPiBjYWxsaW5nIHBsYXllci5wbGF5KCkuLi5cIik7XHJcblxyXG4gICAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSkge1xyXG4gICAgdmFzdFV0aWwudHJhY2socmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RJbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcclxudmFyIFZpZGVvQ2xpY2tzID0gcmVxdWlyZSgnLi9WaWRlb0NsaWNrcycpO1xyXG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcclxudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XHJcbnZhciBXcmFwcGVyID0gcmVxdWlyZSgnLi9XcmFwcGVyJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG53aW5kb3cuSW5MaW5lX19BID0gSW5MaW5lO1xyXG5mdW5jdGlvbiBWQVNUUmVzcG9uc2UoKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVFJlc3BvbnNlKCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9saW5lYXJBZGRlZCA9IGZhbHNlO1xyXG4gIHRoaXMuYWRzID0gW107XHJcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xyXG4gIHRoaXMuaW1wcmVzc2lvbnMgPSBbXTtcclxuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gW107XHJcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBbXTtcclxuICB0aGlzLnRyYWNraW5nRXZlbnRzID0ge307XHJcbiAgdGhpcy5tZWRpYUZpbGVzID0gW107XHJcbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7XHJcbiAgdGhpcy5hZFRpdGxlID0gJyc7XHJcbiAgdGhpcy5kdXJhdGlvbiA9IHVuZGVmaW5lZDtcclxuICB0aGlzLnNraXBvZmZzZXQgPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuYWRkQWQgPSBmdW5jdGlvbiAoYWQpIHtcclxuICB2YXIgaW5MaW5lLCB3cmFwcGVyO1xyXG4gIGlmIChhZCBpbnN0YW5jZW9mIEFkKSB7XHJcbiAgICBpbkxpbmUgPSBhZC5pbkxpbmU7XHJcbiAgICB3cmFwcGVyID0gYWQud3JhcHBlcjtcclxuXHJcbiAgICB0aGlzLmFkcy5wdXNoKGFkKTtcclxuXHJcbiAgICBpZiAoaW5MaW5lKSB7XHJcbiAgICAgIHRoaXMuX2FkZEluTGluZShpbkxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuX2FkZFdyYXBwZXIod3JhcHBlcik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIHZhciBlcnJvclVSTCA9IGVycm9yIGluc3RhbmNlb2YgeG1sLkpYT05UcmVlID8geG1sLmtleVZhbHVlKGVycm9yKSA6IGVycm9yO1xyXG4gIGlmIChlcnJvclVSTCkge1xyXG4gICAgdGhpcy5lcnJvclVSTE1hY3Jvcy5wdXNoKGVycm9yVVJMKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIChpbXByZXNzaW9ucykge1xyXG4gIHV0aWxpdGllcy5pc0FycmF5KGltcHJlc3Npb25zKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuaW1wcmVzc2lvbnMsIGltcHJlc3Npb25zKTtcclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIChjbGlja1Rocm91Z2gpIHtcclxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY2xpY2tUaHJvdWdoKSkge1xyXG4gICAgdGhpcy5jbGlja1Rocm91Z2ggPSBjbGlja1Rocm91Z2g7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUcmFja2luZ3MgPSBmdW5jdGlvbiAoY2xpY2tUcmFja2luZ3MpIHtcclxuICB1dGlsaXRpZXMuaXNBcnJheShjbGlja1RyYWNraW5ncykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmNsaWNrVHJhY2tpbmdzLCBjbGlja1RyYWNraW5ncyk7XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDdXN0b21DbGlja3MgPSBmdW5jdGlvbiAoY3VzdG9tQ2xpY2tzKSB7XHJcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY3VzdG9tQ2xpY2tzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY3VzdG9tQ2xpY2tzLCBjdXN0b21DbGlja3MpO1xyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVHJhY2tpbmdFdmVudHMgPSBmdW5jdGlvbiAodHJhY2tpbmdFdmVudHMpIHtcclxuICB2YXIgZXZlbnRzTWFwID0gdGhpcy50cmFja2luZ0V2ZW50cztcclxuXHJcbiAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcclxuICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRXZlbnQpIHtcclxuICAgICAgaWYgKCFldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSkge1xyXG4gICAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0ucHVzaCh0cmFja2luZ0V2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XHJcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHRpdGxlKSkge1xyXG4gICAgdGhpcy5hZFRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGR1cmF0aW9uKSkge1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFZpZGVvQ2xpY2tzID0gZnVuY3Rpb24gKHZpZGVvQ2xpY2tzKSB7XHJcbiAgaWYgKHZpZGVvQ2xpY2tzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpIHtcclxuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaCh2aWRlb0NsaWNrcy5jbGlja1Rocm91Z2gpO1xyXG4gICAgdGhpcy5fYWRkQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja3MuY2xpY2tUcmFja2luZ3MpO1xyXG4gICAgdGhpcy5fYWRkQ3VzdG9tQ2xpY2tzKHZpZGVvQ2xpY2tzLmN1c3RvbUNsaWNrcyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTWVkaWFGaWxlcyA9IGZ1bmN0aW9uIChtZWRpYUZpbGVzKSB7XHJcbiAgdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLm1lZGlhRmlsZXMsIG1lZGlhRmlsZXMpO1xyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkU2tpcG9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcclxuICBpZiAob2Zmc2V0KSB7XHJcbiAgICB0aGlzLnNraXBvZmZzZXQgPSBvZmZzZXQ7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQWRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKGFkUGFyYW1ldGVycykge1xyXG4gIGlmIChhZFBhcmFtZXRlcnMpIHtcclxuICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0gYWRQYXJhbWV0ZXJzO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZExpbmVhciA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcclxuICBpZiAobGluZWFyIGluc3RhbmNlb2YgTGluZWFyKSB7XHJcbiAgICB0aGlzLl9hZGREdXJhdGlvbihsaW5lYXIuZHVyYXRpb24pO1xyXG4gICAgdGhpcy5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcclxuICAgIHRoaXMuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XHJcbiAgICB0aGlzLl9hZGRNZWRpYUZpbGVzKGxpbmVhci5tZWRpYUZpbGVzKTtcclxuICAgIHRoaXMuX2FkZFNraXBvZmZzZXQobGluZWFyLnNraXBvZmZzZXQpO1xyXG4gICAgdGhpcy5fYWRkQWRQYXJhbWV0ZXJzKGxpbmVhci5hZFBhcmFtZXRlcnMpO1xyXG4gICAgdGhpcy5fbGluZWFyQWRkZWQgPSB0cnVlO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEluTGluZSA9IGZ1bmN0aW9uIChpbkxpbmUpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIGlmIChpbkxpbmUgaW5zdGFuY2VvZiBJbkxpbmUpIHtcclxuICAgIHRoaXMuX2FkZFRpdGxlKGluTGluZS5hZFRpdGxlKTtcclxuICAgIHRoaXMuX2FkZEVycm9yVHJhY2tVcmwoaW5MaW5lLmVycm9yKTtcclxuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKGluTGluZS5pbXByZXNzaW9ucyk7XHJcblxyXG4gICAgaW5MaW5lLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xyXG4gICAgICBpZiAoY3JlYXRpdmUubGluZWFyKSB7XHJcbiAgICAgICAgdGhhdC5fYWRkTGluZWFyKGNyZWF0aXZlLmxpbmVhcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFdyYXBwZXIgPSBmdW5jdGlvbiAod3JhcHBlcikge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgaWYgKHdyYXBwZXIgaW5zdGFuY2VvZiBXcmFwcGVyKSB7XHJcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJsKHdyYXBwZXIuZXJyb3IpO1xyXG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMod3JhcHBlci5pbXByZXNzaW9ucyk7XHJcblxyXG4gICAgd3JhcHBlci5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcclxuICAgICAgdmFyIGxpbmVhciA9IGNyZWF0aXZlLmxpbmVhcjtcclxuICAgICAgaWYgKGxpbmVhcikge1xyXG4gICAgICAgIHRoYXQuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XHJcbiAgICAgICAgdGhhdC5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7Ly9XZSBlbnN1cmUgdGhhdCBubyBjbGlja1Rocm91Z2ggaGFzIGJlZW4gYWRkZWRcclxuICAgICAgICB0aGF0Ll9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmhhc0xpbmVhciA9IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHRoaXMuX2xpbmVhckFkZGVkO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYXBwZW5kVG9BcnJheShhcnJheSwgaXRlbXMpIHtcclxuICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBhcnJheS5wdXNoKGl0ZW0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RSZXNwb25zZTtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuZnVuY3Rpb24gVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUVHJhY2tlcikpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLnNhbml0eUNoZWNrKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xyXG4gIHRoaXMuaW5pdGlhbGl6ZShhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcclxuXHJcbn1cclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xyXG4gIHRoaXMucmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XHJcbiAgdGhpcy5hc3NldFVSSSA9IGFzc2V0VVJJO1xyXG4gIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gIHRoaXMucXVhcnRpbGVzID0ge1xyXG4gICAgZmlyc3RRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDI1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXHJcbiAgICBtaWRwb2ludDoge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDUwICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXHJcbiAgICB0aGlyZFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNzUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfVxyXG4gIH07XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoYXNzZXRVUkkpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKGFzc2V0VVJJKSkge1xyXG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgdGhlIFVSSSBvZiB0aGUgYWQgYXNzZXQgYmVpbmcgcGxheWVkJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XHJcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUIHJlc3BvbnNlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrVVJMcyA9IGZ1bmN0aW9uIHRyYWNrVVJMcyh1cmxzLCB2YXJpYWJsZXMpIHtcclxuICBpZiAodXRpbGl0aWVzLmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPiAwKSB7XHJcbiAgICB2YXJpYWJsZXMgPSB1dGlsaXRpZXMuZXh0ZW5kKHtcclxuICAgICAgQVNTRVRVUkk6IHRoaXMuYXNzZXRVUkksXHJcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcylcclxuICAgIH0sIHZhcmlhYmxlcyB8fCB7fSk7XHJcblxyXG4gICAgdmFzdFV0aWwudHJhY2sodXJscywgdmFyaWFibGVzKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFdmVudCA9IGZ1bmN0aW9uIHRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UpIHtcclxuICB0aGlzLnRyYWNrVVJMcyhnZXRFdmVudFVyaXModGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdKSk7XHJcbiAgaWYgKHRyYWNrT25jZSkge1xyXG4gICAgdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgZnVuY3Rpb24gZ2V0RXZlbnRVcmlzKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgICB2YXIgdXJpcztcclxuXHJcbiAgICBpZiAodHJhY2tpbmdFdmVudHMpIHtcclxuICAgICAgdXJpcyA9IFtdO1xyXG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgaWYgKCFldmVudC51cmkpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdXJpcy5wdXNoKGV2ZW50LnVyaSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVyaXM7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKG5ld1Byb2dyZXNzSW5Ncykge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuICB2YXIgZXZlbnRzID0gW107XHJcbiAgdmFyIE9OQ0UgPSB0cnVlO1xyXG4gIHZhciBBTFdBWVMgPSBmYWxzZTtcclxuICB2YXIgdHJhY2tpbmdFdmVudHMgPSB0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzO1xyXG5cclxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKG5ld1Byb2dyZXNzSW5NcykpIHtcclxuICAgIGFkZFRyYWNrRXZlbnQoJ3N0YXJ0JywgT05DRSwgbmV3UHJvZ3Jlc3NJbk1zID4gMCk7XHJcbiAgICBhZGRUcmFja0V2ZW50KCdyZXdpbmQnLCBBTFdBWVMsIGhhc1Jld291bmQodGhpcy5wcm9ncmVzcywgbmV3UHJvZ3Jlc3NJbk1zKSk7XHJcbiAgICBhZGRRdWFydGlsZUV2ZW50cyhuZXdQcm9ncmVzc0luTXMpO1xyXG4gICAgdHJhY2tQcm9ncmVzc0V2ZW50cyhuZXdQcm9ncmVzc0luTXMpO1xyXG4gICAgdHJhY2tFdmVudHMoKTtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSBuZXdQcm9ncmVzc0luTXM7XHJcbiAgfVxyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cclxuICBmdW5jdGlvbiBoYXNSZXdvdW5kKGN1cnJlbnRQcm9ncmVzcywgbmV3UHJvZ3Jlc3MpIHtcclxuICAgIHZhciBSRVdJTkRfVEhSRVNIT0xEID0gMzAwMDsgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGVyZSB3YXMgYSByZXdpbmQgYW4gdGhhdCBpdCB3YXMgb24gcHVycG9zZS5cclxuICAgIHJldHVybiBjdXJyZW50UHJvZ3Jlc3MgPiBuZXdQcm9ncmVzc0luTXMgJiYgTWF0aC5hYnMobmV3UHJvZ3Jlc3MgLSBjdXJyZW50UHJvZ3Jlc3MpID4gUkVXSU5EX1RIUkVTSE9MRDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UsIGNhbkJlQWRkZWQpIHtcclxuICAgIGlmICh0cmFja2luZ0V2ZW50c1tldmVudE5hbWVdICYmIGNhbkJlQWRkZWQpIHtcclxuICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcclxuICAgICAgICB0cmFja09uY2U6ICEhdHJhY2tPbmNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkUXVhcnRpbGVFdmVudHMocHJvZ3Jlc3MpIHtcclxuICAgIHZhciBxdWFydGlsZXMgPSB0aGF0LnF1YXJ0aWxlcztcclxuICAgIHZhciBmaXJzdFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMuZmlyc3RRdWFydGlsZTtcclxuICAgIHZhciBtaWRwb2ludCA9IHRoYXQucXVhcnRpbGVzLm1pZHBvaW50O1xyXG4gICAgdmFyIHRoaXJkUXVhcnRpbGUgPSB0aGF0LnF1YXJ0aWxlcy50aGlyZFF1YXJ0aWxlO1xyXG5cclxuICAgIGlmICghZmlyc3RRdWFydGlsZS50cmFja2VkKSB7XHJcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ2ZpcnN0UXVhcnRpbGUnLCBwcm9ncmVzcyk7XHJcbiAgICB9IGVsc2UgaWYgKCFtaWRwb2ludC50cmFja2VkKSB7XHJcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ21pZHBvaW50JywgcHJvZ3Jlc3MpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcmRRdWFydGlsZS50cmFja2VkKXtcclxuICAgICAgdHJhY2tRdWFydGlsZSgndGhpcmRRdWFydGlsZScsIHByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cclxuICAgIGZ1bmN0aW9uIHRyYWNrUXVhcnRpbGUocXVhcnRpbGVOYW1lLCBwcm9ncmVzcyl7XHJcbiAgICAgIHZhciBxdWFydGlsZSA9IHF1YXJ0aWxlc1txdWFydGlsZU5hbWVdO1xyXG4gICAgICBpZihjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSl7XHJcbiAgICAgICAgcXVhcnRpbGUudHJhY2tlZCA9IHRydWU7XHJcbiAgICAgICAgYWRkVHJhY2tFdmVudChxdWFydGlsZU5hbWUsIE9OQ0UsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSB7XHJcbiAgICB2YXIgcXVhcnRpbGVUaW1lID0gcXVhcnRpbGUudGltZTtcclxuICAgIC8vV2Ugb25seSBmaXJlIHRoZSBxdWFydGlsZSBldmVudCBpZiB0aGUgcHJvZ3Jlc3MgaXMgYmlnZ2VyIHRoYW4gdGhlIHF1YXJ0aWxlIHRpbWUgYnkgNSBzZWNvbmRzIGF0IG1vc3QuXHJcbiAgICByZXR1cm4gcHJvZ3Jlc3MgPj0gcXVhcnRpbGVUaW1lICYmIHByb2dyZXNzIDw9IChxdWFydGlsZVRpbWUgKyA1MDAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3NFdmVudHMocHJvZ3Jlc3MpIHtcclxuICAgIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MpKSB7XHJcbiAgICAgIHJldHVybjsgLy9Ob3RoaW5nIHRvIHRyYWNrXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBlbmRpbmdQcm9ncmVzc0V2dHMgPSBbXTtcclxuXHJcbiAgICB0cmFja2luZ0V2ZW50cy5wcm9ncmVzcy5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgaWYgKGV2dC5vZmZzZXQgPD0gcHJvZ3Jlc3MpIHtcclxuICAgICAgICB0aGF0LnRyYWNrVVJMcyhbZXZ0LnVyaV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBlbmRpbmdQcm9ncmVzc0V2dHMucHVzaChldnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRyYWNraW5nRXZlbnRzLnByb2dyZXNzID0gcGVuZGluZ1Byb2dyZXNzRXZ0cztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrRXZlbnRzKCkge1xyXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIHRoYXQudHJhY2tFdmVudChldmVudC5uYW1lLCBldmVudC50cmFja09uY2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuW1xyXG4gICdyZXdpbmQnLFxyXG4gICdmdWxsc2NyZWVuJyxcclxuICAnZXhpdEZ1bGxzY3JlZW4nLFxyXG4gICdwYXVzZScsXHJcbiAgJ3Jlc3VtZScsXHJcbiAgJ211dGUnLFxyXG4gICd1bm11dGUnLFxyXG4gICdhY2NlcHRJbnZpdGF0aW9uJyxcclxuICAnYWNjZXB0SW52aXRhdGlvbkxpbmVhcicsXHJcbiAgJ2NvbGxhcHNlJyxcclxuICAnZXhwYW5kJ1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xyXG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShldmVudE5hbWUpXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy50cmFja0V2ZW50KGV2ZW50TmFtZSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuW1xyXG4gICdzdGFydCcsXHJcbiAgJ3NraXAnLFxyXG4gICdjbG9zZScsXHJcbiAgJ2Nsb3NlTGluZWFyJ1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xyXG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShldmVudE5hbWUpXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy50cmFja0V2ZW50KGV2ZW50TmFtZSwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuW1xyXG4gICdmaXJzdFF1YXJ0aWxlJyxcclxuICAnbWlkcG9pbnQnLFxyXG4gICd0aGlyZFF1YXJ0aWxlJ1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKHF1YXJ0aWxlKSB7XHJcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKHF1YXJ0aWxlKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucXVhcnRpbGVzW3F1YXJ0aWxlXS50cmFja2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy50cmFja0V2ZW50KHF1YXJ0aWxlLCB0cnVlKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZih0aGlzLnF1YXJ0aWxlcy50aGlyZFF1YXJ0aWxlLnRyYWNrZWQpe1xyXG4gICAgdGhpcy50cmFja0V2ZW50KCdjb21wbGV0ZScsIHRydWUpO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0Vycm9yV2l0aENvZGUgPSBmdW5jdGlvbiB0cmFja0Vycm9yV2l0aENvZGUoZXJyb3Jjb2RlKSB7XHJcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihlcnJvcmNvZGUpKSB7XHJcbiAgICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvcmNvZGV9KTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIHRyYWNrSW1wcmVzc2lvbnMoKSB7XHJcbiAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5pbXByZXNzaW9ucyk7XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDcmVhdGl2ZVZpZXcgPSBmdW5jdGlvbiB0cmFja0NyZWF0aXZlVmlldygpIHtcclxuICB0aGlzLnRyYWNrRXZlbnQoJ2NyZWF0aXZlVmlldycpO1xyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ2xpY2sgPSBmdW5jdGlvbiB0cmFja0NsaWNrKCkge1xyXG4gIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuY2xpY2tUcmFja2luZ3MpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWQVNUVHJhY2tlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxuZnVuY3Rpb24gVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUodmlkZW9DbGlja0pUcmVlLmNsaWNrVGhyb3VnaCk7XHJcbiAgdGhpcy5jbGlja1RyYWNraW5ncyA9IHBhcnNlQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja0pUcmVlLmNsaWNrVHJhY2tpbmcpO1xyXG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY3VzdG9tQ2xpY2spO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gcGFyc2VDbGlja1RyYWNraW5ncyh0cmFja2luZ0RhdGEpIHtcclxuICAgIHZhciBjbGlja1RyYWNraW5ncyA9IFtdO1xyXG4gICAgaWYgKHRyYWNraW5nRGF0YSkge1xyXG4gICAgICB0cmFja2luZ0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0RhdGEpID8gdHJhY2tpbmdEYXRhIDogW3RyYWNraW5nRGF0YV07XHJcbiAgICAgIHRyYWNraW5nRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjbGlja1RyYWNraW5nRGF0YSkge1xyXG4gICAgICAgIGNsaWNrVHJhY2tpbmdzLnB1c2goeG1sLmtleVZhbHVlKGNsaWNrVHJhY2tpbmdEYXRhKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsaWNrVHJhY2tpbmdzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWaWRlb0NsaWNrczsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XHJcbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcbmZ1bmN0aW9uIFdyYXBwZXIod3JhcHBlckpUcmVlKSB7XHJcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgV3JhcHBlcikpIHtcclxuICAgIHJldHVybiBuZXcgV3JhcHBlcih3cmFwcGVySlRyZWUpO1xyXG4gIH1cclxuXHJcbiAgLy9SZXF1aXJlZCBlbGVtZW50c1xyXG4gIHRoaXMuYWRTeXN0ZW0gPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLmFkU3lzdGVtKTtcclxuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyh3cmFwcGVySlRyZWUuaW1wcmVzc2lvbik7XHJcbiAgdGhpcy5WQVNUQWRUYWdVUkkgPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLnZBU1RBZFRhZ1VSSSk7XHJcblxyXG4gIC8vT3B0aW9uYWwgZWxlbWVudHNcclxuICB0aGlzLmNyZWF0aXZlcyA9IENyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzKHdyYXBwZXJKVHJlZS5jcmVhdGl2ZXMpO1xyXG4gIHRoaXMuZXJyb3IgPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLmVycm9yKTtcclxuICB0aGlzLmV4dGVuc2lvbnMgPSB3cmFwcGVySlRyZWUuZXh0ZW5zaW9ucztcclxuXHJcbiAgLy9PcHRpb25hbCBhdHRyc1xyXG4gIHRoaXMuZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzID0gdXRpbGl0aWVzLmlzRGVmaW5lZCh4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKSk/IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycycpOiB0cnVlO1xyXG4gIHRoaXMuYWxsb3dNdWx0aXBsZUFkcyA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2FsbG93TXVsdGlwbGVBZHMnKTtcclxuICB0aGlzLmZhbGxiYWNrT25Ob0FkID0geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZmFsbGJhY2tPbk5vQWQnKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXcmFwcGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIGR1cmF0aW9uUmVnZXggPSAvKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZFxcZFxcZCkpPy87XHJcblxyXG52YXIgcGFyc2VycyA9IHtcclxuXHJcbiAgZHVyYXRpb246IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb25TdHIpIHtcclxuXHJcbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcclxuXHJcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGR1cmF0aW9uU3RyKSkge1xyXG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICBkdXJhdGlvbkluTXMgPSBwYXJzZUhvdXJzVG9NcyhtYXRjaFsxXSkgKyBwYXJzZU1pblRvTXMobWF0Y2hbMl0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzNdKSArIHBhcnNlSW50KG1hdGNoWzVdIHx8IDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xyXG5cclxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KGhvdXJTdHIsIDEwKSAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlTWluVG9NcyhtaW5TdHIpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvZmZzZXQ6IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgZHVyYXRpb24pIHtcclxuICAgIGlmKGlzUGVyY2VudGFnZShvZmZzZXQpKXtcclxuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2Vycy5kdXJhdGlvbihvZmZzZXQpO1xyXG5cclxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG9mZnNldCkge1xyXG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XHJcbiAgICAgIHJldHVybiBwZXJjZW50YWdlUmVnZXgudGVzdChvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBlcmNlbnRhZ2UocGVyY2VudFN0ciwgZHVyYXRpb24pIHtcclxuICAgICAgaWYoZHVyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gY2FsY1BlcmNlbnQoZHVyYXRpb24sIHBhcnNlRmxvYXQocGVyY2VudFN0ci5yZXBsYWNlKCclJywgJycpKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY1BlcmNlbnQocXVhbnRpdHksIHBlcmNlbnQpe1xyXG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJzOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciBWUEFJREhUTUw1VGVjaCA9IHJlcXVpcmUoJy4uL3ZwYWlkL1ZQQUlESFRNTDVUZWNoJyk7XHJcbnZhciBWUEFJREZsYXNoVGVjaCA9IHJlcXVpcmUoJy4uL3ZwYWlkL1ZQQUlERmxhc2hUZWNoJyk7XHJcbnZhciBWUEFJREZMQVNIQ2xpZW50ID0gcmVxdWlyZSgnVlBBSURGTEFTSENsaWVudC9qcy9WUEFJREZMQVNIQ2xpZW50Jyk7XHJcblxyXG52YXIgdmFzdFV0aWwgPSB7XHJcblxyXG4gIHRyYWNrOiBmdW5jdGlvbiB0cmFjayhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xyXG4gICAgdmFyIHNvdXJjZXMgPSB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcyk7XHJcbiAgICB2YXIgdHJhY2tJbWdzID0gW107XHJcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNyYykge1xyXG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgIHRyYWNrSW1ncy5wdXNoKGltZyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cmFja0ltZ3M7XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VVUkxNYWNyb3M6IGZ1bmN0aW9uIHBhcnNlTWFjcm9zKFVSTE1hY3JvcywgdmFyaWFibGVzKSB7XHJcbiAgICB2YXIgcGFyc2VkVVJMcyA9IFtdO1xyXG5cclxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcclxuXHJcbiAgICBpZiAoISh2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0pKSB7XHJcbiAgICAgIHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMGUrMTApO1xyXG4gICAgfVxyXG5cclxuICAgIFVSTE1hY3Jvcy5mb3JFYWNoKGZ1bmN0aW9uIChVUkxNYWNybykge1xyXG4gICAgICBwYXJzZWRVUkxzLnB1c2godmFzdFV0aWwuX3BhcnNlVVJMTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlZFVSTHM7XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VVUkxNYWNybzogZnVuY3Rpb24gcGFyc2VNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSB7XHJcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XHJcblxyXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xyXG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFzdFV0aWwuX3BhcnNlVVJMTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcyk7XHJcbiAgfSxcclxuXHJcbiAgX3BhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xyXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xyXG5cclxuICAgIHV0aWxpdGllcy5mb3JFYWNoKHZhcmlhYmxlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgVVJMTWFjcm8gPSBVUkxNYWNyby5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcW1wiICsga2V5ICsgXCJcXFxcXFxdXCIsICdnbScpLCB2YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gVVJMTWFjcm87XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VEdXJhdGlvbjogZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvblN0cikge1xyXG4gICAgdmFyIGR1cmF0aW9uUmVnZXggPSAvKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZFxcZFxcZCkpPy87XHJcbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcclxuXHJcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGR1cmF0aW9uU3RyKSkge1xyXG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICBkdXJhdGlvbkluTXMgPSBwYXJzZUhvdXJzVG9NcyhtYXRjaFsxXSkgKyBwYXJzZU1pblRvTXMobWF0Y2hbMl0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzNdKSArIHBhcnNlSW50KG1hdGNoWzVdIHx8IDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xyXG5cclxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KGhvdXJTdHIsIDEwKSAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlTWluVG9NcyhtaW5TdHIpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwYXJzZUltcHJlc3Npb25zOiBmdW5jdGlvbiBwYXJzZUltcHJlc3Npb25zKGltcHJlc3Npb25zKSB7XHJcbiAgICBpZiAoaW1wcmVzc2lvbnMpIHtcclxuICAgICAgaW1wcmVzc2lvbnMgPSB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgPyBpbXByZXNzaW9ucyA6IFtpbXByZXNzaW9uc107XHJcbiAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkoaW1wcmVzc2lvbnMsIGZ1bmN0aW9uIChpbXByZXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGltcHJlc3Npb24ua2V5VmFsdWUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gaW1wcmVzc2lvbi5rZXlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfSxcclxuXHJcblxyXG4gIC8vV2UgYXNzdW1lIHRoYXQgdGhlIHByb2dyZXNzIGlzIGdvaW5nIHRvIGFycml2ZSBpbiBtaWxsaXNlY29uZHNcclxuICBmb3JtYXRQcm9ncmVzczogZnVuY3Rpb24gZm9ybWF0UHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcclxuICAgIHZhciBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzO1xyXG4gICAgaG91cnMgPSBwcm9ncmVzcyAvICg2MCAqIDYwICogMTAwMCk7XHJcbiAgICBob3VycyA9IE1hdGguZmxvb3IoaG91cnMpO1xyXG4gICAgbWludXRlcyA9IChwcm9ncmVzcyAvICg2MCAqIDEwMDApKSAlIDYwO1xyXG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IobWludXRlcyk7XHJcbiAgICBzZWNvbmRzID0gKHByb2dyZXNzIC8gMTAwMCkgJSA2MDtcclxuICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKHNlY29uZHMpO1xyXG4gICAgbWlsbGlzZWNvbmRzID0gcHJvZ3Jlc3MgJSAxMDAwO1xyXG4gICAgcmV0dXJuIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKGhvdXJzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKG1pbnV0ZXMsIDIpICsgJzonICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMoc2Vjb25kcywgMikgKyAnLicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaWxsaXNlY29uZHMsIDMpO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlT2Zmc2V0OiBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoaXNQZXJjZW50YWdlKG9mZnNldCkpIHtcclxuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFzdFV0aWwucGFyc2VEdXJhdGlvbihvZmZzZXQpO1xyXG5cclxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG9mZnNldCkge1xyXG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XHJcbiAgICAgIHJldHVybiBwZXJjZW50YWdlUmVnZXgudGVzdChvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBlcmNlbnRhZ2UocGVyY2VudFN0ciwgZHVyYXRpb24pIHtcclxuICAgICAgaWYgKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KSB7XHJcbiAgICAgIHJldHVybiBxdWFudGl0eSAqIHBlcmNlbnQgLyAxMDA7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIC8vTGlzdCBvZiBzdXBwb3J0ZWQgVlBBSUQgdGVjaG5vbG9naWVzXHJcbiAgVlBBSURfdGVjaHM6IFtcclxuICAgIFZQQUlERmxhc2hUZWNoLFxyXG4gICAgVlBBSURIVE1MNVRlY2hcclxuICBdLFxyXG5cclxuICBpc1ZQQUlEOiBmdW5jdGlvbiBpc1ZQQUlETWVkaWFGaWxlKG1lZGlhRmlsZSkge1xyXG4gICAgcmV0dXJuICEhbWVkaWFGaWxlICYmIG1lZGlhRmlsZS5hcGlGcmFtZXdvcmsgPT09ICdWUEFJRCc7XHJcbiAgfSxcclxuXHJcbiAgZmluZFN1cHBvcnRlZFZQQUlEVGVjaDogZnVuY3Rpb24gZmluZFN1cHBvcnRlZFZQQUlEVGVjaChtaW1lVHlwZSkge1xyXG4gICAgdmFyIGksIGxlbiwgVlBBSURUZWNoO1xyXG5cclxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuVlBBSURfdGVjaHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgICAgVlBBSURUZWNoID0gdGhpcy5WUEFJRF90ZWNoc1tpXTtcclxuICAgICAgaWYgKFZQQUlEVGVjaC5zdXBwb3J0cyhtaW1lVHlwZSkpIHtcclxuICAgICAgICByZXR1cm4gVlBBSURUZWNoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9LFxyXG5cclxuICBpc0ZsYXNoU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0ZsYXNoU3VwcG9ydGVkKCkge1xyXG4gICAgcmV0dXJuIFZQQUlERkxBU0hDbGllbnQuaXNTdXBwb3J0ZWQoKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBOZWNlc3Nhcnkgc3RlcCBmb3IgVlBBSURGTEFTaENsaWVudCB0byBrbm93IGlmIGZsYXNoIGlzIHN1cHBvcnRlZCBhbmQgbm90IGJsb2NrZWQuXHJcbiAgICogSU1QT1JUQU5UIE5PVEU6IFRoaXMgaXMgYW4gYXN5bmMgdGVzdCBhbmQgbmVlZHMgdG8gYmUgcnVuIGFzIHNvb24gYXMgcG9zc2libGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdnBhaWRGbGFzaExvYWRlclBhdGggdGhlIHBhdGggdG8gdGhlIHZwYWlkRmxhc2hMb2FkZXIgc3dmIG9iai5cclxuICAgKi9cclxuICBydW5GbGFzaFN1cHBvcnRDaGVjazogZnVuY3Rpb24gcnVuRmxhc2hTdXBwb3J0Q2hlY2sodnBhaWRGbGFzaExvYWRlclBhdGgpIHtcclxuICAgIFZQQUlERkxBU0hDbGllbnQucnVuRmxhc2hUZXN0KHtkYXRhOiB2cGFpZEZsYXNoTG9hZGVyUGF0aH0pO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhc3RVdGlsO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG5mdW5jdGlvbiBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURBZFVuaXRXcmFwcGVyKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpO1xyXG4gIH1cclxuICBzYW5pdHlDaGVjayh2cGFpZEFkVW5pdCwgb3B0cyk7XHJcblxyXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxpdGllcy5leHRlbmQoe30sIG9wdHMpO1xyXG5cclxuICB0aGlzLl9hZFVuaXQgPSB2cGFpZEFkVW5pdDtcclxuXHJcbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGFkVW5pdCwgb3B0cykge1xyXG4gICAgaWYgKCFhZFVuaXQgfHwgIVZQQUlEQWRVbml0V3JhcHBlci5jaGVja1ZQQUlESW50ZXJmYWNlKGFkVW5pdCkpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURBZFVuaXRXcmFwcGVyLCB0aGUgcGFzc2VkIFZQQUlEIGFkVW5pdCBkb2VzIG5vdCBmdWxseSBpbXBsZW1lbnQgdGhlIFZQQUlEIGludGVyZmFjZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzT2JqZWN0KG9wdHMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIG9wdGlvbnMgaGFzaCAgYnV0IGdvdCAnXCIgKyBvcHRzICsgXCInXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKFwicmVzcG9uc2VUaW1lb3V0XCIgaW4gb3B0cykgfHwgIXV0aWxpdGllcy5pc051bWJlcihvcHRzLnJlc3BvbnNlVGltZW91dCkgKXtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgZXhwZWN0ZWQgcmVzcG9uc2VUaW1lb3V0IGluIG9wdGlvbnNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZSA9IGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UoVlBBSURBZFVuaXQpIHtcclxuICAvL05PVEU6IHNraXBBZCBpcyBub3QgcGFydCBvZiB0aGUgbWV0aG9kIGxpc3QgYmVjYXVzZSBpdCBvbmx5IGFwcGVhcnMgaW4gVlBBSUQgMi4wIGFuZCB3ZSBzdXBwb3J0IFZQQUlEIDEuMFxyXG4gIHZhciBWUEFJREludGVyZmFjZU1ldGhvZHMgPSBbXHJcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsICdpbml0QWQnLCAnc3RhcnRBZCcsICdzdG9wQWQnLCAncmVzaXplQWQnLCAncGF1c2VBZCcsICdleHBhbmRBZCcsICdjb2xsYXBzZUFkJ1xyXG4gIF07XHJcblxyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBWUEFJREludGVyZmFjZU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGlmICghVlBBSURBZFVuaXQgfHwgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKFZQQUlEQWRVbml0W1ZQQUlESW50ZXJmYWNlTWV0aG9kc1tpXV0pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gY2FuU3Vic2NyaWJlVG9FdmVudHMoVlBBSURBZFVuaXQpICYmIGNhblVuc3Vic2NyaWJlRnJvbUV2ZW50cyhWUEFJREFkVW5pdCk7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuXHJcbiAgZnVuY3Rpb24gY2FuU3Vic2NyaWJlVG9FdmVudHMoYWRVbml0KSB7XHJcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoYWRVbml0KSB7XHJcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnVuc3Vic2NyaWJlKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0Lm9mZik7XHJcblxyXG4gIH1cclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuYWRVbml0QXN5bmNDYWxsID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcclxuICB2YXIgbWV0aG9kID0gYXJncy5zaGlmdCgpO1xyXG4gIHZhciBjYiA9IGFyZ3MucG9wKCk7XHJcbiAgdmFyIHRpbWVvdXRJZDtcclxuXHJcbiAgc2FuaXR5Q2hlY2sobWV0aG9kLCBjYiwgdGhpcy5fYWRVbml0KTtcclxuICBhcmdzLnB1c2god3JhcENhbGxiYWNrKCkpO1xyXG5cclxuICB0aGlzLl9hZFVuaXRbbWV0aG9kXS5hcHBseSh0aGlzLl9hZFVuaXQsIGFyZ3MpO1xyXG4gIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgdGltZW91dElkID0gbnVsbDtcclxuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgYSByZXNwb25zZSBvbiBjYWxsICdcIiArIG1ldGhvZCArIFwiJ1wiKSk7XHJcbiAgICBjYiA9IHV0aWxpdGllcy5ub29wO1xyXG4gIH0sIHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQpO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sobWV0aG9kLCBjYiwgYWRVbml0KSB7XHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhtZXRob2QpIHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXRbbWV0aG9kXSkpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci5hZFVuaXRBc3luY0NhbGwsIGludmFsaWQgbWV0aG9kIG5hbWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci5hZFVuaXRBc3luY0NhbGwsIG1pc3NpbmcgY2FsbGJhY2tcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgIH1cclxuICAgICAgY2IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgdmFyIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQuYWRkRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQuc3Vic2NyaWJlIHx8IHRoaXMuX2FkVW5pdC5vbjtcclxuICBhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2dE5hbWUsIGhhbmRsZXIpIHtcclxuICB2YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5yZW1vdmVFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC51bnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub2ZmO1xyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLl9hZFVuaXQsIGV2dE5hbWUsIGhhbmRsZXIpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS53YWl0Rm9yRXZlbnQgPSBmdW5jdGlvbiAoZXZ0TmFtZSwgY2IsIGNvbnRleHQpIHtcclxuICB2YXIgdGltZW91dElkO1xyXG4gIHNhbml0eUNoZWNrKGV2dE5hbWUsIGNiKTtcclxuICBjb250ZXh0ID0gY29udGV4dCB8fCBudWxsO1xyXG5cclxuICB0aGlzLm9uKGV2dE5hbWUsIHJlc3BvbnNlTGlzdGVuZXIpO1xyXG5cclxuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCB0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGV2ZW50ICdcIiArIGV2dE5hbWUgKyBcIidcIikpO1xyXG4gICAgdGltZW91dElkID0gbnVsbDtcclxuICAgIGNiID0gdXRpbGl0aWVzLm5vb3A7XHJcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhldnROYW1lLCBjYikge1xyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoZXZ0TmFtZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIG1pc3NpbmcgZXZ0IG5hbWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIG1pc3NpbmcgY2FsbGJhY2tcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNwb25zZUxpc3RlbmVyKCkge1xyXG4gICAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJyYXlMaWtlT2JqVG9BcnJheShhcmd1bWVudHMpO1xyXG5cclxuICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xyXG4gICAgY2IuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gVlBBSUQgTUVUSE9EU1xyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmhhbmRzaGFrZVZlcnNpb24gPSBmdW5jdGlvbiAodmVyc2lvbiwgY2IpIHtcclxuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnaGFuZHNoYWtlVmVyc2lvbicsIHZlcnNpb24sIGNiKTtcclxufTtcclxuXHJcbi8qIGpzaGludCBtYXhwYXJhbXM6NiAqL1xyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEsIGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkTG9hZGVkJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKSB7XHJcbiAgLy8gTk9URTogQWRTaXplQ2hhbmdlIGV2ZW50IGlzIG9ubHkgc3VwcG9ydGVkIG9uIFZQQUlEIDIuMCBzbyBmb3IgdGhlIG1vbWVudCB3ZSBhcmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG4gIC8vIGFuZCB3aWxsIGFzc3VtZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmluZSBhZnRlciB0aGUgYXN5bmMgY2FsbFxyXG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdyZXNpemVBZCcsIHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYik7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTdGFydGVkJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5zdGFydEFkKCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnN0b3BBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFN0b3BwZWQnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGF1c2VkJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5wYXVzZUFkKCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGxheWluZycsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQucmVzdW1lQWQoKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRFeHBhbmRlZENoYW5nZScsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuZXhwYW5kQWQoKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5jb2xsYXBzZUFkKCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFNraXBwZWQnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LnNraXBBZCgpO1xyXG59O1xyXG5cclxuLy9WUEFJRCBwcm9wZXJ0eSBnZXR0ZXJzXHJcbltcclxuICAnYWRMaW5lYXInLFxyXG4gICdhZFdpZHRoJyxcclxuICAnYWRIZWlnaHQnLFxyXG4gICdhZEV4cGFuZGVkJyxcclxuICAnYWRTa2lwcGFibGVTdGF0ZScsXHJcbiAgJ2FkUmVtYWluaW5nVGltZScsXHJcbiAgJ2FkRHVyYXRpb24nLFxyXG4gICdhZFZvbHVtZScsXHJcbiAgJ2FkQ29tcGFuaW9ucycsXHJcbiAgJ2FkSWNvbnMnXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcclxuICB2YXIgZ2V0dGVyTmFtZSA9ICdnZXQnICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocHJvcGVydHkpO1xyXG5cclxuICBWUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlW2dldHRlck5hbWVdID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgICB0aGlzLmFkVW5pdEFzeW5jQ2FsbChnZXR0ZXJOYW1lLCBjYik7XHJcbiAgfTtcclxufSk7XHJcblxyXG4vL1ZQQUlEIHByb3BlcnR5IHNldHRlcnNcclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2Ipe1xyXG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdzZXRBZFZvbHVtZScsdm9sdW1lLCBjYik7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0V3JhcHBlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIE1pbWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL21pbWV0eXBlcycpO1xyXG5cclxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XHJcblxyXG52YXIgVlBBSURGTEFTSENsaWVudCA9IHJlcXVpcmUoJ1ZQQUlERkxBU0hDbGllbnQvanMvVlBBSURGTEFTSENsaWVudCcpO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xyXG5cclxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XHJcblxyXG5mdW5jdGlvbiBWUEFJREZsYXNoVGVjaChtZWRpYUZpbGUsIHNldHRpbmdzKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlERmxhc2hUZWNoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWUEFJREZsYXNoVGVjaChtZWRpYUZpbGUpO1xyXG4gIH1cclxuICBzYW5pdHlDaGVjayhtZWRpYUZpbGUpO1xyXG4gIHRoaXMubmFtZSA9ICd2cGFpZC1mbGFzaCc7XHJcbiAgdGhpcy5tZWRpYUZpbGUgPSBtZWRpYUZpbGU7XHJcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XHJcbiAgdGhpcy52cGFpZEZsYXNoQ2xpZW50ID0gbnVsbDtcclxuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcblxyXG4gIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcclxuICAgIGlmICghbWVkaWFGaWxlIHx8ICF1dGlsaXRpZXMuaXNTdHJpbmcobWVkaWFGaWxlLnNyYykpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURGbGFzaFRlY2gsIGludmFsaWQgTWVkaWFGaWxlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5WUEFJREZsYXNoVGVjaC5WUEFJREZMQVNIQ2xpZW50ID0gVlBBSURGTEFTSENsaWVudDtcclxuXHJcblZQQUlERmxhc2hUZWNoLnN1cHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICByZXR1cm4gKE1pbWVUeXBlcy5mbGFzaC5pbmRleE9mKHR5cGUpID4gLTEpICYmIFZQQUlERmxhc2hUZWNoLlZQQUlERkxBU0hDbGllbnQuaXNTdXBwb3J0ZWQoKTtcclxufTtcclxuXHJcblZQQUlERmxhc2hUZWNoLnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEZsYXNoQ3JlYXRpdmUoY29udGFpbmVyRWwsIG9iamVjdEVsLCBjYWxsYmFjaykge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuICB2YXIgZmxhc2hDbGllbnRPcHRzID0gdGhpcy5zZXR0aW5ncyAmJiB0aGlzLnNldHRpbmdzLnZwYWlkRmxhc2hMb2FkZXJQYXRoID8ge2RhdGE6IHRoaXMuc2V0dGluZ3MudnBhaWRGbGFzaExvYWRlclBhdGh9IDogdW5kZWZpbmVkO1xyXG4gIHNhbml0eUNoZWNrKGNvbnRhaW5lckVsLCBjYWxsYmFjayk7XHJcblxyXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcclxuXHJcbiAgbG9nZ2VyLmRlYnVnIChcIjxWUEFJREZsYXNoVGVjaC5sb2FkQWRVbml0PiBsb2FkaW5nIFZQQUlERkxBU0hDbGllbnQgd2l0aCBvcHRzOlwiLCBmbGFzaENsaWVudE9wdHMpO1xyXG5cclxuICB0aGlzLnZwYWlkRmxhc2hDbGllbnQgPSBuZXcgVlBBSURGbGFzaFRlY2guVlBBSURGTEFTSENsaWVudChjb250YWluZXJFbCwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZXIuaW5mbyAoXCI8VlBBSURGbGFzaFRlY2gubG9hZEFkVW5pdD4gY2FsbGluZyBWUEFJREZMQVNIQ2xpZW50LmxvYWRBZFVuaXQoKTsgdGhhdC5tZWRpYUZpbGU6XCIsIHRoYXQubWVkaWFGaWxlKTtcclxuICAgIHRoYXQudnBhaWRGbGFzaENsaWVudC5sb2FkQWRVbml0KHRoYXQubWVkaWFGaWxlLnNyYywgY2FsbGJhY2spO1xyXG4gIH0sIGZsYXNoQ2xpZW50T3B0cyk7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhjb250YWluZXIsIGNiKSB7XHJcblxyXG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KGNvbnRhaW5lcikpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURGbGFzaFRlY2gubG9hZEFkVW5pdCwgaW52YWxpZCBkb20gY29udGFpbmVyIGVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREZsYXNoVGVjaC5sb2FkQWRVbml0LCBtaXNzaW5nIHZhbGlkIGNhbGxiYWNrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURGbGFzaFRlY2gucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy52cGFpZEZsYXNoQ2xpZW50KSB7XHJcbiAgICB0cnl7XHJcbiAgICAgIHRoaXMudnBhaWRGbGFzaENsaWVudC5kZXN0cm95KCk7XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICBsb2dnZXIuZXJyb3IgKCdWQVNUIEVSUk9SOiB0cnlpbmcgdG8gdW5sb2FkIHRoZSBWUEFJRCBhZHVuaXQnKTtcclxuICAgIH1cclxuICAgIHRoaXMudnBhaWRGbGFzaENsaWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5jb250YWluZXJFbCkge1xyXG4gICAgZG9tLnJlbW92ZSh0aGlzLmNvbnRhaW5lckVsKTtcclxuICAgIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVlBBSURGbGFzaFRlY2g7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcclxuXHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xyXG5cclxudmFyIFZQQUlESFRNTDVDbGllbnQgPSByZXF1aXJlKCdWUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcclxuXHJcbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xyXG5cclxuZnVuY3Rpb24gVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKSB7XHJcblxyXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESFRNTDVUZWNoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWUEFJREhUTUw1VGVjaChtZWRpYUZpbGUpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXR5Q2hlY2sobWVkaWFGaWxlKTtcclxuXHJcbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWh0bWw1JztcclxuICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcclxuICB0aGlzLnZpZGVvRWwgPSBudWxsO1xyXG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcclxuXHJcbiAgdGhpcy5tZWRpYUZpbGUgPSBtZWRpYUZpbGU7XHJcblxyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1lZGlhRmlsZSkge1xyXG4gICAgICBpZiAoIW1lZGlhRmlsZSB8fCAhdXRpbGl0aWVzLmlzU3RyaW5nKG1lZGlhRmlsZS5zcmMpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUpO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5WUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50ID0gVlBBSURIVE1MNUNsaWVudDtcclxuXHJcblZQQUlESFRNTDVUZWNoLnN1cHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICByZXR1cm4gIXV0aWxpdGllcy5pc09sZElFKCkgJiYgTWltZVR5cGVzLmh0bWw1LmluZGV4T2YodHlwZSkgPiAtMTtcclxufTtcclxuXHJcblZQQUlESFRNTDVUZWNoLnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spIHtcclxuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spO1xyXG5cclxuICB0aGlzLmNvbnRhaW5lckVsID0gY29udGFpbmVyRWw7XHJcbiAgdGhpcy52aWRlb0VsID0gdmlkZW9FbDtcclxuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG5ldyBWUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50KGNvbnRhaW5lckVsLCB2aWRlb0VsLCB7fSk7XHJcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQubG9hZEFkVW5pdCh0aGlzLm1lZGlhRmlsZS5zcmMsIGNhbGxiYWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soY29udGFpbmVyLCB2aWRlbywgY2IpIHtcclxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudChjb250YWluZXIpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQodmlkZW8pIHx8IHZpZGVvLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ZpZGVvJykge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5NSVNTSU5HX0NBTExCQUNLKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xyXG4gIGlmICh0aGlzLnZwYWlkSFRNTENsaWVudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy52cGFpZEhUTUxDbGllbnQuZGVzdHJveSgpO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIGxvZ2dlci5lcnJvciAoJ1ZBU1QgRVJST1I6IHRyeWluZyB0byB1bmxvYWQgdGhlIFZQQUlEIGFkdW5pdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmICh0aGlzLmNvbnRhaW5lckVsKSB7XHJcbiAgICBkb20ucmVtb3ZlKHRoaXMuY29udGFpbmVyRWwpO1xyXG4gICAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIFBSRUZJWCA9ICdvbiBWUEFJREhUTUw1VGVjaCc7XHJcblZQQUlESFRNTDVUZWNoLklOVkFMSURfTUVESUFfRklMRSA9IFBSRUZJWCArICcsIGludmFsaWQgTWVkaWFGaWxlJztcclxuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMID0gUFJFRklYICsgJywgaW52YWxpZCBjb250YWluZXIgSHRtbEVsZW1lbnQnO1xyXG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9WSURFT19FTCA9IFBSRUZJWCArICcsIGludmFsaWQgSFRNTFZpZGVvRWxlbWVudCc7XHJcblZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0sgPSBQUkVGSVggKyAnLCBtaXNzaW5nIHZhbGlkIGNhbGxiYWNrJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNVRlY2g7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcclxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XHJcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RSZXNwb25zZScpO1xyXG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RUcmFja2VyJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL3Zhc3QvdmFzdFV0aWwnKTtcclxuXHJcbnZhciBWUEFJREFkVW5pdFdyYXBwZXIgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0V3JhcHBlcicpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xyXG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XHJcblxyXG5mdW5jdGlvbiBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREludGVncmF0b3IpKSB7XHJcbiAgICByZXR1cm4gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5WSUVXX01PREUgPSB7XHJcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxyXG4gICAgRlVMTFNDUkVFTjogXCJmdWxsc2NyZWVuXCIsXHJcbiAgICBUSFVNQk5BSUw6IFwidGh1bWJuYWlsXCJcclxuICB9O1xyXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjcmVhdGVWUEFJRENvbnRhaW5lckVsKHBsYXllcik7XHJcbiAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2VUaW1lb3V0OiA1MDAwLFxyXG4gICAgVlBBSURfVkVSU0lPTjogJzIuMCdcclxuICB9O1xyXG4gIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVWUEFJRENvbnRhaW5lckVsKCkge1xyXG4gICAgdmFyIGNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkb20uYWRkQ2xhc3MoY29udGFpbmVyRWwsICdWUEFJRC1jb250YWluZXInKTtcclxuICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShjb250YWluZXJFbCwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyRWw7XHJcblxyXG4gIH1cclxufVxyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5VlBhaWRBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xyXG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RJbnRlZ3JhdG9yLnBsYXlBZCwgbWlzc2luZyByZXF1aXJlZCBWQVNUUmVzcG9uc2UnKSk7XHJcbiAgfVxyXG5cclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIGxvZ2dlci5kZWJ1ZyAoXCI8VlBBSURJbnRlZ3JhdG9yLnBsYXlBZD4gbG9va2luZyBmb3Igc3VwcG9ydGVkIHRlY2guLi5cIik7XHJcbiAgdmFyIHRlY2ggPSB0aGlzLl9maW5kU3VwcG9ydGVkVGVjaCh2YXN0UmVzcG9uc2UsIHRoaXMuc2V0dGluZ3MpO1xyXG5cclxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xyXG5cclxuICB0aGlzLl9hZFVuaXQgPSBudWxsO1xyXG5cclxuICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcclxuXHJcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHRyaWdnZXJWcGFpZEFkRW5kKTtcclxuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHRyaWdnZXJWcGFpZEFkRW5kKTtcclxuICAgIHJlbW92ZUFkVW5pdCgpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAodGVjaCkge1xyXG4gICAgbG9nZ2VyLmluZm8gKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGZvdW5kIHRlY2g6IFwiLCB0ZWNoKTtcclxuXHJcbiAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICBmdW5jdGlvbiAobmV4dCkge1xyXG4gICAgICAgIG5leHQobnVsbCwgdGVjaCwgdmFzdFJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5fbG9hZEFkVW5pdC5iaW5kKHRoaXMpLFxyXG4gICAgICB0aGlzLl9wbGF5QWRVbml0LmJpbmQodGhpcyksXHJcbiAgICAgIHRoaXMuX2ZpbmlzaFBsYXlpbmcuYmluZCh0aGlzKVxyXG5cclxuICAgIF0sIGFkQ29tcGxldGUpO1xyXG5cclxuICAgIHRoaXMuX2FkVW5pdCA9IHtcclxuICAgICAgX3BhdXNlZDogdHJ1ZSxcclxuICAgICAgdHlwZTogJ1ZQQUlEJyxcclxuICAgICAgcGF1c2VBZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnBhdXNlQWQnKTtcclxuICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7Ly93ZSBtYWtlIHN1cmUgdGhhdCB0aGUgdmlkZW8gY29udGVudCBnZXRzIHN0b3BwZWQuXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc3VtZUFkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5yZXN1bWVBZCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBpc1BhdXNlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcclxuICAgICAgfSxcclxuICAgICAgZ2V0U3JjOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGVjaC5tZWRpYUZpbGU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2dnZXIuZGVidWcgKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGNvdWxkIG5vdCBmaW5kIHN1aXRhYmxlIHRlY2hcIik7XHJcbiAgICB2YXIgZXJyb3IgPSBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREludGVncmF0b3IucGxheUFkLCBjb3VsZCBub3QgZmluZCBhIHN1cHBvcnRlZCBtZWRpYUZpbGUnLCA0MDMpO1xyXG4gICAgYWRDb21wbGV0ZShlcnJvciwgdGhpcy5fYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIGFkQ29tcGxldGUoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKSB7XHJcbiAgICBpZiAoZXJyb3IgJiYgdmFzdFJlc3BvbnNlKSB7XHJcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IodmFzdFJlc3BvbnNlLCBlcnJvci5jb2RlKTtcclxuICAgIH1cclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xyXG4gICAgY2FsbGJhY2soZXJyb3IsIHZhc3RSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmlnZ2VyVnBhaWRBZEVuZCgpe1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XHJcbiAgICBpZiAodGVjaCkge1xyXG4gICAgICB0ZWNoLnVubG9hZEFkVW5pdCgpO1xyXG4gICAgfVxyXG4gICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLXZwYWlkLWFkJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluZFN1cHBvcnRlZFRlY2ggPSBmdW5jdGlvbiAodmFzdFJlc3BvbnNlLCBzZXR0aW5ncykge1xyXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdmFyIHZwYWlkTWVkaWFGaWxlcyA9IHZhc3RSZXNwb25zZS5tZWRpYUZpbGVzLmZpbHRlcih2YXN0VXRpbC5pc1ZQQUlEKTtcclxuICB2YXIgcHJlZmVycmVkVGVjaCA9IHNldHRpbmdzICYmIHNldHRpbmdzLnByZWZlcnJlZFRlY2g7XHJcbiAgdmFyIHNraXBwZWRTdXBwb3J0VGVjaHMgPSBbXTtcclxuICB2YXIgaSwgbGVuLCBtZWRpYUZpbGUsIFZQQUlEVGVjaCwgaXNQcmVmZXJlZFRlY2g7XHJcblxyXG4gIGZvciAoaSA9IDAsIGxlbiA9IHZwYWlkTWVkaWFGaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG4gICAgbWVkaWFGaWxlID0gdnBhaWRNZWRpYUZpbGVzW2ldO1xyXG4gICAgVlBBSURUZWNoID0gdmFzdFV0aWwuZmluZFN1cHBvcnRlZFZQQUlEVGVjaChtZWRpYUZpbGUudHlwZSk7XHJcblxyXG4gICAgLy8gbm8gc3VwcG9ydGVkIFZQQUlEIHRlY2ggZm91bmQsIHNraXAgbWVkaWFmaWxlXHJcbiAgICBpZiAoIVZQQUlEVGVjaCkgeyBjb250aW51ZTsgfVxyXG5cclxuICAgIC8vIGRvIHdlIGhhdmUgYSBwcmVmZXJlZCB0ZWNoLCBkb2VzIGl0IHBsYXkgdGhpcyBtZWRpYSBmaWxlID9cclxuICAgIGlzUHJlZmVyZWRUZWNoID0gcHJlZmVycmVkVGVjaCA/XHJcbiAgICAgIChtZWRpYUZpbGUudHlwZSA9PT0gcHJlZmVycmVkVGVjaCB8fCAoTWltZVR5cGVzW3ByZWZlcnJlZFRlY2hdICYmIE1pbWVUeXBlc1twcmVmZXJyZWRUZWNoXS5pbmRleE9mKG1lZGlhRmlsZS50eXBlKSA+IC0xICkpIDpcclxuICAgICAgZmFsc2U7XHJcblxyXG4gICAgLy8gb3VyIHByZWZlcmVkIHRlY2ggY2FuIHJlYWQgdGhpcyBtZWRpYWZpbGUsIGRlZmF1bHRpbmcgdG8gaXQuXHJcbiAgICBpZiAoaXNQcmVmZXJlZFRlY2gpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWUEFJRFRlY2gobWVkaWFGaWxlLCBzZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcHBlZFN1cHBvcnRUZWNocy5wdXNoKHsgbWVkaWFGaWxlOiBtZWRpYUZpbGUsIHRlY2g6IFZQQUlEVGVjaCB9KTtcclxuICB9XHJcblxyXG4gIGlmIChza2lwcGVkU3VwcG9ydFRlY2hzLmxlbmd0aCkge1xyXG4gICAgdmFyIGZpcnN0VGVjaCA9IHNraXBwZWRTdXBwb3J0VGVjaHNbMF07XHJcbiAgICByZXR1cm4gbmV3IGZpcnN0VGVjaC50ZWNoKGZpcnN0VGVjaC5tZWRpYUZpbGUsIHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVlBBSURBZFVuaXRXcmFwcGVyID0gZnVuY3Rpb24oYWRVbml0LCBzcmMsIHJlc3BvbnNlVGltZW91dCkge1xyXG4gIHJldHVybiBuZXcgVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwge3NyYzogc3JjLCByZXNwb25zZVRpbWVvdXQ6IHJlc3BvbnNlVGltZW91dH0pO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbG9hZEFkVW5pdCA9IGZ1bmN0aW9uICh0ZWNoLCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIHZhciB2anNUZWNoRWwgPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcclxuICB2YXIgcmVzcG9uc2VUaW1lb3V0ID0gdGhpcy5zZXR0aW5ncy5yZXNwb25zZVRpbWVvdXQgfHwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dDtcclxuICB0ZWNoLmxvYWRBZFVuaXQodGhpcy5jb250YWluZXJFbCwgdmpzVGVjaEVsLCBmdW5jdGlvbiAoZXJyb3IsIGFkVW5pdCkge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIFdyYXBwZWRBZFVuaXQgPSB0aGF0Ll9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB0ZWNoLm1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlVGltZW91dCk7XHJcbiAgICAgIHZhciB0ZWNoQ2xhc3MgPSAndmpzLScgKyB0ZWNoLm5hbWUgKyAnLWFkJztcclxuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCB0ZWNoQ2xhc3MpO1xyXG4gICAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSx0ZWNoQ2xhc3MpO1xyXG4gICAgICB9KTtcclxuICAgICAgbmV4dChudWxsLCBXcmFwcGVkQWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBuZXh0KGUsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlBZFVuaXQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgICAgIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfSxcclxuICAgIHRoaXMuX2hhbmRzaGFrZS5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5faW5pdEFkLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fbGlua1BsYXllckNvbnRyb2xzLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9zdGFydEFkLmJpbmQodGhpcylcclxuICBdLCBjYWxsYmFjayk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9oYW5kc2hha2UgPSBmdW5jdGlvbiBoYW5kc2hha2UoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICBhZFVuaXQuaGFuZHNoYWtlVmVyc2lvbih0aGlzLm9wdGlvbnMuVlBBSURfVkVSU0lPTiwgZnVuY3Rpb24gKGVycm9yLCB2ZXJzaW9uKSB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmVyc2lvbiAmJiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikpIHtcclxuICAgICAgcmV0dXJuIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0KG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5faGFuZHNoYWtlLCB1bnN1cHBvcnRlZCB2ZXJzaW9uIFwiJyArIHZlcnNpb24gKyAnXCInKSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikge1xyXG4gICAgdmFyIG1ham9yTnVtID0gbWFqb3IodmVyc2lvbik7XHJcbiAgICByZXR1cm4gbWFqb3JOdW0gPj0gMSAmJiBtYWpvck51bSA8PSAyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFqb3IodmVyc2lvbikge1xyXG4gICAgdmFyIHBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5faW5pdEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgdmFyIHRlY2ggPSB0aGlzLnBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xyXG4gIGFkVW5pdC5pbml0QWQoZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0LCB0aGlzLlZJRVdfTU9ERS5OT1JNQUwsIC0xLCB7QWRQYXJhbWV0ZXJzOiB2YXN0UmVzcG9uc2UuYWRQYXJhbWV0ZXJzIHx8ICcnfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKSB7XHJcbiAgcmV0dXJuIG5ldyBWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciBhZFVuaXRTcmMgPSBhZFVuaXQub3B0aW9ucy5zcmM7XHJcbiAgdmFyIHRyYWNrZXIgPSB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFNraXBwZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTa2lwcGVkJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkSW1wcmVzc2lvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEltcHJlc3Npb24nKTtcclxuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkU3RhcnRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0YXJ0ZWQnKTtcclxuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcclxuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVmlkZW9TdGFydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvU3RhcnQnKTtcclxuICAgIHRyYWNrZXIudHJhY2tTdGFydCgpO1xyXG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRQbGF5aW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGxheWluZycpO1xyXG4gICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xyXG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRQYXVzZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQYXVzZWQnKTtcclxuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xyXG4gICAgbm90aWZ5UGF1c2VUb1BsYXllcigpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBub3RpZnlQbGF5VG9QbGF5ZXIoKXtcclxuICAgIGlmKHRoYXQuX2FkVW5pdCAmJiB0aGF0Ll9hZFVuaXQuaXNQYXVzZWQoKSl7XHJcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigncGxheScpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKSB7XHJcbiAgICBpZih0aGF0Ll9hZFVuaXQpe1xyXG4gICAgICB0aGF0Ll9hZFVuaXQuX3BhdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigncGF1c2UnKTtcclxuICB9XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0ZpcnN0UXVhcnRpbGUnKTtcclxuICAgIHRyYWNrZXIudHJhY2tGaXJzdFF1YXJ0aWxlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb01pZHBvaW50JywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9NaWRwb2ludCcpO1xyXG4gICAgdHJhY2tlci50cmFja01pZHBvaW50KCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb1RoaXJkUXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1RoaXJkUXVhcnRpbGUnKTtcclxuICAgIHRyYWNrZXIudHJhY2tUaGlyZFF1YXJ0aWxlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb0NvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZScpO1xyXG4gICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRDbGlja1RocnUnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkQ2xpY2tUaHJ1Jyk7XHJcbiAgICB2YXIgdXJsID0gZGF0YS51cmw7XHJcbiAgICB2YXIgcGxheWVySGFuZGxlcyA9IGRhdGEucGxheWVySGFuZGxlcztcclxuICAgIHZhciBjbGlja1RocnVVcmwgPSB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh1cmwpID8gdXJsIDogZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwodmFzdFJlc3BvbnNlLmNsaWNrVGhyb3VnaCk7XHJcblxyXG4gICAgdHJhY2tlci50cmFja0NsaWNrKCk7XHJcbiAgICBpZiAocGxheWVySGFuZGxlcyAmJiBjbGlja1RocnVVcmwpIHtcclxuICAgICAgd2luZG93Lm9wZW4oY2xpY2tUaHJ1VXJsLCAnX2JsYW5rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8pIHtcclxuICAgICAgdmFyIHZhcmlhYmxlcyA9IHtcclxuICAgICAgICBBU1NFVFVSSTogYWRVbml0Lm9wdGlvbnMuc3JjLFxyXG4gICAgICAgIENPTlRFTlRQTEFZSEVBRDogMCAvL0luIFZQQUlEIHRoZXJlIGlzIG5vIG1ldGhvZCB0byBrbm93IHRoZSBjdXJyZW50IHRpbWUgZnJvbSB0aGUgYWRVbml0XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckFjY2VwdEludml0YXRpb24nKTtcclxuICAgIHRyYWNrZXIudHJhY2tBY2NlcHRJbnZpdGF0aW9uKCk7XHJcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbkxpbmVhcigpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVXNlckNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckNsb3NlJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2UoKTtcclxuICAgIHRyYWNrZXIudHJhY2tDbG9zZUxpbmVhcigpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVXNlck1pbmltaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlck1pbmltaXplJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrQ29sbGFwc2UoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkRXJyb3InKTtcclxuICAgIC8vTk9URTogd2UgdHJhY2sgZXJyb3JzIGNvZGUgOTAxLCBhcyBub3RlZCBpbiBWQVNUIDMuMFxyXG4gICAgdHJhY2tlci50cmFja0Vycm9yV2l0aENvZGUoOTAxKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZvbHVtZUNoYW5nZScpO1xyXG4gICAgdmFyIGxhc3RWb2x1bWUgPSBwbGF5ZXIudm9sdW1lKCk7XHJcbiAgICBhZFVuaXQuZ2V0QWRWb2x1bWUoZnVuY3Rpb24gKGVycm9yLCBjdXJyZW50Vm9sdW1lKSB7XHJcbiAgICAgIGlmIChsYXN0Vm9sdW1lICE9PSBjdXJyZW50Vm9sdW1lKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRWb2x1bWUgPT09IDAgJiYgbGFzdFZvbHVtZSA+IDApIHtcclxuICAgICAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudFZvbHVtZSA+IDAgJiYgbGFzdFZvbHVtZSA9PT0gMCkge1xyXG4gICAgICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheWVyLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciB1cGRhdGVWaWV3U2l6ZSA9IHJlc2l6ZUFkLmJpbmQodGhpcywgcGxheWVyLCBhZFVuaXQsIHRoaXMuVklFV19NT0RFKTtcclxuICB2YXIgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQgPSB1dGlsaXRpZXMudGhyb3R0bGUodXBkYXRlVmlld1NpemUsIDEwMCk7XHJcbiAgdmFyIGF1dG9SZXNpemUgPSB0aGlzLnNldHRpbmdzLmF1dG9SZXNpemU7XHJcblxyXG4gIGlmIChhdXRvUmVzaXplKSB7XHJcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XHJcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcclxuICB9XHJcblxyXG4gIHBsYXllci5vbigndmFzdC5yZXNpemUnLCB1cGRhdGVWaWV3U2l6ZSk7XHJcbiAgcGxheWVyLm9uKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xyXG4gIHBsYXllci5vbigndnBhaWQucmVzdW1lQWQnLCByZXN1bWVBZFVuaXQpO1xyXG5cclxuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci5vZmYoJ3Zhc3QucmVzaXplJywgdXBkYXRlVmlld1NpemUpO1xyXG4gICAgcGxheWVyLm9mZigndnBhaWQucGF1c2VBZCcsIHBhdXNlQWRVbml0KTtcclxuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcclxuXHJcbiAgICBpZiAoYXV0b1Jlc2l6ZSkge1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XHJcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHBhdXNlQWRVbml0KCkge1xyXG4gICAgYWRVbml0LnBhdXNlQWQodXRpbGl0aWVzLm5vb3ApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzdW1lQWRVbml0KCkge1xyXG4gICAgYWRVbml0LnJlc3VtZUFkKHV0aWxpdGllcy5ub29wKTtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgdmFyIHNraXBCdXR0b247XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG5cclxuICBhZFVuaXQub24oJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCB1cGRhdGVTa2lwQnV0dG9uU3RhdGUpO1xyXG5cclxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNraXBCdXR0b24pO1xyXG5cclxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnKTtcclxuICAgIGFkVW5pdC5nZXRBZFNraXBwYWJsZVN0YXRlKGZ1bmN0aW9uIChlcnJvciwgaXNTa2lwcGFibGUpIHtcclxuICAgICAgaWYgKGlzU2tpcHBhYmxlKSB7XHJcbiAgICAgICAgaWYgKCFza2lwQnV0dG9uKSB7XHJcbiAgICAgICAgICBhZGRTa2lwQnV0dG9uKHBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbW92ZVNraXBCdXR0b24ocGxheWVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHBsYXllcikge1xyXG4gICAgc2tpcEJ1dHRvbiA9IGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKTtcclxuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcclxuICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XHJcbiAgICBza2lwQnV0dG9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraXBCdXR0b24oKSB7XHJcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcclxuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcImVuYWJsZWRcIik7XHJcbiAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IFwiU2tpcCBhZFwiO1xyXG5cclxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGFkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XHJcblxyXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxyXG4gICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBza2lwQnV0dG9uO1xyXG4gIH1cclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2xpbmtQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuICBsaW5rVm9sdW1lQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0KTtcclxuICBsaW5rRnVsbFNjcmVlbkNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xyXG5cclxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIGxpbmtWb2x1bWVDb250cm9sKHBsYXllciwgYWRVbml0KSB7XHJcbiAgICBwbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIHVwZGF0ZUFkVW5pdFZvbHVtZSk7XHJcbiAgICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgdXBkYXRlUGxheWVyVm9sdW1lKTtcclxuXHJcbiAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGxheWVyLm9mZigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVBZFVuaXRWb2x1bWUoKSB7XHJcbiAgICAgIHZhciB2b2wgPSBwbGF5ZXIubXV0ZWQoKSA/IDAgOiBwbGF5ZXIudm9sdW1lKCk7XHJcbiAgICAgIGFkVW5pdC5zZXRBZFZvbHVtZSh2b2wsIGxvZ0Vycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJWb2x1bWUoKSB7XHJcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZvbHVtZUNoYW5nZScpO1xyXG4gICAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcclxuICAgICAgYWRVbml0LmdldEFkVm9sdW1lKGZ1bmN0aW9uIChlcnJvciwgdm9sKSB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICBsb2dFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChsYXN0Vm9sdW1lICE9PSB2b2wpIHtcclxuICAgICAgICAgICAgcGxheWVyLnZvbHVtZSh2b2wpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsaW5rRnVsbFNjcmVlbkNvbnRyb2wocGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSkge1xyXG4gICAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGF0LCBwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKTtcclxuXHJcbiAgICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZSk7XHJcblxyXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zdGFydEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG5cclxuICBhZFVuaXQuc3RhcnRBZChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xyXG4gICAgfVxyXG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluaXNoUGxheWluZyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICBhZFVuaXQub24oJ0FkU3RvcHBlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RvcHBlZCcpO1xyXG4gICBmaW5pc2hQbGF5aW5nQWQobnVsbCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgdmFyIGVyck1zZyA9IGVycm9yPyBlcnJvci5tZXNzYWdlIDogJ29uIFZQQUlESW50ZWdyYXRvciwgZXJyb3Igd2hpbGUgd2FpdGluZyBmb3IgdGhlIGFkVW5pdCB0byBmaW5pc2ggcGxheWluZyc7XHJcbiAgICBmaW5pc2hQbGF5aW5nQWQobmV3IFZBU1RFcnJvcihlcnJNc2cpKTtcclxuICB9KTtcclxuXHJcbiAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIGZpbmlzaFBsYXlpbmdBZChlcnJvcikge1xyXG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gIH1cclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKHJlc3BvbnNlLCBlcnJvckNvZGUpIHtcclxuICB2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3JDb2RlIHx8IDkwMX0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVzaXplQWQocGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSkge1xyXG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XHJcbiAgdmFyIGRpbWVuc2lvbiA9IGRvbS5nZXREaW1lbnNpb24odGVjaCk7XHJcbiAgdmFyIE1PREUgPSBwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgPyBWSUVXX01PREUuRlVMTFNDUkVFTiA6IFZJRVdfTU9ERS5OT1JNQUw7XHJcbiAgYWRVbml0LnJlc2l6ZUFkKGRpbWVuc2lvbi53aWR0aCwgZGltZW5zaW9uLmhlaWdodCwgTU9ERSwgbG9nRXJyb3IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvcikge1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgbG9nZ2VyLmVycm9yICgnRVJST1I6ICcgKyBlcnJvci5tZXNzYWdlLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESW50ZWdyYXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xyXG5cclxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWFkcy1sYWJlbCB2anMtY29udHJvbCB2anMtbGFiZWwtaGlkZGVuJztcclxuZWxlbWVudC5pbm5lckhUTUwgPSAnQWR2ZXJ0aXNlbWVudCc7XHJcblxyXG52YXIgQWRzTGFiZWxGYWN0b3J5ID0gZnVuY3Rpb24gKGJhc2VDb21wb25lbnQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLyoqIEBjb25zdHJ1Y3RvciAqLyBcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwbGF5ZXIub3B0aW9uc18ucGx1Z2luc1snYWRzLXNldHVwJ10uYWR2ZXJ0aXNtZW50TGFiZWwgPyBwbGF5ZXIub3B0aW9uc18ucGx1Z2luc1snYWRzLXNldHVwJ10uYWR2ZXJ0aXNtZW50TGFiZWwgOiAnQWR2ZXJ0aXNlbWVudCc7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZWwgPSBlbGVtZW50O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gV2UgYXN5bmNocm9ub3VzbHkgcmVwb3NpdGlvbiB0aGUgYWRzIGxhYmVsIGVsZW1lbnRcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWVDb21wID0gcGxheWVyLmNvbnRyb2xCYXIgJiYgKHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKFwidGltZXJDb250cm9sc1wiKSB8fCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcImN1cnJlbnRUaW1lRGlzcGxheVwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbWVDb21wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgY3VycmVudFRpbWVDb21wLmVsKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKGVsZW1lbnQsICd2anMtbGFiZWwtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWw6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07IFxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBZHNMYWJlbEZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGJhc2VWaWRlb0pzQ29tcG9uZW50ID0gdmlkZW9qcy5Db21wb25lbnQ7XHJcblxyXG52YXIgQWRzTGFiZWwgPSByZXF1aXJlKCcuL2Fkcy1sYWJlbCcpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcclxuXHJcbnZpZGVvanMuQWRzTGFiZWwgPSB2aWRlb2pzLkNvbXBvbmVudC5leHRlbmQoQWRzTGFiZWwpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogVGhlIGNvbXBvbmVudCB0aGF0IHNob3dzIGEgYmxhY2sgc2NyZWVuIHVudGlsIHRoZSBhZHMgcGx1Z2luIGhhcyBkZWNpZGVkIGlmIGl0IGNhbiBvciBpdCBjYW4gbm90IHBsYXkgdGhlIGFkLlxyXG4gKlxyXG4gKiBOb3RlOiBJbiBjYXNlIHlvdSB3b25kZXIgd2h5IGluc3RlYWQgb2YgdGhpcyBibGFjayBwb3N0ZXIgd2UgZG9uJ3QganVzdCBzaG93IHRoZSBzcGlubmVyIGxvYWRlci5cclxuICogICAgICAgSU9TIGRldmljZXMgZG8gbm90IHdvcmsgd2VsbCB3aXRoIGFuaW1hdGlvbnMgYW5kIHRoZSBicm93c2VyIGNocmFzaGVzIGZyb20gdGltZSB0byB0aW1lIFRoYXQgaXMgd2h5IHdlIGNob3NlIHRvXHJcbiAqICAgICAgIGhhdmUgYSBzZWNvbmRhcnkgYmxhY2sgcG9zdGVyLlxyXG4gKlxyXG4gKiAgICAgICBJdCBhbHNvIG1ha2VzIGl0IG11Y2ggbW9yZSBlYXNpZXIgZm9yIHRoZSB1c2VycyBvZiB0aGUgcGx1Z2luIHNpbmNlIGl0IGRvZXMgbm90IGNoYW5nZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlXHJcbiAqICAgICAgIHNwaW5uZXIgYW5kIHRoZSBwbGF5ZXIgd29ya3MgdGhlIHNhbWUgd2F5IHdpdGggYW5kIHdpdGhvdXQgdGhlIHBsdWdpbi5cclxuICpcclxuICogQHBhcmFtIHt2anMuUGxheWVyfE9iamVjdH0gcGxheWVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG52YXIgQmxhY2tQb3N0ZXJGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXHJcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICBvcHRpb25zLmVsID0gZWxlbWVudDtcclxuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWJsYWNrLXBvc3Rlcic7XHJcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgdmFyIHBvc3RlckltZyA9IHBsYXllci5nZXRDaGlsZCgncG9zdGVySW1hZ2UnKTtcclxuXHJcbiAgICAgIC8vV2UgbmVlZCB0byBkbyBpdCBhc3luY2hyb25vdXNseSB0byBiZSBzdXJlIHRoYXQgdGhlIGJsYWNrIHBvc3RlciBlbCBpcyBvbiB0aGUgZG9tLlxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKHBvc3RlckltZyAmJiBwbGF5ZXIgJiYgcGxheWVyLmVsKCkpIHtcclxuICAgICAgICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShlbGVtZW50LCBwb3N0ZXJJbWcuZWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH0sXHJcbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmxhY2tQb3N0ZXJGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBiYXNlVmlkZW9Kc0NvbXBvbmVudCA9IHZpZGVvanMuQ29tcG9uZW50O1xyXG5cclxudmFyIEJsYWNrUG9zdGVyID0gcmVxdWlyZSgnLi9ibGFjay1wb3N0ZXInKShiYXNlVmlkZW9Kc0NvbXBvbmVudCk7XHJcblxyXG52aWRlb2pzLkJsYWNrUG9zdGVyID0gdmlkZW9qcy5Db21wb25lbnQuZXh0ZW5kKEJsYWNrUG9zdGVyKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFZBU1RDbGllbnQgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUQ2xpZW50Jyk7XHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNURXJyb3InKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvdmFzdFV0aWwnKTtcclxuXHJcbnZhciBWQVNUSW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yJyk7XHJcbnZhciBWUEFJREludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yJyk7XHJcblxyXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi91dGlscy9hc3luYycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vdXRpbHMvZG9tJyk7XHJcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWQVNUUGx1Z2luKG9wdGlvbnMpIHtcclxuXHJcblxyXG4gICAgdmFyIHNuYXBzaG90O1xyXG4gICAgdmFyIHBvc3RzbmFwc2hvdDtcclxuICAgIHZhciBwbGF5ZXIgPSB0aGlzO1xyXG5cclxuICAgIHZhciB2YXN0Q2xpZW50T3B0aW9uID0gb3B0aW9ucy5hZENhbmNlbFRpbWVvdXQgPyB7c2tpcE9mZnNldDogb3B0aW9ucy5hZENhbmNlbFRpbWVvdXR9IDoge307XHJcbiAgICB2YXIgdmFzdCA9IG5ldyBWQVNUQ2xpZW50KHZhc3RDbGllbnRPcHRpb24pO1xyXG4gICAgdmFyIGFkc0NhbmNlbGVkID0gZmFsc2U7XHJcbiAgICB2YXIgcG9zdHJvbGxSdW5pbmcgPSBmYWxzZTtcclxuICAgIHZhciBwbGF5UHJlUm9sbE9uY2UgPSBmYWxzZTtcclxuICAgIHZhciBwbGF5UG9zdFJvbGxPbmNlID0gZmFsc2U7XHJcbiAgICB2YXIgZGVmYXVsdE9wdHMgPSB7XHJcbiAgICAgICAgLy8gbWF4aW11bSBhbW91bnQgb2YgdGltZSBpbiBtcyB0byB3YWl0IHRvIHJlY2VpdmUgYGFkc3JlYWR5YCBmcm9tIHRoZSBhZFxyXG4gICAgICAgIC8vIGltcGxlbWVudGF0aW9uIGFmdGVyIHBsYXkgaGFzIGJlZW4gcmVxdWVzdGVkLiBBZCBpbXBsZW1lbnRhdGlvbnMgYXJlXHJcbiAgICAgICAgLy8gZXhwZWN0ZWQgdG8gbG9hZCBhbnkgZHluYW1pYyBsaWJyYXJpZXMgYW5kIG1ha2UgYW55IHJlcXVlc3RzIHRvIGRldGVybWluZVxyXG4gICAgICAgIC8vIGFkIHBvbGljaWVzIGZvciBhIHZpZGVvIGR1cmluZyB0aGlzIHRpbWUuXHJcbiAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIC8vVE9ETzpmaW5pc2ggdGhpcyBJT1MgRklYXHJcbiAgICAgICAgLy9XaGVuZXZlciB5b3UgcGxheSBhbiBhZGQgb24gSU9TLCB0aGUgbmF0aXZlIHBsYXllciBraWNrcyBpbiBhbmQgd2UgbG9vc2UgY29udHJvbCBvZiBpdC4gT24gdmVyeSBoZWF2eSBwYWdlcyB0aGUgJ3BsYXknIGV2ZW50XHJcbiAgICAgICAgLy8gTWF5IG9jY3VyIGFmdGVyIHRoZSB2aWRlbyBjb250ZW50IGhhcyBhbHJlYWR5IHN0YXJ0ZWQuIFRoaXMgaXMgd3JvbmcgaWYgeW91IHdhbnQgdG8gcGxheSBhIHByZXJvbGwgYWQgdGhhdCBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHRoZSB1c2VyXHJcbiAgICAgICAgLy8gc3RhcnRzIHdhdGNoaW5nIHRoZSBjb250ZW50LiBUbyBwcmV2ZW50IHRoaXMgdXNlY1xyXG4gICAgICAgIGlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIC8vIG1heGltdW4gYW1vdW50IG9mIHRpbWUgZm9yIHRoZSBhZCB0byBhY3R1YWxseSBzdGFydCBwbGF5aW5nLiBJZiB0aGlzIHRpbWVvdXQgZ2V0c1xyXG4gICAgICAgIC8vIHRyaWdnZXJlZCB0aGUgYWRzIHdpbGwgYmUgY2FuY2VsbGVkXHJcbiAgICAgICAgYWRDYW5jZWxUaW1lb3V0OiAzMDAwLFxyXG4gICAgICAgIC8vIEJvb2xlYW4gZmxhZyB0aGF0IGNvbmZpZ3VyZXMgdGhlIHBsYXllciB0byBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2FpblxyXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHZpZGVvXHJcbiAgICAgICAgcGxheUFkQWx3YXlzOiBmYWxzZSxcclxuICAgICAgICAvLyBGbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhZHMgYnkgZGVmYXVsdC5cclxuICAgICAgICBhZHNFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIEJvb2xlYW4gZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgcmVzaXplIHdpdGggd2luZG93LnJlc2l6ZSBvciBvcmllbnRhdGlvbmNoYW5nZVxyXG4gICAgICAgIGF1dG9SZXNpemU6IHRydWUsXHJcbiAgICAgICAgLy8gUGF0aCB0byB0aGUgVlBBSUQgZmxhc2ggYWQncyBsb2FkZXJcclxuICAgICAgICB2cGFpZEZsYXNoTG9hZGVyUGF0aDogJy9WUEFJREZsYXNoLnN3ZicsXHJcbiAgICAgICAgLy8gdmVyYm9zaXR5IG9mIGNvbnNvbGUgbG9nZ2luZzpcclxuICAgICAgICAvLyAwIC0gZXJyb3JcclxuICAgICAgICAvLyAxIC0gZXJyb3IsIHdhcm5cclxuICAgICAgICAvLyAyIC0gZXJyb3IsIHdhcm4sIGluZm9cclxuICAgICAgICAvLyAzIC0gZXJyb3IsIHdhcm4sIGluZm8sIGxvZ1xyXG4gICAgICAgIC8vIDQgLSBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1Z1xyXG4gICAgICAgIHZlcmJvc2l0eTogMFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIHNldHRpbmdzID0gdXRpbGl0aWVzLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIG9wdGlvbnMgfHwge30pO1xyXG5cclxuICAgIGlmICh1dGlsaXRpZXMuaXNVbmRlZmluZWQoc2V0dGluZ3MuYWRUYWdVcmwpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MudXJsKSkge1xyXG4gICAgICAgIHNldHRpbmdzLmFkVGFnVXJsID0gc2V0dGluZ3MudXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoc2V0dGluZ3MuYWRUYWdVcmwpKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuYWRUYWdVcmwgPSB1dGlsaXRpZXMuZWNob0ZuKHNldHRpbmdzLmFkVGFnVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1hNTCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xyXG4gICAgICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgdGhlIHBhc3NlZCBhZFRhZ1hNTCBvcHRpb24gZG9lcyBub3QgY29udGFpbiBhIGZ1bmN0aW9uJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1VybCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xyXG4gICAgICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgbWlzc2luZyBhZFRhZ1VybCBvbiBvcHRpb25zIG9iamVjdCcpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc1VuZGVmaW5lZChzZXR0aW5ncy5hZFBvc3RUYWdVcmwpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MudXJsKSkge1xyXG4gICAgICAgIHNldHRpbmdzLmFkUG9zdFRhZ1VybCA9IHNldHRpbmdzLnVybDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKHNldHRpbmdzLmFkUG9zdFRhZ1VybCkpIHtcclxuICAgICAgICBzZXR0aW5ncy5hZFBvc3RUYWdVcmwgPSB1dGlsaXRpZXMuZWNob0ZuKHNldHRpbmdzLmFkUG9zdFRhZ1VybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdYTUwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkpIHtcclxuICAgICAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIHRoZSBwYXNzZWQgYWRUYWdYTUwgb3B0aW9uIGRvZXMgbm90IGNvbnRhaW4gYSBmdW5jdGlvbicpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdVcmwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkUG9zdFRhZ1VybCkpIHtcclxuICAgICAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIG1pc3NpbmcgYWRUYWdVcmwgb24gb3B0aW9ucyBvYmplY3QnKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGxvZ2dlci5zZXRWZXJib3NpdHkoMCk7XHJcblxyXG4gICAgdmFzdFV0aWwucnVuRmxhc2hTdXBwb3J0Q2hlY2soc2V0dGluZ3MudnBhaWRGbGFzaExvYWRlclBhdGgpOy8vIE5lY2Vzc2FyeSBzdGVwIGZvciBWUEFJREZMQVNIQ2xpZW50IHRvIHdvcmsuXHJcblxyXG4gICAgcGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyhwbGF5ZXIpO1xyXG5cclxuICAgIGlmIChzZXR0aW5ncy5wbGF5QWRBbHdheXMpIHtcclxuICAgICAgICAvLyBObyBtYXR0ZXIgd2hhdCBoYXBwZW5zIHdlIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluLlxyXG4gICAgICAgIHBsYXllci5vbigndmFzdC5jb250ZW50RW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LnJlc2V0Jyk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCB0cnlUb1BsYXlQcmVyb2xsQWQpO1xyXG5cclxuICAgIHBsYXllci5vbigndmFzdC5yZXNldCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL0lmIHdlIGFyZSByZXNldGluZyB0aGUgcGx1Z2luLCB3ZSBkb24ndCB3YW50IHRvIHJlc3RvcmUgdGhlIGNvbnRlbnRcclxuICAgICAgICBzbmFwc2hvdCA9IG51bGw7XHJcbiAgICAgICAgLy8gIHBsYXlQcmVSb2xsT25jZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjYW5jZWxBZHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBsYXllci5vbigndmFzdC5jb250ZW50RW5kJywgdHJ5VG9QbGF5UG9zdHJvbGxBZCk7XHJcblxyXG5cclxuICAgIHBsYXllci52YXN0ID0ge1xyXG4gICAgICAgIGlzRW5hYmxlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MuYWRzRW5hYmxlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MuYWRzRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHBsYXllci52YXN0O1xyXG5cclxuICAgIC8qKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xyXG4gICAgZnVuY3Rpb24gdHJ5VG9QbGF5UHJlcm9sbEFkKCkge1xyXG5cclxuICAgICAgICAvL1dlIHJlbW92ZSB0aGUgcG9zdGVyIHRvIHByZXZlbnQgZmxpY2tlcmluZyB3aGVuZXZlciB0aGUgY29udGVudCBzdGFydHMgcGxheWluZ1xyXG5cclxuICAgICAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcclxuXHJcblxyXG4vL21peGFzIGNoZWNrIHByZXJvbGwgb25jZVxyXG4gICAgICAgIGlmIChwbGF5UHJlUm9sbE9uY2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheVByZVJvbGxPbmNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVuZCddLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUFkVW5pdCgpO1xyXG4gICAgICAgICAgICByZXN0b3JlVmlkZW9Db250ZW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYmxvY2tQb3N0Um9sbCcpOyAvLyBNSVhBUyBibG9ja2luZyBwb3N0cm9sbFxyXG4gICAgICAgIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgICAgICAgIGNoZWNrQWRzRW5hYmxlZCxcclxuICAgICAgICAgICAgcHJlcGFyZVBsYXllckZvckFkLFxyXG4gICAgICAgICAgICBzdGFydEFkQ2FuY2VsVGltZW91dCxcclxuICAgICAgICAgICAgcGxheVByZXJvbGxBZFxyXG4gICAgICAgIF0sIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja0FkRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkRW5kJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5hZFVuaXQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci52YXN0LmFkVW5pdCA9IG51bGw7IC8vV2UgcmVtb3ZlIHRoZSBhZFVuaXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzdG9yZVZpZGVvQ29udGVudCgpIHtcclxuXHJcbiAgICAgICAgICAgIHNldHVwQ29udGVudEV2ZW50cygpO1xyXG4gICAgICAgICAgICBpZiAoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgICAgcGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpO1xyXG4gICAgICAgICAgICAgICAgLy9zbmFwc2hvdCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwQ29udGVudEV2ZW50cygpIHtcclxuICAgICAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldnQudHlwZSAhPT0gJ3BsYXlpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmNvbnRlbnRTdGFydCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ2VuZGVkJywgJ3Zhc3QucmVzZXQnLCAndmFzdC5maXJzdFBsYXknXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2VuZGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50RW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBZHNFbmFibGVkKG5leHQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5hZHNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ0FkcyBhcmUgbm90IGVuYWJsZWQnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmVwYXJlUGxheWVyRm9yQWQobmV4dCkge1xyXG4gICAgICAgICAgICBpZiAoY2FuUGxheVByZXJvbGxBZCgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc25hcHNob3QgPSBwbGF5ZXJVdGlscy5nZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgcG9zdHNuYXBzaG90ID0gcGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QocGxheWVyKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGFkZFNwaW5uZXJJY29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5wYXVzZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5leHQobmV3IFZBU1RFcnJvcigndmlkZW8gY29udGVudCBoYXMgYmVlbiBwbGF5aW5nIGJlZm9yZSBwcmVyb2xsIGFkJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYW5QbGF5UHJlcm9sbEFkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXV0aWxpdGllcy5pc0lQaG9uZSgpIHx8IHBsYXllci5jdXJyZW50VGltZSgpIDw9IHNldHRpbmdzLmlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBZENhbmNlbFRpbWVvdXQobmV4dCkge1xyXG4gICAgICAgICAgICB2YXIgYWRDYW5jZWxUaW1lb3V0SWQ7XHJcbiAgICAgICAgICAgIGFkc0NhbmNlbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ3RpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgdGhlIHZpZGVvIHRvIHN0YXJ0IHBsYXlpbmcnLCA0MDIpKTtcclxuICAgICAgICAgICAgfSwgc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCBjbGVhckFkQ2FuY2VsVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyQWRDYW5jZWxUaW1lb3V0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkQ2FuY2VsVGltZW91dElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFkQ2FuY2VsVGltZW91dElkKTtcclxuICAgICAgICAgICAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHQobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRTcGlubmVySWNvbigpIHtcclxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xyXG4gICAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU3Bpbm5lckljb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lckljb24oKSB7XHJcbiAgICAgICAgICAgIC8vSU1QT1JUQU5UIE5PVEU6IFdlIHJlbW92ZSB0aGUgc3Bpbm5lckljb24gYXN5bmNocm9ub3VzbHkgdG8gZ2l2ZSB0aW1lIHRvIHRoZSBicm93c2VyIHRvIHN0YXJ0IHRoZSB2aWRlby5cclxuICAgICAgICAgICAgLy8gSWYgd2UgcmVtb3ZlIGl0IHN5bmNocm9ub3VzbHkgd2Ugc2VlIGEgZmxhc2ggb2YgdGhlIGNvbnRlbnQgdmlkZW8gYmVmb3JlIHRoZSBhZCBzdGFydHMgcGxheWluZy5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyeVRvUGxheVBvc3Ryb2xsQWQoKSB7XHJcblxyXG4gICAgICAgIC8vIHBsYXllci50cmlnZ2VyKCd2YXN0LmJsb2NrUG9zdFJvbGwnKTtcclxuXHJcbiAgICAgICAgLy9XZSByZW1vdmUgdGhlIHBvc3RlciB0byBwcmV2ZW50IGZsaWNrZXJpbmcgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgc3RhcnRzIHBsYXlpbmdcclxuICAgICAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcclxuXHJcbi8vICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkRW5kJ10sIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3Zpbmcgb25jZScpO1xyXG4vLyAgICAgICAgICAgIHJlbW92ZUFkVW5pdCgpO1xyXG4vLyAgICAgICAgICAgIHJlc3RvcmVWaWRlb0NvbnRlbnQoKTtcclxuLy8gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYmxvY2tQb3N0Um9sbCcpO1xyXG5cclxuICAgICAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICAgICAgICBjaGVja0Fkc0VuYWJsZWQsXHJcbiAgICAgICAgICAgIHByZXBhcmVQbGF5ZXJGb3JBZCxcclxuICAgICAgICAgICAgc3RhcnRBZENhbmNlbFRpbWVvdXQsXHJcbiAgICAgICAgICAgIHBsYXlQb3N0cm9sbEFkXHJcbiAgICAgICAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRyYWNrQWRFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRFbmQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJ10sIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU2tpcCcpO1xyXG4gICAgICAgICAgICByZW1vdmVBZFVuaXQoKTtcclxuICAgICAgICAgICAgcmVzdG9yZVZpZGVvQ29udGVudCgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzZXRQcmVyb2xsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vbWl4YXMgdHJ5aW5nIHRvIHJlc2V0IHBsYXllciB0byBzdGFydFxyXG4gICAgICAgICAgICBwbGF5UHJlUm9sbE9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5ibG9ja1Bvc3RSb2xsJyk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0KSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBudWxsOyAvL1dlIHJlbW92ZSB0aGUgYWRVbml0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVWaWRlb0NvbnRlbnQoKSB7XHJcblxyXG4gICAgICAgICAgICBzZXR1cENvbnRlbnRFdmVudHMoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChwb3N0c25hcHNob3QpIHtcclxuICAgICAgICAgICAgICAgIHBvc3RzbmFwc2hvdC5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJVdGlscy5yZXN0b3JlUGxheWVyU25hcHNob3QocGxheWVyLCBwb3N0c25hcHNob3QpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc25hcHNob3QgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXR1cENvbnRlbnRFdmVudHMoKSB7XHJcbiAgICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZ0LnR5cGUgIT09ICdwbGF5aW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50U3RhcnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydlbmRlZCcsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdlbmRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudEVuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQWRzRW5hYmxlZChuZXh0KSB7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5hZHNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ0FkcyBhcmUgbm90IGVuYWJsZWQnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmVwYXJlUGxheWVyRm9yQWQobmV4dCkge1xyXG4gICAgICAgICAgICBpZiAoY2FuUGxheVByZXJvbGxBZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBzbmFwc2hvdCA9IHBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90KHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGFkZFNwaW5uZXJJY29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5wYXVzZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5leHQobmV3IFZBU1RFcnJvcigndmlkZW8gY29udGVudCBoYXMgYmVlbiBwbGF5aW5nIGJlZm9yZSBwcmVyb2xsIGFkJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYW5QbGF5UHJlcm9sbEFkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXV0aWxpdGllcy5pc0lQaG9uZSgpIHx8IHBsYXllci5jdXJyZW50VGltZSgpIDw9IHNldHRpbmdzLmlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBZENhbmNlbFRpbWVvdXQobmV4dCkge1xyXG4gICAgICAgICAgICB2YXIgYWRDYW5jZWxUaW1lb3V0SWQ7XHJcbiAgICAgICAgICAgIGFkc0NhbmNlbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ3RpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgdGhlIHZpZGVvIHRvIHN0YXJ0IHBsYXlpbmcnLCA0MDIpKTtcclxuICAgICAgICAgICAgfSwgc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCBjbGVhckFkQ2FuY2VsVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyQWRDYW5jZWxUaW1lb3V0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkQ2FuY2VsVGltZW91dElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFkQ2FuY2VsVGltZW91dElkKTtcclxuICAgICAgICAgICAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHQobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRTcGlubmVySWNvbigpIHtcclxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xyXG4gICAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU3Bpbm5lckljb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lckljb24oKSB7XHJcbiAgICAgICAgICAgIC8vSU1QT1JUQU5UIE5PVEU6IFdlIHJlbW92ZSB0aGUgc3Bpbm5lckljb24gYXN5bmNocm9ub3VzbHkgdG8gZ2l2ZSB0aW1lIHRvIHRoZSBicm93c2VyIHRvIHN0YXJ0IHRoZSB2aWRlby5cclxuICAgICAgICAgICAgLy8gSWYgd2UgcmVtb3ZlIGl0IHN5bmNocm9ub3VzbHkgd2Ugc2VlIGEgZmxhc2ggb2YgdGhlIGNvbnRlbnQgdmlkZW8gYmVmb3JlIHRoZSBhZCBzdGFydHMgcGxheWluZy5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYW5jZWxBZHMoKSB7XHJcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XHJcbiAgICAgICAgYWRzQ2FuY2VsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXlQcmVyb2xsQWQoY2FsbGJhY2spIHtcclxuICAgICAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICAgICAgICBnZXRWYXN0UmVzcG9uc2UsXHJcbiAgICAgICAgICAgIHBsYXlBZFxyXG4gICAgICAgIF0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBsYXlQb3N0cm9sbEFkKGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgICAgICAgIGdldFZhc3RQb3N0UmVzcG9uc2UsXHJcbiAgICAgICAgICAgIHBsYXlBZFxyXG4gICAgICAgIF0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYXN0UmVzcG9uc2UoY2FsbGJhY2spIHtcclxuICAgICAgICB2YXN0LmdldFZBU1RSZXNwb25zZShzZXR0aW5ncy5hZFRhZ1VybCA/IHNldHRpbmdzLmFkVGFnVXJsKCkgOiBzZXR0aW5ncy5hZFRhZ1hNTCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFzdFBvc3RSZXNwb25zZShjYWxsYmFjaykge1xyXG4gICAgICAgIHZhc3QuZ2V0VkFTVFJlc3BvbnNlKHNldHRpbmdzLmFkUG9zdFRhZ1VybCA/IHNldHRpbmdzLmFkUG9zdFRhZ1VybCgpIDogc2V0dGluZ3MuYWRUYWdYTUwsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIC8vVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gc3RvcCB0aGUgcGxheS4gVGhlICdwbGF5UHJlcm9sbFdhdGVyZmFsbCcgZW5kcyBpbiBhbiBpbmNvbnNpc3RlbnQgc2l0dWF0aW9uXHJcbiAgICAgICAgLy9JZiB0aGUgc3RhdGUgaXMgbm90ICdwcmVyb2xsPycgaXQgbWVhbnMgdGhlIGFkcyB3ZXJlIGNhbmNlbGVkIHRoZXJlZm9yZSwgd2UgYnJlYWsgdGhlIHdhdGVyZmFsbFxyXG5cclxuICAgICAgICBpZiAoYWRzQ2FuY2VsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFkSW50ZWdyYXRvciA9IGlzVlBBSUQodmFzdFJlc3BvbnNlKSA/IG5ldyBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykgOiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcclxuICAgICAgICB2YXIgYWRGaW5pc2hlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICd2YXN0LmFkU3RhcnQnKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRBZHNMYWJlbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlQWRzTGFiZWwpO1xyXG5cclxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XHJcbiAgICAgICAgICAgIHByZXZlbnRNYW51YWxQcm9ncmVzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheWVyLnZhc3QudmFzdFJlc3BvbnNlID0gdmFzdFJlc3BvbnNlO1xyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcImNhbGxpbmcgYWRJbnRlZ3JhdG9yLnBsYXlBZCgpIHdpdGggdmFzdFJlc3BvbnNlOlwiLCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgICAgIHBsYXllci52YXN0LmFkVW5pdCA9IGFkSW50ZWdyYXRvci5wbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKiovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQWRzTGFiZWwoKSB7XHJcbiAgICAgICAgICAgIGlmIChhZEZpbmlzaGVkIHx8IHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdBZHNMYWJlbCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmFkZENoaWxkKCdBZHNMYWJlbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQWRzTGFiZWwoKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLnJlbW92ZUNoaWxkKCdBZHNMYWJlbCcpO1xyXG4gICAgICAgICAgICBhZEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXZlbnRNYW51YWxQcm9ncmVzcygpIHtcclxuICAgICAgICAgICAgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGUgdXNlciBmb3J3YXJkZWQvcmV3b3VuZCB0aGUgYWRcclxuICAgICAgICAgICAgdmFyIFBST0dSRVNTX1RIUkVTSE9MRCA9IDM7XHJcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1RpbWUgPSAwO1xyXG4gICAgICAgICAgICB2YXIgc2tpcGFkX2F0dGVtcHRzID0gMDtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHByZXZlbnRBZFNlZWspO1xyXG4gICAgICAgICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFcnJvciddLCBzdG9wUHJldmVudE1hbnVhbFByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJldmVudEFkU2tpcCgpIHtcclxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgcmV2ZXJ0IHRpbWUgdG8gdGhlIHByZXZpb3VzICd2YWxpZCcgdGltZVxyXG4gICAgICAgICAgICAgICAgaWYgKChwbGF5ZXIuZHVyYXRpb24oKSAtIHByZXZpb3VzVGltZSkgPiBQUk9HUkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7IC8vIHRoaXMgcmVkdWNlIHRoZSB2aWRlbyBqaXR0ZXIgaWYgdGhlIElPUyBza2lwIGJ1dHRvbiBpcyBwcmVzc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXkodHJ1ZSk7IC8vIHdlIG5lZWQgdG8gdHJpZ2dlciB0aGUgcGxheSB0byBwdXQgdGhlIHZpZGVvIGVsZW1lbnQgYmFjayBpbiBhIHZhbGlkIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHByZXZpb3VzVGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXZlbnRBZFNlZWsoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc0RlbHRhID0gTWF0aC5hYnMoY3VycmVudFRpbWUgLSBwcmV2aW91c1RpbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzRGVsdGEgPiBQUk9HUkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2lwYWRfYXR0ZW1wdHMgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpcGFkX2F0dGVtcHRzID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIub2ZmKCdlbmRlZCcsIHByZXZlbnRBZFNraXApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFja0FkRXJyb3IoZXJyb3IsIHZhc3RSZXNwb25zZSkge1xyXG4gICAgICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndmFzdC5hZEVycm9yJywgZXJyb3I6IGVycm9yfSk7XHJcbiAgICAgICAgY2FuY2VsQWRzKCk7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKCdBRCBFUlJPUjonLCBlcnJvci5tZXNzYWdlLCBlcnJvciwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1ZQQUlEKHZhc3RSZXNwb25zZSkge1xyXG4gICAgICAgIHZhciBpLCBsZW47XHJcbiAgICAgICAgdmFyIG1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcztcclxuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBtZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh2YXN0VXRpbC5pc1ZQQUlEKG1lZGlhRmlsZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbiIsIi8vU21hbGwgc3Vic2V0IG9mIGFzeW5jXHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG52YXIgYXN5bmMgPSB7fTtcclxuXHJcbmFzeW5jLnNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uIChmbikge1xyXG4gIHNldFRpbWVvdXQoZm4sIDApO1xyXG59O1xyXG5cclxuYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcclxuICB2YXIgbWFrZUNhbGxiYWNrID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm4ubmV4dCgpO1xyXG4gICAgfTtcclxuICAgIGZuLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpIDogbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZm47XHJcbiAgfTtcclxuICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xyXG59O1xyXG5cclxuXHJcbmFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcclxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHsgfTtcclxuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRhc2tzKSkge1xyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gd2F0ZXJmYWxsIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJyk7XHJcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICB9XHJcbiAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gIH1cclxuICB2YXIgd3JhcEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgICAgICB2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTtcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcclxufTtcclxuXHJcbmFzeW5jLndoZW4gPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBjYWxsYmFjaykge1xyXG4gIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3luYy53aGVuIGVycm9yOiBtaXNzaW5nIGNhbGxiYWNrIGFyZ3VtZW50XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGlzQWxsb3dlZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmRpdGlvbikgPyBjb25kaXRpb24gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gISFjb25kaXRpb247XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcclxuICAgIHZhciBuZXh0ID0gYXJncy5wb3AoKTtcclxuXHJcbiAgICBpZiAoaXNBbGxvd2VkLmFwcGx5KG51bGwsIGFyZ3MpKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcclxuICAgIHJldHVybiBuZXh0LmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xyXG5cclxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF92ZXJib3NpdHkgPSA1O1xyXG52YXIgX3ByZWZpeCA9IFwiW3ZpZGVvanMtdmFzdC12cGFpZF0gXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRWZXJib3NpdHkgKHYpXHJcbntcclxuICAgIF92ZXJib3NpdHkgPSB2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNc2cgKG1ldGhvZCwgYXJncylcclxue1xyXG4gICAgaWYgKChhcmdzLmxlbmd0aCkgPiAwICYmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpKVxyXG4gICAge1xyXG4gICAgICAgIGFyZ3NbMF0gPSBfcHJlZml4ICsgYXJnc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWV0aG9kLmFwcGx5KVxyXG4gICAge1xyXG4gICAgICAgIG1ldGhvZC5hcHBseSAoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIG1ldGhvZCAoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1ZyAoKVxyXG57XHJcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gSUUgMTAgZG9lc24ndCBoYXZlIGEgY29uc29sZS5kZWJ1ZygpIGZ1bmN0aW9uXHJcbiAgICAgICAgaGFuZGxlTXNnIChjb25zb2xlLmxvZywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUuZGVidWcsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZyAoKVxyXG57XHJcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDMpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1zZyAoY29uc29sZS5sb2csIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZm8gKClcclxue1xyXG4gICAgaWYgKF92ZXJib3NpdHkgPCAyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUuaW5mbywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHdhcm4gKClcclxue1xyXG4gICAgaWYgKF92ZXJib3NpdHkgPCAxKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUud2FybiwgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJyb3IgKClcclxue1xyXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmVycm9yLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG52YXIgY29uc29sZUxvZ2dlciA9IHtcclxuICAgIHNldFZlcmJvc2l0eTogc2V0VmVyYm9zaXR5LFxyXG4gICAgZGVidWc6IGRlYnVnLFxyXG4gICAgbG9nOiBsb2csXHJcbiAgICBpbmZvOiBpbmZvLFxyXG4gICAgd2Fybjogd2FybixcclxuICAgIGVycm9yOiBlcnJvclxyXG59O1xyXG5cclxuaWYgKCh0eXBlb2YgKGNvbnNvbGUpID09PSAndW5kZWZpbmVkJykgfHwgIWNvbnNvbGUubG9nKVxyXG57XHJcbiAgICAvLyBubyBjb25zb2xlIGF2YWlsYWJsZTsgbWFrZSBmdW5jdGlvbnMgbm8tb3BcclxuICAgIGNvbnNvbGVMb2dnZXIuZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIGNvbnNvbGVMb2dnZXIubG9nID0gZnVuY3Rpb24gKCkge307XHJcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIGNvbnNvbGVMb2dnZXIud2FybiA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgY29uc29sZUxvZ2dlci5lcnJvciA9IGZ1bmN0aW9uICgpIHt9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnNvbGVMb2dnZXI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIGRvbSA9IHt9O1xyXG5cclxuZG9tLmlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCkge1xyXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICByZXR1cm4gc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbic7XHJcbn07XHJcblxyXG5kb20uaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihlbCkge1xyXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICByZXR1cm4gc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xyXG59O1xyXG5cclxuZG9tLmlzU2hvd24gPSBmdW5jdGlvbiBpc1Nob3duKGVsKSB7XHJcbiAgcmV0dXJuICFkb20uaXNIaWRkZW4oZWwpO1xyXG59O1xyXG5cclxuZG9tLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsKSB7XHJcbiAgZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfID0gZWwuc3R5bGUuZGlzcGxheTtcclxuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5cclxuZG9tLnNob3cgPSBmdW5jdGlvbiBzaG93KGVsKSB7XHJcbiAgaWYgKGRvbS5pc0hpZGRlbihlbCkpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV87XHJcbiAgfVxyXG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmRvbS5oYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjc3NDbGFzcykge1xyXG4gIHZhciBjbGFzc2VzLCBpLCBsZW47XHJcblxyXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcclxuICAgIGNzc0NsYXNzID0gKGNzc0NsYXNzIHx8ICcnKTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChjbGFzc2VzW2ldID09PSBjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmRvbS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcclxuICB2YXIgY2xhc3NlcztcclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaChjc3NDbGFzcyk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzLmpvaW4oJyAnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZG9tLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xyXG4gIHZhciBjbGFzc2VzO1xyXG5cclxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xyXG4gICAgdmFyIG5ld0NsYXNzZXMgPSBbXTtcclxuICAgIHZhciBpLCBsZW47XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xyXG5cclxuICAgICAgZm9yIChpID0gMCwgbGVuID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gY2xhc3Nlc1tpXSkge1xyXG4gICAgICAgICAgbmV3Q2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3Q2xhc3Nlcy5qb2luKCcgJykpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmRvbS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChlbCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkodHlwZSkpe1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xyXG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XHJcbiAgICAvLyBXQVJOSU5HISEhIHRoaXMgaXMgYSB2ZXJ5IG5haXZlIGltcGxlbWVudGF0aW9uICFcclxuICAgIC8vIHRoZSBldmVudCBvYmplY3QgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyXHJcbiAgICAvLyB3b3VsZCBub3QgYmUgdGhlcmUgZm9yIElFOFxyXG4gICAgLy8gd2Ugc2hvdWxkIHVzZSBcIndpbmRvdy5ldmVudFwiIGFuZCB0aGVuIFwiZXZlbnQuc3JjRWxlbWVudFwiXHJcbiAgICAvLyBpbnN0ZWFkIG9mIFwiZXZlbnQudGFyZ2V0XCJcclxuICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGhhbmRsZXIpO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChlbCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkodHlwZSkpe1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9IGVsc2UgaWYgKGVsLmRldGFjaEV2ZW50KSB7XHJcbiAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxbXCJvblwiICsgdHlwZV0gPSBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbCwgZXZlbnQpIHtcclxuICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkge1xyXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLmZpcmVFdmVudChcIm9uXCIgKyBldmVudC5ldmVudFR5cGUsIGV2ZW50KTtcclxuICB9XHJcbn07XHJcblxyXG5kb20uaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24gaXNEZXNjZW5kYW50KHBhcmVudCwgY2hpbGQpIHtcclxuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcclxuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5kb20uZ2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChlbCl7XHJcbiAgcmV0dXJuIGVsLnRleHRDb250ZW50IHx8IGVsLnRleHQ7XHJcbn07XHJcblxyXG5kb20ucHJlcGVuZENoaWxkID0gZnVuY3Rpb24gcHJlcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcclxuICBpZihjaGlsZC5wYXJlbnROb2RlKXtcclxuICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gIH1cclxuICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xyXG59O1xyXG5cclxuZG9tLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSl7XHJcbiAgaWYobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpe1xyXG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5pc0RvbUVsZW1lbnQgPSBmdW5jdGlvbiBpc0RvbUVsZW1lbnQobykge1xyXG4gIHJldHVybiBvIGluc3RhbmNlb2YgRWxlbWVudDtcclxufTtcclxuXHJcbmRvbS5jbGljayA9IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKSB7XHJcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsICdjbGljaycsIGhhbmRsZXIpO1xyXG59O1xyXG5cclxuZG9tLm9uY2UgPSBmdW5jdGlvbihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGZ1bmN0aW9uIGhhbmRsZXJXcmFwKCkge1xyXG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcclxuICB9XHJcblxyXG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyV3JhcCk7XHJcbn07XHJcblxyXG4vL05vdGU6IHRoZXJlIGlzIG5vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBpUGFkIHNvIHdlIG5lZWQgYSBmYWxsYmFja1xyXG5kb20uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQpIHtcclxuICB2YXIgcmVjdDtcclxuXHJcbiAgLy9PbiBJRTkgYW5kIGJlbG93IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBkb2VzIG5vdCB3b3JrIGNvbnNpc3RlbnRseVxyXG4gIGlmKCF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XHJcbiAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXJsVXRpbHMgPSByZXF1aXJlKCcuL3VybFV0aWxzJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0RXJyb3IobWVzc2FnZSkge1xyXG4gIHRoaXMubWVzc2FnZSA9ICdIdHRwUmVxdWVzdCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcclxufVxyXG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xyXG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJIdHRwUmVxdWVzdCBFcnJvclwiO1xyXG5cclxuZnVuY3Rpb24gSHR0cFJlcXVlc3QoY3JlYXRlWGhyKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjcmVhdGVYaHIpKSB7XHJcbiAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcignTWlzc2luZyBYTUxIdHRwUmVxdWVzdCBmYWN0b3J5IG1ldGhvZCcpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5jcmVhdGVYaHIgPSBjcmVhdGVYaHI7XHJcbn1cclxuXHJcbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucyk7XHJcbiAgdmFyIHRpbWVvdXQsIHRpbWVvdXRJZDtcclxuICB2YXIgeGhyID0gdGhpcy5jcmVhdGVYaHIoKTtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICB0aW1lb3V0ID0gdXRpbGl0aWVzLmlzTnVtYmVyKG9wdGlvbnMudGltZW91dCkgPyBvcHRpb25zLnRpbWVvdXQgOiAwO1xyXG5cclxuICB4aHIub3BlbihtZXRob2QsIHVybFV0aWxzLnVybFBhcnRzKHVybCkuaHJlZiwgdHJ1ZSk7XHJcblxyXG4gIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcclxuICAgIHNldEhlYWRlcnMoeGhyLCBvcHRpb25zLmhlYWRlcnMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XHJcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhdHVzVGV4dCwgcmVzcG9uc2UsIHN0YXR1cztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvbmx5IHdheSB0byBkbyBhIHNlY3VyZSByZXF1ZXN0IG9uIElFOCBhbmQgSUU5IGlzIHdpdGggdGhlIFhEb21haW5SZXF1ZXN0IG9iamVjdC4gVW5mb3J0dW5hdGVseSwgbWljcm9zb2Z0IGlzXHJcbiAgICAgKiBzbyBuaWNlIHRoYXQgZGVjaWRlZCB0aGF0IHRoZSBzdGF0dXMgcHJvcGVydHkgYW5kIHRoZSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBtZXRob2Qgd2hlcmUgbm90IG5lZWRlZCBzbyB3ZSBoYXZlIHRvXHJcbiAgICAgKiBmYWtlIHRoZW0uIElmIHRoZSByZXF1ZXN0IGdldHMgZG9uZSB3aXRoIGFuIFhEb21haW5SZXF1ZXN0IGluc3RhbmNlLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IHRoZXJlIGFyZSBubyBoZWFkZXJzIGFuZFxyXG4gICAgICogdGhlIHN0YXR1cyB3aWxsIGFsd2F5cyBiZSAyMDAuIElmIHlvdSBkb24ndCBsaWtlIGl0LCBETyBOT1QgVVNFIEFOQ0lFTlQgQlJPV1NFUlMhISFcclxuICAgICAqXHJcbiAgICAgKiBGb3IgbW9yIGluZm8gZ28gdG86IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2MyODgwNjAodj12cy44NSkuYXNweFxyXG4gICAgICovXHJcbiAgICBpZiAoIXhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpIHtcclxuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXhoci5zdGF0dXMpIHtcclxuICAgICAgeGhyLnN0YXR1cyA9IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0aW1lb3V0SWQpKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8ICcnO1xyXG5cclxuICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXHJcbiAgICAvLyByZXNwb25zZS9yZXNwb25zZVR5cGUgcHJvcGVydGllcyB3ZXJlIGludHJvZHVjZWQgaW4gWEhSIExldmVsMiBzcGVjIChzdXBwb3J0ZWQgYnkgSUUxMClcclxuICAgIHJlc3BvbnNlID0gKCdyZXNwb25zZScgaW4geGhyKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgLy8gbm9ybWFsaXplIElFOSBidWcgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzE0NTApXHJcbiAgICBzdGF0dXMgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcclxuXHJcbiAgICBjYWxsYmFjayhcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICByZXNwb25zZSxcclxuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLFxyXG4gICAgICBzdGF0dXNUZXh0KTtcclxuICB9O1xyXG5cclxuICB4aHIub25lcnJvciA9IHJlcXVlc3RFcnJvcjtcclxuICB4aHIub25hYm9ydCA9IHJlcXVlc3RFcnJvcjtcclxuXHJcbiAgeGhyLnNlbmQoKTtcclxuXHJcbiAgaWYgKHRpbWVvdXQgPiAwKSB7XHJcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgeGhyICYmIHhoci5hYm9ydCgpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyh1cmwpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHVybCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIHVybCAnXCIgKyB1cmwgKyBcIidcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcclxuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIGhhbmRsZXIgJ1wiICsgY2FsbGJhY2sgKyBcIicgZm9yIHRoZSBodHRwIHJlcXVlc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQob3B0aW9ucykgJiYgIXV0aWxpdGllcy5pc09iamVjdChvcHRpb25zKSkge1xyXG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgb3B0aW9ucyBtYXAgJ1wiICsgb3B0aW9ucyArIFwiJ1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEhlYWRlcnMoeGhyLCBoZWFkZXJzKSB7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXF1ZXN0RXJyb3IoKSB7XHJcbiAgICBjYWxsYmFjaygtMSwgbnVsbCwgbnVsbCwgJycpO1xyXG4gIH1cclxufTtcclxuXHJcbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gIHRoaXMucnVuKCdHRVQnLCB1cmwsIHByb2Nlc3NSZXNwb25zZSwgb3B0aW9ucyk7XHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShzdGF0dXMsIHJlc3BvbnNlLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KSB7XHJcbiAgICBpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcclxuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayhuZXcgSHR0cFJlcXVlc3RFcnJvcihzdGF0dXNUZXh0KSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gMjAwIDw9IHN0YXR1cyAmJiBzdGF0dXMgPCAzMDA7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlWGhyKCkge1xyXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICBpZiAoIShcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikpIHtcclxuICAgIC8vIFhEb21haW5SZXF1ZXN0IGZvciBJRS5cclxuICAgIHhociA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xyXG4gIH1cclxuICByZXR1cm4geGhyO1xyXG59XHJcblxyXG52YXIgaHR0cCA9IG5ldyBIdHRwUmVxdWVzdChjcmVhdGVYaHIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaHR0cDogaHR0cCxcclxuICBIdHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsXHJcbiAgSHR0cFJlcXVlc3RFcnJvcjogSHR0cFJlcXVlc3RFcnJvcixcclxuICBjcmVhdGVYaHI6IGNyZWF0ZVhoclxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBodG1sNTogW1xyXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXHJcbiAgICAndGV4dC9qYXZhc2NyaXB0MS4wJyxcclxuICAgICd0ZXh0L2phdmFzY3JpcHQxLjInLFxyXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuNCcsXHJcbiAgICAndGV4dC9qc2NyaXB0JyxcclxuICAgICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcclxuICAgICdhcHBsaWNhdGlvbi94LWphdmFzY3JpcHQnLFxyXG4gICAgJ3RleHQvZWNtYXNjcmlwdCcsXHJcbiAgICAndGV4dC9lY21hc2NyaXB0MS4wJyxcclxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjInLFxyXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuNCcsXHJcbiAgICAndGV4dC9saXZlc2NyaXB0JyxcclxuICAgICdhcHBsaWNhdGlvbi9lY21hc2NyaXB0JyxcclxuICAgICdhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHQnLFxyXG4gIF0sXHJcblxyXG4gIGZsYXNoOiBbXHJcbiAgICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXHJcbiAgXSxcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIF9jYW5QYXlQb3N0Um9sbCA9IHRydWU7XHJcbnZhciBwbGF5ZXJVdGlscyA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FwdHVyZXMgdGhlIHBvcnRpb25zIG9mIHBsYXllciBzdGF0ZSByZWxldmFudCB0b1xyXG4gKiB2aWRlbyBwbGF5YmFjay4gVGhlIHJlc3VsdCBvZiB0aGlzIGZ1bmN0aW9uIGNhbiBiZSBwYXNzZWQgdG9cclxuICogcmVzdG9yZVBsYXllclNuYXBzaG90IHdpdGggYSBwbGF5ZXIgdG8gcmV0dXJuIHRoZSBwbGF5ZXIgdG8gdGhlIHN0YXRlIGl0XHJcbiAqIHdhcyBpbiB3aGVuIHRoaXMgZnVuY3Rpb24gd2FzIGludm9rZWQuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxyXG4gKi9cclxucGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiBnZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpIHtcclxuICAgIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XHJcblxyXG4gICAgdmFyIHNuYXBzaG90ID0ge1xyXG4gICAgICAgIGVuZGVkOiBwbGF5ZXIuZW5kZWQoKSxcclxuICAgICAgICBzcmM6IHBsYXllci5jdXJyZW50U3JjKCksXHJcbiAgICAgICAgY3VycmVudFRpbWU6IHBsYXllci5jdXJyZW50VGltZSgpLFxyXG4gICAgICAgIHR5cGU6IHBsYXllci5jdXJyZW50VHlwZSgpLFxyXG4gICAgICAgIHBsYXlpbmc6ICFwbGF5ZXIucGF1c2VkKCksXHJcbiAgICAgICAgc3VwcHJlc3NlZFRyYWNrczogZ2V0U3VwcHJlc3NlZFRyYWNrcyhwbGF5ZXIpXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0ZWNoKSB7XHJcbiAgICAgICAgc25hcHNob3QubmF0aXZlUG9zdGVyID0gdGVjaC5wb3N0ZXI7XHJcbiAgICAgICAgc25hcHNob3Quc3R5bGUgPSB0ZWNoLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzbmFwc2hvdDtcclxuXHJcbiAgICAvKioqKiBMb2NhbCBGdW5jdGlvbnMgKioqKi9cclxuICAgIGZ1bmN0aW9uIGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKSB7XHJcbiAgICAgICAgdmFyIHRyYWNrcyA9IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzID8gcGxheWVyLnJlbW90ZVRleHRUcmFja3MoKSA6IFtdO1xyXG5cclxuICAgICAgICBpZiAodHJhY2tzICYmIHV0aWxpdGllcy5pc0FycmF5KHRyYWNrcy50cmFja3NfKSkge1xyXG4gICAgICAgICAgICB0cmFja3MgPSB0cmFja3MudHJhY2tzXztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tzKSkge1xyXG4gICAgICAgICAgICB0cmFja3MgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gW107XHJcbiAgICAgICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7XHJcbiAgICAgICAgICAgIHN1cHByZXNzZWRUcmFja3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0cmFjazogdHJhY2ssXHJcbiAgICAgICAgICAgICAgICBtb2RlOiB0cmFjay5tb2RlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0cmFjay5tb2RlID0gJ2Rpc2FibGVkJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cHByZXNzZWRUcmFja3M7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQXR0ZW1wdHMgdG8gbW9kaWZ5IHRoZSBzcGVjaWZpZWQgcGxheWVyIHNvIHRoYXQgaXRzIHN0YXRlIGlzIGVxdWl2YWxlbnQgdG9cclxuICogdGhlIHN0YXRlIG9mIHRoZSBzbmFwc2hvdC5cclxuICogQHBhcmFtIHtvYmplY3R9IHNuYXBzaG90IC0gdGhlIHBsYXllciBzdGF0ZSB0byBhcHBseVxyXG4gKi9cclxucGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gcmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpIHtcclxuICAgIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XHJcbiAgICB2YXIgYXR0ZW1wdHMgPSAyMDsgLy8gdGhlIG51bWJlciBvZiByZW1haW5pbmcgYXR0ZW1wdHMgdG8gcmVzdG9yZSB0aGUgc25hcHNob3RcclxuXHJcbiAgICBpZiAoc25hcHNob3QubmF0aXZlUG9zdGVyKSB7XHJcbiAgICAgICAgdGVjaC5wb3N0ZXIgPSBzbmFwc2hvdC5uYXRpdmVQb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzdHlsZScgaW4gc25hcHNob3QpIHtcclxuICAgICAgICAvLyBvdmVyd3JpdGUgYWxsIGNzcyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJlc3RvcmUgc3RhdGUgcHJlY2lzZWx5XHJcbiAgICAgICAgdGVjaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc25hcHNob3Quc3R5bGUgfHwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpKSB7XHJcblxyXG4gICAgICAgIC8vIG9uIGlvczcsIGZpZGRsaW5nIHdpdGggdGV4dFRyYWNrcyB0b28gZWFybHkgd2lsbCBjYXVzZSBzYWZhcmkgdG8gY3Jhc2hcclxuICAgICAgICBwbGF5ZXIub25lKCdjb250ZW50bG9hZGVkbWV0YWRhdGEnLCByZXN0b3JlVHJhY2tzKTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uZSgnY2FucGxheScsIHRyeVRvUmVzdW1lKTtcclxuICAgICAgICBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBzcmMgY2hhbmdlZCBmb3IgYWQgcGxheWJhY2ssIHJlc2V0IGl0XHJcbiAgICAgICAgcGxheWVyLnNyYyh7c3JjOiBzbmFwc2hvdC5zcmMsIHR5cGU6IHNuYXBzaG90LnR5cGV9KTtcclxuXHJcbiAgICAgICAgLy8gc2FmYXJpIHJlcXVpcmVzIGEgY2FsbCB0byBgbG9hZGAgdG8gcGljayB1cCBhIGNoYW5nZWQgc291cmNlXHJcbiAgICAgICAgcGxheWVyLmxvYWQoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3RvcmVUcmFja3MoKTtcclxuXHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcclxuICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU29tZXRpbWVzIGZpcmVmb3ggZG9lcyBub3QgdHJpZ2dlciB0aGUgJ2NhbnBsYXknIGV2dC5cclxuICAgICAqIFRoaXMgY29kZSBlbnN1cmUgdGhhdCBpdCBhbHdheXMgZ2V0cyB0cmlnZ2VyZWQgdHJpZ2dlcmVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCkge1xyXG4gICAgICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ2NhbnBsYXknKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uZSgnY2FucGxheScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGxheWVyIG5lZWRzIHRvIGJlIHJlc3RvcmVkIHRvIGl0cyBzdGF0ZVxyXG4gICAgICogYmVmb3JlIGFkIHBsYXliYWNrIGJlZ2FuLiBXaXRoIGEgY3VzdG9tIGFkIGRpc3BsYXkgb3IgYnVybmVkLWluXHJcbiAgICAgKiBhZHMsIHRoZSBjb250ZW50IHBsYXllciBzdGF0ZSBoYXNuJ3QgYmVlbiBtb2RpZmllZCBhbmQgc28gbm9cclxuICAgICAqIHJlc3RvcmF0aW9uIGlzIHJlcXVpcmVkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhc1NyY0NoYW5nZWQocGxheWVyLCBzbmFwc2hvdCkge1xyXG4gICAgICAgIGlmIChwbGF5ZXIuc3JjKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5zcmMoKSAhPT0gc25hcHNob3Quc3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGUgcGxheWVyIHdhcyBjb25maWd1cmVkIHRocm91Z2ggc291cmNlIGVsZW1lbnQgY2hpbGRyZW5cclxuICAgICAgICByZXR1cm4gcGxheWVyLmN1cnJlbnRTcmMoKSAhPT0gc25hcHNob3Quc3JjO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc3RvcmVUcmFja3MoKSB7XHJcbiAgICAgICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBzbmFwc2hvdC5zdXBwcmVzc2VkVHJhY2tzO1xyXG4gICAgICAgIHN1cHByZXNzZWRUcmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tTbmFwc2hvdCkge1xyXG4gICAgICAgICAgICB0cmFja1NuYXBzaG90LnRyYWNrLm1vZGUgPSB0cmFja1NuYXBzaG90Lm1vZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlIHZpZGVvIGVsZW1lbnQgaGFzIGxvYWRlZCBlbm91Z2ggb2YgdGhlIHNuYXBzaG90IHNvdXJjZVxyXG4gICAgICogdG8gYmUgcmVhZHkgdG8gYXBwbHkgdGhlIHJlc3Qgb2YgdGhlIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRyeVRvUmVzdW1lKCkge1xyXG5cclxuICAgICAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xyXG4gICAgICAgIC8vIG90aGVyd2lzZSBkZWxheSBhIGJpdCBhbmQgdGhlbiBjaGVjayBhZ2FpbiB1bmxlc3Mgd2UncmUgb3V0IG9mIGF0dGVtcHRzXHJcblxyXG4gICAgICAgIGlmICghcGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lKHBsYXllcikgJiYgYXR0ZW1wdHMtLSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRyeVRvUmVzdW1lLCA1MCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuY3VycmVudFRpbWUoKSAhPT0gc25hcHNob3QuY3VycmVudFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc25hcHNob3QucGxheWluZykgeyAvLyBpZiBuZWVkZWQgcmVzdG9yZSBwbGF5aW5nIHN0YXR1cyBhZnRlciBzZWVrIGNvbXBsZXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIub25lKCdzZWVrZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHNuYXBzaG90LmN1cnJlbnRUaW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBuZWVkZWQgYW5kIG5vIHNlZWsgaGFzIGJlZW4gcGVyZm9ybWVkLCByZXN0b3JlIHBsYXlpbmcgc3RhdHVzIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvanMubG9nLndhcm4oJ0ZhaWxlZCB0byByZXN1bWUgdGhlIGNvbnRlbnQgYWZ0ZXIgYW4gYWR2ZXJ0aXNlbWVudCcsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxucGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lID0gZnVuY3Rpb24gKHBsYXllcikge1xyXG5cclxuICAgIGlmIChwbGF5ZXIucmVhZHlTdGF0ZSgpID4gMSkge1xyXG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgYW5kIG1lZGlhIGFyZW4ndCBcInNlZWthYmxlXCIuXHJcbiAgICAgICAgLy8gcmVhZHlTdGF0ZSBncmVhdGVyIHRoYW4gMSBhbGxvd3MgZm9yIHNlZWtpbmcgd2l0aG91dCBleGNlcHRpb25zXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBsYXllci5zZWVrYWJsZSgpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBpZiB0aGUgcGxheWVyIGRvZXNuJ3QgZXhwb3NlIHRoZSBzZWVrYWJsZSB0aW1lIHJhbmdlcywgdHJ5IHRvXHJcbiAgICAgICAgLy8gcmVzdW1lIHBsYXliYWNrIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBsYXllci5zZWVrYWJsZSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHByZXBhcmVzIHRoZSBwbGF5ZXIgdG8gZGlzcGxheSBhZHMuXHJcbiAqIEFkZGluZyBjb252ZW5pZW5jZSBldmVudHMgbGlrZSB0aGUgJ3Zhc3QuZmlyc1BsYXknIHRoYXQgZ2V0cyBmaXJlZCB3aGVuIHRoZSB2aWRlbyBpcyBmaXJzdCBwbGF5ZWRcclxuICogYW5kIGFkcyB0aGUgYmxhY2tQb3N0ZXIgdG8gdGhlIHBsYXllciB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBkaXNwbGF5ZWQgYmVmb3JlIHRoZSBwcmVyb2xsIGFkLlxyXG4gKlxyXG4gKiBAcGFyYW0gcGxheWVyXHJcbiAqL1xyXG5wbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzID0gZnVuY3Rpb24gKHBsYXllcikge1xyXG4gICAgdmFyIGJsYWNrUG9zdGVyID0gcGxheWVyLmFkZENoaWxkKCdibGFja1Bvc3RlcicpO1xyXG4gICAgdmFyIF9maXJzdFBsYXkgPSB0cnVlO1xyXG4gICAgdmFyIF9wcmVyb2xsSGFzZVBsYXllZCA9IGZhbHNlOyAvL21peGFzIGFkZGVkIHRvIGRldGVjdCBmaXJzdCBwbGF5XHJcbiAgICBwbGF5ZXJVdGlscy5fY2FuUGF5UG9zdFJvbGwgPSB0cnVlO1xyXG4gICAgdmFyIHZvbHVtZVNuYXBzaG90O1xyXG5cclxuXHJcbiAgICBtb25rZXlQYXRjaFBsYXllckFwaSgpO1xyXG5cclxuICAgIHBsYXllci5vbigncGxheScsIHRyeVRvVHJpZ2dlckZpcnN0UGxheSk7XHJcblxyXG5cclxuXHJcbiAgICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCByZXNldEZpcnN0UGxheSk7Ly9FdmVyeSB0aW1lIHdlIGNoYW5nZSB0aGUgc291cmNlcyB3ZSByZXNldCB0aGUgZmlyc3QgcGxheS5cclxuICAgIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCByZXN0b3JlQ29udGVudFZvbHVtZSk7XHJcbiAgICBwbGF5ZXIub24oJ2Vycm9yJywgaGlkZUJsYWNrUG9zdGVyKTsvL0lmIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBwbGF5ZXIgd2UgcmVtb3ZlIHRoZSBibGFja3Bvc3RlciB0byBzaG93IHRoZSBlcnIgbXNnXHJcbiAgICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIGhpZGVCbGFja1Bvc3Rlcik7XHJcbiAgICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgaGlkZUJsYWNrUG9zdGVyKTtcclxuICAgIHBsYXllci5vbigndmFzdC5hZEVycm9yJywgaGlkZUJsYWNrUG9zdGVyKTtcclxuICAgIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgYWRkU3R5bGVzKTtcclxuICAgIHBsYXllci5vbigndmFzdC5hZEVuZCcsIHJlbW92ZVN0eWxlcyk7XHJcbiAgICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgcmVtb3ZlU3R5bGVzKTtcclxuICAgIHBsYXllci5vbigndmFzdC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcGxheWVyLm9uKCd2YXN0LmJsb2NrUG9zdFJvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX2ZpcnN0UGxheSA9IGZhbHNlO1xyXG4gICAgICAgIF9jYW5QYXlQb3N0Um9sbCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBwbGF5ZXIub24oJ3Zhc3QudW5ibG9ja1Bvc3RSb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBfY2FuUGF5UG9zdFJvbGwgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGxheWVyVXRpbHMuaXNQbGF5ZWRQcmVSb2wgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9wcmVyb2xsSGFzZVBsYXllZDtcclxuICAgIH07XHJcbiAgICBwbGF5ZXJVdGlscy5jYW5wbGF5UG9zdFJvbGwgPSBmdW5jdGlvbiAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBfY2FuUGF5UG9zdFJvbGw7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gdHJ5VG9UcmlnZ2VyRW5kc1BsYXkoKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChfY2FuUGF5UG9zdFJvbGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZmlyc3RQbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuZmlyc3RQbGF5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgV2hhdCB0aGlzIGZ1bmN0aW9uIGRvZXMgaXMgdWdseSBhbmQgaG9ycmlibGUgYW5kIEkgc2hvdWxkIHRoaW5rIHR3aWNlIGJlZm9yZSBjYWxsaW5nIG15c2VsZiBhIGdvb2QgZGV2ZWxvcGVyLiBXaXRoIHRoYXQgc2FpZCxcclxuICAgICBpdCBpcyB0aGUgYmVzdCBzb2x1dGlvbiBJIGNvdWxkIGZpbmQgdG8gbXV0ZSB0aGUgdmlkZW8gdW50aWwgdGhlICdwbGF5JyBldmVudCBoYXBwZW5zIChvbiBtb2JpbGUgZGV2aWNlcykgYW5kIHRoZSBwbHVnaW4gY2FuIGRlY2lkZSB3aGV0aGVyXHJcbiAgICAgdG8gcGxheSB0aGUgYWQgb3Igbm90LlxyXG4gICAgIFxyXG4gICAgIFdlIGFsc28gbmVlZCB0aGlzIG1vbmtleXBhdGNoIHRvIGJlIGFibGUgdG8gcGF1c2UgYW5kIHJlc3VtZSBhbiBhZCB1c2luZyB0aGUgcGxheWVyJ3MgQVBJXHJcbiAgICAgXHJcbiAgICAgSWYgeW91IGhhdmUgYSBiZXR0ZXIgc29sdXRpb24gcGxlYXNlIGRvIHRlbGwgbWUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG1vbmtleVBhdGNoUGxheWVyQXBpKCkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb25rZXkgcGF0Y2ggbmVlZGVkIHRvIGhhbmRsZSBmaXJzdFBsYXkgYW5kIHJlc3VtZSBvZiBwbGF5aW5nIGFkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHJlc3RvcmluZyBhIFZBU1QgYWQuXHJcbiAgICAgICAgICogQHJldHVybnMge3BsYXllcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgb3JpZ1BsYXkgPSBwbGF5ZXIucGxheTtcclxuICAgICAgICBwbGF5ZXIucGxheSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BsYXkpIHtcclxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0UGxheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdW1lKGNhbGxPcmlnUGxheSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaXJzdFBsYXkoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5pc0lQaG9uZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lU25hcHNob3QgPSBzYXZlVm9sdW1lU25hcHNob3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubXV0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzdW1lKGNhbGxPcmlnUGxheSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5yZXN1bWVBZCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnUGxheS5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE5lZWRlZCBtb25rZXkgcGF0Y2ggdG8gaGFuZGxlIHBhdXNlIG9mIHBsYXlpbmcgYWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXHJcbiAgICAgICAgICogQHJldHVybnMge3BsYXllcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgb3JpZ1BhdXNlID0gcGxheWVyLnBhdXNlO1xyXG4gICAgICAgIHBsYXllci5wYXVzZSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BhdXNlKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucGF1c2VBZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3JpZ1BhdXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE5lZWRlZCBtb25rZXkgcGF0Y2ggdG8gaGFuZGxlIHBhdXNlZCBzdGF0ZSBvZiB0aGUgcGxheWVyIHdoZW4gYWRzIGFyZSBwbGF5aW5nLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHBhdXNpbmcgYSBWQVNUIGFkLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIG9yaWdQYXVzZWQgPSBwbGF5ZXIucGF1c2VkO1xyXG4gICAgICAgIHBsYXllci5wYXVzZWQgPSBmdW5jdGlvbiAoY2FsbE9yaWdQYXVzZWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyLnZhc3QuYWRVbml0LmlzUGF1c2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdQYXVzZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gXHJcbiAgICBmdW5jdGlvbiBpc0FkUGxheWluZygpIHtcclxuICAgICAgICByZXR1cm4gcGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyeVRvVHJpZ2dlckZpcnN0UGxheSgpIHtcclxuICAgICAgICBpZiAoX3ByZXJvbGxIYXNlUGxheWVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNGaXJzdFBsYXkoKSkge1xyXG4gICAgICAgICAgICBfZmlyc3RQbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9wcmVyb2xsSGFzZVBsYXllZCA9IHRydWU7Ly9taXhhcyBhZGRlZCB0byBkZXRlY3QgZmlyc3QgcGxheVxyXG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5maXJzdFBsYXknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRGaXJzdFBsYXkoKSB7XHJcbiAgICAgICAgX2ZpcnN0UGxheSA9IHRydWU7XHJcbiAgICAgICAgX3ByZXJvbGxIYXNlUGxheWVkID0gZmFsc2U7XHJcbiAgICAgICAgX2NhblBheVBvc3RSb2xsID0gdHJ1ZTtcclxuICAgICAgICBibGFja1Bvc3Rlci5zaG93KCk7XHJcbiAgICAgICAgcmVzdG9yZUNvbnRlbnRWb2x1bWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ZpcnN0UGxheSgpIHtcclxuICAgICAgICByZXR1cm4gX2ZpcnN0UGxheTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVm9sdW1lU25hcHNob3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbXV0ZWQ6IHBsYXllci5tdXRlZCgpLFxyXG4gICAgICAgICAgICB2b2x1bWU6IHBsYXllci52b2x1bWUoKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzdG9yZUNvbnRlbnRWb2x1bWUoKSB7XHJcbiAgICAgICAgaWYgKHZvbHVtZVNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZSgwKTtcclxuICAgICAgICAgICAgcmVzdG9yZVZvbHVtZVNuYXBzaG90KHZvbHVtZVNuYXBzaG90KTtcclxuICAgICAgICAgICAgdm9sdW1lU25hcHNob3QgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXN0b3JlVm9sdW1lU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzT2JqZWN0KHNuYXBzaG90KSkge1xyXG4gICAgICAgICAgICBwbGF5ZXIudm9sdW1lKHNuYXBzaG90LnZvbHVtZSk7XHJcbiAgICAgICAgICAgIHBsYXllci5tdXRlZChzbmFwc2hvdC5tdXRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVCbGFja1Bvc3RlcigpIHtcclxuICAgICAgICBpZiAoIWRvbS5oYXNDbGFzcyhibGFja1Bvc3Rlci5lbCgpLCAndmpzLWhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgIGJsYWNrUG9zdGVyLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkU3R5bGVzKCkge1xyXG4gICAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3R5bGVzKCkge1xyXG4gICAgICBcclxuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtYWQtcGxheWluZycpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgcG9zdGVyIGF0dHJpYnV0ZSBmcm9tIHRoZSB2aWRlbyBlbGVtZW50IHRlY2gsIGlmIHByZXNlbnQuIFdoZW5cclxuICogcmV1c2luZyBhIHZpZGVvIGVsZW1lbnQgZm9yIG11bHRpcGxlIHZpZGVvcywgdGhlIHBvc3RlciBpbWFnZSB3aWxsIGJyaWVmbHlcclxuICogcmVhcHBlYXIgd2hpbGUgdGhlIG5ldyBzb3VyY2UgbG9hZHMuIFJlbW92aW5nIHRoZSBhdHRyaWJ1dGUgYWhlYWQgb2YgdGltZVxyXG4gKiBwcmV2ZW50cyB0aGUgcG9zdGVyIGZyb20gc2hvd2luZyB1cCBiZXR3ZWVuIHZpZGVvcy5cclxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XHJcbiAqL1xyXG5wbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gICAgaWYgKHRlY2gpIHtcclxuICAgICAgICB0ZWNoLnJlbW92ZUF0dHJpYnV0ZSgncG9zdGVyJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGxpc3RlbiB0byBtYW55IGV2ZW50cyB1bnRpbCBvbmUgb2YgdGhlbSBnZXRzIGZpcmVkLCB0aGVuIHdlXHJcbiAqIGV4ZWN1dGUgdGhlIGhhbmRsZXIgYW5kIHVuc3Vic2NyaWJlIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzO1xyXG4gKlxyXG4gKiBAcGFyYW0gcGxheWVyIHNwZWNpZmljIHBsYXllciBmcm9tIHdoZXJlIHRvIGxpc3RlbiBmb3IgdGhlIGV2ZW50c1xyXG4gKiBAcGFyYW0gZXZlbnRzIGFycmF5IG9mIGV2ZW50c1xyXG4gKiBAcGFyYW0gaGFuZGxlciBmdW5jdGlvbiB0byBleGVjdXRlIG9uY2Ugb25lIG9mIHRoZSBldmVudHMgZmlyZXNcclxuICovXHJcbnBsYXllclV0aWxzLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHBsYXllciwgZXZlbnRzLCBoYW5kbGVyKSB7XHJcbiAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcclxuICAgICAgICBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcGxheWVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllclV0aWxzOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBJTVBPUlRBTlQgTk9URTogVGhpcyBmdW5jdGlvbiBjb21lcyBmcm9tIGFuZ3VsYXJKcyBhbmQgd2FzIG9yaWdpbmFsbHkgY2FsbGVkIHVybFJlc29sdmVcclxuICogICAgICAgICAgICAgICAgIHlvdSBjYW4gdGFrZSBhIGxvb2sgYXQgdGhlIG9yaWdpbmFsIGNvZGUgaGVyZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvbWFzdGVyL3NyYy9uZy91cmxVdGlscy5qc1xyXG4gKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3Igbm9uLUlFIGJyb3dzZXJzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQXNzaWduaW5nIGEgVVJMIHRvIHRoZSBocmVmIHByb3BlcnR5IG9mIGFuIGFuY2hvciBET00gbm9kZSwgZXZlbiBvbmUgYXR0YWNoZWQgdG8gdGhlIERPTSxcclxuICogcmVzdWx0cyBib3RoIGluIHRoZSBub3JtYWxpemluZyBhbmQgcGFyc2luZyBvZiB0aGUgVVJMLiAgTm9ybWFsaXppbmcgbWVhbnMgdGhhdCBhIHJlbGF0aXZlXHJcbiAqIFVSTCB3aWxsIGJlIHJlc29sdmVkIGludG8gYW4gYWJzb2x1dGUgVVJMIGluIHRoZSBjb250ZXh0IG9mIHRoZSBhcHBsaWNhdGlvbiBkb2N1bWVudC5cclxuICogUGFyc2luZyBtZWFucyB0aGF0IHRoZSBhbmNob3Igbm9kZSdzIGhvc3QsIGhvc3RuYW1lLCBwcm90b2NvbCwgcG9ydCwgcGF0aG5hbWUgYW5kIHJlbGF0ZWRcclxuICogcHJvcGVydGllcyBhcmUgYWxsIHBvcHVsYXRlZCB0byByZWZsZWN0IHRoZSBub3JtYWxpemVkIFVSTC4gIFRoaXMgYXBwcm9hY2ggaGFzIHdpZGVcclxuICogY29tcGF0aWJpbGl0eSAtIFNhZmFyaSAxKywgTW96aWxsYSAxKywgT3BlcmEgNyssZSBldGMuICBTZWVcclxuICogaHR0cDovL3d3dy5hcHRhbmEuY29tL3JlZmVyZW5jZS9odG1sL2FwaS9IVE1MQW5jaG9yRWxlbWVudC5odG1sXHJcbiAqXHJcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBJRVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogSUUgPj0gOCBhbmQgPD0gMTAgbm9ybWFsaXplcyB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gdGhlIGFuY2hvciBub2RlIHNpbWlsYXIgdG8gdGhlIG90aGVyXHJcbiAqIGJyb3dzZXJzLiAgSG93ZXZlciwgdGhlIHBhcnNlZCBjb21wb25lbnRzIHdpbGwgbm90IGJlIHNldCBpZiB0aGUgVVJMIGFzc2lnbmVkIGRpZCBub3Qgc3BlY2lmeVxyXG4gKiB0aGVtLiAgKGUuZy4gaWYgeW91IGFzc2lnbiBhLmhyZWYgPSBcImZvb1wiLCB0aGVuIGEucHJvdG9jb2wsIGEuaG9zdCwgZXRjLiB3aWxsIGJlIGVtcHR5LikgIFdlXHJcbiAqIHdvcmsgYXJvdW5kIHRoYXQgYnkgcGVyZm9ybWluZyB0aGUgcGFyc2luZyBpbiBhIDJuZCBzdGVwIGJ5IHRha2luZyBhIHByZXZpb3VzbHkgbm9ybWFsaXplZFxyXG4gKiBVUkwgKGUuZy4gYnkgYXNzaWduaW5nIHRvIGEuaHJlZikgYW5kIGFzc2lnbmluZyBpdCBhLmhyZWYgYWdhaW4uICBUaGlzIGNvcnJlY3RseSBwb3B1bGF0ZXMgdGhlXHJcbiAqIHByb3BlcnRpZXMgc3VjaCBhcyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQsIGV0Yy5cclxuICpcclxuICogSUU3IGRvZXMgbm90IG5vcm1hbGl6ZSB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gYW4gYW5jaG9yIG5vZGUuICAoQXBwYXJlbnRseSwgaXQgZG9lcywgaWYgb25lXHJcbiAqIHVzZXMgdGhlIGlubmVyIEhUTUwgYXBwcm9hY2ggdG8gYXNzaWduIHRoZSBVUkwgYXMgcGFydCBvZiBhbiBIVE1MIHNuaXBwZXQgLVxyXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NzI3MjkpICBIb3dldmVyLCBzZXR0aW5nIGltZ1tzcmNdIGRvZXMgbm9ybWFsaXplIHRoZSBVUkwuXHJcbiAqIFVuZm9ydHVuYXRlbHksIHNldHRpbmcgaW1nW3NyY10gdG8gc29tZXRoaW5nIGxpa2UgXCJqYXZhc2NyaXB0OmZvb1wiIG9uIElFIHRocm93cyBhbiBleGNlcHRpb24uXHJcbiAqIFNpbmNlIHRoZSBwcmltYXJ5IHVzYWdlIGZvciBub3JtYWxpemluZyBVUkxzIGlzIHRvIHNhbml0aXplIHN1Y2ggVVJMcywgd2UgY2FuJ3QgdXNlIHRoYXRcclxuICogbWV0aG9kIGFuZCBJRSA8IDggaXMgdW5zdXBwb3J0ZWQuXHJcbiAqXHJcbiAqIFJlZmVyZW5jZXM6XHJcbiAqICAgaHR0cDovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEFuY2hvckVsZW1lbnRcclxuICogICBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcclxuICogICBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcclxuICogICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL3B1bGwvMjkwMlxyXG4gKiAgIGh0dHA6Ly9qYW1lcy5wYWRvbHNleS5jb20vamF2YXNjcmlwdC9wYXJzaW5nLXVybHMtd2l0aC10aGUtZG9tL1xyXG4gKlxyXG4gKiBAa2luZCBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkLlxyXG4gKiBAZGVzY3JpcHRpb24gTm9ybWFsaXplcyBhbmQgcGFyc2VzIGEgVVJMLlxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIFVSTCBhcyBhIGRpY3Rpb25hcnkuXHJcbiAqXHJcbiAqICAgfCBtZW1iZXIgbmFtZSAgIHwgRGVzY3JpcHRpb24gICAgfFxyXG4gKiAgIHwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLXxcclxuICogICB8IGhyZWYgICAgICAgICAgfCBBIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgVVJMIGlmIGl0IHdhcyBub3QgYW4gYWJzb2x1dGUgVVJMIHxcclxuICogICB8IHByb3RvY29sICAgICAgfCBUaGUgcHJvdG9jb2wgaW5jbHVkaW5nIHRoZSB0cmFpbGluZyBjb2xvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogICB8IGhvc3QgICAgICAgICAgfCBUaGUgaG9zdCBhbmQgcG9ydCAoaWYgdGhlIHBvcnQgaXMgbm9uLWRlZmF1bHQpIG9mIHRoZSBub3JtYWxpemVkVXJsICAgIHxcclxuICogICB8IHNlYXJjaCAgICAgICAgfCBUaGUgc2VhcmNoIHBhcmFtcywgbWludXMgdGhlIHF1ZXN0aW9uIG1hcmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogICB8IGhhc2ggICAgICAgICAgfCBUaGUgaGFzaCBzdHJpbmcsIG1pbnVzIHRoZSBoYXNoIHN5bWJvbFxyXG4gKiAgIHwgaG9zdG5hbWUgICAgICB8IFRoZSBob3N0bmFtZVxyXG4gKiAgIHwgcG9ydCAgICAgICAgICB8IFRoZSBwb3J0LCB3aXRob3V0IFwiOlwiXHJcbiAqICAgfCBwYXRobmFtZSAgICAgIHwgVGhlIHBhdGhuYW1lLCBiZWdpbm5pbmcgd2l0aCBcIi9cIlxyXG4gKlxyXG4gKi9cclxuXHJcbnZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4vKipcclxuICogZG9jdW1lbnRNb2RlIGlzIGFuIElFLW9ubHkgcHJvcGVydHlcclxuICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2NjMTk2OTg4KHY9dnMuODUpLmFzcHhcclxuICovXHJcbnZhciBtc2llID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xyXG5cclxuZnVuY3Rpb24gdXJsUGFydHModXJsKSB7XHJcbiAgdmFyIGhyZWYgPSB1cmw7XHJcblxyXG4gIGlmIChtc2llKSB7XHJcbiAgICAvLyBOb3JtYWxpemUgYmVmb3JlIHBhcnNlLiAgUmVmZXIgSW1wbGVtZW50YXRpb24gTm90ZXMgb24gd2h5IHRoaXMgaXNcclxuICAgIC8vIGRvbmUgaW4gdHdvIHN0ZXBzIG9uIElFLlxyXG4gICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xyXG4gIH1cclxuXHJcbiAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XHJcblxyXG4gIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcclxuICByZXR1cm4ge1xyXG4gICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcclxuICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXHJcbiAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxyXG4gICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxyXG4gICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcclxuICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcclxuICAgIHBvcnQ6IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybFBhcnNpbmdOb2RlLnBvcnQpPyB1cmxQYXJzaW5nTm9kZS5wb3J0OiA4MCxcclxuICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpXHJcbiAgICAgID8gdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcclxuICAgICAgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGEgcXVlcnkgc3RyaW5nIChzZWFyY2ggcGFydCBvZiBhIHVybCkgYW5kIHJldHVybnMgYSBkaWN0aW9uYXJ5IHdpdGhcclxuICogdGhlIGRpZmZlcmVudCBrZXkgdmFsdWUgcGFpcnNcclxuICogQHBhcmFtIHtzdHJpbmd9IHFzIHF1ZXJ5U3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeVN0cmluZ1RvT2JqKHFzLCBjb25kKSB7XHJcbiAgdmFyIHBhaXJzLCBxc09iajtcclxuXHJcbiAgY29uZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmQpPyBjb25kIDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBxcyA9IHFzLnRyaW0oKS5yZXBsYWNlKC9eXFw/LywgJycpO1xyXG4gIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcclxuICBxc09iaiA9IHt9O1xyXG5cclxuICB1dGlsaXRpZXMuZm9yRWFjaChwYWlycywgZnVuY3Rpb24gKHBhaXIpIHtcclxuICAgIHZhciBrZXlWYWx1ZSwga2V5LCB2YWx1ZTtcclxuICAgIGlmIChwYWlyICE9PSAnJykge1xyXG4gICAgICBrZXlWYWx1ZSA9IHBhaXIuc3BsaXQoJz0nKTtcclxuICAgICAga2V5ID0ga2V5VmFsdWVbMF07XHJcbiAgICAgIHZhbHVlID0ga2V5VmFsdWVbMV07XHJcbiAgICAgIGlmKGNvbmQoa2V5LCB2YWx1ZSkpe1xyXG4gICAgICAgIHFzT2JqW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcXNPYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW4gb2JqZWN0IGFuZCBzZXJpYWxpemVzIGl0IGludG8gYSBxdWVyeSBzdHJpbmcgd2l0aG91dCB0aGUgbGVhZGluZyAnPydcclxuICogQHBhcmFtIG9ialxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gb2JqVG9RdWVyeVN0cmluZyhvYmopIHtcclxuICB2YXIgcGFpcnMgPSBbXTtcclxuICB1dGlsaXRpZXMuZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICBwYWlycy5wdXNoKGtleSArICc9JyArIHZhbHVlKTtcclxuICB9KTtcclxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB1cmxQYXJ0czogdXJsUGFydHMsXHJcbiAgcXVlcnlTdHJpbmdUb09iajogcXVlcnlTdHJpbmdUb09iaixcclxuICBvYmpUb1F1ZXJ5U3RyaW5nOiBvYmpUb1F1ZXJ5U3RyaW5nXHJcbn07XHJcbiIsIi8qanNoaW50IHVudXNlZDpmYWxzZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBOT0RFX1RZUEVfRUxFTUVOVCA9IDE7XHJcbnZhciBTTkFLRV9DQVNFX1JFR0VYUCA9IC9bQS1aXS9nO1xyXG52YXIgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSskL2k7XHJcbi8qanNsaW50IG1heGxlbjogNTAwICovXHJcbnZhciBJU084MDg2X1JFR0VYUCA9IC9eKFtcXCstXT9cXGR7NH0oPyFcXGR7Mn1cXGIpKSgoLT8pKCgwWzEtOV18MVswLTJdKShcXDMoWzEyXVxcZHwwWzEtOV18M1swMV0pKT98VyhbMC00XVxcZHw1WzAtMl0pKC0/WzEtN10pP3woMDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKFswLTVdXFxkfDZbMS02XSkpKShbVFxcc10oKChbMDFdXFxkfDJbMC0zXSkoKDo/KVswLTVdXFxkKT98MjRcXDo/MDApKFtcXC4sXVxcZCsoPyE6KSk/KT8oXFwxN1swLTVdXFxkKFtcXC4sXVxcZCspPyk/KFt6Wl18KFtcXCstXSkoWzAxXVxcZHwyWzAtM10pOj8oWzAtNV1cXGQpPyk/KT8pPyQvO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG5vb3AoKXsgfVxyXG5cclxuZnVuY3Rpb24gaXNOdWxsKG8pIHtcclxuICByZXR1cm4gbyA9PT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEZWZpbmVkKG8pe1xyXG4gIHJldHVybiBvICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG8pe1xyXG4gIHJldHVybiBvID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihzdHIpe1xyXG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlcihudW0pe1xyXG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XHJcbiAgcmV0dXJuIHV0aWxpdGllcy5pc09iamVjdChvYmopICYmIG9iai53aW5kb3cgPT09IG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheShhcnJheSl7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggYXJyYXkgKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheUxpa2Uob2JqKSB7XHJcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB1dGlsaXRpZXMuaXNXaW5kb3cob2JqKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihvYmopIHx8IHV0aWxpdGllcy5pc1VuZGVmaW5lZChvYmopKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aDtcclxuXHJcbiAgaWYgKG9iai5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFX0VMRU1FTlQgJiYgbGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcob2JqKSB8fCB1dGlsaXRpZXMuaXNBcnJheShvYmopIHx8IGxlbmd0aCA9PT0gMCB8fFxyXG4gICAgdHlwZW9mIGxlbmd0aCA9PT0gJ251bWJlcicgJiYgbGVuZ3RoID4gMCAmJiAobGVuZ3RoIC0gMSkgaW4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcoc3RyKSB7XHJcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTm90RW1wdHlTdHJpbmcoc3RyKSB7XHJcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggIT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycmF5TGlrZU9ialRvQXJyYXkoYXJncykge1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XHJcbiAgdmFyIGtleSwgbGVuZ3RoO1xyXG4gIGlmIChvYmopIHtcclxuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikpIHtcclxuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgLy8gTmVlZCB0byBjaGVjayBpZiBoYXNPd25Qcm9wZXJ0eSBleGlzdHMsXHJcbiAgICAgICAgLy8gYXMgb24gSUU4IHRoZSByZXN1bHQgb2YgcXVlcnlTZWxlY3RvckFsbCBpcyBhbiBvYmplY3Qgd2l0aG91dCBhIGhhc093blByb3BlcnR5IGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb3RvdHlwZScgJiYga2V5ICE9PSAnbGVuZ3RoJyAmJiBrZXkgIT09ICduYW1lJyAmJiAoIW9iai5oYXNPd25Qcm9wZXJ0eSB8fCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSkpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgIHZhciBpc1ByaW1pdGl2ZSA9IHR5cGVvZiBvYmogIT09ICdvYmplY3QnO1xyXG4gICAgICBmb3IgKGtleSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcclxuICAgICAgICBpZiAoaXNQcmltaXRpdmUgfHwga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChvYmouZm9yRWFjaCAmJiBvYmouZm9yRWFjaCAhPT0gZm9yRWFjaCkge1xyXG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCwgb2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbmFrZV9jYXNlKG5hbWUsIHNlcGFyYXRvcikge1xyXG4gIHNlcGFyYXRvciA9IHNlcGFyYXRvciB8fCAnXyc7XHJcbiAgcmV0dXJuIG5hbWUucmVwbGFjZShTTkFLRV9DQVNFX1JFR0VYUCwgZnVuY3Rpb24obGV0dGVyLCBwb3MpIHtcclxuICAgIHJldHVybiAocG9zID8gc2VwYXJhdG9yIDogJycpICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbCl7XHJcbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyhlbWFpbCkpe1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KGVtYWlsLnRyaW0oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dGVuZCAob2JqKSB7XHJcbiAgdmFyIGFyZywgaSwgaztcclxuICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBmb3IgKGsgaW4gYXJnKSB7XHJcbiAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcclxuICAgICAgICBpZihpc09iamVjdChvYmpba10pICYmICFpc051bGwob2JqW2tdKSAmJiBpc09iamVjdChhcmdba10pKXtcclxuICAgICAgICAgIG9ialtrXSA9IGV4dGVuZCh7fSwgb2JqW2tdLCBhcmdba10pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIG9ialtrXSA9IGFyZ1trXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKXtcclxuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY2FwaXRhbGl6ZShzKSB7XHJcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2Qgd29ya3MgdGhlIHNhbWUgd2F5IGFycmF5LnByb3RvdHlwZS5tYXAgd29ya3MgYnV0IGlmIHRoZSB0cmFuc2Zvcm1lciByZXR1cm5zIHVuZGVmaW5lLCB0aGVuXHJcbiAqIGl0IHdvbid0IGJlIGFkZGVkIHRvIHRoZSB0cmFuc2Zvcm1lZCBBcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KGFycmF5LCB0cmFuc2Zvcm1lcikge1xyXG4gIHZhciB0cmFuc2Zvcm1lZEFycmF5ID0gW107XHJcblxyXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpe1xyXG4gICAgdmFyIHRyYW5zZm9ybWVkSXRlbSA9IHRyYW5zZm9ybWVyKGl0ZW0sIGluZGV4KTtcclxuICAgIGlmKHV0aWxpdGllcy5pc0RlZmluZWQodHJhbnNmb3JtZWRJdGVtKSkge1xyXG4gICAgICB0cmFuc2Zvcm1lZEFycmF5LnB1c2godHJhbnNmb3JtZWRJdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zZm9ybWVkQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRml4ZWREaWdpdHMobnVtLCBkaWdpdHMpIHtcclxuICB2YXIgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XHJcbiAgZGlnaXRzID0gdXRpbGl0aWVzLmlzTnVtYmVyKGRpZ2l0cykgPyBkaWdpdHMgOiAwO1xyXG4gIG51bSA9IHV0aWxpdGllcy5pc051bWJlcihudW0pID8gbnVtIDogcGFyc2VJbnQobnVtLCAxMCk7XHJcbiAgaWYodXRpbGl0aWVzLmlzTnVtYmVyKG51bSkgJiYgIWlzTmFOKG51bSkpe1xyXG4gICAgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XHJcbiAgICB3aGlsZShmb3JtYXR0ZWROdW0ubGVuZ3RoIDwgZGlnaXRzKSB7XHJcbiAgICAgIGZvcm1hdHRlZE51bSA9ICcwJyArIGZvcm1hdHRlZE51bTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtYXR0ZWROdW07XHJcbiAgfVxyXG4gIHJldHVybiBOYU4gKyAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGRlbGF5KSB7XHJcbiAgdmFyIHByZXZpb3VzQ2FsbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gKGRlbGF5ICsgMSk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmICgodGltZSAtIHByZXZpb3VzQ2FsbCkgPj0gZGVsYXkpIHtcclxuICAgICAgcHJldmlvdXNDYWxsID0gdGltZTtcclxuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJvdW5jZSAoY2FsbGJhY2ssIHdhaXQpIHtcclxuICB2YXIgdGltZW91dElkO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKCl7XHJcbiAgICBpZih0aW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICB9XHJcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcclxuICAgIH0sIHdhaXQpO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIGEgZnVuY3Rpb24gZGVzaWduZWQgdG8gYmxvdyB1cCB0aGUgc3RhY2sgaW4gYSBuYWl2ZSB3YXlcclxuLy8gYnV0IGl0IGlzIG9rIGZvciB2aWRlb0pzIGNoaWxkcmVuIGNvbXBvbmVudHNcclxuZnVuY3Rpb24gdHJlZVNlYXJjaChyb290LCBnZXRDaGlsZHJlbiwgZm91bmQpe1xyXG4gIHZhciBjaGlsZHJlbiA9IGdldENoaWxkcmVuKHJvb3QpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgaWYgKGZvdW5kKGNoaWxkcmVuW2ldKSkge1xyXG4gICAgICByZXR1cm4gY2hpbGRyZW5baV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIGVsID0gdHJlZVNlYXJjaChjaGlsZHJlbltpXSwgZ2V0Q2hpbGRyZW4sIGZvdW5kKTtcclxuICAgICAgaWYgKGVsKXtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVjaG9Gbih2YWwpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9O1xyXG59XHJcblxyXG4vL05vdGU6IFN1cHBvcnRlZCBmb3JtYXRzIGNvbWUgZnJvbSBodHRwOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXHJcbi8vIGFuZCB0aGUgaXNvODYwMSByZWdleCBjb21lcyBmcm9tIGh0dHA6Ly93d3cucGVsYWdvZGVzaWduLmNvbS9ibG9nLzIwMDkvMDUvMjAvaXNvLTg2MDEtZGF0ZS12YWxpZGF0aW9uLXRoYXQtZG9lc250LXN1Y2svXHJcbmZ1bmN0aW9uIGlzSVNPODYwMSh2YWx1ZSkge1xyXG4gIGlmKHV0aWxpdGllcy5pc051bWJlcih2YWx1ZSkpe1xyXG4gICAgdmFsdWUgPSB2YWx1ZSArICcnOyAgLy93ZSBtYWtlIHN1cmUgdGhhdCB3ZSBhcmUgd29ya2luZyB3aXRoIHN0cmluZ3NcclxuICB9XHJcblxyXG4gIGlmKCF1dGlsaXRpZXMuaXNTdHJpbmcodmFsdWUpKXtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBJU084MDg2X1JFR0VYUC50ZXN0KHZhbHVlLnRyaW0oKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIEJyb3dzZXIgaXMgSUU5IGFuZCBiZWxvd1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzT2xkSUUoKSB7XHJcbiAgdmFyIHZlcnNpb24gPSB1dGlsaXRpZXMuZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKTtcclxuICBpZiAodmVyc2lvbiA9PT0gLTEpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2ZXJzaW9uIDwgMTA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxyXG4gKiBTb3VyY2U6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDkodj12cy44NSkuYXNweFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcikge1xyXG4gIHZhciBydiA9IC0xO1xyXG5cclxuICBpZiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicpIHtcclxuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KVwiKTtcclxuICAgIHZhciByZXMgPSByZS5leGVjKHVhKTtcclxuICAgIGlmIChyZXMgIT09IG51bGwpIHtcclxuICAgICAgcnYgPSBwYXJzZUZsb2F0KHJlc1sxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcnY7XHJcbn1cclxuXHJcbi8qKiogTW9iaWxlIFV0aWxpdHkgZnVuY3Rpb25zICoqKi9cclxuZnVuY3Rpb24gaXNJRGV2aWNlKCkge1xyXG4gIHJldHVybiAvaVAoaG9uZXxhZCkvLnRlc3QodXRpbGl0aWVzLl9VQSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8QW5kcm9pZHxXaW5kb3dzIFBob25lLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0lQaG9uZSgpIHtcclxuICByZXR1cm4gL2lQKGhvbmV8b2QpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FuZHJvaWQoKSB7XHJcbiAgcmV0dXJuIC9BbmRyb2lkLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xyXG59XHJcblxyXG52YXIgdXRpbGl0aWVzID0ge1xyXG4gIF9VQTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcclxuICBub29wOiBub29wLFxyXG4gIGlzTnVsbDogaXNOdWxsLFxyXG4gIGlzRGVmaW5lZDogaXNEZWZpbmVkLFxyXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcclxuICBpc09iamVjdDogaXNPYmplY3QsXHJcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcclxuICBpc051bWJlcjogaXNOdW1iZXIsXHJcbiAgaXNXaW5kb3c6IGlzV2luZG93LFxyXG4gIGlzQXJyYXk6IGlzQXJyYXksXHJcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxyXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcclxuICBpc0VtcHR5U3RyaW5nOiBpc0VtcHR5U3RyaW5nLFxyXG4gIGlzTm90RW1wdHlTdHJpbmc6IGlzTm90RW1wdHlTdHJpbmcsXHJcbiAgYXJyYXlMaWtlT2JqVG9BcnJheTogYXJyYXlMaWtlT2JqVG9BcnJheSxcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHNuYWtlX2Nhc2U6IHNuYWtlX2Nhc2UsXHJcbiAgaXNWYWxpZEVtYWlsOiBpc1ZhbGlkRW1haWwsXHJcbiAgZXh0ZW5kOiBleHRlbmQsXHJcbiAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcclxuICBkZWNhcGl0YWxpemU6IGRlY2FwaXRhbGl6ZSxcclxuICB0cmFuc2Zvcm1BcnJheTogdHJhbnNmb3JtQXJyYXksXHJcbiAgdG9GaXhlZERpZ2l0czogdG9GaXhlZERpZ2l0cyxcclxuICB0aHJvdHRsZTogdGhyb3R0bGUsXHJcbiAgZGVib3VuY2U6IGRlYm91bmNlLFxyXG4gIHRyZWVTZWFyY2g6IHRyZWVTZWFyY2gsXHJcbiAgZWNob0ZuOiBlY2hvRm4sXHJcbiAgaXNJU084NjAxOiBpc0lTTzg2MDEsXHJcbiAgaXNPbGRJRTogaXNPbGRJRSxcclxuICBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbjogZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24sXHJcbiAgaXNJRGV2aWNlOiBpc0lEZXZpY2UsXHJcbiAgaXNNb2JpbGU6IGlzTW9iaWxlLFxyXG4gIGlzSVBob25lOiBpc0lQaG9uZSxcclxuICBpc0FuZHJvaWQ6IGlzQW5kcm9pZFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB1dGlsaXRpZXM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciB4bWwgPSB7fTtcclxuXHJcbnhtbC5zdHJUb1hNTERvYyA9IGZ1bmN0aW9uIHN0clRvWE1MRG9jKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xyXG4gIC8vSUUgOFxyXG4gIGlmKHR5cGVvZiB3aW5kb3cuRE9NUGFyc2VyID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICB2YXIgeG1sRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTERPTScpO1xyXG4gICAgeG1sRG9jdW1lbnQuYXN5bmMgPSBmYWxzZTtcclxuICAgIHhtbERvY3VtZW50LmxvYWRYTUwoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XHJcbiAgICByZXR1cm4geG1sRG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xyXG4gICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIHZhciBwYXJzZWREb2N1bWVudDtcclxuXHJcbiAgICAvL05vdGU6IFRoaXMgdHJ5IGNhdGNoIGlzIHRvIGRlYWwgd2l0aCB0aGUgZmFjdCB0aGF0IG9uIElFIHBhcnNlci5wYXJzZUZyb21TdHJpbmcgZG9lcyB0aHJvdyBhbiBlcnJvciBidXQgdGhlIHJlc3Qgb2YgdGhlIGJyb3dzZXJzIGRvbid0LlxyXG4gICAgdHJ5IHtcclxuICAgICAgcGFyc2VkRG9jdW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UsIFwiYXBwbGljYXRpb24veG1sXCIpO1xyXG5cclxuICAgICAgaWYoaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKSl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwieG1sLnN0clRvWE1MRE9DOiBFcnJvciBwYXJzaW5nIHRoZSBzdHJpbmc6ICdcIiArIHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UgKyBcIidcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlZERvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB7XHJcbiAgICB0cnkgeyAvLyBwYXJzZXIgYW5kIHBhcnNlcmVycm9yTlMgY291bGQgYmUgY2FjaGVkIG9uIHN0YXJ0dXAgZm9yIGVmZmljaWVuY3lcclxuICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKSxcclxuICAgICAgICBlcnJvbmVvdXNQYXJzZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoJ0lOVkFMSUQnLCAndGV4dC94bWwnKSxcclxuICAgICAgICBwYXJzZXJlcnJvck5TID0gZXJyb25lb3VzUGFyc2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXS5uYW1lc3BhY2VVUkk7XHJcblxyXG4gICAgICBpZiAocGFyc2VyZXJyb3JOUyA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKSB7XHJcbiAgICAgICAgLy8gSW4gUGhhbnRvbUpTIHRoZSBwYXJzZWVycm9yIGVsZW1lbnQgZG9lc24ndCBzZWVtIHRvIGhhdmUgYSBzcGVjaWFsIG5hbWVzcGFjZSwgc28gd2UgYXJlIGp1c3QgZ3Vlc3NpbmcgaGVyZSA6KFxyXG4gICAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCA+IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHBhcnNlcmVycm9yTlMsICdwYXJzZXJlcnJvcicpLmxlbmd0aCA+IDA7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vTm90ZSBvbiBJRSBwYXJzZVN0cmluZyB0aHJvd3MgYW4gZXJyb3IgYnkgaXRzZWxmIGFuZCBpdCB3aWxsIG5ldmVyIHJlYWNoIHRoaXMgY29kZS4gQmVjYXVzZSBpdCB3aWxsIGhhdmUgZmFpbGVkIGJlZm9yZVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnhtbC5wYXJzZVRleHQgPSBmdW5jdGlvbiBwYXJzZVRleHQgKHNWYWx1ZSkge1xyXG4gIGlmICgvXlxccyokLy50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIG51bGw7IH1cclxuICBpZiAoL14oPzp0cnVlfGZhbHNlKSQvaS50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIHNWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjsgfVxyXG4gIGlmIChpc0Zpbml0ZShzVmFsdWUpKSB7IHJldHVybiBwYXJzZUZsb2F0KHNWYWx1ZSk7IH1cclxuICBpZiAodXRpbGl0aWVzLmlzSVNPODYwMShzVmFsdWUpKSB7IHJldHVybiBuZXcgRGF0ZShzVmFsdWUpOyB9XHJcbiAgcmV0dXJuIHNWYWx1ZS50cmltKCk7XHJcbn07XHJcblxyXG54bWwuSlhPTlRyZWUgPSBmdW5jdGlvbiBKWE9OVHJlZSAob1hNTFBhcmVudCkge1xyXG4gIHZhciBwYXJzZVRleHQgPSB4bWwucGFyc2VUZXh0O1xyXG5cclxuICAvL1RoZSBkb2N1bWVudCBvYmplY3QgaXMgYW4gZXNwZWNpYWwgb2JqZWN0IHRoYXQgaXQgbWF5IG1pc3Mgc29tZSBmdW5jdGlvbnMgb3IgYXR0cnMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxyXG4gIC8vVG8gcHJldmVudCB0aGlzIHByb2JsZW0gd2l0aCBjcmVhdGUgdGhlIEpYT05UcmVlIHVzaW5nIHRoZSByb290IGNoaWxkTm9kZSB3aGljaCBpcyBhIGZ1bGx5IGZsZXNoZWQgbm9kZSBvbiBhbGwgc3VwcG9ydGVkXHJcbiAgLy9icm93c2Vycy5cclxuICBpZihvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCl7XHJcbiAgICByZXR1cm4gbmV3IHhtbC5KWE9OVHJlZShvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpZiAob1hNTFBhcmVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIHZhciBzQ29sbGVjdGVkVHh0ID0gXCJcIjtcclxuICAgIGZvciAodmFyIG9Ob2RlLCBzUHJvcCwgdkNvbnRlbnQsIG5JdGVtID0gMDsgbkl0ZW0gPCBvWE1MUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBuSXRlbSsrKSB7XHJcbiAgICAgIG9Ob2RlID0gb1hNTFBhcmVudC5jaGlsZE5vZGVzLml0ZW0obkl0ZW0pO1xyXG4gICAgICAvKmpzaGludCBiaXR3aXNlOiBmYWxzZSovXHJcbiAgICAgIGlmICgob05vZGUubm9kZVR5cGUgLSAxIHwgMSkgPT09IDMpIHsgc0NvbGxlY3RlZFR4dCArPSBvTm9kZS5ub2RlVHlwZSA9PT0gMyA/IG9Ob2RlLm5vZGVWYWx1ZS50cmltKCkgOiBvTm9kZS5ub2RlVmFsdWU7IH1cclxuICAgICAgZWxzZSBpZiAob05vZGUubm9kZVR5cGUgPT09IDEgJiYgIW9Ob2RlLnByZWZpeCkge1xyXG4gICAgICAgIHNQcm9wID0gdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvTm9kZS5ub2RlTmFtZSk7XHJcbiAgICAgICAgdkNvbnRlbnQgPSBuZXcgeG1sLkpYT05UcmVlKG9Ob2RlKTtcclxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShzUHJvcCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzW3NQcm9wXS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHsgdGhpc1tzUHJvcF0gPSBbdGhpc1tzUHJvcF1dOyB9XHJcbiAgICAgICAgICB0aGlzW3NQcm9wXS5wdXNoKHZDb250ZW50KTtcclxuICAgICAgICB9IGVsc2UgeyB0aGlzW3NQcm9wXSA9IHZDb250ZW50OyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzQ29sbGVjdGVkVHh0KSB7IHRoaXMua2V5VmFsdWUgPSBwYXJzZVRleHQoc0NvbGxlY3RlZFR4dCk7IH1cclxuICB9XHJcblxyXG4gIC8vSUU4IFN0dXBpZCBmaXhcclxuICB2YXIgaGFzQXR0ciA9IHR5cGVvZiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnPyBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoID4gMDogb1hNTFBhcmVudC5oYXNBdHRyaWJ1dGVzKCk7XHJcbiAgaWYgKGhhc0F0dHIpIHtcclxuICAgIHZhciBvQXR0cmliO1xyXG4gICAgZm9yICh2YXIgbkF0dHJpYiA9IDA7IG5BdHRyaWIgPCBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBuQXR0cmliKyspIHtcclxuICAgICAgb0F0dHJpYiA9IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5pdGVtKG5BdHRyaWIpO1xyXG4gICAgICB0aGlzW1wiQFwiICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvQXR0cmliLm5hbWUpXSA9IHBhcnNlVGV4dChvQXR0cmliLnZhbHVlLnRyaW0oKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxueG1sLkpYT05UcmVlLnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oYXR0cikge1xyXG4gIHJldHVybiB0aGlzWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xyXG59O1xyXG5cclxueG1sLnRvSlhPTlRyZWUgPSBmdW5jdGlvbiB0b0pYT05UcmVlKHhtbFN0cmluZyl7XHJcbiAgdmFyIHhtbERvYyA9IHhtbC5zdHJUb1hNTERvYyh4bWxTdHJpbmcpO1xyXG4gIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKHhtbERvYyk7XHJcbn07XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGV4dHJhY3QgdGhlIGtleXZhbHVlIG9mIGEgSlhPTlRyZWUgb2JqXHJcbiAqXHJcbiAqIEBwYXJhbSB4bWxPYmoge0pYT05UcmVlfVxyXG4gKiByZXR1cm4gdGhlIGtleSB2YWx1ZSBvciB1bmRlZmluZWQ7XHJcbiAqL1xyXG54bWwua2V5VmFsdWUgPSBmdW5jdGlvbiBnZXRLZXlWYWx1ZSh4bWxPYmopIHtcclxuICBpZih4bWxPYmope1xyXG4gICAgcmV0dXJuIHhtbE9iai5rZXlWYWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuXHJcbnhtbC5hdHRyID0gZnVuY3Rpb24gZ2V0QXR0clZhbHVlKHhtbE9iaiwgYXR0cikge1xyXG4gIGlmKHhtbE9iaikge1xyXG4gICAgcmV0dXJuIHhtbE9ialsnQCcgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKGF0dHIpXTtcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuXHJcbnhtbC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGVYTUwoc3RyKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpXHJcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXHJcbiAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jyk7XHJcbn07XHJcblxyXG54bWwuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlWE1MKHN0cikge1xyXG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvJmFwb3M7L2csIFwiJ1wiKVxyXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKVxyXG4gICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxyXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxyXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxucmVxdWlyZSgnLi9wbHVnaW4vY29tcG9uZW50cy9hZHMtbGFiZWxfNCcpO1xyXG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2JsYWNrLXBvc3Rlcl80Jyk7XHJcblxyXG52YXIgdmlkZW9Kc1ZBU1QgPSByZXF1aXJlKCcuL3BsdWdpbi92aWRlb2pzLnZhc3QudnBhaWQnKTtcclxuXHJcbnZpZGVvanMucGx1Z2luKCd2YXN0Q2xpZW50JywgdmlkZW9Kc1ZBU1QpO1xyXG5cclxuIl19
