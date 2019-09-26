import React from 'react'
import { MDBProgress } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Dropdown, DropdownButton} from 'react-bootstrap';


class Artistcard extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        
        let genres = this.props.artist.genres.map(genre => {
            return <p style={{"font-size": "15px"}}>{genre}</p>
        })

        return(
            <div onClick = { this.handleClick }>
                { this.state.clicked === true 
                    ? 
                (<div className="artist-details">
                    <MDBCol style={{"margin-left": "350px"}}>
                        <MDBCard style={{ width: "22rem", background:"black" }}>
                            <MDBCardImage className="img-fluid" src={this.props.artist.images[0].url} style={{ width: "22rem" }} waves />
                            <MDBCardBody>
                            <MDBCardTitle>{this.props.artist.name}</MDBCardTitle>
                            <MDBCardText>
                                <h4>Genres: {genres}</h4>
                                <h4>Followers: {this.props.artist.followers.total}</h4>
                                <h4>Artist's popularity on Spotify:</h4>
                                <MDBProgress material value={this.props.artist.popularity} className="my-s" />
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    </div>
                )
                    : 
                <li>{this.props.artist.name}</li>  
                }
            </div>

        )

    }
}

export default Artistcard