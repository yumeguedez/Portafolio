import { NavLink } from "react-router-dom";

import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Yumerlis Guedez
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Profile Of Yumerlis Guedez
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/job">
                    Experience
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
