//function to remove all childrens from a given element
function removeAllChildren(el) {
    while(el.firstChild){
        el.removeChild(el.firstChild);
    }
}

export { removeAllChildren }