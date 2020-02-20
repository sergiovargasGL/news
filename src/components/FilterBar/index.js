import React, { useState } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import './FilterBar.css';

const FilterBar = (props) => {
  const [value, setValue] = useState('');
  const { onChange } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange && onChange(event.target.value);
  }

  return (
  <InputGroup className='filter-bar'>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>Filter by source</InputGroupText>
    </InputGroupAddon>
    <Input onChange={handleChange} value={value}/>
  </InputGroup>);
};

export default FilterBar;