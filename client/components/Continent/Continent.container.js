/* @flow */

import { connect } from 'react-redux';
import getContinents from '../../redux/continentList/actions';
import Continent from './Continent.component';

const mapStateToProps = (state) => {
  return {
    continents: state.continentList.continents,
    continentSelected: state.continentList.continentSelected,
    continent: state.continentList.continent,
  };
};

const mapDispatchToProps = dispatch => ({
  getContinents: items => dispatch(getContinents(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Continent);