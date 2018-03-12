import React from 'react';
import CuisineList from '../../cuisine';

class Cuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'Asia': [],
      'Africa': [],
      'South America': [],
      'North America': [],
      'Europe': [],
    }
  }

  componentDidMount() {
    const filteredContent = CuisineList.filter(item => (item[i]));
  }

  render() {
    return (
      <div>
        <button>Cuisine</button>
      </div>
    )
  }
}

export default Cuisine;
