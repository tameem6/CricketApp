import React, { Component } from 'react'
import ind from './img/flags/ind.jpg'
import rsa from './img/flags/eng.jpg'
import vs from './img/vs.png'
import image from './img/image.png'
import Navbar from '../components/Navbar';
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
            <React.Fragment>
            <Navbar></Navbar>
            <div className="container text-center mb-3" style={{paddingBottom:"20000px"}}>
                <h className="display-4 "><strong>Todays Match</strong></h>
                <div className="row">
                    <div className="col-sm-12">
                        <div class="card text-white bg-light mb-3 " style={{borderRadius:"120px 120px 120px 120px"}}>
                            <div className="card-body p-0" >
                                <img src={ind} style={height} className="float-left "  alt="hello"/>
                                <img src={vs} style={mid} className="" alt="hello"/>
                                <img src={rsa} style={height} className="float-right" alt="hello"/>
                                <h1 className="text-dark">time</h1>                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Main