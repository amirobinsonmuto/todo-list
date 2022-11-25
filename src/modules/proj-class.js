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
        function todoItemFactory(projTitle, itemTitle, itemDesc, itemDueDate, itemPriority) {
            return {
            projTitle: projTitle,
            itemTitle: itemTitle,
            itemDesc: itemDesc,
            itemDueDate: itemDueDate,
            itemPriority: itemPriority
            }
        }

        //get the form values from the item form
        let itemTitle = document.getElementById('itemTitle');
        let itemDescr = document.getElementById('itemDescr');
        let itemDueDate = document.getElementById('itemDueDate');
        let itemPriority = document.getElementById('itemPriority');

        //create an item obj using the factory function and push it to the itemArr
        this.itemArr.push(todoItemFactory(
            this.projTitle,
            itemTitle.value,
            itemDescr.value,
            itemDueDate.value,
            itemPriority.value
        ))

        //set variables to null for the next round
        itemTitle = null;
        itemDescr = null;
        itemDueDate = null;
        itemPriority = null;

    }
}

//method - method to actually create a project
function createProjObj() {

    //get the values from the proj form
    let projTitle = document.getElementById('projTitle');
    let projDescr = document.getElementById('projDescr');

    //create a new proj obj using Project class and push it to projArr
    projArr.push(new Project (projTitle.value, projDescr.value,))

    console.log(projArr);

    //set variable to null for the next round
    projTitle = null;
    projDescr = null;
}

export { projArr, createProjObj }