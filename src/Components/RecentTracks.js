import React from 'react'
import RecentTracksAdapter from '../Adapters/RecentTracksAdapter';
import Songcard from './Songcard'

// const recentTracks = RecentTracksAdapter.getRecentTracks()
// debugger

// const allTracks = recentTracks.map(track => {
    //     return <li>track.name</li>
    // })

    // let recentTracks = RecentTracksAdapter.getRecentTracks().map(track => {
    //     return <li>{track.track.name}</li>
    // })

class RecentTracks extends React.Component {

    render(){
        const trackz = RecentTracksAdapter.getRecentTracks()
        console.log(trackz)

        const recentTracks = JSON.parse(localStorage.getItem("recentTracks"))

        let eachTrack = recentTracks.map(track => {
            return <Songcard song={ track } />
        })

        // return {allTracks}
        return eachTrack
    }
}

export default RecentTracks