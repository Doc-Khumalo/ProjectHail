import {
  SET_CONTINENTS,
  SET_CUISINES,
  SET_DATE_TIME,
  SET_FOOD_DRINK
} from './constants/type';

const initialState = {
  items: {
    foodAndDrink: {},
    date: {},
    continentList: {},
    cuisineList: {}
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD_DRINK :
      delete state.items.foodAndDrink;

      return {
        items: Object.assign(state.items, action)
      };

    case SET_CONTINENTS :
      delete state.items.continentList;

      return {
        items: Object.assign(state.items, action)
      };

    case SET_CUISINES :
      delete state.items.cuisineList;

      return {
        items: Object.assign(state.items, action)
      };

    case SET_DATE_TIME :
      return {
        items: Object.assign(state.items, action)
      };

    default:
      return state;
  }
};

export default reducer;