import React from 'react'
import { MDBProgress } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';



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

        return(
            <div className="recentTracks" onClick = { this.handleClick }>
                { this.state.clicked === true 
                    ? 
                (<div className="artist-details">
                    <MDBCol style={{"margin-left": "390px"}}>
                        <MDBCard style={{ width: "22rem", background:"black" }}>
                            <MDBCardImage className="img-fluid" src={this.props.artist.images[0].url} style={{ width: "22rem" }} waves />
                            <MDBCardBody>
                            <MDBCardTitle>{this.props.artist.name}</MDBCardTitle>
                            <MDBCardText>
                            <h4>Artist's popularity on Spotify:</h4>
                            <MDBProgress material value={this.props.artist.popularity} className="my-s" />
                            {/* <iframe src={songUri} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
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