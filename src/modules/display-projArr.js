import { removeAllChildren } from '../helpers/remove-child';
import { displayItemArr } from './display-itemArr';
import { projArr } from './proj-class.js';

const projArrUl = document.getElementById('projArrUl');
const activeProjTitleDiv = document.getElementById('activeProjTitleDiv');
    
function displayProjArr() {

    removeAllChildren(projArrUl);

    projArr.forEach( (el) => {
        let projArrLi = document.createElement('li');
        projArrLi.textContent = el.projTitle;
        projArrUl.append(projArrLi);
        projArrLi.setAttribute('id', projArr.indexOf(el));
        projArrLi.classList.add('projArrLi');
    })

    //display the last element's proj title in the main
    projArrUl.lastElementChild.classList.add('active');
    activeProjTitleDiv.textContent = 'Project:' + projArr[projArr.length-1].projTitle;

    displayItemArr(projArr[projArr.length-1].itemArr);
}

function toggleProjs(addItemBtn) {
    let projArrLis = document.querySelectorAll('.projArrLi');
    projArrLis.forEach( (li) => {
        li.addEventListener('click', ()=>{
            let indexNum = li.getAttribute('id');
            addItemBtn.setAttribute('data-indexNum', indexNum);
            projArrLis.forEach(f => f.classList.remove('active'));
            li.classList.add('active');
            //display the proj title of the active li in the main
            let activeObj = document.querySelector('.active');
            activeProjTitleDiv.textContent = 'Project:' + activeObj.textContent;
            displayItemArr(projArr[indexNum].itemArr);
        })
    })
}

export { displayProjArr, toggleProjs }  