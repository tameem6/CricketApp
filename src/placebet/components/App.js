import React, { Component } from "react";
import "./static/App.css";
import image from './static/image.png'
import { FragmentsOnCompositeTypes } from "graphql/validation/rules/FragmentsOnCompositeTypes";
class App extends Component {
  state = {
    player:[{id:'1',name:"Virat",profession:"Batsman",age:"30"},{id:'2',name:"Rohit",profession:"Batsman",age:"28"},
    {id:'3',name:"Dhawan",profession:"Batsman",age:"29"},{id:'4',name:"KL Rahul",profession:"Batsman And Wicketkeeper",age:"28"},
    {id:'5',name:"Hardik",profession:"Allrounder",age:"26"},{id:'6',name:"Bumrah",profession:"Bowler",age:"28"},
    {id:'7',name:"Buvneshawar",profession:"Bowler",age:"30"}],
    selectedPlayer: '',value:'',users:[{username:"aman"},{username:"tamim"}],
    Team1:[{teamName:"India"},{teamName:"Pakistan"},{teamName:"Australia"},{teamName:"South Africa"}],
    Team2:[{teamName:"India"},{teamName:"Pakistan"},{teamName:"Australia"},{teamName:"South Africa"}]
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
        <div className="menubar">
        <nav className="navbar bg-dark justify-content-between">
            <div><a href="#" className="navbar-brand"><img src={image} className="pl-3" alt="newimage" style={{width:"200px",height:"60px"}}/></a></div>
            <div className="nav-item dropdown mt-2 ml-3">
              <button className="btn btn-danger nav-link dropdown-toggle" id="navbarDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.users[0].username}</button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Home</a>
              <a className="dropdown-item" href="#">Signout</a>
              </div>
            </div>
          </nav>
        </div>
      <div className="container-fluid" >      
          <div className="mt-2">
              <div className="card card-body">
                <form className="form-group" onSubmit={this.handleSubmit}>
                  <div className="row selTeam">
                    <select className="form-control mx-2">
                      <option className="mt-3" selected>Choose Your Team</option>
                      <option>India</option>
                      <option>South Africa</option>
                    </select>
                    <p className="mt-3 ml-3">Click on row to select Your Super player</p>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                    <h1>{this.state.Team1[0].teamName}</h1>
                      <table className="table table-hover">
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
                      <h1>{this.state.Team1[3].teamName}</h1>
                      <table className="table table-hover">
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
                      <span>Your Super Player Is</span>
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

