//Project class
const projArr = []

class Project {
    constructor(projTitle, projDescr) {
        this.projTitle = projTitle;
        this.projDescr = projDescr;
        this.itemArr = []
    };

    //method - use the factory function to create an item obj. this will be ineheritated 
    //to an item obj
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

//method - method to actually create a project
function createProjObj(addItemBtn) {

    //get the values from the proj form
    let projTitle = document.getElementById('projTitle');
    let projDescr = document.getElementById('projDescr');

    //create a new proj obj using Project class and push it to projArr
    let newObj = new Project (projTitle.value, projDescr.value,)
    projArr.push(newObj);
    let indexNum = projArr.indexOf(newObj);
    addItemBtn.setAttribute('data-indexNum', indexNum);

    projTitle.value = "";
    projDescr.value = "";

};

function createDefaultProjObj(addItemBtn) {
        //create a new proj obj using Project class and push it to projArr
        let newObj = new Project ('Default project', 'Your first project');
        projArr.push(newObj);
        let indexNum = projArr.indexOf(newObj);
        addItemBtn.setAttribute('data-indexNum', indexNum);
}

export { projArr, createProjObj, createDefaultProjObj }