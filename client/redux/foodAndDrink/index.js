import { SET_FOOD_DRINK } from './actions';

const initialState = {
  food: null,
  drink: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOOD_DRINK':
      return {
        food: action.payload.food,
        drink: action.payload.drink,
      }
    default:
      return state;
  }
};