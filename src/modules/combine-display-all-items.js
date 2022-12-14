import { projArr } from "./proj-class.js";
import { itemArrUl } from "./display-itemArr";
import { itemFormDiv } from "./generate-item-form.js";
import { removeAllChildren } from "../helpers/remove-child";
import { activeProjTitleDiv } from "./display-projArr";
import { byDate } from "../helpers/sort-bydate";
import { todayLi, thisWeekLi } from "./display-filtered-items-bydate";

const allItemsLi = document.getElementById("display-all-items");
const dueDateLis = document.querySelectorAll(".due-date-li");
let allItemsFlatted = [];

const combineAllItems = () => {
  const allItems = [];
  projArr.forEach((el) => {
    allItems.push(el.itemArr);
  });
  allItemsFlatted = allItems.flat(1).sort(byDate);
};

const displayAllItemFlattedArray = (arr, obj) => {
  removeAllChildren(itemArrUl);
  removeAllChildren(itemFormDiv);

  dueDateLis.forEach((f) => f.classList.remove("active"));

  if (obj === allItemsLi) {
    activeProjTitleDiv.textContent = "All items";
    allItemsLi.classList.add("active");
  } else if (obj === todayLi) {
    activeProjTitleDiv.textContent = "Items Due Today";
    todayLi.classList.add("active");
  } else {
    activeProjTitleDiv.textContent = "Items Due This Week";
    thisWeekLi.classList.add("active");
  }

  const projArrLis = document.querySelectorAll(".projArrLi");
  projArrLis.forEach((f) => f.classList.remove("active"));

  arr.forEach((el) => {
    const itemArrLi = document.createElement("li");
    const itemIndexNum = arr.indexOf(el);
    itemArrLi.setAttribute("data-itemindexnum", itemIndexNum);

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left-div");

    const allCpltIcon = document.createElement("input");
    allCpltIcon.classList.add("allCpltIcon");
    allCpltIcon.setAttribute("type", "checkbox");

    const itemArrLiItemTitle = document.createElement("p");
    itemArrLiItemTitle.textContent = el.itemTitle;

    const projTitle = document.createElement("p");
    projTitle.textContent = "Project: " + el.projTitle;

    leftDiv.append(allCpltIcon, itemArrLiItemTitle, projTitle);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("right-div");

    const itemArrLiItemDueDate = document.createElement("p");
    itemArrLiItemDueDate.textContent = "Due: " + el.itemDueDate;

    const allDltIcon = document.createElement("img");
    allDltIcon.setAttribute("src", "./bootstrap-icons/trash.svg");
    allDltIcon.classList.add("filter-red");
    allDltIcon.classList.add("allDltIcon");

    rightDiv.append(itemArrLiItemDueDate, allDltIcon);

    itemArrLi.append(leftDiv, rightDiv);
    itemArrLi.classList.add("itemArrLi");
    itemArrUl.append(itemArrLi);

    if (el.isItemComplete) {
      itemArrLiItemTitle.classList.add("strike-through");
      allCpltIcon.checked = true;
    }
  });

  if (itemArrUl.firstChild) {
    const editMessage = document.createElement("p");
    editMessage.textContent =
      "Please go to a respective project to edit a to-do item.";
    itemArrUl.append(editMessage);
  }
};

const cpltItemAll = (arr, obj) => {
  const allCpltIcons = document.querySelectorAll(".allCpltIcon");
  allCpltIcons.forEach((allCpltIcon) => {
    allCpltIcon.addEventListener("click", (e) => {
      const index =
        e.target.parentElement.parentElement.getAttribute("data-itemindexnum");
      arr[index].isItemComplete = true;
      displayAllItemFlattedArray(arr, obj);

      // find the index number of the proj object that matches the proj title
      const whichProject = projArr.find(
        (el) => el.projTitle === arr[index].projTitle
      );
      const projArrIndex = projArr.indexOf(whichProject);

      // find the index number of the item object in the respective proj obj
      const findItemObj = projArr[projArrIndex].itemArr.find(
        (el) => el === arr[index]
      );
      const finalindex = projArr[projArrIndex].itemArr.indexOf(findItemObj);
      projArr[projArrIndex].itemArr[finalindex].isItemComplete = true;

      cpltItemAll(arr, obj);
      deleteItemAll(arr, obj);
    });
  });
};

const deleteItemAll = (arr, obj) => {
  const allDltIcons = document.querySelectorAll(".allDltIcon");
  allDltIcons.forEach((del) => {
    del.addEventListener("click", (e) => {
      const index =
        e.target.parentElement.parentElement.getAttribute("data-itemindexnum");

      // find the index number of the proj object that matches the proj title
      const whichProject = projArr.find(
        (el) => el.projTitle === arr[index].projTitle
      );
      const projArrIndex = projArr.indexOf(whichProject);

      // find the index number of the item object in the respective proj obj
      const findItemObj = projArr[projArrIndex].itemArr.find(
        (el) => el === arr[index]
      );
      const finalIndex = projArr[projArrIndex].itemArr.indexOf(findItemObj);
      projArr[projArrIndex].itemArr.splice(finalIndex, 1);

      arr.splice(index, 1);
      removeAllChildren(itemArrUl);
      displayAllItemFlattedArray(arr, obj);
      cpltItemAll(arr, obj);
      deleteItemAll(arr, obj);
    });
  });
};

export {
  allItemsFlatted,
  allItemsLi,
  dueDateLis,
  combineAllItems,
  displayAllItemFlattedArray,
  deleteItemAll,
  cpltItemAll,
};
