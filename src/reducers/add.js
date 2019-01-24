const initialSttate = [];

export default function add (state = initialSttate, action) {
	if (action.type === 'ADD_SONG') {
		console.log(action)
		return [
			...state,
			action.payload
		]
	}
	return state;
}