// function to remove all childrens from a given element
const removeAllChildren = (el) => {
    while(el.firstChild){
        el.removeChild(el.firstChild);
    }
}

export { removeAllChildren }