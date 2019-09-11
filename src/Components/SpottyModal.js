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

                return <div onClick={ localStorage.setItem("searchSelection", JSON.stringify(track))} >
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