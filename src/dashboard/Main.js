import React, { Component } from 'react'

import vs from './img/vs.png'
import Time  from "./Time";
import Navbar from '../placebet/components/Navbar';
import {Link} from 'react-router-dom';



class Main extends Component {
    state={
        matches:[]
    }
    componentDidMount() {
        const  url="192.168.0.107:8080/getFixture"
          fetch(url)
            .then(response => response.json())
            .then(data =>this.setState({matches:data.value}))
            .catch(error=>console.log("error in loading data->"+error));
        }
    render() {
           
        const height={
            height:'140px',
            borderRadius:"90px 90px 90px 90px",
          // transform:'rotateY(180deg)'
        }
       const mid={
        height:'70px',
        width:'150px'
       }
      
        const matches=this.state.matches;
        const result= matches.length ?(matches.map(match =>{

            return(
                <div className="col-lg-12" key={match.id}>
                        <div className="card text-white bg-light mb-2 " style={{borderRadius:"120px 120px 120px 120px"}}>
                            <Link to='/placebet'>
                            <div className="card-body p-0" >
                           
                                <img src={require( "./img/flags/"+match.teama+".jpg")} style={height} className="float-left" 
                                data-toggle="tooltip" title={match.teama} alt={match.teama}/>
                               
                                <img src={vs} style={mid} className="" alt="v/s"/>
                                
                                <img src={require( "./img/flags/"+match.teamb+".jpg")}  style={height} className="float-right"
                                 data-toggle="tooltip" title={match.teamb} alt={match.teama}/>
                            

                                <h1 className="text-dark"><strong><Time time={match.gametime}/></strong></h1>                     
                            </div>
                            </Link>
                        </div>
                    </div>
            )
    })):(<h1>loading....</h1>)
      
       
      
     

        return (
            <div>
            <Navbar />
            <div className="bg">
            <div className="container text-center mb-3" style={{paddingBottom:'40px'}}>
                    <h4 className="display-4 "><strong>Todays Match</strong></h4>
                    <div className="row">
                       {
                           result
                       }
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Main