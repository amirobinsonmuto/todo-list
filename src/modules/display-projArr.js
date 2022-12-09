import { removeAllChildren } from '../helpers/remove-child';
import { dueDateLis } from './combine-display-all-items';
import { itemArrUl, displayItemArr } from './display-itemArr';
import { projArr } from './proj-class.js';
import { displayAddItemBtn } from './generate-addItem-btn';
import { addProjBtn } from './add-eventlistners';
import { addItemBtn } from './generate-addItem-btn'
import { populateStorageProjArr } from './localStorage';

const projArrUl = document.getElementById('projarr-ul');
const activeProjTitleDiv = document.getElementById('active-proj-title-div');

function displayProjArr(addProjBtn) {

    addProjBtn.classList.remove('hidden');
    removeAllChildren(projArrUl);

    projArr.forEach( (el) => {
        let projArrLi = document.createElement('li');

        let projArrTitle = document.createElement('p');
        projArrTitle.textContent = el.projTitle;

        let delProjIcon = document.createElement("img")
        delProjIcon.setAttribute('src', "../node_modules/bootstrap-icons/icons/trash.svg");
        delProjIcon.classList.add('filter-red')
        delProjIcon.classList.add('delProjIcon');

        projArrLi.append(projArrTitle, delProjIcon)
        projArrUl.append(projArrLi);
        projArrLi.setAttribute('id', projArr.indexOf(el));
        projArrLi.classList.add('projArrLi');
    })

    //display the last element's proj title in the main
    projArrUl.lastElementChild.classList.add('active');

    dueDateLis.forEach(f => f.classList.remove('active'));
    activeProjTitleDiv.textContent = 'Project: ' + projArr[projArr.length-1].projTitle;

    displayItemArr(projArr[projArr.length-1].itemArr);

    deleteProj(projArr);
}

function toggleProjs(addItemBtn) {
    let projArrLis = document.querySelectorAll('.projArrLi');
    projArrLis.forEach( (li) => {
        li.addEventListener('click', ()=>{
            let indexNum = li.getAttribute('id');
            addItemBtn.setAttribute('data-indexNum', indexNum);
            projArrLis.forEach(f => f.classList.remove('active'));
            dueDateLis.forEach(f => f.classList.remove('active'));
            li.classList.add('active');
            //display the proj title of the active li in the main
            let activeObj = document.querySelector('.active');
            activeProjTitleDiv.textContent = 'Project: ' + activeObj.textContent;
            displayItemArr(projArr[indexNum].itemArr);
            displayAddItemBtn(); 
        })
    })
}

function deleteProj(projArr) {
    let delProjIcons = document.querySelectorAll('.delProjIcon');
    delProjIcons.forEach( (del) => {
        del.addEventListener('click', (e) => {
            let index = e.target.parentElement.getAttribute('id');
            projArr.splice(index, 1);
            populateStorageProjArr();
            removeAllChildren(projArrUl);
            if (projArr.length >= 1) {
                displayProjArr(addProjBtn);
                toggleProjs(addItemBtn);
            } else {
                activeProjTitleDiv.textContent = 'No active project. Add a project.'
                removeAllChildren(itemArrUl)
                addItemBtn.classList.add('hidden');
            }

        })
    })
}

export { projArrUl, displayProjArr, toggleProjs, activeProjTitleDiv, deleteProj }  