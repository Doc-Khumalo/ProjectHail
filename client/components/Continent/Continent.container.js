/* @flow */

import { connect } from 'react-redux';
import getContinents from '../../redux/continentList/actions';
import Continent from './Continent.component';

const mapStateToProps = (state) => {
  return {
    continentsToChoose: state.continentList.continentsToChoose,
    checkContinentSelected: state.continentList.checkContinentSelected,
    continentChosen: state.continentList.continentChosen,
  };
};

const mapDispatchToProps = dispatch => ({
  getContinents: items => dispatch(getContinents(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Continent);