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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_add_eventlistners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/add-eventlistners */ \"./src/modules/add-eventlistners.js\");\n\n\n(0,_modules_add_eventlistners__WEBPACK_IMPORTED_MODULE_0__.addEventListners)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-eventlistners.js":
/*!******************************************!*\
  !*** ./src/modules/add-eventlistners.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListners\": () => (/* binding */ addEventListners)\n/* harmony export */ });\n/* harmony import */ var _generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-proj-form.js */ \"./src/modules/generate-proj-form.js\");\n/* harmony import */ var _proj_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proj-class.js */ \"./src/modules/proj-class.js\");\n/* harmony import */ var _generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-addItem-btn.js */ \"./src/modules/generate-addItem-btn.js\");\n/* harmony import */ var _generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-item-form.js */ \"./src/modules/generate-item-form.js\");\n/* harmony import */ var _helpers_remove_child__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/remove-child */ \"./src/helpers/remove-child.js\");\n/* harmony import */ var _display_projArr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-projArr */ \"./src/modules/display-projArr.js\");\n/* harmony import */ var _display_itemArr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display-itemArr */ \"./src/modules/display-itemArr.js\");\n/* harmony import */ var _combine_all_items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combine-all-items */ \"./src/modules/combine-all-items.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction addEventListners() {\n\n    const addProjBtn = document.getElementById('add-proj-btn');\n    \n    addProjBtn.addEventListener('click', ()=>{\n        //generate a proj form\n        (0,_generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.generateProjForm)();\n        //display a submit proj button\n        (0,_generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.displaySubmitProjBtn)();\n        (0,_generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.displayCancelProjBtn)();\n    })\n\n    _generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.submitProjBtn.addEventListener('click', ()=>{ \n        //create a proj obj and push it to projArr \n        //and assign in the index number to submitProjBtn           \n        ;(0,_proj_class_js__WEBPACK_IMPORTED_MODULE_1__.createProjObj)(_generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.addItemBtn); \n        //display an add item button\n        (0,_generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.displayAddItemBtn)(); \n        _generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.projFormDiv.removeChild(_generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.projForm);\n\n        (0,_display_projArr__WEBPACK_IMPORTED_MODULE_5__.displayProjArr)(_proj_class_js__WEBPACK_IMPORTED_MODULE_1__.projArr);\n        (0,_display_projArr__WEBPACK_IMPORTED_MODULE_5__.toggleProjs)(_generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.addItemBtn);\n        console.log(_proj_class_js__WEBPACK_IMPORTED_MODULE_1__.projArr);\n    })\n\n    _generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.cancelProjBtn.addEventListener('click', ()=>{\n        _generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.projFormDiv.removeChild(_generate_proj_form_js__WEBPACK_IMPORTED_MODULE_0__.projForm);\n\n    })\n\n    _generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.addItemBtn.addEventListener('click', ()=>{\n        //generate a todo item form\n        ;(0,_generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.generateItemForm)(); \n        //display a submit item button and transfer the index number attached \n        //on submitProjBtn to addItemBtn\n        (0,_generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.displaySubmitItemBtn)(_generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.addItemBtn); \n        (0,_generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.displayCancelItemBtn)();\n    })\n\n    _generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.cancelItemBtn.addEventListener('click', ()=>{\n        ;(0,_helpers_remove_child__WEBPACK_IMPORTED_MODULE_4__.removeAllChildren)(_generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.itemFormDiv);\n        (0,_generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.displayAddItemBtn)(); \n    })\n\n    _generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.submitItemBtn.addEventListener('click', ()=>{\n        //get the index number from the submitItemBtn\n        let submitItemBtnIndex = _generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.submitItemBtn.getAttribute('data-indexNum');\n        //call a method using the index number\n        _proj_class_js__WEBPACK_IMPORTED_MODULE_1__.projArr[submitItemBtnIndex].createItemObj();\n        (0,_helpers_remove_child__WEBPACK_IMPORTED_MODULE_4__.removeAllChildren)(_generate_item_form_js__WEBPACK_IMPORTED_MODULE_3__.itemFormDiv);\n        //display an add item button again\n\n        (0,_display_itemArr__WEBPACK_IMPORTED_MODULE_6__.displayItemArr)(_proj_class_js__WEBPACK_IMPORTED_MODULE_1__.projArr[submitItemBtnIndex].itemArr);\n        (0,_generate_addItem_btn_js__WEBPACK_IMPORTED_MODULE_2__.displayAddItemBtn)();\n\n        console.log(_proj_class_js__WEBPACK_IMPORTED_MODULE_1__.projArr[submitItemBtnIndex].itemArr);\n    })\n\n    _combine_all_items__WEBPACK_IMPORTED_MODULE_7__.allTaskBtn.addEventListener('click', ()=>{\n        ;(0,_combine_all_items__WEBPACK_IMPORTED_MODULE_7__.combineAllItems)();\n        (0,_display_itemArr__WEBPACK_IMPORTED_MODULE_6__.displayItemArr)(_combine_all_items__WEBPACK_IMPORTED_MODULE_7__.allItemsFlatted);\n    })\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/add-eventlistners.js?");

/***/ }),

/***/ "./src/modules/combine-all-items.js":
/*!******************************************!*\
  !*** ./src/modules/combine-all-items.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allItemsFlatted\": () => (/* binding */ allItemsFlatted),\n/* harmony export */   \"allTaskBtn\": () => (/* binding */ allTaskBtn),\n/* harmony export */   \"combineAllItems\": () => (/* binding */ combineAllItems)\n/* harmony export */ });\n/* harmony import */ var _proj_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proj-class.js */ \"./src/modules/proj-class.js\");\n\n\nlet allItems = [];\nlet allItemsFlatted = []\nconst allTaskBtn = document.getElementById('display-all-items');\n\nfunction combineAllItems(){\n\n    for (let i=0; i<_proj_class_js__WEBPACK_IMPORTED_MODULE_0__.projArr.length; i++){\n        allItems.push(_proj_class_js__WEBPACK_IMPORTED_MODULE_0__.projArr[i].itemArr);\n    }\n\n    allItemsFlatted = allItems.flat(1);\n    console.log(allItemsFlatted);\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/combine-all-items.js?");

/***/ }),

/***/ "./src/modules/display-itemArr.js":
/*!****************************************!*\
  !*** ./src/modules/display-itemArr.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteItem\": () => (/* binding */ deleteItem),\n/* harmony export */   \"displayItemArr\": () => (/* binding */ displayItemArr)\n/* harmony export */ });\n/* harmony import */ var _helpers_remove_child__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/remove-child */ \"./src/helpers/remove-child.js\");\n\n\nconst itemArrUl = document.getElementById('itemarr-ul');\n    \nfunction displayItemArr(itemArr) {\n\n    (0,_helpers_remove_child__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(itemArrUl);\n\n    itemArr.forEach( (el) => {\n        let itemArrLi = document.createElement('li');\n        let itemIndexNum = itemArr.indexOf(el);\n        itemArrLi.setAttribute('data-itemindexnum', itemIndexNum);\n        let itemArrLiItemTitle = document.createElement('p');\n        itemArrLiItemTitle.textContent = el.itemTitle\n        let itemArrLiItemDueDate = document.createElement('p');\n        itemArrLiItemDueDate.textContent = el.itemDueDate;\n        let cpltIcon = document.createElement('p');\n        cpltIcon.textContent = 'Complete';\n        cpltIcon.classList.add('cpltIcon');\n        let delIcon = document.createElement('p');\n        delIcon.textContent = 'Delete';\n        delIcon.classList.add('delIcon');\n        itemArrLi.append(itemArrLiItemTitle, itemArrLiItemDueDate, \n                         cpltIcon, delIcon);\n        itemArrLi.classList.add('itemArrLi');\n        itemArrUl.append(itemArrLi);\n\n        if (el.isItemComplete === true) {\n            itemArrLiItemTitle.classList.add('strike-through');\n            cpltIcon.classList.add('hidden');\n        }\n    })  \n\n    cpltItem(itemArr);\n    deleteItem(itemArr);\n    \n}\n\nfunction cpltItem(itemArr) {\n    let cpltIcons = document.querySelectorAll('.cpltIcon');\n    cpltIcons.forEach( (cpltIcon) => {\n        cpltIcon.addEventListener('click', (e) => {\n            let index = e.target.parentElement.getAttribute('data-itemindexnum');\n            itemArr[index].isItemComplete = true;\n            console.log(itemArr);\n            displayItemArr(itemArr);\n        })\n    })\n}\n\nfunction deleteItem(itemArr) {\n    let delIcons = document.querySelectorAll('.delIcon');\n    delIcons.forEach( (del) => {\n        del.addEventListener('click', (e) => {\n            let index = e.target.parentElement.getAttribute('data-itemindexnum');\n            itemArr.splice(index, 1);\n            (0,_helpers_remove_child__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(itemArrUl);\n            displayItemArr(itemArr);\n        })\n    })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display-itemArr.js?");

/***/ }),

/***/ "./src/modules/display-projArr.js":
/*!****************************************!*\
  !*** ./src/modules/display-projArr.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjArr\": () => (/* binding */ displayProjArr),\n/* harmony export */   \"toggleProjs\": () => (/* binding */ toggleProjs)\n/* harmony export */ });\n/* harmony import */ var _helpers_remove_child__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/remove-child */ \"./src/helpers/remove-child.js\");\n/* harmony import */ var _display_itemArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-itemArr */ \"./src/modules/display-itemArr.js\");\n/* harmony import */ var _proj_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proj-class.js */ \"./src/modules/proj-class.js\");\n\n\n\n\nconst projArrUl = document.getElementById('projarr-ul');\nconst activeProjTitleDiv = document.getElementById('active-proj-title-div');\n    \nfunction displayProjArr() {\n\n    (0,_helpers_remove_child__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(projArrUl);\n\n    _proj_class_js__WEBPACK_IMPORTED_MODULE_2__.projArr.forEach( (el) => {\n        let projArrLi = document.createElement('li');\n        projArrLi.textContent = el.projTitle;\n        projArrUl.append(projArrLi);\n        projArrLi.setAttribute('id', _proj_class_js__WEBPACK_IMPORTED_MODULE_2__.projArr.indexOf(el));\n        projArrLi.classList.add('projArrLi');\n    })\n\n    //display the last element's proj title in the main\n    projArrUl.lastElementChild.classList.add('active');\n    activeProjTitleDiv.textContent = 'Project:' + _proj_class_js__WEBPACK_IMPORTED_MODULE_2__.projArr[_proj_class_js__WEBPACK_IMPORTED_MODULE_2__.projArr.length-1].projTitle;\n\n    (0,_display_itemArr__WEBPACK_IMPORTED_MODULE_1__.displayItemArr)(_proj_class_js__WEBPACK_IMPORTED_MODULE_2__.projArr[_proj_class_js__WEBPACK_IMPORTED_MODULE_2__.projArr.length-1].itemArr);\n}\n\nfunction toggleProjs(addItemBtn) {\n    let projArrLis = document.querySelectorAll('.projArrLi');\n    projArrLis.forEach( (li) => {\n        li.addEventListener('click', ()=>{\n            let indexNum = li.getAttribute('id');\n            addItemBtn.setAttribute('data-indexNum', indexNum);\n            projArrLis.forEach(f => f.classList.remove('active'));\n            li.classList.add('active');\n            //display the proj title of the active li in the main\n            let activeObj = document.querySelector('.active');\n            activeProjTitleDiv.textContent = 'Project:' + activeObj.textContent;\n            (0,_display_itemArr__WEBPACK_IMPORTED_MODULE_1__.displayItemArr)(_proj_class_js__WEBPACK_IMPORTED_MODULE_2__.projArr[indexNum].itemArr);\n        })\n    })\n}\n\n  \n\n//# sourceURL=webpack://todo-list/./src/modules/display-projArr.js?");

/***/ }),

/***/ "./src/modules/generate-addItem-btn.js":
/*!*********************************************!*\
  !*** ./src/modules/generate-addItem-btn.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItemBtn\": () => (/* binding */ addItemBtn),\n/* harmony export */   \"displayAddItemBtn\": () => (/* binding */ displayAddItemBtn)\n/* harmony export */ });\n   \nconst addItemBtn = document.createElement('button');\n\nfunction displayAddItemBtn() {\n    addItemBtn.textContent = 'add todo item';\n    const itemFormDiv = document.getElementById('item-form-div');\n    itemFormDiv.appendChild(addItemBtn);\n    addItemBtn.setAttribute('id', 'addItemBtn');\n    addItemBtn.classList.add('btn');\n    addItemBtn.classList.add('btn-secondary');\n    addItemBtn.classList.add('mt-3');\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/generate-addItem-btn.js?");

/***/ }),

/***/ "./src/modules/generate-item-form.js":
/*!*******************************************!*\
  !*** ./src/modules/generate-item-form.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancelItemBtn\": () => (/* binding */ cancelItemBtn),\n/* harmony export */   \"displayCancelItemBtn\": () => (/* binding */ displayCancelItemBtn),\n/* harmony export */   \"displaySubmitItemBtn\": () => (/* binding */ displaySubmitItemBtn),\n/* harmony export */   \"generateItemForm\": () => (/* binding */ generateItemForm),\n/* harmony export */   \"itemForm\": () => (/* binding */ itemForm),\n/* harmony export */   \"itemFormDiv\": () => (/* binding */ itemFormDiv),\n/* harmony export */   \"submitItemBtn\": () => (/* binding */ submitItemBtn)\n/* harmony export */ });\n\n//function to generate an from to gater item info\nconst itemFormDiv = document.getElementById('item-form-div');\nconst itemForm = document.createElement('div');\nitemForm.setAttribute('id', 'itemForm')\nconst submitItemBtn = document.createElement('button');\nconst cancelItemBtn = document.createElement('button');\n//title\nconst titleDiv = document.createElement('div');\ntitleDiv.classList.add('form-group');\nconst titleLabel = document.createElement('label');\nconst titleInput = document.createElement('input');\n//description\nconst descrDiv = document.createElement('div');\ndescrDiv.classList.add('form-group');\nconst descrLabel = document.createElement('label');\nconst descrInput = document.createElement('input');\n//duedate\nconst dueDateDiv = document.createElement('div');\ndueDateDiv.classList.add('form-group');\nconst dueDateLabel = document.createElement('label');\nconst dueDateInput = document.createElement('input');\n\nfunction generateItemForm() {\n\n    //title\n    titleLabel.textContent = 'Title';\n    titleLabel.setAttribute('for', 'title');\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('class', 'form-control');\n    titleInput.setAttribute('id', 'itemTitle');\n    titleDiv.append(titleLabel, titleInput);\n    itemForm.appendChild(titleDiv);\n\n    //description\n    descrLabel.textContent = 'descr';\n    descrLabel.setAttribute('for', 'descr');\n    descrInput.setAttribute('type', 'text');\n    descrInput.setAttribute('class', 'form-control');\n    descrInput.setAttribute('id', 'itemDescr');\n    descrDiv.append(descrLabel, descrInput);\n    itemForm.appendChild(descrDiv);\n\n    //dueDate\n    dueDateLabel.textContent = 'dueDate';\n    dueDateLabel.setAttribute('for', 'dueDate');\n    dueDateInput.setAttribute('type', 'date');\n    dueDateInput.setAttribute('class', 'form-control');\n    dueDateInput.setAttribute('id', 'itemDueDate');\n    dueDateDiv.append(dueDateLabel, dueDateInput);\n    itemForm.appendChild(dueDateDiv);\n    \n    //append\n    itemFormDiv.appendChild(itemForm);\n\n}   \n\n//submit button \nfunction displaySubmitItemBtn(addItemBtn) {\n    submitItemBtn.textContent = 'submit';\n    submitItemBtn.setAttribute('id', 'submitItemBtn');\n    submitItemBtn.classList.add('btn');\n    submitItemBtn.classList.add('btn-primary');\n    submitItemBtn.classList.add('me-2');\n    itemForm.appendChild(submitItemBtn);\n    itemFormDiv.appendChild(itemForm);\n    let addItemBtnIndex = addItemBtn.getAttribute('data-indexNum');\n    submitItemBtn.setAttribute('data-indexNum', addItemBtnIndex);\n}\n\nfunction displayCancelItemBtn() {\n    cancelItemBtn.textContent = 'cancel';\n    cancelItemBtn.setAttribute('id', 'cancelItemBtn');\n    cancelItemBtn.classList.add('btn');\n    cancelItemBtn.classList.add('btn-secondary');\n    itemForm.appendChild(cancelItemBtn);\n    itemFormDiv.appendChild(itemForm);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/generate-item-form.js?");

/***/ }),

/***/ "./src/modules/generate-proj-form.js":
/*!*******************************************!*\
  !*** ./src/modules/generate-proj-form.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancelProjBtn\": () => (/* binding */ cancelProjBtn),\n/* harmony export */   \"displayCancelProjBtn\": () => (/* binding */ displayCancelProjBtn),\n/* harmony export */   \"displaySubmitProjBtn\": () => (/* binding */ displaySubmitProjBtn),\n/* harmony export */   \"generateProjForm\": () => (/* binding */ generateProjForm),\n/* harmony export */   \"projForm\": () => (/* binding */ projForm),\n/* harmony export */   \"projFormDiv\": () => (/* binding */ projFormDiv),\n/* harmony export */   \"submitProjBtn\": () => (/* binding */ submitProjBtn)\n/* harmony export */ });\n\n//function to generate an from to gater project info\nconst projFormDiv = document.getElementById('proj-form-div');\nconst projForm = document.createElement('div');\nprojForm.setAttribute('id', 'projForm')\nconst submitProjBtn = document.createElement('button');\nconst cancelProjBtn = document.createElement('button');\n//title\nconst projTitleDiv = document.createElement('div');\nprojTitleDiv.classList.add('form-group');\nconst projTitleLabel = document.createElement('label');\nconst projTitleInput = document.createElement('input');\n//description\nconst projDescrDiv = document.createElement('div');\nprojDescrDiv.classList.add('form-group');\nconst projDescrLabel = document.createElement('label');\nconst projDescrInput = document.createElement('input');\n\n\nfunction generateProjForm() {\n\n    //title\n    projTitleLabel.textContent = 'proj Title';\n    projTitleLabel.setAttribute('for', 'projTitle');\n\n    projTitleInput.setAttribute('type', 'text');\n    projTitleInput.setAttribute('class', 'form-control');\n    projTitleInput.setAttribute('id', 'projTitle');\n\n    projTitleDiv.append(projTitleLabel, projTitleInput);\n    projForm.appendChild(projTitleDiv);\n\n    //description\n    projDescrLabel.textContent = 'proj Descr';\n    projDescrLabel.setAttribute('for', 'projDescr');\n\n    projDescrInput.setAttribute('type', 'text');\n    projDescrInput.setAttribute('class', 'form-control');\n    projDescrInput.setAttribute('id', 'projDescr');\n\n    projDescrDiv.append(projDescrLabel, projDescrInput);\n    projForm.appendChild(projDescrDiv);\n\n    projFormDiv.appendChild(projForm);\n\n}\n    \n//submit button \nfunction displaySubmitProjBtn() {\n    submitProjBtn.textContent = 'submit';\n    submitProjBtn.setAttribute('id', 'submitProjBtn');\n    submitProjBtn.classList.add('btn');\n    submitProjBtn.classList.add('btn-primary');\n    submitProjBtn.classList.add('mt-3');\n    submitProjBtn.classList.add('me-2');\n    projForm.appendChild(submitProjBtn);\n    projFormDiv.appendChild(projForm);\n}\n\nfunction displayCancelProjBtn() {\n    cancelProjBtn.textContent = 'cancel';\n    cancelProjBtn.setAttribute('id', 'cancelProjBtn');\n    cancelProjBtn.classList.add('btn');\n    cancelProjBtn.classList.add('btn-secondary');\n    cancelProjBtn.classList.add('mt-3');\n    projForm.appendChild(cancelProjBtn);\n    projFormDiv.appendChild(projForm);\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/generate-proj-form.js?");

/***/ }),

/***/ "./src/modules/proj-class.js":
/*!***********************************!*\
  !*** ./src/modules/proj-class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjObj\": () => (/* binding */ createProjObj),\n/* harmony export */   \"projArr\": () => (/* binding */ projArr)\n/* harmony export */ });\n//Project class\nconst projArr = []\n\nclass Project {\n    constructor(projTitle, projDescr) {\n        this.projTitle = projTitle;\n        this.projDescr = projDescr;\n        this.itemArr = []\n    };\n\n    //method - use the factory function to create an item obj. this will be ineheritated \n    //to an item obj\n    createItemObj() {\n\n        //factory function to create an item obj\n        function todoItemFactory(projTitle, itemTitle, itemDesc, itemDueDate) {\n            return {\n            projTitle: projTitle,\n            itemTitle: itemTitle,\n            itemDesc: itemDesc,\n            itemDueDate: itemDueDate,\n            isItemComplete: ''\n            }\n        }\n\n        //get the form values from the item form\n        let itemTitle = document.getElementById('itemTitle');\n        let itemDescr = document.getElementById('itemDescr');\n        let itemDueDate = document.getElementById('itemDueDate');\n\n        //create an item obj using the factory function and push it to the itemArr\n        this.itemArr.push(todoItemFactory(\n            this.projTitle,\n            itemTitle.value,\n            itemDescr.value,\n            itemDueDate.value,\n\n        ))\n\n        itemTitle.value = \"\";\n        itemDescr.value = \"\";\n        itemDueDate.value = \"\"; \n\n    }\n}\n\n//method - method to actually create a project\nfunction createProjObj(addItemBtn) {\n\n    //get the values from the proj form\n    let projTitle = document.getElementById('projTitle');\n    let projDescr = document.getElementById('projDescr');\n\n    //create a new proj obj using Project class and push it to projArr\n    let newObj = new Project (projTitle.value, projDescr.value,)\n    projArr.push(newObj);\n    let indexNum = projArr.indexOf(newObj);\n    addItemBtn.setAttribute('data-indexNum', indexNum);\n\n    projTitle.value = \"\";\n    projDescr.value = \"\";\n\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/proj-class.js?");

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