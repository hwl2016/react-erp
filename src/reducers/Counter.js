const s = {
	txt: undefined,
	value: 50
}

export default function CounterReducer(state = 50, action) {
	switch(action.type) {
		case 'INCREAMENT': 
			return state + 1;
		case 'DECREAMENT':
			return state - 1;
		default:
			return state
	}
}