/* @flow */

import { combineReducers } from 'redux';
import foodAndDrink from './foodAndDrink';
import continentList from './continentList'
import cuisineList from './cuisineList'

export default combineReducers({
  foodAndDrink,
  continentList,
  cuisineList
});
