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

/***/ "./src/helpers/generate-form.js":
/*!**************************************!*\
  !*** ./src/helpers/generate-form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displaySubmitBtn\": () => (/* binding */ displaySubmitBtn),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"generateItemForm\": () => (/* binding */ generateItemForm),\n/* harmony export */   \"submitBtn\": () => (/* binding */ submitBtn),\n/* harmony export */   \"todoItemFormDiv\": () => (/* binding */ todoItemFormDiv)\n/* harmony export */ });\n\n//function to generate an from to gater item info\nconst todoItemFormDiv = document.getElementById('todoItemFormDiv');\nconst form = document.createElement('div');\nform.setAttribute('id', 'form')\nconst submitBtn = document.createElement('button');\n\nfunction generateItemForm() {\n\n    //REVISIT LATER TO CREATE A HELPER FUNCTION?\n    //title\n    const titleDiv = document.createElement('div');\n    titleDiv.classList.add('form-group');\n    const titleLabel = document.createElement('label');\n    const titleInput = document.createElement('input');\n\n    titleLabel.textContent = 'Title';\n    titleLabel.setAttribute('for', 'title');\n\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('class', 'form-control');\n    titleInput.setAttribute('id', 'itemTitle');\n\n    titleDiv.append(titleLabel, titleInput);\n    form.appendChild(titleDiv);\n\n    //description\n    const descriptionDiv = document.createElement('div');\n    descriptionDiv.classList.add('form-group');\n    const descriptionLabel = document.createElement('label');\n    const descriptionInput = document.createElement('input');\n\n    descriptionLabel.textContent = 'description';\n    descriptionLabel.setAttribute('for', 'description');\n\n    descriptionInput.setAttribute('type', 'text');\n    descriptionInput.setAttribute('class', 'form-control');\n    descriptionInput.setAttribute('id', 'itemDescription');\n\n    descriptionDiv.append(descriptionLabel, descriptionInput);\n    form.appendChild(descriptionDiv);\n\n    //dueDate\n    const dueDateDiv = document.createElement('div');\n    dueDateDiv.classList.add('form-group');\n    const dueDateLabel = document.createElement('label');\n    const dueDateInput = document.createElement('input');\n\n    dueDateLabel.textContent = 'dueDate';\n    dueDateLabel.setAttribute('for', 'dueDate');\n\n    dueDateInput.setAttribute('type', 'text');\n    dueDateInput.setAttribute('class', 'form-control');\n    dueDateInput.setAttribute('id', 'itemDueDate');\n\n    dueDateDiv.append(dueDateLabel, dueDateInput);\n    form.appendChild(dueDateDiv);\n\n    //priority\n    const priorityDiv = document.createElement('div');\n    priorityDiv.classList.add('form-group');\n    const priorityLabel = document.createElement('label');\n    const priorityInput = document.createElement('input');\n\n    priorityLabel.textContent = 'priority';\n    priorityLabel.setAttribute('for', 'priority');\n\n    priorityInput.setAttribute('type', 'text');\n    priorityInput.setAttribute('class', 'form-control');\n    priorityInput.setAttribute('id', 'itemPriority');\n\n    priorityDiv.append(priorityLabel, priorityInput);\n    form.appendChild(priorityDiv);\n    todoItemFormDiv.appendChild(form);\n\n}   \n\n//submit button \nfunction displaySubmitBtn() {\n    submitBtn.textContent = 'submit';\n    submitBtn.setAttribute('id', 'submitBtn');\n    submitBtn.classList.add('btn');\n    submitBtn.classList.add('btn-primary');\n    form.appendChild(submitBtn);\n    todoItemFormDiv.appendChild(form);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/helpers/generate-form.js?");

/***/ }),

/***/ "./src/helpers/generate-item-card.js":
/*!*******************************************!*\
  !*** ./src/helpers/generate-item-card.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayItemCard\": () => (/* binding */ displayItemCard),\n/* harmony export */   \"todoItemCardsDiv\": () => (/* binding */ todoItemCardsDiv)\n/* harmony export */ });\n//function to generate a todo item card\n\nconst todoItemCardsDiv = document.getElementById('todoItemCardsDiv');\n    \nfunction displayItemCard(item) {\n\n    const todoItemCardsList = document.createElement('ul');\n    todoItemCardsList.classList.add('todoItemCardsList');\n\n    const titleLi = document.createElement('li');\n    titleLi.textContent = item.title;\n    const descriptionLi = document.createElement('li');\n    descriptionLi.textContent = item.description;\n    const dueDateLi = document.createElement('li');\n    dueDateLi.textContent = item.dueDate;\n    const priorityLi = document.createElement('li');\n    priorityLi.textContent = item.priority;\n\n    todoItemCardsList.append(\n        titleLi, \n        descriptionLi, \n        dueDateLi, \n        priorityLi\n    );\n    \n    todoItemCardsDiv.appendChild(todoItemCardsList);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/helpers/generate-item-card.js?");

/***/ }),

/***/ "./src/helpers/remove-child.js":
/*!*************************************!*\
  !*** ./src/helpers/remove-child.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeChild\": () => (/* binding */ removeChild)\n/* harmony export */ });\n\n//function to remove all childrens from a given element\nfunction removeChild(el) {\n    while(el.firstChild) {\n        el.removeChild(el.firstChild);\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/helpers/remove-child.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display_todo_item_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display-todo-item-form */ \"./src/modules/display-todo-item-form.js\");\n\n\n(0,_modules_display_todo_item_form__WEBPACK_IMPORTED_MODULE_0__.displayTodoItemForm)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display-todo-item-cards":
/*!*********************************************!*\
  !*** ./src/modules/display-todo-item-cards ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodoItemCards\": () => (/* binding */ displayTodoItemCards)\n/* harmony export */ });\n/* harmony import */ var _todo_item_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-factory */ \"./src/modules/todo-item-factory.js\");\n/* harmony import */ var _helpers_generate_item_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/generate-item-card */ \"./src/helpers/generate-item-card.js\");\n\n\n\nfunction displayTodoItemCards() {\n    _todo_item_factory__WEBPACK_IMPORTED_MODULE_0__.itemArr.forEach(item => (0,_helpers_generate_item_card__WEBPACK_IMPORTED_MODULE_1__.displayItemCard)(item));\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display-todo-item-cards?");

/***/ }),

/***/ "./src/modules/display-todo-item-form.js":
/*!***********************************************!*\
  !*** ./src/modules/display-todo-item-form.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodoItemForm\": () => (/* binding */ displayTodoItemForm)\n/* harmony export */ });\n/* harmony import */ var _todo_item_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-factory */ \"./src/modules/todo-item-factory.js\");\n/* harmony import */ var _helpers_remove_child_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/remove-child.js */ \"./src/helpers/remove-child.js\");\n/* harmony import */ var _helpers_generate_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/generate-form */ \"./src/helpers/generate-form.js\");\n/* harmony import */ var _display_todo_item_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-todo-item-cards */ \"./src/modules/display-todo-item-cards\");\n/* harmony import */ var _helpers_generate_item_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/generate-item-card */ \"./src/helpers/generate-item-card.js\");\n\n\n\n\n\n\n//function to display a todo item form\n//eventListner to the submit button to create an object\n//using the imported createItemObj function\n\nfunction displayTodoItemForm() {\n\n    const displayTodoItemFormBtn = document.getElementById('displayTodoItemFormBtn');\n    displayTodoItemFormBtn.addEventListener('click', ()=>{\n        (0,_helpers_remove_child_js__WEBPACK_IMPORTED_MODULE_1__.removeChild)(_helpers_generate_form__WEBPACK_IMPORTED_MODULE_2__.form);\n        (0,_helpers_generate_form__WEBPACK_IMPORTED_MODULE_2__.generateItemForm)();\n       (0,_helpers_generate_form__WEBPACK_IMPORTED_MODULE_2__.displaySubmitBtn)();\n\n        _helpers_generate_form__WEBPACK_IMPORTED_MODULE_2__.submitBtn.addEventListener('click', ()=>{\n            (0,_todo_item_factory__WEBPACK_IMPORTED_MODULE_0__.createItemObj)();\n            (0,_helpers_remove_child_js__WEBPACK_IMPORTED_MODULE_1__.removeChild)(_helpers_generate_item_card__WEBPACK_IMPORTED_MODULE_4__.todoItemCardsDiv);\n            (0,_display_todo_item_cards__WEBPACK_IMPORTED_MODULE_3__.displayTodoItemCards)();\n            //removeForm\n            (0,_helpers_remove_child_js__WEBPACK_IMPORTED_MODULE_1__.removeChild)(_helpers_generate_form__WEBPACK_IMPORTED_MODULE_2__.form);\n        });\n    });\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display-todo-item-form.js?");

/***/ }),

/***/ "./src/modules/todo-item-factory.js":
/*!******************************************!*\
  !*** ./src/modules/todo-item-factory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createItemObj\": () => (/* binding */ createItemObj),\n/* harmony export */   \"itemArr\": () => (/* binding */ itemArr)\n/* harmony export */ });\n//use a function factory to create objects using the form values. \n//add the new objects to an array (itemArr)\n\nfunction todoItemFactory (title, description, dueDate, priority) {\n    return {title, description, dueDate, priority};\n}\n\nlet itemArr = [];\n\nfunction createItemObj() {\n\n    let itemTitle = document.getElementById('itemTitle');\n    let itemDescription = document.getElementById('itemDescription');\n    let itemDueDate = document.getElementById('itemDueDate');\n    let itemPriority = document.getElementById('itemPriority');\n\n    itemArr.push(todoItemFactory(\n        itemTitle.value,\n        itemDescription.value,\n        itemDueDate.value,\n        itemPriority.value\n    ))\n\n    console.log(itemArr);\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo-item-factory.js?");

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