import { removeAllChildren } from '../helpers/remove-child';

const projArrUl = document.getElementById('projArrUl');
    
function displayProjArr(projArr) {

    removeAllChildren(projArrUl);

    projArr.forEach( (el) => {
        let projArrLi = document.createElement('li');
        projArrLi.textContent = el.projTitle;
        projArrUl.append(projArrLi);
    })  

}

export { displayProjArr }