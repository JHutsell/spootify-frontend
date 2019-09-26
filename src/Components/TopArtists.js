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

        return (
            <div className="top-artists-container">
                <div className="top-artists-inner">
                    {eachArtist}
                </div>
            </div>
        )
    }

}

export default TopArtists