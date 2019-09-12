import React from 'react'
import PlaylistsAdapter from '../Adapters/PlaylistsAdapter';
import PlaylistDetails from './PlaylistDetails';
import Headers from '../Adapters/Headers';
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";


    
class Playlists extends React.Component {
    
    state = {
        playlists: [],
        name: ''
    }

    componentDidMount() {
        PlaylistsAdapter.getPlaylists()
            .then(res => {
                console.log(res)
                this.setState({
                    playlists: res
                })
            })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/createNewPlaylist/${this.state.name}`, {
            method: "POST",
            headers: Headers()
            // body: JSON.stringify({name: this.state.name})
        }).then(resp => resp.json())
    }



    render(){
    
        console.log(this.state)
        let allLists
        allLists = this.state.playlists.map(playlist => {
            return <PlaylistDetails playlist={ playlist } />
        })
    

        return (
                <div>
                    { !allLists.length !== 0 ?
                    <div>
                    {allLists}
                    <form onSubmit={ this.handleSubmit } style={{"padding-left": "25%"}} className="new-playlist-form">
                    <MDBInput onChange={ this.handleInputChange } value={ this.state.name } style={{width: "700px"}} name="name" label="New Playlist" background size="lg" />
                    <MDBBtn gradient="blue" type="submit" style={{"margin-right": "390px"}}>Submit   🎶</MDBBtn>
                    </form>
                    </div>
                    :
                    null
                    }
                </div>
            )
    }
}

export default Playlists