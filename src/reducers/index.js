import { combineReducers } from 'redux';
// import add from './add';
// import edit from './edit';
// import del from './delete';
import filterSong from './filter';
import songs from './songs';

export default combineReducers({
	songs,
	filterSong
})