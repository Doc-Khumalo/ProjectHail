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

    if (this.state.foodSelected === false) {
      this.setState({
        foodSelected: true,
        drinkSelected: false,
      })
    } else {
      this.setState({
        foodSelected: false,
      })
    }

    const { food, drink } = this.state;

    const dataToSend = {
      food,
      drink
    }

    this.props.getFoodAndDrinks(dataToSend);
  }

  handleClickDrink(e) {
    e.preventDefault();

    if (this.state.drinkSelected === false) {
      this.setState({
        foodSelected: false,
        drinkSelected: true,
      })
    } else {
      this.setState({
        drinkSelected: false,
      })
    }

    const { food, drink } = this.state;

    const dataToSend = {
      food,
      drink
    }

    this.props.getFoodAndDrinks(dataToSend);
  }

  render() {
    const {drink, food} = this.state;

    return (
      <div>
        <div>I'm feeling like

          { this.state.drinkSelected === false &&
            <span><button onClick={e => this.handleClickFood(e)}> having some {food}</button></span>
          }

          { this.state.foodSelected === false &&
            <span><button onClick={e => this.handleClickDrink(e)}> having a {drink}</button></span>
          }

        </div>
        { this.state.foodSelected === true &&
          <Continent />
        }
      </div>
    )
  }
}

export default FoodDrink;
