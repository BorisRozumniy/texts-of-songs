import React from 'react';
import './style.css';

class Popup extends React.Component {
	render() {

  	const { saveHendler, deleteHendler, song, openEditHendler } = this.props

    return (
      <div className='popup'>
        <div className='popup_inner'>
          <textarea 
            className="edit-text"
            defaultValue={song.text}
            ref={input => this.editText = input}>
          </textarea>
        	<button className="btn save" onClick={ () => {saveHendler(this.editText); openEditHendler()} }>Save</button>
          <button className="btn delete" onClick={deleteHendler}>Delete</button>
          <button className="btn close" onClick={openEditHendler}>Close</button>
            
        </div>
      </div>
    );
  }
}

export default Popup