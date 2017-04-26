import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterReducer from './reducers/Counter';

import Employee from './components/Employee';
import Counter from './components/Counter';

import './style.css';

//reducer 函数
// function counter(state = 0, action) {
// 	switch(action.type) {
// 		case 'INCREAMENT': 
// 			return state + 1;
// 		case 'DECREAMENT':
// 			return state - 1;
// 		default:
// 			return state
// 	}
// }

//创建reducer store
let store = createStore(CounterReducer);

console.log(store);

//发布一个订阅  每当 dispatch 的时候 会触发
store.subscribe(() => {
	console.log(`state: ${store.getState()}`, 'subscribe中打印')
});

// store.dispatch({ type: 'INCREAMENT' });
// store.dispatch({ type: 'INCREAMENT' });
// store.dispatch({ type: 'DECREAMENT' });

ReactDOM.render( 
	<Provider store={store}>
		<Router history={hashHistory}>
		    <Route path="/" component={Employee}/>
		    <Route path="/counter" component={Counter}/>
		</Router>
	</Provider>
	, document.getElementById('box') );


