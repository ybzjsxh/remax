require('./../../runtime.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = "@remax/runtime";

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = "react";

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = "remax/wechat";

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remax_wechat__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var pageA = function pageA() {
  var props = {};
  var TextElement = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null));

  function handleClick() {}

  function handleTouchStart() {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var _page = pageA;
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "packageA/pages/index")));

/***/ })
],[[10,0]]]);