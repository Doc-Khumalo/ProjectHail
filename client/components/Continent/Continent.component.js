import React from 'react';
import Cuisine from '../Cuisine/Cuisine.component';

class Continent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sentence: '',
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
      sentence: `${this.props.sentence} some ${this.props.food}`,
      continentSelected: true,
      selectedItem: item,
    })
  }

  handleClickSelectedItem() {
    this.setState({
      selectedItem: ''
    })
  }

  render() {

    const {
      sentence,
      selectedItem,
      continents,
      continentSelected
    } = this.state;

    return (
      <div>
        {sentence}
        {selectedItem.length < 1 &&
        <div>
          {continents.map(item => {
            return (
              <button onClick={() => this.handleClickContinent(item)}>from {item}</button>
            )
          })}
        </div>
        }
        {continentSelected === true && selectedItem.length > 0 &&
        <div>
          <div>
            <span>from </span>
            <button onClick={() => this.handleClickSelectedItem()}>{selectedItem}</button>
          </div>
          <Cuisine
            selectedItem={selectedItem}
            sentence={sentence}
          />
        </div>
        }
      </div>
    )
  }
}

export default Continent;
