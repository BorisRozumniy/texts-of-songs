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

  addSong = ref => {
    const strs = ref.split('\n')
    const song = {
      id: Date.now(),
      title: strs[0],
      text: ref
    }

    this.props.onAddSong( song )
  }

  editSong = ( song, index, ref ) => {
    const strs = ref.split('\n')
    const edited = {
      id: song.id,
      title: strs[0],
      text: ref
    }
    this.props.onEditSong ( edited, index )
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
