import React from 'react';
import { NavLink } from 'react-router-dom';
// import navImage from './images/logo-2.png';


const NavBar = ({ currentUser, logout }) => {
  const links = (
    <ul>
        <li className="nav-item">
        <NavLink className="nav-link" exact to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" data-toggle="modal" data-target="#loginModal" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" data-toggle="modal" data-target="#signupModal" to="/register">Sign Up</NavLink>
        </li>
    </ul>
  );

  const authLinks = (
    <ul>
        <li className="nav-item">
            <NavLink className="nav-link" exact to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <li className="nav-item">
        <span className="nav-link" onClick={logout} style={{ cursor: 'pointer' }}>Logout</span>
        </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
          <strong>THISAPP</strong>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
              { currentUser ? authLinks : links }
          </ul>
      </div>
    </nav>
  )
};

export default NavBar;