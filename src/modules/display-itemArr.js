import { removeAllChildren } from "../helpers/remove-child";

import { addItemBtn, displayAddItemBtn } from "./generate-addItem-btn";

import {
  itemFormDiv,
  submitItemBtn,
  generateItemForm,
  displayCancelItemBtn,
  saveEditItemBtn,
  titleInput,
  descrInput,
  dueDateInput,
} from "./generate-item-form.js";

import { disableToggle, activateToggle } from "../helpers/disable-toggle";

const itemArrUl = document.getElementById("itemarr-ul");

const displayItemArr = (itemArr) => {
  removeAllChildren(itemArrUl);

  itemArr.forEach((el) => {
    const itemArrLi = document.createElement("li");
    const itemIndexNum = itemArr.indexOf(el);
    itemArrLi.setAttribute("data-itemindexnum", itemIndexNum);

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left-div");

    const cpltIcon = document.createElement("input");
    cpltIcon.classList.add("cpltIcon");
    cpltIcon.setAttribute("type", "checkbox");

    const itemArrLiItemTitle = document.createElement("p");
    itemArrLiItemTitle.textContent = el.itemTitle;

    leftDiv.append(cpltIcon, itemArrLiItemTitle);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("right-div");

    const itemArrLiItemDueDate = document.createElement("p");
    itemArrLiItemDueDate.textContent = "Due: " + el.itemDueDate;

    const itemEditBtn = document.createElement("p");
    itemEditBtn.textContent = "Edit";
    itemEditBtn.classList.add("itemEditBtn");
    itemEditBtn.classList.add("btn");
    itemEditBtn.classList.add("btn-outline-primary");
    itemEditBtn.classList.add("btn-sm");

    const delIcon = document.createElement("img");
    delIcon.setAttribute("src", "./bootstrap-icons/trash.svg");
    delIcon.classList.add("filter-red");
    delIcon.classList.add("delIcon");

    rightDiv.append(itemArrLiItemDueDate, itemEditBtn, delIcon);

    itemArrLi.append(leftDiv, rightDiv);
    itemArrLi.classList.add("itemArrLi");
    itemArrUl.append(itemArrLi);

    if (el.isItemComplete) {
      itemArrLiItemTitle.classList.add("strike-through");
      cpltIcon.checked = true;
    }
  });

  cpltItem(itemArr);
  editItem(itemArr);
  deleteItem(itemArr);
};

let index;

const cpltItem = (itemArr) => {
  const cpltIcons = document.querySelectorAll(".cpltIcon");
  cpltIcons.forEach((cpltIcon) => {
    cpltIcon.addEventListener("click", (e) => {
      index =
        e.target.parentElement.parentElement.getAttribute("data-itemindexnum");
      itemArr[index].isItemComplete = true;
      displayItemArr(itemArr);
    });
  });
};

const deleteItem = (itemArr) => {
  const delIcons = document.querySelectorAll(".delIcon");
  delIcons.forEach((del) => {
    del.addEventListener("click", (e) => {
      index =
        e.target.parentElement.parentElement.getAttribute("data-itemindexnum");
      itemArr.splice(index, 1);
      removeAllChildren(itemArrUl);
      displayItemArr(itemArr);
    });
  });
};

const editItem = (itemArr) => {
  const itemEditBtns = document.querySelectorAll(".itemEditBtn");
  itemEditBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", (e) => {
      index =
        e.target.parentElement.parentElement.getAttribute("data-itemindexnum");
      generateItemForm(addItemBtn);
      titleInput.value = itemArr[index].itemTitle;
      descrInput.value = itemArr[index].itemDesc;
      dueDateInput.value = itemArr[index].itemDueDate;
      saveEditItemBtn();
      displayCancelItemBtn();
      disableToggle(".projArrLi");
      submitItemBtn.classList.add("hidden");
      saveEditItem(itemArr);
    });
  });
};

const saveEditItem = (itemArr) => {
  const saveBtn = document.getElementById("saveBtn");
  saveBtn.addEventListener("click", (e) => {
    itemArr[index].itemTitle = titleInput.value;
    itemArr[index].itemDesc = descrInput.value;
    itemArr[index].itemDueDate = dueDateInput.value;
    removeAllChildren(itemFormDiv);
    displayItemArr(itemArr);
    displayAddItemBtn();
    activateToggle(".projArrLi");
  });
};

export { displayItemArr, deleteItem, itemArrUl, cpltItem };
