import React from 'react';
import './static/sustyles.css';
import {Link} from 'react-router-dom';
import image from '../placebet/components/static/image.png';

class NavBar extends React.Component {
  path = () => {
    console.log(this.props.pathname);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div><Link to='/' className="navbar-brand"><img src={image} className="pl-3" alt="newimage" style={{width:"200px",height:"60px"}}/></Link></div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
            Sign Up
            </Link>
          </li>
          <li className="nav-item">
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
