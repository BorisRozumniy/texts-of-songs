const initialState = [];

export default function del (state = initialState, action) {
	if (action.type === 'DELETE_SONG') {
		const stateCopy = state.slice();
		stateCopy.splice(action.index, 1);
		return stateCopy;
	}
	return state;
}