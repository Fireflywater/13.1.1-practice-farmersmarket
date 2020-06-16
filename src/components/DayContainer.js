import React from 'react';
import Day from './Day';

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class DayContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dayVisible: 0
    };
  }

  handleClick = (id) => {
    this.setState(prevState => ({
      dayVisible: id
    }));
  }

  render(){
    let displayedDay = <Day
      day={marketSchedule[this.state.dayVisible].day}
      location={marketSchedule[this.state.dayVisible].location}
      hours={marketSchedule[this.state.dayVisible].hours}
      booth={marketSchedule[this.state.dayVisible].booth}
    />
    return (
      <React.Fragment>
        {marketSchedule.map((day, index) =>
          <button onClick={() => this.handleClick(index)}>{day.day}</button>
        )}
        <br/>
        {displayedDay}
      </React.Fragment>
    );
  }
}

export default DayContainer;
