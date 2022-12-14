// Call back this function with a built-in method 'sort'.
const byDate = (a,b) => {
    return new Date(a.itemDueDate) - new Date(b.itemDueDate)
  }

const getToday = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  today = mm + '/' + dd +'/' + yyyy
  return new Date(today);
}

const getDifference = (el) => {
  let date1 = getToday();
  let dueDate = new Date(el.itemDueDate);
  let dueDatedd = String(dueDate.getDate()).padStart(2, '0');
  let dueDatemm = String(dueDate.getMonth() + 1).padStart(2, '0'); 
  let dueDateyyyy = dueDate.getFullYear();
  dueDate = dueDatemm + '/' + dueDatedd +'/' + dueDateyyyy

  let date2 = new Date(dueDate);
  let Difference_In_Time = date2.getTime() - date1.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days;
}

export { byDate, getDifference }