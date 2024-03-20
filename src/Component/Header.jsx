import React from "react";
import { Link } from "react-router-dom";
import TvShows from "./TvShows";
import EditProfile from "./EditProfile";

function Navbar() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#1">
              <img src="logo.png" alt="" width="100px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/">
                    <div className="nav-link">Home</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/TvShows">
                    <div className="nav-link">Tv Shows</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My List
                  </a>
                </li>
              </ul>

              <div className="d-flex align-items-center gap-0 column-gap-3">
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ width: "300px" }}
                  />
                </div>
                <button
                  className="btn btn-outline-secondary border border-dark"
                  type="submit"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                >
                  <i className="bi bi-search icons"></i>
                </button>

                <div className="bg-dark text-white">
                  <i className="bi bi-bell icons"></i>
                </div>
                <div className="bg-dark text-white">
                  <div>KIDS</div>
                </div>
                <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="kids_icon.png" alt="" width="30px" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end mycolormenudrop">
                    <li>
                      <Link to="/editProfile">
                        <div className="dropdown-item">Profile settings</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/AccountProfile">
                        <div className="dropdown-item">Account settings</div>
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
