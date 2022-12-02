import { allItemsFlatted, displayAllItemFlattedArray } 
        from './combine-display-all-items';
import { itemArrUl } from './display-itemArr';
import { byDate } from '../helpers/sort-bydate';

const todayLi = document.getElementById('today-li');
const thisWeekLi = document.getElementById('this-week-li');

function displayFilteredItemsByDate(){
        
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = mm + '/' + dd +'/' + yyyy
              
        console.log(today);

        let dueDate = new Date(allItemsFlatted[0].itemDueDate);
        let dueDatedd = String(dueDate.getDate()).padStart(2, '0');
        let dueDatemm = String(dueDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let dueDateyyyy = dueDate.getFullYear();
        dueDate = dueDatemm + '/' + dueDatedd +'/' + dueDateyyyy

        console.log(dueDate);

        var date1 = new Date(today);
        var date2 = new Date(dueDate);
          
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
          
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        console.log(Difference_In_Days);
}

export { todayLi,thisWeekLi, displayFilteredItemsByDate }
