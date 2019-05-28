import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import ENG from "./ENG.png";
import AFGH from "./AFGH.png";
import "./Logstyle.css";
class Log extends Component {
  state = {
    show: false,
    player:[]
  };
  constructor() {
    super();
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount(){
    axios.get('https://cricapi.com/api/playerStats?apikey=me9l5ZLGRMeBZv55zZU44gAQgwN2&pid=35320')
            .then(res => {
              console.log(res);
                this.setState({
                    player: res.data
                })
            })
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { player } = this.state;
    const postList = player.length ? (
      player.map(player => {
          return (
              <div className="post card" key={player.fullname}>
                 
                  <div className="card-content">
                     
                      <span className="card-title red-text ">
                         <b> {player.battingStyle}</b>
                      </span>
                      
                      <p>{player.profile}</p>
                  </div>
              </div>
          )
      })
  ) : ( <div className="center">No Players Yet</div> )

    return (
      <div className="container">
        <div className="row">
          <div className=" col-md-4 ">
            <div className="card blue-grey darken-2">
              <div class="card-content white-text">
                <span class="card-title center"><b>Match Highlights</b></span>
                <div className="main-content">
                  <div className="flex1">
                    <div className="left-image">
                      <img src={AFGH} className="img-left" alt="flag left" />
                    </div>
                    <div className="team-name-left">Afgh</div>
                  </div>
                  <div className="flex2">
                    <div className="team-name-right">ENG</div>
                    <div className="right-image">
                      <img src={ENG} className="img-right" alt="flag right" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-action act">
                <Button onClick={this.handleShow}>
                  STATS
                </Button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                          <Modal.Header>
                            <Modal.Title>Winning Team Name</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                           {postList}
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Log;
