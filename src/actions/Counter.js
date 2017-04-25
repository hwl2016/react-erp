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