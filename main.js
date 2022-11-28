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

/***/ "./src/helpers/remove-child.js":
/*!*************************************!*\
  !*** ./src/helpers/remove-child.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeAllChildren\": () => (/* binding */ removeAllChildren)\n/* harmony export */ });\n\n//function to remove all childrens from a given element\nfunction removeAllChildren(el) {\n    while(el.firstChild){\n        el.removeChild(el.firstChild);\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/helpers/remove-child.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display_proj_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display-proj-form */ \"./src/modules/display-proj-form.js\");\n\n\n(0,_modules_display_proj_form__WEBPACK_IMPORTED_MODULE_0__.displayProjForm)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display-proj-form.js":
/*!******************************************!*\
  !*** ./src/modules/display-proj-form.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjForm\": () => (/* binding */ displayProjForm)\n/* harmony export */ });\n/* harmony import */ var _generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-proj-form.js */ \"./src/modules/generate-proj-form.js\");\n/* harmony import */ var _proj_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proj-class.js */ \"./src/modules/proj-class.js\");\n/* harmony import */ var _generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-addItem-btn.js */ \"./src/modules/generate-addItem-btn.js\");\n/* harmony import */ var _generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-item-form.js */ \"./src/modules/generate-item-form.js\");\n/* harmony import */ var _helpers_remove_child__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/remove-child */ \"./src/helpers/remove-child.js\");\n\n\n\n\n\n\n    \n\n//function to display a todo item form\n//eventListner to the submit button to create an object\n//using the imported createItemObj function\n\nfunction displayProjForm() {\n\n    const addProjBtn = document.getElementById('addProjBtn');\n    \n    addProjBtn.addEventListener('click', ()=>{\n        (0,_generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.generateProjForm)(); //generate a proj form\n        (0,_generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.displaySubmitProjBtn)(); //display a submit proj button\n    })\n\n    _generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.submitProjBtn.addEventListener('click', ()=>{            \n        let indexNum = (0,_proj_class_js__WEBPACK_IMPORTED_MODULE_1__.createProjObj)(); //create a proj obj and push it to projArr and get an index number\n        console.log(indexNum);\n        (0,_generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.displayAddItemBtn)(); //display an add item button\n        _generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.addItemBtn.setAttribute('data-index', indexNum);\n        _generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.projFormDiv.removeChild(_generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.projForm);\n    })\n\n    _generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.addItemBtn.addEventListener('click', ()=>{\n        ;(0,_generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.generateItemForm)(); //generate a todo item form\n        (0,_generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.displaySubmitItemBtn)(); //display a submit item button\n        let addItemBtnIndex = _generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.addItemBtn.getAttribute('data-index');\n        _generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.submitItemBtn.setAttribute('data-index', addItemBtnIndex);\n    })\n\n    _generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.submitItemBtn.addEventListener('click', ()=>{\n    let submitItemBtnIndex = _generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.submitItemBtn.getAttribute('data-index');\n    _proj_class_js__WEBPACK_IMPORTED_MODULE_1__.projArr[submitItemBtnIndex].createItemObj();\n    console.log(_proj_class_js__WEBPACK_IMPORTED_MODULE_1__.projArr);\n    console.log(_proj_class_js__WEBPACK_IMPORTED_MODULE_1__.projArr[submitItemBtnIndex].itemArr);\n    (0,_helpers_remove_child__WEBPACK_IMPORTED_MODULE_4__.removeAllChildren)(_generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.todoItemFormDiv);\n    (0,_generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.displayAddItemBtn)(); //display an add item button\n    })\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display-proj-form.js?");

/***/ }),

/***/ "./src/modules/generate-addItem-btn.js":
/*!*********************************************!*\
  !*** ./src/modules/generate-addItem-btn.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItemBtn\": () => (/* binding */ addItemBtn),\n/* harmony export */   \"displayAddItemBtn\": () => (/* binding */ displayAddItemBtn)\n/* harmony export */ });\n   \nconst addItemBtn = document.createElement('button');\n\nfunction displayAddItemBtn() {\n    addItemBtn.textContent = 'add todo item';\n    const todoItemFormDiv = document.getElementById('todoItemFormDiv');\n    todoItemFormDiv.appendChild(addItemBtn);\n    addItemBtn.setAttribute('id', 'addItemBtn');\n    addItemBtn.classList.add('btn');\n    addItemBtn.classList.add('btn-secondary');\n    addItemBtn.classList.add('mt-3');\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/generate-addItem-btn.js?");

/***/ }),

/***/ "./src/modules/generate-item-form.js":
/*!*******************************************!*\
  !*** ./src/modules/generate-item-form.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displaySubmitItemBtn\": () => (/* binding */ displaySubmitItemBtn),\n/* harmony export */   \"generateItemForm\": () => (/* binding */ generateItemForm),\n/* harmony export */   \"itemForm\": () => (/* binding */ itemForm),\n/* harmony export */   \"submitItemBtn\": () => (/* binding */ submitItemBtn),\n/* harmony export */   \"todoItemFormDiv\": () => (/* binding */ todoItemFormDiv)\n/* harmony export */ });\n\n//function to generate an from to gater item info\nconst todoItemFormDiv = document.getElementById('todoItemFormDiv');\nconst itemForm = document.createElement('div');\nitemForm.setAttribute('id', 'itemForm')\nconst submitItemBtn = document.createElement('button');\n//title\nconst titleDiv = document.createElement('div');\ntitleDiv.classList.add('form-group');\nconst titleLabel = document.createElement('label');\nconst titleInput = document.createElement('input');\n//description\nconst descrDiv = document.createElement('div');\ndescrDiv.classList.add('form-group');\nconst descrLabel = document.createElement('label');\nconst descrInput = document.createElement('input');\n//duedate\nconst dueDateDiv = document.createElement('div');\ndueDateDiv.classList.add('form-group');\nconst dueDateLabel = document.createElement('label');\nconst dueDateInput = document.createElement('input');\n//priotiy\nconst priorityDiv = document.createElement('div');\npriorityDiv.classList.add('form-group');\nconst priorityLabel = document.createElement('label');\nconst priorityInput = document.createElement('input');\n\n\nfunction generateItemForm() {\n\n    //REVISIT LATER TO CREATE A HELPER FUNCTION?\n    //title\n\n    titleLabel.textContent = 'Title';\n    titleLabel.setAttribute('for', 'title');\n\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('class', 'form-control');\n    titleInput.setAttribute('id', 'itemTitle');\n\n    titleDiv.append(titleLabel, titleInput);\n    itemForm.appendChild(titleDiv);\n\n    //description\n\n    descrLabel.textContent = 'descr';\n    descrLabel.setAttribute('for', 'descr');\n\n    descrInput.setAttribute('type', 'text');\n    descrInput.setAttribute('class', 'form-control');\n    descrInput.setAttribute('id', 'itemDescr');\n\n    descrDiv.append(descrLabel, descrInput);\n    itemForm.appendChild(descrDiv);\n\n    //dueDate\n\n    dueDateLabel.textContent = 'dueDate';\n    dueDateLabel.setAttribute('for', 'dueDate');\n\n    dueDateInput.setAttribute('type', 'text');\n    dueDateInput.setAttribute('class', 'form-control');\n    dueDateInput.setAttribute('id', 'itemDueDate');\n\n    dueDateDiv.append(dueDateLabel, dueDateInput);\n    itemForm.appendChild(dueDateDiv);\n\n    //priority\n    \n    priorityLabel.textContent = 'priority';\n    priorityLabel.setAttribute('for', 'priority');\n\n    priorityInput.setAttribute('type', 'text');\n    priorityInput.setAttribute('class', 'form-control');\n    priorityInput.setAttribute('id', 'itemPriority');\n\n    priorityDiv.append(priorityLabel, priorityInput);\n    itemForm.appendChild(priorityDiv);\n    todoItemFormDiv.appendChild(itemForm);\n\n}   \n\n//submit button \nfunction displaySubmitItemBtn() {\n    submitItemBtn.textContent = 'submit';\n    submitItemBtn.setAttribute('id', 'submitItemBtn');\n    submitItemBtn.classList.add('btn');\n    submitItemBtn.classList.add('btn-primary');\n    itemForm.appendChild(submitItemBtn);\n    todoItemFormDiv.appendChild(itemForm);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/generate-item-form.js?");

/***/ }),

/***/ "./src/modules/generate-proj-form.js":
/*!*******************************************!*\
  !*** ./src/modules/generate-proj-form.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displaySubmitProjBtn\": () => (/* binding */ displaySubmitProjBtn),\n/* harmony export */   \"generateProjForm\": () => (/* binding */ generateProjForm),\n/* harmony export */   \"projForm\": () => (/* binding */ projForm),\n/* harmony export */   \"projFormDiv\": () => (/* binding */ projFormDiv),\n/* harmony export */   \"submitProjBtn\": () => (/* binding */ submitProjBtn)\n/* harmony export */ });\n\n//function to generate an from to gater project info\nconst projFormDiv = document.getElementById('projFormDiv');\nconst projForm = document.createElement('div');\nprojForm.setAttribute('id', 'projForm')\nconst submitProjBtn = document.createElement('button');\n//title\nconst projTitleDiv = document.createElement('div');\nprojTitleDiv.classList.add('form-group');\nconst projTitleLabel = document.createElement('label');\nconst projTitleInput = document.createElement('input');\n//description\nconst projDescrDiv = document.createElement('div');\nprojDescrDiv.classList.add('form-group');\nconst projDescrLabel = document.createElement('label');\nconst projDescrInput = document.createElement('input');\n\n\nfunction generateProjForm() {\n\n    //title\n    projTitleLabel.textContent = 'proj Title';\n    projTitleLabel.setAttribute('for', 'projTitle');\n\n    projTitleInput.setAttribute('type', 'text');\n    projTitleInput.setAttribute('class', 'form-control');\n    projTitleInput.setAttribute('id', 'projTitle');\n\n    projTitleDiv.append(projTitleLabel, projTitleInput);\n    projForm.appendChild(projTitleDiv);\n\n    //description\n    projDescrLabel.textContent = 'proj Descr';\n    projDescrLabel.setAttribute('for', 'projDescr');\n\n    projDescrInput.setAttribute('type', 'text');\n    projDescrInput.setAttribute('class', 'form-control');\n    projDescrInput.setAttribute('id', 'projDescr');\n\n    projDescrDiv.append(projDescrLabel, projDescrInput);\n    projForm.appendChild(projDescrDiv);\n\n    projFormDiv.appendChild(projForm);\n\n}\n    \n//submit button \nfunction displaySubmitProjBtn() {\n    submitProjBtn.textContent = 'submit';\n    submitProjBtn.setAttribute('id', 'submitProjBtn');\n    submitProjBtn.classList.add('btn');\n    submitProjBtn.classList.add('btn-primary');\n    submitProjBtn.classList.add('mt-3');\n    projForm.appendChild(submitProjBtn);\n    projFormDiv.appendChild(projForm);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/generate-proj-form.js?");

/***/ }),

/***/ "./src/modules/proj-class.js":
/*!***********************************!*\
  !*** ./src/modules/proj-class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjObj\": () => (/* binding */ createProjObj),\n/* harmony export */   \"projArr\": () => (/* binding */ projArr)\n/* harmony export */ });\n//Project class\nconst projArr = []\n\nclass Project {\n    constructor(projTitle, projDescr) {\n        this.projTitle = projTitle;\n        this.projDescr = projDescr;\n        this.itemArr = []\n    };\n\n    //method - use the factory function to create an item obj. this will be ineheritated \n    //to an item obj\n    createItemObj() {\n\n        //factory function to create an item obj\n        function todoItemFactory(projTitle, itemTitle, itemDesc, itemDueDate, itemPriority) {\n            return {\n            projTitle: projTitle,\n            itemTitle: itemTitle,\n            itemDesc: itemDesc,\n            itemDueDate: itemDueDate,\n            itemPriority: itemPriority\n            }\n        }\n\n        //get the form values from the item form\n        let itemTitle = document.getElementById('itemTitle');\n        let itemDescr = document.getElementById('itemDescr');\n        let itemDueDate = document.getElementById('itemDueDate');\n        let itemPriority = document.getElementById('itemPriority');\n\n        //create an item obj using the factory function and push it to the itemArr\n        this.itemArr.push(todoItemFactory(\n            this.projTitle,\n            itemTitle.value,\n            itemDescr.value,\n            itemDueDate.value,\n            itemPriority.valueS\n        ))\n\n    }\n}\n\n//method - method to actually create a project\nfunction createProjObj() {\n\n    //get the values from the proj form\n    let projTitle = document.getElementById('projTitle');\n    let projDescr = document.getElementById('projDescr');\n\n    //create a new proj obj using Project class and push it to projArr\n    let newObj = (new Project (projTitle.value, projDescr.value,))\n    projArr.push(newObj);\n    let indexNum = projArr.indexOf(newObj);\n    console.log(projArr);\n\n    return indexNum\n\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/proj-class.js?");

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