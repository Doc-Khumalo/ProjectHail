import React from 'react';
import Cuisine from '../Cuisine/Cuisine.component';
import {getContinents, getFoodAndDrinks} from "../../redux/actions";
import {connect} from "react-redux";

export class Continent extends React.Component {

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

  updateDataStore() {
    const { continent, continents, continentSelected } = this.state;

    const dataToSend = {
      continents,
      continentSelected,
      continent,
    };

    this.props.getContinents(dataToSend);
  }

  render() {
    this.updateDataStore();
    const { continent, continents, continentSelected } = this.state;

    console.log('Cuisines', this.props);
    return (
      <div>
        {continent.length < 1 &&
        <div>
          {continents.map(item => {
            return (
              <button
                className="btn btn-default btn-lg btn-block" type="submit"
                onClick={() => this.handleClickContinent(item)}>{item}
              </button>
            )
          })}
        </div>
        }
        {continentSelected === true && continent.length > 0 &&
        <div>
          <div>
            <button
              className="btn btn-default btn-lg btn-block" type="submit"
              onClick={() => this.handleClickSelectedItem()}>{continent}
            </button>
          </div>

          {continentSelected === true &&
            <Cuisine
              location={this.props.location}
              items={this.props.items}
            />
          }
        </div>
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
  getContinents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Continent);
