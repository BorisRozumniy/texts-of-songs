const initialState = localStorage.songs ? JSON.parse(localStorage.songs) : [];

export default function songs (state = initialState, action) {
	function toLocalStorage (state) {
		const str = JSON.stringify(state)
		localStorage.setItem('songs', str)
		// console.log('songs', state, str, localStorage.songs)
	}
	if (action.type === 'ADD_SONG') {
		toLocalStorage([
			...state,
			action.payload
		])
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'DELETE_SONG') {
		const stateCopy = state.slice()
		stateCopy.splice(action.index, 1)
		toLocalStorage(stateCopy)
		return stateCopy
	} else if (action.type === 'EDIT_SONG') {
		const stateCopy = state.slice()
		const newSONG = action.payload
		stateCopy.splice(action.index, 1, newSONG)
		toLocalStorage(stateCopy)
		return stateCopy
	}
	return state;
}
