import React from 'react';
import Continent from '../Continent/Continent.component';
import { getFoodAndDrinks } from "../../redux/actions";
import {connect} from "react-redux";
import './FoodDrink.css';

export class FoodAndDrink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      food: 'FoodXX',
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
  }

  updateDataStore() {
    const { food, drink, sentence } = this.state;

    const dataToSend = {
      food,
      drink,
      sentence
    };

    this.props.getFoodAndDrinks(dataToSend);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps', nextProps)
  // }

  render() {
    this.updateDataStore();
    const {drink, food, sentence} = this.state;

    return (
      <div>
        <div>
          <div>{sentence}</div>

          <p className="Button-Block">
            { this.state.drinkSelected === false &&
              <button
                className="btn btn-default btn-lg btn-block" type="submit"
                onClick={e => this.handleClickFood(e)}>{food}
              </button>
            }

            { this.state.foodSelected === false &&
              <button
                className="btn btn-default btn-lg btn-block" type="submit"
                onClick={e => this.handleClickDrink(e)}>{drink}
              </button>
            }
          </p>

        </div>
        { this.state.foodSelected === true &&
          <Continent
            location={this.props.location}
            items={this.props.items}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.reducer.items
  };
};

const mapDispatchToProps = {
  getFoodAndDrinks,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodAndDrink);
