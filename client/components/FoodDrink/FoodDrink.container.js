/* @flow */

import { connect } from 'react-redux';
import getFoodAndDrinks from '../../redux/foodAndDrink/actions';
import FoodAndDrink from './FoodDrink.component';

const mapStateToProps = (state) => {
  return {
    food: state.foodAndDrink.food,
    drink: state.foodAndDrink.drink,
  };
};

const mapDispatchToProps = dispatch => ({
  getFoodAndDrinks: items => dispatch(getFoodAndDrinks(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodAndDrink);
