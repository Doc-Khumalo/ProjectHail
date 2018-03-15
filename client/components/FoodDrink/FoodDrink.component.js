import React from 'react';
import Continent from '../Continent/Continent.component';

class FoodDrink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      food: 'Food',
      drink: 'Drink',
      foodSelected: false,
      drinkSelected: false,
      sentence: ''
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

    const { food, drink, sentence } = this.state;

    const dataToSend = {
      food,
      drink,
      sentence,
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

    const { food, drink, sentence } = this.state;

    const dataToSend = {
      food,
      drink,
      sentence
    }

    this.props.getFoodAndDrinks(dataToSend);
  }

  render() {
    const {drink, food, sentence} = this.state;

    return (
      <div>
        <div>
          <div>{sentence}</div>

          { this.state.drinkSelected === false &&
            <span><button onClick={e => this.handleClickFood(e)}>{food}</button></span>
          }

          { this.state.foodSelected === false &&
            <span><button onClick={e => this.handleClickDrink(e)}>{drink}</button></span>
          }

        </div>
        { this.state.foodSelected === true &&
          <Continent
            food={this.props.food}
          />
        }
      </div>
    )
  }
}

export default FoodDrink;
