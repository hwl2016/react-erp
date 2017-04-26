export const Add = (txt) => {
	return {
		type: 'INCREAMENT',
		txt
	}
}

export const Minus = (txt) => {
	return {
		type: 'DECREAMENT',
		txt
	}
}

export const requestPosts = dept => {
	return {
		type: 'REQUEST_POSTS',
		dept
	}
}

export const receivePosts = (dept, json) => {
	return {
		type: 'RECEIVE_POSTS',
		dept,
		data: json,
		receivedAt: Date.now()
	}
}

const ajax = (type) => (dispatch, getState) => {
	dispatch(requestPosts(dept));
	return fetch(`http://localhost:9002/${dept}.json`)
	.then(resp => resp.json())
	.then(json => dispatch(receivePosts(dept, json)))
}

export const fetchData = dept => (dispatch, getState) => {
	return dispatch(ajax(dept))
}