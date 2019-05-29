import React, { Component } from 'react'
import Navbar from "./Navbar";
class Adminpage extends Component
{
    state={
        admin:[{adminname:"aman"},{adminname:"aman"}]
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
                                <button className="btn btn-danger btn-lg ml-5" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Add Team</button>
                            </div>
                            <div className="col-sm-7">
                                <div className="addteam collapse" id="collapseExample">
                                    <p>vjsjaf shcgnshcgaonah gcmai</p>
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