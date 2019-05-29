import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ind from './img/flags/ind.jpg'
import rsa from './img/flags/eng.jpg'
import vs from './img/vs.png'
import image from './img/image.png'
import '../placebet/components/static/App.css';

class Main extends Component {
    state={users:[{username:"aman"}]}
    render() {
        const height={
            height:'130px',
            borderRadius:"90px 90px 90px 90px",
          // transform:'rotateY(180deg)'
        }
       const mid={
        height:'70px',
        width:'150px'
       }
        return (
            <div>
            <nav className="navbar bg-dark justify-content-between">
            <div><Link to='/dashboard2' className="navbar-brand"><img src={image} className="pl-3" alt="newimage" style={{width:"250px",height:"60px"}}/></Link></div>
            <div class="nav-item dropdown mt-2 ml-3">
              <button className="btn btn-danger nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.users[0].username}</button>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to='/dashboard2'>Home</Link>
              <Link class="dropdown-item" to='/'>Signout</Link>
              </div>
            </div>
           </nav>
            <div className="bg">
            <div className="layer">
            <div className="container text-center mb-3">
                <h className="display-4 "><strong>Todays Match</strong></h>
                <div className="row">
                    <div className="col-lg-12">
                        <div class="card text-white bg-light mb-3 " style={{borderRadius:"120px 120px 120px 120px"}}>
                            <Link to='/placebet'>
                            <div className="card-body p-0" >
                                <img src={ind} style={height} className="float-left "  alt="hello"/>
                                <img src={vs} style={mid} className="" alt="hello"/>
                                <img src={rsa} style={height} className="float-right" alt="hello"/>
                                <h1 className="text-dark">time</h1>                     
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Main