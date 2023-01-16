import React from "react";
import PropTypes from "prop-types";

const RadioButton = (props) => {
  const { labelName, inputName, inputValue } = props;

  return (
    <label className="radio-button-container">
      <p>{labelName}</p>
      <input type="radio" name={inputName} value={inputValue} />
      <span className="checkmark" />
    </label>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
};
