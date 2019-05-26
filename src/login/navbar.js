import React from 'react';
import './static/sustyles.css';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  path = () => {
    console.log(this.props.pathname);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/signup">
            Sign Up
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
            Log In
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
