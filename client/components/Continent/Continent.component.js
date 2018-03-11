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
      selectedItem: ''
    }
  }

  handleClickContinent(item) {
      this.setState({
        continentSelected: true,
        selectedItem: item
      })

  }

  handleClickSelectedItem() {
    this.setState({
      selectedItem: ''
    })
  }

  render() {
    return (
      <div>
        {this.state.selectedItem.length < 1 &&
        <div>
          {this.state.continents.map(item => {
            return (
              <button onClick={() => this.handleClickContinent(item)}>from {item}</button>
            )
          })}
        </div>
        }
        {this.state.continentSelected === true && this.state.selectedItem.length > 0 &&
        <div>
          <div>
            <span>from </span>
            <button onClick={() => this.handleClickSelectedItem()}>{this.state.selectedItem}</button>
          </div>
          <Cuisine/>
        </div>
        }
      </div>
    )
  }
}

export default Continent;
