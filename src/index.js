import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Employee from './components/Employee';

//reducer 函数
function counter(state = 0, action) {
	switch(action.type) {
		case 'INCREAMENT': 
			return state + 1;
		case 'DECREAMENT':
			return state - 1;
		default:
			return state
	}
}

//创建reducer store
let store = createStore(counter);

console.log(store);

//发布一个订阅  每当 dispatch 的时候 会触发
store.subscribe(() => {
	console.log(store.getState())
});

store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'DECREAMENT' });

ReactDOM.render( <Employee />, document.getElementById('box') );
