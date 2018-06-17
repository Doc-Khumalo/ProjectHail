import React from 'react';
import FoodDrink from '../FoodDrink/FoodDrink.component';
import DateTime from "../DateTime/DateTime.component";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props)
  }

  render() {
    console.log('render');
    return (
      <div>
        <DateTime
          props={this.props}
        />
        <FoodDrink
          props={this.props}
        />
      </div>
    )
  }
}

export default Home;
