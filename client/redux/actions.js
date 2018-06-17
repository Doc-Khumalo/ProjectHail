/* @flow */

import {
  SET_CONTINENTS,
  SET_CUISINES,
  SET_DATE_TIME,
  SET_FOOD_DRINK
} from './constants/type';

export const getContinents = continentList => {
  return {
    type: SET_CONTINENTS,
    continentList
  }
};

export const getCuisines = cuisineList => {
  return {
    type: SET_CUISINES,
    cuisineList
  }
};

export const getDateTime = dateTime => {
  return {
    type: SET_DATE_TIME,
    dateTime
  }
};

export const getFoodAndDrinks = foodAndDrink => {
  return {
    type: SET_FOOD_DRINK,
    foodAndDrink
  }
};