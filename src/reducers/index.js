
const MyReducer = (state = {value: 50}, action) => {
	switch(action.type) {
		case 'INCREAMENT': 
			return {
				value: state.value + 1
			};
		case 'DECREAMENT':
			return {
				value: state.value - 1
			};
		case 'REQUEST_POSTS':
			return {
				dept: action.dept
			};
		case 'RECEIVE_POSTS':
			return {
				dept: action.dept,
				data: action.data,
				receivedAt: action.receivedAt
			};
		default:
			return state
	}
}

export default MyReducer;
