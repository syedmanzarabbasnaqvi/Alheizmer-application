import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Alheizmer Detection Portal</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Detection Portal</Link>
            </li>
        
         
          </ul>
          <form className="d-flex justify-content-center">
         
           <Link className="btn btn-outline-warning mx-2" to="/login">Login</Link>
            <Link  className="btn btn-outline-warning mx-2"to="/signup">Sign up</Link>

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
