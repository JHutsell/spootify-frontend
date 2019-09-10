import React from 'react';
import PlaylistsAdapter from '../Adapters/PlaylistsAdapter';
import Headers from "../Adapters/Headers";
import {Modal, Button, Dropdown, DropdownButton} from 'react-bootstrap';

class SpottyModal extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount() {
        PlaylistsAdapter.getPlaylists()
            .then(res => {
                this.setState({
                    playlists: res
                })
            })
    }

    addSongToPlaylist = (playlistId, songUri) => {
        fetch(`http://localhost:3000/api/v1/postSong/${playlistId}/${songUri}`, {
            method: "POST",
            headers: Headers()
        }).then(resp => resp.json())
    }

    // /tracks?uris=spotify:track:${songUri}

    // addSongToPlaylist = (playlistId, songUri) => {
    //     return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    //         method: "POST",
    //         headers: {
    //         //"content-type": "application/json",
    //         "accept": "application/json",
    //         "Authorization": "Bearer BQB3uKLk12aw3PaiRMatYCQzr6NfXeOBDqN9hBp6QxmvUCNVBJTpH_lRShG2Lq8qOFmMEws244KmJQTKHBD_ykr1AJNtRw5s9Ib_2Vz37OWO3P27A-Tw3ZSooPmoGMIakQMwj4Gy3WC8DGWaI29ufpeN792UT0h4GCbVhOADfC4E7QC0YxpzUYUkc4ppZ4aNeWaKhwkO56R1WX3JPcRk1IzvunJrh1gSjnPNeHBmE0aYP72Ri0KOtVqIJ8MfdH0ZSrU"
    //         },
    //         body: JSON.stringify(
    //             {"uris": [`spotify:track:${songUri}`]}
    //         )
    //     })//.then(resp => resp.json())
    // }

    // getSongsFromSpotify = (term) => {
    //     fetch(`http://localhost:3000/api/v1/getSong/${term}`, {
    //       method: "POST",
    //       headers: Headers()
    //     }).then(resp => resp.json())
    //       .then(data => {
    //         this.setState({
    //           searchResults: data.tracks.items
    //         })
    //       })
    //   }
    

    render(){
        if(!this.props.showModal){
            return null;
        }

        let results;
        
        console.log(this.props.searchResults)
        if(this.props.searchResults) {
            results = this.props.searchResults.map(track => {
                const songUri = `https://open.spotify.com/embed/track/${track.uri.split(":")[2]}`
                const dropdownItems = this.state.playlists.map(playlist => {
                    console.log(playlist)
                    return <Dropdown.Item href="#/action-1" onSelect={ () => this.addSongToPlaylist(playlist.id, track.uri.split(":")[2]) }
                    >{playlist.name}</Dropdown.Item>
                })

                return <div onClick={ this.handleSearchSelection }>
                        <p>{track.name}</p>
                        <p>By: { track.artists[0].name}</p>
                        <iframe src={songUri} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <DropdownButton id="dropdown-basic-button" variant="info" title="Add to a Playlist">
                            {dropdownItems}
                            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </DropdownButton>
                        </div>
            })
        }

        return(
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Search Results</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {results}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onClose} variant="primary">Close</Button>
                    {/* <Button variant="primary">Save changes</Button> */}
                </Modal.Footer>
            </Modal.Dialog>

        )

    }
}

export default SpottyModal