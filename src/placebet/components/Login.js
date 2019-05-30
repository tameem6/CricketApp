import React, { Component } from 'react'
import Navbar from './Navbar';
class Login extends Component
{
    render()
    {
        return(
            <React.Fragment>
                <Navbar></Navbar>
                <div className="container mt-5">
                    <div className="card card-body">
                        <form>
                            <label>Enter Username</label>
                            <input type="text" className="form-control" />
                            <label>Enter Password</label>
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn btn-success btn-lg mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Login;