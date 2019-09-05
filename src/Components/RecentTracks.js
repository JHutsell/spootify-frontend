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

    state = {
        recentTracks: []
    }



    // Auth.login(code)
    // .then(res => {
    //   // const currentUser = res
    //   console.log(res)
    //   localStorage.setItem("jwt", res.auth_response_json.jwt);
    //   localStorage.setItem("currentUser", JSON.stringify(res.auth_response_json));
    //   localStorage.setItem("recentTracks", JSON.stringify(res.recent_tracks));
    //   localStorage.setItem("playlists", JSON.stringify(res.playlists));
    //   localStorage.setItem("topArtists", JSON.stringify(res.top_artists));
    //   this.setState({currentUser: res.auth_response_json,
    //   recentTracks: res.recent_tracks,
    //   topArtists: res.top_artists,
    //   playlists: res.playlists,
    //   loggedIn: true
    // }, this.props.history.push("/profile"))
    // })


    componentDidMount() {
        const trackz = RecentTracksAdapter.getRecentTracks()
        this.setState({
            recentTracks: trackz
        })
        // .then( res =>
        //     this.setState({
        //         recentTracks: res
        //     })
        //     )
            // debugger
    }

    render(){
        // const trackz = RecentTracksAdapter.getRecentTracks()
        // console.log(trackz)
        console.log(this.state.recentTracks)

        const recentTracks = JSON.parse(localStorage.getItem("recentTracks"))

        let eachTrack = recentTracks.map(track => {
            return <Songcard song={ track } />
        })

        // return {allTracks}
        return eachTrack
    }
}

export default RecentTracks