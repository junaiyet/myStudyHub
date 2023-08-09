import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/logo.png";
function Header() {
  return (
    <div>
      <div className="top_header"></div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Study Abroad
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Why My StudyHut
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
