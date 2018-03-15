import React from 'react';
import Cuisine from '../Cuisine/Cuisine.component';

class Continent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      continents: [
        'Asia',
        'Africa',
        'South America',
        'North America',
        'Europe'
      ],
      continentSelected: null,
      continent: ''
    }
  }

  handleClickContinent(item) {
    this.setState({
      sentence: `${this.props.sentence} some ${this.props.food}`,
      continentSelected: true,
      continent: item,
    })
  }

  handleClickSelectedItem() {
    this.setState({
      continent: ''
    })
  }

  render() {

    const { continent, continents, continentSelected } = this.state;
    const { food } = this.props;

    return (
      <div>

        {continent.length < 1 &&
        <div>
          {continents.map(item => {
            return (
              <button onClick={() => this.handleClickContinent(item)}>from {item}</button>
            )
          })}
        </div>
        }
        {continentSelected === true && continent.length > 0 &&
        <div>
          <div>
            <button onClick={() => this.handleClickSelectedItem()}>{continent}</button>
          </div>
          <Cuisine
            continent={continent}
            food={food}
          />
        </div>
        }
      </div>
    )
  }
}

export default Continent;
