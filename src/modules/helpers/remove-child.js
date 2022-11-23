
//function to remove all childrens from a given element
function removeChild(el) {
    while(el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

export { removeChild }