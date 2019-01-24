import React, { Component } from 'react';
import './style.css';
import Song from '../Song';

class ListSongs extends Component {

	state = {
		openEditId: null,
		showSongId: null
	}

	openEditHendler = (id, e) => {
		this.setState({
			openEditId: this.state.openEditId === id ? null : id
		})
	}

	clearEditIdState = () =>
		this.setState ({ openEditId: null })

	openSong = id =>
		this.setState({
			showSongId: this.state.showSongId === id ? null : id
		})

	render () {

		const { showSongId, openEditId } = this.state;
		const { songs, editSong, deleteSong } = this.props;

		return (
			<ul>
				{songs.map((song, index) =>
					<li key={song.id} className="item-list">
						<Song
							song={song}
							index={index}
							openSong={this.openSong.bind(this, song.id)}
							showSongId={showSongId}

							openEditHendler={this.openEditHendler.bind(this, song.id)}
							openEditId={openEditId}
							editSong={editSong}
							deleteSong={deleteSong}
						/>
					</li>
				)}
			</ul>
		)
	}
}

export default ListSongs