const initialState = [];

export default function edit (state = initialState, action) {
	if (action.type === 'EDIT_SONG') {
		const stateCopy = state.slice();
		const editedSong = action.payload;
		stateCopy.splice(action.index, 1, editedSong);
		return stateCopy;
	}
	return state;
}