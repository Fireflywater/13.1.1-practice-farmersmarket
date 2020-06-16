import React from "react";
import PropTypes from "prop-types";

function Month(props){
  return (
    <React.Fragment>
      <span><h3>{props.month}'s Available Produce:</h3></span>
      {props.selection.map((produce, index) =>
        <div>
          <span>{produce}</span><br/>
        </div>
      )}
    </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Month;
