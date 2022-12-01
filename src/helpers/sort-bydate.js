
//Call back this function with a built-in method 'sort'.

function byDate(a,b){
    return new Date(a.itemDueDate) - new Date(b.itemDueDate)
  }

  export { byDate }