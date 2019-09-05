import React from 'react'
import RecentTracksAdapter from '../Adapters/RecentTracksAdapter';

class TopArtists extends React.Component {
    render(){
        var topArtists = JSON.parse(localStorage.getItem("topArtists"))
        console.log(topArtists)
        let eachArtist = topArtists.map(topArtist => {
            return <li>{topArtist.name}</li>
        })

        console.log(this.props)
        return eachArtist
    }
}

export default TopArtists