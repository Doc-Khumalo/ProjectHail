import React from 'react';

// import cuisines from '../../cuisine';

class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisineSelected: false,
      cuisineItem: '',
      cuisineToCheck: [],
      cuisineContinents: {
        Asia:[
           'Chinese',
           'Japanese',
           'Indian',
           'Thai',
           'Turkish',
        ],
        Europe:[
          'Spanish',
          'British',
          'Italian',
          'French',
          'Greek'
        ],
        Africa:[
          'West African',
          'East African',
          'North African',
          'South African',
          'Mediterrean'
        ],
        SouthAmerica:[
          'test1',
          'test2'
        ],
        NorthAmerica:[],
      },
    }
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

    const { cuisineSelected, cuisineItem, cuisineContinents } = this.state;

    let cuisineToCheck;

    if (this.props.continentChosen !== null || this.props.continentChosen !== undefined) {
      if (this.props.continentChosen === 'Europe') {
          cuisineToCheck = cuisineContinents.Europe;
      }

      if (this.props.continentChosen === 'Asia') {
        cuisineToCheck = cuisineContinents.Asia
      }

      if (this.props.continentChosen === 'Africa') {
          cuisineToCheck = cuisineContinents.Africa;
      }

      if (this.props.continentChosen === 'North America') {
          cuisineToCheck = cuisineContinents.NorthAmerica;
      }

      if (this.props.continentChosen === 'South America') {
          cuisineToCheck = cuisineContinents.SouthAmerica;
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
