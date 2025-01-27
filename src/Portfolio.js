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
        <h1 className="text-center">My Portfolio</h1>
        <div className="d-flex justify-content-evenly">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div class="card">
                <img className="card-img-top" src={img1} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">Basic HTML landing page</h4>
                  <p className="card-text">
                    Basic landing page created with vanilla HTML, CCS, JavaScript
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/1019/projects/1421835?_gl=1*jlq10s*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
                      href="https://www.shecodes.io/cohorts/1073/projects/1501358?_gl=1*9j7i69*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
                      href="https://www.shecodes.io/cohorts/1122/projects/1581781?_gl=1*9j7i69*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
                      href="https://www.shecodes.io/cohorts/1243/projects/1702280?_gl=1*uzruli*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
                      href="https://www.shecodes.io/cohorts/1276/projects/1710531?_gl=1*uzruli*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
                      href="https://www.shecodes.io/cohorts/1689/projects/2106673?_gl=1*1qrtumc*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
                      href="https://www.shecodes.io/cohorts/1715/projects/2118569?_gl=1*1qrtumc*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
                      href="https://www.shecodes.io/cohorts/1737/projects/2156049?_gl=1*1vt5h0o*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
                  <h4 className="card-title">AI Movie Quote Generator App</h4>
                  <p className="card-text">
                    Created an AI movie quote generator app using JavaScript and
                    API.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.shecodes.io/cohorts/1753/projects/2166049?_gl=1*1vt5h0o*_gcl_au*MTIyMzU5MTU2MC4xNzM3OTk5MzY0"
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
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}
