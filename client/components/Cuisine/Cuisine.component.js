import React from 'react';

// import cuisines from '../../cuisine';

class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCuisine: '',
      sentence: `${this.props.sentence} from ${this.props.selectedItem}`,
      cuisineSelected: false,
      cuisineItem: '',
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

  handleClickSelectCuisine(item) {
    this.setState({
      cuisineSelected: true,
      cuisineItem: item,
      sentence: `${this.state.sentence} from ${item} cuisine`
    })
  }

  handleSelectedItem() {
    this.setState({
      cuisineSelected: false,
      cuisineItem: ''
    })
  }

  render() {

    const {sentence, cuisineSelected, cuisineItem} = this.state;

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
            <button onClick={() => this.handleSelectedItem()}>{cuisineItem}</button>
            <div>{sentence}</div>
          </div>
          }
        </div>
        }
      </div>
    )
  }
}

export default Cuisine;
