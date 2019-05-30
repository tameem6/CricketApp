import React, { Component } from 'react'
import ind from './img/flags/ind.jpg'
import rsa from './img/flags/eng.jpg'
import vs from './img/vs.png'
import Time  from "./Time";
import Navbar from '../placebet/components/Navbar';
import {Link} from 'react-router-dom';

class Main extends Component {
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
            <Navbar />
            <div className="bg">
            
            <div className="container text-center mb-3" style={{paddingBottom:'472px'}}>
                <h4 className="display-4 "><strong>Todays Match</strong></h4>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card text-white bg-light mb-3 " style={{borderRadius:"120px 120px 120px 120px"}}>
                            <Link to='/placebet'>
                            <div className="card-body p-0" >
                                <img src={ind} style={height} className="float-left "  alt="hello"/>
                                <img src={vs} style={mid} className="" alt="hello"/>
                                <img src={rsa} style={height} className="float-right" alt="hello"/>


                                <h1 className="text-dark"><Time /></h1>                     
                            </div>
                            </Link>
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