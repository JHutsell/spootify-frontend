import React from 'react'
import PlaylistsAdapter from '../Adapters/PlaylistsAdapter';
import PlaylistDetails from './PlaylistDetails';
    
class Playlists extends React.Component {
    
    state = {
        playlists: []
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


    // componentDidMount() {
    //     RecentTracksAdapter.getRecentTracks()
    //         .then(res => {
    //             this.setState({
    //                 recentTracks: res
    //             })
    //         })
    // }
    
    render(){
        // const listz = PlaylistsAdapter.getPlaylists()
        // console.log(listz)
        
        var playlists = JSON.parse(localStorage.getItem("playlists"))
        // console.log(playlists)
        console.log(this.state)

        let allLists = playlists.map(playlist => {
            return <PlaylistDetails playlist={ playlist } />
        })

        // return {allTracks}
        return allLists
    }
}

export default Playlists