import React from 'react'
import PlaylistsAdapter from '../Adapters/PlaylistsAdapter';
import PlaylistDetails from './PlaylistDetails';
    
class Playlists extends React.Component {
    render(){

        const listz = PlaylistsAdapter.getPlaylists()
        console.log(listz)
        
        var playlists = JSON.parse(localStorage.getItem("playlists"))
        // console.log(playlists)

        let allLists = playlists.map(playlist => {
            return <PlaylistDetails playlist={ playlist } />
        })

        console.log(this.props)
        // return {allTracks}
        return allLists
    }
}

export default Playlists