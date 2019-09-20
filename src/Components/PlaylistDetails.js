import React from 'react';

class PlaylistDetails extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        console.log(this.props.playlist)
        const playlistUri = `https://open.spotify.com/embed/playlist/${this.props.playlist.uri.split(":")[2]}`
        return( 
            <div onClick={ this.handleClick } className="playlist-detail">
                { this.state.clicked === true
                    ?
                (<div><h3>{ this.props.playlist.name }</h3>
                    <br />
                    { (this.props.playlist.images.length > 0) ? 
                    <img src={this.props.playlist.images[0].url} />
                    :
                    null
                    }
                    <br />
                    <iframe src={playlistUri} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>)
                    :
                <li>{ this.props.playlist.name }</li>
                }
            </div>
            )
    }
}

export default PlaylistDetails



