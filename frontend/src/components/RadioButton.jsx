import React from "react";
import PropTypes from "prop-types";

const RadioButton = (props) => {
  const { labelName, inputName, inputValue, checked, onChange } = props;

  return (
    <label className="radio-button-container">
      <p>{labelName}</p>
      <input
        type="radio"
        name={inputName}
        value={inputValue}
        defaultChecked={checked}
        onChange={onChange}
      />
      <span className="checkmark" />
    </label>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
