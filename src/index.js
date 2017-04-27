import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// import CounterReducer from './reducers/Counter';
import MyReducer from './reducers';

import Employee from './components/Employee';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

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

const logger = createLogger();

//创建reducer store
//添加中间件
let store = createStore(
	MyReducer,
	applyMiddleware(thunk, logger)
);

console.log(store);

//发布一个订阅  每当 dispatch 的时候 会触发
store.subscribe(() => {
	// console.log(`state: ${store.getState()}`, 'subscribe中打印')
});

// store.dispatch({ type: 'INCREAMENT' });
// store.dispatch({ type: 'INCREAMENT' });
// store.dispatch({ type: 'DECREAMENT' });

ReactDOM.render( 
	<Provider store={store}>
		<Router history={hashHistory}>
		    <Route path="/" component={Employee}/>
		    <Route path="/counter" component={Counter}/>
		    <Route path="/fetch" component={FetchData}/>
		</Router>
	</Provider>
	, document.getElementById('box') );


