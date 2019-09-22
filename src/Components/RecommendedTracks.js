import React from 'react';
import Songcard from './Songcard';
import RecentTracksAdapter from '../Adapters/RecentTracksAdapter';
import PlaylistsAdapter from '../Adapters/PlaylistsAdapter';
import Headers from '../Adapters/Headers'
import {Dropdown, DropdownButton} from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';



class RecommendedTracks extends React.Component {
    
    state = {
        reccoTracks: [],
        login: false,
        playlists: [],
    }

    addSongToPlaylist = (playlistId, songUri) => {
        fetch(`https://spootify.herokuapp.com/api/v1/postSong/${playlistId}/${songUri}`, {
            method: "POST",
            headers: Headers()
        }).then(resp => resp.json())
    }

    componentDidMount() {

        RecentTracksAdapter.getRecentTracks()
            .then(data => {
            
            if(data.length>0){
                return fetch(`https://spootify.herokuapp.com/api/v1/getReccos/${data[0].track.id}/${data[1].track.id}/${data[2].track.id}/${data[3].track.id}/${data[4].track.id}`, {
                method: "POST",
                headers: Headers()
                }).then(resp => resp.json())
                    .then(data => {
                        this.setState({
                            reccoTracks: data,
                            login: true
                        })
                    })
            }
                
            })

            PlaylistsAdapter.getPlaylists()
            .then(res => {
                this.setState({
                    playlists: res
                })
            })

    }
    
    render(){
        console.log(this.state.reccoTracks)
        let eachTrack
        let dropdownItems
        if (localStorage.getItem("loggedIn") === "true")
            
        eachTrack = this.state.reccoTracks.map(track => {

            dropdownItems = this.state.playlists.map(playlist => {
                return <Dropdown.Item href="#/action-1" onSelect={ () => this.addSongToPlaylist(playlist.id, track.uri.split(":")[2]) }
                >{playlist.name}</Dropdown.Item>
            })

            const songUri = `https://open.spotify.com/embed/track/${track.uri.split(":")[2]}`
        
            if (track.album.images[0])
            return <div className="recco-image">
            <MDBCol>
            <MDBCard style={{ width: "22rem", background:"black" }}>
                <MDBCardImage className="img-fluid" src={track.album.images[1].url} style={{ width: "22rem" }} waves />
                <MDBCardBody>
                <MDBCardTitle>{track.name}</MDBCardTitle>
                <MDBCardText>
                <iframe src={songUri} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </MDBCardText>
                <DropdownButton id="dropdown-basic-button" variant="info" title="Add to a Playlist">
                    {dropdownItems}
                </DropdownButton>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            </div>
        })
        
        return (
            <div>
                {eachTrack?
                <h3>Recommended Tracks based on Recent Song History</h3>
            :
            null}
            <div className="recco-images">
            {eachTrack}
            </div>
            </div>
        )
    }
}
//className="recco-image">
//className="each-recco-image" />
//className="image-caption"
export default RecommendedTracks