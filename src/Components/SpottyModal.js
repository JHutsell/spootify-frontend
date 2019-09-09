import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class SpottyModal extends React.Component {

    render(){
        if(!this.props.showModal){
            return null;
        }

        let results;
        
        console.log(this.props.searchResults)
        if(this.props.searchResults) {
            results = this.props.searchResults.map(track => {
                const songUri = `https://open.spotify.com/embed/track/${track.uri.split(":")[2]}`
                return <div>
                        <p>{track.name}</p>
                        <p>By: { track.artists[0].name}</p>
                        <iframe src={songUri} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
            })
        }

        return(
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Search Results</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {results}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onClose} variant="primary">Close</Button>
                    {/* <Button variant="primary">Save changes</Button> */}
                </Modal.Footer>
            </Modal.Dialog>

        )

    }
}

export default SpottyModal