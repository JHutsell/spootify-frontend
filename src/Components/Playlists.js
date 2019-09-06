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

    render(){
    
        console.log(this.state)

        let allLists = this.state.playlists.map(playlist => {
            return <PlaylistDetails playlist={ playlist } />
        })

        return allLists
    }
}

export default Playlists