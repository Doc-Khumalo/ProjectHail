/*
  action
 */

const initialState = {
  selectedCuisine: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CUISINES':
      return {
        selectedCuisine: action.payload.selectedCuisine,
      }
    default:
      return state;
  }
};