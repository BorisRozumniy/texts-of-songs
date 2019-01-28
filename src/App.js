import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ListSongs from './components/ListSongs';
import InputForm from './components/InputForm';

class App extends Component {

  render () {
    return (
      <div className="App">
        <InputForm
          btnText="Add"
          hendler={this.addSong}
        />
        <ListSongs 
          songs={this.props.songs}
          addSong={this.addSong}
          editSong={this.editSong}
          deleteSong={this.deleteSong}
        />
        <InputForm
          btnText="Search"
          hendler={this.findSong}
        />
      </div>
    );
  }

  splitSong = (ref, id) => {
    const 
      strs = ref.split ('\n'),
      title = strs.splice(0, 1);
    return {
      id: id ? id : Date.now(),
      title: title.join(''),
      text: strs.join('\n')
    }
  }

  addSong = ref => {
    let res = this.splitSong(ref)
    this.props.onAddSong( res )
  }

  editSong = ( song, index, ref ) => {
    let res = this.splitSong(ref, song.id)
    this.props.onEditSong ( res, index )
  }

  deleteSong = index =>
    this.props.onDeleteSong ( index )

  findSong = ref => {
    this.props.onFindSong ( ref )
  }

}

export default connect (
  state => ({
    songs: state.songs.filter (
      song => song.text.includes ( state.filterSong )
    )
  }),
  dispatch => ({
    onAddSong: song => {
      const payload = song;
      dispatch ({ type: 'ADD_SONG', payload })
    },
    onEditSong: ( edited, index ) => {
      dispatch ({ type: 'EDIT_SONG', payload: edited, index: index })
    },
    onDeleteSong: index => {
      dispatch ({ type: 'DELETE_SONG', payload: `deleted song #${index}`, index: index })
    },
    onFindSong: text => {
      dispatch ({ type: 'FIND_SONG', payload: text })
    }
  })
)( App );
