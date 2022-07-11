/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.css */ \"./src/style/index.css\");\n/* harmony import */ var _img_sea_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/sea.jpg */ \"./src/img/sea.jpg\");\n/* harmony import */ var _ocean_surf_coast_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ocean-surf-coast.mp3 */ \"./src/ocean-surf-coast.mp3\");\n/* harmony import */ var _ocean_surf_on_rocks_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ocean-surf-on-rocks.mp3 */ \"./src/ocean-surf-on-rocks.mp3\");\n/* harmony import */ var _ocean_waves_strongly_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ocean-waves-strongly.mp3 */ \"./src/ocean-waves-strongly.mp3\");\n/* harmony import */ var _js_hw1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/hw1.js */ \"./src/js/hw1.js\");\n/* harmony import */ var _js_hw1_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_hw1_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_hw2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/hw2.js */ \"./src/js/hw2.js\");\n/* harmony import */ var _js_hw2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_hw2_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _js_hw3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/hw3.js */ \"./src/js/hw3.js\");\n/* harmony import */ var _js_hw3_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_hw3_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _js_hw4_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/hw4.js */ \"./src/js/hw4.js\");\n/* harmony import */ var _js_hw4_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_hw4_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _js_hw5_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/hw5.js */ \"./src/js/hw5.js\");\n/* harmony import */ var _js_hw5_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_hw5_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _js_hw6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/hw6.js */ \"./src/js/hw6.js\");\n/* harmony import */ var _js_hw6_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_hw6_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _js_hw7_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/hw7.js */ \"./src/js/hw7.js\");\n/* harmony import */ var _js_hw7_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_hw7_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _js_hw8_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/hw8.js */ \"./src/js/hw8.js\");\n/* harmony import */ var _js_hw8_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_hw8_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _js_hw9_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/hw9.js */ \"./src/js/hw9.js\");\n/* harmony import */ var _js_hw9_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_hw9_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _js_hw10_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/hw10.js */ \"./src/js/hw10.js\");\n/* harmony import */ var _js_hw10_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_js_hw10_js__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _js_hw11_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/hw11.js */ \"./src/js/hw11.js\");\n/* harmony import */ var _js_hw11_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_js_hw11_js__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://hw14/./src/index.js?");

/***/ }),

/***/ "./src/js/hw1.js":
/*!***********************!*\
  !*** ./src/js/hw1.js ***!
  \***********************/
/***/ (() => {

"use strict";
eval(" //5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5\n\nvar getRandomNumber = function getRandomNumber(n, m) {\n  return Math.floor(Math.random() * (m - n + 1)) + n;\n};\n\nconsole.log(\"\\u0421\\u0442\\u0432\\u043E\\u0440\\u0438\\u0442\\u0438 \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u043F\\u043E\\u0432\\u0435\\u0440\\u0442\\u0430\\u0454 \\u0432\\u0438\\u043F\\u0430\\u0434\\u043A\\u043E\\u0432\\u0435 \\u0446\\u0456\\u043B\\u0435 \\u0447\\u0438\\u0441\\u043B\\u043E \\u0432 \\u0434\\u0456\\u0430\\u043F\\u0430\\u0437\\u043E\\u043D\\u0456 \\u0432\\u0456\\u0434 N \\u0434\\u043E M.\", getRandomNumber(5, 25));\n\n//# sourceURL=webpack://hw14/./src/js/hw1.js?");

/***/ }),

/***/ "./src/js/hw10.js":
/*!************************!*\
  !*** ./src/js/hw10.js ***!
  \************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nvar _marked = /*#__PURE__*/_regeneratorRuntime().mark(createIdGenerator);\n\n\"use strict\";\n\nvar btn = document.querySelector(\"#btn\");\nvar result = document.querySelector(\".info\");\n\nfunction createIdGenerator() {\n  var id;\n  return _regeneratorRuntime().wrap(function createIdGenerator$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          id = 1;\n\n        case 1:\n          if (false) {}\n\n          _context.next = 4;\n          return id++;\n\n        case 4:\n          _context.next = 1;\n          break;\n\n        case 6:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\nvar idGenerator = createIdGenerator();\nbtn.addEventListener(\"click\", function () {\n  result.textContent = idGenerator.next().value;\n});\n\n//# sourceURL=webpack://hw14/./src/js/hw10.js?");

/***/ }),

/***/ "./src/js/hw11.js":
/*!************************!*\
  !*** ./src/js/hw11.js ***!
  \************************/
/***/ (() => {

"use strict";
eval(" // PLANETS\n\n\nvar APP = {\n  urls: {\n    base: 'https://swapi.dev/api/',\n    planets: 'planets/'\n  },\n  init: function init() {\n    APP.addListeners();\n    APP.buildNav();\n  },\n  addListeners: function addListeners() {\n    var nav = document.getElementById('nav');\n    nav.addEventListener('click', APP.getData, false);\n    footer.addEventListener('click', APP.getData);\n  },\n  buildNav: function buildNav() {\n    var df = new DocumentFragment();\n\n    for (var nm in APP.urls) {\n      if (nm != 'base') {\n        var link = document.createElement('a');\n        link.href = \"\".concat(APP.urls.base).concat(APP.urls[nm]);\n        link.textContent = nm;\n        link.setAttribute('data-link', \"\".concat(APP.urls.base).concat(APP.urls[nm]));\n        df.append(link);\n      }\n    }\n\n    document.getElementById('nav').append(df);\n  },\n  getData: function getData(ev) {\n    if (ev) ev.preventDefault();\n    var link = ev.target;\n    var url = link.getAttribute('data-link');\n    fetch(url).then(function (resp) {\n      if (!resp.ok) throw new Error(resp.statusText);\n      return resp.json();\n    }).then(APP.buildList)[\"catch\"](function (err) {\n      console.error(err);\n    });\n  },\n  buildList: function buildList(data) {\n    var m = document.getElementById('main');\n    console.log(data);\n    m.innerHTML = data.results.map(function (item) {\n      var nm = item.name || item.title;\n      return \"<p>\".concat(nm, \"</p>\");\n    }).join(' ');\n    var footer = document.getElementById('footer');\n    footer.innerHTML = '';\n\n    if (data.previous) {\n      var prev = document.createElement('a');\n      prev.href = data.previous;\n      var url = new URL(data.previous);\n      var labels = url.pathname.split('/');\n      var label = labels[labels.length - 2];\n      prev.textContent = \"<< Previous \".concat(label);\n      prev.setAttribute('data-link', data.previous);\n      footer.append(prev);\n    }\n\n    if (data.next) {\n      var next = document.createElement('a');\n      next.href = data.next;\n\n      var _url = new URL(data.next);\n\n      var _labels = _url.pathname.split('/');\n\n      var _label = _labels[_labels.length - 2];\n      next.textContent = \"Next \".concat(_label, \" >>\");\n      next.setAttribute('data-link', data.next);\n      footer.append(next);\n    }\n  }\n};\ndocument.addEventListener('DOMContentLoaded', APP.init);\n\n//# sourceURL=webpack://hw14/./src/js/hw11.js?");

/***/ }),

/***/ "./src/js/hw2.js":
/*!***********************!*\
  !*** ./src/js/hw2.js ***!
  \***********************/
/***/ (() => {

"use strict";
eval("\n\nvar students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"]; // 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [[\"Олександр\", \"Олена\"], [..], [...]];\n\nconsole.log(\"1.\\u0420\\u043E\\u0437\\u0434\\u0456\\u043B\\u0456\\u0442\\u044C \\u0441\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442\\u0456\\u0432 \\u043D\\u0430 \\u043F\\u0430\\u0440\\u0438(\\u0445\\u043B\\u043E\\u043F\\u0435\\u0446\\u044C + \\u0434\\u0456\\u0432\\u0447\\u0438\\u043D\\u0430) \\u0434\\u043B\\u044F \\u0440\\u0430\\u0431\\u043E\\u0442\\u0438 \\u043D\\u0430\\u0434 \\u043F\\u0440\\u043E\\u0454\\u043A\\u0442\\u043E\\u043C.\");\nvar girls = students.filter(function (elem) {\n  return elem.lastIndexOf('а') === elem.length - 1;\n}); // console.log (girls);\n\nvar boys = students.filter(function (elem) {\n  return elem.lastIndexOf('а') !== elem.length - 1;\n}); // console.log (boys);\n\nvar allStudents = function allStudents(students) {\n  return boys.map(function (boys, i) {\n    return [boys, girls[i]];\n  });\n};\n\nconsole.log(allStudents(students));\n\n//# sourceURL=webpack://hw14/./src/js/hw2.js?");

/***/ }),

/***/ "./src/js/hw3.js":
/*!***********************!*\
  !*** ./src/js/hw3.js ***!
  \***********************/
/***/ (() => {

"use strict";
eval(" // 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. \n\nvar getRandomArray = function getRandomArray(length, min, max) {\n  var randomArray = [];\n\n  if (min > max) {\n    return \"\\u0412\\u0432\\u0435\\u0434\\u0456\\u0442\\u044C \\u043F\\u0440\\u0430\\u0432\\u0456\\u043B\\u044C\\u043D\\u0456 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u043D\\u044F\";\n  }\n\n  for (var i = 0; i < length; i++) {\n    randomArray.push(Math.floor(Math.random() * (max - min + 1) + min));\n  }\n\n  return randomArray;\n};\n\nconsole.log('getRandomArray(10, 3, 100)=> ', getRandomArray(10, 3, 100));\n\n//# sourceURL=webpack://hw14/./src/js/hw3.js?");

/***/ }),

/***/ "./src/js/hw4.js":
/*!***********************!*\
  !*** ./src/js/hw4.js ***!
  \***********************/
/***/ (() => {

"use strict";
eval("\n\nvar students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}]; //   1.Створіть функцію getSubjects(students[0] --> [\"Math\", \"Algorithms\", \"Data science\"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл\n\nfunction getSubjects(student) {\n  var arrSubject = Object.keys(student.subjects);\n  return arrSubject.map(function (elem) {\n    return (elem[0].toUpperCase() + elem.toLowerCase().slice(1)).replaceAll(\"_\", \" \");\n  });\n}\n\nconsole.log('Cписок предметів для конкретного студента: ', getSubjects(students[1]));\n\n//# sourceURL=webpack://hw14/./src/js/hw4.js?");

/***/ }),

/***/ "./src/js/hw5.js":
/*!***********************!*\
  !*** ./src/js/hw5.js ***!
  \***********************/
/***/ (() => {

"use strict";
eval("\n\nvar ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n}; // 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this\n\nfunction getMyTaxes(salary) {\n  return Number((this.tax * +salary).toFixed(2));\n}\n\n;\nconsole.log(\"getMyTaxes.call(ukraine, 3000)\", getMyTaxes.call(ukraine, 3000));\n\n//# sourceURL=webpack://hw14/./src/js/hw5.js?");

/***/ }),

/***/ "./src/js/hw6.js":
/*!***********************!*\
  !*** ./src/js/hw6.js ***!
  \***********************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\"use strict\";\n\nvar Student = /*#__PURE__*/function () {\n  function Student(fullName, course, university, marks) {\n    _classCallCheck(this, Student);\n\n    this.fullName = fullName;\n    this.university = university;\n    this.course = course;\n    this.marks = marks;\n    this.status = true;\n  }\n\n  _createClass(Student, [{\n    key: \"_getInfo\",\n    value: function _getInfo() {\n      return \"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \" + this.course + \"-\\u043E\\u0433\\u043E \\u043A\\u0443\\u0440\\u0441\\u0443 \" + this.university + \" , \" + this.fullName;\n    }\n  }, {\n    key: \"mark\",\n    get: function get() {\n      if (!this.status) {\n        return null;\n      }\n\n      return this.marks;\n    },\n    set: function set(value) {\n      if (!this.status) {\n        return null;\n      }\n\n      this.marks.push(value);\n    }\n  }, {\n    key: \"getAverageMark\",\n    value: function getAverageMark() {\n      var result = (this.marks.reduce(function (prev, val) {\n        return prev += val;\n      }) / this.marks.length).toFixed(1);\n\n      if (!this.status) {\n        return null;\n      }\n\n      return result;\n    }\n  }, {\n    key: \"dismiss\",\n    value: function dismiss() {\n      this.status = false;\n      return this._getInfo() + \" \\u0432\\u0438\\u043A\\u043B\\u044E\\u0447\\u0435\\u043D\\u043E \\u0437 \\u043D\\u0430\\u0432\\u0447\\u0430\\u043B\\u044C\\u043D\\u043E\\u0433\\u043E \\u0437\\u0430\\u043A\\u043B\\u0430\\u0434\\u0443\";\n    }\n  }, {\n    key: \"recover\",\n    value: function recover() {\n      this.status = true;\n      return this._getInfo() + \" \\u043F\\u043E\\u043D\\u043E\\u0432\\u043B\\u0435\\u043D\\u043D\\u043E \\u0443 \\u043D\\u0430\\u0432\\u0447\\u0430\\u043B\\u044C\\u043D\\u043E\\u043C\\u0443 \\u0437\\u0430\\u043A\\u043B\\u0430\\u0434\\u0456\";\n    }\n  }]);\n\n  return Student;\n}();\n\nvar student = new Student(\"\\u041E\\u0441\\u0442\\u0430\\u043F \\u0411\\u0435\\u043D\\u0434\\u0435\\u0440\", 1, \"\\u0412\\u0438\\u0449\\u043E\\u0457 \\u0428\\u043A\\u043E\\u043B\\u0438 \\u041F\\u0441\\u0438\\u0445\\u043E\\u0442\\u0435\\u0440\\u0430\\u043F\\u0456\\u0457\", [5, 4, 4, 5]);\nconsole.log(student);\n\n//# sourceURL=webpack://hw14/./src/js/hw6.js?");

/***/ }),

/***/ "./src/js/hw7.js":
/*!***********************!*\
  !*** ./src/js/hw7.js ***!
  \***********************/
/***/ (() => {

"use strict";
eval("\n\nvar btn = document.querySelector(\"#button\");\nvar box = document.querySelector(\"#box\");\n\nfunction generatColor() {\n  return Math.floor(Math.random() * 256);\n}\n\nfunction getRandomColor() {\n  return \"rgb(\".concat(generatColor(), \", \").concat(generatColor(), \", \").concat(generatColor(), \")\");\n}\n\nfunction generateBlocks() {\n  for (var i = 0; i < 25; i++) {\n    var boxis = document.createElement(\"div\");\n    boxis.className = \"boxis\";\n    boxis.style.cssText = \"\\n        display: inline-block;\\n        width: 50px;\\n        height: 50px;\\n\\t\\tbackground-color: \".concat(getRandomColor(), \";\");\n    box.appendChild(boxis);\n  }\n}\n\nbtn.addEventListener(\"mouseenter\", generateBlocks, {\n  'once': true\n});\n\nfunction generateBlocksInterval() {\n  var block = document.querySelectorAll(\".boxis\");\n  setInterval(function () {\n    return block.forEach(function (el) {\n      return el.style.backgroundColor = \"\".concat(getRandomColor());\n    });\n  }, 1000);\n}\n\nbtn.addEventListener(\"click\", function () {\n  generateBlocksInterval();\n});\n\n//# sourceURL=webpack://hw14/./src/js/hw7.js?");

/***/ }),

/***/ "./src/js/hw8.js":
/*!***********************!*\
  !*** ./src/js/hw8.js ***!
  \***********************/
/***/ (() => {

"use strict";
eval("\n\nvar button = document.querySelectorAll(\".sound\");\nvar audio = document.querySelectorAll(\"audio\");\n\nfunction clear() {\n  for (var i = 0; i < button.length; i++) {\n    if (button[i].classList.contains(\"playing\")) button[i].classList.remove(\"playing\");\n  }\n}\n\nvar _loop = function _loop(i) {\n  button[i].addEventListener(\"click\", function () {\n    clear();\n    var id = this.id;\n    this.classList.add(\"playing\");\n\n    if (audio[i].id === id) {\n      audio[i].currentTime = 0;\n      return audio[i].paused ? audio[i].play() : audio[i].pause();\n    }\n  });\n};\n\nfor (var i = 0; i < button.length; i++) {\n  _loop(i);\n}\n\ndocument.addEventListener(\"keydown\", function (event) {\n  if (event.repeat) return;\n  clear();\n  var id = event.code;\n\n  for (var _i = 0; _i < button.length; _i++) {\n    if (audio[_i].id === id) {\n      button[_i].classList.add(\"playing\");\n\n      audio[_i].currentTime = 0;\n      return audio[_i].paused ? audio[_i].play() : audio[_i].pause();\n    }\n  }\n});\n\n//# sourceURL=webpack://hw14/./src/js/hw8.js?");

/***/ }),

/***/ "./src/js/hw9.js":
/*!***********************!*\
  !*** ./src/js/hw9.js ***!
  \***********************/
/***/ (() => {

"use strict";
eval("\n\nfunction getRandomChinese(length) {\n  if (length <= 0 || !Number.isInteger(length)) {\n    return console.log(\"Введіть число!!!\");\n  }\n\n  var result = [];\n  var chineseString = new Promise(function (res) {\n    setTimeout(function () {\n      for (var i = 0; i < length; i++) {\n        var sign = String(Date.now()).slice(-5);\n        result.push(String.fromCharCode(sign));\n      }\n\n      res(result.join(''));\n    }, 50);\n  });\n  chineseString.then(function (res) {\n    console.log(res);\n  });\n  return chineseString;\n}\n\ngetRandomChinese(5);\n\n//# sourceURL=webpack://hw14/./src/js/hw9.js?");

/***/ }),

/***/ "./src/style/index.css":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hw14/./src/style/index.css?");

/***/ }),

/***/ "./src/img/sea.jpg":
/*!*************************!*\
  !*** ./src/img/sea.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"sea.jpg\";\n\n//# sourceURL=webpack://hw14/./src/img/sea.jpg?");

/***/ }),

/***/ "./src/ocean-surf-coast.mp3":
/*!**********************************!*\
  !*** ./src/ocean-surf-coast.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ocean-surf-coast.mp3\";\n\n//# sourceURL=webpack://hw14/./src/ocean-surf-coast.mp3?");

/***/ }),

/***/ "./src/ocean-surf-on-rocks.mp3":
/*!*************************************!*\
  !*** ./src/ocean-surf-on-rocks.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ocean-surf-on-rocks.mp3\";\n\n//# sourceURL=webpack://hw14/./src/ocean-surf-on-rocks.mp3?");

/***/ }),

/***/ "./src/ocean-waves-strongly.mp3":
/*!**************************************!*\
  !*** ./src/ocean-waves-strongly.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ocean-waves-strongly.mp3\";\n\n//# sourceURL=webpack://hw14/./src/ocean-waves-strongly.mp3?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;