import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app.css';


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
    <nav className="navbar">
      <h1 className="logo">Art/Work</h1>
      <ul className="navbar-nav ml-auto">
          { currentUser ? authLinks : links }
      </ul>
    </nav>
  )
};

export default NavBar;