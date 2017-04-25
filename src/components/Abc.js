import React from 'react';
import PropTypes from 'prop-types';

const Abc = ({ handle, user }) => {
	return <div onClick={handle}>Abc Component: Hello {user.name}</div>
}

Abc.propTypes = {
	handle: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

export default Abc;
