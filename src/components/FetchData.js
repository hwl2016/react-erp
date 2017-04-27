import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class FetchData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	getUserData() {
		this.props.dispatch(actions.fetchData('user'));
	}

	getEmpData() {
		this.props.dispatch(actions.fetchData('employee'));
	}

	render() {
		return (
			<div>
				<button onClick={ this.getEmpData.bind(this) }>获取 employee 数据</button>
				<button onClick={ this.getUserData.bind(this) }>获取 user 数据</button>
				<ul>
					{
						this.props.data ? (JSON.parse(this.props.data).map(ele => {
							return <li><span>{ele.id}</span><span>{ele.name}</span><span>{ele.job}</span></li>
						})) : (<li>没有数据</li>)
					}
				</ul>
			</div>
		)
	}
}


export default connect(
	(state) => {
		return {
			data: state.data
		}
	}
)(FetchData);
