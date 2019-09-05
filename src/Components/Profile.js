import React from 'react';
import RecentTracks from './RecentTracks';
import PlaylistAdapter from '../Adapters/PlaylistsAdapter';
import SpottyNavbar from './SpottyNavbar';

// const Profile = ({currentUser}) =>{
//     console.log(localStorage.currentUser)
//     const {profile_img_url, display_name, spotify_url, email} = currentUser
//    return(
//        <div>
//            <h1>{display_name}</h1>
//            <h1>{email}</h1>
//            <h2>wedfwerwer</h2>
//            <a href={spotify_url}>
//             <img src={profile_img_url} alt="spotifyImg"/>
//            </a>
//            <RecentTracks />
//        </div>
//    )
// }

class Profile extends React.Component {
    
    handleRecentTracks = () => {
        this.props.history.push("/recentTracks")
    }

    handlePlaylists = () => {
        this.props.history.push("/playlists")
    }

    handleTopArtists = () => {
        this.props.history.push("/topArtists")
    }

    render() {
        var currentUser = JSON.parse(localStorage.getItem("currentUser"))
        const {profile_img_url, display_name, spotify_url, email} = currentUser
        return(
            <div>
                {/* <SpottyNavbar history={ this.props.history }/> */}
                <h1>{display_name}</h1>
                <h1>{email}</h1>
                <a href={spotify_url}>
                <img src={profile_img_url} alt="spotifyImg"/>
                {/* <span>{playlists}</span> */}
            </a>
            {/* <button onClick={this.handleRecentTracks}>RECENT TRACKS</button>
            <button onClick={this.handlePlaylists}>PLAYLISTS</button>
            <button onClick={this.handleTopArtists}>TOP ARTISTS</button> */}
        </div>
        )
    }
}

export default Profile;
