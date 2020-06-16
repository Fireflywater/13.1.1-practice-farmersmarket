import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return (
    <React.Fragment>
      <span><h3>{props.day} at {props.location}</h3></span>
      <span>Hours: {props.hours}</span><br/>
      <span><h3>Booth: {props.booth}</h3></span>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Day;
