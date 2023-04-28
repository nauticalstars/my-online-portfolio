import React from "react";
import "./Portfolio.css";
import img1 from "./images/portfolioImage1.jpg";
import img2 from "./images/portfolioImage2.jpg";
import img3 from "./images/portfolioImage3.jpg";
import img4 from "./images/portfolioImage4.jpg";
export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container mt-3">
        <h1 className="text-center">Portfolio</h1>
        <div className="row">
          <div className="col-lg-4 mt-4">
            <div class="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img1} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">Weather App Basic</h4>
                <p className="card-text">
                  Basic weather app created with vanilla HTML, CCS, JavaScript
                </p>
                <div className="text-center">
                  <a href="/" className="btn btn-danger">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img3} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">Weather App Plus</h4>
                <p className="card-text"></p>
                <div className="text-center">
                  <a href="/" className="btn btn-danger">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img4} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">Weather App React</h4>
                <p className="card-text">
                  Weather app with functional search API and animated SVG icons
                  created using React.
                </p>
                <div className="text-center">
                  <a href="/" className="btn btn-danger">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}
