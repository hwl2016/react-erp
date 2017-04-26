import $ from 'jquery';
import React from 'react';

import Table from './Table';
import Button from './Button';
import Abc from './Abc';
import FetchData from './FetchData';
// import DateSelect from './DateSelect';

import DataEmployee from '../data/employee';

export default class Employee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
			employeeList: [],
			user: {
				name: 'Michael'
			}
		}

		this.abcHandle = this.abcHandle.bind(this);
		this.btnHandle = this.btnHandle.bind(this);
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');

		// $.get('http://localhost:9000/data/emploee.json')
		// .then(res => {
		// 	this.setState({
		// 		employeeList: res
		// 	})
		// })

		this.setState({
			employeeList: DataEmployee
		})
	}

	abcHandle(e) {
		var tar = e.target;
		var txt = $(tar).text();
		console.log(txt);

		this.refs.Button.haha();	//在父组件中调用子组件的方法

	// this.setState({});
	}

	btnHandle(e) {
		var tar = e.target;
		var txt = $(tar).text();

		if(txt == 1) {
			console.log(`btn-${txt}`);
		}else if(txt == 2) {
			console.log(`btn-${txt}`);

		}else if(txt == 3) {
			console.log(`btn-${txt}`);

		}else {
			this.setState({
				show: !this.state.show
			})
		}
	}

	render() {
		console.log('render');

		return (
			<div>
				<Abc handle={this.abcHandle} user={ this.state.user } />
				<Button ref='Button' handle={ this.btnHandle } handle2={ this.abcHandle } show={ this.state.show }/>
				{ this.state.show ? <Table employeeList={ this.state.employeeList }/> : ( <div>暂无数据</div> ) }
				{/*<div><DateSelect /></div>*/}
			</div>
		)
	}

}