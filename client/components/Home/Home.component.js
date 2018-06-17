import React from 'react';
import FoodDrink from '../FoodDrink/FoodDrink.component';
import DateTime from "../DateTime/DateTime.component";
import Location from "../Location/Location.component";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props)
  }

  render() {
    console.log('render', this.props);
    return (
      <div>
        <Location
          props={this.props}
        />
        {/*<DateTime*/}
          {/*props={this.props}*/}
        {/*/>*/}
        {/*<FoodDrink*/}
          {/*props={this.props}*/}
        {/*/>*/}
      </div>
    )
  }
}

export default Home;
