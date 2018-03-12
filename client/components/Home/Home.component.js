import React from 'react';
import FoodDrink from '../FoodDrink/FoodDrink.container';

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Hail a Table</h1>
        <div>Welcome to our site</div>
        <FoodDrink/>
      </div>
    )
  }
}

export default Home;
