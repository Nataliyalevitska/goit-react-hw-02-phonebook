import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.css"

const Filter = ({ onChange, value }) => {
  return (
    <div>
      <p className="filter-title">Find contacts by name</p>
      <input className="filter-input"
        type="text"
        name="filter"
        value={value}
        placeholder="*Enter name"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;