import { removeAllChildren } from '../helpers/remove-child';

const itemArrUl = document.getElementById('itemArrUl');
    
function displayItemArr(itemArr) {

    removeAllChildren(itemArrUl);

    itemArr.forEach( (el) => {
        let itemArrLi = document.createElement('li');
        let itemArrLiItemTitle = document.createElement('p');
        itemArrLiItemTitle.textContent = el.itemTitle
        let itemArrLiItemDueDate = document.createElement('p');
        itemArrLiItemDueDate.textContent = el.itemDueDate;
        itemArrLi.append(itemArrLiItemTitle, itemArrLiItemDueDate);
        itemArrLi.classList.add('itemArrLi');
        itemArrUl.append(itemArrLi);
    })  

}

export { displayItemArr }