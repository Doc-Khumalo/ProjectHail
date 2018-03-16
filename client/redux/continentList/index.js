/*
  action
 */

const initialState = {
  continents: null,
  continentSelected: null,
  continent: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTINENTS':
      return {
        continents: action.payload.continents,
        continentSelected: action.payload.continentSelected,
        continent: action.payload.continent,
      }
    default:
      return state;
  }
};