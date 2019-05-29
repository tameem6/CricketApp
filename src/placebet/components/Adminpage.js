import React, { Component } from 'react'
import Navbar from "./Navbar";
class Adminpage extends Component
{
    state={
        admin:[{adminname:"aman"},{adminname:"aman"}],
        value:[{teamname:''}]
    }
    handleInput = (e)=>
    {
        this.setState({value:e.target.value},
            ()=> {
                return console.log(this.state.value);
            })
        
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
                                <button className="btn btn-danger btn-lg my-3" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Add Team</button>
                            </div>
                            <div className="col-sm-7">
                                <div className="addteam collapse" id="collapseExample">
                                    <div className="card card-body">
                                    <form className="form">
                                        <label>Enter Team </label>
                                        <input type="text" onChange={this.handleInput} className="form-control"/>   
                                        <button type="submit" className="btn btn-success mt-3 mx-3">Submit</button>
                                        <button type="button" className="btn btn-danger mt-3 mx-3" data-toggle="modal" data-target=".bd-example-modal-lg">priview</button>  
                                    </form>
                                    <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="card card-body">
                                                    <h1 className="text-center">You choose team </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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