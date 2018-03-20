import React from 'react';
import Cuisine from '../Cuisine/Cuisine.container';

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
      sentence: 'test',
      continentSelected: null,
      continent: ''
    }
  }

  handleClickContinent(item) {
    this.setState({
      sentence: '',
      continentSelected: true,
      continent: item,
    });
  }

  handleClickSelectedItem() {
    this.setState({
      continent: ''
    })
  }

  updateDataStore(){
    const { continent, continents, continentSelected } = this.state;

    const dataToSend = {
      continents,
      continentSelected,
      continent,
    }

    this.props.getContinents(dataToSend);
  }

  render() {
    this.updateDataStore();
    const { continent, continents, continentSelected } = this.state;

    return (
      <div>
        {continent.length < 1 &&
        <div>
          {continents.map(item => {
            return (
              <button onClick={() => this.handleClickContinent(item)}>{item}</button>
            )
          })}
        </div>
        }
        {continentSelected === true && continent.length > 0 &&
        <div>
          <div>
            <button onClick={() => this.handleClickSelectedItem()}>{continent}</button>
          </div>

          {continentSelected === true &&
            <Cuisine
            food={this.props.food}
            continentsToChoose={this.props.continentsToChoose}
            checkContinentSelected={this.props.checkContinentSelected}
            continentChosen={this.props.continentChosen}
            />
          }
        </div>
        }
      </div>
    )
  }
}

export default Continent;
