/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about/about.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about/about.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about-layout {\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/components/about/about.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACF","sourcesContent":[".about-layout {\r\n  height: 90vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/card/card.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/card/card.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_card_back_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/card-back.jpg */ "./src/assets/card-back.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_card_back_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-wrapper {\n  perspective: 2000px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.card-wrapper .flipped {\n  transform: rotateY(180deg) translateX(-100%);\n  transform-origin: left;\n}\n.card-wrapper:hover {\n  transform: scale3d(1.05, 1.05, 1.05);\n}\n\n.card {\n  position: relative;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: 0.5s;\n  transform-origin: right;\n}\n.card__front, .card__back {\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  transition: 0.5s;\n}\n.card__front {\n  border: 2px solid #f6f6f6;\n  background-color: white;\n  transform: rotateY(-180deg);\n  background-size: cover;\n}\n.card__back {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n}\n\n.correct, .wrong {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  transform: translateZ(-1px);\n  border-radius: 5px;\n  transition: 0.3s;\n  z-index: 10;\n}\n\n.wrong {\n  display: none;\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\n.correct {\n  display: none;\n  background-color: rgba(0, 255, 0, 0.4);\n}", "",{"version":3,"sources":["webpack://./src/components/game/card/card.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,eAAA;EACA,gBAAA;AACF;AACE;EACE,4CAAA;EACA,sBAAA;AACJ;AAEE;EACE,oCAAA;AAAJ;;AAKA;EACE,kBAAA;EACA,4GACE;EAGF,kBAAA;EACA,WAAA;EACA,YAAA;EAEA,4BAAA;EACA,gBAAA;EACA,uBAAA;AANF;AAQE;EAEE,kBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,2BAAA;EACA,gBAAA;AAPJ;AAUE;EACE,yBAAA;EACA,uBAAA;EACA,2BAAA;EACA,sBAAA;AARJ;AAYE;EACE,yDAAA;EACA,sBAAA;EACA,2BAAA;AAVJ;;AAcA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;AAXF;;AAcA;EACE,aAAA;EACA,sCAAA;AAXF;;AAcA;EACE,aAAA;EACA,sCAAA;AAXF","sourcesContent":[".card-wrapper {\r\n  perspective: 2000px;\r\n  cursor: pointer;\r\n  transition: .3s;\r\n\r\n  .flipped {\r\n    transform: rotateY(180deg) translateX(-100%);\r\n    transform-origin: left;\r\n  }\r\n\r\n  &:hover {\r\n    transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  box-shadow:\r\n    0px 1px 5px rgba(0, 0, 0, 0.2),\r\n    0px 3px 4px rgba(0, 0, 0, 0.12),\r\n    0px 2px 4px rgba(0, 0, 0, 0.14);\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  transform-style: preserve-3d;\r\n  transition: .5s;\r\n  transform-origin: right;\r\n\r\n  &__front,\r\n  &__back {\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    backface-visibility: hidden;\r\n    transition: .5s;\r\n  }\r\n\r\n  &__front {\r\n    border: 2px solid #f6f6f6;\r\n    background-color: white;\r\n    transform: rotateY(-180deg);\r\n    background-size: cover;\r\n    // background-image: url('../../../assets/birds/svg/bird (2).svg');\r\n  }\r\n\r\n  &__back {\r\n    background-image: url(../../../assets/card-back.jpg);\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n}\r\n\r\n.correct, .wrong {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  transform: translateZ(-1px);\r\n  border-radius: 5px;\r\n  transition: .3s;\r\n  z-index: 10;\r\n}\r\n\r\n.wrong {\r\n  display: none;\r\n  background-color: rgba($color: #ff0000, $alpha: .50);\r\n}\r\n\r\n.correct {\r\n  display: none;\r\n  background-color: rgba($color: #00ff00, $alpha: .40);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/game.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/game.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cardgame-wrapper {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.cardgame {\n  height: 800px;\n  width: 800px;\n  display: grid;\n  gap: 20px;\n}\n\n.four-x-four {\n  grid-template: 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr;\n}\n\n.six-x-six {\n  grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/1fr 1fr 1fr 1fr 1fr 1fr;\n}", "",{"version":3,"sources":["webpack://./src/components/game/game.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,8BAAA;AACF;;AAEA;EACE,aAAA;EACA,YAAA;EAEA,aAAA;EACA,SAAA;AAAF;;AAGA;EACE,8CAAA;AAAF;;AAGA;EACE,8DAAA;AAAF","sourcesContent":[".cardgame-wrapper {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.cardgame {\r\n  height: 800px;\r\n  width: 800px;\r\n\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.four-x-four {\r\n  grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.six-x-six {\r\n  grid-template: 1fr 1fr 1fr 1fr 1fr 1fr/ 1fr 1fr 1fr 1fr 1fr 1fr;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/timer/timer.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/timer/timer.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game-timer {\n  font-family: \"Roboto\";\n  font-size: 2rem;\n  padding: 10px;\n  border: 3px solid #2196F3;\n  border-radius: 15px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  color: #323232;\n}", "",{"version":3,"sources":["webpack://./src/components/game/timer/timer.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,eAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EAEA,cAAA;AAAF","sourcesContent":[".game-timer {\r\n  font-family: 'Roboto';\r\n  font-size: 2rem;\r\n  padding: 10px;\r\n  border: 3px solid #2196F3;\r\n  border-radius: 15px;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n\r\n  color: #323232;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header-nav/header-nav.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header-nav/header-nav.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  height: 100%;\n}\n\nul {\n  height: inherit;\n  display: flex;\n  flex-flow: row;\n}\nul a {\n  box-sizing: border-box;\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  text-decoration: none;\n  color: white;\n  font-family: \"Roboto\";\n  font-size: 0.75rem;\n  line-height: 15px;\n  letter-spacing: 0.4px;\n  transition: 0.3s;\n}\nul a:hover {\n  color: orange;\n}\nul a:focus {\n  outline: none;\n}\nul a img {\n  max-width: 20px;\n  max-height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/components/header-nav/header-nav.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;AACF;;AAEA;EACE,eAAA;EACA,aAAA;EACA,cAAA;AACF;AACE;EACE,sBAAA;EACA,YAAA;EAEA,aAAA;EACA,wBAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EAEA,qBAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;EAEA,gBAAA;AAFJ;AAII;EACE,aAAA;AAFN;AAKI;EACE,aAAA;AAHN;AAMI;EACE,eAAA;EACA,gBAAA;AAJN","sourcesContent":["nav {\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  height: inherit;\r\n  display: flex;\r\n  flex-flow: row;\r\n\r\n  a {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px;\r\n\r\n    text-decoration: none;\r\n    color: white;\r\n    font-family: 'Roboto';\r\n    font-size: 0.75rem;\r\n    line-height: 15px;\r\n    letter-spacing: 0.4px;\r\n\r\n    transition: .3s;\r\n\r\n    &:hover {\r\n      color: orange;\r\n    }\r\n\r\n    &:focus {\r\n      outline: none;\r\n    }\r\n\r\n    img {\r\n      max-width: 20px;\r\n      max-height: 20px;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/header.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/header.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  background-color: #2196F3;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.logo {\n  box-shadow: 0 1px #1976D2;\n  margin-left: 24px;\n}", "",{"version":3,"sources":["webpack://./src/components/header/header.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,6BAAA;AAAF;;AAGA;EACE,yBAAA;EACA,iBAAA;AAAF","sourcesContent":["header {\r\n  background-color: #2196F3;\r\n  height: 64px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.logo {\r\n  box-shadow: 0 1px #1976D2;\r\n  margin-left: 24px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/layout/layout.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/layout/layout.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".layout {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}", "",{"version":3,"sources":["webpack://./src/components/layout/layout.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AACF","sourcesContent":[".layout {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 90vh;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal-background/auth/auth.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal-background/auth/auth.scss ***!
  \*************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".auth {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  border-radius: 25px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 50px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Roboto\";\n  filter: drop-shadow(0 0 1em #e3f2fd);\n}\n\nform {\n  width: 100%;\n  max-width: 400px;\n}\nform input {\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n  border: none;\n  background-color: #f0f0f0;\n  border-radius: 10px 10px 0 0;\n  padding: 15px;\n  font-size: 1.25rem;\n  color: #2196F3;\n}\nform input::placeholder {\n  color: rgba(33, 150, 243, 0.65);\n}\nform .correct-input {\n  background-color: rgba(0, 187, 0, 0.15);\n}\n\n.error {\n  display: block;\n  color: #E3F2FD;\n  background-color: rgba(255, 0, 0, 0.45);\n  border-radius: 0 0 10px 10px;\n  padding: 10px;\n  margin-bottom: 15px;\n  transition: 0.3s;\n}\n\n.hidden {\n  background-color: white;\n  color: white;\n  visibility: hidden;\n}\n\n.buttons {\n  margin-top: 35px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n}\n\nbutton {\n  font-family: \"Roboto\";\n  border-radius: 5px;\n  border: none;\n  font-size: 1.25rem;\n  padding: 15px;\n  min-width: 150px;\n}\n\n#submit {\n  background-color: #2196F3;\n  color: #E3F2FD;\n}\n\n#cancel {\n  width: 100px;\n  color: #2196F3;\n  background-color: #E3F2FD;\n}", "",{"version":3,"sources":["webpack://./src/components/modal-background/auth/auth.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,uBAAA;EACA,aAAA;EAEA,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,oCAAA;AAAF;;AAGA;EACE,WAAA;EACA,gBAAA;AAAF;AAEE;EACE,WAAA;EACA,sBAAA;EACA,cAAA;EACA,YAAA;EACA,yBAAA;EACA,4BAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;AAAJ;AAEI;EACE,+BAAA;AAAN;AAGE;EACE,uCAAA;AADJ;;AAKA;EACE,cAAA;EACA,cAAA;EACA,uCAAA;EACA,4BAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;AAFF;;AAKA;EACE,uBAAA;EACA,YAAA;EACA,kBAAA;AAFF;;AAKA;EACE,gBAAA;EACA,aAAA;EACA,qBAAA;EACA,6BAAA;AAFF;;AAKA;EACE,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;AAFF;;AAKA;EACE,yBAAA;EACA,cAAA;AAFF;;AAKA;EACE,YAAA;EACA,cAAA;EACA,yBAAA;AAFF","sourcesContent":[".auth {\r\n  position: absolute;\r\n  width: 500px;\r\n  height: 500px;\r\n  border-radius: 25px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  padding: 50px;\r\n\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Roboto';\r\n  filter: drop-shadow(0 0 1em #e3f2fd);\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  max-width: 400px;\r\n\r\n  input {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    border: none;\r\n    background-color: #f0f0f0;\r\n    border-radius: 10px 10px 0 0;\r\n    padding: 15px;\r\n    font-size: 1.25rem;\r\n    color: #2196F3;\r\n\r\n    &::placeholder {\r\n      color: rgba($color: #2196F3, $alpha: .65)\r\n    }\r\n  }\r\n  .correct-input {\r\n    background-color: rgba($color: #00bb00, $alpha: .15);\r\n  }\r\n}\r\n\r\n.error {\r\n  display: block;\r\n  color: #E3F2FD;\r\n  background-color: rgba($color: #ff0000, $alpha: .45);\r\n  border-radius: 0 0 10px 10px;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n  transition: .3s;\r\n}\r\n\r\n.hidden {\r\n  background-color: white;\r\n  color: white;\r\n  visibility: hidden;\r\n}\r\n\r\n.buttons {\r\n  margin-top: 35px;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-around;\r\n}\r\n\r\nbutton {\r\n  font-family: 'Roboto';\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.25rem;\r\n  padding: 15px;\r\n  min-width: 150px;\r\n}\r\n\r\n#submit {\r\n  background-color: #2196F3;\r\n  color: #E3F2FD;\r\n}\r\n\r\n#cancel {\r\n  width: 100px;\r\n  color: #2196F3;\r\n  background-color: #E3F2FD;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal-background/modal-background.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal-background/modal-background.scss ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.35);\n}\n\n.closed {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/components/modal-background/modal-background.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,qCAAA;AACF;;AAEA;EACE,aAAA;AACF","sourcesContent":[".modal-background {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0 ;\r\n  background-color: rgba($color: #000000, $alpha: .35);\r\n}\r\n\r\n.closed {\r\n  display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/register/register-btn.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/register/register-btn.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n  background-color: #F2F9FE;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);\n  border-radius: 4px;\n  border: none;\n  padding: 10px 16px;\n  font-family: \"Roboto\";\n  color: #2196F3;\n  font-weight: 500;\n  font-size: 0.875rem;\n  letter-spacing: 1.25px;\n  text-transform: uppercase;\n  transition: 0.3s;\n  display: none;\n}\n.button:hover {\n  background-color: #E3F2FD;\n}\n\n.show {\n  display: block !important;\n}", "",{"version":3,"sources":["webpack://./src/components/register/register-btn.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,8GAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EAEA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,gBAAA;EAEA,aAAA;AADF;AAGE;EACE,yBAAA;AADJ;;AAKA;EACE,yBAAA;AAFF","sourcesContent":[".button {\r\n  background-color: #F2F9FE;\r\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);\r\n  border-radius: 4px;\r\n  border: none;\r\n  padding: 10px 16px;\r\n\r\n  font-family: 'Roboto';\r\n  color: #2196F3;\r\n  font-weight: 500;\r\n  font-size: 0.875rem;\r\n  letter-spacing: 1.25px;  \r\n  text-transform: uppercase;\r\n  transition: .3s;\r\n\r\n  display: none;\r\n\r\n  &:hover {\r\n    background-color: #E3F2FD;\r\n  }\r\n}\r\n\r\n.show {\r\n  display: block !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/score/score.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/score/score.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".score-layout {\n  height: fit-content;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 50px 60px;\n}\n.score-layout h2 {\n  font-family: \"Roboto\";\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 30px;\n  letter-spacing: 0.15px;\n  color: #333333;\n  margin-bottom: 20px;\n}\n.score-layout ul {\n  display: flex;\n  flex-flow: column nowrap;\n}\n.score-layout ul li {\n  box-sizing: border-box;\n  width: 850px;\n  height: 45px;\n  padding-bottom: 5px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Roboto\";\n  border-bottom: 1px solid rgba(33, 33, 33, 0.08);\n  margin-bottom: 20px;\n}\n.score-layout ul li .user-data {\n  display: flex;\n  flex-flow: column nowrap;\n  color: #333333;\n}\n.score-layout ul li .user-data .user-name {\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 21px;\n  letter-spacing: 0.1px;\n}\n.score-layout ul li .user-data .user-email {\n  font-size: 0.75rem;\n  line-height: 15px;\n  letter-spacing: 0.4px;\n}\n.score-layout ul li .user-score {\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n}\n.score-layout ul li .user-score .score-span {\n  color: rgba(0, 0, 0, 0.87);\n}\n.score-layout ul li .user-score .score-points {\n  color: #2196F3;\n}", "",{"version":3,"sources":["webpack://./src/components/score/score.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,mBAAA;EACA,+BAAA;EACA,kBAAA;EACA,kBAAA;AACF;AACE;EACE,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,sBAAA;EACA,cAAA;EACA,mBAAA;AACJ;AAEE;EACE,aAAA;EACA,wBAAA;AAAJ;AAEI;EACE,sBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,qBAAA;EAEA,+CAAA;EACA,mBAAA;AADN;AAGM;EACE,aAAA;EACA,wBAAA;EAEA,cAAA;AAFR;AAIQ;EACE,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;AAFV;AAKQ;EACE,kBAAA;EACA,iBAAA;EACA,qBAAA;AAHV;AAOM;EACE,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AALR;AAOQ;EACE,0BAAA;AALV;AAQQ;EACE,cAAA;AANV","sourcesContent":[".score-layout {\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: rgba(0, 0, 0, 0.05);\r\n  border-radius: 5px;\r\n  padding: 50px 60px;\r\n\r\n  h2 {\r\n    font-family: 'Roboto';\r\n    font-weight: 500;\r\n    font-size: 1.25rem;\r\n    line-height: 30px;\r\n    letter-spacing: 0.15px;\r\n    color: #333333;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  ul {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n\r\n    li {\r\n      box-sizing: border-box;\r\n      width: 850px;\r\n      height: 45px;\r\n      padding-bottom: 5px;\r\n      display: flex;\r\n      flex-flow: row wrap;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      font-family: 'Roboto';\r\n\r\n      border-bottom: 1px solid rgba(33, 33, 33, 0.08);\r\n      margin-bottom: 20px;\r\n\r\n      .user-data {\r\n        display: flex;\r\n        flex-flow: column nowrap;\r\n\r\n        color: #333333;\r\n\r\n        .user-name {\r\n          font-size: 0.875rem;\r\n          font-weight: 500;\r\n          line-height: 21px;\r\n          letter-spacing: 0.1px;\r\n        }\r\n\r\n        .user-email {\r\n          font-size: 0.75rem;\r\n          line-height: 15px;\r\n          letter-spacing: 0.4px;\r\n        }\r\n      }\r\n\r\n      .user-score {\r\n        font-size: 0.875rem;\r\n        font-weight: 500;\r\n        line-height: 24px;\r\n        letter-spacing: 0.15px;\r\n\r\n        .score-span {\r\n          color: rgba(0, 0, 0, 0.87);\r\n        }\r\n\r\n        .score-points {          \r\n          color: #2196F3;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/settings/settings.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/settings/settings.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings-layout {\n  height: fit-content;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 50px 60px;\n  font-family: \"Roboto\";\n}\n.settings-layout div:nth-of-type(1) {\n  margin-bottom: 40px;\n}\n.settings-layout select {\n  margin-top: 10px;\n  font-size: 1.25rem;\n  line-height: 30px;\n  letter-spacing: 0.15px;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: \"Roboto\";\n  width: 200px;\n}", "",{"version":3,"sources":["webpack://./src/components/settings/settings.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,+BAAA;EACA,kBAAA;EACA,kBAAA;EAEA,qBAAA;AAAF;AAEE;EACE,mBAAA;AAAJ;AAGE;EACE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,sBAAA;EACA,0BAAA;EACA,qBAAA;EAEA,YAAA;AAFJ","sourcesContent":[".settings-layout {\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: flex-start;\r\n  background: rgba(0, 0, 0, 0.05);\r\n  border-radius: 5px;\r\n  padding: 50px 60px;\r\n\r\n  font-family: 'Roboto';\r\n\r\n  div:nth-of-type(1) {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  select {\r\n    margin-top: 10px;\r\n    font-size: 1.25rem;\r\n    line-height: 30px;\r\n    letter-spacing: 0.15px;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    font-family: 'Roboto';\r\n\r\n    width: 200px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/start-button/start-button.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/start-button/start-button.scss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#startBtn {\n  text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/components/start-button/start-button.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;AACF","sourcesContent":["#startBtn {\r\n  text-decoration: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".root {\n  width: 100%;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,YAAA;AAAF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');\n\n.root {\n  width: 100%;\n  height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;;;;;;;;;;;;;EAaE,SAAS;CACV,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA,yDAAyD;AACzD;IACI,UAAU;AACd;;AAEA,gDAAgD;AAChD;;CAEC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,YAAY;AACb;;AAEA;;CAEC,WAAW;CACX,aAAa;AACd;;AAEA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;;;;IAII,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;IACrB,+BAA+B;IAC/B,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;EAEE;;AAEF;;;IAGI,qBAAqB;KACrB,eAAgB;KAChB,OAAQ;IACR,eAAe;AACnB;;AAEA;;;EAGE;;AAEF;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;EAGE;;AAEF;IACI,aAAa;AACjB;;AAEA;;;;;EAKE;;AAEF;IACI,eAAe,EAAE,MAAM;IACvB,8BAA8B,EAAE,MAAM;IACtC,0BAA0B,EAAE,MAAM;AACtC;;AAEA;;EAEE;;AAEF;IACI,oBAAoB;AACxB;;AAEA;;EAEE;;AAEF;;IAEI,UAAU;AACd;;AAEA;;;EAGE;;AAEF;IACI,SAAS,EAAE,MAAM;IACjB,+BAA+B,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;IACI,SAAS;AACb;;AAEA;;EAEE;;AAEF;IACI,SAAS;AACb;;AAEA;;EAEE;;AAEF;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;;;;EAIE;;AAEF;IACI,SAAS,EAAE,MAAM;IACjB,UAAU;IACV,mBAAmB,EAAE,MAAM;KAC3B,iBAAkB,EAAE,MAAM;AAC9B;;AAEA;;;;;EAKE;;AAEF;;;;IAII,eAAe,EAAE,MAAM;IACvB,SAAS,EAAE,MAAM;IACjB,wBAAwB,EAAE,MAAM;KAChC,sBAAuB,EAAE,MAAM;AACnC;;AAEA;;;EAGE;;AAEF;;IAEI,mBAAmB;AACvB;;AAEA;;;;;EAKE;;AAEF;;IAEI,oBAAoB;AACxB;;AAEA;;;;;;;;EAQE;;AAEF;;;;IAII,0BAA0B,EAAE,MAAM;IAClC,eAAe,EAAE,MAAM;KACvB,iBAAkB,GAAG,MAAM;AAC/B;;AAEA;;EAEE;;AAEF;;IAEI,eAAe;AACnB;;AAEA;;;;;EAKE;;AAEF;;IAEI,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;KAClB,YAAa,EAAE,MAAM;KACrB,WAAY,EAAE,MAAM;AACxB;;AAEA;;;;EAIE;;AAEF;IACI,6BAA6B,EAAE,MAAM;IACrC,4BAA4B;IAC5B,+BAA+B,EAAE,MAAM;IACvC,uBAAuB;AAC3B;;AAEA;;;EAGE;;AAEF;;IAEI,wBAAwB;AAC5B;;AAEA;;EAEE;;AAEF;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA;;;EAGE;;AAEF;IACI,cAAc,EAAE,MAAM;IACtB,mBAAmB,EAAE,MAAM;AAC/B;;AAEA;;EAEE;;AAEF;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;;;;;IAKI,WAAW;AACf;;;AAGA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,gBAAgB;AACpB","sourcesContent":["*, *::after, *::before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/about/about.scss":
/*!*****************************************!*\
  !*** ./src/components/about/about.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./about.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about/about.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/game/card/card.scss":
/*!********************************************!*\
  !*** ./src/components/game/card/card.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/card/card.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/game/game.scss":
/*!***************************************!*\
  !*** ./src/components/game/game.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./game.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/game.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/game/timer/timer.scss":
/*!**********************************************!*\
  !*** ./src/components/game/timer/timer.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_timer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./timer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/game/timer/timer.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_timer_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_timer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/header-nav/header-nav.scss":
/*!***************************************************!*\
  !*** ./src/components/header-nav/header-nav.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header-nav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header-nav/header-nav.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_nav_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_nav_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/header.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/layout/layout.scss":
/*!*******************************************!*\
  !*** ./src/components/layout/layout.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./layout.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/layout/layout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/modal-background/auth/auth.scss":
/*!********************************************************!*\
  !*** ./src/components/modal-background/auth/auth.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_auth_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./auth.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal-background/auth/auth.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_auth_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_auth_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/modal-background/modal-background.scss":
/*!***************************************************************!*\
  !*** ./src/components/modal-background/modal-background.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_background_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./modal-background.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal-background/modal-background.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_background_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_background_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/register/register-btn.scss":
/*!***************************************************!*\
  !*** ./src/components/register/register-btn.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_register_btn_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./register-btn.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/register/register-btn.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_register_btn_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_register_btn_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/score/score.scss":
/*!*****************************************!*\
  !*** ./src/components/score/score.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_score_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./score.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/score/score.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_score_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_score_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/settings/settings.scss":
/*!***********************************************!*\
  !*** ./src/components/settings/settings.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_settings_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./settings.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/settings/settings.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_settings_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_settings_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/start-button/start-button.scss":
/*!*******************************************************!*\
  !*** ./src/components/start-button/start-button.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_start_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./start-button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/start-button/start-button.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_start_button_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_start_button_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/base-component */ "./src/components/base-component.ts");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.ts");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/layout */ "./src/components/layout/layout.ts");
/* harmony import */ var _components_modal_background_modal_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal-background/modal-background */ "./src/components/modal-background/modal-background.ts");




class App extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(rootElement) {
        super("div", ["root"], "root");
        this.rootElement = rootElement;
        this.header = new _components_header_header__WEBPACK_IMPORTED_MODULE_1__.default(this.element);
        this.layout = new _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__.default(this.element);
        this.modalWindow = new _components_modal_background_modal_background__WEBPACK_IMPORTED_MODULE_3__.default(this.element);
        this.rootElement.appendChild(this.element);
        localStorage.name = "";
        localStorage.surname = "";
        localStorage.email = "";
        localStorage.cardsType = "0";
        localStorage.gameDifficulty = "0";
    }
}


/***/ }),

/***/ "./src/components/about/about.ts":
/*!***************************************!*\
  !*** ./src/components/about/about.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.scss */ "./src/components/about/about.scss");


const page = __webpack_require__(/*! ../../assets/about.png */ "./src/assets/about.png");
class About extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super("div", ["about-layout"]);
        this.img = document.createElement("img");
        this.img.src = page;
        this.element.appendChild(this.img);
    }
}


/***/ }),

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseComponent)
/* harmony export */ });
class BaseComponent {
    constructor(tag = "div", styles = [], id = "") {
        this.element = document.createElement(tag);
        this.element.classList.add(...styles);
        this.element.id = id;
    }
}


/***/ }),

/***/ "./src/components/game/card/card.ts":
/*!******************************************!*\
  !*** ./src/components/game/card/card.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.scss */ "./src/components/game/card/card.scss");


class Card extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(cardBackground, pairNumber, type) {
        super("div", ["card-wrapper"]);
        this.renderCardElement(cardBackground, pairNumber, type);
    }
    renderCardElement(backgroundNumber, pair, type) {
        function create(tagName, className) {
            const element = document.createElement(tagName);
            element.classList.add(...className);
            return element;
        }
        let folderName;
        switch (type) {
            case "0":
                folderName = "birds";
                break;
            case "1":
                folderName = "dinos";
                break;
            case "2":
                folderName = "wildlife";
                break;
            case "3":
                folderName = "farm";
                break;
            default:
                folderName = "birds";
                break;
        }
        const card = create("div", ["card", "flipped"]);
        const cardFront = create("div", ["card__front"]);
        const cardBack = create("div", ["card__back"]);
        const correct = create("div", ["correct"]);
        const wrong = create("div", ["wrong"]);
        cardFront.style.backgroundImage = `url("../../../../${folderName}/pic (${backgroundNumber}).svg")`;
        card.dataset.number = backgroundNumber.toString();
        card.dataset.pair = pair.toString();
        card.dataset.closed = "false";
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        this.element.appendChild(correct);
        this.element.appendChild(wrong);
        this.element.appendChild(card);
    }
}


/***/ }),

/***/ "./src/components/game/game.ts":
/*!*************************************!*\
  !*** ./src/components/game/game.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card */ "./src/components/game/card/card.ts");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer/timer */ "./src/components/game/timer/timer.ts");
/* harmony import */ var _game_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.scss */ "./src/components/game/game.scss");




function pad2(number) {
    return (number < 10 ? "0" : "") + number;
}
class Game extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super("div", ["cardgame-wrapper"]);
        this.cardgameElement = document.createElement("div");
        this.previousElement = document.createElement("div");
        this.currentCardNumber = "0";
        this.wrongMatches = 0;
        this.correctMatches = 0;
        this.done = false;
        this.timer = new _timer_timer__WEBPACK_IMPORTED_MODULE_2__.default(this.cardgameElement);
        this.cardgameElement.classList.add("cardgame", "animation");
        this.element.appendChild(this.timer.element);
        this.element.appendChild(this.cardgameElement);
        this.addEventListeners();
        this.startGame();
    }
    generateCards(type, difficulty) {
        function shuffleArray(arr) {
            const copyArr = arr;
            for (let i = arr.length - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1));
                [copyArr[i], copyArr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        const cards = [];
        const size = Number(difficulty) ? 18 : 8;
        for (let i = 1; i <= size; i += 1) {
            const card = new _card_card__WEBPACK_IMPORTED_MODULE_1__.default(i, 1, type);
            const card2 = new _card_card__WEBPACK_IMPORTED_MODULE_1__.default(i, 2, type);
            cards.push(card.element);
            cards.push(card2.element);
        }
        shuffleArray(cards);
        cards.forEach((a) => {
            this.cardgameElement.appendChild(a);
        });
    }
    addEventListeners() {
        this.cardgameElement.addEventListener("click", (e) => {
            if (this.cardgameElement.classList.contains("animation")) {
                return;
            }
            function correct(elements) {
                elements.forEach((a) => {
                    var _a;
                    const correctDiv = (_a = a.previousSibling) === null || _a === void 0 ? void 0 : _a.previousSibling;
                    correctDiv.classList.toggle("show");
                    const { dataset } = a;
                    dataset.closed = "true";
                });
            }
            function wrong(elements) {
                elements.forEach((a) => {
                    const wrongDiv = a.previousSibling;
                    wrongDiv.classList.toggle("show");
                });
            }
            const target = e.target;
            const targetParent = target.parentElement;
            if (targetParent.dataset.closed !== "false") {
                return;
            }
            if (this.previousElement.dataset.pair === targetParent.dataset.pair &&
                this.previousElement.dataset.number === targetParent.dataset.number) {
                return;
            }
            if (target.classList.contains("card__back") ||
                target.classList.contains("card__front")) {
                target.parentElement.classList.toggle("flipped");
            }
            if (targetParent.dataset.number === this.currentCardNumber) {
                //* if correct
                this.cardgameElement.classList.add("animation");
                this.currentCardNumber = "0";
                setTimeout(() => {
                    correct([targetParent, this.previousElement]);
                }, 500);
                setTimeout(() => {
                    correct([targetParent, this.previousElement]);
                    this.cardgameElement.classList.remove("animation");
                }, 1200);
                this.correctMatches += 1;
                if (this.correctMatches === 8) {
                    const timer = document.getElementById("gameTimer");
                    const [minutes, seconds] = timer.innerText.split(":");
                    console.log("CONGRATS!");
                    this.done = true;
                    const score = (this.correctMatches - this.wrongMatches) * 100 -
                        (Number(minutes) * 60 + Number(seconds) * 10) || 0;
                    console.log(`your score is ${score}`);
                }
            }
            else if (this.currentCardNumber === "0") {
                //* if one pressed
                this.currentCardNumber = targetParent.dataset.number;
                this.previousElement = targetParent;
            }
            else {
                //* if wrong
                this.currentCardNumber = "0";
                this.cardgameElement.classList.add("animation");
                setTimeout(() => {
                    setTimeout(() => {
                        wrong([targetParent, this.previousElement]);
                    }, 500);
                    setTimeout(() => {
                        wrong([targetParent, this.previousElement]);
                        this.previousElement.classList.toggle("flipped");
                        targetParent.classList.toggle("flipped");
                        this.cardgameElement.classList.remove("animation");
                    }, 2000);
                }, 100);
                this.wrongMatches += 1;
            }
        });
    }
    startGame() {
        setTimeout(() => {
            if (document.querySelector(".cardgame") === null) {
                this.startGame();
            }
            else {
                switch (localStorage.getItem("gameDifficulty")) {
                    case "0":
                        this.cardgameElement.classList.add("four-x-four");
                        break;
                    case "1":
                        this.cardgameElement.classList.add("six-x-six");
                        break;
                    default:
                        this.cardgameElement.classList.add("four-x-four");
                        break;
                }
                this.generateCards(localStorage.getItem("cardsType") || "0", localStorage.getItem("gameDifficulty") || "0");
                const timer = document.getElementById("gameTimer");
                let seconds = 14;
                const i = setInterval(() => {
                    timer.innerText = `00:${pad2(seconds)}`;
                    seconds -= 1;
                }, 1000);
                if (this.cardgameElement) {
                    setTimeout(() => {
                        const cards = document.querySelectorAll(".card");
                        cards.forEach((a) => {
                            a.classList.remove("flipped");
                            this.cardgameElement.classList.remove("animation");
                        });
                        clearInterval(i);
                        const date = new Date();
                        setInterval(() => {
                            if (this.done) {
                                clearInterval();
                            }
                            else {
                                const newDate = new Date();
                                timer.innerText = `${pad2(Math.floor((newDate.getTime() - date.getTime()) / 1000 / 60))}:${pad2(Math.floor(((newDate.getTime() - date.getTime()) / 1000) % 60))}`;
                            }
                        }, 1000);
                    }, 15000);
                }
            }
        }, 1000);
    }
}


/***/ }),

/***/ "./src/components/game/timer/timer.ts":
/*!********************************************!*\
  !*** ./src/components/game/timer/timer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _timer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.scss */ "./src/components/game/timer/timer.scss");


class Timer extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(appendElement) {
        super("div", ["game-timer"], "gameTimer");
        this.appendElement = appendElement;
        this.element.innerText = "00:15";
    }
}


/***/ }),

/***/ "./src/components/header-nav/header-nav.ts":
/*!*************************************************!*\
  !*** ./src/components/header-nav/header-nav.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _header_nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-nav.scss */ "./src/components/header-nav/header-nav.scss");


const aboutIcon = __webpack_require__(/*! ../../assets/about.svg */ "./src/assets/about.svg");
const scoreIcon = __webpack_require__(/*! ../../assets/score.svg */ "./src/assets/score.svg");
const settingsIcon = __webpack_require__(/*! ../../assets/settings.svg */ "./src/assets/settings.svg");
class Nav extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(appendElement) {
        super("nav");
        this.appendElement = appendElement;
        this.ul = document.createElement("ul");
        this.ul.innerHTML = `
    <li id="about-game">
      <a href="#about">
			  <img src="${aboutIcon}" alt="about icon">			
				<h2>About Game</h2>
			</a>
		</li>

		<li id="best-score">
      <a href="#score">
			  <img src="${scoreIcon}" alt="score icon">
				<h2>Best Score</h2>
			</a>
		</li>

		<li id="game-settings">
      <a href="#settings">
			  <img src="${settingsIcon}" alt="settings icon">
				<h2>Game Settings</h2>
			</a>
		</li>
    `;
        this.element.appendChild(this.ul);
        this.appendElement.appendChild(this.element);
    }
}


/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _header_nav_header_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-nav/header-nav */ "./src/components/header-nav/header-nav.ts");
/* harmony import */ var _register_register_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/register-btn */ "./src/components/register/register-btn.ts");
/* harmony import */ var _start_button_start_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../start-button/start-button */ "./src/components/start-button/start-button.ts");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");





const logoSrc = __webpack_require__(/*! ../../assets/logo.svg */ "./src/assets/logo.svg");
class Header extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(appendElement) {
        super("header");
        this.appendElement = appendElement;
        this.logo = document.createElement("img");
        this.logo.src = logoSrc;
        this.logo.className = "logo";
        this.element.appendChild(this.logo);
        this.nav = new _header_nav_header_nav__WEBPACK_IMPORTED_MODULE_1__.default(this.element);
        this.regBtn = new _register_register_btn__WEBPACK_IMPORTED_MODULE_2__.default(this.element);
        this.startBtn = new _start_button_start_button__WEBPACK_IMPORTED_MODULE_3__.default(this.element);
        this.appendElement.appendChild(this.element);
    }
}


/***/ }),

/***/ "./src/components/layout/layout.ts":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _about_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../about/about */ "./src/components/about/about.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _score_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../score/score */ "./src/components/score/score.ts");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/settings */ "./src/components/settings/settings.ts");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.scss */ "./src/components/layout/layout.scss");
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/router */ "./src/services/router.ts");
/* harmony import */ var _services_dbService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dbService */ "./src/services/dbService.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../game/game */ "./src/components/game/game.ts");








class Layout extends _base_component__WEBPACK_IMPORTED_MODULE_1__.default {
    // users: Array<User>;
    constructor(rootElement) {
        super("div", ["layout"]);
        this.rootElement = rootElement;
        this.about = new _about_about__WEBPACK_IMPORTED_MODULE_0__.default();
        this.score = new _score_score__WEBPACK_IMPORTED_MODULE_2__.default();
        this.settings = new _settings_settings__WEBPACK_IMPORTED_MODULE_3__.default();
        this.game = new _game_game__WEBPACK_IMPORTED_MODULE_7__.default();
        this.rootElement.appendChild(this.element);
        this.renderAbout();
        (0,_services_router__WEBPACK_IMPORTED_MODULE_5__.default)(this.element, this.about.element, this.score.element, this.settings.element, this.game.element);
        (0,_services_dbService__WEBPACK_IMPORTED_MODULE_6__.startDB)();
        // this.renderScore();
        // this.users = [];
    }
    renderAbout() {
        this.element.appendChild(this.about.element); //! start page
    }
    renderSettings() {
        this.element.appendChild(this.settings.element);
    }
}


/***/ }),

/***/ "./src/components/modal-background/auth/auth.ts":
/*!******************************************************!*\
  !*** ./src/components/modal-background/auth/auth.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalBackground)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _auth_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.scss */ "./src/components/modal-background/auth/auth.scss");


class ModalBackground extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(rootElement) {
        super("div", ["auth"]);
        this.rootElement = rootElement;
        this.element.innerHTML = `
    <form id="regForm" action="">
		<input id="name" class="reg-form-input" type="text" required placeholder="Name">
		<span id="name-error" class="error hidden">Error</span>
		<input id="surname" class="reg-form-input" type="text" required placeholder="Surname">
		<span id="surname-error" class="error hidden">Error</span>
		<input id="email" class="reg-form-input" type="email" required placeholder="Email">
		<div class="buttons">
			<button id="submit" type="button">Submit</button>
			<button id="cancel" type="reset">Cancel</button>
		</div>
	  </form>`;
        this.addInputEventListeners("name");
        this.addInputEventListeners("surname");
        this.addSubmitEventListener();
        this.addCancelEventListener();
        this.rootElement.appendChild(this.element);
    }
    addInputEventListeners(id) {
        const inputID = document.getElementById(id);
        if (inputID === null) {
            setTimeout(() => {
                this.addInputEventListeners(id);
            }, 1000);
        }
        else {
            const errorElement = document.getElementById(`${id}-error`);
            inputID.addEventListener("input", (e) => {
                const input = e.target;
                if (input.value.length < 3) {
                    inputID.classList.remove("correct-input");
                    errorElement.classList.remove("hidden");
                    errorElement.innerText = "Minimum length is 3 characters.";
                }
                else if (input.value.length > 30) {
                    inputID.classList.remove("correct-input");
                    errorElement.classList.remove("hidden");
                    errorElement.innerText = "Maximum length is 30 characters.";
                }
                else if (input.value.match(/^\d+$/)) {
                    inputID.classList.remove("correct-input");
                    errorElement.classList.remove("hidden");
                    errorElement.innerText = "Name cannot be from numbers only.";
                }
                else if (input.value.search(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/) !== -1) {
                    inputID.classList.remove("correct-input");
                    errorElement.classList.remove("hidden");
                    errorElement.innerText = "No special characters.";
                }
                else {
                    errorElement.classList.add("hidden");
                    inputID.classList.add("correct-input");
                }
            });
        }
    }
    addSubmitEventListener() {
        const inputID = document.getElementById("submit");
        if (inputID === null) {
            setTimeout(() => {
                this.addSubmitEventListener();
            }, 1000);
        }
        else {
            inputID.addEventListener("click", () => {
                const name = document.getElementById("name");
                const surname = document.getElementById("surname");
                const email = document.getElementById("email");
                const background = document.getElementById("modal-background");
                const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9])\])/;
                if (email.value.match(emailFormat) !== null &&
                    name.classList.contains("correct-input") &&
                    surname.classList.contains("correct-input")) {
                    localStorage.setItem("name", name.value);
                    localStorage.setItem("surname", surname.value);
                    localStorage.setItem("email", email.value);
                    background === null || background === void 0 ? void 0 : background.dispatchEvent(new Event("click"));
                    const start = document.getElementById("startBtn");
                    start === null || start === void 0 ? void 0 : start.classList.add("show");
                    const register = document.getElementById("registerBtn");
                    register === null || register === void 0 ? void 0 : register.classList.remove("show");
                }
            });
        }
    }
    addCancelEventListener() {
        const inputID = document.getElementById("cancel");
        if (inputID === null) {
            setTimeout(() => {
                this.addCancelEventListener();
            }, 1000);
        }
        else {
            inputID.addEventListener("click", () => {
                const errors = document.querySelectorAll(".error");
                errors.forEach((a) => a.classList.add("hidden"));
                const inputs = document.querySelectorAll(".reg-form-input");
                inputs.forEach((a) => a.classList.remove("correct-input"));
            });
        }
    }
}


/***/ }),

/***/ "./src/components/modal-background/modal-background.ts":
/*!*************************************************************!*\
  !*** ./src/components/modal-background/modal-background.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalBackground)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth */ "./src/components/modal-background/auth/auth.ts");
/* harmony import */ var _modal_background_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-background.scss */ "./src/components/modal-background/modal-background.scss");



class ModalBackground extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(rootElement) {
        super("div", ["modal-background", "closed"], "modal-background");
        this.rootElement = rootElement;
        this.auth = new _auth_auth__WEBPACK_IMPORTED_MODULE_1__.default(this.element);
        this.rootElement.appendChild(this.element);
        this.addBackgroundListeners();
    }
    addBackgroundListeners() {
        const background = document.getElementById("modal-background");
        if (background === null) {
            setTimeout(() => {
                this.addBackgroundListeners();
            }, 1000);
        }
        else {
            background.addEventListener("click", (e) => {
                const target = e.target;
                if (target.className === "modal-background") {
                    background.classList.add("closed");
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/components/register/register-btn.ts":
/*!*************************************************!*\
  !*** ./src/components/register/register-btn.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterBtn)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _register_btn_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-btn.scss */ "./src/components/register/register-btn.scss");


class RegisterBtn extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(appendElement) {
        super("button", ["button", "show"], "registerBtn");
        this.appendElement = appendElement;
        this.element.innerText = "register new player";
        this.element.onclick = () => this.openModalWindow();
        this.appendElement.appendChild(this.element);
    }
    openModalWindow() {
        if (this.element) {
            const modal = document.getElementById("modal-background");
            modal === null || modal === void 0 ? void 0 : modal.classList.remove("closed");
        }
    }
}


/***/ }),

/***/ "./src/components/score-user/score-user.ts":
/*!*************************************************!*\
  !*** ./src/components/score-user/score-user.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScoreUser)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");

class ScoreUser extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(rootElement, user) {
        super("li");
        this.rootElement = rootElement;
        this.element.innerHTML = `
      <div class="user-data">
        <span class="user-name">
          ${user.name} ${user.last_name}
        </span>

				<span class="user-email">
          ${user.email}
        </span>
      </div>

      <div class="user-score">
        <span class="score-span">
          Score: 
        </span>

        <span class="score-points">
          ${user.score}
        </span>
      </div>
    `;
        this.rootElement.appendChild(this.element);
    }
}


/***/ }),

/***/ "./src/components/score/score.ts":
/*!***************************************!*\
  !*** ./src/components/score/score.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _score_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.scss */ "./src/components/score/score.scss");
/* harmony import */ var _services_dbService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dbService */ "./src/services/dbService.ts");
/* harmony import */ var _score_user_score_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../score-user/score-user */ "./src/components/score-user/score-user.ts");




class Score extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super("div", ["score-layout"]);
        this.h2 = document.createElement("h2");
        this.h2.innerText = "Best players";
        this.element.appendChild(this.h2);
        this.renderScore();
    }
    renderScore() {
        const ul = document.createElement("ul");
        function continueRender(users) {
            users.forEach((a) => {
                const li = new _score_user_score_user__WEBPACK_IMPORTED_MODULE_3__.default(ul, a);
                ul.appendChild(li.element);
            });
        }
        (0,_services_dbService__WEBPACK_IMPORTED_MODULE_2__.getUsers)(continueRender);
        this.element.appendChild(ul);
    }
}


/***/ }),

/***/ "./src/components/settings/settings.ts":
/*!*********************************************!*\
  !*** ./src/components/settings/settings.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _settings_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.scss */ "./src/components/settings/settings.scss");


class Settings extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super("div", ["settings-layout"]);
        this.element.innerHTML = `
    <div class="settings-type">
		  <h2>Game cards</h2>
		  <select name="" id="cardsType">
        <option value="1">Birds</option>
			  <option value="2">Dinosaurs</option>
			  <option value="3">Wildlife</option>
			  <option value="4">Farm</option>
		  </select>
	  </div>
	  <div class="settings-difficulty">
		  <h2>Difficulty</h2>
		  <select name="" id="gameDifficulty">
        <option value="1">4x4</option>
			  <option value="2">6x6</option>
		  </select>
	  </div>
    `;
        this.addEventListeners(this.element);
    }
    addEventListeners(el) {
        if (this.element) {
            el.addEventListener("mouseup", (e) => {
                const target = e.target;
                if (target.id === "cardsType") {
                    const select = target;
                    localStorage.cardsType = select.selectedIndex;
                }
                if (target.id === "gameDifficulty") {
                    const select = target;
                    localStorage.gameDifficulty = select.selectedIndex;
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/components/start-button/start-button.ts":
/*!*****************************************************!*\
  !*** ./src/components/start-button/start-button.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StartButton)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
/* harmony import */ var _start_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-button.scss */ "./src/components/start-button/start-button.scss");


class StartButton extends _base_component__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(appendElement) {
        super("a", ["button"], "startBtn");
        this.appendElement = appendElement;
        this.link = this.element;
        this.link.href = "#game";
        this.element.innerText = "start game";
        // this.element.onclick = () => this.startGame();
        this.appendElement.appendChild(this.element);
    }
}


/***/ }),

/***/ "./src/services/dbService.ts":
/*!***********************************!*\
  !*** ./src/services/dbService.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startDB": () => (/* binding */ startDB),
/* harmony export */   "getUsers": () => (/* binding */ getUsers)
/* harmony export */ });
// import User from "../components/layout/userInterface";
const IDB = window.indexedDB;
let database = null;
const openRequest = IDB.open("RykeVl");
openRequest.onupgradeneeded = () => {
    database = openRequest.result;
    const store = database.createObjectStore("User", {
        keyPath: "id",
        autoIncrement: true,
    });
    for (let i = 1; i <= 10; i += 1) {
        store.add({
            name: `name#${i}`,
            last_name: `last_name#${i}`,
            email: `email${i}@gmail.com`,
            score: i * 10,
        });
    }
};
function startDB() { }
function getUsers(callback) {
    database = openRequest.result;
    const transaction = database.transaction("User", "readwrite");
    const userTable = transaction.objectStore("User");
    const result = userTable.getAll();
    transaction.oncomplete = () => {
        callback(result.result);
    };
}
openRequest.onsuccess = () => {
    // getUsers();
    // database = openRequest.result;
    // const transaction = database.transaction("User", "readwrite");
    // const userTable = transaction.objectStore("User");
    // const all = userTable.getAll();
};
// export default class DB {
//   dbOpen: IDBOpenDBRequest;
//   db: IDBDatabase;
//   constructor() {
//     this.dbOpen = indexedDB.open('RykeVl');
//     this.db = this.dbOpen.result
//     this.dbOpen.onsuccess = () => {
//       this.db = this.dbOpen.result;
//     }
//   }
// }


/***/ }),

/***/ "./src/services/router.ts":
/*!********************************!*\
  !*** ./src/services/router.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ router)
/* harmony export */ });
function router(container, about, score, settings, game) {
    const layout = container;
    const routing = [
        {
            name: "about",
            component: () => {
                layout.innerHTML = "";
                layout.appendChild(about); //! start page
            },
        },
        {
            name: "score",
            component: () => {
                layout.innerHTML = "";
                layout.appendChild(score);
            },
        },
        {
            name: "settings",
            component: () => {
                layout.innerHTML = "";
                layout.appendChild(settings);
            },
        },
        {
            name: "game",
            component: () => {
                layout.innerHTML = "";
                layout.appendChild(game);
            },
        },
    ];
    const defaultRoute = {
        name: "default",
        component: () => {
            layout.appendChild(about);
        },
    };
    window.onpopstate = () => {
        const currentRouteName = window.location.hash.slice(1);
        const currentRoute = routing.find((p) => p.name === currentRouteName);
        (currentRoute || defaultRoute).component();
    };
}


/***/ }),

/***/ "./src/assets/about.png":
/*!******************************!*\
  !*** ./src/assets/about.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/about.png";

/***/ }),

/***/ "./src/assets/about.svg":
/*!******************************!*\
  !*** ./src/assets/about.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/about.svg";

/***/ }),

/***/ "./src/assets/card-back.jpg":
/*!**********************************!*\
  !*** ./src/assets/card-back.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/card-back.jpg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo.svg";

/***/ }),

/***/ "./src/assets/score.svg":
/*!******************************!*\
  !*** ./src/assets/score.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/score.svg";

/***/ }),

/***/ "./src/assets/settings.svg":
/*!*********************************!*\
  !*** ./src/assets/settings.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/settings.svg";

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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.ts");



window.onload = () => {
    const app = new _app__WEBPACK_IMPORTED_MODULE_2__.default(document.body);
    if (!app)
        throw Error("no app");
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9jYXJkL2NhcmQuc2NzcyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9nYW1lLnNjc3MiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2dhbWUvdGltZXIvdGltZXIuc2NzcyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLW5hdi9oZWFkZXItbmF2LnNjc3MiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5zY3NzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1iYWNrZ3JvdW5kL2F1dGgvYXV0aC5zY3NzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1iYWNrZ3JvdW5kL21vZGFsLWJhY2tncm91bmQuc2NzcyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXItYnRuLnNjc3MiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL3Njb3JlL3Njb3JlLnNjc3MiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL3N0YXJ0LWJ1dHRvbi9zdGFydC1idXR0b24uc2NzcyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9hYm91dC9hYm91dC5zY3NzPzZhYzEiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2dhbWUvY2FyZC9jYXJkLnNjc3M/OGJkZSIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9nYW1lLnNjc3M/Nzk3NiIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS90aW1lci90aW1lci5zY3NzPzljMjMiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5zY3NzP2ZjYmQiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzcz9jZDc5Iiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnNjc3M/YWRkNCIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtYmFja2dyb3VuZC9hdXRoL2F1dGguc2Nzcz9jZGU5Iiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1iYWNrZ3JvdW5kL21vZGFsLWJhY2tncm91bmQuc2Nzcz81MDczIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci1idG4uc2Nzcz8xMjU0Iiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5zY3NzPzhhZmQiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnNjc3M/MjU2MCIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvc3RhcnQtYnV0dG9uL3N0YXJ0LWJ1dHRvbi5zY3NzPzdmOGEiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3M/MjAzYiIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9hYm91dC9hYm91dC50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2dhbWUvY2FyZC9jYXJkLnRzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2dhbWUvdGltZXIvdGltZXIudHMiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci1uYXYvaGVhZGVyLW5hdi50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtYmFja2dyb3VuZC9hdXRoL2F1dGgudHMiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL21vZGFsLWJhY2tncm91bmQvbW9kYWwtYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXItYnRuLnRzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9zY29yZS11c2VyL3Njb3JlLXVzZXIudHMiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS8uL3NyYy9jb21wb25lbnRzL3Njb3JlL3Njb3JlLnRzIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL2NvbXBvbmVudHMvc3RhcnQtYnV0dG9uL3N0YXJ0LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL3NlcnZpY2VzL2RiU2VydmljZS50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lLy4vc3JjL3NlcnZpY2VzL3JvdXRlci50cyIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWF0Y2gtbWF0Y2gtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXRjaC1tYXRjaC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hdGNoLW1hdGNoLWdhbWUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EseURBQXlELGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLE9BQU8sa0dBQWtHLFVBQVUsVUFBVSxXQUFXLFdBQVcsd0NBQXdDLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLG1CQUFtQjtBQUNyYztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDK0g7QUFDN0I7QUFDTztBQUMvQjtBQUMxRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxrREFBNkI7QUFDdEc7QUFDQSx5REFBeUQsd0JBQXdCLG9CQUFvQixxQkFBcUIsR0FBRywwQkFBMEIsaURBQWlELDJCQUEyQixHQUFHLHVCQUF1Qix5Q0FBeUMsR0FBRyxXQUFX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QUM7UUFDdkQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXRFLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzdDLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7OztBQ2Y0QjtBQUNFO0FBQ047QUFFeEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxHQUFHLEdBQVEsSUFBSSx5Q0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QyxJQUFJLENBQUMsR0FBRztRQUFFLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5mYWQxNjgzODc1OTRlOGVlMDUzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFib3V0LWxheW91dCB7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hYm91dC9hYm91dC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFib3V0LWxheW91dCB7XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY2FyZC1iYWNrLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLXdyYXBwZXIge1xcbiAgcGVyc3BlY3RpdmU6IDIwMDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5jYXJkLXdyYXBwZXIgLmZsaXBwZWQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG4uY2FyZC13cmFwcGVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcXG59XFxuXFxuLmNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbn1cXG4uY2FyZF9fZnJvbnQsIC5jYXJkX19iYWNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5jYXJkX19mcm9udCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uY2FyZF9fYmFjayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmNvcnJlY3QsIC53cm9uZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTFweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi53cm9uZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5jb3JyZWN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC40KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9jYXJkL2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLDRDQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUVFO0VBQ0Usb0NBQUE7QUFBSjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsNEdBQ0U7RUFHRixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBTkY7QUFRRTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQVBKO0FBVUU7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQVJKO0FBWUU7RUFDRSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBWEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhcmQtd3JhcHBlciB7XFxyXFxuICBwZXJzcGVjdGl2ZTogMjAwMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogLjNzO1xcclxcblxcclxcbiAgLmZsaXBwZWQge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaGFkb3c6XFxyXFxuICAgIDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXHJcXG4gICAgMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcXHJcXG4gICAgMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gIHRyYW5zaXRpb246IC41cztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcclxcblxcclxcbiAgJl9fZnJvbnQsXFxyXFxuICAmX19iYWNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mcm9udCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JpcmRzL3N2Zy9iaXJkICgyKS5zdmcnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2NhcmQtYmFjay5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb3JyZWN0LCAud3Jvbmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xcHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogLjNzO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi53cm9uZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZjAwMDAsICRhbHBoYTogLjUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcnJlY3Qge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDBmZjAwLCAkYWxwaGE6IC40MCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkZ2FtZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2FyZGdhbWUge1xcbiAgaGVpZ2h0OiA4MDBweDtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3VyLXgtZm91ciB7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIvMWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG4uc2l4LXgtc2l4IHtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyLzFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLDhDQUFBO0FBQUY7O0FBR0E7RUFDRSw4REFBQTtBQUFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJkZ2FtZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZGdhbWUge1xcclxcbiAgaGVpZ2h0OiA4MDBweDtcXHJcXG4gIHdpZHRoOiA4MDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3VyLXgtZm91ciB7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIgLyAxZnIgMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5zaXgteC1zaXgge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIvIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZS10aW1lciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzIxOTZGMztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGNvbG9yOiAjMzIzMjMyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9nYW1lL3RpbWVyL3RpbWVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWUtdGltZXIge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMyMTk2RjM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuXFxyXFxuICBjb2xvcjogIzMyMzIzMjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibmF2IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbn1cXG51bCBhIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMTVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbnVsIGE6aG92ZXIge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxudWwgYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG51bCBhIGltZyB7XFxuICBtYXgtd2lkdGg6IDIwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXItbmF2L2hlYWRlci1uYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0FBSE47QUFNSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUpOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm5hdiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdztcXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcblxcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAyMHB4O1xcclxcbiAgICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBib3gtc2hhZG93OiAwIDFweCAjMTk3NkQyO1xcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAjMTk3NkQyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOTB2aDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxheW91dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXV0aCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMWVtICNlM2YyZmQpO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiAjMjE5NkYzO1xcbn1cXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgzMywgMTUwLCAyNDMsIDAuNjUpO1xcbn1cXG5mb3JtIC5jb3JyZWN0LWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTg3LCAwLCAwLjE1KTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNFM0YyRkQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40NSk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXG4gIGNvbG9yOiAjRTNGMkZEO1xcbn1cXG5cXG4jY2FuY2VsIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGNvbG9yOiAjMjE5NkYzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtYmFja2dyb3VuZC9hdXRoL2F1dGguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQUY7QUFFRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0UsK0JBQUE7QUFBTjtBQUdFO0VBQ0UsdUNBQUE7QUFESjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmF1dGgge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA1MHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDFlbSAjZTNmMmZkKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuXFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGNvbG9yOiAjMjE5NkYzO1xcclxcblxcclxcbiAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjMjE5NkYzLCAkYWxwaGE6IC42NSlcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmNvcnJlY3QtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwYmIwMCwgJGFscGhhOiAuMTUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjb2xvcjogI0UzRjJGRDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmYwMDAwLCAkYWxwaGE6IC40NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcclxcbiAgY29sb3I6ICNFM0YyRkQ7XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgY29sb3I6ICMyMTk2RjM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWwtYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbn1cXG5cXG4uY2xvc2VkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21vZGFsLWJhY2tncm91bmQvbW9kYWwtYmFja2dyb3VuZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwtYmFja2dyb3VuZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDAgO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjM1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkY5RkU7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMThweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIGNvbG9yOiAjMjE5NkYzO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLWJ0bi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQUE7RUFDQSw4R0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7QUFERjtBQUdFO0VBQ0UseUJBQUE7QUFESjs7QUFLQTtFQUNFLHlCQUFBO0FBRkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGOUZFO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICBjb2xvcjogIzIxOTZGMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDsgIFxcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcztcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjb3JlLWxheW91dCB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1MHB4IDYwcHg7XFxufVxcbi5zY29yZS1sYXlvdXQgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnNjb3JlLWxheW91dCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbn1cXG4uc2NvcmUtbGF5b3V0IHVsIGxpIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogODUwcHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzMsIDMzLCAzMywgMC4wOCk7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uc2NvcmUtbGF5b3V0IHVsIGxpIC51c2VyLWRhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4uc2NvcmUtbGF5b3V0IHVsIGxpIC51c2VyLWRhdGEgLnVzZXItbmFtZSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xcbn1cXG4uc2NvcmUtbGF5b3V0IHVsIGxpIC51c2VyLWRhdGEgLnVzZXItZW1haWwge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XFxufVxcbi5zY29yZS1sYXlvdXQgdWwgbGkgLnVzZXItc2NvcmUge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XFxufVxcbi5zY29yZS1sYXlvdXQgdWwgbGkgLnVzZXItc2NvcmUgLnNjb3JlLXNwYW4ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi5zY29yZS1sYXlvdXQgdWwgbGkgLnVzZXItc2NvcmUgLnNjb3JlLXBvaW50cyB7XFxuICBjb2xvcjogIzIxOTZGMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtBQUFKO0FBRUk7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFFQSwrQ0FBQTtFQUNBLG1CQUFBO0FBRE47QUFHTTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUVBLGNBQUE7QUFGUjtBQUlRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFGVjtBQUtRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSFY7QUFPTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBTFI7QUFPUTtFQUNFLDBCQUFBO0FBTFY7QUFRUTtFQUNFLGNBQUE7QUFOVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2NvcmUtbGF5b3V0IHtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDUwcHggNjBweDtcXHJcXG5cXHJcXG4gIGgyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xcclxcbiAgICBjb2xvcjogIzMzMzMzMztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICB3aWR0aDogODUwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG5cXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzMywgMzMsIDMzLCAwLjA4KTtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICAgIC51c2VyLWRhdGEge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG5cXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xcclxcblxcclxcbiAgICAgICAgLnVzZXItbmFtZSB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAudXNlci1lbWFpbCB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnVzZXItc2NvcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XFxyXFxuXFxyXFxuICAgICAgICAuc2NvcmUtc3BhbiB7XFxyXFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNjb3JlLXBvaW50cyB7ICAgICAgICAgIFxcclxcbiAgICAgICAgICBjb2xvcjogIzIxOTZGMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNldHRpbmdzLWxheW91dCB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDUwcHggNjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG59XFxuLnNldHRpbmdzLWxheW91dCBkaXY6bnRoLW9mLXR5cGUoMSkge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLnNldHRpbmdzLWxheW91dCBzZWxlY3Qge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUVBLFlBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2V0dGluZ3MtbGF5b3V0IHtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNTBweCA2MHB4O1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcblxcclxcbiAgZGl2Om50aC1vZi10eXBlKDEpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3N0YXJ0QnRuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc3RhcnQtYnV0dG9uL3N0YXJ0LWJ1dHRvbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjc3RhcnRCdG4ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yb290IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5yb290IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXFxyXFxuOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxyXFxuICovXFxyXFxuXFxyXFxuYXVkaW8sXFxyXFxuY2FudmFzLFxcclxcbnZpZGVvIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAqZGlzcGxheTogaW5saW5lO1xcclxcbiAgICAqem9vbTogMTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcclxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxyXFxuICovXFxyXFxuXFxyXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxcclxcbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXFxyXFxuICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcXHJcXG4gKiAgICBgZW1gIHVuaXRzLlxcclxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcclxcbiAqICAgIHVzZXIgem9vbS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmE6YWN0aXZlLFxcclxcbmE6aG92ZXIge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXHJcXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cXHJcXG4gICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYzsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA2LzcvOC85LCBTYWZhcmkgNSwgYW5kIE9wZXJhIDExLlxcclxcbiAqL1xcclxcblxcclxcbmZpZ3VyZSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxyXFxuICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcclxcbiAgICBtYXJnaW46IDAgMnB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxcclxcbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxcclxcbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDIgKi9cXHJcXG4gICAgKm1hcmdpbi1sZWZ0OiAtN3B4OyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gSUUgNi83LCBGaXJlZm94IDMrLCBTYWZhcmkgNSxcXHJcXG4gKiAgICBhbmQgQ2hyb21lLlxcclxcbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMyAqL1xcclxcbiAgICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxyXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcclxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxyXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxcclxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcclxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcclxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXHJcXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcclxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXHJcXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cXHJcXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXHJcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXFxyXFxuICAgICpvdmVyZmxvdzogdmlzaWJsZTsgIC8qIDQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b25bZGlzYWJsZWRdLFxcclxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cXHJcXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxcclxcbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxcclxcbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxuICAgICpoZWlnaHQ6IDEzcHg7IC8qIDMgKi9cXHJcXG4gICAgKndpZHRoOiAxM3B4OyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxyXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxyXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcclxcbiAqIG9uIE9TIFguXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxcclxcbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogMSAqL1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBjb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOjotbW96LXNlbGVjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46OnNlbGVjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi5jaHJvbWVmcmFtZSB7XFxyXFxuICAgIG1hcmdpbjogMC4yZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2NjYztcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBUztDQUNWLFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUEseURBQXlEO0FBQ3pEO0lBQ0ksVUFBVTtBQUNkOztBQUVBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Ozs7SUFJSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOzs7SUFHSSxxQkFBcUI7S0FDckIsZUFBZ0I7S0FDaEIsT0FBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOzs7OztFQUtFOztBQUVGO0lBQ0ksZUFBZSxFQUFFLE1BQU07SUFDdkIsOEJBQThCLEVBQUUsTUFBTTtJQUN0QywwQkFBMEIsRUFBRSxNQUFNO0FBQ3RDOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSxTQUFTLEVBQUUsTUFBTTtJQUNqQiwrQkFBK0IsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksU0FBUztBQUNiOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksU0FBUztBQUNiOztBQUVBOztFQUVFOztBQUVGO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7RUFJRTs7QUFFRjtJQUNJLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFVBQVU7SUFDVixtQkFBbUIsRUFBRSxNQUFNO0tBQzNCLGlCQUFrQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7Ozs7SUFJSSxlQUFlLEVBQUUsTUFBTTtJQUN2QixTQUFTLEVBQUUsTUFBTTtJQUNqQix3QkFBd0IsRUFBRSxNQUFNO0tBQ2hDLHNCQUF1QixFQUFFLE1BQU07QUFDbkM7O0FBRUE7OztFQUdFOztBQUVGOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7Ozs7RUFLRTs7QUFFRjs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7Ozs7O0VBUUU7O0FBRUY7Ozs7SUFJSSwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGVBQWUsRUFBRSxNQUFNO0tBQ3ZCLGlCQUFrQixHQUFHLE1BQU07QUFDL0I7O0FBRUE7O0VBRUU7O0FBRUY7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7Ozs7RUFLRTs7QUFFRjs7SUFFSSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLFVBQVUsRUFBRSxNQUFNO0tBQ2xCLFlBQWEsRUFBRSxNQUFNO0tBQ3JCLFdBQVksRUFBRSxNQUFNO0FBQ3hCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSw2QkFBNkIsRUFBRSxNQUFNO0lBQ3JDLDRCQUE0QjtJQUM1QiwrQkFBK0IsRUFBRSxNQUFNO0lBQ3ZDLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0lBRUksd0JBQXdCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOztJQUVJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0lBQ0ksY0FBYyxFQUFFLE1BQU07SUFDdEIsbUJBQW1CLEVBQUUsTUFBTTtBQUMvQjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7Ozs7O0lBS0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xcclxcbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvLFxcclxcbmNhbnZhcyxcXHJcXG52aWRlbyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgKmRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgKnpvb206IDE7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXHJcXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cXHJcXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXFxyXFxuICogICAgYGVtYCB1bml0cy5cXHJcXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXHJcXG4gKiAgICB1c2VyIHpvb20uXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hOmFjdGl2ZSxcXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxyXFxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxyXFxuICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWd1cmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxyXFxuICovXFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcclxcbiAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXHJcXG4gICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cXHJcXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAyICovXFxyXFxuICAgICptYXJnaW4tbGVmdDogLTdweDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXFxyXFxuICogICAgYW5kIENocm9tZS5cXHJcXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDMgKi9cXHJcXG4gICAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcclxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXHJcXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcclxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cXHJcXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXHJcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXHJcXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxyXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXHJcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxyXFxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxyXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcclxcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7ICAvKiA0ICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uW2Rpc2FibGVkXSxcXHJcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXFxyXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cXHJcXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cXHJcXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbiAgICAqaGVpZ2h0OiAxM3B4OyAvKiAzICovXFxyXFxuICAgICp3aWR0aDogMTNweDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcclxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcclxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXHJcXG4gKiBvbiBPUyBYLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cXHJcXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxyXFxuICovXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcblxcclxcbjo6LW1vei1zZWxlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyb21lZnJhbWUge1xcclxcbiAgICBtYXJnaW46IDAuMmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpbWVyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXItbmF2LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXV0aC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwtYmFja2dyb3VuZC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVnaXN0ZXItYnRuLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY29yZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2V0dGluZ3Muc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXJ0LWJ1dHRvbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0XCI7XG5pbXBvcnQgTW9kYWxXaW5kb3cgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC1iYWNrZ3JvdW5kL21vZGFsLWJhY2tncm91bmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGhlYWRlcjogSGVhZGVyO1xuXG4gIGxheW91dDogTGF5b3V0O1xuXG4gIG1vZGFsV2luZG93OiBNb2RhbFdpbmRvdztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHN1cGVyKFwiZGl2XCIsIFtcInJvb3RcIl0sIFwicm9vdFwiKTtcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLm1vZGFsV2luZG93ID0gbmV3IE1vZGFsV2luZG93KHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIGxvY2FsU3RvcmFnZS5uYW1lID0gXCJcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc3VybmFtZSA9IFwiXCI7XG4gICAgbG9jYWxTdG9yYWdlLmVtYWlsID0gXCJcIjtcbiAgICBsb2NhbFN0b3JhZ2UuY2FyZHNUeXBlID0gXCIwXCI7XG4gICAgbG9jYWxTdG9yYWdlLmdhbWVEaWZmaWN1bHR5ID0gXCIwXCI7XG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFwiLi9hYm91dC5zY3NzXCI7XG5cbmNvbnN0IHBhZ2UgPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Fib3V0LnBuZ1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiZGl2XCIsIFtcImFib3V0LWxheW91dFwiXSk7XG4gICAgdGhpcy5pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRoaXMuaW1nLnNyYyA9IHBhZ2U7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW1nKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwID0gXCJkaXZcIixcbiAgICBzdHlsZXM6IHN0cmluZ1tdID0gW10sXG4gICAgaWQ6IHN0cmluZyA9IFwiXCJcbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnN0eWxlcyk7XG4gICAgdGhpcy5lbGVtZW50LmlkID0gaWQ7XG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFwiLi9jYXJkLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihjYXJkQmFja2dyb3VuZDogbnVtYmVyLCBwYWlyTnVtYmVyOiBudW1iZXIsIHR5cGU6IHN0cmluZykge1xuICAgIHN1cGVyKFwiZGl2XCIsIFtcImNhcmQtd3JhcHBlclwiXSk7XG4gICAgdGhpcy5yZW5kZXJDYXJkRWxlbWVudChjYXJkQmFja2dyb3VuZCwgcGFpck51bWJlciwgdHlwZSk7XG4gIH1cblxuICByZW5kZXJDYXJkRWxlbWVudChiYWNrZ3JvdW5kTnVtYmVyOiBudW1iZXIsIHBhaXI6IG51bWJlciwgdHlwZTogc3RyaW5nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKHRhZ05hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGxldCBmb2xkZXJOYW1lOiBzdHJpbmc7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgIGZvbGRlck5hbWUgPSBcImJpcmRzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgZm9sZGVyTmFtZSA9IFwiZGlub3NcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiMlwiOlxuICAgICAgICBmb2xkZXJOYW1lID0gXCJ3aWxkbGlmZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgIGZvbGRlck5hbWUgPSBcImZhcm1cIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZvbGRlck5hbWUgPSBcImJpcmRzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGUoXCJkaXZcIiwgW1wiY2FyZFwiLCBcImZsaXBwZWRcIl0pO1xuICAgIGNvbnN0IGNhcmRGcm9udCA9IGNyZWF0ZShcImRpdlwiLCBbXCJjYXJkX19mcm9udFwiXSk7XG4gICAgY29uc3QgY2FyZEJhY2sgPSBjcmVhdGUoXCJkaXZcIiwgW1wiY2FyZF9fYmFja1wiXSk7XG4gICAgY29uc3QgY29ycmVjdCA9IGNyZWF0ZShcImRpdlwiLCBbXCJjb3JyZWN0XCJdKTtcbiAgICBjb25zdCB3cm9uZyA9IGNyZWF0ZShcImRpdlwiLCBbXCJ3cm9uZ1wiXSk7XG4gICAgY2FyZEZyb250LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuLi8uLi8uLi8uLi8ke2ZvbGRlck5hbWV9L3BpYyAoJHtiYWNrZ3JvdW5kTnVtYmVyfSkuc3ZnXCIpYDtcbiAgICBjYXJkLmRhdGFzZXQubnVtYmVyID0gYmFja2dyb3VuZE51bWJlci50b1N0cmluZygpO1xuICAgIGNhcmQuZGF0YXNldC5wYWlyID0gcGFpci50b1N0cmluZygpO1xuICAgIGNhcmQuZGF0YXNldC5jbG9zZWQgPSBcImZhbHNlXCI7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRnJvbnQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJhY2spO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb3JyZWN0KTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQod3JvbmcpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkL2NhcmRcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lci90aW1lclwiO1xuaW1wb3J0IFwiLi9nYW1lLnNjc3NcIjtcblxuZnVuY3Rpb24gcGFkMihudW1iZXI6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiAobnVtYmVyIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgbnVtYmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjYXJkZ2FtZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwcmV2aW91c0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB0aW1lcjogVGltZXI7XG5cbiAgY3VycmVudENhcmROdW1iZXIgPSBcIjBcIjtcblxuICB3cm9uZ01hdGNoZXMgPSAwO1xuXG4gIGNvcnJlY3RNYXRjaGVzID0gMDtcblxuICBkb25lID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJkaXZcIiwgW1wiY2FyZGdhbWUtd3JhcHBlclwiXSk7XG4gICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcih0aGlzLmNhcmRnYW1lRWxlbWVudCk7XG4gICAgdGhpcy5jYXJkZ2FtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRnYW1lXCIsIFwiYW5pbWF0aW9uXCIpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnRpbWVyLmVsZW1lbnQpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhcmRnYW1lRWxlbWVudCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gIH1cblxuICBnZW5lcmF0ZUNhcmRzKHR5cGU6IHN0cmluZywgZGlmZmljdWx0eTogc3RyaW5nKSB7XG4gICAgZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycjogSFRNTEVsZW1lbnRbXSkge1xuICAgICAgY29uc3QgY29weUFyciA9IGFycjtcbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIFtjb3B5QXJyW2ldLCBjb3B5QXJyW2pdXSA9IFthcnJbal0sIGFycltpXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZHM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICBjb25zdCBzaXplID0gTnVtYmVyKGRpZmZpY3VsdHkpID8gMTggOiA4O1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2l6ZTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaSwgMSwgdHlwZSk7XG4gICAgICBjb25zdCBjYXJkMiA9IG5ldyBDYXJkKGksIDIsIHR5cGUpO1xuXG4gICAgICBjYXJkcy5wdXNoKGNhcmQuZWxlbWVudCk7XG4gICAgICBjYXJkcy5wdXNoKGNhcmQyLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNodWZmbGVBcnJheShjYXJkcyk7XG5cbiAgICBjYXJkcy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICB0aGlzLmNhcmRnYW1lRWxlbWVudC5hcHBlbmRDaGlsZChhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY2FyZGdhbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2FyZGdhbWVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFuaW1hdGlvblwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNvcnJlY3QoZWxlbWVudHM6IEhUTUxFbGVtZW50W10pIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvcnJlY3REaXYgPSBhLnByZXZpb3VzU2libGluZz8ucHJldmlvdXNTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIGNvcnJlY3REaXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgICAgY29uc3QgeyBkYXRhc2V0IH0gPSBhO1xuICAgICAgICAgIGRhdGFzZXQuY2xvc2VkID0gXCJ0cnVlXCI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB3cm9uZyhlbGVtZW50czogSFRNTEVsZW1lbnRbXSkge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JvbmdEaXYgPSBhLnByZXZpb3VzU2libGluZyBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICB3cm9uZ0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQhO1xuICAgICAgaWYgKHRhcmdldFBhcmVudC5kYXRhc2V0LmNsb3NlZCAhPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnByZXZpb3VzRWxlbWVudC5kYXRhc2V0LnBhaXIgPT09IHRhcmdldFBhcmVudC5kYXRhc2V0LnBhaXIgJiZcbiAgICAgICAgdGhpcy5wcmV2aW91c0VsZW1lbnQuZGF0YXNldC5udW1iZXIgPT09IHRhcmdldFBhcmVudC5kYXRhc2V0Lm51bWJlclxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FyZF9fYmFja1wiKSB8fFxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FyZF9fZnJvbnRcIilcbiAgICAgICkge1xuICAgICAgICB0YXJnZXQucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRQYXJlbnQuZGF0YXNldC5udW1iZXIgPT09IHRoaXMuY3VycmVudENhcmROdW1iZXIpIHtcbiAgICAgICAgLy8qIGlmIGNvcnJlY3RcbiAgICAgICAgdGhpcy5jYXJkZ2FtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuaW1hdGlvblwiKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FyZE51bWJlciA9IFwiMFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb3JyZWN0KFt0YXJnZXRQYXJlbnQsIHRoaXMucHJldmlvdXNFbGVtZW50XSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvcnJlY3QoW3RhcmdldFBhcmVudCwgdGhpcy5wcmV2aW91c0VsZW1lbnRdKTtcbiAgICAgICAgICB0aGlzLmNhcmRnYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0aW9uXCIpO1xuICAgICAgICB9LCAxMjAwKTtcbiAgICAgICAgdGhpcy5jb3JyZWN0TWF0Y2hlcyArPSAxO1xuICAgICAgICBpZiAodGhpcy5jb3JyZWN0TWF0Y2hlcyA9PT0gOCkge1xuICAgICAgICAgIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lVGltZXJcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgY29uc3QgW21pbnV0ZXMsIHNlY29uZHNdID0gdGltZXIuaW5uZXJUZXh0LnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNPTkdSQVRTIVwiKTtcbiAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IHNjb3JlID1cbiAgICAgICAgICAgICh0aGlzLmNvcnJlY3RNYXRjaGVzIC0gdGhpcy53cm9uZ01hdGNoZXMpICogMTAwIC1cbiAgICAgICAgICAgICAgKE51bWJlcihtaW51dGVzKSAqIDYwICsgTnVtYmVyKHNlY29uZHMpICogMTApIHx8IDA7XG4gICAgICAgICAgY29uc29sZS5sb2coYHlvdXIgc2NvcmUgaXMgJHtzY29yZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRDYXJkTnVtYmVyID09PSBcIjBcIikge1xuICAgICAgICAvLyogaWYgb25lIHByZXNzZWRcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FyZE51bWJlciA9IHRhcmdldFBhcmVudC5kYXRhc2V0Lm51bWJlciE7XG4gICAgICAgIHRoaXMucHJldmlvdXNFbGVtZW50ID0gdGFyZ2V0UGFyZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8qIGlmIHdyb25nXG4gICAgICAgIHRoaXMuY3VycmVudENhcmROdW1iZXIgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5jYXJkZ2FtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuaW1hdGlvblwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3cm9uZyhbdGFyZ2V0UGFyZW50LCB0aGlzLnByZXZpb3VzRWxlbWVudF0pO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3cm9uZyhbdGFyZ2V0UGFyZW50LCB0aGlzLnByZXZpb3VzRWxlbWVudF0pO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICAgICAgICB0YXJnZXRQYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXBwZWRcIik7XG4gICAgICAgICAgICB0aGlzLmNhcmRnYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0aW9uXCIpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICB0aGlzLndyb25nTWF0Y2hlcyArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZGdhbWVcIikgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lRGlmZmljdWx0eVwiKSkge1xuICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICB0aGlzLmNhcmRnYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm91ci14LWZvdXJcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgdGhpcy5jYXJkZ2FtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNpeC14LXNpeFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLmNhcmRnYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm91ci14LWZvdXJcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FyZHMoXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJkc1R5cGVcIikgfHwgXCIwXCIsXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lRGlmZmljdWx0eVwiKSB8fCBcIjBcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVRpbWVyXCIpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IDE0O1xuXG4gICAgICAgIGNvbnN0IGkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGltZXIhLmlubmVyVGV4dCA9IGAwMDoke3BhZDIoc2Vjb25kcyl9YDtcbiAgICAgICAgICBzZWNvbmRzIC09IDE7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIGlmICh0aGlzLmNhcmRnYW1lRWxlbWVudCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XG4gICAgICAgICAgICBjYXJkcy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImZsaXBwZWRcIik7XG4gICAgICAgICAgICAgIHRoaXMuY2FyZGdhbWVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRpb25cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICB0aW1lciEuaW5uZXJUZXh0ID0gYCR7cGFkMihcbiAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKG5ld0RhdGUuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gMTAwMCAvIDYwKVxuICAgICAgICAgICAgICAgICl9OiR7cGFkMihcbiAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKChuZXdEYXRlLmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpKSAvIDEwMDApICUgNjApXG4gICAgICAgICAgICAgICAgKX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICB9LCAxNTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgXCIuL3RpbWVyLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhcHBlbmRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHN1cGVyKFwiZGl2XCIsIFtcImdhbWUtdGltZXJcIl0sIFwiZ2FtZVRpbWVyXCIpO1xuICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSBcIjAwOjE1XCI7XG4gIH1cbn1cbiIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFwiLi9oZWFkZXItbmF2LnNjc3NcIjtcblxuY29uc3QgYWJvdXRJY29uID0gcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9hYm91dC5zdmdcIik7XG5jb25zdCBzY29yZUljb24gPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL3Njb3JlLnN2Z1wiKTtcbmNvbnN0IHNldHRpbmdzSWNvbiA9IHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvc2V0dGluZ3Muc3ZnXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgdWw6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhcHBlbmRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHN1cGVyKFwibmF2XCIpO1xuICAgIHRoaXMudWwuaW5uZXJIVE1MID0gYFxuICAgIDxsaSBpZD1cImFib3V0LWdhbWVcIj5cbiAgICAgIDxhIGhyZWY9XCIjYWJvdXRcIj5cblx0XHRcdCAgPGltZyBzcmM9XCIke2Fib3V0SWNvbn1cIiBhbHQ9XCJhYm91dCBpY29uXCI+XHRcdFx0XG5cdFx0XHRcdDxoMj5BYm91dCBHYW1lPC9oMj5cblx0XHRcdDwvYT5cblx0XHQ8L2xpPlxuXG5cdFx0PGxpIGlkPVwiYmVzdC1zY29yZVwiPlxuICAgICAgPGEgaHJlZj1cIiNzY29yZVwiPlxuXHRcdFx0ICA8aW1nIHNyYz1cIiR7c2NvcmVJY29ufVwiIGFsdD1cInNjb3JlIGljb25cIj5cblx0XHRcdFx0PGgyPkJlc3QgU2NvcmU8L2gyPlxuXHRcdFx0PC9hPlxuXHRcdDwvbGk+XG5cblx0XHQ8bGkgaWQ9XCJnYW1lLXNldHRpbmdzXCI+XG4gICAgICA8YSBocmVmPVwiI3NldHRpbmdzXCI+XG5cdFx0XHQgIDxpbWcgc3JjPVwiJHtzZXR0aW5nc0ljb259XCIgYWx0PVwic2V0dGluZ3MgaWNvblwiPlxuXHRcdFx0XHQ8aDI+R2FtZSBTZXR0aW5nczwvaDI+XG5cdFx0XHQ8L2E+XG5cdFx0PC9saT5cbiAgICBgO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnVsKTtcbiAgICB0aGlzLmFwcGVuZEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9oZWFkZXItbmF2L2hlYWRlci1uYXZcIjtcbmltcG9ydCBSZWdpc3RlckJ0biBmcm9tIFwiLi4vcmVnaXN0ZXIvcmVnaXN0ZXItYnRuXCI7XG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSBcIi4uL3N0YXJ0LWJ1dHRvbi9zdGFydC1idXR0b25cIjtcbmltcG9ydCBcIi4vaGVhZGVyLnNjc3NcIjtcblxuY29uc3QgbG9nb1NyYyA9IHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvbG9nby5zdmdcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBsb2dvOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBuYXY6IE5hdjtcblxuICByZWdCdG46IFJlZ2lzdGVyQnRuO1xuXG4gIHN0YXJ0QnRuOiBTdGFydEJ1dHRvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFwcGVuZEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoXCJoZWFkZXJcIik7XG4gICAgdGhpcy5sb2dvLnNyYyA9IGxvZ29TcmM7XG4gICAgdGhpcy5sb2dvLmNsYXNzTmFtZSA9IFwibG9nb1wiO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxvZ28pO1xuICAgIHRoaXMubmF2ID0gbmV3IE5hdih0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMucmVnQnRuID0gbmV3IFJlZ2lzdGVyQnRuKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5zdGFydEJ0biA9IG5ldyBTdGFydEJ1dHRvbih0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuYXBwZW5kRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2Fib3V0L2Fib3V0XCI7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS1jb21wb25lbnRcIjtcbmltcG9ydCBTY29yZSBmcm9tIFwiLi4vc2NvcmUvc2NvcmVcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vc2V0dGluZ3Mvc2V0dGluZ3NcIjtcbmltcG9ydCBcIi4vbGF5b3V0LnNjc3NcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3JvdXRlclwiO1xuaW1wb3J0IHsgc3RhcnREQiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYlNlcnZpY2VcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9nYW1lL2dhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGFib3V0OiBBYm91dDtcblxuICBzY29yZTogU2NvcmU7XG5cbiAgc2V0dGluZ3M6IFNldHRpbmdzO1xuXG4gIGdhbWU6IEdhbWU7XG5cbiAgLy8gdXNlcnM6IEFycmF5PFVzZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoXCJkaXZcIiwgW1wibGF5b3V0XCJdKTtcbiAgICB0aGlzLmFib3V0ID0gbmV3IEFib3V0KCk7XG4gICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSgpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIHRoaXMucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLnJlbmRlckFib3V0KCk7XG4gICAgcm91dGVyKFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5hYm91dC5lbGVtZW50LFxuICAgICAgdGhpcy5zY29yZS5lbGVtZW50LFxuICAgICAgdGhpcy5zZXR0aW5ncy5lbGVtZW50LFxuICAgICAgdGhpcy5nYW1lLmVsZW1lbnRcbiAgICApO1xuICAgIHN0YXJ0REIoKTtcbiAgICAvLyB0aGlzLnJlbmRlclNjb3JlKCk7XG4gICAgLy8gdGhpcy51c2VycyA9IFtdO1xuICB9XG5cbiAgcmVuZGVyQWJvdXQoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYWJvdXQuZWxlbWVudCk7IC8vISBzdGFydCBwYWdlXG4gIH1cblxuICByZW5kZXJTZXR0aW5ncygpIHtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zZXR0aW5ncy5lbGVtZW50KTtcbiAgfVxuXG4gIC8vIGdldFVzZXJBd2FpdCgpIHtcbiAgLy8gICB0aGlzLnVzZXJzID0gZ2V0VXNlcnMoKTtcbiAgLy8gICByZXR1cm4gdGhpcy51c2VycztcbiAgLy8gfVxufVxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgXCIuL2F1dGguc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEJhY2tncm91bmQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb290RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBzdXBlcihcImRpdlwiLCBbXCJhdXRoXCJdKTtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgIDxmb3JtIGlkPVwicmVnRm9ybVwiIGFjdGlvbj1cIlwiPlxuXHRcdDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzcz1cInJlZy1mb3JtLWlucHV0XCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cblx0XHQ8c3BhbiBpZD1cIm5hbWUtZXJyb3JcIiBjbGFzcz1cImVycm9yIGhpZGRlblwiPkVycm9yPC9zcGFuPlxuXHRcdDxpbnB1dCBpZD1cInN1cm5hbWVcIiBjbGFzcz1cInJlZy1mb3JtLWlucHV0XCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlN1cm5hbWVcIj5cblx0XHQ8c3BhbiBpZD1cInN1cm5hbWUtZXJyb3JcIiBjbGFzcz1cImVycm9yIGhpZGRlblwiPkVycm9yPC9zcGFuPlxuXHRcdDxpbnB1dCBpZD1cImVtYWlsXCIgY2xhc3M9XCJyZWctZm9ybS1pbnB1dFwiIHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRW1haWxcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuXHRcdFx0PGJ1dHRvbiBpZD1cInN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdDxidXR0b24gaWQ9XCJjYW5jZWxcIiB0eXBlPVwicmVzZXRcIj5DYW5jZWw8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0ICA8L2Zvcm0+YDtcbiAgICB0aGlzLmFkZElucHV0RXZlbnRMaXN0ZW5lcnMoXCJuYW1lXCIpO1xuICAgIHRoaXMuYWRkSW5wdXRFdmVudExpc3RlbmVycyhcInN1cm5hbWVcIik7XG4gICAgdGhpcy5hZGRTdWJtaXRFdmVudExpc3RlbmVyKCk7XG4gICAgdGhpcy5hZGRDYW5jZWxFdmVudExpc3RlbmVyKCk7XG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgYWRkSW5wdXRFdmVudExpc3RlbmVycyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5wdXRJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSE7XG4gICAgaWYgKGlucHV0SUQgPT09IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZElucHV0RXZlbnRMaXN0ZW5lcnMoaWQpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yRWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH0tZXJyb3JgKSE7XG4gICAgICBpbnB1dElELmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgaW5wdXRJRC5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdC1pbnB1dFwiKTtcbiAgICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICBlcnJvckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJNaW5pbXVtIGxlbmd0aCBpcyAzIGNoYXJhY3RlcnMuXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICBpbnB1dElELmNsYXNzTGlzdC5yZW1vdmUoXCJjb3JyZWN0LWlucHV0XCIpO1xuICAgICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIGVycm9yRWxlbWVudC5pbm5lclRleHQgPSBcIk1heGltdW0gbGVuZ3RoIGlzIDMwIGNoYXJhY3RlcnMuXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICAgICAgaW5wdXRJRC5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdC1pbnB1dFwiKTtcbiAgICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICBlcnJvckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJOYW1lIGNhbm5vdCBiZSBmcm9tIG51bWJlcnMgb25seS5cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZS5zZWFyY2goL1t+IUAjJCUqKClf4oCUKz18OjtcIidgPD4sLj8vXl0vKSAhPT0gLTEpIHtcbiAgICAgICAgICBpbnB1dElELmNsYXNzTGlzdC5yZW1vdmUoXCJjb3JyZWN0LWlucHV0XCIpO1xuICAgICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIGVycm9yRWxlbWVudC5pbm5lclRleHQgPSBcIk5vIHNwZWNpYWwgY2hhcmFjdGVycy5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICBpbnB1dElELmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0LWlucHV0XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRTdWJtaXRFdmVudExpc3RlbmVyKCkge1xuICAgIGNvbnN0IGlucHV0SUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKSE7XG4gICAgaWYgKGlucHV0SUQgPT09IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZFN1Ym1pdEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dElELmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc3VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VybmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgY29uc3QgZW1haWxGb3JtYXQgPVxuICAgICAgICAgIC8oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfClAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pKVxcLil7M30oPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pfFthLXowLTktXSpbYS16MC05XSlcXF0pLztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGVtYWlsLnZhbHVlLm1hdGNoKGVtYWlsRm9ybWF0KSAhPT0gbnVsbCAmJlxuICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29ycmVjdC1pbnB1dFwiKSAmJlxuICAgICAgICAgIHN1cm5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29ycmVjdC1pbnB1dFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgbmFtZS52YWx1ZSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdXJuYW1lXCIsIHN1cm5hbWUudmFsdWUpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgZW1haWwudmFsdWUpO1xuICAgICAgICAgIGJhY2tncm91bmQ/LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2xpY2tcIikpO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEJ0blwiKTtcbiAgICAgICAgICBzdGFydD8uY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgICAgY29uc3QgcmVnaXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lzdGVyQnRuXCIpO1xuICAgICAgICAgIHJlZ2lzdGVyPy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2FuY2VsRXZlbnRMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBpbnB1dElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIikhO1xuICAgIGlmIChpbnB1dElEID09PSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRDYW5jZWxFdmVudExpc3RlbmVyKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRJRC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVycm9yXCIpO1xuICAgICAgICBlcnJvcnMuZm9yRWFjaCgoYSkgPT4gYS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpKTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWctZm9ybS1pbnB1dFwiKTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKGEpID0+IGEuY2xhc3NMaXN0LnJlbW92ZShcImNvcnJlY3QtaW5wdXRcIikpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS1jb21wb25lbnRcIjtcbmltcG9ydCBBdXRoIGZyb20gXCIuL2F1dGgvYXV0aFwiO1xuaW1wb3J0IFwiLi9tb2RhbC1iYWNrZ3JvdW5kLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxCYWNrZ3JvdW5kIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGF1dGg6IEF1dGg7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb290RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBzdXBlcihcImRpdlwiLCBbXCJtb2RhbC1iYWNrZ3JvdW5kXCIsIFwiY2xvc2VkXCJdLCBcIm1vZGFsLWJhY2tncm91bmRcIik7XG4gICAgdGhpcy5hdXRoID0gbmV3IEF1dGgodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5hZGRCYWNrZ3JvdW5kTGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRCYWNrZ3JvdW5kTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWJhY2tncm91bmRcIikhO1xuICAgIGlmIChiYWNrZ3JvdW5kID09PSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRCYWNrZ3JvdW5kTGlzdGVuZXJzKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSBcIm1vZGFsLWJhY2tncm91bmRcIikge1xuICAgICAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS1jb21wb25lbnRcIjtcbmltcG9ydCBcIi4vcmVnaXN0ZXItYnRuLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJCdG4gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhcHBlbmRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHN1cGVyKFwiYnV0dG9uXCIsIFtcImJ1dHRvblwiLCBcInNob3dcIl0sIFwicmVnaXN0ZXJCdG5cIik7XG4gICAgdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IFwicmVnaXN0ZXIgbmV3IHBsYXllclwiO1xuICAgIHRoaXMuZWxlbWVudC5vbmNsaWNrID0gKCkgPT4gdGhpcy5vcGVuTW9kYWxXaW5kb3coKTtcbiAgICB0aGlzLmFwcGVuZEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIG9wZW5Nb2RhbFdpbmRvdygpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYmFja2dyb3VuZFwiKTtcbiAgICAgIG1vZGFsPy5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VkXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vbGF5b3V0L3VzZXJJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVVc2VyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB1c2VyOiBVc2VyKSB7XG4gICAgc3VwZXIoXCJsaVwiKTtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInVzZXItZGF0YVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInVzZXItbmFtZVwiPlxuICAgICAgICAgICR7dXNlci5uYW1lfSAke3VzZXIubGFzdF9uYW1lfVxuICAgICAgICA8L3NwYW4+XG5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ1c2VyLWVtYWlsXCI+XG4gICAgICAgICAgJHt1c2VyLmVtYWlsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInVzZXItc2NvcmVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzY29yZS1zcGFuXCI+XG4gICAgICAgICAgU2NvcmU6IFxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzY29yZS1wb2ludHNcIj5cbiAgICAgICAgICAke3VzZXIuc2NvcmV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS1jb21wb25lbnRcIjtcbmltcG9ydCBcIi4vc2NvcmUuc2Nzc1wiO1xuaW1wb3J0IHsgZ2V0VXNlcnMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGJTZXJ2aWNlXCI7XG5pbXBvcnQgU2NvcmVVc2VyIGZyb20gXCIuLi9zY29yZS11c2VyL3Njb3JlLXVzZXJcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9sYXlvdXQvdXNlckludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBoMjogSFRNTEhlYWRpbmdFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiZGl2XCIsIFtcInNjb3JlLWxheW91dFwiXSk7XG4gICAgdGhpcy5oMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aGlzLmgyLmlubmVyVGV4dCA9IFwiQmVzdCBwbGF5ZXJzXCI7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaDIpO1xuICAgIHRoaXMucmVuZGVyU2NvcmUoKTtcbiAgfVxuXG4gIHJlbmRlclNjb3JlKCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGZ1bmN0aW9uIGNvbnRpbnVlUmVuZGVyKHVzZXJzOiBBcnJheTxVc2VyPik6IHZvaWQge1xuICAgICAgdXNlcnMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IG5ldyBTY29yZVVzZXIodWwsIGEpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaS5lbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRVc2Vycyhjb250aW51ZVJlbmRlcik7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodWwpO1xuICB9XG59XG4iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS1jb21wb25lbnRcIjtcbmltcG9ydCBcIi4vc2V0dGluZ3Muc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcImRpdlwiLCBbXCJzZXR0aW5ncy1sYXlvdXRcIl0pO1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXR5cGVcIj5cblx0XHQgIDxoMj5HYW1lIGNhcmRzPC9oMj5cblx0XHQgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiY2FyZHNUeXBlXCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+QmlyZHM8L29wdGlvbj5cblx0XHRcdCAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5EaW5vc2F1cnM8L29wdGlvbj5cblx0XHRcdCAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5XaWxkbGlmZTwvb3B0aW9uPlxuXHRcdFx0ICA8b3B0aW9uIHZhbHVlPVwiNFwiPkZhcm08L29wdGlvbj5cblx0XHQgIDwvc2VsZWN0PlxuXHQgIDwvZGl2PlxuXHQgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1kaWZmaWN1bHR5XCI+XG5cdFx0ICA8aDI+RGlmZmljdWx0eTwvaDI+XG5cdFx0ICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cImdhbWVEaWZmaWN1bHR5XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+NHg0PC9vcHRpb24+XG5cdFx0XHQgIDxvcHRpb24gdmFsdWU9XCIyXCI+Nng2PC9vcHRpb24+XG5cdFx0ICA8L3NlbGVjdD5cblx0ICA8L2Rpdj5cbiAgICBgO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnModGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0LmlkID09PSBcImNhcmRzVHlwZVwiKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5jYXJkc1R5cGUgPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0LmlkID09PSBcImdhbWVEaWZmaWN1bHR5XCIpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3QgPSB0YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdhbWVEaWZmaWN1bHR5ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UtY29tcG9uZW50XCI7XG5pbXBvcnQgXCIuL3N0YXJ0LWJ1dHRvbi5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0QnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGxpbms6IEhUTUxMaW5rRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFwcGVuZEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoXCJhXCIsIFtcImJ1dHRvblwiXSwgXCJzdGFydEJ0blwiKTtcbiAgICB0aGlzLmxpbmsgPSB0aGlzLmVsZW1lbnQgYXMgSFRNTExpbmtFbGVtZW50O1xuICAgIHRoaXMubGluay5ocmVmID0gXCIjZ2FtZVwiO1xuICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSBcInN0YXJ0IGdhbWVcIjtcbiAgICAvLyB0aGlzLmVsZW1lbnQub25jbGljayA9ICgpID0+IHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgdGhpcy5hcHBlbmRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICAvLyBzdGFydEdhbWUoKSB7XG4gIC8vICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAvLyAgICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0QnRuXCIpO1xuICAvLyAgICAgbW9kYWw/LmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XG4gIC8vICAgfVxuICAvLyB9XG59XG4iLCIvLyBpbXBvcnQgVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvdXNlckludGVyZmFjZVwiO1xuXG5jb25zdCBJREIgPSB3aW5kb3cuaW5kZXhlZERCO1xuXG5sZXQgZGF0YWJhc2UgPSBudWxsO1xuXG5jb25zdCBvcGVuUmVxdWVzdCA9IElEQi5vcGVuKFwiUnlrZVZsXCIpO1xuXG5vcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gIGRhdGFiYXNlID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICBjb25zdCBzdG9yZSA9IGRhdGFiYXNlLmNyZWF0ZU9iamVjdFN0b3JlKFwiVXNlclwiLCB7XG4gICAga2V5UGF0aDogXCJpZFwiLFxuICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpICs9IDEpIHtcbiAgICBzdG9yZS5hZGQoe1xuICAgICAgbmFtZTogYG5hbWUjJHtpfWAsXG4gICAgICBsYXN0X25hbWU6IGBsYXN0X25hbWUjJHtpfWAsXG4gICAgICBlbWFpbDogYGVtYWlsJHtpfUBnbWFpbC5jb21gLFxuICAgICAgc2NvcmU6IGkgKiAxMCxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0REIoKTogdm9pZCB7fVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcnMoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGRhdGFiYXNlID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICBjb25zdCB0cmFuc2FjdGlvbiA9IGRhdGFiYXNlLnRyYW5zYWN0aW9uKFwiVXNlclwiLCBcInJlYWR3cml0ZVwiKTtcbiAgY29uc3QgdXNlclRhYmxlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJVc2VyXCIpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IHVzZXJUYWJsZS5nZXRBbGwoKTtcblxuICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKCkgPT4ge1xuICAgIGNhbGxiYWNrKHJlc3VsdC5yZXN1bHQpO1xuICB9O1xufVxuXG5vcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gIC8vIGdldFVzZXJzKCk7XG4gIC8vIGRhdGFiYXNlID0gb3BlblJlcXVlc3QucmVzdWx0O1xuICAvLyBjb25zdCB0cmFuc2FjdGlvbiA9IGRhdGFiYXNlLnRyYW5zYWN0aW9uKFwiVXNlclwiLCBcInJlYWR3cml0ZVwiKTtcbiAgLy8gY29uc3QgdXNlclRhYmxlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJVc2VyXCIpO1xuICAvLyBjb25zdCBhbGwgPSB1c2VyVGFibGUuZ2V0QWxsKCk7XG59O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBEQiB7XG4vLyAgIGRiT3BlbjogSURCT3BlbkRCUmVxdWVzdDtcbi8vICAgZGI6IElEQkRhdGFiYXNlO1xuXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIHRoaXMuZGJPcGVuID0gaW5kZXhlZERCLm9wZW4oJ1J5a2VWbCcpO1xuLy8gICAgIHRoaXMuZGIgPSB0aGlzLmRiT3Blbi5yZXN1bHRcbi8vICAgICB0aGlzLmRiT3Blbi5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4vLyAgICAgICB0aGlzLmRiID0gdGhpcy5kYk9wZW4ucmVzdWx0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVyKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBhYm91dDogSFRNTEVsZW1lbnQsXG4gIHNjb3JlOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IEhUTUxFbGVtZW50LFxuICBnYW1lOiBIVE1MRWxlbWVudFxuKSB7XG4gIGNvbnN0IGxheW91dCA9IGNvbnRhaW5lcjtcblxuICBjb25zdCByb3V0aW5nID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiYWJvdXRcIixcbiAgICAgIGNvbXBvbmVudDogKCkgPT4ge1xuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbGF5b3V0LmFwcGVuZENoaWxkKGFib3V0KTsgLy8hIHN0YXJ0IHBhZ2VcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNjb3JlXCIsXG4gICAgICBjb21wb25lbnQ6ICgpID0+IHtcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGxheW91dC5hcHBlbmRDaGlsZChzY29yZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzZXR0aW5nc1wiLFxuICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgIGxheW91dC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsYXlvdXQuYXBwZW5kQ2hpbGQoc2V0dGluZ3MpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ2FtZVwiLFxuICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgIGxheW91dC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsYXlvdXQuYXBwZW5kQ2hpbGQoZ2FtZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZGVmYXVsdFJvdXRlID0ge1xuICAgIG5hbWU6IFwiZGVmYXVsdFwiLFxuICAgIGNvbXBvbmVudDogKCkgPT4ge1xuICAgICAgbGF5b3V0LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICB9LFxuICB9O1xuXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZU5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCBjdXJyZW50Um91dGUgPSByb3V0aW5nLmZpbmQoKHApID0+IHAubmFtZSA9PT0gY3VycmVudFJvdXRlTmFtZSk7XG5cbiAgICAoY3VycmVudFJvdXRlIHx8IGRlZmF1bHRSb3V0ZSkuY29tcG9uZW50KCk7XG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcDogQXBwID0gbmV3IEFwcChkb2N1bWVudC5ib2R5KTtcblxuICBpZiAoIWFwcCkgdGhyb3cgRXJyb3IoXCJubyBhcHBcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==