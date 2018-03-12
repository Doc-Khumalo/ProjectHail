import React from 'react';

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

  render() {
    return (
      <div>
        <button>Cuisine</button>
      </div>
    )
  }
}

export default Cuisine;
