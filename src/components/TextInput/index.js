import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap';
import './TextInput.css';

const FilterBar = (props) => {
	const [value, setValue] = useState('');
	const { onChange, placeholder, button, buttonOnClick } = props;

	const handleChange = (event) => {
		setValue(event.target.value);
		onChange && onChange(event.target.value);
	};

	return (
		<InputGroup className='filter-bar'>
			<InputGroupAddon addonType="prepend">
				<InputGroupText>{placeholder}</InputGroupText>
			</InputGroupAddon>
			<Input onChange={handleChange} value={value}/>
			{ button && <InputGroupAddon addonType="append"><Button color="secondary" onClick={buttonOnClick}>Go</Button></InputGroupAddon>}
		</InputGroup>);
};

FilterBar.propTypes ={
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	button: PropTypes.bool,
	buttonOnClick: PropTypes.func
};

export default FilterBar;