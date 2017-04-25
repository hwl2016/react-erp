import React, { Component } from 'react';


//方法一 使用箭头函数接收父组件传递的 prop
// const Button = ({handle, show}) => {
// 	return <div><button onClick={ handle }>{ show ? '显示' : '隐藏'}</button></div>
// }


//方法二  使用this.props.xxx 接收父组件传递的 prop
class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			number: true
		}
	}

	haha() {
		this.setState({
			number: !this.state.number
		})
	}

	render() {
		return (
			<div>
				<button onClick={ this.props.handle }>{ this.props.show ? '显示' : '隐藏'}</button>
				<button onClick={ this.props.handle }>{this.state.number ? 1 : '一'}</button>
				<button onClick={ this.props.handle }>{this.state.number ? 2 : '二'}</button>
				<button onClick={ this.props.handle }>{this.state.number ? 3 : '三'}</button>
			</div>)
	}
}

export default Button;