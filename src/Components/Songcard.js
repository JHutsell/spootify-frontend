import React from 'react';

class Songcard extends React.Component {
    
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        console.log(this.props.song.track.uri.split(":")[2])
        const songUri = `https://open.spotify.com/embed/track/${this.props.song.track.uri.split(":")[2]}`
        
        return(
            <div className="recentTracks" onClick = { this.handleClick }>
                { this.state.clicked === true 
                    ? 
                (<div className="song-card"><h3>{this.props.song.track.name}</h3>
                <h4>BY: {this.props.song.track.artists[0].name}</h4>
                <br />
                <img src={this.props.song.track.album.images[1].url} />
                <br /> 
                <iframe src={songUri} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>)
                    : 
                <li>{this.props.song.track.name}</li>  
                }
            </div>
        )
    }
}

export default Songcard