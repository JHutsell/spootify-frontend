import React, { Component } from 'react';
import Callback from "./Callback";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import RecentTracks from "./RecentTracks";
import Playlists from "./Playlists";
import TopArtists from "./TopArtists";
import Headers from "../Adapters/Headers";
import SpottyNavbar from './SpottyNavbar';
import Auth from "../Adapters/Auth";
import {Route, withRouter, Switch} from "react-router-dom";
import './App.css';

class App extends Component {
  
  state = {
    currentUser: {},
    loggedIn: false,
    searchResults: []
  }

  handleCode = (code) =>{
    Auth.login(code)
      .then(res => {
        console.log(res)
        localStorage.setItem("jwt", res.auth_response_json.jwt);
        localStorage.setItem("currentUser", JSON.stringify(res.auth_response_json));
        this.setState({
          currentUser: res.auth_response_json,
          loggedIn: true
      }, this.props.history.push("/home"))
      })
  }

  handleCallback = ({location}) => {
    return <Callback location={location} handleCode={this.handleCode} />
  }
  
  getSongsFromSpotify = (term) => {
    fetch(`http://localhost:3000/api/v1/getSong/${term}`, {
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

  render() {
    
    return (
      <div className="App">
        <h1>BOOTS_AND_PANTS_AND_BOOTS_AND_PANTS</h1>
        <SpottyNavbar handleSearchSong={ this.handleSearchSong } searchResults={ this.state.searchResults } history={ this.props.history }/>
        <br/>
        { localStorage.length === 0 
        ?
        <Login currentUser={ this.state.currentUser }/>
        :
        null
        }
      <Switch>
        <Route exact path="/callback" component={this.handleCallback} />
        {/* <Route exact path='/callback' render={(routerProps) => <Callback currentUser = {this.state.currentUser} {...routerProps} />} /> */}
        <Route exact path='/home' render={(routerProps) => <Home currentUser = {this.state.currentUser} {...routerProps} />} />
        <Route exact path='/profile' render={(routerProps) => <Profile currentUser = {this.state.currentUser} {...routerProps} />} />
        <Route path="/recentTracks" render={(routerProps)=> <RecentTracks recentTracks={ this.state.recentTracks } {...routerProps} />} />
        <Route path="/playlists" render={(routerProps)=> <Playlists playlists={ this.state.playlists } {...routerProps} />} />
        <Route path="/topArtists" render={(routerProps)=> <TopArtists topArtists={ this.state.topArtists } {...routerProps} />} />
      </Switch>
    </div>
    );
  }
}


export default withRouter(App);
