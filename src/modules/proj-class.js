//Project class
const projArr = []

class Project {
    constructor(projTitle, projDescr) {
        this.projTitle = projTitle;
        this.projDescr = projDescr;
        this.itemArr = []
    };

    //method - factory to create a todo item
    todoItemFactory (itemTitle, itemDesc, itemDueDate, itemPriority) {

        let itemObj = {
        projTitle: this.projTitle,
        itemTitle: itemTitle,
        itemDesc: itemDesc,
        itemDueDate: itemDueDate,
        itemPriority: itemPriority
        }
        
        return this.itemArr.push(itemObj);
    }
}

//method - method to actually create a project
function createProjObj() {

    let projTitle = document.getElementById('projTitle');
    let projDescr = document.getElementById('projDescr');

    projArr.push(new Project (projTitle.value, projDescr.value,))

    console.log(projArr);

    projTitle = null;
    projDescr = null;
}

export { projArr, createProjObj }