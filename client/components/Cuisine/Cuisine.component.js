import React from 'react';

// import cuisines from '../../cuisine';

class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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


    // const cuisines = ['Asia', 'Europe', 'Africa', 'South America', 'North America'];

    // for (var key in cuisines) {
    //   if (cuisines.hasOwnProperty(key)) {
    //     console.error('@ yes', key); // key (ex. sandwich)
    //
    //     if (key === this.props.selectedItem) {
    //       console.error('@ selected item', key);
    //
    //     }
    //   }
    // }

  }

  selectCuisine(){
    if (this.props.selectedItem === 'Asia') {
      this.setState({
        selectedItemDisplay: this.state.Asia
      });
    }

    if (this.props.selectedItem === 'Africa') {
      this.setState({
        selectedItemDisplay: this.state.Africa
      });
    }

    if (this.props.selectedItem === 'South America') {
      this.setState({
        selectedItemDisplay: this.state.SouthAmerica
      });
    }

    if (this.props.selectedItem === 'North America') {
      this.setState({
        selectedItemDisplay: this.state.NorthAmerica
      });
    }

    if (this.props.selectedItem === 'Europe') {
      this.setState({
        selectedItemDisplay: this.state.Europe
      });
    }
  }

  render() {
    this.selectCuisine();

    const {selectedItem} = this.props;

    return (
      <div>
        {this.state.selectedItemDisplay.map(item => {
          return (
            <div>
              <button>{item}</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Cuisine;
