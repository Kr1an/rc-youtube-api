/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(1);
	
	var _componentsAppComponent = __webpack_require__(5);
	
	var _componentsAppComponent2 = _interopRequireDefault(_componentsAppComponent);
	
	var _utilsStorage = __webpack_require__(25);
	
	var _utilsStorage2 = _interopRequireDefault(_utilsStorage);
	
	// import InfoService from './utils/info.service';
	
	// const m = new InfoService();
	// m.updateQuery('oauth');
	// m.getData(10)
	//   .then(
	//     (data) => { console.log(data); },
	//     (error) => { console.log(error); },
	//   );
	// setTimeout(() => {
	//   m.next();
	//   m.getData(10)
	//    .then(
	//       (data) => { console.log(data); },
	//       (error) => { console.log(error); },
	//     );
	// }, 1000);
	
	var storage = new _utilsStorage2['default']();
	
	new _componentsAppComponent2['default']({
	  container: document.getElementById('app'),
	  storage: storage
	}).appRender();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded!./main.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/** postcss-bem-linter: define main-component; weak */\n.main-component__title {\n  color: #555;\n}\n\n/** postcss-bem-linter: define utilities */\n.u-ellipsis {\n  color: #555;\n}\n", ""]);
	
	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(6);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _searchComponent = __webpack_require__(7);
	
	var _searchComponent2 = _interopRequireDefault(_searchComponent);
	
	var _resultComponent = __webpack_require__(10);
	
	var _resultComponent2 = _interopRequireDefault(_resultComponent);
	
	__webpack_require__(22);
	
	var _utilsInfoService = __webpack_require__(24);
	
	var _utilsInfoService2 = _interopRequireDefault(_utilsInfoService);
	
	var AppComponent = (function (_Component) {
	  _inherits(AppComponent, _Component);
	
	  function AppComponent(options) {
	    _classCallCheck(this, AppComponent);
	
	    _get(Object.getPrototypeOf(AppComponent.prototype), 'constructor', this).call(this, options);
	    this.addListeners([this.onStorageChange.bind(this)]);
	    this.storage.data.videoItems = [];
	    this.dispatch({
	      infoService: new _utilsInfoService2['default'](),
	      maxItemCount: 100,
	      maxSearchValueLength: 20,
	      itemsPerPage: this.calculateItemsPerPage(),
	      videoItems: []
	    });
	    window.onresize = this.onWindowResize.bind(this);
	    this.addContent();
	  }
	
	  _createClass(AppComponent, [{
	    key: 'calculateItemsPerPage',
	    value: function calculateItemsPerPage() {
	      return Math.ceil(window.innerWidth / 500);
	    }
	  }, {
	    key: 'onWindowResize',
	    value: function onWindowResize() {
	      var _this = this;
	
	      var newItemsPerPage = this.calculateItemsPerPage();
	      if (this.storage.data.itemsPerPage !== newItemsPerPage) {
	        console.log("resized");
	        this.storage.data.infoService.getData(newItemsPerPage).then(function (obj) {
	          _this.storage.dispatch({
	            videoItems: obj.content,
	            itemsPerPage: newItemsPerPage
	          });
	          setTimeout(function () {
	            _this.storage.dispatch({});
	          }, 20);
	        }, function (err) {
	          console.log(err);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <div class="appContainer">\n        ' + this.content.search + '\n        ' + this.content.result + '\n      </div>\n    ';
	    }
	  }, {
	    key: 'addContent',
	    value: function addContent() {
	      _get(Object.getPrototypeOf(AppComponent.prototype), 'addContent', this).call(this);
	      this.content.search = new _searchComponent2['default'](this.options);
	      this.content.result = new _resultComponent2['default'](this.options);
	    }
	  }, {
	    key: 'appRender',
	    value: function appRender() {
	      console.log("App Render");
	      this.container.innerHTML = this.render();
	      this.setHandlers();
	    }
	  }, {
	    key: 'onStorageChange',
	    value: function onStorageChange() {
	      this.storage.data.infoService.updateQuery(this.storage.data.searchValue);
	      this.appRender();
	    }
	  }]);
	
	  return AppComponent;
	})(_component2['default']);
	
	module.exports = AppComponent;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Component = (function () {
	  function Component(options) {
	    _classCallCheck(this, Component);
	
	    this.storage = options.storage;
	    this.container = options.container;
	    this.options = options;
	
	    this.addListeners = this.addListeners.bind(this.storage);
	    this.dispatch = this.dispatch.bind(this.storage);
	
	    this.toString = this.render;
	    this.placeHolder = 'Component Placeholder';
	    this.addContent();
	  }
	
	  _createClass(Component, [{
	    key: 'addListeners',
	    value: function addListeners(handlers) {
	      this.addListeners(handlers);
	    }
	  }, {
	    key: 'addContent',
	    value: function addContent() {
	      this.content = {};
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch(action) {
	      this.dispatch(action);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.placeHolder;
	    }
	  }, {
	    key: 'setHandlers',
	    value: function setHandlers() {
	      var _this = this;
	
	      Object.keys(this.content).forEach(function (key) {
	        _this.content[key].setHandlers();
	      });
	    }
	  }]);
	
	  return Component;
	})();
	
	module.exports = Component;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(6);
	
	var _component2 = _interopRequireDefault(_component);
	
	__webpack_require__(8);
	
	var SearchComponent = (function (_Component) {
	  _inherits(SearchComponent, _Component);
	
	  function SearchComponent(options) {
	    _classCallCheck(this, SearchComponent);
	
	    _get(Object.getPrototypeOf(SearchComponent.prototype), 'constructor', this).call(this, options);
	    this.dispatch({ searchValue: '' });
	  }
	
	  _createClass(SearchComponent, [{
	    key: 'setHandlers',
	    value: function setHandlers() {
	      document.getElementById('input').oninput = this.onInputChange.bind(this);
	      document.getElementById('input').onfocus = this.onInputChange.bind(this);
	      if (this.storage.data.isFocused) {
	        document.getElementById('input').focus();
	      }
	      document.getElementById('input').value = document.getElementById('input').value;
	    }
	  }, {
	    key: 'onInputChange',
	    value: function onInputChange(e) {
	      var _this = this;
	
	      this.storage.data.searchValue = e.target.value;
	      this.storage.data.infoService.updateQuery(this.storage.data.searchValue);
	      this.storage.data.infoService.getData(this.storage.data.itemsPerPage).then(function (obj) {
	        if (_this.storage.data.searchValue === obj.query) {
	          _this.storage.data.isFocused = document.getElementById('input') === document.activeElement;
	          _this.storage.dispatch({ videoItems: obj.content });
	        }
	      }, function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <div class="search-container">\n        <input type="text" tabindex="1" placeholder="find videos" autocomple="on" correction="off" type="text" id="input" value="' + this.storage.data.searchValue + '">\n      </div>\n    ';
	    }
	  }]);
	
	  return SearchComponent;
	})(_component2['default']);
	
	module.exports = SearchComponent;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./search.component.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./search.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".search-container {\n  background: #C12127;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 10vh;\n}\n\n.search-container input {\n  font-size: 4vh;\n  display: relative;\n  height: 7vh;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0;\n  padding: 0.5vh 2vh;\n  color: #eee;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.separator {\n  background: gray;\n  opacity: 0.5;\n  width: 100%;\n  margin: 0 auto;\n  border: 0 solid black;\n  border-radius: 3vh;\n}\n\n@media only screen and (max-width: 800px) {\n  .search-container input {\n    width: 90%;\n  }\n  .separator {\n    width: 100%;\n  }\n  .separator input {\n    margin: 0 30px;\n  }\n  .result-navigation {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n}\n\n@media only screen and (min-width: 800px) {\n  .search-container input {\n    width: 60%;\n  }\n  .separator {\n    width: 50%;\n  }\n  .result-navigation {\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n  }\n  .result-navigation input {\n    margin: 0;\n  }\n}\n", ""]);
	
	// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(6);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _listCompontent = __webpack_require__(11);
	
	var _listCompontent2 = _interopRequireDefault(_listCompontent);
	
	var _navigatorComponent = __webpack_require__(17);
	
	var _navigatorComponent2 = _interopRequireDefault(_navigatorComponent);
	
	__webpack_require__(20);
	
	var ResultComponent = (function (_Component) {
	  _inherits(ResultComponent, _Component);
	
	  function ResultComponent() {
	    _classCallCheck(this, ResultComponent);
	
	    _get(Object.getPrototypeOf(ResultComponent.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ResultComponent, [{
	    key: 'addContent',
	    value: function addContent() {
	      _get(Object.getPrototypeOf(ResultComponent.prototype), 'addContent', this).call(this);
	      this.content.list = new _listCompontent2['default'](this.options);
	      this.content.navigator = new _navigatorComponent2['default'](this.options);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var lastAction = this.storage.data.infoService.lastAction;
	      var swipeClass = lastAction === 0 ? 'swipe-left' : lastAction === 1 ? 'swipe-rigth' : '';
	      console.log(swipeClass);
	      return '\n      <div class="result-container">\n        <div class="list-keeper ' + swipeClass + '">\n          ' + this.content.list + '\n        </div>\n        ' + this.content.navigator + '\n      </div>\n    ';
	    }
	  }]);
	
	  return ResultComponent;
	})(_component2['default']);
	
	module.exports = ResultComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(6);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _itemComponent = __webpack_require__(12);
	
	var _itemComponent2 = _interopRequireDefault(_itemComponent);
	
	__webpack_require__(15);
	
	var touchstartX = 0;
	var touchstartY = 0;
	var touchendX = 0;
	var touchendY = 0;
	
	var ListComponent = (function (_Component) {
	  _inherits(ListComponent, _Component);
	
	  function ListComponent(options) {
	    _classCallCheck(this, ListComponent);
	
	    _get(Object.getPrototypeOf(ListComponent.prototype), 'constructor', this).call(this, options);
	    this.dispatch({ itemCount: 10 });
	  }
	
	  _createClass(ListComponent, [{
	    key: 'setHandlers',
	    value: function setHandlers() {
	      var _this = this;
	
	      var gesuredZone = document.getElementById('list');
	      gesuredZone.addEventListener('touchstart', function (event) {
	        touchstartX = event.changedTouches[0].screenX;
	      }, false);
	      gesuredZone.addEventListener('touchend', function (event) {
	        touchendX = event.changedTouches[0].screenX;
	        _this.handleGesure();
	      }, false);
	      gesuredZone.addEventListener('mousedown', function (event) {
	        touchstartX = event.pageX;
	      }, false);
	      gesuredZone.addEventListener('mouseup', function (event) {
	        touchendX = event.pageX;
	        _this.handleGesure();
	      }, false);
	    }
	  }, {
	    key: 'handleGesure',
	    value: function handleGesure() {
	      var swiped = 'swiped: ';
	      if (touchstartX - touchendX > 30) {
	        this.next();
	      }
	      if (touchendX - touchstartX > 30) {
	        this.prev();
	      }
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      var _this2 = this;
	
	      this.storage.data.infoService.next(this.storage.data.itemsPerPage);
	      this.storage.data.infoService.getData(this.storage.data.itemsPerPage).then(function (obj) {
	        _this2.storage.dispatch({ videoItems: obj.content });
	      }, function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	      var _this3 = this;
	
	      this.storage.data.infoService.prev(this.storage.data.itemsPerPage);
	      this.storage.data.infoService.getData(this.storage.data.itemsPerPage).then(function (obj) {
	        _this3.storage.dispatch({ videoItems: obj.content });
	      }, function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <div id="list" class="result-list">\n        ' + this.content.join('') + '\n      </div>\n    ';
	    }
	  }, {
	    key: 'addContent',
	    value: function addContent() {
	      var _this4 = this;
	
	      _get(Object.getPrototypeOf(ListComponent.prototype), 'addContent', this).call(this);
	      if (this.storage.data.videoItems) {
	        this.content = new Array(this.storage.data.itemsPerPage).fill({}).map(function (i, idx) {
	          return new _itemComponent2['default'](_this4.options, idx);
	        });
	      } else {
	        this.content = [];
	      }
	    }
	  }]);
	
	  return ListComponent;
	})(_component2['default']);
	
	module.exports = ListComponent;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(6);
	
	var _component2 = _interopRequireDefault(_component);
	
	__webpack_require__(13);
	
	var ItemComponent = (function (_Component) {
	  _inherits(ItemComponent, _Component);
	
	  function ItemComponent(options, index) {
	    _classCallCheck(this, ItemComponent);
	
	    _get(Object.getPrototypeOf(ItemComponent.prototype), 'constructor', this).call(this, options);
	    this.index = index;
	    this.placeHolder = '|item ' + this.index;
	  }
	
	  _createClass(ItemComponent, [{
	    key: 'render',
	    value: function render() {
	      var content = '';
	      if (this.storage.data.videoItems.length > this.index) {
	        content = this.storage.data.videoItems[this.index];
	      } else {
	        return '';
	      }
	      var imagePath = content.snippet.thumbnails.medium.url;
	      return '\n      <div class="item">\n        <div id="item' + this.index + '" class="img-container"><div class="img" style="background-image: url(' + imagePath + '); background-color: white;tran">\n\n        </div><h2 class="views">' + content.statistics.viewCount + ' views</h2><h2 class="author">by: <a href="https://www.youtube.com/channel/' + content.snippet.channelId + '">' + content.snippet.channelTitle + '</a></h2></div>\n        <div><a href="https://www.youtube.com/watch?v=' + content.id.videoId + '"><h1>' + content.snippet.title + '</h1></a>\n        <p>' + content.snippet.description + '</p></div>\n        <div class="other"><h2 class="published">' + content.snippet.publishedAt.split('').slice(0, 10).join('') + '</h2></div>\n      </div>\n    ';
	    }
	  }]);
	
	  return ItemComponent;
	})(_component2['default']);
	
	module.exports = ItemComponent;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./item.component.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./item.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".item {\n  margin: 2vh;\n  -ms-flex: 1;\n      flex: 1;\n  border: 1vh solid rgba(193, 33, 39, 0.2);\n  border-radius: 0;\n  padding: 0.5vh 2vh;\n  color: #eee;\n  background-color: rgba(125, 125, 125, 0);\n  color: black;\n  padding: 0;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.item div.other {\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n  height: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: end;\n      align-items: flex-end;\n  z-index: 100;\n  min-height: 30px;\n}\n\n.item div.other h2.published {\n  z-index: 10;\n}\n\n.item .img-container {\n  position: relative;\n  height: 40%;\n  width: 100%;\n}\n\n.item .img-container h2.views {\n  opacity: 0.5;\n  text-align: center;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  background: black;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.item .img-container h2.author {\n  opacity: 0.5;\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  background: black;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.item .img-container h2.author a {\n  color: inherit;\n  opacity: 1;\n  text-decoration: none;\n}\n\n.item .img-container h2.author a:hover {\n  color: black;\n  opacity: 1;\n}\n\n.item .img-container h2.author:hover {\n  opacity: 0.7;\n  color: black;\n}\n\n.item .img-container h2.author:hover {\n  background: rgba(125, 125, 125, 0.4);\n}\n\n.item .img {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  /* Make the background image cover the area of the <div>, and clip the excess */\n  background-size: cover;\n  background-repeat: repeat;\n  opacity: 0.8;\n  transform: scale(1.5);\n}\n\n.item a {\n  color: transparent;\n}\n\n.item a:hover {\n  color: #C12127;\n}\n\n.item a h1 {\n  position: relative;\n  margin-top: -4vh;\n  display: -ms-flexbox;\n  display: flex;\n  background: rgba(193, 33, 39, 0.4);\n  text-align: center;\n  margin: auto;\n  font-size: 2.5vh;\n  color: #C12127;\n  padding: 0.5vh;\n}\n\n.item p {\n  word-wrap: break-word;\n  text-align: center;\n  font-family: cursive;\n  text-overflow: hidden;\n  margin: 1vh;\n  font-size: 2.5vh;\n  text-align: justify;\n}\n", ""]);
	
	// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./list.component.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".result-list {\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);
	
	// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(6);
	
	var _component2 = _interopRequireDefault(_component);
	
	__webpack_require__(18);
	
	var NavigatorComponent = (function (_Component) {
	  _inherits(NavigatorComponent, _Component);
	
	  function NavigatorComponent(options) {
	    _classCallCheck(this, NavigatorComponent);
	
	    _get(Object.getPrototypeOf(NavigatorComponent.prototype), 'constructor', this).call(this, options);
	    this.placeHolder = '\tnavigator component placeholder\t';
	    this.scrollerPath = 0;
	    this.lastEvent = null;
	  }
	
	  _createClass(NavigatorComponent, [{
	    key: 'setHandlers',
	    value: function setHandlers() {
	      document.getElementById('left-arrow').onclick = this.next.bind(this);
	      document.getElementById('right-arrow').onclick = this.prev.bind(this);
	      document.getElementById('separator-line').ondrag = this.onScroller.bind(this);
	      document.getElementById("separator-line").addEventListener("dragstart", function (e) {
	        var crt = this.cloneNode(true);
	        crt.style.backgroundColor = "red";
	        crt.style.display = "none"; /* or visibility: hidden, or any of the above */
	        document.body.appendChild(crt);
	        e.dataTransfer.setDragImage(crt, 0, 0);
	      }, false);
	    }
	  }, {
	    key: 'onScroller',
	    value: function onScroller(event) {
	      console.log(event.pageX);
	      if (event.pageX === 0) {
	        return;
	      }
	      if (!this.lastEvent) {
	        this.lastEvent = event;
	      } else if (this.lastEvent.pageX !== event.pageX) {
	        this.scrollerPath += event.pageX - this.lastEvent.pageX;
	        this.lastEvent = event;
	      }
	
	      if (this.scrollerPath >= 30) {
	        this.next();
	        this.scrollerPath = 0;
	      } else if (this.scrollerPath <= -30) {
	        this.prev();
	        this.scrollerPath = 0;
	      }
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      var _this = this;
	
	      this.storage.data.infoService.next();
	      this.storage.data.infoService.getData(this.storage.data.itemsPerPage).then(function (obj) {
	        _this.storage.dispatch({ videoItems: obj.content });
	      }, function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	      var _this2 = this;
	
	      this.storage.data.infoService.prev();
	      this.storage.data.infoService.getData(this.storage.data.itemsPerPage).then(function (obj) {
	        _this2.storage.dispatch({ videoItems: obj.content });
	      }, function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <div draggable="true" id="separator-line" style="position:relative;left:' + (window.innerWidth > 400 ? 500 * this.storage.data.infoService.current * 1.0 / this.storage.data.infoService.data.length | 1 : 0) + 'px" class="separator"></div>\n      <div class="result-navigation">\n        <input id="right-arrow" type="button" value="">\n        <input id="left-arrow" type="button" value="">\n      </div>\n    ';
	    }
	  }]);
	
	  return NavigatorComponent;
	})(_component2['default']);
	
	module.exports = NavigatorComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./navigator.component.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./navigator.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".result-navigation {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.result-navigation input {\n  margin: 0 5%;\n  background: transparent;\n  border: none;\n  border-top: 0px solid gray;\n  opacity: 0.8;\n  border-right: 0px solid gray;\n  border-bottom: 10px solid gray;\n  border-left: 10px solid gray;\n  border-width: 0px 0px 10px 10px;\n  border-style: solid solid solid solid;\n  border-color: gray gray gray gray;\n  width: 3vh;\n  height: 3vh;\n  transform: rotate(45deg);\n}\n\n.result-navigation input:hover {\n  border-color: #C12127;\n}\n\n.result-navigation input:focus {\n  outline: none;\n}\n\n#left-arrow {\n  transform: rotate(225deg);\n}\n\n@media only screen and (max-width: 800px) {\n  .result-navigation {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n}\n\n@media only screen and (min-width: 800px) {\n  .result-navigation {\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n}\n", ""]);
	
	// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./result.component.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./result.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".result-container {\n  height: 90vh;\n  background: white;\n}\n\n.result-container .result-list {\n  height: 80vh;\n  max-height: 80vh;\n}\n\n.result-container .result-navigation {\n  height: 9.5vh;\n  max-height: 10vh;\n}\n\n.result-container .separator {\n  height: 0.5vh;\n}\n\n.result-container .separator:hover {\n  background: #C12127;\n}\n\n.result-container .separator:active {\n  background: #C12127;\n}\n\n.swipe-rigth {\n  position: relative;\n  animation: _swipe_right 0.5s;\n}\n\n.swipe-left {\n  position: relative;\n  animation: _swipe_left 0.5s;\n}\n\n@keyframes _swipe_left {\n  0% {\n    left: 300px;\n  }\n  100% {\n    left: 0px;\n  }\n}\n\n@keyframes _swipe_right {\n  0% {\n    left: -300px;\n  }\n  100% {\n    left: 0px;\n  }\n}\n", ""]);
	
	// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./app.component.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js?outputStyle=expanded!./app.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".appContainer {\n  background: transparent;\n}\n\nbody {\n  background: white;\n  height: 100vh;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  font-family: monospace;\n}\n\n::-webkit-input-placeholder {\n  color: white;\n}\n", ""]);
	
	// exports


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var InfoService = (function () {
	  function InfoService() {
	    _classCallCheck(this, InfoService);
	
	    this.data = [];
	    this.rowData = {};
	    this.query = '';
	    this.current = 0;
	    this.lastAction = -1;
	  }
	
	  _createClass(InfoService, [{
	    key: 'next',
	    value: function next() {
	      var _this = this;
	
	      var count = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	      if (this.current >= this.data.length) {
	        this.lastAction = -1;
	        return;
	      }
	      this.current += count;
	      if (this.current >= this.data.length / 2) {
	        this.mineData().then(function () {
	          _this.data = [].concat(_toConsumableArray(_this.data), _toConsumableArray(_this.rowData.items));
	        });
	      }
	      this.lastAction = 0;
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	      var count = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	      this.current -= count;
	      if (this.current < 0) {
	        this.current = 0;
	        this.lastAction = -1;
	        return;
	      }
	      this.lastAction = 1;
	    }
	  }, {
	    key: 'updateQuery',
	    value: function updateQuery(query) {
	      if (this.query !== query) {
	        this.query = query;
	        this.current = 0;
	        this.data = [];
	        this.rowData = {};
	      }
	    }
	  }, {
	    key: 'getData',
	    value: function getData(count) {
	      var _this2 = this;
	
	      return new Promise(function (resolve, reject) {
	        var needMoreDataCount = count - (_this2.data.length - _this2.current);
	        if (needMoreDataCount > 0) {
	          _this2.mineData().then(function (query) {
	            _this2.data = [].concat(_toConsumableArray(_this2.data), _toConsumableArray(_this2.rowData.items));
	            resolve({ content: _this2.data.slice(_this2.current, _this2.current + count), query: query });
	          }, function (error) {
	            reject(error);
	          });
	        } else {
	          resolve({ content: _this2.data.slice(_this2.current, _this2.current + count) });
	        }
	      });
	    }
	  }, {
	    key: 'mineData',
	    value: function mineData() {
	      var _this3 = this;
	
	      return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        var pageToken = _this3.rowData && _this3.rowData.nextPageToken;
	        var transformedQuery = _this3.query.split('').filter(function (x) {
	          return !!x.match(/[ a-zA-Z0-9а-яА-Я]/i);
	        }).map(function (x) {
	          return x === ' ' ? '+' : x;
	        }).join('');
	        var query = _this3.query;
	        xhr.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&pageToken=' + (pageToken || '') + '&order=relevance&q=' + transformedQuery + '&key=AIzaSyBbe529_VK-hz-KW40wmM7QJ_JrEwCh0UM', true);
	        xhr.send();
	        xhr.onload = function () {
	          var rowData = JSON.parse(xhr.responseText);
	          var xhrStat = new XMLHttpRequest();
	          var ids = rowData.items.map(function (x) {
	            return x.id.videoId;
	          }).join(',');
	          xhrStat.open('GET', 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=' + ids + '&key=AIzaSyBbe529_VK-hz-KW40wmM7QJ_JrEwCh0UM', true);
	          xhrStat.send();
	
	          xhrStat.onload = function () {
	            var statistics = JSON.parse(xhrStat.responseText);
	            _this3.rowData = [];
	            for (var i = 0; i < rowData.items.length; i += 1) {
	              rowData.items[i].statistics = statistics.items[i].statistics;
	            }
	            _this3.rowData = rowData;
	            resolve(query);
	          };
	          xhrStat.onerror = function (err) {
	            reject(err);
	          };
	        };
	        xhr.onerror = function (err) {
	          reject(err);
	        };
	      });
	    }
	  }]);
	
	  return InfoService;
	})();
	
	module.exports = InfoService;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Storage = (function () {
	  function Storage() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Storage);
	
	    this.handlers = [];
	    this.data = data;
	  }
	
	  _createClass(Storage, [{
	    key: "addListeners",
	    value: function addListeners(handlers) {
	      this.handlers = [].concat(_toConsumableArray(this.handlers), _toConsumableArray(handlers));
	    }
	  }, {
	    key: "dispatch",
	    value: function dispatch() {
	      var _this = this;
	
	      var action = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      this.data = Object.assign({}, this.data, action);
	      this.handlers.forEach(function (handler) {
	        handler(_this.data);
	      });
	    }
	  }]);
	
	  return Storage;
	})();
	
	module.exports = Storage;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map