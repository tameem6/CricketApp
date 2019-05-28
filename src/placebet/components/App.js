import React, { Component } from "react";
import "./static/App.css";
import image from './static/image.svg'
import { FragmentsOnCompositeTypes } from "graphql/validation/rules/FragmentsOnCompositeTypes";
class App extends Component {
  state = {
    player:[{id:'1',name:"Virat",profession:"Batsman",age:"30"},{id:'2',name:"Rohit",profession:"Batsman",age:"28"},
    {id:'3',name:"Dhawan",profession:"Batsman",age:"29"},{id:'4',name:"KL Rahul",profession:"Batsman And Wicketkeeper",age:"28"},
    {id:'5',name:"Hardik",profession:"Allrounder",age:"26"},{id:'6',name:"Bumrah",profession:"Bowler",age:"28"},
    {id:'7',name:"Buvneshawar",profession:"Bowler",age:"30"}],
    selectedPlayer: '',value:'',users:[{username:"aman"},{username:"tamim"}]
  }
handleClick  = (index)=>
{
  console.log("Enter on click")
  const x = this.state.player[index].name;
  console.log(x);
  this.setState({selectedPlayer:x});

}
handleSubmit = (event)=>
{ 
  console.log("enter");
  event.preventDefault();
}
  render() 
  {
    return (
      <React.Fragment>
        <nav className="navbar bg-dark justify-content-between ">
            <a><img src={'image'}  alt="image" /></a>
            <div class="nav-item dropdown">
              <button className="btn btn-danger nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.users[0].username}</button>
              <div class="dropdown-menu mr-5" aria-labelledby="navbarDropdown">
              <a class="dropdown-item mr-5" href="#">Home</a>
              <a class="dropdown-item" href="#">Singout</a>
              </div>
            </div>
          </nav>
      <div className="container-fluid">      
          <div className="mt-2">
              <div className="card card-body">
                <form className="form-group" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                    <h1>Team-1</h1>
                      <table className="table">
                          <thead>
                            <tr>
                              <th>S.N.</th>
                              <th>Player Name</th>
                              <th>Profession</th>
                            </tr>
                          </thead>
                          <tbody>
                          {this.state.player.map((emp,index)=>
                            <tr onClick={()=>this.handleClick(index)} title="click" key={index}>
                              <td>{emp.id}</td>
                              <td>{emp.name}</td>
                              <td>{emp.profession}</td>
                            </tr>
                          )}
                          </tbody>
                      </table>
                    </div>
                    <div className="col-sm-6">
                      <h1>Team-2</h1>
                      <table className="table">
                      <thead>
                            <tr>
                              <th>S.N.</th>
                              <th>Player Name</th>
                              <th>Profession</th>
                            </tr>
                          </thead>
                          <tbody>
                          {this.state.player.map((emp,index)=>
                            <tr onClick={()=>this.handleClick(index)} title="click" key={index}>
                              <td>{emp.id}</td>
                              <td>{emp.name}</td>
                              <td>{emp.profession}</td>
                            </tr>
                          )}
                          </tbody>
                      </table>
                    </div>  
                    <div className="container-fluid ">
                    <label className="col-sm-6" >
                      <span>Choose Your Super Player :</span>
                    </label>
                    <label className="col-sm-6" >
                      <span className="text-center btn-danger btn-block" style={{color:"white"}}>{this.state.selectedPlayer}</span>
                    </label>
                    </div>
                    <div className="container-fluid">
                    <button type="submit" value="submit"className="btn btn-success btn-lg btn-block mt-3">Submit</button>
                  </div>
                    </div>
                </form>
              </div>
          </div>
      </div>
      </React.Fragment>
    );
  }
}
export default App;

