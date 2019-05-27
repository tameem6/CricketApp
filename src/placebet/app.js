import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    player:[{id:'1',name:"Virat",profession:"Batsman",age:"30"},{id:'2',name:"Rohit",profession:"Batsman",age:"28"},
    {id:'3',name:"Dhawan",profession:"Batsman",age:"29"},{id:'4',name:"KL Rahul",profession:"Batsman And Wicketkeeper",age:"28"},
    {id:'5',name:"Hardik",profession:"Allrounder",age:"26"},{id:'6',name:"Bumrah",profession:"Bowler",age:"28"},
    {id:'7',name:"Buvneshawar",profession:"Bowler",age:"30"}],
    selectedPlayer: '',value:''
  }
handleClick  = (index)=>
{
  console.log("Enter on click")
  const x = this.state.player[index].name;
  console.log(x);
  this.setState({selectedPlayer:x});

}
handleChange = (e)=>
{

  this.setState({
    value:e.target.value
  },()=>
  {
    console.log(this.state.value)
  });
}
handleSubmit = (event)=>
{
  
  console.log("enter");
  event.preventDefault();
}
  render() 
  {
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-6 text-center mt-5">
              <button className="btn btn-warning btn-lg btn-block" data-toggle="collapse" data-target="#edit" type="button" >
              Edit Your Bet
              </button>
              </div>
              <div className="col-6 text-center mt-5">
              <button className="btn btn-warning btn-lg btn-block" type="button" data-toggle="history" data-target="#history" >
                History
              </button>
              </div>
          </div>
          <div className="edit">
            <div className="collapse mt-3" id="edit">
              <div className="card card-body">
                <form className="form-group" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                    <h1>Team-1</h1>
                      <table className="table">
                          <thead>
                            <tr>
                              <th>id</th>
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
                              <th>id</th>
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
                    <div className="container-fluid con-1">
                    <label>
                      <span>Choose Your Super Player :</span>
                      <span className="text-center btn-danger btn-block" style={{color:"white"}}>{this.state.selectedPlayer}</span>
                    </label>
                    </div>
                    <div className="container-fluid">
                    <label className="lable">Enter Updated Bet</label>
                    <input type="number" value={this.state.value} onChange={this.handleChange} className="form-control" />
                    <span>Your Updated Bet is:</span>
                    <span>{this.state.value}</span>
                    <button type="submit" value="submit"className="btn btn-success btn-lg btn-block mt-3">Submit</button>
                  </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="history">

          </div>
          <div className="row">
              <div className="col-sm-6 mt-3">
                <div className="card card-body">
                  <h2 className="text-center text-danger">Instruction !!</h2>
                </div>
              </div>
              <div className="col-sm-6 mt-3 ">
                <div className="card card-body">
                <h2 className="text-center text-danger">Instruction !!</h2>
                </div>
              </div>
          </div>
      </div>
    );
  }
}
export default App;

