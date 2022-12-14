// Project class
const projArr = [];

class Project {
  constructor(projTitle) {
    this.projTitle = projTitle;
    this.itemArr = [];
  }

  /**  method - use the factory function to create an item obj. this will be
   * ineheritated to an item obj
   */

  setProjTitle(projTitle) {
    this.projTitle = projTitle;
  }

  setItemArr(itemArr) {
    this.itemArr = itemArr;
  }

  createItemObj() {
    // factory function to create an item obj
    function todoItemFactory(projTitle, itemTitle, itemDesc, itemDueDate) {
      return {
        projTitle,
        itemTitle,
        itemDesc,
        itemDueDate,
        isItemComplete: "",
      };
    }

    // get the form values from the item form
    const itemTitle = document.getElementById("itemTitle");
    const itemDescr = document.getElementById("itemDescr");
    const itemDueDate = document.getElementById("itemDueDate");

    // create an item obj using the factory function and push it to the itemArr
    this.itemArr.push(
      todoItemFactory(
        this.projTitle,
        itemTitle.value,
        itemDescr.value,
        itemDueDate.value
      )
    );

    itemTitle.value = "";
    itemDescr.value = "";
    itemDueDate.value = "";
  }
}

const createProjObj = (addItemBtn) => {
  // get the values from the proj form
  const projTitle = document.getElementById("projTitle");

  // create a new proj obj using Project class and push it to projArr
  const newObj = new Project(projTitle.value);
  projArr.push(newObj);
  const indexNum = projArr.indexOf(newObj);
  addItemBtn.setAttribute("data-indexNum", indexNum);

  projTitle.value = "";
};

const createDefaultProjObj = (addItemBtn) => {
  // reate a new proj obj using Project class and push it to projArr
  const newObj = new Project("Default project");
  projArr.push(newObj);
  const indexNum = projArr.indexOf(newObj);
  addItemBtn.setAttribute("data-indexNum", indexNum);
};

export { Project, projArr, createProjObj, createDefaultProjObj };
