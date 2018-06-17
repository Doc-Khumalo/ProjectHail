import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './DateTime.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { getDateTime } from "../../redux/actions";
import {connect} from "react-redux";

export class DateTime extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      date: null
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  // updateDataStore() {
  //   // let selectedDate = document.getElementsByClassName('timeDate');
  //   //
  //   // if (selectedDate !== undefined && selectedDate.length > 0) {
  //   //   selectedDate = selectedDate[0].defaultValue;
  //   //   selectedDate = moment(selectedDate).toDate();
  //   //
  //   //   this.setState({
  //   //     date: selectedDate
  //   //   });
  //   //   console.log('timeDate', selectedDate);
  //   // }
  //
  //   this.props.getDateTime(this.state.startDate);
  //
  // }

  updateDataStore() {
    const { date } = this.state;

    this.props.getDateTime(date);
  }

  render() {
    this.updateDataStore();

    return (
      <div>
        test test
        <DatePicker
          selected={this.state.startDate}
          onChange={e => this.handleChange(e)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          timeCaption="time"
          todayButton={"Switch to Today"}
          isClearable={true}
          placeholderText="Please select to enter date...."
          withPortal
          className="timeDate"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.reducer.items
  };
};

const mapDispatchToProps = {
  getDateTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateTime);
