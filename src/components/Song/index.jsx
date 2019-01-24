import React, { PureComponent } from 'react';
import './style.css';
import Edit from '../Edit';

class Song extends PureComponent {

	

	render () {

		const { openSong, showSongId, song:{
			id, title, text
		},
		editSong, openEditHendler, openEditId, deleteSong, song, index } = this.props;


		const blocks = text.split('-/').map((verse, index) =>
			<div key={index} className="verse-block" >
				{verse.split('\n').map((line, index) =>
					<p key={index}>{line}</p>)}
			</div>)

		return (
			<div className={showSongId === id ? "song-open" : "song-default"}>
				<button onClick={openSong} className="title-song">{title}</button>
				{showSongId === id && <article>{blocks}</article>}
				<Edit 
					song={song}
					index={index}
					openEditHendler={openEditHendler}
					openEditId={openEditId}
					editSong={editSong}
					deleteSong={deleteSong}
				/>
			</div>
		)
	}
}

export default Song
