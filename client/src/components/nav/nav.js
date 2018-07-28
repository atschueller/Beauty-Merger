import React from 'react';
import "./Nav.css";
const Nav = () => (
    <nav className="navbar">
      <a href="/" className="nav-logo">Beauty Merger</a>
        <a className="nav-logo" href="/Results">Search</a>
        <a className="nav-logo" href="/ProfileForm"> Sign up</a>
        <a href="/Profile"className="nav-logo"> My Profile</a>
       </nav>
  );
  
  export default Nav;
  