const initialState = '';

export default function filterSong (state = initialState, action) {
	if (action.type === 'FIND_SONG') {
		return action.payload;
	}
	return state;
}