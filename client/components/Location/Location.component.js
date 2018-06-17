import React from 'react';
import FoodDrink from '../FoodDrink/FoodDrink.component';
import DateTime from "../DateTime/DateTime.component";

export class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: "",
      submitted: false,
      showSubmit: false
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);

    this.setState({
      submitted: true
    });
    console.log('location', this.state)
  }

  render() {

    return (
      <div>
        <form action="" noValidate="novalidate" onSubmit={e => this.handleSubmit(e)}>
          <fieldset className="form-group">
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Enter location..."
                value={this.state.location}
                onChange={e => this.setState({
                  location: e.target.value,
                  showSubmit: true,
                  submitted: false
                })}
              />
            </div>
            <div>
              {this.state.showSubmit &&
                <button className="btn btn-default" type="submit">
                  Submit
                </button>
              }
            </div>
          </fieldset>
        </form>
        {this.state.location !== "" &&
          <h3>Location: {this.state.location}</h3>
        }
        {this.state.submitted === true && this.state.location !== "" &&
          <div>
            <DateTime
              props={this.props}
            />
            <FoodDrink
              location={this.state.location}
              props={this.props}
            />
          </div>
        }
      </div>
    )
  }
}

export default Location;
