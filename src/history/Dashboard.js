import React from "react";
import ENG from "./ENG.png";
import AFGH from "./AFGH.png";
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3 mt-3">
              <div class="card ">
                <div class="card-header center head-title">Todays Match</div>
                <div class="card-body ">
                  <div className="main-content">
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
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    MATCH INFO
                  </a>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title justify-content-center " id="exampleModalLabel">
                            AFGHANISTAN v/s ENGLAND
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">MATCH PREVIEW</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            BET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
