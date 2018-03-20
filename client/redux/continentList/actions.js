/* @flow */

export default (continentList) => ({
  type: 'SET_CONTINENTS',
  payload: {
    continents: continentList.continents,
    continent: continentList.continent,
    continentSelected: continentList.continentSelected,
  },
});
