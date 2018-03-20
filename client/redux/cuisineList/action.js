/* @flow */

export default (continentList) => ({
  type: 'SET_CUISINES',
  payload: {
    selectedCuisine: continentList.selectedCuisine,
  },
});
