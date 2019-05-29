import React, { Component } from 'react'
import Navbar from "./Navbar";
class Adminpage extends Component
{
    state={
        admin:[{adminname:"aman"},{adminname:"aman"}],
        value:''
    }
    handleInput = (e)=>
    {
        this.setState({value:e.target.value},
            ()=> {
                return console.log(this.state.value);
            })
        
    }
    submithandle = (event)=>
    {
        event.preventDefault();
    }
    render()
    {
        return(
            <React.Fragment>
                <Navbar user={this.state.admin[0].adminname}></Navbar>
                <div className="container-fluid">
                    <div className="card card-body mt-3">
                        <div className="row">
                            <div className="col-sm-5" >
                                <button className="btn btn-danger btn-block btn-lg my-3" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Add Team</button>
                            </div>
                            <div className="col-sm-7">
                                <div className="addteam collapse" id="collapseExample">
                                    <div className="card card-body">
                                    <form className="form">
                                        <label>Enter Team </label>
                                        <input type="text" onChange={this.handleInput} className="form-control"/>   
                                        <button type="submit" onClick={this.submithandle}  className="btn btn-success mt-3">Submit</button>
                                    </form>
                                    {/* <div className="card mt-3">
                                       <p className="mt-3 ml-3">You Added team {this.state.value}</p>
                                    </div> */}
                                    </div>
                                </div>
                            </div>                                  
                        </div>
                    </div>
                    <div className="card card-body mt-3">
                        <div className="row">
                            <div className="col-sm-5" >
                                <button className="btn btn-danger btn-block btn-lg my-3" data-toggle="collapse" href="#fixcollapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Add Fixture</button>
                            </div>
                            <div className="col-sm-7">
                                <div className="addteam collapse" id="fixcollapseExample">
                                    <div className="card card-body">
                                    <form className="form">
                                        <label className="mt-3">Enter First Team </label>
                                        <input type="text" onChange={this.handleInput} className="form-control"/>
                                        <label className="mt-3">Enter Second Team </label>
                                        <input type="text" onChange={this.handleInput} className="form-control"/>
                                        <label className="mt-3">Enter Bet Money </label>
                                        <input type="text" onChange={this.handleInput} className="form-control"/>   
                                        <button type="submit" onClick={this.submithandle}  className="btn btn-success mt-3">Submit</button>
                                    </form>
                                    {/* <div className="card mt-3">
                                       <p className="mt-3 ml-3">You Added team {this.state.value}</p>
                                    </div> */}
                                    </div>
                                </div>
                            </div>                                  
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Adminpage;