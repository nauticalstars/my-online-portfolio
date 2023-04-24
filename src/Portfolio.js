import React from "react";
import "./Portfolio.css";
export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container mt-3">
        <h1 className="text-center">Portfolio</h1>
        <div className="row">
          <div className="col-lg-4 mt-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="/src/images/portfolioImage1.jpg"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">Weather App Basic</h4>
                <p className="card-text">
                  Basic weather app created with HTML, CCS, JavaScript
                </p>
                <div className="text-center">
                  <a href="/" className="btn btn-success">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="src/images/portfolioImage2.jpg"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">Quiz App</h4>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="text-center">
                  <a href="/" className="btn btn-success">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="src/images/portfolioImage3.jpg"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">Product Landing Page</h4>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="text-center">
                  <a href="/" className="btn btn-success">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="/src/images/portfolioImage4.jpg"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">Messaging Service</h4>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="text-center">
                  <a href="/" className="btn btn-success">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="src/images/portfolioImage1.jpg"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">Twitter Clone</h4>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="text-center">
                  <a href="/" className="btn btn-success">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4">
            <div className="card portfolioContent" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="/src/images/portfolioImage4.jpg"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">Blog App</h4>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="text-center">
                  <a href="/" className="btn btn-success">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
