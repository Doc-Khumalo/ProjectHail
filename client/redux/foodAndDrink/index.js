/*
  action
 */

const initialState = {
  food: null,
  drink: null,
  sentence: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOOD_DRINK':
      return {
        food: action.payload.food,
        drink: action.payload.drink,
        sentence: action.payload.sentence,
      }
    default:
      return state;
  }
};