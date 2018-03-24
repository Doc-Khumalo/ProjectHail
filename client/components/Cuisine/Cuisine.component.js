import React from 'react';

// import cuisines from '../../cuisine';

class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisineSelected: false,
      cuisineItem: '',
      cuisineToCheck: '',
      cuisineContinents: [
        Asia: [
          'Chinese',
          'Japanese',
          'Indian',
          'Thai',
          'Turkish',
        ],
        Europe: [
          'Spanish',
          'British',
          'Italian',
          'French',
          'Greek',
        ],
        Africa: [
          'West African',
          'East African',
          'North African',
          'South African',
          'Central African',
        ],
        SouthAmerica: [
          'test1'
        ],
        NorthAmerica: [
          'test 2'
        ]
      },
    ]
  }

  handleClickSelectCuisine(item) {
    if (item) {

    }
    this.setState({
      cuisineSelected: true,
      cuisineItem: item
    })
  }

  handleSelectedItem() {
    this.setState({
      cuisineSelected: false,
      cuisineItem: '',
    })
  }


  updateDataStore() {
    const { cuisineItem, cuisineToCheck } = this.state;

    const dataToSend = {
      cuisineItem,
      cuisineToCheck
    }

    this.props.getCuisines(dataToSend)
  }

  render() {
    this.updateDataStore();

    const { cuisineSelected, cuisineItem, cuisineContinents, cuisineToCheck } = this.state;

    // let cuisineToCheck;

    if (this.props.continentChosen !== null || this.props.continentChosen !== undefined) {
      if (this.props.continentChosen === 'Europe') {
        this.setState({
          cuisineToCheck: this.state.cuisineContinents.Europe
        });
      }

      if (this.props.continentChosen === 'Asia') {
        this.setState({
          cuisineToCheck: this.state.cuisineContinents.Asia
        });
      }

      if (this.props.continentChosen === 'Africa') {
        this.setState({
          cuisineToCheck: this.state.cuisineContinents.Africa
        });
      }

      if (this.props.continentChosen === 'North America') {
        this.setState({
          cuisineToCheck: this.state.cuisineContinents.NorthAmerica
        });
      }

      if (this.props.continentChosen === 'South America') {
        this.setState({
          cuisineToCheck: this.state.cuisineContinents.SouthAmerica
        });
      }
    }


    return (
      <div>
        {cuisineToCheck != undefined &&
        <div>
          {cuisineSelected === false && cuisineToCheck.length > 0 &&
          <div>
            {cuisineToCheck.map(item => {
              return (
                <div>
                  <button onClick={() => this.handleClickSelectCuisine(item)}>{item}</button>
                </div>
              )
            })}
          </div>
          }
          {cuisineSelected === true && cuisineToCheck.length > 0 &&
          <div>
            <button onClick={() => this.handleSelectedItem()}>{this.state.cuisineItem}</button>
            <h3>I'm feeling like {cuisineItem} {this.props.food} </h3>
          </div>
          }
        </div>
        }
      </div>
    )
  }
}

export default Cuisine;
