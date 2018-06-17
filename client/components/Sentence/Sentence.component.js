import React from 'react';

export const Sentence = (props) => {
  console.log('props', props);
  return (
    <div>
      I am in {props.props.location} and I am looking for {props.props.items.foodAndDrink.food} from {props.props.items.continentList.continent} of {props.props.items.cuisineList.cuisineItem} origin
    </div>
  )
};