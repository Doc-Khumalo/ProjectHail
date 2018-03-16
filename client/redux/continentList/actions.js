/* @flow */

export default (continentList) => ({
  type: 'SET_CONTINENTS',
  payload: {
    continents: continentList.continents,
    continentSelected: continentList.continentSelected,
    continent: continentList.continent,
  },
});
