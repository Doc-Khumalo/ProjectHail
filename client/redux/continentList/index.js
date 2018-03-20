/*
  action
 */

const initialState = {
  continentsToChoose: null,
  checkContinentSelected: null,
  continentChosen: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTINENTS':
      return {
        continentsToChoose: action.payload.continents,
        checkContinentSelected: action.payload.continentSelected,
        continentChosen: action.payload.continent,
      }
    default:
      return state;
  }
};