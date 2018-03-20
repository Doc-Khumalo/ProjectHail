/* @flow */

import { connect } from 'react-redux';
import getCuisines from '../../redux/cuisineList/action';
import Cuisine from './Cuisine.component';

const mapStateToProps = (state) => {
  return {
    continents: state.cuisineList.continents,
    continentSelected: state.cuisineList.continentSelected,
    continent: state.cuisineList.continent,
  };
};

const mapDispatchToProps = dispatch => ({
  getCuisines: items => dispatch(getCuisines(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cuisine);