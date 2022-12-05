import lightFormat from "date-fns/lightFormat/index.js";

function disableToggle(classNameStr) {
    let lis = document.querySelectorAll(classNameStr)
    lis.forEach(li => li.classList.add('disable-click'));
}

function activateToggle(classNameStr) {
    let lis = document.querySelectorAll(classNameStr)
    lis.forEach(li => li.classList.remove('disable-click'));
}

export { disableToggle, activateToggle }