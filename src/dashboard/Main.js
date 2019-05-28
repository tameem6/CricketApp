import React, { Component } from 'react'
import ind from './img/flags/ind.jpg'
import rsa from './img/flags/eng.jpg'
import vs from './img/vs.png'

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
            <div className="container text-center mb-3">
                <h className="display-4 "><strong>Todays Match</strong></h>
                <div className="row">
                    <div className="col-lg-12">
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
        )
    }
}

export default Main