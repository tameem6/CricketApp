import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ENG from "./ENG.png";
import AFGH from "./AFGH.png";
import "./Logstyle.css";
class Log extends Component {
  state = {
    show: false
  };
  constructor() {
    super();
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

 

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col-md-4 ">
            <div className="card blue-grey darken-2">
              <div class="card-content white-text">
                <span class="card-title center"><b>Todays Match</b></span>
                <div className="main-content justify-content-center">
                  <div className="flex1">
                    <div className="left-image">
                      <img src={AFGH} className="img-left" alt="flag left" />
                    </div>
                    <div className="team-name-left">Afgh</div>
                  </div>
                  <div>V/S</div>
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
                  MATCH INFO
                </Button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                          <Modal.Header>
                            <Modal.Title className="center">MATCH PREVIEW</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                           Match Information
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary " onClick={this.handleClose}>
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
