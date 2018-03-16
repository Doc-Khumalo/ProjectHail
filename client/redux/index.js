/* @flow */

import { combineReducers } from 'redux';
import foodAndDrink from './foodAndDrink';
import continentList from './continentList'

export default combineReducers({
  foodAndDrink,
  continentList,
});
