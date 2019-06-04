import React, { Component } from "react";
import StoreTable from "../components/StoreTable";
import PageNavbar from "../components/PageNavbar";

class Store extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row m-2">
          <div className="col-sm">
            <div className="card">
              <h5 className="card-header">Store List</h5>
              <div className="card-body">
                <PageNavbar />
                <StoreTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
