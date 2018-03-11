import React from 'react';
import Continent from '../Continent/Continent.component';

class FoodDrink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      food: 'food',
      drink: 'drink',
      foodSelected: false,
      drinkSelected: false,
    }
  }

  handleClickFood(e) {
    e.preventDefault();

    this.setState({
      foodSelected: true,
      drinkSelected: false,
    })
  }

  handleClickDrink(e) {
    e.preventDefault();

    this.setState({
      foodSelected: false,
      drinkSelected: true,
    })
  }

  render() {
    const {drink, food} = this.state;

    return (
      <div>
        <div>I'm feeling like
          <span><button onClick={e => this.handleClickFood(e)}>{food}</button></span>
          <span><button onClick={e => this.handleClickDrink(e)}>{drink}</button></span>
        </div>
        { this.state.foodSelected === true &&
          <Continent />
        }
      </div>
    )
  }
}

export default FoodDrink;
;
