import { combineReducers } from 'redux';
import filterSong from './filter';
import songs from './songs';

export default combineReducers({
	songs,
	filterSong
})