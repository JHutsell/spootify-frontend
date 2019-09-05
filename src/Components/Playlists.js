import React from 'react'
import RecentTracksAdapter from '../Adapters/RecentTracksAdapter';
import PlaylistDetails from './PlaylistDetails';

// const recentTracks = RecentTracksAdapter.getRecentTracks()
// debugger

// const allTracks = recentTracks.map(track => {
    //     return <li>track.name</li>
    // })
    
class Playlists extends React.Component {
    render(){
        var playlists = JSON.parse(localStorage.getItem("playlists"))
        console.log(playlists)

        let allLists = playlists.map(playlist => {
            return <PlaylistDetails playlist={ playlist } />
        })

        console.log(this.props)
        // return {allTracks}
        return allLists
    }
}

export default Playlists