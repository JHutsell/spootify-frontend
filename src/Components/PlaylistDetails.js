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
            <div onClick={ this.handleClick }>
                { this.state.clicked === true
                    ?
                (<div><h3>{ this.props.playlist.name }</h3>
                    <br />
                    <img src={this.props.playlist.images[0].url} />
                    <br />
                    <iframe src={playlistUri} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>)
                    :
                <p>{ this.props.playlist.name }</p>
                }
            </div>
            )
    }
}

export default PlaylistDetails



