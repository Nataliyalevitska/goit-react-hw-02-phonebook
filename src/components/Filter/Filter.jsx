import React from 'react';
import PropTypes from 'prop-types';
import { TitleFilter, InputFilter } from './Filter.styled';

const Filter = ({ onChange, value }) => {
  return (
    <>
      <TitleFilter htmlFor="filter">Find contacts by name</TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        value={value}
        placeholder="*Enter name"
        onChange={e => onChange(e.target.value)}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
