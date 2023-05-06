import React from "react";
import "./Portfolio.css";
import img1 from "./images/portfolioImage1.jpg";
import img3 from "./images/portfolioImage3.jpg";
import img4 from "./images/portfolioImage4.jpg";
export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container mt-3">
        <h1 className="text-center">Portfolio</h1>
        <div className="row">
          <div className="col-md-4 mt-4">
            <div class="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img1} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">Basic HTML landing page</h4>
                <p className="card-text">
                  Basic weather app created with vanilla HTML, CCS, JavaScript
                </p>
                <div className="text-center">
                  <a
                    href="https://www.shecodes.io/workshops/shecodes-basics-03687c6b-7026-49f8-8d87-31ffc725cc29/projects/1421835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                  >
                    View Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img3} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">Weather App Plus</h4>
                <p className="card-text">
                  Weather App with functional search engine created using
                  vanilla JavaScript.
                </p>
                <div className="text-center">
                  <a
                    href="https://www.shecodes.io/workshops/shecodes-plus-ed0608b6-995a-4521-ad20-fc03fea2c0e7/projects/1501358"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                  >
                    View Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img4} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">Weather App React</h4>
                <p className="card-text">
                  Weather app with functional search API and animated SVG icons
                  created using React.
                </p>
                <div className="text-center">
                  <a
                    href="https://www.shecodes.io/workshops/shecodes-react-066c4ea2-32ee-41b3-aace-4592613f1f23/projects/1581781"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                  >
                    View Here
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
