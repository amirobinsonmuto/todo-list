const disableToggle = (classNameStr) => {
    let lis = document.querySelectorAll(classNameStr)
    lis.forEach(li => li.classList.add('disable-click'));
}

const activateToggle = (classNameStr) => {
    let lis = document.querySelectorAll(classNameStr)
    lis.forEach(li => li.classList.remove('disable-click'));
}

export { disableToggle, activateToggle }