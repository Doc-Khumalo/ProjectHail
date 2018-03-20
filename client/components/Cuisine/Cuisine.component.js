import React from 'react';

// import cuisines from '../../cuisine';

class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisineSelected: false,
      cuisineItem: '',
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
    }
  }

  handleClickSelectCuisine(item) {
    if(item) {

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
    const { cuisineItem } = this.state;

    const dataToSend = {
      cuisineItem
    }

    this.props.getCuisines(dataToSend)
  }

  render() {
    this.updateDataStore();

    console.error('@ this.props.continent', this.props.continent, this.props.food);

    const { cuisineSelected, cuisineItem, Europe, Africa, Asia, NorthAmerica, SouthAmerica } = this.state;

    let cuisineToCheck;

    if (this.props.continentChosen !== null || this.props.continentChosen !== undefined) {
      if (this.props.continentChosen === 'Europe') {
        cuisineToCheck = Europe;
      }

      if (this.props.continentChosen === 'Asia') {
        cuisineToCheck = Asia;
      }

      if (this.props.continentChosen === 'Africa') {
        cuisineToCheck = Africa;
      }

      if (this.props.continentChosen === 'North America') {
        cuisineToCheck = NorthAmerica;
      }

      if (this.props.continentChosen === 'South America') {
        cuisineToCheck = SouthAmerica;
      }
    }


    return (
      <div>
        {cuisineToCheck != undefined &&
        <div>
          {cuisineSelected === false &&
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
            <h3>I'm feeling like {this.state.cuisineItem} {this.props.food} </h3>
          </div>
          }
        </div>
        }
      </div>
    )
  }
}

export default Cuisine;
