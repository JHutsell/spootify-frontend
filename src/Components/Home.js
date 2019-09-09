import React from 'react';
import CurrentSongAdapter from "../Adapters/CurrentSongAdapter";
import Songcard from "./Songcard";

class Home extends React.Component {

    state = {
        currentSong: {}
    }

    componentDidMount() {
        CurrentSongAdapter.getCurrentSong()
            .then(resp => {
                this.setState({
                    currentSong: resp
                })
            })
    }
        
    render() {
        let playingSong;
        if(this.state.currentSong.item){
        console.log(this.state.currentSong.item)
        let songUri = `https://open.spotify.com/embed/track/${this.state.currentSong.item.uri.split(":")[2]}`
        playingSong = <div><h1>{this.state.currentSong.item.name}</h1>
                            <h3>{ this.state.currentSong.item.album.artists[0].name }</h3>
                            <img src={ this.state.currentSong.item.album.images[0].url} />
                            <iframe src={songUri} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        } else {
            playingSong = "PLAY A SONG"
        }

        return playingSong
    }
}

export default Home