/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: Elem, $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elem", function() { return Elem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
function $(selector) {
  const elem = new Elem(selector);
  elem.prototype = Elem.prototype;
  return elem;
}

function Elem(selector) {
  if (!selector) {
    return this;
  } // Проверяем, не получили ли мы в качестве селектора html-элемент. У элемента есть свойство tagName.


  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
} // $.prototype = Elem.prototype;


window.$ = $;


/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: Elem, $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elem", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["Elem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["$"]; });

/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_actions__WEBPACK_IMPORTED_MODULE_4__);







/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\src\\js\\lib\\modules\\actions.js: 'return' outside of function. (67:2)\n\n\u001b[0m \u001b[90m 65 |\u001b[39m   \u001b[33mObject\u001b[39m\u001b[33m.\u001b[39massign(\u001b[36mthis\u001b[39m\u001b[33m,\u001b[39m newObj)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 66 |\u001b[39m   \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mlength \u001b[33m=\u001b[39m newObj\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 67 |\u001b[39m   \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 68 |\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 69 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 70 |\u001b[39m \u001b[33mElem\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mclosest \u001b[33m=\u001b[39m \u001b[36mfunction\u001b[39m(selector) {\u001b[0m\n    at Parser._raise (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:541:17)\n    at Parser.raiseWithData (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:534:17)\n    at Parser.raise (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:495:17)\n    at Parser.parseReturnStatement (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:13655:12)\n    at Parser.parseStatementContent (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:13335:21)\n    at Parser.parseStatement (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:13285:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:13874:25)\n    at Parser.parseBlockBody (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:13865:10)\n    at Parser.parseProgram (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:13207:10)\n    at Parser.parseTopLevel (C:\\Users\\Илья\\OneDrive\\Desktop\\Udemy Projects\\Part 4\\node_modules\\@babel\\parser\\lib\\index.js:13198:25)");

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) return this;
    this[i].classList.add(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) return this;
    this[i].classList.remove(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) return this;
    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) return this;

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) return this;

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["Elem"].prototype.click = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback) {
      this[i].addEventListener('click', callback);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["$"])('button').on('click', function () {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["$"])('div').eq(2).toggleClass('active');
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["$"])('div').click(function () {
  console.log(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index());
}); // console.log($('div').eq(2).find('.some'));

console.log(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["$"])('.some').closest('.findme'));

/***/ })

/******/ });
//# sourceMappingURL=script.js.map