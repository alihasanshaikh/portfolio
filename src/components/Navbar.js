import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary navbar-expand-lg shadow-lg fixed-top">
      <div className="container container-fluid">
        <Link className="navbar-brand text-white fw-bold text-uppercase" to="/">
          Mohammed Alihasan
        </Link>
        <button
          className="navbar-toggler text-white bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/skills">
                <button
                  type="button"
                  className="btn btn-link text-white m-0 p-0 mx-1 text-decoration-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Skills
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects">
                <button
                  type="button"
                  className="btn btn-link text-white m-0 p-0 mx-1 text-decoration-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Projects
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/education">
                <button
                  type="button"
                  className="btn btn-link text-white m-0 p-0 mx-1 text-decoration-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Education
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/experience">
                <button
                  type="button"
                  className="btn btn-link text-white m-0 p-0 mx-1 text-decoration-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Experience
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/testimonials">
                <button
                  type="button"
                  className="btn btn-link text-white m-0 p-0 mx-1 text-decoration-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Testimonials
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                <button
                  type="button"
                  className="btn btn-link text-white m-0 p-0 mx-1 text-decoration-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
