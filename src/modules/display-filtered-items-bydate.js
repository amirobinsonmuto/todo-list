import { allItemsFlatted, displayAllItemFlattedArray } 
        from './combine-display-all-items';
import { getDifference } from '../helpers/sort-bydate';

const todayLi = document.getElementById('today-li');
const thisWeekLi = document.getElementById('this-week-li');
let filteredAllItemsFlatted

const displayFilteredItemsByDate = (num) => {

        filteredAllItemsFlatted = allItemsFlatted.filter(obj => {
                return getDifference(obj) <= num;
        })

}

export { todayLi,thisWeekLi,filteredAllItemsFlatted, displayFilteredItemsByDate }
