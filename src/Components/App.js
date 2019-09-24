import React, { Component } from 'react';
import Callback from "./Callback";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import RecentTracks from "./RecentTracks";
import Playlists from "./Playlists";
import TopArtists from "./TopArtists";
import RecommendedTracks from './RecommendedTracks';
import Headers from "../Adapters/Headers";
import SpottyNavbar from './SpottyNavbar';
import RecentTracksAdapter from '../Adapters/RecentTracksAdapter';
import Auth from "../Adapters/Auth";
import {Route, withRouter, Switch} from "react-router-dom";
import {Form, FormControl} from 'react-bootstrap';
import './App.css';
import SpottyModal from './SpottyModal';

class App extends Component {
  
  state = {
    currentUser: {},
    loggedIn: false,
    searchResults: [],
    searchTerm: '',
    showModal: false
  }

  handleCode = (code) =>{
    Auth.login(code)
      .then(res => {
        console.log(res)
        localStorage.setItem("jwt", res.auth_response_json.jwt);
        localStorage.setItem("currentUser", JSON.stringify(res.auth_response_json));
        localStorage.setItem("loggedIn", true)
        this.setState({
          currentUser: res.auth_response_json,
          loggedIn: "true"
      }, this.props.history.push("/home"))
      window.location.reload(false)
      })
  }

  handleCallback = ({location}) => {
    return <Callback location={location} handleCode={this.handleCode} />
  }
  
  getSongsFromSpotify = (term) => {
    fetch(`https://spootify.herokuapp.com/api/v1/getSong/${term}`, {
      method: "POST",
      headers: Headers()
    }).then(resp => resp.json())
      .then(data => {
        this.setState({
          searchResults: data.tracks.items
        })
      })
  }

  handleSearchSong = (term) => {
    this.getSongsFromSpotify(term)
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
    "") this.handleSearchSong(this.state.searchTerm)
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

  render() {
    
    return (
      <div className="App">

        {localStorage.loggedIn? 
        <div>
        <div className="boots-and-pants"><h1><marquee>BOOTS_AND_PANTS_AND_BOOTS_AND_PANTS</marquee></h1></div>
        <SpottyNavbar handleSearchSong={ this.handleSearchSong } searchResults={ this.state.searchResults } history={ this.props.history }/>
        <Form onSubmit={this.handleSearchSubmit} className="search-bar"  inline>
          <h4 style={{"padding-right": "7px"}}>Search for a song:   </h4> 
          <br />
          <FormControl type="text" onChange={ this.handleSearchInput } value={ this.state.searchTerm }  placeholder="Search" className="mr-sm-2" />
          <button>Search</button>
        </Form>
        </div>
      :
      null
      }
        <br/>
        { localStorage.length === 0 
        ?
        <Login currentUser={ this.state.currentUser }/>
        :
        null
        }
        
        <SpottyModal searchResults={ this.state.searchResults } showModal={ this.state.showModal } onClose={ this.handleCloseModal }/>

      <Switch>
        <Route exact path="/callback" component={this.handleCallback} />
        {/* <Route exact path='/callback' render={(routerProps) => <Callback currentUser = {this.state.currentUser} {...routerProps} />} /> */}
        <Route exact path='/home' render={(routerProps) => <Home currentUser = {this.state.currentUser} {...routerProps} />} />
        <Route exact path='/profile' render={(routerProps) => <Profile currentUser = {this.state.currentUser} {...routerProps} />} />
        <Route path="/recentTracks" render={(routerProps)=> <RecentTracks recentTracks={ this.state.recentTracks } {...routerProps} />} />
        <Route path="/playlists" render={(routerProps)=> <Playlists playlists={ this.state.playlists } {...routerProps} />} />
        <Route path="/topArtists" render={(routerProps)=> <TopArtists topArtists={ this.state.topArtists } {...routerProps} />} />
      </Switch>
      
      <RecommendedTracks loggedIn={this.state.loggedIn} reccoTracks={ this.state.reccoTracks }/>
    </div>
    );
  }
}


export default App;
