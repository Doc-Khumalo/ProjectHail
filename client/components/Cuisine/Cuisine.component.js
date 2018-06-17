import React from 'react';
import {connect} from "react-redux";
import { getCuisines } from '../../redux/actions';

// import cuisines from '../../cuisine';

export class Cuisine extends React.Component {
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
    // this.setState({
    //   cuisineSelected: true,
    //   cuisineItem: item
    // });

    this.state.cuisineSelected = true;
    this.state.cuisineItem = item;

    const { cuisineSelected, cuisineItem } = this.state;
    const dataToSend = {
      cuisineSelected,
      cuisineItem
    };

    this.props.getCuisines(dataToSend)
  }

  handleSelectedItem() {
    this.setState({
      cuisineSelected: false,
      cuisineItem: '',
    })
  }

  render() {

    const { cuisineSelected, cuisineItem, cuisineContinents } = this.state;

    let cuisineToCheck;

    if (this.props.items.continentList.continentSelected !== null || this.props.items.continentList.continentSelected !== undefined) {
      if (this.props.items.continentList.continent === 'Europe') {
          cuisineToCheck = cuisineContinents.Europe;
      }

      if (this.props.items.continentList.continent === 'Asia') {
        cuisineToCheck = cuisineContinents.Asia
      }

      if (this.props.items.continentList.continent === 'Africa') {
          cuisineToCheck = cuisineContinents.Africa;
      }

      if (this.props.items.continentList.continent === 'North America') {
          cuisineToCheck = cuisineContinents.NorthAmerica;
      }

      if (this.props.items.continentList.continent === 'South America') {
          cuisineToCheck = cuisineContinents.SouthAmerica;
      }
    }

    return (
      <div>
        {cuisineToCheck !== undefined &&
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
          <div>
          {this.props.items.cuisineList.cuisineSelected === true &&
          cuisineToCheck.length > 0 &&
          <div>
            <button onClick={() => this.handleSelectedItem()}>{this.state.cuisineItem}</button>
            <h1>gsjvhcavcj</h1>
            <h3>Today at {this.props.items.date} I am feeling like {this.props.items.cuisineList.cuisineItem} {this.props.items.foodAndDrink.food} </h3>
          </div>
          }
          </div>
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
  getCuisines,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cuisine);
