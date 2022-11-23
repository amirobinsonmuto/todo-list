function todoItemFactory (title, description, dueDate, priority) {
    return {title, description, dueDate, priority};
}

let itemArr = [];

export function createItemObj() {

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

