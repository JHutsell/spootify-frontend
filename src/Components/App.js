import React, { Component } from 'react';
import Callback from "./Callback"
import Profile from "./Profile"
import Login from "./Login"
import RecentTracks from "./RecentTracks"
import Playlists from "./Playlists"
import TopArtists from "./TopArtists"
import SpottyNavbar from './SpottyNavbar';
import Auth from "../Adapters/Auth"
import RecentTracksAdapter from "../Adapters/RecentTracksAdapter";
import {Route, withRouter, Switch} from "react-router-dom"
import './App.css';

class App extends Component {
  
  state = {
    currentUser: {},
    //loggedIn: token ? true : false,
    nowPlaying: { name: 'Not Checked', albumArt: ''},
    recentTracks: [],
    topArtists: [],
    playlists: [],
    loggedIn: false
  }


  // componentWillMount(){
  //   if (localStorage.getItem('jwt')) {
  //     this.props.currentUser()
  //   }
  // }

  // componentDidMount() {
  //   const code = location.search.split("?code=")[1];
  //   this.handleCode(code)
  // }

  handleCode = (code) =>{
    Auth.login(code)
      .then(res => {
        // const currentUser = res
        console.log(res)
        localStorage.setItem("jwt", res.auth_response_json.jwt);
        localStorage.setItem("currentUser", JSON.stringify(res.auth_response_json));
        localStorage.setItem("recentTracks", JSON.stringify(res.recent_tracks));
        localStorage.setItem("playlists", JSON.stringify(res.playlists));
        localStorage.setItem("topArtists", JSON.stringify(res.top_artists));
        this.setState({currentUser: res.auth_response_json,
        recentTracks: res.recent_tracks,
        topArtists: res.top_artists,
        playlists: res.playlists,
        loggedIn: true
      }, this.props.history.push("/profile"))
      })
  }

  // handleTracks = () => {
  //   RecentTracksAdapter.recent_tracks()
  //     .then(res=>{
  //       // debugger
  //       console.log(res)
  //       const recentTracks = res
  //       this.setState({recentTracks: res})//this.props.history.push("/profile"))
  //     })
  // }



  handleCallback = ({location}) =>{
    return <Callback location={location} handleCode={this.handleCode} />
  }

  render() {
    
    return (
      <div className="App">
        <h1>BOOTS_AND_PANTS_AND_BOOTS_AND_PANTS</h1>
        <SpottyNavbar history={ this.props.history }/>
        <br/>
        { localStorage.length === 0 
        ?
        <Login currentUser={ this.state.currentUser }/>
        :
        null
        }
        <div>
        Now Playing: { this.state.nowPlaying.name }
      </div>
      <div>
        <img alt='' src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
    </div>
      <Switch>
        <Route exact path="/callback" component={this.handleCallback} />
        {/* <Route exact path='/callback' render={(routerProps) => <Callback currentUser = {this.state.currentUser} {...routerProps} />} /> */}
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

{/* <Route exact path="/profile" component={this.renderProfile} /> */}