import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container mt-4 pt-4">
        <h1 className="text-center">About Me</h1>
        <div className="row mt-4">
          <div className="col-lg-4">
            <img src="/" className="imageAboutPage" alt="headshot" />
          </div>

          <div className="col-lg-8">
            <p>
              {" "}
              I've been living in Whistler, BC now for almost 10 years now. I
              have led a very interesting life so far. I was a member of the
              Canadian National team for fencing, which opened me up to plenty
              of wonderful experiences regarding travel.
            </p>
            <div className="row mt-3">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li>Things I enjoy:</li>
                  <li>
                    Junior Web Developer and Apple Certified Macintosh
                    Technician
                  </li>
                  <li>
                    Personalized trainings, on existing or new Apple products
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li>Domain hosting setup</li>
                  <li>Google Workspace setup and deployment</li>
                  <li>
                    Hardwear and software repairs on all applicable Apple
                    products
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="row mt-3">
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
