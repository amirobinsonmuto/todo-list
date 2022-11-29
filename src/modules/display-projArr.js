import { removeAllChildren } from '../helpers/remove-child';

const projArrUl = document.getElementById('projArrUl');
    
function displayProjArr(projArr) {

    removeAllChildren(projArrUl);

    projArr.forEach( (el) => {
        let projArrLi = document.createElement('li');
        projArrLi.textContent = el.projTitle;
        projArrUl.append(projArrLi);
        projArrLi.setAttribute('id', projArr.indexOf(el));
        projArrLi.classList.add('projArrLi');
    })

    projArrUl.lastElementChild.classList.add('active');

}

function toggleProjs(addItemBtn) {
    let projArrLis = document.querySelectorAll('.projArrLi');
    projArrLis.forEach( (li) => {
        li.addEventListener('click', ()=>{
            let indexNum = li.getAttribute('id');
            addItemBtn.setAttribute('data-indexNum', indexNum);
            projArrLis.forEach(f => f.classList.remove('active'));
            li.classList.add('active');
        })
    })
}

export { displayProjArr, toggleProjs }