import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h2>Bezaleel</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <Link className="nav-link text-white h5" to="/reducer">
                useReducer
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white h5" href="/effect">
                useEffect
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white h5" href="/state">
                useState
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-secondary">Sign Up</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
