import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Nautical Computing
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggle">
          <div class="collapse navbar-collapse" id="navbarToggle">
            <div class="navbar-nav">
              <a class="nav-link" href="/">
                Home
              </a>
              <a class="nav-link" href="#about">
                About
              </a>
              <a class="nav-link" href="#services">
                Services
              </a>
              <a class="nav-link" href="#portfolio">
                Portfolio
              </a>
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
