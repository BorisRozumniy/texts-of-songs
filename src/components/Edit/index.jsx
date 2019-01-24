import React, { PureComponent } from 'react';
import './style.css';
import Popup from '../Popup';

class Edit extends PureComponent {

	saveHendler = (editText, e) => {
		const { song ,index, editSong } = this.props;
		// e.preventDefault();
		editSong( song, index, editText.value )
	};

	deleteHendler = e => {
		// e.preventDefault();
		this.props.deleteSong( this.props.index );
	};

	render () {

		const { song, openEditHendler, openEditId } = this.props;

		return (
			<div>
				<button onClick={openEditHendler} className="btn">
					{openEditId === song.id ? 'Close' : 'Edit'}
				</button>
				{openEditId === song.id
				&&
				<Popup 
					saveHendler={this.saveHendler}
					deleteHendler={this.deleteHendler}
					song={song}
					openEditHendler={openEditHendler}
				/>
				}
			</div>
		);
	};
};

export default Edit