/* @flow */

import { connect } from 'react-redux';
import getFoodAndDrinks from '../../redux/foodAndDrink/actions';
import FoodAndDrink from './FoodDrink.component';

const mapStateToProps = (state) => {
  const getFoodAndDrinks = state.foodAndDrink;

  console.error('@ container', state);

  return {
    // food: getFoodAndDrinks.food,
    // drink: getFoodAndDrinks.drink,
  };
};

// const mapStateToProps = (state) => {
//   const getFoodAndDrinks = state.get('getFoodAndDrinks');
//   return {
//     food: getFoodAndDrinks.get('food'),
//     drink: getFoodAndDrinks.get('drink'),
//   };
// };

// const mapStateToProps = ({ foodAndDrink }) => ({
//   foodAndDrink,
// });

const mapDispatchToProps = dispatch => ({
  getFoodAndDrinks: food => dispatch(getFoodAndDrinks(food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodAndDrink);
