import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row m-2">
          <div className="col-sm">
            <div className="card">
              <h5 className="card-header">
                Tarantula Service for Grasshoppper
              </h5>
              <div className="card-body">
                <p className="card-text">
                  Web crawler service made using Flask, Mongo and React for
                  Grasshoppper.
                </p>
                <p className="card-text">
                  Start by adding a store you prefer and the XPATH, Selectors,
                  etc. afterwards.
                </p>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </div>
              <div className="card-footer text-muted">© Grasshoppper 2019.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
