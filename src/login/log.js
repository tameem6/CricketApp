import React from 'react';
import './static/sustyles.css'

class Log extends React.Component {
  render() {
    return (
      <div className ="bg">
          <div className="layer">
              <div className="container-fluid col-md-6 col-sm-8 col-12">
                  <br />
                  <h2 className="text-center">Log In</h2>
                  <form action="#">
                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                  </div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-default center-block">Log In</button>
                  </div>
                  </form>
              </div>
          </div>
      </div>
    )

  }
}

export default Log
