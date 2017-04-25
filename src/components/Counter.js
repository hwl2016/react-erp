import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/Counter';

class Counter extends Component {
	constructor(props) {
		super(props);
		console.log('--------------props------------')
		console.log(props)
		console.log('--------------props------------')
	}

	handle() {
		console.log(this.props)
		this.props.dispatch(actions.Minus())
	}

	render() {
		return (
			<div>
				<h2>加减计数器</h2>
				<button onClick={ () => this.props.dispatch(actions.Add()) }>加</button>
				<button onClick={ this.handle.bind(this) }>减</button>
				<p>state: { this.props.cnt }</p>
			</div>
		)
	}
}

/*const mapStateToProps = (state, ownProps) => ({
  // active: ownProps.filter === state.visibilityFilter
  cnt: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClick: () => {
  //   dispatch(setVisibilityFilter(ownProps.filter))
  // }
  cnt: state
})*/

//将组件交给redux 管理
export default connect( 
	( state ) => {
		console.log(`state:${state}`, 'connect 函数中打印');
		return {
			cnt: state,
			haha: 'haha'
		}
	}
)(Counter);