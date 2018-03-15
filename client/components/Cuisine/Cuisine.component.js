import React from 'react';

// import cuisines from '../../cuisine';

class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCuisine: '',
      sentence: `${this.props.sentence} from ${this.props.selectedItem}`,
      selectedItemDisplay: [],
      Asia: [
        'Chinese',
        'Japanese',
        'Indian',
        'ThaiThai',
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
        'West Africa',
        'East Africa',
        'North Africa',
        'South Africa',
        'Central Africa',
      ],
      SouthAmerica: [
        'test1'
      ],
      NorthAmerica: [
        'test 2'
      ]
    }
  }

  componentDidMount() {

    if (this.props.selectedItem) {
      this.setState({
        selectedCuisine: this.props.selectedItem
      });
    }

  }

  render() {

    const { sentence } = this.state;

    let cuisineToCheck;

    if (this.state.selectedCuisine.length !== null) {
      if (this.state.selectedCuisine === 'Europe') {
        cuisineToCheck = this.state.Europe;
      }

      if (this.state.selectedCuisine === 'Asia') {
        cuisineToCheck = this.state.Asia;
      }

      if (this.state.selectedCuisine === 'Africa') {
        cuisineToCheck = this.state.Africa;
      }

      if (this.state.selectedCuisine === 'North America') {
        cuisineToCheck = this.state.NorthAmerica;
      }

      if (this.state.selectedCuisine === 'South America') {
        cuisineToCheck = this.state.SouthAmerica;
      }
    }

    return (
      <div>
        {sentence}
        {cuisineToCheck != undefined &&
        <div>
          {cuisineToCheck.map(item => {
            return (
              <div>
                <button>{item}</button>
              </div>
            )
          })}
        </div>
        }
      </div>
    )
  }
}

export default Cuisine;
