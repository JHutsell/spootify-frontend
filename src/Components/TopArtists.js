import React from 'react';
import TopArtistsAdapter from '../Adapters/TopArtistsAdapter';

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
            return <li>{topArtist.name}</li>
        })

        console.log(this.props)
        return eachArtist
    }
    
}

export default TopArtists