//Project class
const projArr = []

class Project {
    constructor(projTitle) {
        this.projTitle = projTitle;
        this.itemArr = []
    };

    //method - use the factory function to create an item obj. this will be ineheritated 
    //to an item obj

    setProjTitle(projTitle) {
        this.projTitle = projTitle
      }


    setItemArr(itemArr){
        this.itemArr = itemArr;
    }

    createItemObj() {

        //factory function to create an item obj
        function todoItemFactory(projTitle, itemTitle, itemDesc, itemDueDate) {
            return {
            projTitle: projTitle,
            itemTitle: itemTitle,
            itemDesc: itemDesc,
            itemDueDate: itemDueDate,
            isItemComplete: ''
            }
        }

        //get the form values from the item form
        let itemTitle = document.getElementById('itemTitle');
        let itemDescr = document.getElementById('itemDescr');
        let itemDueDate = document.getElementById('itemDueDate');

        //create an item obj using the factory function and push it to the itemArr
        this.itemArr.push(todoItemFactory(
            this.projTitle,
            itemTitle.value,
            itemDescr.value,
            itemDueDate.value,

        ))

        itemTitle.value = "";
        itemDescr.value = "";
        itemDueDate.value = ""; 

    }
}

function createProjObj(addItemBtn) {

    //get the values from the proj form
    let projTitle = document.getElementById('projTitle');

    //create a new proj obj using Project class and push it to projArr
    let newObj = new Project (projTitle.value)
    projArr.push(newObj);
    let indexNum = projArr.indexOf(newObj);
    addItemBtn.setAttribute('data-indexNum', indexNum);

    projTitle.value = "";

};

function createDefaultProjObj(addItemBtn) {
        //create a new proj obj using Project class and push it to projArr
        let newObj = new Project ('Default project');
        projArr.push(newObj);
        let indexNum = projArr.indexOf(newObj);
        addItemBtn.setAttribute('data-indexNum', indexNum);
}

export { Project, projArr, createProjObj, createDefaultProjObj }