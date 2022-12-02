import { allItemsFlatted, displayAllItemFlattedArray } 
        from './combine-display-all-items';
import { itemArrUl } from './display-itemArr';
import { getDifference } from '../helpers/sort-bydate';

const todayLi = document.getElementById('today-li');
const thisWeekLi = document.getElementById('this-week-li');
let filteredAllItemsFlatted

function displayFilteredItemsByDate(num){

        filteredAllItemsFlatted = allItemsFlatted.filter(obj => {
                return getDifference(obj) <= num;
        })

}

export { todayLi,thisWeekLi,filteredAllItemsFlatted, displayFilteredItemsByDate }
