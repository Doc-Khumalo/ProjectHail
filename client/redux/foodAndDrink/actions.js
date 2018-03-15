/* @flow */

export default (foodAndDrink) => ({
    type: 'SET_FOOD_DRINK',
    payload: {
      food: foodAndDrink.food,
      drink: foodAndDrink.drink,
      sentence: foodAndDrink.sentence,
    },
});
