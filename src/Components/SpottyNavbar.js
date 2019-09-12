import React from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import SpottyModal from './SpottyModal';

class SpottyNavbar extends React.Component {

    state = {
        searchTerm: '',
        showModal: false
    }

    handleHomeButton = () => {
        this.props.history.push("/home")
    }  

    handleProfileClick = () => {
        this.props.history.push("/profile")
    }
    
    handlePlaylistClick = () => {
        this.props.history.push("/playlists")
    }

    handleRecentTracksClick = () => {
        this.props.history.push("/recentTracks")
    }

    handleTopArtistsClick = () => {
        this.props.history.push("/topArtists")
    }

    handleLogout = () => {
        localStorage.clear()
        this.props.history.push("/login")
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false
        });
    }

    handleSearchInput = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault()
        console.log("search")
        // this.toggleModal()
        this.setState({
            showModal: true
        });
        // this.props.history.push("/home")
        if (this.state.searchTerm!==
        "") this.props.handleSearchSong(this.state.searchTerm)
    }

    render() {
        return(
            <div className="navbar-container">
                <Navbar bg="success" variant="dark" expand="lg">
                    <Nav.Link onClick={ this.handleHomeButton }>SPOOTIFY</Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link onClick={ this.handleProfileClick } href="#home">My Profile</Nav.Link>
                        <Nav.Link onClick={ this.handlePlaylistClick } href="#home">My Playlists</Nav.Link>
                        <Nav.Link onClick={ this.handleRecentTracksClick } href="#home">My Recent Tracks</Nav.Link>
                        <Nav.Link onClick={ this.handleTopArtistsClick } href="#home">My Top Artists</Nav.Link>
                    <SpottyModal searchResults={ this.props.searchResults } showModal={ this.state.showModal } onClose={ this.handleCloseModal }/>
                            {/* <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            <button onClick={ this.handleLogout } style={{"margin-left": "780px"}}>Logout</button>
                            </Nav>
                            {/* <Form onSubmit={this.handleSearchSubmit}  inline>
                            <FormControl type="text" onChange={ this.handleSearchInput } value={ this.state.searchTerm }  placeholder="Search" className="mr-sm-2" />
                            <button>Search</button>
                            </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>


        )
    }
}

export default SpottyNavbar