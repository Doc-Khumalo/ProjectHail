import React from 'react';
import {connect} from "react-redux";
import { getCuisines } from '../../redux/actions';
import './Cuisine.css';
import {Sentence} from "../Sentence/Sentence.component";

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
      stuff: ''
    }
  }

  componentWillUpdate() {
    this.setState({
      stuff: 'stuff'
    })
  }

  componentWillReceiveProps() {
    this.setState({
      stuff: 'stuff props'
    })
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
        <div className="Cuisine-Wrapper">
          {cuisineSelected === false && cuisineToCheck.length > 0 &&
          <div>
            {cuisineToCheck.map(item => {
              return (
                <button
                  className="btn btn-default btn-lg btn-block" type="submit"
                  onClick={() => this.handleClickSelectCuisine(item)}>{item}
                </button>
              )
            })}
          </div>
          }
          {this.props.items.cuisineList.cuisineSelected === true &&
          <div>
            <button
              className="btn btn-default btn-lg btn-block" type="submit"
              onClick={() => this.handleSelectedItem()}>{this.state.cuisineItem}
            </button>
          </div>
          }
         </div>
        }
        <Sentence
          props={this.props}
        />
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
