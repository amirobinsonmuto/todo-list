//use a function factory to create objects using the form values. 
//add the new objects to an array (itemArr)

function todoItemFactory (title, description, dueDate, priority) {
    return {title, description, dueDate, priority};
}

let itemArr = [];

function createItemObj() {

    let itemTitle = document.getElementById('itemTitle');
    let itemDescription = document.getElementById('itemDescription');
    let itemDueDate = document.getElementById('itemDueDate');
    let itemPriority = document.getElementById('itemPriority');

    itemArr.push(todoItemFactory(
        itemTitle.value,
        itemDescription.value,
        itemDueDate.value,
        itemPriority.value
    ))

    console.log(itemArr);
}

export {itemArr, createItemObj}

