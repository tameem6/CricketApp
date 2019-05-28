import React, { Component } from 'react'
import ind from './IMG/ind.png'
import  './IMG/Eventmain.css'


export default class EventsMain extends Component {
    render() {
        return (
            <div>
                <div className="container bg-light mb-3"> 
                    <h1 className="display-4 text-center"><strong>Today Matches</strong></h1>
                    <div className="row">
                        <div className="col-md-6 col-lg-2">
                          <div class="card text-white bg-success mb-3"  style={{borderRadius:'40px 40px 40px 40px'}} >
                               <div className="card card-body ">
                                    <img src={ind}  className=" img-fluid text-dark rightImg " alt=" team a"/>
                                    
                                    <img src={ind}  className=" img-fluid  leftImg" alt=" team a"/> 
                                </div>
                                <h1>ffff</h1>
                            </div>
                        </div>
                    </div>  
                    
                </div>
            </div>
            
        )
    }
}
