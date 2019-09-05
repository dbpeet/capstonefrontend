import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from './constants.js';
import NavBar from './components/NavBar';
// import Home from './pages/Home/Home';
import Path from './config/routes';
import LoginModal from './components/modals/LoginModal';
import SignupModal from './components/modals/SignupModal';
// import AddPostModal from './components/Modals/AddPostModal';
// import './App.css';

class App extends Component {
 
state = {
  currentUser: localStorage.getItem('uid')
};

setCurrentUser = (userId) => {
  this.setState({ currentUser: userId });
  localStorage.setItem('uid', userId);
};

// setCurrentCity = (cityId) => {
//   this.setState({ currentCity: cityId });
//   localStorage.setItem('cid', cityId);
// };

logout = () => {
  localStorage.removeItem('uid');
  axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
    .then(res => {
      console.log("Successfully logged out!", res);
      this.setState({ currentUser: null });
      this.props.history.push('/login');
    })
    .catch(err => console.log(err));
}; 

render() {
    return (
      <>
        <NavBar currentUser={this.state.currentUser} logout={this.logout} />
        <Path currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        {/* <LoginModal setCurrentUser={this.setCurrentUser} history={this.props.history} />
        <SignupModal history={this.props.history} /> */}
        {/* <AddPostModal /> */}
      </>
    );
  }
}

export default withRouter(App);

