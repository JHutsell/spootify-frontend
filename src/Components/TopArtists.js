import React from 'react';
import TopArtistsAdapter from '../Adapters/TopArtistsAdapter';

class TopArtists extends React.Component {
    render(){

        const artz = TopArtistsAdapter.getTopArtists()
        console.log(artz)

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