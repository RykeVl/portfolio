/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/controlPanel/controlPanel.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/controlPanel/controlPanel.scss ***!
  \*********************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".control-panel {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  max-width: 400px;\n  padding: 25px;\n  height: 200px;\n  border: 3px solid #f7f7f7;\n  border-top: 0;\n  border-radius: 0 0 5px 5px;\n}\n\n.form {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 350px;\n}\n\n.input {\n  height: 30px;\n  border: none;\n  background-color: #f7f7f7;\n}\n\n.input-text {\n  padding: 5px;\n}\n.input-text::placeholder {\n  text-transform: capitalize;\n}\n\n.input-color {\n  padding: 0;\n}\n\n.form-button, .control-button {\n  min-width: 100px;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 500;\n  transition: 0.3s;\n  background-color: #f7f7f7;\n}\n.form-button:hover, .control-button:hover {\n  background-color: red;\n}\n\n.form-button, .control-button {\n  min-width: 100px;\n  border: none;\n  text-transform: uppercase;\n  font-weight: 500;\n  transition: 0.3s;\n  background-color: #f7f7f7;\n}\n.form-button:hover, .control-button:hover {\n  background-color: red;\n}\n\n.control-button:disabled {\n  background-color: gray;\n}\n\n.control-buttons {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: 350px;\n}\n\n.control-button {\n  height: 50px;\n}", "",{"version":3,"sources":["webpack://./src/renders/controlPanel/controlPanel.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,wBAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;EAEA,gBAAA;EACA,aAAA;EACA,aAAA;EAEA,yBAAA;EACA,aAAA;EACA,0BAAA;AAHF;;AAMA;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,oBAAA;EAEA,YAAA;AAJF;;AAOA;EACE,YAAA;EACA,YAAA;EACA,yBC9BU;AD0BZ;;AAOA;EACE,YAAA;AAJF;AAME;EACE,0BAAA;AAJJ;;AAQA;EACE,UAAA;AALF;;AAQA;EACE,gBAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;EAEA,yBCpDU;AD8CZ;AAQE;EACE,qBAAA;AANJ;;AAUA;EACE,gBAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;EAEA,yBClEU;AD0DZ;AAUE;EACE,qBAAA;AARJ;;AAYA;EACE,sBAAA;AATF;;AAYA;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;EAEA,YAAA;AAVF;;AAaA;EACE,YAAA;AAVF","sourcesContent":["@import '../../styles/colors.scss';\r\n\r\n.control-panel {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: auto;\r\n\r\n  max-width: 400px;\r\n  padding: 25px;\r\n  height: 200px;\r\n  \r\n  border: 3px solid $mainWhite;\r\n  border-top: 0;\r\n  border-radius: 0 0 5px 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  align-items: stretch;\r\n\r\n  width: 350px;\r\n}\r\n\r\n.input {\r\n  height: 30px;\r\n  border: none;\r\n  background-color: $mainWhite;\r\n}\r\n\r\n.input-text {\r\n  padding: 5px;\r\n\r\n  &::placeholder {\r\n    text-transform: capitalize;\r\n  }\r\n}\r\n\r\n.input-color {\r\n  padding: 0;\r\n}\r\n\r\n.form-button, .control-button {\r\n  min-width: 100px;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  transition: .3s;\r\n\r\n  background-color: $mainWhite;\r\n\r\n  &:hover {\r\n    background-color: red;\r\n  }\r\n}\r\n\r\n.form-button, .control-button {\r\n  min-width: 100px;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  transition: .3s;\r\n\r\n  background-color: $mainWhite;\r\n\r\n  &:hover {\r\n    background-color: red;\r\n  }\r\n}\r\n\r\n.control-button:disabled {\r\n  background-color: gray;\r\n}\r\n\r\n.control-buttons {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n\r\n  width: 350px;\r\n}\r\n\r\n.control-button {\r\n  height: 50px;\r\n}","$mainWhite: #f7f7f7;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/garagePanel.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/garagePanel.scss ***!
  \*******************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".garage-panel {\n  position: relative;\n}\n\n.garage-car-count,\n.garage-page-number {\n  margin-left: 10px;\n  color: #f7f7f7;\n}\n\n.garage-car-count {\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n\n.garage-page-number {\n  font-size: 1.5rem;\n}\n\n.car-tracks {\n  margin-top: 20px;\n  border-top: 2px solid #f7f7f7;\n}\n\n.winner-announcement {\n  position: absolute;\n  color: #f7f7f7;\n  font-size: 2.5rem;\n  font-weight: 500;\n  filter: drop-shadow(0 0px 20px #f7f7f7);\n  top: 25px;\n  left: 50%;\n  max-width: 500px;\n  min-width: fit-content;\n  transform: translate(-50%);\n}", "",{"version":3,"sources":["webpack://./src/renders/garagePanel/garagePanel.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;AADF;;AAIA;;EAEE,iBAAA;EACA,cCTU;ADQZ;;AAIA;EACE,eAAA;EACA,mBAAA;AADF;;AAIA;EACE,iBAAA;AADF;;AAIA;EACE,gBAAA;EACA,6BAAA;AADF;;AAIA;EACE,kBAAA;EACA,cC5BU;ED6BV,iBAAA;EACA,gBAAA;EACA,uCAAA;EACA,SAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;EACA,0BAAA;AADF","sourcesContent":["@import '../../styles/colors.scss';\r\n\r\n.garage-panel {\r\n  position: relative;\r\n}\r\n\r\n.garage-car-count,\r\n.garage-page-number {\r\n  margin-left: 10px;\r\n  color: $mainWhite;\r\n}\r\n\r\n.garage-car-count {\r\n  font-size: 2rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.garage-page-number {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.car-tracks {\r\n  margin-top: 20px;\r\n  border-top: 2px solid $mainWhite;\r\n}\r\n\r\n.winner-announcement {\r\n  position: absolute;\r\n  color: $mainWhite;\r\n  font-size: 2.5rem;\r\n  font-weight: 500;\r\n  filter: drop-shadow(0 0px 20px $mainWhite);\r\n  top: 25px;\r\n  left: 50%;\r\n  max-width: 500px;\r\n  min-width: fit-content;\r\n  transform: translate(-50%);\r\n}","$mainWhite: #f7f7f7;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/car/car.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/car/car.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".car-wrapper,\n.car-image {\n  max-width: 150px;\n  max-height: 40px;\n}\n\n.car-wrapper {\n  position: absolute;\n  bottom: 0;\n  left: 50px;\n}", "",{"version":3,"sources":["webpack://./src/renders/garagePanel/track/car/car.scss"],"names":[],"mappings":"AAEA;;EAEE,gBAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;AADF","sourcesContent":["@import '../variables.scss';\r\n\r\n.car-wrapper,\r\n.car-image {\r\n  max-width: 150px;\r\n  max-height: 40px;\r\n}\r\n\r\n.car-wrapper {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: $CONTROL_PANEL_WIDTH + 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/flag/flag.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/flag/flag.scss ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flag {\n  position: absolute;\n  bottom: 0;\n  right: 150px;\n  max-height: 50px;\n  max-width: 50px;\n}", "",{"version":3,"sources":["webpack://./src/renders/garagePanel/track/flag/flag.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,SAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;AACF","sourcesContent":[".flag {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 150px;\r\n  max-height: 50px;\r\n  max-width: 50px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/track.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/track.scss ***!
  \*******************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".track {\n  position: relative;\n  border-bottom: 5px dashed grey;\n  margin: 50px 0 50px;\n  padding: 20px;\n}\n.track:last-of-type {\n  margin-bottom: 20px;\n}\n\n.car-label {\n  font-size: 1.5rem;\n  color: red;\n  position: absolute;\n  top: -35px;\n  left: 250px;\n}\n\n.car-edit-panel {\n  position: absolute;\n  left: 60px;\n  top: -40px;\n}\n\n.car-edit-button {\n  background-color: #f7f7f7;\n  border: none;\n  font-size: 1.5rem;\n  transition: 0.3s;\n}\n.car-edit-button:hover {\n  background-color: red;\n}\n\n.car-select-button {\n  margin-right: 5px;\n}\n\n.car-control-panel {\n  position: absolute;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 50px;\n  height: 80px;\n  padding: 5px;\n  top: -45px;\n  left: 0;\n}\n\n.car-start-button,\n.car-reset-button {\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n\n.car-start-button {\n  background-color: rgba(0, 255, 0, 0.35);\n  border: 2px solid #00ff00;\n}\n.car-start-button:hover {\n  background-color: rgba(0, 255, 0, 0.85);\n}\n.car-start-button:active {\n  background-color: rgba(0, 255, 0, 0.55);\n}\n.car-start-button:disabled {\n  background-color: rgba(0, 255, 0, 0.35);\n  border: none;\n}\n\n.car-reset-button {\n  background-color: rgba(255, 0, 0, 0.35);\n  border: 2px solid #ff0000;\n}\n.car-reset-button:hover {\n  background-color: rgba(255, 0, 0, 0.85);\n}\n.car-reset-button:active {\n  background-color: rgba(255, 0, 0, 0.55);\n}\n.car-reset-button:disabled {\n  background-color: rgba(255, 0, 0, 0.35);\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/renders/garagePanel/track/track.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAGA;EACE,kBAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;AAFF;AAIE;EACE,mBAAA;AAFJ;;AAMA;EACE,iBAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AAHF;;AAMA;EACE,kBAAA;EACA,UAAA;EACA,UAAA;AAHF;;AAMA;EACE,yBC7BU;ED8BV,YAAA;EACA,iBAAA;EACA,gBAAA;AAHF;AAKE;EACE,qBAAA;AAHJ;;AAOA;EACE,iBAAA;AAJF;;AAOA;EACE,kBAAA;EACA,aAAA;EACA,wBAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,UAAA;EACA,OAAA;AAJF;;AAOA;;EAEE,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAJF;;AAOA;EACE,uCAAA;EACA,yBAAA;AAJF;AAME;EACE,uCAAA;AAJJ;AAOE;EACE,uCAAA;AALJ;AAQE;EACE,uCAAA;EACA,YAAA;AANJ;;AAUA;EACE,uCAAA;EACA,yBAAA;AAPF;AASE;EACE,uCAAA;AAPJ;AAUE;EACE,uCAAA;AARJ;AAWE;EACE,uCAAA;EACA,YAAA;AATJ","sourcesContent":["@import '../../../styles/colors.scss';\r\n@import './variables.scss';\r\n\r\n.track {\r\n  position: relative;\r\n  border-bottom: 5px dashed grey;\r\n  margin: 50px 0 50px;\r\n  padding: 20px;\r\n\r\n  &:last-of-type {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.car-label {\r\n  font-size: 1.5rem;\r\n  color: red;\r\n  position: absolute;\r\n  top: -35px;\r\n  left: $CONTROL_PANEL_WIDTH + 200px;\r\n}\r\n\r\n.car-edit-panel {\r\n  position: absolute;\r\n  left: $CONTROL_PANEL_WIDTH + 10px;\r\n  top: -40px;\r\n}\r\n\r\n.car-edit-button {\r\n  background-color: $mainWhite;\r\n  border: none;\r\n  font-size: 1.5rem;\r\n  transition: .3s;\r\n\r\n  &:hover {\r\n    background-color: red;\r\n  }\r\n}\r\n\r\n.car-select-button {\r\n  margin-right: 5px;\r\n}\r\n\r\n.car-control-panel {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 50px;\r\n  height: 80px;\r\n  padding: 5px;\r\n  top: -45px;\r\n  left: 0;\r\n}\r\n\r\n.car-start-button,\r\n.car-reset-button {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: none;\r\n  border-radius: 50%;\r\n  transition: .3s;\r\n}\r\n\r\n.car-start-button {\r\n  background-color: rgba($color: #00ff00, $alpha: .35);\r\n  border: 2px solid #00ff00;\r\n\r\n  &:hover {\r\n    background-color: rgba($color: #00ff00, $alpha: .85);\r\n  }\r\n\r\n  &:active {\r\n    background-color: rgba($color: #00ff00, $alpha: .55);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: rgba($color: #00ff00, $alpha: .35);\r\n    border: none;\r\n  }\r\n}\r\n\r\n.car-reset-button {\r\n  background-color: rgba($color: #ff0000, $alpha: .35);\r\n  border: 2px solid #ff0000;\r\n\r\n  &:hover {\r\n    background-color: rgba($color: #ff0000, $alpha: .85);\r\n  }\r\n\r\n  &:active {\r\n    background-color: rgba($color: #ff0000, $alpha: .55);\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: rgba($color: #ff0000, $alpha: .35);\r\n    border: none;\r\n  }\r\n}","$mainWhite: #f7f7f7;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/navigation.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/navigation.scss ***!
  \******************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\n  height: 80px;\n  border-bottom: 3px solid #f7f7f7;\n}\n\n.nav-ul {\n  height: inherit;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  max-width: 200px;\n  margin: auto;\n}\n\n.nav-li {\n  padding: 20px;\n}\n\n.nav-a {\n  color: white;\n  font-size: 2rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: 0.3s;\n}\n.nav-a:hover {\n  color: red;\n}\n.nav-a:focus {\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./src/renders/navigation.scss"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,gCAAA;AADF;;AAIA;EACE,eAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBAAA;AADF;AAGE;EACE,UAAA;AADJ;AAIE;EACE,aAAA;AAFJ","sourcesContent":["@import '../styles/colors.scss';\r\n\r\n.nav {\r\n  height: 80px;\r\n  border-bottom: 3px solid $mainWhite;\r\n}\r\n\r\n.nav-ul {\r\n  height: inherit;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: center;  \r\n  align-items: center;\r\n  max-width: 200px;\r\n  margin: auto\r\n}\r\n\r\n.nav-li {\r\n  padding: 20px;\r\n}\r\n\r\n.nav-a {\r\n  color: white;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n  transition: .3s;\r\n\r\n  &:hover {\r\n    color: red;\r\n  }\r\n\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/winnersPage/winnersPanel.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/winnersPage/winnersPanel.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".winners-layout {\n  width: fit-content;\n  margin: auto;\n}\n\n.winners-count, .page-number {\n  color: #f7f7f7;\n}\n\n.winners-count {\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 10px;\n}\n\n.page-number {\n  font-size: 1.25rem;\n  margin: 10px;\n}", "",{"version":3,"sources":["webpack://./src/renders/winnersPage/winnersPanel.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,YAAA;AADF;;AAIA;EACE,cCRU;ADOZ;;AAIA;EACE,iBAAA;EACA,gBAAA;EACA,YAAA;AADF;;AAIA;EACE,kBAAA;EACA,YAAA;AADF","sourcesContent":["@import '../../styles/colors.scss';\r\n\r\n.winners-layout {\r\n  width: fit-content;\r\n  margin: auto;\r\n}\r\n\r\n.winners-count, .page-number {\r\n  color: $mainWhite;\r\n}\r\n\r\n.winners-count {\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  margin: 10px;\r\n}\r\n\r\n.page-number {\r\n  font-size: 1.25rem;\r\n  margin: 10px;\r\n}","$mainWhite: #f7f7f7;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/winnersPage/winnersTable/winnersTable.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/winnersPage/winnersTable/winnersTable.scss ***!
  \*********************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".winners-table {\n  border: 3px solid #f7f7f7;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.th, .td {\n  border: 1px solid #f7f7f7;\n  font-size: 1.25rem;\n  padding: 5px 10px;\n}\n\n.th {\n  color: red;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.table-cell {\n  color: #f7f7f7;\n}\n\n.car-cell svg {\n  max-width: 4.75rem;\n  max-height: 1.25rem;\n}\n\n.clickable:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/renders/winnersPage/winnersTable/winnersTable.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACE,yBAAA;EACA,YAAA;EACA,mBAAA;AADF;;AAIA;EACE,yBAAA;EACA,kBAAA;EACA,iBAAA;AADF;;AAIA;EACE,UAAA;EACA,yBAAA;EACA,gBAAA;AADF;;AAIA;EACE,cCrBU;ADoBZ;;AAKE;EACE,kBAAA;EACA,mBAAA;AAFJ;;AAMA;EACE,eAAA;AAHF","sourcesContent":["@import '../../../styles/colors.scss';\r\n\r\n.winners-table {\r\n  border: 3px solid $mainWhite;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.th, .td {\r\n  border: 1px solid $mainWhite;\r\n  font-size: 1.25rem;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.th {  \r\n  color: red;\r\n  text-transform: uppercase;  \r\n  font-weight: 500;\r\n}\r\n\r\n.table-cell {\r\n  color: $mainWhite;\r\n}\r\n\r\n.car-cell {\r\n  svg {\r\n    max-width: 4.75rem;\r\n    max-height: 1.25rem;\r\n  }\r\n}\r\n\r\n.clickable:hover {\r\n  cursor: pointer;\r\n}","$mainWhite: #f7f7f7;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\nbody {\n  background-color: black;\n}\n\n.garage-layout, .winners-layout {\n  display: none;\n}\n\n.current-page {\n  display: block;\n}\n\n.page-buttons {\n  margin-left: 10px;\n  margin-bottom: 50px;\n}\n\n.page-button {\n  border: none;\n  font-size: 1.25rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding: 5px 15px;\n  transition: 0.3s;\n}\n.page-button:nth-of-type(1) {\n  margin-right: 10px;\n}\n.page-button:hover {\n  background-color: red;\n}\n\n.page-button:disabled {\n  background-color: gray;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;EACA,4CAAA;AAAF;;AAGA;EACE,uBAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,cAAA;AAAF;;AAGA;EACE,iBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,iBAAA;EACA,gBAAA;AAAF;AAEE;EACE,kBAAA;AAAJ;AAGE;EACE,qBAAA;AADJ;;AAKA;EACE,sBAAA;AAFF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif !important;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n}\r\n\r\n.garage-layout, .winners-layout {\r\n  display: none;\r\n}\r\n\r\n.current-page {\r\n  display: block;\r\n}\r\n\r\n.page-buttons {\r\n  margin-left: 10px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.page-button {\r\n  border: none;\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  padding: 5px 15px;\r\n  transition: .3s;\r\n\r\n  &:nth-of-type(1) {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  &:hover {\r\n    background-color: red;\r\n  }\r\n}\r\n\r\n.page-button:disabled {\r\n  background-color: gray;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/renders/controlPanel/controlPanel.scss":
/*!****************************************************!*\
  !*** ./src/renders/controlPanel/controlPanel.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_controlPanel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./controlPanel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/controlPanel/controlPanel.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_controlPanel_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_controlPanel_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/renders/garagePanel/garagePanel.scss":
/*!**************************************************!*\
  !*** ./src/renders/garagePanel/garagePanel.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_garagePanel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./garagePanel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/garagePanel.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_garagePanel_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_garagePanel_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/renders/garagePanel/track/car/car.scss":
/*!****************************************************!*\
  !*** ./src/renders/garagePanel/track/car/car.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_car_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./car.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/car/car.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_car_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_car_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/renders/garagePanel/track/flag/flag.scss":
/*!******************************************************!*\
  !*** ./src/renders/garagePanel/track/flag/flag.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flag_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./flag.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/flag/flag.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flag_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flag_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/renders/garagePanel/track/track.scss":
/*!**************************************************!*\
  !*** ./src/renders/garagePanel/track/track.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_track_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./track.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/garagePanel/track/track.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_track_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_track_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/renders/navigation.scss":
/*!*************************************!*\
  !*** ./src/renders/navigation.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navigation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./navigation.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/navigation.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navigation_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navigation_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/renders/winnersPage/winnersPanel.scss":
/*!***************************************************!*\
  !*** ./src/renders/winnersPage/winnersPanel.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_winnersPanel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./winnersPanel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/winnersPage/winnersPanel.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_winnersPanel_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_winnersPanel_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/renders/winnersPage/winnersTable/winnersTable.scss":
/*!****************************************************************!*\
  !*** ./src/renders/winnersPage/winnersTable/winnersTable.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_winnersTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./winnersTable.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/renders/winnersPage/winnersTable/winnersTable.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_winnersTable_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_winnersTable_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./src/api/constants.ts":
/*!******************************!*\
  !*** ./src/api/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GARAGE_URL": () => (/* binding */ GARAGE_URL),
/* harmony export */   "ENGINE_URL": () => (/* binding */ ENGINE_URL),
/* harmony export */   "WINNERS_URL": () => (/* binding */ WINNERS_URL),
/* harmony export */   "CARS_PER_GARAGE_PAGE": () => (/* binding */ CARS_PER_GARAGE_PAGE),
/* harmony export */   "CARS_PER_WINNERS_PAGE": () => (/* binding */ CARS_PER_WINNERS_PAGE)
/* harmony export */ });
/* unused harmony export BASE_URL */
const BASE_URL = 'http://127.0.0.1:3000';
const GARAGE_URL = `${BASE_URL}/garage`;
const ENGINE_URL = `${BASE_URL}/engine`;
const WINNERS_URL = `${BASE_URL}/winners`;
const CARS_PER_GARAGE_PAGE = 7;
const CARS_PER_WINNERS_PAGE = 10;


/***/ }),

/***/ "./src/api/engine.ts":
/*!***************************!*\
  !*** ./src/api/engine.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/api/constants.ts");

const startEngine = async (id) => (await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.ENGINE_URL}?id=${id}&status=started`)).json();
const stopEngine = async (id) => (await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.ENGINE_URL}?id=${id}&status=stopped`)).json();
const drive = async (id) => (await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.ENGINE_URL}?id=${id}&status=drive`)).json();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    startEngine, stopEngine, drive,
});


/***/ }),

/***/ "./src/api/garage.ts":
/*!***************************!*\
  !*** ./src/api/garage.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/api/constants.ts");

const getCars = async (page = 0, limit = _constants__WEBPACK_IMPORTED_MODULE_0__.CARS_PER_GARAGE_PAGE) => {
    const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.GARAGE_URL}?_page=${page}&_limit=${limit}`);
    return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count'),
    };
};
const getCar = async (id) => {
    const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.GARAGE_URL}/${id}`);
    return response.json();
};
const createCar = async (name, color) => {
    const params = {
        name,
        color,
    };
    const request = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.GARAGE_URL, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return request.json();
};
const updateCar = async (id, name, color) => {
    const params = {
        name,
        color,
    };
    const request = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.GARAGE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return request.json();
};
const deleteCar = async (id) => {
    const request = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.GARAGE_URL}/${id}`, {
        method: 'DELETE',
    });
    return request.status;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getCars,
    getCar,
    createCar,
    updateCar,
    deleteCar,
});


/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garage */ "./src/api/garage.ts");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine */ "./src/api/engine.ts");
/* harmony import */ var _winners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winners */ "./src/api/winners.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ garage: _garage__WEBPACK_IMPORTED_MODULE_0__.default, engine: _engine__WEBPACK_IMPORTED_MODULE_1__.default, winners: _winners__WEBPACK_IMPORTED_MODULE_2__.default });


/***/ }),

/***/ "./src/api/winners.ts":
/*!****************************!*\
  !*** ./src/api/winners.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/api/constants.ts");

const getWinners = async (page = 1, sort, order) => {
    let url = `${_constants__WEBPACK_IMPORTED_MODULE_0__.WINNERS_URL}?_page=${page}&_limit=${_constants__WEBPACK_IMPORTED_MODULE_0__.CARS_PER_WINNERS_PAGE}`;
    if (sort && order) {
        url += `&_sort=${sort}&_order=${order}`;
    }
    else if (sort) {
        url += `&_sort=${sort}&_order=DESC`;
    }
    const response = await fetch(url);
    return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count'),
    };
};
const getWinner = async (id) => ((fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.WINNERS_URL}/${id}`)));
const createWinner = async (id, wins, time) => {
    const params = {
        id,
        wins,
        time,
    };
    const request = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.WINNERS_URL, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return request.json();
};
const deleteWinner = async (id) => {
    const request = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.WINNERS_URL}/${id}`, {
        method: 'DELETE',
    });
    return request.json();
};
const updateWinner = async (id, wins, time) => {
    const params = {
        wins,
        time,
    };
    const request = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.WINNERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return request.json();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getWinners, getWinner, createWinner, updateWinner, deleteWinner,
});


/***/ }),

/***/ "./src/renders/controlPanel/controlPanel.ts":
/*!**************************************************!*\
  !*** ./src/renders/controlPanel/controlPanel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _eventListeners_updateClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners/updateClick */ "./src/renders/controlPanel/eventListeners/updateClick.ts");
/* harmony import */ var _controlPanel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlPanel.scss */ "./src/renders/controlPanel/controlPanel.scss");
/* harmony import */ var _eventListeners_createClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners/createClick */ "./src/renders/controlPanel/eventListeners/createClick.ts");
/* harmony import */ var _eventListeners_generateClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventListeners/generateClick */ "./src/renders/controlPanel/eventListeners/generateClick.ts");
/* harmony import */ var _eventListeners_raceClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventListeners/raceClick */ "./src/renders/controlPanel/eventListeners/raceClick.ts");
/* harmony import */ var _eventListeners_resetClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventListeners/resetClick */ "./src/renders/controlPanel/eventListeners/resetClick.ts");







const renderForm = (name) => {
    const form = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('form', [`${name}-form`, 'form']);
    const nameAttributes = {
        type: 'text',
        placeholder: 'name',
        required: true,
    };
    const nameInput = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('input', [`${name}-input-text`, 'input-text', 'input'], nameAttributes);
    const colorInput = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('input', [`${name}-input-color`, 'input-color', 'input'], { type: 'color' });
    const button = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('button', [`${name}-button`, 'form-button', 'button']);
    button.innerText = `${name}`;
    _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.appendChildren(form, [nameInput, colorInput, button]);
    return form;
};
const renderControlButtons = () => {
    const buttons = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('div', ['control-buttons']);
    const raceButton = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('button', ['race-button', 'control-button', 'button']);
    raceButton.innerText = 'race';
    (0,_eventListeners_raceClick__WEBPACK_IMPORTED_MODULE_5__.default)(raceButton);
    const resetButton = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('button', ['reset-button', 'control-button', 'button'], { disabled: 'true' });
    resetButton.innerText = 'reset';
    (0,_eventListeners_resetClick__WEBPACK_IMPORTED_MODULE_6__.default)(resetButton);
    const generateButton = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('button', ['generate-button', 'control-button', 'button']);
    generateButton.innerText = 'generate';
    (0,_eventListeners_generateClick__WEBPACK_IMPORTED_MODULE_4__.default)(generateButton);
    _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.appendChildren(buttons, [raceButton, resetButton, generateButton]);
    return buttons;
};
const renderControlPanel = () => {
    const panel = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('div', ['control-panel']);
    const createForm = renderForm('create');
    (0,_eventListeners_createClick__WEBPACK_IMPORTED_MODULE_3__.default)(createForm);
    const updateForm = renderForm('update');
    (0,_eventListeners_updateClick__WEBPACK_IMPORTED_MODULE_1__.default)(updateForm);
    const controlButtons = renderControlButtons();
    _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.appendChildren(panel, [createForm, updateForm, controlButtons]);
    return panel;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderControlPanel);


/***/ }),

/***/ "./src/renders/controlPanel/eventListeners/createClick.ts":
/*!****************************************************************!*\
  !*** ./src/renders/controlPanel/eventListeners/createClick.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./src/api/index.ts");
/* harmony import */ var _shared_refreshGarage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/refreshGarage */ "./src/shared/refreshGarage.ts");


const addCreateClick = (form) => {
    const name = form.children[0];
    const color = form.children[1];
    const button = form.children[2];
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value.length === 0) {
            return;
        }
        _api__WEBPACK_IMPORTED_MODULE_0__.default.garage.createCar(name.value, color.value)
            .then(() => {
            (0,_shared_refreshGarage__WEBPACK_IMPORTED_MODULE_1__.default)();
            name.value = '';
            color.value = '#000000';
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCreateClick);


/***/ }),

/***/ "./src/renders/controlPanel/eventListeners/generateClick.ts":
/*!******************************************************************!*\
  !*** ./src/renders/controlPanel/eventListeners/generateClick.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./src/api/index.ts");
/* harmony import */ var _shared_refreshGarage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/refreshGarage */ "./src/shared/refreshGarage.ts");


const generateRandomName = () => {
    const brandArrays = [
        'Audi',
        'BMW',
        'Mercedes',
        'Ferrari',
        'Tesla',
        'Geely',
        'Ford',
        'Mitsubishi',
        'Honda',
        'Nissan',
    ];
    const modelArrays = [
        'X10',
        'Super',
        'FURIOUS',
        'Fast',
        'Sedan',
        '2020',
        'S100',
        'Model X',
        '8',
        'mini',
    ];
    const randomBrand = brandArrays[Math.floor(Math.random() * 10)];
    const randomModel = modelArrays[Math.floor(Math.random() * 10)];
    const randomName = `${randomBrand} ${randomModel}`;
    return randomName;
};
const generateChannel = () => {
    const number = Math.floor(Math.random() * 256).toString(16);
    return number.length < 2 ? `0${number}` : number;
};
const generateRandomColor = () => {
    const redChannel = generateChannel();
    const greenChannel = generateChannel();
    const blueChannel = generateChannel();
    return `#${redChannel + greenChannel + blueChannel}`;
};
const addGenerateClick = (button) => {
    button.addEventListener('click', () => {
        const generateCount = 100;
        for (let i = 0; i < generateCount; i += 1) {
            const name = generateRandomName();
            const color = generateRandomColor();
            _api__WEBPACK_IMPORTED_MODULE_0__.default.garage.createCar(name, color).then(() => {
                if (i === generateCount - 1)
                    (0,_shared_refreshGarage__WEBPACK_IMPORTED_MODULE_1__.default)();
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addGenerateClick);


/***/ }),

/***/ "./src/renders/controlPanel/eventListeners/raceClick.ts":
/*!**************************************************************!*\
  !*** ./src/renders/controlPanel/eventListeners/raceClick.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./src/api/index.ts");
/* harmony import */ var _shared_carDrive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/carDrive */ "./src/shared/carDrive.ts");
/* harmony import */ var _shared_mouseFreeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/mouseFreeze */ "./src/shared/mouseFreeze.ts");
/* harmony import */ var _shared_raceStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/raceStatus */ "./src/shared/raceStatus.ts");




const addRaceClick = (button) => {
    button.addEventListener('click', async () => {
        const garagePanel = document.querySelector('.garage-panel');
        const pageNumber = Number(garagePanel.dataset.page);
        const cars = await _api__WEBPACK_IMPORTED_MODULE_0__.default.garage.getCars(pageNumber);
        button.setAttribute('disabled', 'true');
        _shared_mouseFreeze__WEBPACK_IMPORTED_MODULE_2__.default.freezeMouse();
        _shared_raceStatus__WEBPACK_IMPORTED_MODULE_3__.default.setCarsNumber(cars.items.length);
        cars.items.forEach(async (car) => {
            (0,_shared_carDrive__WEBPACK_IMPORTED_MODULE_1__.default)(car.id, true);
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addRaceClick);


/***/ }),

/***/ "./src/renders/controlPanel/eventListeners/resetClick.ts":
/*!***************************************************************!*\
  !*** ./src/renders/controlPanel/eventListeners/resetClick.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./src/api/index.ts");

const enableStartButton = (id) => {
    const button = document.querySelector(`.start-car-${id}`);
    button.removeAttribute('disabled');
};
const disableResetButton = (id) => {
    const button = document.querySelector(`.reset-car-${id}`);
    button.setAttribute('disabled', 'true');
};
const resetCar = (id) => {
    const carElement = document.querySelector(`.car-image-${id}`).parentElement;
    carElement.removeAttribute('style');
    disableResetButton(id);
    enableStartButton(id);
};
const clearAnnouncement = () => {
    const winnerAnnouncement = document.querySelector('.winner-announcement');
    winnerAnnouncement.innerText = '';
};
const addResetClick = (button) => {
    button.addEventListener('click', async () => {
        const garagePanel = document.querySelector('.garage-panel');
        const pageNumber = Number(garagePanel.dataset.page);
        const raceButton = document.querySelector('.race-button');
        const cars = await _api__WEBPACK_IMPORTED_MODULE_0__.default.garage.getCars(pageNumber);
        clearAnnouncement();
        button.setAttribute('disabled', 'true');
        raceButton?.removeAttribute('disabled');
        cars.items.forEach((car) => {
            resetCar(car.id);
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addResetClick);


/***/ }),

/***/ "./src/renders/controlPanel/eventListeners/updateClick.ts":
/*!****************************************************************!*\
  !*** ./src/renders/controlPanel/eventListeners/updateClick.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./src/api/index.ts");
/* harmony import */ var _shared_refreshGarage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/refreshGarage */ "./src/shared/refreshGarage.ts");
/* harmony import */ var _shared_refreshWinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/refreshWinners */ "./src/shared/refreshWinners.ts");



const addUpdateClick = (form) => {
    const name = form.children[0];
    const color = form.children[1];
    const button = form.children[2];
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value.length === 0) {
            return;
        }
        _api__WEBPACK_IMPORTED_MODULE_0__.default.garage.updateCar(Number(button.dataset.id), name.value, color.value)
            .then(() => {
            (0,_shared_refreshGarage__WEBPACK_IMPORTED_MODULE_1__.default)();
            (0,_shared_refreshWinners__WEBPACK_IMPORTED_MODULE_2__.default)();
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addUpdateClick);


/***/ }),

/***/ "./src/renders/garagePageButtons/eventListeners/nextPageClick.ts":
/*!***********************************************************************!*\
  !*** ./src/renders/garagePageButtons/eventListeners/nextPageClick.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_refreshGarage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/refreshGarage */ "./src/shared/refreshGarage.ts");

const addNextPageClick = (button) => {
    button.addEventListener('click', async () => {
        const garagePanel = document.querySelector('.garage-panel');
        garagePanel.dataset.page = (Number(garagePanel.dataset.page) + 1).toString();
        (0,_shared_refreshGarage__WEBPACK_IMPORTED_MODULE_0__.default)();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNextPageClick);


/***/ }),

/***/ "./src/renders/garagePageButtons/eventListeners/previousPageClick.ts":
/*!***************************************************************************!*\
  !*** ./src/renders/garagePageButtons/eventListeners/previousPageClick.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_refreshGarage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/refreshGarage */ "./src/shared/refreshGarage.ts");

const addPreviousPageClick = (button) => {
    button.addEventListener('click', async () => {
        const garagePanel = document.querySelector('.garage-panel');
        garagePanel.dataset.page = (Number(garagePanel.dataset.page) - 1).toString();
        (0,_shared_refreshGarage__WEBPACK_IMPORTED_MODULE_0__.default)();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPreviousPageClick);


/***/ }),

/***/ "./src/renders/garagePageButtons/garagePageButtons.ts":
/*!************************************************************!*\
  !*** ./src/renders/garagePageButtons/garagePageButtons.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _eventListeners_nextPageClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners/nextPageClick */ "./src/renders/garagePageButtons/eventListeners/nextPageClick.ts");
/* harmony import */ var _eventListeners_previousPageClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners/previousPageClick */ "./src/renders/garagePageButtons/eventListeners/previousPageClick.ts");



const renderPageButton = (direction) => {
    const button = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('button', ['page-button', `${direction}-garage-page-button`]);
    button.innerText = direction === 'previous' ? 'prev' : 'next';
    return button;
};
const renderGaragePageButtons = () => {
    const garagePageButtons = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('div', ['garage-page-buttons', 'page-buttons']);
    const previousPage = renderPageButton('previous');
    (0,_eventListeners_previousPageClick__WEBPACK_IMPORTED_MODULE_2__.default)(previousPage);
    const nextPage = renderPageButton('next');
    (0,_eventListeners_nextPageClick__WEBPACK_IMPORTED_MODULE_1__.default)(nextPage);
    _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.appendChildren(garagePageButtons, [previousPage, nextPage]);
    return garagePageButtons;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGaragePageButtons);


/***/ }),

/***/ "./src/renders/garagePageButtons/garagePageButtonsState.ts":
/*!*****************************************************************!*\
  !*** ./src/renders/garagePageButtons/garagePageButtonsState.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setGaragePageButtonsState = (pageNumber, carCount) => {
    const CARS_PER_PAGE = 7;
    const prev = document.querySelector('.previous-garage-page-button');
    const next = document.querySelector('.next-garage-page-button');
    if (prev === null || next === null) {
        setTimeout(() => { setGaragePageButtonsState(pageNumber, carCount); }, 100);
    }
    if (pageNumber === 1) {
        prev?.setAttribute('disabled', 'true');
    }
    else {
        prev?.removeAttribute('disabled');
    }
    if (carCount / CARS_PER_PAGE <= pageNumber) {
        next?.setAttribute('disabled', 'true');
    }
    else {
        next?.removeAttribute('disabled');
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setGaragePageButtonsState);


/***/ }),

/***/ "./src/renders/garagePanel/eventListeners/refreshgarage.ts":
/*!*****************************************************************!*\
  !*** ./src/renders/garagePanel/eventListeners/refreshgarage.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addGarageRefresh = (panel, render) => {
    panel.addEventListener('refresh', async () => {
        const oldPanel = panel;
        const newPanel = await render(oldPanel.dataset.page);
        const pageButtons = document.querySelector('.page-buttons');
        const layout = document.querySelector('.garage-layout');
        oldPanel.remove();
        layout?.insertBefore(newPanel, pageButtons);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addGarageRefresh);


/***/ }),

/***/ "./src/renders/garagePanel/garagePanel.ts":
/*!************************************************!*\
  !*** ./src/renders/garagePanel/garagePanel.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.ts");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _garagePageButtons_garagePageButtonsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../garagePageButtons/garagePageButtonsState */ "./src/renders/garagePageButtons/garagePageButtonsState.ts");
/* harmony import */ var _eventListeners_refreshgarage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners/refreshgarage */ "./src/renders/garagePanel/eventListeners/refreshgarage.ts");
/* harmony import */ var _garagePanel_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./garagePanel.scss */ "./src/renders/garagePanel/garagePanel.scss");
/* harmony import */ var _track_track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./track/track */ "./src/renders/garagePanel/track/track.ts");






const renderCarCount = (count) => {
    const title = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('h2', ['h2', 'garage-car-count']);
    title.innerText = `Garage (${count})`;
    return title;
};
const renderGaragePage = (number) => {
    const page = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('h3', ['h3', 'garage-page-number']);
    page.innerText = `Page #${number}`;
    return page;
};
const renderCarTracks = (cars) => {
    const carTracksBlock = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('div', ['car-tracks']);
    cars.forEach((car) => {
        carTracksBlock.appendChild((0,_track_track__WEBPACK_IMPORTED_MODULE_5__.default)(car));
    });
    return carTracksBlock;
};
const renderWinnerAnnouncement = () => {
    const announcement = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('h2', ['winner-announcement', 'h2']);
    return announcement;
};
const renderGaragePanel = async (page = 1) => {
    const cars = await _api_index__WEBPACK_IMPORTED_MODULE_0__.default.garage.getCars(page);
    const panel = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('div', ['garage-panel']);
    panel.dataset.page = page.toString();
    const carCount = renderCarCount(cars.count || '0');
    const garagePage = renderGaragePage(page);
    const carTracks = renderCarTracks(cars.items);
    const announcement = renderWinnerAnnouncement();
    (0,_eventListeners_refreshgarage__WEBPACK_IMPORTED_MODULE_3__.default)(panel, renderGaragePanel);
    (0,_garagePageButtons_garagePageButtonsState__WEBPACK_IMPORTED_MODULE_2__.default)(Number(panel.dataset.page), Number(cars.count));
    _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.appendChildren(panel, [carCount, garagePage, carTracks, announcement]);
    return panel;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGaragePanel);


/***/ }),

/***/ "./src/renders/garagePanel/track/car/car.ts":
/*!**************************************************!*\
  !*** ./src/renders/garagePanel/track/car/car.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _car_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car.scss */ "./src/renders/garagePanel/track/car/car.scss");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api */ "./src/api/index.ts");
/* harmony import */ var _shared_carSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/carSvg */ "./src/shared/carSvg.ts");




const CAR_WIDTH = 150;
const MS_IN_SECONDS = 1000;
const getDistance = (element) => {
    const trackWidth = element.parentElement.offsetWidth;
    return trackWidth - CAR_WIDTH;
};
const drawCar = (car) => {
    const carWrapper = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('div', ['car-wrapper']);
    const carImg = (0,_shared_carSvg__WEBPACK_IMPORTED_MODULE_3__.default)();
    carImg.classList.add('car-image', `car-image-${car.id}`);
    carImg.children[0].setAttribute('fill', car.color);
    carWrapper.dataset.id = car.id.toString();
    carWrapper.appendChild(carImg);
    return carWrapper;
};
const addMoveAnimation = async (e) => {
    const carElement = e.currentTarget;
    const moveDistance = getDistance(carElement);
    const carID = Number(carElement.dataset.id);
    const engineProps = await _api__WEBPACK_IMPORTED_MODULE_2__.default.engine.startEngine(carID);
    const moveTime = (engineProps.distance / engineProps.velocity / MS_IN_SECONDS).toFixed(2);
    carElement.style.transition = `linear ${moveTime}s`;
    carElement.style.left = `${moveDistance}px`;
    _api__WEBPACK_IMPORTED_MODULE_2__.default.engine.drive(carID)
        .then(() => {
    })
        .catch(() => {
        carElement.style.transition = '0';
        carElement.style.left = `${carElement.offsetLeft}px`;
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ drawCar, addMoveAnimation });


/***/ }),

/***/ "./src/renders/garagePanel/track/eventListeners/removeClick.ts":
/*!*********************************************************************!*\
  !*** ./src/renders/garagePanel/track/eventListeners/removeClick.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api */ "./src/api/index.ts");
/* harmony import */ var _shared_refreshGarage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/refreshGarage */ "./src/shared/refreshGarage.ts");
/* harmony import */ var _shared_refreshWinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/refreshWinners */ "./src/shared/refreshWinners.ts");



const addRemoveClick = (button) => {
    button.addEventListener('click', async () => {
        const id = Number(button.dataset.id);
        const winner = await _api__WEBPACK_IMPORTED_MODULE_0__.default.winners.getWinner(id);
        if (winner.status === 200) {
            _api__WEBPACK_IMPORTED_MODULE_0__.default.winners.deleteWinner(id).then(() => {
                (0,_shared_refreshWinners__WEBPACK_IMPORTED_MODULE_2__.default)();
            });
        }
        _api__WEBPACK_IMPORTED_MODULE_0__.default.garage.deleteCar(Number(button.dataset.id))
            .then(() => {
            (0,_shared_refreshGarage__WEBPACK_IMPORTED_MODULE_1__.default)();
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addRemoveClick);


/***/ }),

/***/ "./src/renders/garagePanel/track/eventListeners/resetCarClick.ts":
/*!***********************************************************************!*\
  !*** ./src/renders/garagePanel/track/eventListeners/resetCarClick.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const resetCarPosition = (carElement) => {
    const car = carElement;
    car.removeAttribute('style');
};
const activateStartButton = (id) => {
    const startButton = document.querySelector(`.start-car-${id}`);
    startButton?.removeAttribute('disabled');
};
const addResetCarClick = (button) => {
    button.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const id = Number(target.dataset.id);
        const carElement = document.querySelector(`.car-image-${id}`).parentElement;
        resetCarPosition(carElement);
        target.setAttribute('disabled', 'true');
        activateStartButton(id);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addResetCarClick);


/***/ }),

/***/ "./src/renders/garagePanel/track/eventListeners/selectClick.ts":
/*!*********************************************************************!*\
  !*** ./src/renders/garagePanel/track/eventListeners/selectClick.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addSelectClick = (button) => {
    button.addEventListener('click', () => {
        const { id } = button.dataset;
        const carLabel = document.querySelector(`.car-label-${id}`).innerHTML;
        const carImage = document.querySelector(`.car-image-${id}`).children[0];
        const color = carImage.getAttribute('fill');
        const inputText = document.querySelector('.update-input-text');
        const inputColor = document.querySelector('.update-input-color');
        const updateButton = document.querySelector('.update-button');
        inputText.value = carLabel;
        inputColor.value = color;
        updateButton.dataset.id = id;
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addSelectClick);


/***/ }),

/***/ "./src/renders/garagePanel/track/eventListeners/startCarClick.ts":
/*!***********************************************************************!*\
  !*** ./src/renders/garagePanel/track/eventListeners/startCarClick.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_carDrive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/carDrive */ "./src/shared/carDrive.ts");

const addStartCarClick = (button) => {
    button.addEventListener('click', async (e) => {
        const target = e.currentTarget;
        const id = Number(target.dataset.id);
        (0,_shared_carDrive__WEBPACK_IMPORTED_MODULE_0__.default)(id);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addStartCarClick);


/***/ }),

/***/ "./src/renders/garagePanel/track/flag/flag.ts":
/*!****************************************************!*\
  !*** ./src/renders/garagePanel/track/flag/flag.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _flag_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flag.scss */ "./src/renders/garagePanel/track/flag/flag.scss");


const flagImg = __webpack_require__(/*! ../../../../assets/flag.png */ "./src/assets/flag.png");
const drawFlag = () => {
    const flag = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('img', ['flag']);
    flag.src = flagImg;
    flag.alt = 'flag icon';
    return flag;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ drawFlag });


/***/ }),

/***/ "./src/renders/garagePanel/track/track.ts":
/*!************************************************!*\
  !*** ./src/renders/garagePanel/track/track.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flag_flag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flag/flag */ "./src/renders/garagePanel/track/flag/flag.ts");
/* harmony import */ var _car_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car/car */ "./src/renders/garagePanel/track/car/car.ts");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _track_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track.scss */ "./src/renders/garagePanel/track/track.scss");
/* harmony import */ var _eventListeners_selectClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventListeners/selectClick */ "./src/renders/garagePanel/track/eventListeners/selectClick.ts");
/* harmony import */ var _eventListeners_removeClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventListeners/removeClick */ "./src/renders/garagePanel/track/eventListeners/removeClick.ts");
/* harmony import */ var _eventListeners_startCarClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventListeners/startCarClick */ "./src/renders/garagePanel/track/eventListeners/startCarClick.ts");
/* harmony import */ var _eventListeners_resetCarClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eventListeners/resetCarClick */ "./src/renders/garagePanel/track/eventListeners/resetCarClick.ts");








const renderLabel = (id, name) => {
    const label = _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.createDOM('h2', ['car-label', `car-label-${id}`]);
    label.innerText = `${name}`;
    return label;
};
const renderCarControlPanel = (id) => {
    const carControlPanel = _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.createDOM('div', ['car-control-panel']);
    const startButton = _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.createDOM('button', ['car-control-button', 'car-start-button', 'button', `start-car-${id}`]);
    (0,_eventListeners_startCarClick__WEBPACK_IMPORTED_MODULE_6__.default)(startButton);
    const resetButton = _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.createDOM('button', ['car-control-button', 'car-reset-button', 'button', `reset-car-${id}`], { disabled: 'true' });
    (0,_eventListeners_resetCarClick__WEBPACK_IMPORTED_MODULE_7__.default)(resetButton);
    _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.appendChildren(carControlPanel, [startButton, resetButton]);
    startButton.dataset.id = id;
    resetButton.dataset.id = id;
    return carControlPanel;
};
const renderCarEditPanel = (id) => {
    const carEditPanel = _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.createDOM('div', ['car-edit-panel']);
    const selectButton = _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.createDOM('button', ['car-edit-button', 'car-select-button', 'button']);
    selectButton.innerText = 'select';
    (0,_eventListeners_selectClick__WEBPACK_IMPORTED_MODULE_4__.default)(selectButton);
    const removeButton = _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.createDOM('button', ['car-edit-button', 'car-remove-button', 'button']);
    (0,_eventListeners_removeClick__WEBPACK_IMPORTED_MODULE_5__.default)(removeButton);
    _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.appendChildren(carEditPanel, [selectButton, removeButton]);
    removeButton.innerText = 'remove';
    selectButton.dataset.id = id;
    removeButton.dataset.id = id;
    return carEditPanel;
};
const renderTrack = (car) => {
    const trackBlock = _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.createDOM('div', ['track', `track-${car.id}`]);
    trackBlock.dataset.id = car.id.toString();
    const label = renderLabel(car.id, car.name);
    const carEdit = renderCarEditPanel(car.id.toString());
    const controlPanel = renderCarControlPanel(car.id.toString());
    const carSvg = _car_car__WEBPACK_IMPORTED_MODULE_1__.default.drawCar(car);
    const flagImg = _flag_flag__WEBPACK_IMPORTED_MODULE_0__.default.drawFlag();
    _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.default.appendChildren(trackBlock, [label, carEdit, controlPanel, carSvg, flagImg]);
    return trackBlock;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTrack);


/***/ }),

/***/ "./src/renders/navigationRender.ts":
/*!*****************************************!*\
  !*** ./src/renders/navigationRender.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.scss */ "./src/renders/navigation.scss");


const garageLink = () => {
    const li = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('li', ['nav-li']);
    const a = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('a', ['nav-a'], { href: '#garage' });
    a.innerText = 'Garage';
    li.appendChild(a);
    return li;
};
const winnersLink = () => {
    const li = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('li', ['nav-li']);
    const a = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('a', ['nav-a'], { href: '#winners' });
    a.innerText = 'Winners';
    li.appendChild(a);
    return li;
};
const renderNavigation = () => {
    const nav = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('nav', ['nav']);
    const ul = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('ul', ['nav-ul']);
    ul.appendChild(garageLink());
    ul.appendChild(winnersLink());
    nav.appendChild(ul);
    return nav;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNavigation);


/***/ }),

/***/ "./src/renders/pagesRender.ts":
/*!************************************!*\
  !*** ./src/renders/pagesRender.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _controlPanel_controlPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlPanel/controlPanel */ "./src/renders/controlPanel/controlPanel.ts");
/* harmony import */ var _garagePanel_garagePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./garagePanel/garagePanel */ "./src/renders/garagePanel/garagePanel.ts");
/* harmony import */ var _winnersPage_winnersPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winnersPage/winnersPanel */ "./src/renders/winnersPage/winnersPanel.ts");
/* harmony import */ var _garagePageButtons_garagePageButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./garagePageButtons/garagePageButtons */ "./src/renders/garagePageButtons/garagePageButtons.ts");
/* harmony import */ var _winnersPageButtons_winnersPageButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./winnersPageButtons/winnersPageButtons */ "./src/renders/winnersPageButtons/winnersPageButtons.ts");






const renderGarage = async (appendix) => {
    const garagePage = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('div', ['garage-layout', 'current-page']);
    const controlPanel = (0,_controlPanel_controlPanel__WEBPACK_IMPORTED_MODULE_1__.default)();
    const garagePanel = await (0,_garagePanel_garagePanel__WEBPACK_IMPORTED_MODULE_2__.default)(1);
    const pageButtons = (0,_garagePageButtons_garagePageButtons__WEBPACK_IMPORTED_MODULE_4__.default)();
    _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.appendChildren(garagePage, [controlPanel, garagePanel, pageButtons]);
    appendix.appendChild(garagePage);
};
const renderWinners = async (appendix) => {
    const winnersPage = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('div', ['winners-layout']);
    const winnersTable = await (0,_winnersPage_winnersPanel__WEBPACK_IMPORTED_MODULE_3__.default)(1);
    const pageButtons = (0,_winnersPageButtons_winnersPageButtons__WEBPACK_IMPORTED_MODULE_5__.default)();
    _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.appendChildren(winnersPage, [winnersTable, pageButtons]);
    appendix.appendChild(winnersPage);
};
const hideGarage = () => {
    const garage = document.querySelector('.garage-layout');
    garage?.classList.remove('current-page');
};
const hideWinners = () => {
    const winners = document.querySelector('.winners-layout');
    winners?.classList.remove('current-page');
};
const showGarage = () => {
    const garage = document.querySelector('.garage-layout');
    if (garage?.classList.contains('current-page')) {
        return;
    }
    garage?.classList.add('current-page');
    hideWinners();
};
const showWinners = () => {
    const winners = document.querySelector('.winners-layout');
    if (winners?.classList.contains('current-page')) {
        return;
    }
    winners?.classList.add('current-page');
    hideGarage();
};
const startRender = (layout) => {
    renderGarage(layout);
    renderWinners(layout);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    startRender, showGarage, showWinners,
});


/***/ }),

/***/ "./src/renders/winnersPageButtons/eventListeners/nextPageClick.ts":
/*!************************************************************************!*\
  !*** ./src/renders/winnersPageButtons/eventListeners/nextPageClick.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_refreshWinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/refreshWinners */ "./src/shared/refreshWinners.ts");

const addNextPageClick = (button) => {
    button.addEventListener('click', async () => {
        const winnersPanel = document.querySelector('.winners-panel');
        winnersPanel.dataset.page = (Number(winnersPanel.dataset.page) + 1).toString();
        (0,_shared_refreshWinners__WEBPACK_IMPORTED_MODULE_0__.default)();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNextPageClick);


/***/ }),

/***/ "./src/renders/winnersPageButtons/eventListeners/previousPageClick.ts":
/*!****************************************************************************!*\
  !*** ./src/renders/winnersPageButtons/eventListeners/previousPageClick.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_refreshWinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/refreshWinners */ "./src/shared/refreshWinners.ts");

const addPreviousPageClick = (button) => {
    button.addEventListener('click', async () => {
        const winnersPanel = document.querySelector('.winners-panel');
        winnersPanel.dataset.page = (Number(winnersPanel.dataset.page) - 1).toString();
        (0,_shared_refreshWinners__WEBPACK_IMPORTED_MODULE_0__.default)();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPreviousPageClick);


/***/ }),

/***/ "./src/renders/winnersPageButtons/winnersPageButtons.ts":
/*!**************************************************************!*\
  !*** ./src/renders/winnersPageButtons/winnersPageButtons.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _eventListeners_nextPageClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners/nextPageClick */ "./src/renders/winnersPageButtons/eventListeners/nextPageClick.ts");
/* harmony import */ var _eventListeners_previousPageClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners/previousPageClick */ "./src/renders/winnersPageButtons/eventListeners/previousPageClick.ts");



const renderPageButton = (direction) => {
    const button = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('button', ['page-button', `${direction}-winners-page-button`]);
    button.innerText = direction === 'previous' ? 'prev' : 'next';
    return button;
};
const renderWinnersPageButtons = () => {
    const winnersPageButtons = _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('div', ['winners-page-buttons', 'page-buttons']);
    const previousPage = renderPageButton('previous');
    (0,_eventListeners_previousPageClick__WEBPACK_IMPORTED_MODULE_2__.default)(previousPage);
    const nextPage = renderPageButton('next');
    (0,_eventListeners_nextPageClick__WEBPACK_IMPORTED_MODULE_1__.default)(nextPage);
    _shared_helpers__WEBPACK_IMPORTED_MODULE_0__.default.appendChildren(winnersPageButtons, [previousPage, nextPage]);
    return winnersPageButtons;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWinnersPageButtons);


/***/ }),

/***/ "./src/renders/winnersPageButtons/winnersPageButtonsState.ts":
/*!*******************************************************************!*\
  !*** ./src/renders/winnersPageButtons/winnersPageButtonsState.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setWinnersPageButtonsState = (pageNumber, carCount) => {
    const CARS_PER_PAGE = 10;
    const prev = document.querySelector('.previous-winners-page-button');
    const next = document.querySelector('.next-winners-page-button');
    if (prev === null || next === null) {
        setTimeout(() => { setWinnersPageButtonsState(pageNumber, carCount); }, 100);
    }
    if (pageNumber === 1) {
        prev?.setAttribute('disabled', 'true');
    }
    else {
        prev?.removeAttribute('disabled');
    }
    if (carCount / CARS_PER_PAGE <= pageNumber) {
        next?.setAttribute('disabled', 'true');
    }
    else {
        next?.removeAttribute('disabled');
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWinnersPageButtonsState);


/***/ }),

/***/ "./src/renders/winnersPage/winnersPanel.ts":
/*!*************************************************!*\
  !*** ./src/renders/winnersPage/winnersPanel.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _winnersPageButtons_winnersPageButtonsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../winnersPageButtons/winnersPageButtonsState */ "./src/renders/winnersPageButtons/winnersPageButtonsState.ts");
/* harmony import */ var _winnersPanel_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winnersPanel.scss */ "./src/renders/winnersPage/winnersPanel.scss");
/* harmony import */ var _winnersTable_EventListeners_refreshWinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./winnersTable/EventListeners/refreshWinners */ "./src/renders/winnersPage/winnersTable/EventListeners/refreshWinners.ts");
/* harmony import */ var _winnersTable_winnersTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./winnersTable/winnersTable */ "./src/renders/winnersPage/winnersTable/winnersTable.ts");






const renderWinnersCount = (winnerCounter) => {
    const count = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('h2', ['h2', 'winners-count']);
    count.innerText = `Winners (${winnerCounter})`;
    return count;
};
const renderTablePage = (page) => {
    const pageNumber = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('h3', ['h3', 'page-number']);
    pageNumber.innerText = `Page #${page}`;
    return pageNumber;
};
const renderWinnersPanel = async (page = 1, sort, order) => {
    const winners = await _api__WEBPACK_IMPORTED_MODULE_0__.default.winners.getWinners(page, sort, order);
    const panel = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('div', ['winners-panel']);
    panel.dataset.page = page ? page.toString() : '';
    panel.dataset.sort = sort || '';
    panel.dataset.order = order || '';
    const winnersCount = renderWinnersCount(winners.count || '0');
    const tablePage = renderTablePage(page);
    const table = (0,_winnersTable_winnersTable__WEBPACK_IMPORTED_MODULE_5__.default)(winners.items, page);
    (0,_winnersTable_EventListeners_refreshWinners__WEBPACK_IMPORTED_MODULE_4__.default)(panel, renderWinnersPanel);
    (0,_winnersPageButtons_winnersPageButtonsState__WEBPACK_IMPORTED_MODULE_2__.default)(Number(panel.dataset.page), Number(winners.count));
    _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.appendChildren(panel, [winnersCount, tablePage, table]);
    return panel;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWinnersPanel);


/***/ }),

/***/ "./src/renders/winnersPage/winnersTable/EventListeners/addTimeClick.ts":
/*!*****************************************************************************!*\
  !*** ./src/renders/winnersPage/winnersTable/EventListeners/addTimeClick.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_refreshWinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/refreshWinners */ "./src/shared/refreshWinners.ts");

const addTimeClick = (cell) => {
    cell.addEventListener('click', () => {
        const winnersPanel = document.querySelector('.winners-panel');
        if (winnersPanel.dataset.sort !== 'time') {
            winnersPanel.dataset.sort = 'time';
            winnersPanel.dataset.order = 'ASC';
        }
        else if (winnersPanel.dataset.order === 'DESC') {
            winnersPanel.dataset.order = 'ASC';
        }
        else {
            winnersPanel.dataset.order = 'DESC';
        }
        (0,_shared_refreshWinners__WEBPACK_IMPORTED_MODULE_0__.default)();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTimeClick);


/***/ }),

/***/ "./src/renders/winnersPage/winnersTable/EventListeners/addWinsClick.ts":
/*!*****************************************************************************!*\
  !*** ./src/renders/winnersPage/winnersTable/EventListeners/addWinsClick.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_refreshWinners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/refreshWinners */ "./src/shared/refreshWinners.ts");

const addWinsClick = (cell) => {
    cell.addEventListener('click', () => {
        const winnersPanel = document.querySelector('.winners-panel');
        if (winnersPanel.dataset.sort !== 'wins') {
            winnersPanel.dataset.sort = 'wins';
            winnersPanel.dataset.order = 'DESC';
        }
        else if (winnersPanel.dataset.order === 'DESC') {
            winnersPanel.dataset.order = 'ASC';
        }
        else {
            winnersPanel.dataset.order = 'DESC';
        }
        (0,_shared_refreshWinners__WEBPACK_IMPORTED_MODULE_0__.default)();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addWinsClick);


/***/ }),

/***/ "./src/renders/winnersPage/winnersTable/EventListeners/refreshWinners.ts":
/*!*******************************************************************************!*\
  !*** ./src/renders/winnersPage/winnersTable/EventListeners/refreshWinners.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addWinnersRefresh = (table, render) => {
    table.addEventListener('refresh', async () => {
        const oldPanel = table;
        const { page } = oldPanel.dataset || '';
        const { sort } = oldPanel.dataset || '';
        const { order } = oldPanel.dataset || '';
        const newPanel = await render(page, sort, order);
        const layout = document.querySelector('.winners-layout');
        layout?.insertBefore(newPanel, oldPanel);
        oldPanel.remove();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addWinnersRefresh);


/***/ }),

/***/ "./src/renders/winnersPage/winnersTable/winnersTable.ts":
/*!**************************************************************!*\
  !*** ./src/renders/winnersPage/winnersTable/winnersTable.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./src/api/index.ts");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _winnersTable_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winnersTable.scss */ "./src/renders/winnersPage/winnersTable/winnersTable.scss");
/* harmony import */ var _shared_carSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/carSvg */ "./src/shared/carSvg.ts");
/* harmony import */ var _EventListeners_refreshWinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventListeners/refreshWinners */ "./src/renders/winnersPage/winnersTable/EventListeners/refreshWinners.ts");
/* harmony import */ var _EventListeners_addWinsClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventListeners/addWinsClick */ "./src/renders/winnersPage/winnersTable/EventListeners/addWinsClick.ts");
/* harmony import */ var _EventListeners_addTimeClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventListeners/addTimeClick */ "./src/renders/winnersPage/winnersTable/EventListeners/addTimeClick.ts");







const WINNERS_PER_PAGE = 10;
const renderThArray = (headers) => {
    const cells = [];
    headers.forEach((a) => {
        const cell = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('th', ['th', 'table-header']);
        cell.innerText = a;
        if (a === 'wins') {
            (0,_EventListeners_addWinsClick__WEBPACK_IMPORTED_MODULE_5__.default)(cell);
            cell.classList.add('clickable');
            setTimeout(() => {
                const panel = document.querySelector('.winners-panel');
                if (panel.dataset.sort === 'wins') {
                    cell.innerText += panel.dataset.order === 'DESC' ? ' ↓' : ' ↑';
                }
            }, 100);
        }
        if (a === 'best time (seconds)') {
            (0,_EventListeners_addTimeClick__WEBPACK_IMPORTED_MODULE_6__.default)(cell);
            cell.classList.add('clickable');
            setTimeout(() => {
                const panel = document.querySelector('.winners-panel');
                if (panel.dataset.sort === 'time') {
                    cell.innerText += panel.dataset.order === 'DESC' ? ' ↓' : ' ↑';
                }
            }, 100);
        }
        cells.push(cell);
    });
    return cells;
};
const renderTableHeaders = () => {
    const tr = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('tr', ['tr', 'headers-tr']);
    const headers = renderThArray(['number', 'car', 'name', 'wins', 'best time (seconds)']);
    _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.appendChildren(tr, headers);
    return tr;
};
const renderTdCell = (data) => {
    const cell = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('td', ['td', 'table-cell']);
    cell.innerText = data;
    return cell;
};
const renderCarCell = (color) => {
    const td = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('td', ['td', 'table-cell', 'car-cell']);
    const svg = (0,_shared_carSvg__WEBPACK_IMPORTED_MODULE_3__.default)();
    svg.children[0].setAttribute('fill', color);
    td.appendChild(svg);
    return td;
};
const renderTableRow = async (winnerData, page, index) => {
    const place = ((page - 1) * WINNERS_PER_PAGE) + index + 1;
    const carData = await _api__WEBPACK_IMPORTED_MODULE_0__.default.garage.getCar(winnerData.id);
    const tr = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('tr', ['tr']);
    const rowData = {
        number: renderTdCell(place.toString()),
        car: renderCarCell(carData.color),
        name: renderTdCell(carData.name),
        wins: renderTdCell(winnerData.wins.toString()),
        time: renderTdCell(winnerData.time.toString()),
    };
    const cells = Object.values(rowData);
    _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.appendChildren(tr, cells);
    return tr;
};
const renderTableData = async (appendix, winners, page) => {
    winners.forEach(async (winner, index) => {
        const row = await renderTableRow(winner, page, index);
        appendix.appendChild(row);
    });
};
const renderWinnersTable = (winners, page) => {
    const table = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('table', ['winners-table', 'table']);
    const tableHeaders = renderTableHeaders();
    renderTableData(table, winners, page);
    _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.appendChildren(table, [tableHeaders]);
    table.appendChild(tableHeaders);
    (0,_EventListeners_refreshWinners__WEBPACK_IMPORTED_MODULE_4__.default)(table, renderWinnersTable);
    return table;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWinnersTable);


/***/ }),

/***/ "./src/shared/carDrive.ts":
/*!********************************!*\
  !*** ./src/shared/carDrive.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/api/index.ts");
/* harmony import */ var _raceStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raceStatus */ "./src/shared/raceStatus.ts");
/* harmony import */ var _refreshWinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refreshWinners */ "./src/shared/refreshWinners.ts");



const CAR_START_POSITION = 150;
const MS_IN_SECONDS = 1000;
const getDistance = (element) => {
    const trackWidth = element.parentElement.offsetWidth;
    return trackWidth - CAR_START_POSITION;
};
const stopCarAnimation = (carElement, distance) => {
    const car = carElement;
    car.removeAttribute('style');
    car.style.left = `${distance}px`;
};
const activateResetButton = (id) => {
    const resetButton = document.querySelector(`.reset-car-${id}`);
    resetButton?.removeAttribute('disabled');
};
const handleWinner = async (id, time) => {
    const winner = await _api__WEBPACK_IMPORTED_MODULE_0__.default.winners.getWinner(id);
    if (winner.status === 200) {
        const winnerData = await winner.json();
        if (time < winnerData.time) {
            _api__WEBPACK_IMPORTED_MODULE_0__.default.winners.updateWinner(id, winnerData.wins, time);
        }
        else {
            _api__WEBPACK_IMPORTED_MODULE_0__.default.winners.updateWinner(id, winnerData.wins + 1, winnerData.time);
        }
    }
    else {
        _api__WEBPACK_IMPORTED_MODULE_0__.default.winners.createWinner(id, 1, time);
    }
    setTimeout(_refreshWinners__WEBPACK_IMPORTED_MODULE_2__.default, 1000);
};
const startDrive = (carElement, moveTime, id, raceMode) => {
    _api__WEBPACK_IMPORTED_MODULE_0__.default.engine.drive(id)
        .then(() => {
        if (raceMode) {
            _raceStatus__WEBPACK_IMPORTED_MODULE_1__.default.updateRaceStatus();
            const winnerAnnouncement = document.querySelector('.winner-announcement');
            if (winnerAnnouncement.innerText === '') {
                const carName = document.querySelector(`.car-label-${id}`);
                winnerAnnouncement.innerText = `${carName.innerText} finished in ${moveTime}!`;
                handleWinner(id, Number(moveTime));
            }
        }
        activateResetButton(id);
    })
        .catch(() => {
        _raceStatus__WEBPACK_IMPORTED_MODULE_1__.default.updateRaceStatus();
        stopCarAnimation(carElement, carElement.offsetLeft);
        activateResetButton(id);
    });
};
const addCarAnimation = async (car, id) => {
    const carElement = car;
    const moveDistance = getDistance(car);
    const engineProps = await _api__WEBPACK_IMPORTED_MODULE_0__.default.engine.startEngine(id);
    const moveTime = (engineProps.distance / engineProps.velocity / MS_IN_SECONDS).toFixed(2);
    carElement.style.transition = `linear ${moveTime}s`;
    carElement.style.left = `${moveDistance}px`;
    return moveTime;
};
const disableStartButton = (id) => {
    const button = document.querySelector(`.start-car-${id}`);
    button.setAttribute('disabled', 'true');
};
const startCar = async (id, raceMode = false) => {
    const carElement = document.querySelector(`.car-image-${id}`).parentElement;
    const moveTime = await addCarAnimation(carElement, id);
    disableStartButton(id);
    startDrive(carElement, moveTime, id, raceMode);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startCar);


/***/ }),

/***/ "./src/shared/carSvg.ts":
/*!******************************!*\
  !*** ./src/shared/carSvg.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/shared/helpers.ts");

function getCarSvg() {
    const uselessDiv = _helpers__WEBPACK_IMPORTED_MODULE_0__.default.createDOM('div');
    uselessDiv.innerHTML = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1258.000000pt" height="372.000000pt"
  viewBox="0 0 1258.000000 372.000000" preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,372.000000) scale(0.100000,-0.100000)" stroke="none">
    <path d="M5025 3699 c-576 -25 -805 -60 -2235 -349 -789 -160 -1220 -241
-1515 -286 -156 -24 -210 -28 -410 -29 -204 0 -240 2 -315 22 -47 12 -115 24
-151 27 l-66 6 -35 -77 c-20 -45 -62 -179 -96 -313 -34 -130 -75 -276 -92
-325 -77 -220 -81 -236 -92 -379 -25 -331 11 -876 65 -986 28 -56 121 -122
265 -185 95 -42 320 -115 354 -115 12 0 16 24 21 127 4 71 7 175 7 233 0 160
17 308 45 390 58 170 175 349 326 495 108 104 219 182 360 250 127 61 199 75
419 82 352 11 547 -33 755 -171 265 -177 442 -422 529 -734 64 -226 70 -414
22 -615 -36 -150 -37 -144 32 -151 117 -11 1490 -41 3467 -75 319 -6 697 -13
840 -16 388 -8 838 -8 858 0 23 9 21 27 -16 168 -53 198 -61 499 -19 659 28
103 117 289 197 409 229 344 612 549 1025 549 210 0 416 -53 571 -146 219
-132 443 -353 543 -535 73 -133 116 -354 116 -590 0 -206 -4 -228 -90 -511
-13 -43 -21 -80 -17 -84 3 -4 107 -1 229 5 936 49 1188 87 1591 241 l59 22 -7
217 c-15 471 -21 560 -40 581 -28 30 -933 480 -967 480 -36 0 -37 -22 0 -49
23 -17 9 -15 -92 15 -346 102 -514 173 -549 232 -11 18 -38 43 -61 56 -106 62
-686 210 -1058 271 -296 48 -402 56 -847 62 l-424 5 -531 293 c-611 337 -936
521 -1020 578 -52 35 -57 41 -40 50 50 27 30 57 -54 80 -155 43 -564 101 -827
117 -192 11 -758 11 -1030 -1z m1055 -249 c578 -103 1192 -349 1744 -698 129
-82 299 -206 330 -241 11 -11 16 -24 12 -29 -4 -4 -224 -7 -489 -6 -508 0
-641 7 -1157 59 -1226 125 -2858 432 -2838 534 10 53 356 192 700 281 384 99
690 130 1233 126 300 -3 355 -6 465 -26z m4951 -2071 c73 -52 355 -555 362
-645 3 -35 -13 -39 -169 -49 l-119 -7 56 59 c66 68 71 79 54 119 -16 39 -59
59 -176 85 -187 41 -200 81 -33 99 130 15 143 18 150 44 9 37 -17 83 -114 206
-51 63 -92 118 -92 122 0 11 47 -9 81 -33z m1366 -209 c18 -35 16 -157 -3
-241 -31 -137 -94 -194 -251 -226 -147 -31 -166 6 -87 163 56 112 160 252 222
300 56 42 99 44 119 4z" />
    <path d="M1746 2064 c-420 -90 -724 -416 -786 -842 -17 -117 -8 -334 20 -442
23 -95 99 -259 154 -335 97 -135 255 -261 409 -328 152 -65 238 -82 417 -81
171 1 241 15 383 74 388 161 647 547 647 964 0 130 -13 208 -54 329 -97 285
-327 507 -644 621 -150 54 -397 72 -546 40z m395 -330 c182 -54 366 -215 453
-397 93 -192 87 -391 -16 -590 -64 -124 -191 -247 -318 -310 -207 -101 -375
-104 -575 -8 -299 143 -482 480 -410 755 70 267 278 481 537 550 75 21 260 20
329 0z" />
    <path d="M9335 2056 c-199 -40 -386 -149 -532 -312 -185 -206 -241 -345 -250
-624 -10 -319 51 -518 221 -720 159 -189 375 -312 618 -350 125 -20 352 -8
463 24 341 99 602 354 697 681 21 72 23 100 23 290 -1 249 -9 291 -92 465
-107 227 -258 379 -477 480 -131 61 -186 71 -406 76 -140 2 -215 0 -265 -10z
m385 -322 c36 -8 108 -35 160 -61 80 -39 108 -59 180 -132 132 -133 190 -277
190 -468 0 -328 -170 -571 -470 -673 -90 -30 -278 -38 -373 -16 -244 57 -448
257 -512 501 -23 87 -21 251 4 346 19 74 67 181 110 244 37 54 135 146 195
183 33 19 96 48 140 64 71 24 96 28 196 28 68 0 142 -7 180 -16z" />
  </g>
</svg>`;
    const carSvg = uselessDiv.children[0].cloneNode(true);
    return carSvg;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCarSvg);


/***/ }),

/***/ "./src/shared/helpers.ts":
/*!*******************************!*\
  !*** ./src/shared/helpers.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const { body } = document;
const createDOM = (tag, classNames = [], attributes) => {
    const newElement = document.createElement(tag);
    newElement.classList.add(...classNames);
    if (attributes) {
        const keys = Object.keys(attributes);
        const values = Object.values(attributes);
        for (let i = 0; i < keys.length; i += 1) {
            newElement.setAttribute(keys[i], values[i]);
        }
    }
    return newElement;
};
const appendChildren = (target, children) => {
    children.forEach((element) => {
        target.appendChild(element);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ body, createDOM, appendChildren });


/***/ }),

/***/ "./src/shared/mouseFreeze.ts":
/*!***********************************!*\
  !*** ./src/shared/mouseFreeze.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const prevent = (e) => {
    e.preventDefault();
};
const freezeMouse = () => {
    window.addEventListener('click', prevent);
};
const unfreezeMouse = () => {
    window.removeEventListener('click', prevent);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ freezeMouse, unfreezeMouse });


/***/ }),

/***/ "./src/shared/raceStatus.ts":
/*!**********************************!*\
  !*** ./src/shared/raceStatus.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mouseFreeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouseFreeze */ "./src/shared/mouseFreeze.ts");

let carsPerPage = 7;
let carFinished = 0;
const setCarsNumber = (carsNumber) => {
    carsPerPage = carsNumber;
};
const checkRaceStatus = () => {
    if (carFinished === carsPerPage) {
        const resetButton = document.querySelector('.reset-button');
        _mouseFreeze__WEBPACK_IMPORTED_MODULE_0__.default.unfreezeMouse();
        resetButton?.removeAttribute('disabled');
        carFinished = 0;
    }
};
const updateRaceStatus = () => {
    carFinished += 1;
    checkRaceStatus();
};
const resetRaceStatus = () => {
    carFinished = 0;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    setCarsNumber, checkRaceStatus, updateRaceStatus, resetRaceStatus,
});


/***/ }),

/***/ "./src/shared/refreshGarage.ts":
/*!*************************************!*\
  !*** ./src/shared/refreshGarage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const refreshGarage = () => {
    const garagePanel = document.querySelector('.garage-panel');
    const refresh = new CustomEvent('refresh');
    garagePanel.dispatchEvent(refresh);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshGarage);


/***/ }),

/***/ "./src/shared/refreshWinners.ts":
/*!**************************************!*\
  !*** ./src/shared/refreshWinners.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const refreshWinners = () => {
    const winnersPanel = document.querySelector('.winners-panel');
    const refresh = new CustomEvent('refresh');
    winnersPanel.dispatchEvent(refresh);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshWinners);


/***/ }),

/***/ "./src/shared/router.ts":
/*!******************************!*\
  !*** ./src/shared/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _renders_pagesRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renders/pagesRender */ "./src/renders/pagesRender.ts");

function router(container) {
    const layout = container;
    const routing = [
        {
            name: 'garage',
            render: () => {
                _renders_pagesRender__WEBPACK_IMPORTED_MODULE_0__.default.showGarage();
            },
        },
        {
            name: 'winners',
            render: () => {
                _renders_pagesRender__WEBPACK_IMPORTED_MODULE_0__.default.showWinners();
            },
        },
    ];
    const defaultRoute = {
        name: 'default',
        render: () => {
            _renders_pagesRender__WEBPACK_IMPORTED_MODULE_0__.default.startRender(layout);
        },
    };
    window.onpopstate = () => {
        const currentRouteName = window.location.hash.slice(1);
        const currentRoute = routing.find((p) => p.name === currentRouteName);
        (currentRoute || defaultRoute).render();
    };
    window.onload = () => defaultRoute.render();
}


/***/ }),

/***/ "./src/assets/flag.png":
/*!*****************************!*\
  !*** ./src/assets/flag.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/flag.png";

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
/* harmony import */ var _shared_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/router */ "./src/shared/router.ts");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/helpers */ "./src/shared/helpers.ts");
/* harmony import */ var _renders_navigationRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renders/navigationRender */ "./src/renders/navigationRender.ts");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");





const root = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('div', ['root']);
_shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.body.appendChild(root);
root.appendChild((0,_renders_navigationRender__WEBPACK_IMPORTED_MODULE_2__.default)());
const layout = _shared_helpers__WEBPACK_IMPORTED_MODULE_1__.default.createDOM('div', ['layout']);
root.appendChild(layout);
(0,_shared_router__WEBPACK_IMPORTED_MODULE_0__.default)(layout);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvY29udHJvbFBhbmVsL2NvbnRyb2xQYW5lbC5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC9nYXJhZ2VQYW5lbC5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC90cmFjay9jYXIvY2FyLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2dhcmFnZVBhbmVsL3RyYWNrL2ZsYWcvZmxhZy5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC90cmFjay90cmFjay5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9uYXZpZ2F0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL3dpbm5lcnNQYWdlL3dpbm5lcnNQYW5lbC5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy93aW5uZXJzUGFnZS93aW5uZXJzVGFibGUvd2lubmVyc1RhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2NvbnRyb2xQYW5lbC9jb250cm9sUGFuZWwuc2Nzcz9mZDI4Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC9nYXJhZ2VQYW5lbC5zY3NzP2Q4YzAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2dhcmFnZVBhbmVsL3RyYWNrL2Nhci9jYXIuc2Nzcz9iYTUxIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC90cmFjay9mbGFnL2ZsYWcuc2Nzcz85YjVhIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC90cmFjay90cmFjay5zY3NzPzQwZTgiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL25hdmlnYXRpb24uc2Nzcz81OTQ0Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy93aW5uZXJzUGFnZS93aW5uZXJzUGFuZWwuc2Nzcz9hMWIwIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy93aW5uZXJzUGFnZS93aW5uZXJzVGFibGUvd2lubmVyc1RhYmxlLnNjc3M/YTZjNyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvYXBpL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2FwaS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcGkvZ2FyYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvYXBpL2luZGV4LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvYXBpL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2NvbnRyb2xQYW5lbC9jb250cm9sUGFuZWwudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2NvbnRyb2xQYW5lbC9ldmVudExpc3RlbmVycy9jcmVhdGVDbGljay50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvY29udHJvbFBhbmVsL2V2ZW50TGlzdGVuZXJzL2dlbmVyYXRlQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2NvbnRyb2xQYW5lbC9ldmVudExpc3RlbmVycy9yYWNlQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2NvbnRyb2xQYW5lbC9ldmVudExpc3RlbmVycy9yZXNldENsaWNrLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9jb250cm9sUGFuZWwvZXZlbnRMaXN0ZW5lcnMvdXBkYXRlQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2dhcmFnZVBhZ2VCdXR0b25zL2V2ZW50TGlzdGVuZXJzL25leHRQYWdlQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2dhcmFnZVBhZ2VCdXR0b25zL2V2ZW50TGlzdGVuZXJzL3ByZXZpb3VzUGFnZUNsaWNrLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYWdlQnV0dG9ucy9nYXJhZ2VQYWdlQnV0dG9ucy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvZ2FyYWdlUGFnZUJ1dHRvbnMvZ2FyYWdlUGFnZUJ1dHRvbnNTdGF0ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvZ2FyYWdlUGFuZWwvZXZlbnRMaXN0ZW5lcnMvcmVmcmVzaGdhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvZ2FyYWdlUGFuZWwvZ2FyYWdlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2dhcmFnZVBhbmVsL3RyYWNrL2Nhci9jYXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL2dhcmFnZVBhbmVsL3RyYWNrL2V2ZW50TGlzdGVuZXJzL3JlbW92ZUNsaWNrLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC90cmFjay9ldmVudExpc3RlbmVycy9yZXNldENhckNsaWNrLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC90cmFjay9ldmVudExpc3RlbmVycy9zZWxlY3RDbGljay50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvZ2FyYWdlUGFuZWwvdHJhY2svZXZlbnRMaXN0ZW5lcnMvc3RhcnRDYXJDbGljay50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvZ2FyYWdlUGFuZWwvdHJhY2svZmxhZy9mbGFnLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC90cmFjay90cmFjay50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvbmF2aWdhdGlvblJlbmRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvcGFnZXNSZW5kZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL3dpbm5lcnNQYWdlQnV0dG9ucy9ldmVudExpc3RlbmVycy9uZXh0UGFnZUNsaWNrLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy93aW5uZXJzUGFnZUJ1dHRvbnMvZXZlbnRMaXN0ZW5lcnMvcHJldmlvdXNQYWdlQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL3dpbm5lcnNQYWdlQnV0dG9ucy93aW5uZXJzUGFnZUJ1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL3dpbm5lcnNQYWdlQnV0dG9ucy93aW5uZXJzUGFnZUJ1dHRvbnNTdGF0ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JlbmRlcnMvd2lubmVyc1BhZ2Uvd2lubmVyc1BhbmVsLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy93aW5uZXJzUGFnZS93aW5uZXJzVGFibGUvRXZlbnRMaXN0ZW5lcnMvYWRkVGltZUNsaWNrLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy93aW5uZXJzUGFnZS93aW5uZXJzVGFibGUvRXZlbnRMaXN0ZW5lcnMvYWRkV2luc0NsaWNrLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVuZGVycy93aW5uZXJzUGFnZS93aW5uZXJzVGFibGUvRXZlbnRMaXN0ZW5lcnMvcmVmcmVzaFdpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZW5kZXJzL3dpbm5lcnNQYWdlL3dpbm5lcnNUYWJsZS93aW5uZXJzVGFibGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zaGFyZWQvY2FyRHJpdmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zaGFyZWQvY2FyU3ZnLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2hhcmVkL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zaGFyZWQvbW91c2VGcmVlemUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zaGFyZWQvcmFjZVN0YXR1cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NoYXJlZC9yZWZyZXNoR2FyYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2hhcmVkL3JlZnJlc2hXaW5uZXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc2hhcmVkL3JvdXRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMERBQTBELGtCQUFrQiw2QkFBNkIsbUNBQW1DLHdCQUF3QixpQkFBaUIscUJBQXFCLGtCQUFrQixrQkFBa0IsOEJBQThCLGtCQUFrQiwrQkFBK0IsR0FBRyxXQUFXLGtCQUFrQiwwQkFBMEIsbUNBQW1DLHlCQUF5QixpQkFBaUIsR0FBRyxZQUFZLGlCQUFpQixpQkFBaUIsOEJBQThCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLDRCQUE0QiwrQkFBK0IsR0FBRyxrQkFBa0IsZUFBZSxHQUFHLG1DQUFtQyxxQkFBcUIsaUJBQWlCLDhCQUE4QixxQkFBcUIscUJBQXFCLDhCQUE4QixHQUFHLDZDQUE2QywwQkFBMEIsR0FBRyxtQ0FBbUMscUJBQXFCLGlCQUFpQiw4QkFBOEIscUJBQXFCLHFCQUFxQiw4QkFBOEIsR0FBRyw2Q0FBNkMsMEJBQTBCLEdBQUcsOEJBQThCLDJC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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7QUNmcUM7QUFDSjtBQUN5QjtBQUM5QjtBQUNBO0FBRTVCLE1BQU0sSUFBSSxHQUFtQiw4REFBVyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDMUQscUVBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrRUFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDckMsTUFBTSxNQUFNLEdBQW1CLDhEQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXpCLHVEQUFNLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguOWIxYzIzMTg2NzAyN2MwZWYxNmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250cm9sLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y3ZjdmNztcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG59XFxuXFxuLmlucHV0LXRleHQge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaW5wdXQtdGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5pbnB1dC1jb2xvciB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZm9ybS1idXR0b24sIC5jb250cm9sLWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG59XFxuLmZvcm0tYnV0dG9uOmhvdmVyLCAuY29udHJvbC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZm9ybS1idXR0b24sIC5jb250cm9sLWJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG59XFxuLmZvcm0tYnV0dG9uOmhvdmVyLCAuY29udHJvbC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29udHJvbC1idXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmNvbnRyb2wtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uY29udHJvbC1idXR0b24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVuZGVycy9jb250cm9sUGFuZWwvY29udHJvbFBhbmVsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUVBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJDOUJVO0FEMEJaOztBQU9BO0VBQ0UsWUFBQTtBQUpGO0FBTUU7RUFDRSwwQkFBQTtBQUpKOztBQVFBO0VBQ0UsVUFBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJDcERVO0FEOENaO0FBUUU7RUFDRSxxQkFBQTtBQU5KOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJDbEVVO0FEMERaO0FBVUU7RUFDRSxxQkFBQTtBQVJKOztBQVlBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBRUEsWUFBQTtBQVZGOztBQWFBO0VBQ0UsWUFBQTtBQVZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XFxyXFxuXFxyXFxuLmNvbnRyb2wtcGFuZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICRtYWluV2hpdGU7XFxyXFxuICBib3JkZXItdG9wOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluV2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb2xvciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b24sIC5jb250cm9sLWJ1dHRvbiB7XFxyXFxuICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbldoaXRlO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9uLCAuY29udHJvbC1idXR0b24ge1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNpdGlvbjogLjNzO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5XaGl0ZTtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sLWJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVwiLFwiJG1haW5XaGl0ZTogI2Y3ZjdmNztcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FyYWdlLXBhbmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdhcmFnZS1jYXItY291bnQsXFxuLmdhcmFnZS1wYWdlLW51bWJlciB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbn1cXG5cXG4uZ2FyYWdlLWNhci1jb3VudCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZ2FyYWdlLXBhZ2UtbnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2FyLXRyYWNrcyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmN2Y3Zjc7XFxufVxcblxcbi53aW5uZXItYW5ub3VuY2VtZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDBweCAyMHB4ICNmN2Y3ZjcpO1xcbiAgdG9wOiAyNXB4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3JlbmRlcnMvZ2FyYWdlUGFuZWwvZ2FyYWdlUGFuZWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7O0VBRUUsaUJBQUE7RUFDQSxjQ1RVO0FEUVo7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGNDNUJVO0VENkJWLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcXHJcXG5cXHJcXG4uZ2FyYWdlLXBhbmVsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcmFnZS1jYXItY291bnQsXFxyXFxuLmdhcmFnZS1wYWdlLW51bWJlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIGNvbG9yOiAkbWFpbldoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FyYWdlLWNhci1jb3VudCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FyYWdlLXBhZ2UtbnVtYmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXRyYWNrcyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRtYWluV2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXItYW5ub3VuY2VtZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbG9yOiAkbWFpbldoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDBweCAyMHB4ICRtYWluV2hpdGUpO1xcclxcbiAgdG9wOiAyNXB4O1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXHJcXG59XCIsXCIkbWFpbldoaXRlOiAjZjdmN2Y3O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXItd3JhcHBlcixcXG4uY2FyLWltYWdlIHtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uY2FyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3JlbmRlcnMvZ2FyYWdlUGFuZWwvdHJhY2svY2FyL2Nhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi92YXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLmNhci13cmFwcGVyLFxcclxcbi5jYXItaW1hZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXItd3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAkQ09OVFJPTF9QQU5FTF9XSURUSCArIDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mbGFnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDUwcHg7XFxuICBtYXgtd2lkdGg6IDUwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZW5kZXJzL2dhcmFnZVBhbmVsL3RyYWNrL2ZsYWcvZmxhZy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mbGFnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAxNTBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDUwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50cmFjayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiA1cHggZGFzaGVkIGdyZXk7XFxuICBtYXJnaW46IDUwcHggMCA1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLnRyYWNrOmxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uY2FyLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHJlZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTM1cHg7XFxuICBsZWZ0OiAyNTBweDtcXG59XFxuXFxuLmNhci1lZGl0LXBhbmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDYwcHg7XFxuICB0b3A6IC00MHB4O1xcbn1cXG5cXG4uY2FyLWVkaXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5jYXItZWRpdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY2FyLXNlbGVjdC1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5jYXItY29udHJvbC1wYW5lbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdG9wOiAtNDVweDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5jYXItc3RhcnQtYnV0dG9uLFxcbi5jYXItcmVzZXQtYnV0dG9uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNhci1zdGFydC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMzUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwZmYwMDtcXG59XFxuLmNhci1zdGFydC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuODUpO1xcbn1cXG4uY2FyLXN0YXJ0LWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNTUpO1xcbn1cXG4uY2FyLXN0YXJ0LWJ1dHRvbjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4zNSk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jYXItcmVzZXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM1KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjAwMDA7XFxufVxcbi5jYXItcmVzZXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjg1KTtcXG59XFxuLmNhci1yZXNldC1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjU1KTtcXG59XFxuLmNhci1yZXNldC1idXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVuZGVycy9nYXJhZ2VQYW5lbC90cmFjay90cmFjay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUZGO0FBSUU7RUFDRSxtQkFBQTtBQUZKOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UseUJDN0JVO0VEOEJWLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFLRTtFQUNFLHFCQUFBO0FBSEo7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7QUFKRjs7QUFPQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSx1Q0FBQTtFQUNBLHlCQUFBO0FBSkY7QUFNRTtFQUNFLHVDQUFBO0FBSko7QUFPRTtFQUNFLHVDQUFBO0FBTEo7QUFRRTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVVBO0VBQ0UsdUNBQUE7RUFDQSx5QkFBQTtBQVBGO0FBU0U7RUFDRSx1Q0FBQTtBQVBKO0FBVUU7RUFDRSx1Q0FBQTtBQVJKO0FBV0U7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7QUFUSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi50cmFjayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXItYm90dG9tOiA1cHggZGFzaGVkIGdyZXk7XFxyXFxuICBtYXJnaW46IDUwcHggMCA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG5cXHJcXG4gICY6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhci1sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC0zNXB4O1xcclxcbiAgbGVmdDogJENPTlRST0xfUEFORUxfV0lEVEggKyAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1lZGl0LXBhbmVsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6ICRDT05UUk9MX1BBTkVMX1dJRFRIICsgMTBweDtcXHJcXG4gIHRvcDogLTQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXItZWRpdC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5XaGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogLjNzO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhci1zZWxlY3QtYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWNvbnRyb2wtcGFuZWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHRvcDogLTQ1cHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXN0YXJ0LWJ1dHRvbixcXHJcXG4uY2FyLXJlc2V0LWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1zdGFydC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMGZmMDAsICRhbHBoYTogLjM1KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGZmMDA7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMGZmMDAsICRhbHBoYTogLjg1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMGZmMDAsICRhbHBoYTogLjU1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6ZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwZmYwMCwgJGFscGhhOiAuMzUpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXItcmVzZXQtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmYwMDAwLCAkYWxwaGE6IC4zNSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmYwMDAwO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmYwMDAwLCAkYWxwaGE6IC44NSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmYwMDAwLCAkYWxwaGE6IC41NSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZjAwMDAsICRhbHBoYTogLjM1KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbn1cIixcIiRtYWluV2hpdGU6ICNmN2Y3Zjc7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdiB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y3ZjdmNztcXG59XFxuXFxuLm5hdi11bCB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm5hdi1saSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubmF2LWEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5uYXYtYTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4ubmF2LWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3JlbmRlcnMvbmF2aWdhdGlvbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkbWFpbldoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG9cXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWEge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcztcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53aW5uZXJzLWxheW91dCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi53aW5uZXJzLWNvdW50LCAucGFnZS1udW1iZXIge1xcbiAgY29sb3I6ICNmN2Y3Zjc7XFxufVxcblxcbi53aW5uZXJzLWNvdW50IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnBhZ2UtbnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbjogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3JlbmRlcnMvd2lubmVyc1BhZ2Uvd2lubmVyc1BhbmVsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGNDUlU7QURPWjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xcclxcblxcclxcbi53aW5uZXJzLWxheW91dCB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJzLWNvdW50LCAucGFnZS1udW1iZXIge1xcclxcbiAgY29sb3I6ICRtYWluV2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJzLWNvdW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtbnVtYmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XCIsXCIkbWFpbldoaXRlOiAjZjdmN2Y3O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53aW5uZXJzLXRhYmxlIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmN2Y3Zjc7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGgsIC50ZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi50aCB7XFxuICBjb2xvcjogcmVkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50YWJsZS1jZWxsIHtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbn1cXG5cXG4uY2FyLWNlbGwgc3ZnIHtcXG4gIG1heC13aWR0aDogNC43NXJlbTtcXG4gIG1heC1oZWlnaHQ6IDEuMjVyZW07XFxufVxcblxcbi5jbGlja2FibGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVuZGVycy93aW5uZXJzUGFnZS93aW5uZXJzVGFibGUvd2lubmVyc1RhYmxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsY0NyQlU7QURvQlo7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBTUE7RUFDRSxlQUFBO0FBSEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcXHJcXG5cXHJcXG4ud2lubmVycy10YWJsZSB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAkbWFpbldoaXRlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRoLCAudGQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJG1haW5XaGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGggeyAgXFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgIFxcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlLWNlbGwge1xcclxcbiAgY29sb3I6ICRtYWluV2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXItY2VsbCB7XFxyXFxuICBzdmcge1xcclxcbiAgICBtYXgtd2lkdGg6IDQuNzVyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEuMjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGU6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIixcIiRtYWluV2hpdGU6ICNmN2Y3Zjc7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5nYXJhZ2UtbGF5b3V0LCAud2lubmVycy1sYXlvdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmN1cnJlbnQtcGFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnBhZ2UtYnV0dG9ucyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wYWdlLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnBhZ2UtYnV0dG9uOm50aC1vZi10eXBlKDEpIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnBhZ2UtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnBhZ2UtYnV0dG9uOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBQTtFQUNBLDRDQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7QUFESjs7QUFLQTtFQUNFLHNCQUFBO0FBRkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5nYXJhZ2UtbGF5b3V0LCAud2lubmVycy1sYXlvdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtcGFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtYnV0dG9ucyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogLjNzO1xcclxcblxcclxcbiAgJjpudGgtb2YtdHlwZSgxKSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cXHJcXG46Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbyxcXHJcXG5jYW52YXMsXFxyXFxudmlkZW8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICpkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICp6b29tOiAxO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxyXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXFxyXFxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xcclxcbiAqICAgIGBlbWAgdW5pdHMuXFxyXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxyXFxuICogICAgdXNlciB6b29tLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTphY3RpdmUsXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcclxcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxyXFxuICovXFxyXFxuXFxyXFxuZmlndXJlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcclxcbiAqL1xcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXFxyXFxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXFxyXFxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMiAqL1xcclxcbiAgICAqbWFyZ2luLWxlZnQ6IC03cHg7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcclxcbiAqICAgIGFuZCBDaHJvbWUuXFxyXFxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAzICovXFxyXFxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXHJcXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxyXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXHJcXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXFxyXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxyXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxyXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcclxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxyXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcclxcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxcclxcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcclxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXHJcXG4gICAgKm92ZXJmbG93OiB2aXNpYmxlOyAgLyogNCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxcclxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXFxyXFxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG4gICAgKmhlaWdodDogMTNweDsgLyogMyAqL1xcclxcbiAgICAqd2lkdGg6IDEzcHg7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXHJcXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXHJcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxyXFxuICogb24gT1MgWC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXFxyXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcclxcbiAqL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46Oi1tb3otc2VsZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNocm9tZWZyYW1lIHtcXHJcXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgcGFkZGluZzogMC4yZW0gMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFTO0NBQ1YsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQSx5REFBeUQ7QUFDekQ7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxX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QUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cXHJcXG46Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbyxcXHJcXG5jYW52YXMsXFxyXFxudmlkZW8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICpkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICp6b29tOiAxO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxyXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXFxyXFxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xcclxcbiAqICAgIGBlbWAgdW5pdHMuXFxyXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxyXFxuICogICAgdXNlciB6b29tLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTphY3RpdmUsXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcclxcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxyXFxuICovXFxyXFxuXFxyXFxuZmlndXJlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcclxcbiAqL1xcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXFxyXFxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXFxyXFxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMiAqL1xcclxcbiAgICAqbWFyZ2luLWxlZnQ6IC03cHg7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcclxcbiAqICAgIGFuZCBDaHJvbWUuXFxyXFxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAzICovXFxyXFxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXHJcXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxyXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXHJcXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXFxyXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxyXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxyXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcclxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxyXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcclxcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxcclxcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcclxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXHJcXG4gICAgKm92ZXJmbG93OiB2aXNpYmxlOyAgLyogNCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxcclxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXFxyXFxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG4gICAgKmhlaWdodDogMTNweDsgLyogMyAqL1xcclxcbiAgICAqd2lkdGg6IDEzcHg7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXHJcXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXHJcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxyXFxuICogb24gT1MgWC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXFxyXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcclxcbiAqL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46Oi1tb3otc2VsZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNocm9tZWZyYW1lIHtcXHJcXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgcGFkZGluZzogMC4yZW0gMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udHJvbFBhbmVsLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYXJhZ2VQYW5lbC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mbGFnLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90cmFjay5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2aWdhdGlvbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2lubmVyc1BhbmVsLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aW5uZXJzVGFibGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcblxuZXhwb3J0IGNvbnN0IEdBUkFHRV9VUkwgPSBgJHtCQVNFX1VSTH0vZ2FyYWdlYDtcbmV4cG9ydCBjb25zdCBFTkdJTkVfVVJMID0gYCR7QkFTRV9VUkx9L2VuZ2luZWA7XG5leHBvcnQgY29uc3QgV0lOTkVSU19VUkwgPSBgJHtCQVNFX1VSTH0vd2lubmVyc2A7XG5cbmV4cG9ydCBjb25zdCBDQVJTX1BFUl9HQVJBR0VfUEFHRSA9IDc7XG5leHBvcnQgY29uc3QgQ0FSU19QRVJfV0lOTkVSU19QQUdFID0gMTA7XG4iLCJpbXBvcnQgeyBFTkdJTkVfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBzdGFydEVuZ2luZSA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiAoYXdhaXQgZmV0Y2goYCR7RU5HSU5FX1VSTH0/aWQ9JHtpZH0mc3RhdHVzPXN0YXJ0ZWRgKSkuanNvbigpO1xuXG5jb25zdCBzdG9wRW5naW5lID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IChhd2FpdCBmZXRjaChgJHtFTkdJTkVfVVJMfT9pZD0ke2lkfSZzdGF0dXM9c3RvcHBlZGApKS5qc29uKCk7XG5cbmNvbnN0IGRyaXZlID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IChhd2FpdCBmZXRjaChgJHtFTkdJTkVfVVJMfT9pZD0ke2lkfSZzdGF0dXM9ZHJpdmVgKSkuanNvbigpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXJ0RW5naW5lLCBzdG9wRW5naW5lLCBkcml2ZSxcbn07XG4iLCJpbXBvcnQgeyBHQVJBR0VfVVJMLCBDQVJTX1BFUl9HQVJBR0VfUEFHRSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0Q2FycyA9IGFzeW5jIChwYWdlID0gMCwgbGltaXQgPSBDQVJTX1BFUl9HQVJBR0VfUEFHRSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0dBUkFHRV9VUkx9P19wYWdlPSR7cGFnZX0mX2xpbWl0PSR7bGltaXR9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogYXdhaXQgcmVzcG9uc2UuanNvbigpLFxuICAgIGNvdW50OiByZXNwb25zZS5oZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpLFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q2FyID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtHQVJBR0VfVVJMfS8ke2lkfWApO1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBjcmVhdGVDYXIgPSBhc3luYyAobmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBuYW1lLFxuICAgIGNvbG9yLFxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goR0FSQUdFX1VSTCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVxdWVzdC5qc29uKCk7XG59O1xuXG5jb25zdCB1cGRhdGVDYXIgPSBhc3luYyAoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBuYW1lLFxuICAgIGNvbG9yLFxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7R0FSQUdFX1VSTH0vJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcXVlc3QuanNvbigpO1xufTtcblxuY29uc3QgZGVsZXRlQ2FyID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke0dBUkFHRV9VUkx9LyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pO1xuXG4gIHJldHVybiByZXF1ZXN0LnN0YXR1cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0Q2FycyxcbiAgZ2V0Q2FyLFxuICBjcmVhdGVDYXIsXG4gIHVwZGF0ZUNhcixcbiAgZGVsZXRlQ2FyLFxufTtcbiIsImltcG9ydCBnYXJhZ2UgZnJvbSAnLi9nYXJhZ2UnO1xuaW1wb3J0IGVuZ2luZSBmcm9tICcuL2VuZ2luZSc7XG5pbXBvcnQgd2lubmVycyBmcm9tICcuL3dpbm5lcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7IGdhcmFnZSwgZW5naW5lLCB3aW5uZXJzIH07XG4iLCJpbXBvcnQgeyBXSU5ORVJTX1VSTCwgQ0FSU19QRVJfV0lOTkVSU19QQUdFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRXaW5uZXJzID0gYXN5bmMgKHBhZ2UgPSAxLCBzb3J0Pzogc3RyaW5nLCBvcmRlcj86IHN0cmluZykgPT4ge1xuICBsZXQgdXJsID0gYCR7V0lOTkVSU19VUkx9P19wYWdlPSR7cGFnZX0mX2xpbWl0PSR7Q0FSU19QRVJfV0lOTkVSU19QQUdFfWA7XG4gIGlmIChzb3J0ICYmIG9yZGVyKSB7XG4gICAgdXJsICs9IGAmX3NvcnQ9JHtzb3J0fSZfb3JkZXI9JHtvcmRlcn1gO1xuICB9IGVsc2UgaWYgKHNvcnQpIHtcbiAgICB1cmwgKz0gYCZfc29ydD0ke3NvcnR9Jl9vcmRlcj1ERVNDYDtcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogYXdhaXQgcmVzcG9uc2UuanNvbigpLFxuICAgIGNvdW50OiByZXNwb25zZS5oZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpLFxuICB9O1xufTtcbmNvbnN0IGdldFdpbm5lciA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiAoKGZldGNoKGAke1dJTk5FUlNfVVJMfS8ke2lkfWApKSk7XG5cbmNvbnN0IGNyZWF0ZVdpbm5lciA9IGFzeW5jIChpZDogbnVtYmVyLCB3aW5zOiBudW1iZXIsIHRpbWU6IG51bWJlcikgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgaWQsXG4gICAgd2lucyxcbiAgICB0aW1lLFxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goV0lOTkVSU19VUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcXVlc3QuanNvbigpO1xufTtcblxuY29uc3QgZGVsZXRlV2lubmVyID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke1dJTk5FUlNfVVJMfS8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICB9KTtcblxuICByZXR1cm4gcmVxdWVzdC5qc29uKCk7XG59O1xuXG5jb25zdCB1cGRhdGVXaW5uZXIgPSBhc3luYyAoaWQ6IG51bWJlciwgd2luczogbnVtYmVyLCB0aW1lOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHdpbnMsXG4gICAgdGltZSxcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke1dJTk5FUlNfVVJMfS8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVxdWVzdC5qc29uKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFdpbm5lcnMsIGdldFdpbm5lciwgY3JlYXRlV2lubmVyLCB1cGRhdGVXaW5uZXIsIGRlbGV0ZVdpbm5lcixcbn07XG4iLCJpbXBvcnQgXyBmcm9tICcuLi8uLi9zaGFyZWQvaGVscGVycyc7XG5pbXBvcnQgYWRkVXBkYXRlQ2xpY2sgZnJvbSAnLi9ldmVudExpc3RlbmVycy91cGRhdGVDbGljayc7XG5pbXBvcnQgJy4vY29udHJvbFBhbmVsLnNjc3MnO1xuaW1wb3J0IGFkZENyZWF0ZUNsaWNrIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMvY3JlYXRlQ2xpY2snO1xuaW1wb3J0IGFkZEdlbmVyYXRlQ2xpY2sgZnJvbSAnLi9ldmVudExpc3RlbmVycy9nZW5lcmF0ZUNsaWNrJztcbmltcG9ydCBhZGRSYWNlQ2xpY2sgZnJvbSAnLi9ldmVudExpc3RlbmVycy9yYWNlQ2xpY2snO1xuaW1wb3J0IGFkZFJlc2V0Q2xpY2sgZnJvbSAnLi9ldmVudExpc3RlbmVycy9yZXNldENsaWNrJztcblxuY29uc3QgcmVuZGVyRm9ybSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZm9ybSA9IF8uY3JlYXRlRE9NKCdmb3JtJywgW2Ake25hbWV9LWZvcm1gLCAnZm9ybSddKTtcbiAgY29uc3QgbmFtZUF0dHJpYnV0ZXMgPSB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHBsYWNlaG9sZGVyOiAnbmFtZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH07XG4gIGNvbnN0IG5hbWVJbnB1dCA9IF8uY3JlYXRlRE9NKCdpbnB1dCcsIFtgJHtuYW1lfS1pbnB1dC10ZXh0YCwgJ2lucHV0LXRleHQnLCAnaW5wdXQnXSwgbmFtZUF0dHJpYnV0ZXMpO1xuICBjb25zdCBjb2xvcklucHV0ID0gXy5jcmVhdGVET00oJ2lucHV0JywgW2Ake25hbWV9LWlucHV0LWNvbG9yYCwgJ2lucHV0LWNvbG9yJywgJ2lucHV0J10sIHsgdHlwZTogJ2NvbG9yJyB9KTtcbiAgY29uc3QgYnV0dG9uID0gXy5jcmVhdGVET00oJ2J1dHRvbicsIFtgJHtuYW1lfS1idXR0b25gLCAnZm9ybS1idXR0b24nLCAnYnV0dG9uJ10pO1xuICBidXR0b24uaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuXG4gIF8uYXBwZW5kQ2hpbGRyZW4oZm9ybSwgW25hbWVJbnB1dCwgY29sb3JJbnB1dCwgYnV0dG9uXSk7XG5cbiAgcmV0dXJuIGZvcm07XG59O1xuXG5jb25zdCByZW5kZXJDb250cm9sQnV0dG9ucyA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IF8uY3JlYXRlRE9NKCdkaXYnLCBbJ2NvbnRyb2wtYnV0dG9ucyddKTtcbiAgY29uc3QgcmFjZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5fLmNyZWF0ZURPTSgnYnV0dG9uJywgWydyYWNlLWJ1dHRvbicsICdjb250cm9sLWJ1dHRvbicsICdidXR0b24nXSk7XG4gIHJhY2VCdXR0b24uaW5uZXJUZXh0ID0gJ3JhY2UnO1xuICBhZGRSYWNlQ2xpY2socmFjZUJ1dHRvbik7XG5cbiAgY29uc3QgcmVzZXRCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+Xy5jcmVhdGVET00oJ2J1dHRvbicsIFsncmVzZXQtYnV0dG9uJywgJ2NvbnRyb2wtYnV0dG9uJywgJ2J1dHRvbiddLCB7IGRpc2FibGVkOiAndHJ1ZScgfSk7XG4gIHJlc2V0QnV0dG9uLmlubmVyVGV4dCA9ICdyZXNldCc7XG4gIGFkZFJlc2V0Q2xpY2socmVzZXRCdXR0b24pO1xuXG4gIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50Pl8uY3JlYXRlRE9NKCdidXR0b24nLCBbJ2dlbmVyYXRlLWJ1dHRvbicsICdjb250cm9sLWJ1dHRvbicsICdidXR0b24nXSk7XG4gIGdlbmVyYXRlQnV0dG9uLmlubmVyVGV4dCA9ICdnZW5lcmF0ZSc7XG4gIGFkZEdlbmVyYXRlQ2xpY2soZ2VuZXJhdGVCdXR0b24pO1xuXG4gIF8uYXBwZW5kQ2hpbGRyZW4oYnV0dG9ucywgW3JhY2VCdXR0b24sIHJlc2V0QnV0dG9uLCBnZW5lcmF0ZUJ1dHRvbl0pO1xuXG4gIHJldHVybiBidXR0b25zO1xufTtcblxuY29uc3QgcmVuZGVyQ29udHJvbFBhbmVsID0gKCkgPT4ge1xuICBjb25zdCBwYW5lbCA9IF8uY3JlYXRlRE9NKCdkaXYnLCBbJ2NvbnRyb2wtcGFuZWwnXSk7XG4gIGNvbnN0IGNyZWF0ZUZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PnJlbmRlckZvcm0oJ2NyZWF0ZScpO1xuICBhZGRDcmVhdGVDbGljayhjcmVhdGVGb3JtKTtcbiAgY29uc3QgdXBkYXRlRm9ybSA9IDxIVE1MRm9ybUVsZW1lbnQ+cmVuZGVyRm9ybSgndXBkYXRlJyk7XG4gIGFkZFVwZGF0ZUNsaWNrKHVwZGF0ZUZvcm0pO1xuICBjb25zdCBjb250cm9sQnV0dG9ucyA9IHJlbmRlckNvbnRyb2xCdXR0b25zKCk7XG5cbiAgXy5hcHBlbmRDaGlsZHJlbihwYW5lbCwgW2NyZWF0ZUZvcm0sIHVwZGF0ZUZvcm0sIGNvbnRyb2xCdXR0b25zXSk7XG5cbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29udHJvbFBhbmVsO1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHJlZnJlc2hHYXJhZ2UgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlZnJlc2hHYXJhZ2UnO1xuXG5jb25zdCBhZGRDcmVhdGVDbGljayA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgbmFtZSA9IGZvcm0uY2hpbGRyZW5bMF0gYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgY29sb3IgPSBmb3JtLmNoaWxkcmVuWzFdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGJ1dHRvbiA9IGZvcm0uY2hpbGRyZW5bMl0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG5hbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFwaS5nYXJhZ2UuY3JlYXRlQ2FyKG5hbWUudmFsdWUsIGNvbG9yLnZhbHVlKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZWZyZXNoR2FyYWdlKCk7XG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgY29sb3IudmFsdWUgPSAnIzAwMDAwMCc7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRDcmVhdGVDbGljaztcbiIsImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vYXBpJztcbmltcG9ydCByZWZyZXNoR2FyYWdlIGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWZyZXNoR2FyYWdlJztcblxuY29uc3QgZ2VuZXJhdGVSYW5kb21OYW1lID0gKCkgPT4ge1xuICBjb25zdCBicmFuZEFycmF5cyA9IFtcbiAgICAnQXVkaScsXG4gICAgJ0JNVycsXG4gICAgJ01lcmNlZGVzJyxcbiAgICAnRmVycmFyaScsXG4gICAgJ1Rlc2xhJyxcbiAgICAnR2VlbHknLFxuICAgICdGb3JkJyxcbiAgICAnTWl0c3ViaXNoaScsXG4gICAgJ0hvbmRhJyxcbiAgICAnTmlzc2FuJyxcbiAgXTtcbiAgY29uc3QgbW9kZWxBcnJheXMgPSBbXG4gICAgJ1gxMCcsXG4gICAgJ1N1cGVyJyxcbiAgICAnRlVSSU9VUycsXG4gICAgJ0Zhc3QnLFxuICAgICdTZWRhbicsXG4gICAgJzIwMjAnLFxuICAgICdTMTAwJyxcbiAgICAnTW9kZWwgWCcsXG4gICAgJzgnLFxuICAgICdtaW5pJyxcbiAgXTtcblxuICBjb25zdCByYW5kb21CcmFuZCA9IGJyYW5kQXJyYXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gIGNvbnN0IHJhbmRvbU1vZGVsID0gbW9kZWxBcnJheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcblxuICBjb25zdCByYW5kb21OYW1lID0gYCR7cmFuZG9tQnJhbmR9ICR7cmFuZG9tTW9kZWx9YDtcblxuICByZXR1cm4gcmFuZG9tTmFtZTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQ2hhbm5lbCA9ICgpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XG4gIHJldHVybiBudW1iZXIubGVuZ3RoIDwgMiA/IGAwJHtudW1iZXJ9YCA6IG51bWJlcjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUmFuZG9tQ29sb3IgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZENoYW5uZWwgPSBnZW5lcmF0ZUNoYW5uZWwoKTtcbiAgY29uc3QgZ3JlZW5DaGFubmVsID0gZ2VuZXJhdGVDaGFubmVsKCk7XG4gIGNvbnN0IGJsdWVDaGFubmVsID0gZ2VuZXJhdGVDaGFubmVsKCk7XG5cbiAgcmV0dXJuIGAjJHtyZWRDaGFubmVsICsgZ3JlZW5DaGFubmVsICsgYmx1ZUNoYW5uZWx9YDtcbn07XG5cbmNvbnN0IGFkZEdlbmVyYXRlQ2xpY2sgPSAoYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZ2VuZXJhdGVDb3VudCA9IDEwMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlbmVyYXRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmFtZSA9IGdlbmVyYXRlUmFuZG9tTmFtZSgpO1xuICAgICAgY29uc3QgY29sb3IgPSBnZW5lcmF0ZVJhbmRvbUNvbG9yKCk7XG4gICAgICBhcGkuZ2FyYWdlLmNyZWF0ZUNhcihuYW1lLCBjb2xvcikudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChpID09PSBnZW5lcmF0ZUNvdW50IC0gMSkgcmVmcmVzaEdhcmFnZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEdlbmVyYXRlQ2xpY2s7XG4iLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgc3RhcnRDYXIgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NhckRyaXZlJztcbmltcG9ydCBtb3VzZUZyZWV6ZSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW91c2VGcmVlemUnO1xuaW1wb3J0IHJhY2VTdGF0dXMgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JhY2VTdGF0dXMnO1xuaW1wb3J0IHsgQ2FyVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NhclR5cGUnO1xuXG5jb25zdCBhZGRSYWNlQ2xpY2sgPSAoYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLXBhbmVsJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IE51bWJlcihnYXJhZ2VQYW5lbC5kYXRhc2V0LnBhZ2UpO1xuICAgIGNvbnN0IGNhcnMgPSBhd2FpdCBhcGkuZ2FyYWdlLmdldENhcnMocGFnZU51bWJlcik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIG1vdXNlRnJlZXplLmZyZWV6ZU1vdXNlKCk7XG5cbiAgICByYWNlU3RhdHVzLnNldENhcnNOdW1iZXIoY2Fycy5pdGVtcy5sZW5ndGgpO1xuXG4gICAgY2Fycy5pdGVtcy5mb3JFYWNoKGFzeW5jIChjYXI6IENhclR5cGUpID0+IHtcbiAgICAgIHN0YXJ0Q2FyKGNhci5pZCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkUmFjZUNsaWNrO1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHsgQ2FyVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NhclR5cGUnO1xuXG5jb25zdCBlbmFibGVTdGFydEJ1dHRvbiA9IChpZDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3RhcnQtY2FyLSR7aWR9YCk7XG4gIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG59O1xuXG5jb25zdCBkaXNhYmxlUmVzZXRCdXR0b24gPSAoaWQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBidXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnJlc2V0LWNhci0ke2lkfWApO1xuICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG59O1xuXG5jb25zdCByZXNldENhciA9IChpZDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGNhckVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhci1pbWFnZS0ke2lkfWApIS5wYXJlbnRFbGVtZW50O1xuICBjYXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgZGlzYWJsZVJlc2V0QnV0dG9uKGlkKTtcbiAgZW5hYmxlU3RhcnRCdXR0b24oaWQpO1xufTtcblxuY29uc3QgY2xlYXJBbm5vdW5jZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHdpbm5lckFubm91bmNlbWVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLWFubm91bmNlbWVudCcpO1xuICB3aW5uZXJBbm5vdW5jZW1lbnQuaW5uZXJUZXh0ID0gJyc7XG59O1xuXG5jb25zdCBhZGRSZXNldENsaWNrID0gKGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1wYW5lbCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBOdW1iZXIoZ2FyYWdlUGFuZWwuZGF0YXNldC5wYWdlKTtcbiAgICBjb25zdCByYWNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2UtYnV0dG9uJyk7XG4gICAgY29uc3QgY2FycyA9IGF3YWl0IGFwaS5nYXJhZ2UuZ2V0Q2FycyhwYWdlTnVtYmVyKTtcblxuICAgIGNsZWFyQW5ub3VuY2VtZW50KCk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIHJhY2VCdXR0b24/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgIGNhcnMuaXRlbXMuZm9yRWFjaCgoY2FyOiBDYXJUeXBlKSA9PiB7XG4gICAgICByZXNldENhcihjYXIuaWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFJlc2V0Q2xpY2s7XG4iLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgcmVmcmVzaEdhcmFnZSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVmcmVzaEdhcmFnZSc7XG5pbXBvcnQgcmVmcmVzaFdpbm5lcnMgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlZnJlc2hXaW5uZXJzJztcblxuY29uc3QgYWRkVXBkYXRlQ2xpY2sgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBmb3JtLmNoaWxkcmVuWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGNvbG9yID0gZm9ybS5jaGlsZHJlblsxXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBidXR0b24gPSBmb3JtLmNoaWxkcmVuWzJdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKG5hbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFwaS5nYXJhZ2UudXBkYXRlQ2FyKE51bWJlcihidXR0b24uZGF0YXNldC5pZCEpLCBuYW1lLnZhbHVlLCBjb2xvci52YWx1ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmVmcmVzaEdhcmFnZSgpO1xuICAgICAgICByZWZyZXNoV2lubmVycygpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkVXBkYXRlQ2xpY2s7XG4iLCJpbXBvcnQgcmVmcmVzaEdhcmFnZSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVmcmVzaEdhcmFnZSc7XG5cbmNvbnN0IGFkZE5leHRQYWdlQ2xpY2sgPSAoYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ2FyYWdlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLXBhbmVsJykhIGFzIEhUTUxFbGVtZW50O1xuICAgIGdhcmFnZVBhbmVsLmRhdGFzZXQucGFnZSA9IChOdW1iZXIoZ2FyYWdlUGFuZWwuZGF0YXNldC5wYWdlKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgcmVmcmVzaEdhcmFnZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE5leHRQYWdlQ2xpY2s7XG4iLCJpbXBvcnQgcmVmcmVzaEdhcmFnZSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVmcmVzaEdhcmFnZSc7XG5cbmNvbnN0IGFkZFByZXZpb3VzUGFnZUNsaWNrID0gKGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcmFnZVBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1wYW5lbCcpISBhcyBIVE1MRWxlbWVudDtcbiAgICBnYXJhZ2VQYW5lbC5kYXRhc2V0LnBhZ2UgPSAoTnVtYmVyKGdhcmFnZVBhbmVsLmRhdGFzZXQucGFnZSkgLSAxKS50b1N0cmluZygpO1xuICAgIHJlZnJlc2hHYXJhZ2UoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRQcmV2aW91c1BhZ2VDbGljaztcbiIsImltcG9ydCBfIGZyb20gJy4uLy4uL3NoYXJlZC9oZWxwZXJzJztcbmltcG9ydCBhZGROZXh0UGFnZUNsaWNrIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMvbmV4dFBhZ2VDbGljayc7XG5pbXBvcnQgYWRkUHJldmlvdXNQYWdlQ2xpY2sgZnJvbSAnLi9ldmVudExpc3RlbmVycy9wcmV2aW91c1BhZ2VDbGljayc7XG5cbmNvbnN0IHJlbmRlclBhZ2VCdXR0b24gPSAoZGlyZWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gXy5jcmVhdGVET00oJ2J1dHRvbicsIFsncGFnZS1idXR0b24nLCBgJHtkaXJlY3Rpb259LWdhcmFnZS1wYWdlLWJ1dHRvbmBdKTtcbiAgYnV0dG9uLmlubmVyVGV4dCA9IGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJyA/ICdwcmV2JyA6ICduZXh0JztcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgcmVuZGVyR2FyYWdlUGFnZUJ1dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGdhcmFnZVBhZ2VCdXR0b25zID0gXy5jcmVhdGVET00oJ2RpdicsIFsnZ2FyYWdlLXBhZ2UtYnV0dG9ucycsICdwYWdlLWJ1dHRvbnMnXSk7XG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZW5kZXJQYWdlQnV0dG9uKCdwcmV2aW91cycpO1xuICBhZGRQcmV2aW91c1BhZ2VDbGljayhwcmV2aW91c1BhZ2UpO1xuXG4gIGNvbnN0IG5leHRQYWdlID0gPEhUTUxCdXR0b25FbGVtZW50PnJlbmRlclBhZ2VCdXR0b24oJ25leHQnKTtcbiAgYWRkTmV4dFBhZ2VDbGljayhuZXh0UGFnZSk7XG5cbiAgXy5hcHBlbmRDaGlsZHJlbihnYXJhZ2VQYWdlQnV0dG9ucywgW3ByZXZpb3VzUGFnZSwgbmV4dFBhZ2VdKTtcblxuICByZXR1cm4gZ2FyYWdlUGFnZUJ1dHRvbnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VQYWdlQnV0dG9ucztcbiIsImNvbnN0IHNldEdhcmFnZVBhZ2VCdXR0b25zU3RhdGUgPSAocGFnZU51bWJlcjogbnVtYmVyLCBjYXJDb3VudDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IENBUlNfUEVSX1BBR0UgPSA3O1xuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpb3VzLWdhcmFnZS1wYWdlLWJ1dHRvbicpO1xuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtZ2FyYWdlLXBhZ2UtYnV0dG9uJyk7XG4gIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0R2FyYWdlUGFnZUJ1dHRvbnNTdGF0ZShwYWdlTnVtYmVyLCBjYXJDb3VudCk7IH0sIDEwMCk7XG4gIH1cblxuICBpZiAocGFnZU51bWJlciA9PT0gMSkge1xuICAgIHByZXY/LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIHByZXY/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxuICBpZiAoY2FyQ291bnQgLyBDQVJTX1BFUl9QQUdFIDw9IHBhZ2VOdW1iZXIpIHtcbiAgICBuZXh0Py5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICBuZXh0Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldEdhcmFnZVBhZ2VCdXR0b25zU3RhdGU7XG4iLCJjb25zdCBhZGRHYXJhZ2VSZWZyZXNoID0gKHBhbmVsOiBIVE1MRWxlbWVudCwgcmVuZGVyOiBGdW5jdGlvbikgPT4ge1xuICBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCdyZWZyZXNoJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG9sZFBhbmVsID0gcGFuZWw7XG4gICAgY29uc3QgbmV3UGFuZWwgPSBhd2FpdCByZW5kZXIob2xkUGFuZWwuZGF0YXNldC5wYWdlKTtcbiAgICBjb25zdCBwYWdlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBsYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLWxheW91dCcpO1xuICAgIG9sZFBhbmVsLnJlbW92ZSgpO1xuICAgIGxheW91dD8uaW5zZXJ0QmVmb3JlKG5ld1BhbmVsLCBwYWdlQnV0dG9ucyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkR2FyYWdlUmVmcmVzaDtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpL2luZGV4JztcbmltcG9ydCBfIGZyb20gJy4uLy4uL3NoYXJlZC9oZWxwZXJzJztcbmltcG9ydCB7IENhclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9jYXJUeXBlJztcbmltcG9ydCBzZXRHYXJhZ2VQYWdlQnV0dG9uc1N0YXRlIGZyb20gJy4uL2dhcmFnZVBhZ2VCdXR0b25zL2dhcmFnZVBhZ2VCdXR0b25zU3RhdGUnO1xuaW1wb3J0IGFkZEdhcmFnZVJlZnJlc2ggZnJvbSAnLi9ldmVudExpc3RlbmVycy9yZWZyZXNoZ2FyYWdlJztcbmltcG9ydCAnLi9nYXJhZ2VQYW5lbC5zY3NzJztcbmltcG9ydCBSZW5kZXJUcmFjayBmcm9tICcuL3RyYWNrL3RyYWNrJztcblxuY29uc3QgcmVuZGVyQ2FyQ291bnQgPSAoY291bnQ6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aXRsZSA9IF8uY3JlYXRlRE9NKCdoMicsIFsnaDInLCAnZ2FyYWdlLWNhci1jb3VudCddKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gYEdhcmFnZSAoJHtjb3VudH0pYDtcblxuICByZXR1cm4gdGl0bGU7XG59O1xuXG5jb25zdCByZW5kZXJHYXJhZ2VQYWdlID0gKG51bWJlcjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBfLmNyZWF0ZURPTSgnaDMnLCBbJ2gzJywgJ2dhcmFnZS1wYWdlLW51bWJlciddKTtcbiAgcGFnZS5pbm5lclRleHQgPSBgUGFnZSAjJHtudW1iZXJ9YDtcblxuICByZXR1cm4gcGFnZTtcbn07XG5cbmNvbnN0IHJlbmRlckNhclRyYWNrcyA9IChjYXJzOiBDYXJUeXBlW10pID0+IHtcbiAgY29uc3QgY2FyVHJhY2tzQmxvY2sgPSBfLmNyZWF0ZURPTSgnZGl2JywgWydjYXItdHJhY2tzJ10pO1xuXG4gIGNhcnMuZm9yRWFjaCgoY2FyOiBDYXJUeXBlKSA9PiB7XG4gICAgY2FyVHJhY2tzQmxvY2suYXBwZW5kQ2hpbGQoUmVuZGVyVHJhY2soY2FyKSk7XG4gIH0pO1xuXG4gIHJldHVybiBjYXJUcmFja3NCbG9jaztcbn07XG5cbmNvbnN0IHJlbmRlcldpbm5lckFubm91bmNlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgYW5ub3VuY2VtZW50ID0gXy5jcmVhdGVET00oJ2gyJywgWyd3aW5uZXItYW5ub3VuY2VtZW50JywgJ2gyJ10pO1xuXG4gIHJldHVybiBhbm5vdW5jZW1lbnQ7XG59O1xuXG5jb25zdCByZW5kZXJHYXJhZ2VQYW5lbCA9IGFzeW5jIChwYWdlID0gMSkgPT4ge1xuICBjb25zdCBjYXJzID0gYXdhaXQgYXBpLmdhcmFnZS5nZXRDYXJzKHBhZ2UpO1xuXG4gIGNvbnN0IHBhbmVsID0gPEhUTUxEaXZFbGVtZW50Pl8uY3JlYXRlRE9NKCdkaXYnLCBbJ2dhcmFnZS1wYW5lbCddKTtcbiAgcGFuZWwuZGF0YXNldC5wYWdlID0gcGFnZS50b1N0cmluZygpO1xuICBjb25zdCBjYXJDb3VudCA9IHJlbmRlckNhckNvdW50KGNhcnMuY291bnQgfHwgJzAnKTtcbiAgY29uc3QgZ2FyYWdlUGFnZSA9IHJlbmRlckdhcmFnZVBhZ2UocGFnZSk7XG4gIGNvbnN0IGNhclRyYWNrcyA9IHJlbmRlckNhclRyYWNrcyhjYXJzLml0ZW1zKTtcbiAgY29uc3QgYW5ub3VuY2VtZW50ID0gcmVuZGVyV2lubmVyQW5ub3VuY2VtZW50KCk7XG5cbiAgYWRkR2FyYWdlUmVmcmVzaChwYW5lbCwgcmVuZGVyR2FyYWdlUGFuZWwpO1xuICBzZXRHYXJhZ2VQYWdlQnV0dG9uc1N0YXRlKE51bWJlcihwYW5lbC5kYXRhc2V0LnBhZ2UpLCBOdW1iZXIoY2Fycy5jb3VudCkpO1xuXG4gIF8uYXBwZW5kQ2hpbGRyZW4ocGFuZWwsIFtjYXJDb3VudCwgZ2FyYWdlUGFnZSwgY2FyVHJhY2tzLCBhbm5vdW5jZW1lbnRdKTtcblxuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXJhZ2VQYW5lbDtcbiIsImltcG9ydCBfIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9oZWxwZXJzJztcbmltcG9ydCAnLi9jYXIuc2Nzcyc7XG5pbXBvcnQgeyBDYXJUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMvY2FyVHlwZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgZ2V0Q2FyU3ZnIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jYXJTdmcnO1xuXG5jb25zdCBDQVJfV0lEVEggPSAxNTA7XG5jb25zdCBNU19JTl9TRUNPTkRTID0gMTAwMDtcblxuY29uc3QgZ2V0RGlzdGFuY2UgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgdHJhY2tXaWR0aCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCEub2Zmc2V0V2lkdGg7XG4gIHJldHVybiB0cmFja1dpZHRoIC0gQ0FSX1dJRFRIO1xufTtcblxuY29uc3QgZHJhd0NhciA9IChjYXI6IENhclR5cGUpID0+IHtcbiAgY29uc3QgY2FyV3JhcHBlciA9IF8uY3JlYXRlRE9NKCdkaXYnLCBbJ2Nhci13cmFwcGVyJ10pO1xuICBjb25zdCBjYXJJbWcgPSA8U1ZHRWxlbWVudD5nZXRDYXJTdmcoKTtcbiAgY2FySW1nLmNsYXNzTGlzdC5hZGQoJ2Nhci1pbWFnZScsIGBjYXItaW1hZ2UtJHtjYXIuaWR9YCk7XG4gIGNhckltZy5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjYXIuY29sb3IpO1xuICBjYXJXcmFwcGVyLmRhdGFzZXQuaWQgPSBjYXIuaWQudG9TdHJpbmcoKTtcblxuICBjYXJXcmFwcGVyLmFwcGVuZENoaWxkKGNhckltZyk7XG4gIHJldHVybiBjYXJXcmFwcGVyO1xufTtcblxuY29uc3QgYWRkTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChlOiBFdmVudCkgPT4ge1xuICBjb25zdCBjYXJFbGVtZW50ID0gPEhUTUxFbGVtZW50PmUuY3VycmVudFRhcmdldDtcbiAgY29uc3QgbW92ZURpc3RhbmNlID0gZ2V0RGlzdGFuY2UoY2FyRWxlbWVudCk7XG5cbiAgY29uc3QgY2FySUQgPSBOdW1iZXIoY2FyRWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgY29uc3QgZW5naW5lUHJvcHMgPSBhd2FpdCBhcGkuZW5naW5lLnN0YXJ0RW5naW5lKGNhcklEKTtcbiAgY29uc3QgbW92ZVRpbWUgPSAoZW5naW5lUHJvcHMuZGlzdGFuY2UgLyBlbmdpbmVQcm9wcy52ZWxvY2l0eSAvIE1TX0lOX1NFQ09ORFMpLnRvRml4ZWQoMik7XG5cbiAgY2FyRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYGxpbmVhciAke21vdmVUaW1lfXNgO1xuICBjYXJFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb3ZlRGlzdGFuY2V9cHhgO1xuXG4gIGFwaS5lbmdpbmUuZHJpdmUoY2FySUQpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNhckVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcwJztcbiAgICAgIGNhckVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2NhckVsZW1lbnQub2Zmc2V0TGVmdH1weGA7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGRyYXdDYXIsIGFkZE1vdmVBbmltYXRpb24gfTtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vLi4vYXBpJztcbmltcG9ydCByZWZyZXNoR2FyYWdlIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9yZWZyZXNoR2FyYWdlJztcbmltcG9ydCByZWZyZXNoV2lubmVycyBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvcmVmcmVzaFdpbm5lcnMnO1xuXG5jb25zdCBhZGRSZW1vdmVDbGljayA9IChidXR0b246IEhUTUxCdXR0b25FbGVtZW50KSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpZCA9IE51bWJlcihidXR0b24uZGF0YXNldC5pZCk7XG4gICAgY29uc3Qgd2lubmVyID0gYXdhaXQgYXBpLndpbm5lcnMuZ2V0V2lubmVyKGlkKTtcblxuICAgIGlmICh3aW5uZXIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGFwaS53aW5uZXJzLmRlbGV0ZVdpbm5lcihpZCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlZnJlc2hXaW5uZXJzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhcGkuZ2FyYWdlLmRlbGV0ZUNhcihOdW1iZXIoYnV0dG9uLmRhdGFzZXQuaWQpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZWZyZXNoR2FyYWdlKCk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRSZW1vdmVDbGljaztcbiIsImNvbnN0IHJlc2V0Q2FyUG9zaXRpb24gPSAoY2FyRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgY2FyID0gY2FyRWxlbWVudDtcbiAgY2FyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlU3RhcnRCdXR0b24gPSAoaWQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdGFydC1jYXItJHtpZH1gKTtcbiAgc3RhcnRCdXR0b24/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn07XG5cbmNvbnN0IGFkZFJlc2V0Q2FyQ2xpY2sgPSAoYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IDxIVE1MQnV0dG9uRWxlbWVudD5lLmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgIGNvbnN0IGNhckVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhci1pbWFnZS0ke2lkfWApIS5wYXJlbnRFbGVtZW50O1xuICAgIHJlc2V0Q2FyUG9zaXRpb24oY2FyRWxlbWVudCk7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIGFjdGl2YXRlU3RhcnRCdXR0b24oaWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFJlc2V0Q2FyQ2xpY2s7XG4iLCJjb25zdCBhZGRTZWxlY3RDbGljayA9IChidXR0b246IEhUTUxCdXR0b25FbGVtZW50KSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBidXR0b24uZGF0YXNldDtcbiAgICBjb25zdCBjYXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXItbGFiZWwtJHtpZH1gKSEuaW5uZXJIVE1MO1xuICAgIGNvbnN0IGNhckltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhci1pbWFnZS0ke2lkfWApIS5jaGlsZHJlblswXTtcbiAgICBjb25zdCBjb2xvciA9IGNhckltYWdlLmdldEF0dHJpYnV0ZSgnZmlsbCcpITtcblxuICAgIGNvbnN0IGlucHV0VGV4dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtaW5wdXQtdGV4dCcpO1xuICAgIGNvbnN0IGlucHV0Q29sb3IgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWlucHV0LWNvbG9yJyk7XG4gICAgY29uc3QgdXBkYXRlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtYnV0dG9uJyk7XG4gICAgaW5wdXRUZXh0LnZhbHVlID0gY2FyTGFiZWw7XG4gICAgaW5wdXRDb2xvci52YWx1ZSA9IGNvbG9yO1xuICAgIHVwZGF0ZUJ1dHRvbi5kYXRhc2V0LmlkID0gaWQ7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkU2VsZWN0Q2xpY2s7XG4iLCJpbXBvcnQgc3RhcnRDYXIgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NhckRyaXZlJztcblxuY29uc3QgYWRkU3RhcnRDYXJDbGljayA9IChidXR0b246IEhUTUxCdXR0b25FbGVtZW50KSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gPEhUTUxCdXR0b25FbGVtZW50PmUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBpZCA9IE51bWJlcih0YXJnZXQuZGF0YXNldC5pZCk7XG5cbiAgICBzdGFydENhcihpZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkU3RhcnRDYXJDbGljaztcbiIsImltcG9ydCBfIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9oZWxwZXJzJztcbmltcG9ydCAnLi9mbGFnLnNjc3MnO1xuXG5jb25zdCBmbGFnSW1nID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vYXNzZXRzL2ZsYWcucG5nJyk7XG5cbmNvbnN0IGRyYXdGbGFnID0gKCkgPT4ge1xuICBjb25zdCBmbGFnID0gPEhUTUxJbWFnZUVsZW1lbnQ+Xy5jcmVhdGVET00oJ2ltZycsIFsnZmxhZyddKTtcbiAgZmxhZy5zcmMgPSBmbGFnSW1nO1xuICBmbGFnLmFsdCA9ICdmbGFnIGljb24nO1xuXG4gIHJldHVybiBmbGFnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBkcmF3RmxhZyB9O1xuIiwiaW1wb3J0IHsgQ2FyVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NhclR5cGUnO1xuaW1wb3J0IEZsYWdSZW5kZXIgZnJvbSAnLi9mbGFnL2ZsYWcnO1xuaW1wb3J0IENhclJlbmRlciBmcm9tICcuL2Nhci9jYXInO1xuaW1wb3J0IF8gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2hlbHBlcnMnO1xuaW1wb3J0ICcuL3RyYWNrLnNjc3MnO1xuaW1wb3J0IGFkZFVwZGF0ZUNsaWNrIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMvc2VsZWN0Q2xpY2snO1xuaW1wb3J0IGFkZFJlbW92ZUNsaWNrIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMvcmVtb3ZlQ2xpY2snO1xuaW1wb3J0IGFkZFN0YXJ0Q2FyQ2xpY2sgZnJvbSAnLi9ldmVudExpc3RlbmVycy9zdGFydENhckNsaWNrJztcbmltcG9ydCBhZGRSZXNldENhckNsaWNrIGZyb20gJy4vZXZlbnRMaXN0ZW5lcnMvcmVzZXRDYXJDbGljayc7XG5cbmNvbnN0IHJlbmRlckxhYmVsID0gKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBsYWJlbCA9IF8uY3JlYXRlRE9NKCdoMicsIFsnY2FyLWxhYmVsJywgYGNhci1sYWJlbC0ke2lkfWBdKTtcbiAgbGFiZWwuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuXG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IHJlbmRlckNhckNvbnRyb2xQYW5lbCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNhckNvbnRyb2xQYW5lbCA9IF8uY3JlYXRlRE9NKCdkaXYnLCBbJ2Nhci1jb250cm9sLXBhbmVsJ10pO1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5fLmNyZWF0ZURPTSgnYnV0dG9uJywgWydjYXItY29udHJvbC1idXR0b24nLCAnY2FyLXN0YXJ0LWJ1dHRvbicsICdidXR0b24nLCBgc3RhcnQtY2FyLSR7aWR9YF0pO1xuICBhZGRTdGFydENhckNsaWNrKHN0YXJ0QnV0dG9uKTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+Xy5jcmVhdGVET00oJ2J1dHRvbicsIFsnY2FyLWNvbnRyb2wtYnV0dG9uJywgJ2Nhci1yZXNldC1idXR0b24nLCAnYnV0dG9uJywgYHJlc2V0LWNhci0ke2lkfWBdLCB7IGRpc2FibGVkOiAndHJ1ZScgfSk7XG4gIGFkZFJlc2V0Q2FyQ2xpY2socmVzZXRCdXR0b24pO1xuICBfLmFwcGVuZENoaWxkcmVuKGNhckNvbnRyb2xQYW5lbCwgW3N0YXJ0QnV0dG9uLCByZXNldEJ1dHRvbl0pO1xuICBzdGFydEJ1dHRvbi5kYXRhc2V0LmlkID0gaWQ7XG4gIHJlc2V0QnV0dG9uLmRhdGFzZXQuaWQgPSBpZDtcblxuICByZXR1cm4gY2FyQ29udHJvbFBhbmVsO1xufTtcblxuY29uc3QgcmVuZGVyQ2FyRWRpdFBhbmVsID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY2FyRWRpdFBhbmVsID0gXy5jcmVhdGVET00oJ2RpdicsIFsnY2FyLWVkaXQtcGFuZWwnXSk7XG4gIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5fLmNyZWF0ZURPTSgnYnV0dG9uJywgWydjYXItZWRpdC1idXR0b24nLCAnY2FyLXNlbGVjdC1idXR0b24nLCAnYnV0dG9uJ10pO1xuICBzZWxlY3RCdXR0b24uaW5uZXJUZXh0ID0gJ3NlbGVjdCc7XG4gIGFkZFVwZGF0ZUNsaWNrKHNlbGVjdEJ1dHRvbik7XG5cbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50Pl8uY3JlYXRlRE9NKCdidXR0b24nLCBbJ2Nhci1lZGl0LWJ1dHRvbicsICdjYXItcmVtb3ZlLWJ1dHRvbicsICdidXR0b24nXSk7XG4gIGFkZFJlbW92ZUNsaWNrKHJlbW92ZUJ1dHRvbik7XG4gIF8uYXBwZW5kQ2hpbGRyZW4oY2FyRWRpdFBhbmVsLCBbc2VsZWN0QnV0dG9uLCByZW1vdmVCdXR0b25dKTtcbiAgcmVtb3ZlQnV0dG9uLmlubmVyVGV4dCA9ICdyZW1vdmUnO1xuXG4gIHNlbGVjdEJ1dHRvbi5kYXRhc2V0LmlkID0gaWQ7XG4gIHJlbW92ZUJ1dHRvbi5kYXRhc2V0LmlkID0gaWQ7XG5cbiAgcmV0dXJuIGNhckVkaXRQYW5lbDtcbn07XG5cbmNvbnN0IHJlbmRlclRyYWNrID0gKGNhcjogQ2FyVHlwZSkgPT4ge1xuICBjb25zdCB0cmFja0Jsb2NrID0gPEhUTUxEaXZFbGVtZW50Pl8uY3JlYXRlRE9NKCdkaXYnLCBbJ3RyYWNrJywgYHRyYWNrLSR7Y2FyLmlkfWBdKTtcbiAgdHJhY2tCbG9jay5kYXRhc2V0LmlkID0gY2FyLmlkLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGxhYmVsID0gcmVuZGVyTGFiZWwoY2FyLmlkLCBjYXIubmFtZSk7XG4gIGNvbnN0IGNhckVkaXQgPSByZW5kZXJDYXJFZGl0UGFuZWwoY2FyLmlkLnRvU3RyaW5nKCkpO1xuICBjb25zdCBjb250cm9sUGFuZWwgPSByZW5kZXJDYXJDb250cm9sUGFuZWwoY2FyLmlkLnRvU3RyaW5nKCkpO1xuICBjb25zdCBjYXJTdmcgPSBDYXJSZW5kZXIuZHJhd0NhcihjYXIpO1xuICBjb25zdCBmbGFnSW1nID0gRmxhZ1JlbmRlci5kcmF3RmxhZygpO1xuXG4gIF8uYXBwZW5kQ2hpbGRyZW4odHJhY2tCbG9jaywgW2xhYmVsLCBjYXJFZGl0LCBjb250cm9sUGFuZWwsIGNhclN2ZywgZmxhZ0ltZ10pO1xuICByZXR1cm4gdHJhY2tCbG9jaztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRyYWNrO1xuIiwiaW1wb3J0IF8gZnJvbSAnLi4vc2hhcmVkL2hlbHBlcnMnO1xuaW1wb3J0ICcuL25hdmlnYXRpb24uc2Nzcyc7XG5cbmNvbnN0IGdhcmFnZUxpbmsgPSAoKSA9PiB7XG4gIGNvbnN0IGxpID0gXy5jcmVhdGVET00oJ2xpJywgWyduYXYtbGknXSk7XG4gIGNvbnN0IGEgPSA8SFRNTExpbmtFbGVtZW50Pl8uY3JlYXRlRE9NKCdhJywgWyduYXYtYSddLCB7IGhyZWY6ICcjZ2FyYWdlJyB9KTtcbiAgYS5pbm5lclRleHQgPSAnR2FyYWdlJztcblxuICBsaS5hcHBlbmRDaGlsZChhKTtcblxuICByZXR1cm4gbGk7XG59O1xuXG5jb25zdCB3aW5uZXJzTGluayA9ICgpID0+IHtcbiAgY29uc3QgbGkgPSBfLmNyZWF0ZURPTSgnbGknLCBbJ25hdi1saSddKTtcbiAgY29uc3QgYSA9IDxIVE1MTGlua0VsZW1lbnQ+Xy5jcmVhdGVET00oJ2EnLCBbJ25hdi1hJ10sIHsgaHJlZjogJyN3aW5uZXJzJyB9KTtcbiAgYS5pbm5lclRleHQgPSAnV2lubmVycyc7XG5cbiAgbGkuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgcmVuZGVyTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gXy5jcmVhdGVET00oJ25hdicsIFsnbmF2J10pO1xuICBjb25zdCB1bCA9IF8uY3JlYXRlRE9NKCd1bCcsIFsnbmF2LXVsJ10pO1xuXG4gIHVsLmFwcGVuZENoaWxkKGdhcmFnZUxpbmsoKSk7XG4gIHVsLmFwcGVuZENoaWxkKHdpbm5lcnNMaW5rKCkpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgcmV0dXJuIG5hdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck5hdmlnYXRpb247XG4iLCJpbXBvcnQgXyBmcm9tICcuLi9zaGFyZWQvaGVscGVycyc7XG5pbXBvcnQgcmVuZGVyQ29udHJvbFBhbmVsIGZyb20gJy4vY29udHJvbFBhbmVsL2NvbnRyb2xQYW5lbCc7XG5pbXBvcnQgcmVuZGVyR2FyYWdlUGFuZWwgZnJvbSAnLi9nYXJhZ2VQYW5lbC9nYXJhZ2VQYW5lbCc7XG5pbXBvcnQgcmVuZGVyV2lubmVyc1RhYmxlIGZyb20gJy4vd2lubmVyc1BhZ2Uvd2lubmVyc1BhbmVsJztcbmltcG9ydCByZW5kZXJHYXJhZ2VQYWdlQnV0dG9ucyBmcm9tICcuL2dhcmFnZVBhZ2VCdXR0b25zL2dhcmFnZVBhZ2VCdXR0b25zJztcbmltcG9ydCByZW5kZXJXaW5uZXJzUGFnZUJ1dHRvbnMgZnJvbSAnLi93aW5uZXJzUGFnZUJ1dHRvbnMvd2lubmVyc1BhZ2VCdXR0b25zJztcblxuY29uc3QgcmVuZGVyR2FyYWdlID0gYXN5bmMgKGFwcGVuZGl4OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICBjb25zdCBnYXJhZ2VQYWdlID0gXy5jcmVhdGVET00oJ2RpdicsIFsnZ2FyYWdlLWxheW91dCcsICdjdXJyZW50LXBhZ2UnXSk7XG4gIGNvbnN0IGNvbnRyb2xQYW5lbCA9IHJlbmRlckNvbnRyb2xQYW5lbCgpO1xuICBjb25zdCBnYXJhZ2VQYW5lbCA9IGF3YWl0IHJlbmRlckdhcmFnZVBhbmVsKDEpO1xuICBjb25zdCBwYWdlQnV0dG9ucyA9IHJlbmRlckdhcmFnZVBhZ2VCdXR0b25zKCk7XG5cbiAgXy5hcHBlbmRDaGlsZHJlbihnYXJhZ2VQYWdlLCBbY29udHJvbFBhbmVsLCBnYXJhZ2VQYW5lbCwgcGFnZUJ1dHRvbnNdKTtcblxuICBhcHBlbmRpeC5hcHBlbmRDaGlsZChnYXJhZ2VQYWdlKTtcbn07XG5cbmNvbnN0IHJlbmRlcldpbm5lcnMgPSBhc3luYyAoYXBwZW5kaXg6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHdpbm5lcnNQYWdlID0gXy5jcmVhdGVET00oJ2RpdicsIFsnd2lubmVycy1sYXlvdXQnXSk7XG4gIGNvbnN0IHdpbm5lcnNUYWJsZSA9IGF3YWl0IHJlbmRlcldpbm5lcnNUYWJsZSgxKTtcbiAgY29uc3QgcGFnZUJ1dHRvbnMgPSByZW5kZXJXaW5uZXJzUGFnZUJ1dHRvbnMoKTtcblxuICBfLmFwcGVuZENoaWxkcmVuKHdpbm5lcnNQYWdlLCBbd2lubmVyc1RhYmxlLCBwYWdlQnV0dG9uc10pO1xuXG4gIGFwcGVuZGl4LmFwcGVuZENoaWxkKHdpbm5lcnNQYWdlKTtcbn07XG5cbmNvbnN0IGhpZGVHYXJhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGdhcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UtbGF5b3V0Jyk7XG4gIGdhcmFnZT8uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1wYWdlJyk7XG59O1xuXG5jb25zdCBoaWRlV2lubmVycyA9ICgpID0+IHtcbiAgY29uc3Qgd2lubmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLWxheW91dCcpO1xuICB3aW5uZXJzPy5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXBhZ2UnKTtcbn07XG5cbmNvbnN0IHNob3dHYXJhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGdhcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UtbGF5b3V0Jyk7XG4gIGlmIChnYXJhZ2U/LmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1wYWdlJykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZ2FyYWdlPy5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhZ2UnKTtcbiAgaGlkZVdpbm5lcnMoKTtcbn07XG5cbmNvbnN0IHNob3dXaW5uZXJzID0gKCkgPT4ge1xuICBjb25zdCB3aW5uZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMtbGF5b3V0Jyk7XG4gIGlmICh3aW5uZXJzPy5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQtcGFnZScpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHdpbm5lcnM/LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcGFnZScpO1xuICBoaWRlR2FyYWdlKCk7XG59O1xuXG5jb25zdCBzdGFydFJlbmRlciA9IChsYXlvdXQ6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gIHJlbmRlckdhcmFnZShsYXlvdXQpO1xuICByZW5kZXJXaW5uZXJzKGxheW91dCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXJ0UmVuZGVyLCBzaG93R2FyYWdlLCBzaG93V2lubmVycyxcbn07XG4iLCJpbXBvcnQgcmVmcmVzaFdpbm5lcnMgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlZnJlc2hXaW5uZXJzJztcblxuY29uc3QgYWRkTmV4dFBhZ2VDbGljayA9IChidXR0b246IEhUTUxCdXR0b25FbGVtZW50KSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB3aW5uZXJzUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1wYW5lbCcpISBhcyBIVE1MRWxlbWVudDtcbiAgICB3aW5uZXJzUGFuZWwuZGF0YXNldC5wYWdlID0gKE51bWJlcih3aW5uZXJzUGFuZWwuZGF0YXNldC5wYWdlKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgcmVmcmVzaFdpbm5lcnMoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGROZXh0UGFnZUNsaWNrO1xuIiwiaW1wb3J0IHJlZnJlc2hXaW5uZXJzIGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWZyZXNoV2lubmVycyc7XG5cbmNvbnN0IGFkZFByZXZpb3VzUGFnZUNsaWNrID0gKGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHdpbm5lcnNQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLXBhbmVsJykhIGFzIEhUTUxFbGVtZW50O1xuICAgIHdpbm5lcnNQYW5lbC5kYXRhc2V0LnBhZ2UgPSAoTnVtYmVyKHdpbm5lcnNQYW5lbC5kYXRhc2V0LnBhZ2UpIC0gMSkudG9TdHJpbmcoKTtcbiAgICByZWZyZXNoV2lubmVycygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFByZXZpb3VzUGFnZUNsaWNrO1xuIiwiaW1wb3J0IF8gZnJvbSAnLi4vLi4vc2hhcmVkL2hlbHBlcnMnO1xuaW1wb3J0IGFkZE5leHRQYWdlQ2xpY2sgZnJvbSAnLi9ldmVudExpc3RlbmVycy9uZXh0UGFnZUNsaWNrJztcbmltcG9ydCBhZGRQcmV2aW91c1BhZ2VDbGljayBmcm9tICcuL2V2ZW50TGlzdGVuZXJzL3ByZXZpb3VzUGFnZUNsaWNrJztcblxuY29uc3QgcmVuZGVyUGFnZUJ1dHRvbiA9IChkaXJlY3Rpb246IHN0cmluZykgPT4ge1xuICBjb25zdCBidXR0b24gPSBfLmNyZWF0ZURPTSgnYnV0dG9uJywgWydwYWdlLWJ1dHRvbicsIGAke2RpcmVjdGlvbn0td2lubmVycy1wYWdlLWJ1dHRvbmBdKTtcbiAgYnV0dG9uLmlubmVyVGV4dCA9IGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJyA/ICdwcmV2JyA6ICduZXh0JztcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgcmVuZGVyV2lubmVyc1BhZ2VCdXR0b25zID0gKCkgPT4ge1xuICBjb25zdCB3aW5uZXJzUGFnZUJ1dHRvbnMgPSBfLmNyZWF0ZURPTSgnZGl2JywgWyd3aW5uZXJzLXBhZ2UtYnV0dG9ucycsICdwYWdlLWJ1dHRvbnMnXSk7XG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZW5kZXJQYWdlQnV0dG9uKCdwcmV2aW91cycpO1xuICBhZGRQcmV2aW91c1BhZ2VDbGljayhwcmV2aW91c1BhZ2UpO1xuXG4gIGNvbnN0IG5leHRQYWdlID0gPEhUTUxCdXR0b25FbGVtZW50PnJlbmRlclBhZ2VCdXR0b24oJ25leHQnKTtcbiAgYWRkTmV4dFBhZ2VDbGljayhuZXh0UGFnZSk7XG5cbiAgXy5hcHBlbmRDaGlsZHJlbih3aW5uZXJzUGFnZUJ1dHRvbnMsIFtwcmV2aW91c1BhZ2UsIG5leHRQYWdlXSk7XG5cbiAgcmV0dXJuIHdpbm5lcnNQYWdlQnV0dG9ucztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcldpbm5lcnNQYWdlQnV0dG9ucztcbiIsImNvbnN0IHNldFdpbm5lcnNQYWdlQnV0dG9uc1N0YXRlID0gKHBhZ2VOdW1iZXI6IG51bWJlciwgY2FyQ291bnQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBDQVJTX1BFUl9QQUdFID0gMTA7XG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMtd2lubmVycy1wYWdlLWJ1dHRvbicpO1xuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtd2lubmVycy1wYWdlLWJ1dHRvbicpO1xuICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHNldFdpbm5lcnNQYWdlQnV0dG9uc1N0YXRlKHBhZ2VOdW1iZXIsIGNhckNvdW50KTsgfSwgMTAwKTtcbiAgfVxuXG4gIGlmIChwYWdlTnVtYmVyID09PSAxKSB7XG4gICAgcHJldj8uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gIH0gZWxzZSB7XG4gICAgcHJldj8ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG4gIGlmIChjYXJDb3VudCAvIENBUlNfUEVSX1BBR0UgPD0gcGFnZU51bWJlcikge1xuICAgIG5leHQ/LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG5leHQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0V2lubmVyc1BhZ2VCdXR0b25zU3RhdGU7XG4iLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2FwaSc7XG5pbXBvcnQgXyBmcm9tICcuLi8uLi9zaGFyZWQvaGVscGVycyc7XG5pbXBvcnQgc2V0V2lubmVyc1BhZ2VCdXR0b25zU3RhdGUgZnJvbSAnLi4vd2lubmVyc1BhZ2VCdXR0b25zL3dpbm5lcnNQYWdlQnV0dG9uc1N0YXRlJztcbmltcG9ydCAnLi93aW5uZXJzUGFuZWwuc2Nzcyc7XG5pbXBvcnQgYWRkV2lubmVyc1JlZnJlc2ggZnJvbSAnLi93aW5uZXJzVGFibGUvRXZlbnRMaXN0ZW5lcnMvcmVmcmVzaFdpbm5lcnMnO1xuaW1wb3J0IHJlbmRlcldpbm5lcnNUYWJsZSBmcm9tICcuL3dpbm5lcnNUYWJsZS93aW5uZXJzVGFibGUnO1xuXG5jb25zdCByZW5kZXJXaW5uZXJzQ291bnQgPSAod2lubmVyQ291bnRlcjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gXy5jcmVhdGVET00oJ2gyJywgWydoMicsICd3aW5uZXJzLWNvdW50J10pO1xuICBjb3VudC5pbm5lclRleHQgPSBgV2lubmVycyAoJHt3aW5uZXJDb3VudGVyfSlgO1xuXG4gIHJldHVybiBjb3VudDtcbn07XG5cbmNvbnN0IHJlbmRlclRhYmxlUGFnZSA9IChwYWdlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcGFnZU51bWJlciA9IF8uY3JlYXRlRE9NKCdoMycsIFsnaDMnLCAncGFnZS1udW1iZXInXSk7XG4gIHBhZ2VOdW1iZXIuaW5uZXJUZXh0ID0gYFBhZ2UgIyR7cGFnZX1gO1xuXG4gIHJldHVybiBwYWdlTnVtYmVyO1xufTtcblxuY29uc3QgcmVuZGVyV2lubmVyc1BhbmVsID0gYXN5bmMgKHBhZ2UgPSAxLCBzb3J0Pzogc3RyaW5nLCBvcmRlcj86IHN0cmluZykgPT4ge1xuICBjb25zdCB3aW5uZXJzID0gYXdhaXQgYXBpLndpbm5lcnMuZ2V0V2lubmVycyhwYWdlLCBzb3J0LCBvcmRlcik7XG5cbiAgY29uc3QgcGFuZWwgPSBfLmNyZWF0ZURPTSgnZGl2JywgWyd3aW5uZXJzLXBhbmVsJ10pO1xuICBwYW5lbC5kYXRhc2V0LnBhZ2UgPSBwYWdlID8gcGFnZS50b1N0cmluZygpIDogJyc7XG4gIHBhbmVsLmRhdGFzZXQuc29ydCA9IHNvcnQgfHwgJyc7XG4gIHBhbmVsLmRhdGFzZXQub3JkZXIgPSBvcmRlciB8fCAnJztcbiAgY29uc3Qgd2lubmVyc0NvdW50ID0gcmVuZGVyV2lubmVyc0NvdW50KHdpbm5lcnMuY291bnQgfHwgJzAnKTtcbiAgY29uc3QgdGFibGVQYWdlID0gcmVuZGVyVGFibGVQYWdlKHBhZ2UpO1xuICBjb25zdCB0YWJsZSA9IHJlbmRlcldpbm5lcnNUYWJsZSh3aW5uZXJzLml0ZW1zLCBwYWdlKTtcblxuICBhZGRXaW5uZXJzUmVmcmVzaChwYW5lbCwgcmVuZGVyV2lubmVyc1BhbmVsKTtcbiAgc2V0V2lubmVyc1BhZ2VCdXR0b25zU3RhdGUoTnVtYmVyKHBhbmVsLmRhdGFzZXQucGFnZSksIE51bWJlcih3aW5uZXJzLmNvdW50KSk7XG5cbiAgXy5hcHBlbmRDaGlsZHJlbihwYW5lbCwgW3dpbm5lcnNDb3VudCwgdGFibGVQYWdlLCB0YWJsZV0pO1xuXG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcldpbm5lcnNQYW5lbDtcbiIsImltcG9ydCByZWZyZXNoV2lubmVycyBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvcmVmcmVzaFdpbm5lcnMnO1xuXG5jb25zdCBhZGRUaW1lQ2xpY2sgPSAoY2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQpID0+IHtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB3aW5uZXJzUGFuZWwgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMtcGFuZWwnKTtcbiAgICBpZiAod2lubmVyc1BhbmVsLmRhdGFzZXQuc29ydCAhPT0gJ3RpbWUnKSB7XG4gICAgICB3aW5uZXJzUGFuZWwuZGF0YXNldC5zb3J0ID0gJ3RpbWUnO1xuICAgICAgd2lubmVyc1BhbmVsLmRhdGFzZXQub3JkZXIgPSAnQVNDJztcbiAgICB9IGVsc2UgaWYgKHdpbm5lcnNQYW5lbC5kYXRhc2V0Lm9yZGVyID09PSAnREVTQycpIHtcbiAgICAgIHdpbm5lcnNQYW5lbC5kYXRhc2V0Lm9yZGVyID0gJ0FTQyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbm5lcnNQYW5lbC5kYXRhc2V0Lm9yZGVyID0gJ0RFU0MnO1xuICAgIH1cblxuICAgIHJlZnJlc2hXaW5uZXJzKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkVGltZUNsaWNrO1xuIiwiaW1wb3J0IHJlZnJlc2hXaW5uZXJzIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9yZWZyZXNoV2lubmVycyc7XG5cbmNvbnN0IGFkZFdpbnNDbGljayA9IChjZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCkgPT4ge1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHdpbm5lcnNQYW5lbCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1wYW5lbCcpO1xuICAgIGlmICh3aW5uZXJzUGFuZWwuZGF0YXNldC5zb3J0ICE9PSAnd2lucycpIHtcbiAgICAgIHdpbm5lcnNQYW5lbC5kYXRhc2V0LnNvcnQgPSAnd2lucyc7XG4gICAgICB3aW5uZXJzUGFuZWwuZGF0YXNldC5vcmRlciA9ICdERVNDJztcbiAgICB9IGVsc2UgaWYgKHdpbm5lcnNQYW5lbC5kYXRhc2V0Lm9yZGVyID09PSAnREVTQycpIHtcbiAgICAgIHdpbm5lcnNQYW5lbC5kYXRhc2V0Lm9yZGVyID0gJ0FTQyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbm5lcnNQYW5lbC5kYXRhc2V0Lm9yZGVyID0gJ0RFU0MnO1xuICAgIH1cblxuICAgIHJlZnJlc2hXaW5uZXJzKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkV2luc0NsaWNrO1xuIiwiY29uc3QgYWRkV2lubmVyc1JlZnJlc2ggPSAodGFibGU6IEhUTUxFbGVtZW50LCByZW5kZXI6IEZ1bmN0aW9uKSA9PiB7XG4gIHRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ3JlZnJlc2gnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgb2xkUGFuZWwgPSB0YWJsZTtcbiAgICBjb25zdCB7IHBhZ2UgfSA9IG9sZFBhbmVsLmRhdGFzZXQgfHwgJyc7XG4gICAgY29uc3QgeyBzb3J0IH0gPSBvbGRQYW5lbC5kYXRhc2V0IHx8ICcnO1xuICAgIGNvbnN0IHsgb3JkZXIgfSA9IG9sZFBhbmVsLmRhdGFzZXQgfHwgJyc7XG4gICAgY29uc3QgbmV3UGFuZWwgPSBhd2FpdCByZW5kZXIocGFnZSwgc29ydCwgb3JkZXIpO1xuICAgIGNvbnN0IGxheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLWxheW91dCcpO1xuICAgIGxheW91dD8uaW5zZXJ0QmVmb3JlKG5ld1BhbmVsLCBvbGRQYW5lbCk7XG4gICAgb2xkUGFuZWwucmVtb3ZlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkV2lubmVyc1JlZnJlc2g7XG4iLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgXyBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaGVscGVycyc7XG5pbXBvcnQgJy4vd2lubmVyc1RhYmxlLnNjc3MnO1xuaW1wb3J0IHsgV2lubmVyVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3dpbm5lclR5cGUnO1xuaW1wb3J0IHsgQ2FyVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NhclR5cGUnO1xuaW1wb3J0IGdldENhclN2ZyBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY2FyU3ZnJztcbmltcG9ydCBhZGRXaW5uZXJzUmVmcmVzaCBmcm9tICcuL0V2ZW50TGlzdGVuZXJzL3JlZnJlc2hXaW5uZXJzJztcbmltcG9ydCBhZGRXaW5zQ2xpY2sgZnJvbSAnLi9FdmVudExpc3RlbmVycy9hZGRXaW5zQ2xpY2snO1xuaW1wb3J0IGFkZFRpbWVDbGljayBmcm9tICcuL0V2ZW50TGlzdGVuZXJzL2FkZFRpbWVDbGljayc7XG5cbmNvbnN0IFdJTk5FUlNfUEVSX1BBR0UgPSAxMDtcblxuY29uc3QgcmVuZGVyVGhBcnJheSA9IChoZWFkZXJzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBjZWxsczogSFRNTFRhYmxlQ2VsbEVsZW1lbnRbXSA9IFtdO1xuXG4gIGhlYWRlcnMuZm9yRWFjaCgoYSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSA8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+Xy5jcmVhdGVET00oJ3RoJywgWyd0aCcsICd0YWJsZS1oZWFkZXInXSk7XG4gICAgY2VsbC5pbm5lclRleHQgPSBhO1xuXG4gICAgaWYgKGEgPT09ICd3aW5zJykge1xuICAgICAgYWRkV2luc0NsaWNrKGNlbGwpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYW5lbCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1wYW5lbCcpO1xuICAgICAgICBpZiAocGFuZWwuZGF0YXNldC5zb3J0ID09PSAnd2lucycpIHtcbiAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSBwYW5lbC5kYXRhc2V0Lm9yZGVyID09PSAnREVTQycgPyAnIOKGkycgOiAnIOKGkSc7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKGEgPT09ICdiZXN0IHRpbWUgKHNlY29uZHMpJykge1xuICAgICAgYWRkVGltZUNsaWNrKGNlbGwpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYW5lbCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1wYW5lbCcpO1xuICAgICAgICBpZiAocGFuZWwuZGF0YXNldC5zb3J0ID09PSAndGltZScpIHtcbiAgICAgICAgICBjZWxsLmlubmVyVGV4dCArPSBwYW5lbC5kYXRhc2V0Lm9yZGVyID09PSAnREVTQycgPyAnIOKGkycgOiAnIOKGkSc7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgY2VsbHMucHVzaChjZWxsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNlbGxzITtcbn07XG5cbmNvbnN0IHJlbmRlclRhYmxlSGVhZGVycyA9ICgpID0+IHtcbiAgY29uc3QgdHIgPSBfLmNyZWF0ZURPTSgndHInLCBbJ3RyJywgJ2hlYWRlcnMtdHInXSk7XG4gIGNvbnN0IGhlYWRlcnMgPSByZW5kZXJUaEFycmF5KFsnbnVtYmVyJywgJ2NhcicsICduYW1lJywgJ3dpbnMnLCAnYmVzdCB0aW1lIChzZWNvbmRzKSddKTtcblxuICBfLmFwcGVuZENoaWxkcmVuKHRyLCBoZWFkZXJzKTtcblxuICByZXR1cm4gdHI7XG59O1xuXG5jb25zdCByZW5kZXJUZENlbGwgPSAoZGF0YTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNlbGwgPSA8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+Xy5jcmVhdGVET00oJ3RkJywgWyd0ZCcsICd0YWJsZS1jZWxsJ10pO1xuICBjZWxsLmlubmVyVGV4dCA9IGRhdGE7XG4gIHJldHVybiBjZWxsO1xufTtcblxuY29uc3QgcmVuZGVyQ2FyQ2VsbCA9IChjb2xvcjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRkID0gXy5jcmVhdGVET00oJ3RkJywgWyd0ZCcsICd0YWJsZS1jZWxsJywgJ2Nhci1jZWxsJ10pO1xuICBjb25zdCBzdmcgPSA8U1ZHRWxlbWVudD5nZXRDYXJTdmcoKTtcbiAgc3ZnLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNvbG9yKTtcbiAgdGQuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICByZXR1cm4gdGQ7XG59O1xuXG5jb25zdCByZW5kZXJUYWJsZVJvdyA9IGFzeW5jICh3aW5uZXJEYXRhOiBXaW5uZXJUeXBlLCBwYWdlOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgcGxhY2UgPSAoKHBhZ2UgLSAxKSAqIFdJTk5FUlNfUEVSX1BBR0UpICsgaW5kZXggKyAxO1xuICBjb25zdCBjYXJEYXRhOiBDYXJUeXBlID0gYXdhaXQgYXBpLmdhcmFnZS5nZXRDYXIod2lubmVyRGF0YS5pZCk7XG4gIGNvbnN0IHRyID0gPEhUTUxUYWJsZUNlbGxFbGVtZW50Pl8uY3JlYXRlRE9NKCd0cicsIFsndHInXSk7XG4gIGNvbnN0IHJvd0RhdGEgPSB7XG4gICAgbnVtYmVyOiByZW5kZXJUZENlbGwocGxhY2UudG9TdHJpbmcoKSksXG4gICAgY2FyOiByZW5kZXJDYXJDZWxsKGNhckRhdGEuY29sb3IpLFxuICAgIG5hbWU6IHJlbmRlclRkQ2VsbChjYXJEYXRhLm5hbWUpLFxuICAgIHdpbnM6IHJlbmRlclRkQ2VsbCh3aW5uZXJEYXRhLndpbnMudG9TdHJpbmcoKSksXG4gICAgdGltZTogcmVuZGVyVGRDZWxsKHdpbm5lckRhdGEudGltZS50b1N0cmluZygpKSxcbiAgfTtcblxuICBjb25zdCBjZWxscyA9IE9iamVjdC52YWx1ZXMocm93RGF0YSk7XG4gIF8uYXBwZW5kQ2hpbGRyZW4odHIsIGNlbGxzKTtcblxuICByZXR1cm4gdHI7XG59O1xuXG5jb25zdCByZW5kZXJUYWJsZURhdGEgPSBhc3luYyAoYXBwZW5kaXg6IEhUTUxUYWJsZUVsZW1lbnQsIHdpbm5lcnM6IFdpbm5lclR5cGVbXSwgcGFnZTogbnVtYmVyKSA9PiB7XG4gIHdpbm5lcnMuZm9yRWFjaChhc3luYyAod2lubmVyOiBXaW5uZXJUeXBlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gYXdhaXQgcmVuZGVyVGFibGVSb3cod2lubmVyLCBwYWdlLCBpbmRleCk7XG4gICAgYXBwZW5kaXguYXBwZW5kQ2hpbGQocm93KTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJXaW5uZXJzVGFibGUgPSAod2lubmVyczogV2lubmVyVHlwZVtdLCBwYWdlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgdGFibGUgPSA8SFRNTFRhYmxlRWxlbWVudD5fLmNyZWF0ZURPTSgndGFibGUnLCBbJ3dpbm5lcnMtdGFibGUnLCAndGFibGUnXSk7XG5cbiAgY29uc3QgdGFibGVIZWFkZXJzID0gcmVuZGVyVGFibGVIZWFkZXJzKCk7XG4gIHJlbmRlclRhYmxlRGF0YSh0YWJsZSwgd2lubmVycywgcGFnZSk7XG5cbiAgXy5hcHBlbmRDaGlsZHJlbih0YWJsZSwgW3RhYmxlSGVhZGVyc10pO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUhlYWRlcnMpO1xuXG4gIGFkZFdpbm5lcnNSZWZyZXNoKHRhYmxlLCByZW5kZXJXaW5uZXJzVGFibGUpO1xuXG4gIHJldHVybiB0YWJsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcldpbm5lcnNUYWJsZTtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IFdpbm5lclR5cGUgfSBmcm9tICcuLi90eXBlcy93aW5uZXJUeXBlJztcbmltcG9ydCByYWNlIGZyb20gJy4vcmFjZVN0YXR1cyc7XG5pbXBvcnQgcmVmcmVzaFdpbm5lcnMgZnJvbSAnLi9yZWZyZXNoV2lubmVycyc7XG5cbmNvbnN0IENBUl9TVEFSVF9QT1NJVElPTiA9IDE1MDtcbmNvbnN0IE1TX0lOX1NFQ09ORFMgPSAxMDAwO1xuXG5jb25zdCBnZXREaXN0YW5jZSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCB0cmFja1dpZHRoID0gZWxlbWVudC5wYXJlbnRFbGVtZW50IS5vZmZzZXRXaWR0aDtcbiAgcmV0dXJuIHRyYWNrV2lkdGggLSBDQVJfU1RBUlRfUE9TSVRJT047XG59O1xuXG5jb25zdCBzdG9wQ2FyQW5pbWF0aW9uID0gKGNhckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkaXN0YW5jZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGNhciA9IGNhckVsZW1lbnQ7XG4gIGNhci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIGNhci5zdHlsZS5sZWZ0ID0gYCR7ZGlzdGFuY2V9cHhgO1xufTtcblxuY29uc3QgYWN0aXZhdGVSZXNldEJ1dHRvbiA9IChpZDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnJlc2V0LWNhci0ke2lkfWApO1xuICByZXNldEJ1dHRvbj8ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xufTtcblxuY29uc3QgaGFuZGxlV2lubmVyID0gYXN5bmMgKGlkOiBudW1iZXIsIHRpbWU6IG51bWJlcikgPT4ge1xuICBjb25zdCB3aW5uZXIgPSBhd2FpdCBhcGkud2lubmVycy5nZXRXaW5uZXIoaWQpO1xuXG4gIGlmICh3aW5uZXIuc3RhdHVzID09PSAyMDApIHtcbiAgICBjb25zdCB3aW5uZXJEYXRhOiBXaW5uZXJUeXBlID0gYXdhaXQgd2lubmVyLmpzb24oKTtcbiAgICBpZiAodGltZSA8IHdpbm5lckRhdGEudGltZSkge1xuICAgICAgYXBpLndpbm5lcnMudXBkYXRlV2lubmVyKGlkLCB3aW5uZXJEYXRhLndpbnMsIHRpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkud2lubmVycy51cGRhdGVXaW5uZXIoaWQsIHdpbm5lckRhdGEud2lucyArIDEsIHdpbm5lckRhdGEudGltZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFwaS53aW5uZXJzLmNyZWF0ZVdpbm5lcihpZCwgMSwgdGltZSk7XG4gIH1cbiAgc2V0VGltZW91dChyZWZyZXNoV2lubmVycywgMTAwMCk7XG59O1xuXG5jb25zdCBzdGFydERyaXZlID0gKGNhckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBtb3ZlVGltZTpzdHJpbmcsIGlkOiBudW1iZXIsIHJhY2VNb2RlOiBib29sZWFuKSA9PiB7XG4gIGFwaS5lbmdpbmUuZHJpdmUoaWQpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHJhY2VNb2RlKSB7XG4gICAgICAgIHJhY2UudXBkYXRlUmFjZVN0YXR1cygpO1xuICAgICAgICBjb25zdCB3aW5uZXJBbm5vdW5jZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1hbm5vdW5jZW1lbnQnKTtcbiAgICAgICAgaWYgKHdpbm5lckFubm91bmNlbWVudC5pbm5lclRleHQgPT09ICcnKSB7XG4gICAgICAgICAgY29uc3QgY2FyTmFtZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyLWxhYmVsLSR7aWR9YCk7XG4gICAgICAgICAgd2lubmVyQW5ub3VuY2VtZW50LmlubmVyVGV4dCA9IGAke2Nhck5hbWUuaW5uZXJUZXh0fSBmaW5pc2hlZCBpbiAke21vdmVUaW1lfSFgO1xuICAgICAgICAgIGhhbmRsZVdpbm5lcihpZCwgTnVtYmVyKG1vdmVUaW1lKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFjdGl2YXRlUmVzZXRCdXR0b24oaWQpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHJhY2UudXBkYXRlUmFjZVN0YXR1cygpO1xuICAgICAgc3RvcENhckFuaW1hdGlvbihjYXJFbGVtZW50LCBjYXJFbGVtZW50Lm9mZnNldExlZnQpO1xuICAgICAgYWN0aXZhdGVSZXNldEJ1dHRvbihpZCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBhZGRDYXJBbmltYXRpb24gPSBhc3luYyAoY2FyOkhUTUxFbGVtZW50LCBpZDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGNhckVsZW1lbnQgPSBjYXI7XG4gIGNvbnN0IG1vdmVEaXN0YW5jZSA9IGdldERpc3RhbmNlKGNhcik7XG4gIGNvbnN0IGVuZ2luZVByb3BzID0gYXdhaXQgYXBpLmVuZ2luZS5zdGFydEVuZ2luZShpZCk7XG4gIGNvbnN0IG1vdmVUaW1lID0gKGVuZ2luZVByb3BzLmRpc3RhbmNlIC8gZW5naW5lUHJvcHMudmVsb2NpdHkgLyBNU19JTl9TRUNPTkRTKS50b0ZpeGVkKDIpO1xuICBjYXJFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgbGluZWFyICR7bW92ZVRpbWV9c2A7XG4gIGNhckVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vdmVEaXN0YW5jZX1weGA7XG5cbiAgcmV0dXJuIG1vdmVUaW1lO1xufTtcblxuY29uc3QgZGlzYWJsZVN0YXJ0QnV0dG9uID0gKGlkOiBudW1iZXIpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdGFydC1jYXItJHtpZH1gKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xufTtcblxuY29uc3Qgc3RhcnRDYXIgPSBhc3luYyAoaWQ6IG51bWJlciwgcmFjZU1vZGU6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICBjb25zdCBjYXJFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXItaW1hZ2UtJHtpZH1gKSEucGFyZW50RWxlbWVudDtcbiAgY29uc3QgbW92ZVRpbWUgPSBhd2FpdCBhZGRDYXJBbmltYXRpb24oY2FyRWxlbWVudCwgaWQpO1xuICBkaXNhYmxlU3RhcnRCdXR0b24oaWQpO1xuXG4gIHN0YXJ0RHJpdmUoY2FyRWxlbWVudCwgbW92ZVRpbWUsIGlkLCByYWNlTW9kZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFydENhcjtcbiIsImltcG9ydCBfIGZyb20gJy4vaGVscGVycyc7XG5cbmZ1bmN0aW9uIGdldENhclN2ZygpIHtcbiAgY29uc3QgdXNlbGVzc0RpdiA9IF8uY3JlYXRlRE9NKCdkaXYnKTtcbiAgdXNlbGVzc0Rpdi5pbm5lckhUTUwgPSBgPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTI1OC4wMDAwMDBwdFwiIGhlaWdodD1cIjM3Mi4wMDAwMDBwdFwiXG4gIHZpZXdCb3g9XCIwIDAgMTI1OC4wMDAwMDAgMzcyLjAwMDAwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwzNzIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgIDxwYXRoIGQ9XCJNNTAyNSAzNjk5IGMtNTc2IC0yNSAtODA1IC02MCAtMjIzNSAtMzQ5IC03ODkgLTE2MCAtMTIyMCAtMjQxXG4tMTUxNSAtMjg2IC0xNTYgLTI0IC0yMTAgLTI4IC00MTAgLTI5IC0yMDQgMCAtMjQwIDIgLTMxNSAyMiAtNDcgMTIgLTExNSAyNFxuLTE1MSAyNyBsLTY2IDYgLTM1IC03NyBjLTIwIC00NSAtNjIgLTE3OSAtOTYgLTMxMyAtMzQgLTEzMCAtNzUgLTI3NiAtOTJcbi0zMjUgLTc3IC0yMjAgLTgxIC0yMzYgLTkyIC0zNzkgLTI1IC0zMzEgMTEgLTg3NiA2NSAtOTg2IDI4IC01NiAxMjEgLTEyMlxuMjY1IC0xODUgOTUgLTQyIDMyMCAtMTE1IDM1NCAtMTE1IDEyIDAgMTYgMjQgMjEgMTI3IDQgNzEgNyAxNzUgNyAyMzMgMCAxNjBcbjE3IDMwOCA0NSAzOTAgNTggMTcwIDE3NSAzNDkgMzI2IDQ5NSAxMDggMTA0IDIxOSAxODIgMzYwIDI1MCAxMjcgNjEgMTk5IDc1XG40MTkgODIgMzUyIDExIDU0NyAtMzMgNzU1IC0xNzEgMjY1IC0xNzcgNDQyIC00MjIgNTI5IC03MzQgNjQgLTIyNiA3MCAtNDE0XG4yMiAtNjE1IC0zNiAtMTUwIC0zNyAtMTQ0IDMyIC0xNTEgMTE3IC0xMSAxNDkwIC00MSAzNDY3IC03NSAzMTkgLTYgNjk3IC0xM1xuODQwIC0xNiAzODggLTggODM4IC04IDg1OCAwIDIzIDkgMjEgMjcgLTE2IDE2OCAtNTMgMTk4IC02MSA0OTkgLTE5IDY1OSAyOFxuMTAzIDExNyAyODkgMTk3IDQwOSAyMjkgMzQ0IDYxMiA1NDkgMTAyNSA1NDkgMjEwIDAgNDE2IC01MyA1NzEgLTE0NiAyMTlcbi0xMzIgNDQzIC0zNTMgNTQzIC01MzUgNzMgLTEzMyAxMTYgLTM1NCAxMTYgLTU5MCAwIC0yMDYgLTQgLTIyOCAtOTAgLTUxMVxuLTEzIC00MyAtMjEgLTgwIC0xNyAtODQgMyAtNCAxMDcgLTEgMjI5IDUgOTM2IDQ5IDExODggODcgMTU5MSAyNDEgbDU5IDIyIC03XG4yMTcgYy0xNSA0NzEgLTIxIDU2MCAtNDAgNTgxIC0yOCAzMCAtOTMzIDQ4MCAtOTY3IDQ4MCAtMzYgMCAtMzcgLTIyIDAgLTQ5XG4yMyAtMTcgOSAtMTUgLTkyIDE1IC0zNDYgMTAyIC01MTQgMTczIC01NDkgMjMyIC0xMSAxOCAtMzggNDMgLTYxIDU2IC0xMDYgNjJcbi02ODYgMjEwIC0xMDU4IDI3MSAtMjk2IDQ4IC00MDIgNTYgLTg0NyA2MiBsLTQyNCA1IC01MzEgMjkzIGMtNjExIDMzNyAtOTM2XG41MjEgLTEwMjAgNTc4IC01MiAzNSAtNTcgNDEgLTQwIDUwIDUwIDI3IDMwIDU3IC01NCA4MCAtMTU1IDQzIC01NjQgMTAxIC04MjdcbjExNyAtMTkyIDExIC03NTggMTEgLTEwMzAgLTF6IG0xMDU1IC0yNDkgYzU3OCAtMTAzIDExOTIgLTM0OSAxNzQ0IC02OTggMTI5XG4tODIgMjk5IC0yMDYgMzMwIC0yNDEgMTEgLTExIDE2IC0yNCAxMiAtMjkgLTQgLTQgLTIyNCAtNyAtNDg5IC02IC01MDggMFxuLTY0MSA3IC0xMTU3IDU5IC0xMjI2IDEyNSAtMjg1OCA0MzIgLTI4MzggNTM0IDEwIDUzIDM1NiAxOTIgNzAwIDI4MSAzODQgOTlcbjY5MCAxMzAgMTIzMyAxMjYgMzAwIC0zIDM1NSAtNiA0NjUgLTI2eiBtNDk1MSAtMjA3MSBjNzMgLTUyIDM1NSAtNTU1IDM2MlxuLTY0NSAzIC0zNSAtMTMgLTM5IC0xNjkgLTQ5IGwtMTE5IC03IDU2IDU5IGM2NiA2OCA3MSA3OSA1NCAxMTkgLTE2IDM5IC01OVxuNTkgLTE3NiA4NSAtMTg3IDQxIC0yMDAgODEgLTMzIDk5IDEzMCAxNSAxNDMgMTggMTUwIDQ0IDkgMzcgLTE3IDgzIC0xMTQgMjA2XG4tNTEgNjMgLTkyIDExOCAtOTIgMTIyIDAgMTEgNDcgLTkgODEgLTMzeiBtMTM2NiAtMjA5IGMxOCAtMzUgMTYgLTE1NyAtM1xuLTI0MSAtMzEgLTEzNyAtOTQgLTE5NCAtMjUxIC0yMjYgLTE0NyAtMzEgLTE2NiA2IC04NyAxNjMgNTYgMTEyIDE2MCAyNTIgMjIyXG4zMDAgNTYgNDIgOTkgNDQgMTE5IDR6XCIgLz5cbiAgICA8cGF0aCBkPVwiTTE3NDYgMjA2NCBjLTQyMCAtOTAgLTcyNCAtNDE2IC03ODYgLTg0MiAtMTcgLTExNyAtOCAtMzM0IDIwIC00NDJcbjIzIC05NSA5OSAtMjU5IDE1NCAtMzM1IDk3IC0xMzUgMjU1IC0yNjEgNDA5IC0zMjggMTUyIC02NSAyMzggLTgyIDQxNyAtODFcbjE3MSAxIDI0MSAxNSAzODMgNzQgMzg4IDE2MSA2NDcgNTQ3IDY0NyA5NjQgMCAxMzAgLTEzIDIwOCAtNTQgMzI5IC05NyAyODVcbi0zMjcgNTA3IC02NDQgNjIxIC0xNTAgNTQgLTM5NyA3MiAtNTQ2IDQweiBtMzk1IC0zMzAgYzE4MiAtNTQgMzY2IC0yMTUgNDUzXG4tMzk3IDkzIC0xOTIgODcgLTM5MSAtMTYgLTU5MCAtNjQgLTEyNCAtMTkxIC0yNDcgLTMxOCAtMzEwIC0yMDcgLTEwMSAtMzc1XG4tMTA0IC01NzUgLTggLTI5OSAxNDMgLTQ4MiA0ODAgLTQxMCA3NTUgNzAgMjY3IDI3OCA0ODEgNTM3IDU1MCA3NSAyMSAyNjAgMjBcbjMyOSAwelwiIC8+XG4gICAgPHBhdGggZD1cIk05MzM1IDIwNTYgYy0xOTkgLTQwIC0zODYgLTE0OSAtNTMyIC0zMTIgLTE4NSAtMjA2IC0yNDEgLTM0NSAtMjUwXG4tNjI0IC0xMCAtMzE5IDUxIC01MTggMjIxIC03MjAgMTU5IC0xODkgMzc1IC0zMTIgNjE4IC0zNTAgMTI1IC0yMCAzNTIgLThcbjQ2MyAyNCAzNDEgOTkgNjAyIDM1NCA2OTcgNjgxIDIxIDcyIDIzIDEwMCAyMyAyOTAgLTEgMjQ5IC05IDI5MSAtOTIgNDY1XG4tMTA3IDIyNyAtMjU4IDM3OSAtNDc3IDQ4MCAtMTMxIDYxIC0xODYgNzEgLTQwNiA3NiAtMTQwIDIgLTIxNSAwIC0yNjUgLTEwelxubTM4NSAtMzIyIGMzNiAtOCAxMDggLTM1IDE2MCAtNjEgODAgLTM5IDEwOCAtNTkgMTgwIC0xMzIgMTMyIC0xMzMgMTkwIC0yNzdcbjE5MCAtNDY4IDAgLTMyOCAtMTcwIC01NzEgLTQ3MCAtNjczIC05MCAtMzAgLTI3OCAtMzggLTM3MyAtMTYgLTI0NCA1NyAtNDQ4XG4yNTcgLTUxMiA1MDEgLTIzIDg3IC0yMSAyNTEgNCAzNDYgMTkgNzQgNjcgMTgxIDExMCAyNDQgMzcgNTQgMTM1IDE0NiAxOTVcbjE4MyAzMyAxOSA5NiA0OCAxNDAgNjQgNzEgMjQgOTYgMjggMTk2IDI4IDY4IDAgMTQyIC03IDE4MCAtMTZ6XCIgLz5cbiAgPC9nPlxuPC9zdmc+YDtcbiAgY29uc3QgY2FyU3ZnID0gdXNlbGVzc0Rpdi5jaGlsZHJlblswXS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgcmV0dXJuIGNhclN2Zztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2FyU3ZnO1xuIiwiY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcblxuY29uc3QgY3JlYXRlRE9NID0gKFxuICB0YWc6IHN0cmluZyxcbiAgY2xhc3NOYW1lczogc3RyaW5nW10gPSBbXSxcbiAgYXR0cmlidXRlcz86IE9iamVjdCxcbikgPT4ge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhdHRyaWJ1dGVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleXNbaV0sIHZhbHVlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59O1xuXG5jb25zdCBhcHBlbmRDaGlsZHJlbiA9ICh0YXJnZXQ6IEhUTUxFbGVtZW50LCBjaGlsZHJlbjogSFRNTEVsZW1lbnRbXSkgPT4ge1xuICBjaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgYm9keSwgY3JlYXRlRE9NLCBhcHBlbmRDaGlsZHJlbiB9O1xuIiwiY29uc3QgcHJldmVudCA9IChlOiBFdmVudCkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5jb25zdCBmcmVlemVNb3VzZSA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldmVudCk7XG59O1xuXG5jb25zdCB1bmZyZWV6ZU1vdXNlID0gKCkgPT4ge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2ZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgZnJlZXplTW91c2UsIHVuZnJlZXplTW91c2UgfTtcbiIsImltcG9ydCBtb3VzZUZyZWV6ZSBmcm9tICcuL21vdXNlRnJlZXplJztcblxubGV0IGNhcnNQZXJQYWdlID0gNztcbmxldCBjYXJGaW5pc2hlZCA9IDA7XG5cbmNvbnN0IHNldENhcnNOdW1iZXIgPSAoY2Fyc051bWJlcjogbnVtYmVyKSA9PiB7XG4gIGNhcnNQZXJQYWdlID0gY2Fyc051bWJlcjtcbn07XG5cbmNvbnN0IGNoZWNrUmFjZVN0YXR1cyA9ICgpID0+IHtcbiAgaWYgKGNhckZpbmlzaGVkID09PSBjYXJzUGVyUGFnZSkge1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ1dHRvbicpO1xuICAgIG1vdXNlRnJlZXplLnVuZnJlZXplTW91c2UoKTtcbiAgICByZXNldEJ1dHRvbj8ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGNhckZpbmlzaGVkID0gMDtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlUmFjZVN0YXR1cyA9ICgpID0+IHtcbiAgY2FyRmluaXNoZWQgKz0gMTtcbiAgY2hlY2tSYWNlU3RhdHVzKCk7XG59O1xuXG5jb25zdCByZXNldFJhY2VTdGF0dXMgPSAoKSA9PiB7XG4gIGNhckZpbmlzaGVkID0gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0Q2Fyc051bWJlciwgY2hlY2tSYWNlU3RhdHVzLCB1cGRhdGVSYWNlU3RhdHVzLCByZXNldFJhY2VTdGF0dXMsXG59O1xuIiwiY29uc3QgcmVmcmVzaEdhcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FyYWdlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLXBhbmVsJyk7XG4gIGNvbnN0IHJlZnJlc2ggPSBuZXcgQ3VzdG9tRXZlbnQoJ3JlZnJlc2gnKTtcbiAgZ2FyYWdlUGFuZWwhLmRpc3BhdGNoRXZlbnQocmVmcmVzaCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWZyZXNoR2FyYWdlO1xuIiwiY29uc3QgcmVmcmVzaFdpbm5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHdpbm5lcnNQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLXBhbmVsJyk7XG4gIGNvbnN0IHJlZnJlc2ggPSBuZXcgQ3VzdG9tRXZlbnQoJ3JlZnJlc2gnKTtcbiAgd2lubmVyc1BhbmVsIS5kaXNwYXRjaEV2ZW50KHJlZnJlc2gpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVmcmVzaFdpbm5lcnM7XG4iLCJpbXBvcnQgcGFnZXNSZW5kZXIgZnJvbSAnLi4vcmVuZGVycy9wYWdlc1JlbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlcihjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XG4gIGNvbnN0IGxheW91dCA9IGNvbnRhaW5lcjtcblxuICBjb25zdCByb3V0aW5nID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdnYXJhZ2UnLFxuICAgICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIHBhZ2VzUmVuZGVyLnNob3dHYXJhZ2UoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnd2lubmVycycsXG4gICAgICByZW5kZXI6ICgpID0+IHtcbiAgICAgICAgcGFnZXNSZW5kZXIuc2hvd1dpbm5lcnMoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBkZWZhdWx0Um91dGUgPSB7XG4gICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgcGFnZXNSZW5kZXIuc3RhcnRSZW5kZXIobGF5b3V0KTtcbiAgICB9LFxuICB9O1xuXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZU5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCBjdXJyZW50Um91dGUgPSByb3V0aW5nLmZpbmQoKHApID0+IHAubmFtZSA9PT0gY3VycmVudFJvdXRlTmFtZSk7XG5cbiAgICAoY3VycmVudFJvdXRlIHx8IGRlZmF1bHRSb3V0ZSkucmVuZGVyKCk7XG4gIH07XG5cbiAgd2luZG93Lm9ubG9hZCA9ICgpID0+IGRlZmF1bHRSb3V0ZS5yZW5kZXIoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL3NoYXJlZC9yb3V0ZXInO1xuaW1wb3J0IF8gZnJvbSAnLi9zaGFyZWQvaGVscGVycyc7XG5pbXBvcnQgcmVuZGVyTmF2aWdhdGlvbiBmcm9tICcuL3JlbmRlcnMvbmF2aWdhdGlvblJlbmRlcic7XG5pbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmNvbnN0IHJvb3QgPSA8SFRNTERpdkVsZW1lbnQ+Xy5jcmVhdGVET00oJ2RpdicsIFsncm9vdCddKTtcbl8uYm9keS5hcHBlbmRDaGlsZChyb290KTtcblxucm9vdC5hcHBlbmRDaGlsZChyZW5kZXJOYXZpZ2F0aW9uKCkpO1xuY29uc3QgbGF5b3V0ID0gPEhUTUxEaXZFbGVtZW50Pl8uY3JlYXRlRE9NKCdkaXYnLCBbJ2xheW91dCddKTtcbnJvb3QuYXBwZW5kQ2hpbGQobGF5b3V0KTtcblxuUm91dGVyKGxheW91dCk7XG4iXSwic291cmNlUm9vdCI6IiJ9