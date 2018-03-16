import React from 'react';

// import cuisines from '../../cuisine';

class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCuisine: '',
      cuisineSelected: false,
      cuisineItem: '',
      selectedItemDisplay: [],
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
        'Southern African',
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

  componentDidMount() {

    if (this.props.continent) {
      this.setState({
        selectedCuisine: this.props.continent
      });
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

  render() {

    const { cuisineSelected, cuisineItem, selectedCuisine, Europe, Africa, Asia, NorthAmerica, SouthAmerica } = this.state;

    const { continent, food } = this.props;

    let cuisineToCheck;

    if (selectedCuisine.length !== null) {
      if (selectedCuisine === 'Europe') {
        cuisineToCheck = Europe;
      }

      if (selectedCuisine === 'Asia') {
        cuisineToCheck = Asia;
      }

      if (selectedCuisine === 'Africa') {
        cuisineToCheck = Africa;
      }

      if (selectedCuisine === 'North America') {
        cuisineToCheck = NorthAmerica;
      }

      if (selectedCuisine === 'South America') {
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
            <button onClick={() => this.handleSelectedItem()}>{cuisineItem}</button>
            <div>{food} {continent} {cuisineItem}</div>
            <h3>I'm feeling like {cuisineItem} {food} </h3>
          </div>
          }
        </div>
        }
      </div>
    )
  }
}

export default Cuisine;
