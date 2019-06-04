import React from "react";
import { Link } from "react-router-dom";

const PageNavbar = () => {
  return (
    <nav className="navbar navbar-light">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/spec" className="btn btn-primary">
            Add New
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavbar;
