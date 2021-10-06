/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: 'Courier New', Courier, monospace;\\n  font-weight: bold;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  color: lightsalmon;\\n  border-bottom: 3px solid black;\\n  padding: 5px 10px;\\n}\\n\\n.fa-refresh {\\n  align-self: center;\\n}\\n\\nbody {\\n  background-color: skyblue;\\n  width: 80%;\\n  margin: auto;\\n  margin-top: 40px;\\n  border: 3px solid black;\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\nli {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 5px 10px;\\n  border: 1px solid black;\\n}\\n\\nul li:nth-child(even) {\\n  background-color: lightgreen;\\n}\\n\\np {\\n  display: inline-block;\\n  margin-left: 5px;\\n}\\n\\nbutton {\\n  width: 100%;\\n}\\n\\n.form {\\n  display: flex;\\n  width: 100%;\\n}\\n\\n.input-text {\\n  padding: 10px;\\n  width: 100%;\\n  border: none;\\n  font-size: 14px;\\n}\\n\\n.fa-sign-in {\\n  padding: 10px;\\n  background-color: white;\\n  color: grey;\\n  cursor: pointer;\\n}\\n\\n.new-form {\\n  display: inline-block;\\n  margin-left: 5px;\\n}\\n\\n#error {\\n  color: red;\\n  padding: 10px;\\n  text-align: center;\\n  display: none;\\n}\\n\\n.fa-trash {\\n  cursor: pointer;\\n}\\n\\n.tasked {\\n  text-decoration: line-through;\\n}\\n\\n.untasked {\\n  text-decoration: none;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  body {\\n    width: 50%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"newCompleted\": () => (/* binding */ newCompleted)\n/* harmony export */ });\nconst ul = document.getElementById('list-items');\nconst checkbox = ul.getElementsByClassName('checkbox');\nconst li = ul.getElementsByTagName('li');\nconst p = ul.getElementsByTagName('p');\nconst newTask = ul.getElementsByClassName('new-checkbox');\nconst newList = ul.getElementsByClassName('new-list');\nconst newParagraph = ul.getElementsByClassName('new-paragraph');\n\nHTMLCollection.prototype.forEach = Array.prototype.forEach;\nNodeList.prototype.forEach = Array.prototype.forEach;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  checkbox.forEach((check, idcheck) => {\n    if (check.checked) {\n      li.forEach((list, idlist) => {\n        if (idlist === idcheck) {\n          list.className = 'delete';\n          p[idlist].style.textDecoration = 'line-through';\n          const i = list.id;\n          tasks[i].isCompleted = true;\n          localStorage.setItem('tasks', JSON.stringify(tasks));\n        }\n      });\n    } else {\n      li.forEach((list, idlist) => {\n        if (idlist === idcheck) {\n          list.className = 'undelete';\n          p[idlist].style.textDecoration = 'none';\n          const i = list.id;\n          tasks[i].isCompleted = false;\n          localStorage.setItem('tasks', JSON.stringify(tasks));\n        }\n      });\n    }\n  });\n});\n\nconst newCompleted = () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  newTask.forEach((check, idcheck) => {\n    if (check.checked) {\n      newList.forEach((list, idlist) => {\n        if (idlist === idcheck) {\n          list.className = 'new-list delete';\n          newParagraph[idlist].style.textDecoration = 'line-through';\n          const i = list.id;\n          tasks[i].isCompleted = true;\n          localStorage.setItem('tasks', JSON.stringify(tasks));\n        }\n      });\n    } else {\n      newList.forEach((list, idlist) => {\n        if (idlist === idcheck) {\n          list.className = 'new-list undelete';\n          newParagraph[idlist].style.textDecoration = 'none';\n          const i = list.id;\n          tasks[i].isCompleted = false;\n          localStorage.setItem('tasks', JSON.stringify(tasks));\n        }\n      });\n    }\n  });\n};\n\n\n//# sourceURL=webpack://webpack/./src/completed.js?");

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"editOld\": () => (/* binding */ editOld)\n/* harmony export */ });\nconst ul = document.getElementById('list-items');\nconst li = ul.getElementsByTagName('li');\nconst checkboxed = ul.getElementsByClassName('checkbox');\nconst p = ul.getElementsByClassName('double-clicked');\nconst liDiv = ul.getElementsByClassName('new-div-clicked');\nconst newParagraph = ul.getElementsByClassName('old-double-clicked');\nconst oldDiv = ul.getElementsByClassName('old-div-clicked');\nconst newTask = ul.getElementsByClassName('new-checkbox');\n\nHTMLCollection.prototype.forEach = Array.prototype.forEach;\nNodeList.prototype.forEach = Array.prototype.forEach;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  p.forEach((para) => {\n    para.className = 'none';\n    para.style.display = 'none';\n    newTask.forEach((check) => {\n      if (check.id === para.id) {\n        check.style.display = 'none';\n      }\n    });\n    const form = document.createElement('form');\n    form.className = 'new-form';\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.id = 'newText';\n    const button = document.createElement('input');\n    button.type = 'submit';\n    button.value = 'Edit';\n    liDiv.forEach((div) => {\n      div.className = 'new-none-div';\n      div.appendChild(form);\n      form.appendChild(input);\n      form.appendChild(button);\n    });\n    button.addEventListener('click', (e) => {\n      e.preventDefault();\n      const divNew = ul.getElementsByClassName('new-none-div');\n      const submit = form.newText.value;\n      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n      const i = tasks.length - 1;\n      tasks[i].description = submit;\n      form.style.display = 'none';\n      const checkbox = document.createElement('input');\n      checkbox.type = 'checkbox';\n      checkbox.className = 'check-margin';\n      const p = document.createElement('p');\n      p.innerHTML = submit;\n      checkbox.addEventListener('click', () => {\n        if (checkbox.checked) {\n          p.className = 'tasked';\n          li.forEach((list) => {\n            if (list.id === para.id) {\n              list.className = 'delete';\n            }\n          });\n        } else {\n          p.className = 'untasked';\n          li.forEach((list) => {\n            if (list.id === para.id) {\n              list.className = 'undelete';\n            }\n          });\n        }\n      });\n      divNew.forEach((div) => {\n        if (div.id === para.id) {\n          div.appendChild(checkbox);\n          div.appendChild(p);\n        }\n      });\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n    });\n  });\n});\n\nconst editOld = () => {\n  newParagraph.forEach((para) => {\n    para.className = 'none';\n    para.style.display = 'none';\n    checkboxed.forEach((check) => {\n      if (check.id === para.id) {\n        check.style.display = 'none';\n      }\n    });\n    const form = document.createElement('form');\n    form.className = 'new-form';\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.id = 'newText';\n    const button = document.createElement('input');\n    button.type = 'submit';\n    button.value = 'Edit';\n    oldDiv.forEach((div) => {\n      div.className = 'none-div';\n      div.appendChild(form);\n      form.appendChild(input);\n      form.appendChild(button);\n    });\n    button.addEventListener('click', (e) => {\n      e.preventDefault();\n      const div = ul.getElementsByClassName('none-div');\n      const submit = form.newText.value;\n      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n      tasks[para.id].description = submit;\n      form.style.display = 'none';\n      const checkbox = document.createElement('input');\n      checkbox.type = 'checkbox';\n      checkbox.className = 'check-margin';\n      const p = document.createElement('p');\n      p.innerHTML = submit;\n      checkbox.addEventListener('click', () => {\n        if (checkbox.checked) {\n          p.className = 'tasked';\n          li.forEach((list) => {\n            if (list.id === para.id) {\n              list.className = 'delete';\n            }\n          });\n        } else {\n          p.className = 'untasked';\n          li.forEach((list) => {\n            if (list.id === para.id) {\n              list.className = 'undelete';\n            }\n          });\n        }\n      });\n      div.forEach((div) => {\n        if (div.id === para.id) {\n          div.appendChild(checkbox);\n          div.appendChild(p);\n        }\n      });\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n    });\n  });\n};\n\n//# sourceURL=webpack://webpack/./src/edit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed.js */ \"./src/completed.js\");\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ \"./src/edit.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort.js */ \"./src/sort.js\");\n\n\n\n\n// import rendered from './render.js';\n// rendered();\nconst ul = document.getElementById('list-items');\nconst form = document.getElementById('form');\nconst submitTask = document.getElementById('submit-task');\nconst tasks = JSON.parse(localStorage.getItem('tasks')) || [];\nconst button = document.getElementById('submit');\nconst error = document.getElementById('error');\n\nclass Task {\n  constructor(description) {\n    this.description = description;\n    this.isCompleted = false;\n  }\n\n  addTask() {\n    const li = document.createElement('li');\n    li.className = 'new-list';\n    const b = tasks.length;\n    li.id = b;\n    const liDiv = document.createElement('div');\n    liDiv.id = b;\n    liDiv.className = 'new-div';\n    const p = document.createElement('p');\n    p.className = 'new-paragraph';\n    p.id = b;\n    p.addEventListener('dblclick', () => {\n      p.className = 'new-paragraph double-clicked';\n      liDiv.className = 'new-div new-div-clicked';\n      (0,_edit_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.className = 'new-checkbox';\n    checkbox.id = b;\n    checkbox.onclick = _completed_js__WEBPACK_IMPORTED_MODULE_1__.newCompleted;\n    const icon = document.createElement('i');\n    icon.className = 'fa fa-trash';\n    icon.addEventListener('click', () => {\n      ul.removeChild(li);\n      tasks.splice(b, 1);\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n    });\n    p.innerHTML = this.description;\n    ul.appendChild(li);\n    li.appendChild(liDiv);\n    liDiv.appendChild(checkbox);\n    liDiv.appendChild(p);\n    li.appendChild(icon);\n    form.task.value = '';\n  }\n}\n\nsubmitTask.addEventListener('click', () => {\n  const description = form.task.value;\n  if (description === '') {\n    error.style.display = 'block';\n  } else {\n    error.style.display = 'none';\n    const newTask = new Task(description);\n    newTask.addTask();\n    tasks.push(newTask);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n});\n\nconst render = () => {\n  for (let i = 0; i < tasks.length; i += 1) {\n    const li = document.createElement('li');\n    li.id = i;\n    const liDiv = document.createElement('div');\n    liDiv.id = i;\n    const p = document.createElement('p');\n    p.className = 'paragraph';\n    p.id = i;\n    p.addEventListener('dblclick', () => {\n      p.className = 'paragraph old-double-clicked';\n      liDiv.className = 'old-div old-div-clicked';\n      (0,_edit_js__WEBPACK_IMPORTED_MODULE_2__.editOld)();\n    });\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.className = 'checkbox';\n    checkbox.id = i;\n    checkbox.onclick = _completed_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    const icon = document.createElement('i');\n    icon.className = 'fa fa-trash';\n    icon.addEventListener('click', () => {\n      ul.removeChild(li);\n      tasks.splice(i, 1);\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n    });\n    p.innerHTML = tasks[i].description;\n    if (tasks[i].isCompleted) {\n      p.style.textDecoration = 'line-through';\n      checkbox.checked = true;\n      li.className = 'delete';\n    }\n    ul.appendChild(li);\n    li.appendChild(liDiv);\n    liDiv.appendChild(checkbox);\n    liDiv.appendChild(p);\n    li.appendChild(icon);\n  }\n};\n\nbutton.addEventListener('click', _sort_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nif (tasks.length > 0) {\n  render();\n}\n\nfunction component() {\n  const element = document.createElement('div');\n\n  element.classList.add('hello');\n\n  return element;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nHTMLCollection.prototype.forEach = Array.prototype.forEach;\nNodeList.prototype.forEach = Array.prototype.forEach;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const hide = document.getElementsByClassName('delete');\n  let b = 0;\n  hide.forEach((hide) => {\n    const tasks = JSON.parse(localStorage.getItem('tasks'));\n    hide.style.display = 'none';\n    const i = hide.id - b;\n    tasks.splice(i, 1);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n    b += 1;\n  });\n});\n\n//# sourceURL=webpack://webpack/./src/sort.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;