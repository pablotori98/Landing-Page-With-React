import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-primary px-5">
        <div className="container-fluid">
          <a className="navbar-brand ps-5" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse pe-5  justify-content-end textNav" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">More</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;