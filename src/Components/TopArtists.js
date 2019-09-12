import React from 'react';
import TopArtistsAdapter from '../Adapters/TopArtistsAdapter';
import Artistcard from './Artistcard'

class TopArtists extends React.Component {
    
    state = {
        topArtists: []
    }

    componentDidMount() {
        TopArtistsAdapter.getTopArtists()
            .then(res => {
                this.setState({
                    topArtists: res
                })
            })
    }

    render(){

        let eachArtist = this.state.topArtists.map(topArtist => {
            return <Artistcard artist={ topArtist} />
        })

        console.log(this.state)
        return eachArtist
    }

}

export default TopArtists