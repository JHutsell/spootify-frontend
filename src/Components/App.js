import React, { Component } from 'react';
import Callback from "./Callback"
import Profile from "./Profile"
import Auth from "../Adapters/Auth"
import {Route, withRouter} from "react-router-dom"
import './App.css';

class App extends Component {
  
  state = {
    currentUser:{}
  }

  renderProfile = () =>{
    return <Profile currentUser = {this.state.currentUser}/>
  } 

  handleCode = (code) =>{
    Auth.login(code)
      .then(res=>{
        const currentUser = res
        this.setState({currentUser},this.props.history.push("/profile"))
      })
  }

  handleCallback = ({location}) =>{
    return <Callback location={location} handleCode={this.handleCode} />
  }

  render() {
    
    return (
      <div className="App">
        <h1>SPOTIFY API TUTORIAL</h1>
        <br/>
        { !this.state.currentUser.id ? <Login/> : null}
        <Route exact path="/callback" component={this.handleCallback} />
        <Route exact path="/profile" component={this.renderProfile} />
      </div>
    );
  }
}

const Login = () => (
  <a className="login-a" href="http://localhost:3000/api/v1/auth">
    LOGIN
  </a>
)

export default withRouter(App);
