import React from 'react';
import './static/sustyles.css';

class SignUp extends React.Component {
  render() {
    return (
      <div className ="bg">
          <div className="layer">
              <div className="container-fluid col-lg-6 col-md-6 col-sm-8 col-12">
                  <br />
                  <h2 className="text-center">Sign Up</h2>
                  <form action="#">
                      <div className="form-group">
                              <label htmlFor="fname">First Name:</label>
                              <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="f_name" />
                      </div>
                      <div className="form-group">
                              <label htmlFor="lname">Last Name:</label>
                              <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="l_name" />
                      </div>
                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                  </div>
                  <button type="submit" className="btn btn-default center-block">Submit</button>
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

export default SignUp;
