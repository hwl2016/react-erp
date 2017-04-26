import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class FetchData extends Component {
	constructor(props) {
		super(props);

	}

	getData() {
		this.props.dispatch(actions.fetchData())
	}

	render() {
		return (
			<div>
				<button onClick={ this.getData.bind(this) }>获取数据</button>
				<div>{ this.props.data }</div>
			</div>
		)
	}
}

export default connect(
	(state) => {
		return {
			data: state
		}
	}
)(FetchData);