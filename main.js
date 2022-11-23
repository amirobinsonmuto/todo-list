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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display_todo_item_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display-todo-item-form */ \"./src/modules/display-todo-item-form.js\");\n\n\nconsole.log('test');\n\n(0,_modules_display_todo_item_form__WEBPACK_IMPORTED_MODULE_0__.displayTodoItemForm)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display-todo-item-form.js":
/*!***********************************************!*\
  !*** ./src/modules/display-todo-item-form.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodoItemForm\": () => (/* binding */ displayTodoItemForm)\n/* harmony export */ });\n/* harmony import */ var _todo_item_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-factory */ \"./src/modules/todo-item-factory.js\");\n\n\n\nfunction displayTodoItemForm() {\n\n    console.log('displayTodoItemForm is imported properly and working');\n\n    const displayTodoItemFormBtn = document.getElementById('displayTodoItemFormBtn');\n    const todoItemFormDiv = document.getElementById('todoItemFormDiv');\n    const form = document.createElement('div');\n    form.setAttribute('id', 'form')\n\n    function generateForm() {\n        //REVISIT LATER TO CREATE A HELPER FUNCTION?\n        //title\n        const titleDiv = document.createElement('div');\n        titleDiv.classList.add('form-group');\n        const titleLabel = document.createElement('label');\n        const titleInput = document.createElement('input');\n\n        titleLabel.textContent = 'Title';\n        titleLabel.setAttribute('for', 'title');\n\n        titleInput.setAttribute('type', 'text');\n        titleInput.setAttribute('class', 'form-control');\n        titleInput.setAttribute('id', 'itemTitle');\n\n        titleDiv.append(titleLabel, titleInput);\n        form.appendChild(titleDiv);\n\n        //description\n        const descriptionDiv = document.createElement('div');\n        descriptionDiv.classList.add('form-group');\n        const descriptionLabel = document.createElement('label');\n        const descriptionInput = document.createElement('input');\n\n        descriptionLabel.textContent = 'description';\n        descriptionLabel.setAttribute('for', 'description');\n\n        descriptionInput.setAttribute('type', 'text');\n        descriptionInput.setAttribute('class', 'form-control');\n        descriptionInput.setAttribute('id', 'itemDescription');\n\n        descriptionDiv.append(descriptionLabel, descriptionInput);\n        form.appendChild(descriptionDiv);\n\n        //dueDate\n        const dueDateDiv = document.createElement('div');\n        dueDateDiv.classList.add('form-group');\n        const dueDateLabel = document.createElement('label');\n        const dueDateInput = document.createElement('input');\n\n        dueDateLabel.textContent = 'dueDate';\n        dueDateLabel.setAttribute('for', 'dueDate');\n\n        dueDateInput.setAttribute('type', 'text');\n        dueDateInput.setAttribute('class', 'form-control');\n        dueDateInput.setAttribute('id', 'itemDueDate');\n\n        dueDateDiv.append(dueDateLabel, dueDateInput);\n        form.appendChild(dueDateDiv);\n\n        //priority\n        const priorityDiv = document.createElement('div');\n        priorityDiv.classList.add('form-group');\n        const priorityLabel = document.createElement('label');\n        const priorityInput = document.createElement('input');\n\n        priorityLabel.textContent = 'priority';\n        priorityLabel.setAttribute('for', 'priority');\n\n        priorityInput.setAttribute('type', 'text');\n        priorityInput.setAttribute('class', 'form-control');\n        priorityInput.setAttribute('id', 'itemPriority');\n\n        priorityDiv.append(priorityLabel, priorityInput);\n        form.appendChild(priorityDiv);\n        todoItemFormDiv.appendChild(form);\n\n    }   \n\n\n    displayTodoItemFormBtn.addEventListener('click', ( )=> {\n        generateForm();\n\n\n        //submit button \n        const submitBtn = document.createElement('button');\n        submitBtn.textContent = 'submit';\n        submitBtn.setAttribute('id', 'submitBtn');\n        submitBtn.classList.add('btn');\n        submitBtn.classList.add('btn-primary');\n        form.appendChild(submitBtn);\n        todoItemFormDiv.appendChild(form);\n\n        submitBtn.addEventListener('click', _todo_item_factory__WEBPACK_IMPORTED_MODULE_0__.createItemObj);\n    });\n\n\n\n}\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display-todo-item-form.js?");

/***/ }),

/***/ "./src/modules/todo-item-factory.js":
/*!******************************************!*\
  !*** ./src/modules/todo-item-factory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createItemObj\": () => (/* binding */ createItemObj)\n/* harmony export */ });\nfunction todoItemFactory (title, description, dueDate, priority) {\n    return {title, description, dueDate, priority};\n}\n\nlet itemArr = [];\n\nfunction createItemObj() {\n\n    let itemTitle = document.getElementById('itemTitle');\n    let itemDescription = document.getElementById('itemDescription');\n    let itemDueDate = document.getElementById('itemDueDate');\n    let itemPriority = document.getElementById('itemPriority');\n\n    itemArr.push(todoItemFactory(\n        itemTitle.value,\n        itemDescription.value,\n        itemDueDate.value,\n        itemPriority.value\n    ))\n\n    console.log(itemArr);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo-item-factory.js?");

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