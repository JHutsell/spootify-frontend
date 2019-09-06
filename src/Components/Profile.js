import React from 'react';
import RecentTracks from './RecentTracks';
import CurrentSongAdapter from '../Adapters/CurrentSongAdapter';
import SpottyNavbar from './SpottyNavbar';

class Profile extends React.Component {

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
        var currentUser = JSON.parse(localStorage.getItem("currentUser"))
        const {profile_img_url, display_name, spotify_url, email} = currentUser
        console.log(this.state)
        return(
            <div>
                {/* <SpottyNavbar history={ this.props.history }/> */}
                <h1>{display_name}</h1>
                <h1>{email}</h1>
                <a href={spotify_url}></a>
                <img src={profile_img_url} alt="spotifyImg"/>
        </div>
        )
    }
}

export default Profile;
