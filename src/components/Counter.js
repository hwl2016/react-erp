import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/Counter';

class Counter extends Component {
	constructor(props) {
		super(props);
		console.log('--------------props------------')
		console.log(props)
		console.log('--------------props------------')

		this.state = {
			cnt: 0
		}
	}

	render() {
		return (
			<div>
				<h2>加减计数器</h2>
				<button onClick={ () => this.props.dispatch(actions.Add()) }>加</button>
				<button onClick={ () => this.props.dispatch(actions.Minus()) }>减</button>
				<p>state: { this.state.cnt }</p>
			</div>
		)
	}
}

//将组件交给redux 管理
export default connect()(Counter);