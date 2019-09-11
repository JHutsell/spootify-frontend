import React from 'react'
import RecentTracksAdapter from '../Adapters/RecentTracksAdapter';
import Songcard from './Songcard'

class RecentTracks extends React.Component {

    state = {
        recentTracks: []
    }

    componentDidMount() {
        RecentTracksAdapter.getRecentTracks()
            .then(res => {
                this.setState({
                    recentTracks: res
                })
            })
    }

    render(){
        
        // var unique = this.state.recentTracks.map(track => track.name);
        // unique = unique.filter(function(v,i) { return unique.indexOf(v) == i; });

        console.log(this.state.recentTracks)
        
        let eachTrack = this.state.recentTracks.map(track => {
            return <Songcard song={ track } />
        })

        return eachTrack
    }

}

export default RecentTracks