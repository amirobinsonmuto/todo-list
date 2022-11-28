import { removeAllChildren } from '../helpers/remove-child';

const itemArrUl = document.getElementById('itemArrUl');
    
function displayItemArr(itemArr) {

    removeAllChildren(itemArrUl);

    itemArr.forEach( (el) => {
        let itemArrLi = document.createElement('li');
        itemArrLi.textContent = el.itemTitle;
        itemArrUl.append(itemArrLi);
    })  

}

export { displayItemArr }