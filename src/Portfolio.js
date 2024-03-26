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
        <div className="d-flex justify-content-evenly">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div class="card">
                <img className="card-img-top" src={img1} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">Basic HTML landing page</h4>
                  <p className="card-text">
                    Basic weather app created with vanilla HTML, CCS, JavaScript
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/shecodes-basics-03687c6b-7026-49f8-8d87-31ffc725cc29/projects/1421835"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      View Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card portfolioContent">
                <img className="card-img-top" src={img3} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">Weather App Plus</h4>
                  <p className="card-text">
                    Weather App with functional search engine created using
                    vanilla JavaScript.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/shecodes-plus-ed0608b6-995a-4521-ad20-fc03fea2c0e7/projects/1501358"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      View Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card portfolioContent">
                <img className="card-img-top" src={img4} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">Weather App React</h4>
                  <p className="card-text">
                    Weather app with functional search API and animated SVG
                    icons created using React.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/shecodes-react-066c4ea2-32ee-41b3-aace-4592613f1f23/projects/1581781"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      View Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card portfolioContent">
                <img className="card-img-top" src={img2} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">Responsive Project</h4>
                  <p className="card-text">
                    This website was created to be responsive and displays
                    differently on different screen sizes.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/shecodes-responsive-a48bb2f0-f79c-46fa-91e5-4848645747e1/projects/1702280"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      View Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card portfolioContent">
                <img className="card-img-top" src={img3} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">Dark mode landing page project</h4>
                  <p className="card-text">
                    Small landing page with dark mode button and simple
                    sections.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/shecodes-basics-add-on-b501ddf9-3dba-4ed8-8378-3397b2a9f563/projects/1710531"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      View Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card portfolioContent">
                <img className="card-img-top" src={img4} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">World Clock Project</h4>
                  <p className="card-text">
                    World Clock App using API and custom Google font with simple
                    background.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/shecodes-plus-add-on-de285a30-0fd2-48db-8994-44132c84cd5a/projects/2106673"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      View Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card portfolioContent">
                <img className="card-img-top" src={img2} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">Responsive travel project page</h4>
                  <p className="card-text">
                    Responsive landing page for where I live. Simple and
                    elegant.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/shecodes-responsive-add-on-c1b83d93-749c-497d-86b8-f632de896b28/projects/2118569"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      View Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card portfolioContent">
                <img className="card-img-top" src={img1} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">
                    Dictionary project made in React
                  </h4>
                  <p className="card-text">
                    Dictionary and picture API's used simultaneously, to create
                    a simple dictionary search app.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/react-add-on-e0fc31aa-f3cb-4584-a77f-a4ef63f0d3cd/projects/2156049"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      View Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card portfolioContent">
                <img className="card-img-top" src={img3} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">AI App</h4>
                  <p className="card-text">
                    Work in progress, check back later!
                  </p>
                  <div className="text-center">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      Coming soon!
                    </a>
                  </div>
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
