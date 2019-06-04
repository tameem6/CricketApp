import React from 'react';
import './static/sustyles.css'
import NavBar from './navbar';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      error: ''
    }
  }

  email = (e) =>{
    this.setState({
      email: e.target.value
    })
  }

password = (e) =>{
  this.setState({
    password: e.target.value
  })
}

validate = (e) =>{
  e.preventDefault();
  (this.state.username === 'test@email.com' || this.state.password === '123') ? (
    this.props.history.push('/dashboard2')) : (
      alert('Your UserName and Password is Wrong')
    )

}
  render() {
    return (
      <div>
      <NavBar />
      <div className ="bg">
          <div className="layer">
              <div className="container-fluid col-md-6 col-sm-8 col-12">
                  <br />
                  <h2 className="text-center">Log In</h2>
                  <form onSubmit={this.validate}>
                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.email}/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={this.password} />
                  </div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-default center-block">Log In</button>
                  </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
    )

  }
}

export default Log
