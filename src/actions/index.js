export const Add = (value) => {
	return {
		type: 'INCREAMENT',
		value
	}
}

export const Minus = (value) => {
	return {
		type: 'DECREAMENT',
		value
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

const ajax = (dept) => (dispatch, getState) => {
	dispatch(requestPosts(dept));
	return fetch(`http://localhost:8000/${dept}/getAll`)
	.then(resp => resp.json())
	.then( json => dispatch( receivePosts( dept, JSON.stringify(json) ) ) )
}

export const fetchData = dept => (dispatch, getState) => {
	return dispatch(ajax(dept))
}