import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Services() {
  return (
    <section id="services">
      <h1 className="text-center">Services</h1>
      <p className="text-center">
        **Pricing and more details included on booking page**
      </p>
      <div className="container-sm">
        <div className="d-flex">
          <div className="row g-4">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card servicesText text-center">
                <div className="card-body">
                  <span className="servicesIcon">
                    <FontAwesomeIcon
                      icon={icon({
                        name: "screwdriver-wrench",
                        style: "solid",
                      })}
                    />
                  </span>
                  <h4 className="card-title mt-3">
                    Apple Certified Macintosh Technician
                  </h4>
                  <p className="card-text mt-3">
                    Over 20 years of experience in Apple software and hardware
                    repair, servicing the local Sea to Sky for over 10 years.
                    Providing consulting services and helping users transition
                    to new devices.
                  </p>
                  <a
                    href="https://calendar.app.google/STmvB6z4EWUkfWsJ8"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-danger"
                  >
                    Book me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card servicesText text-center">
                <div className="card-body">
                  <span className="servicesIcon">
                    <FontAwesomeIcon
                      icon={icon({ name: "terminal", style: "solid" })}
                    />
                  </span>
                  <h4 className="card-title mt-3">
                    Website Development and Design
                  </h4>
                  <p className="card-text mt-3">
                    Basic knowledge with the help of SheCodes certifications in:{" "}
                    <div>
                      {" "}
                      CSS, HTML, JavaScript React, Bootstrap, JSX, React,
                      Responsive
                    </div>{" "}
                  </p>
                  <a
                    href="https://calendar.app.google/STmvB6z4EWUkfWsJ8"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-danger"
                  >
                    Book me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card servicesText text-center">
                <div className="card-body">
                  <span className="servicesIcon">
                    <FontAwesomeIcon
                      icon={icon({ name: "bug", style: "solid" })}
                    />
                  </span>
                  <h4 className="card-title mt-3">Google Workspace Admin</h4>
                  <p className="card-text">
                    I have over 15 years' experience in setting up domains,
                    email set up and migration. Nothing says professional like
                    having your email display yourname@yourdomain.com versus
                    having mycompanyname@gmail.com.
                  </p>
                  <a
                    href="https://calendar.app.google/STmvB6z4EWUkfWsJ8"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-danger"
                  >
                    Book me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card servicesText text-center">
                <div className="card-body">
                  <span className="servicesIcon">
                    <FontAwesomeIcon
                      icon={icon({ name: "graduation-cap", style: "solid" })}
                    />
                  </span>
                  <h4 className="card-title mt-3 text-center">
                    1 on 1 personalized training
                  </h4>
                  <p className="card-text mt-3">
                    Training on all kinds of Apple products I have taught
                    classes locally at the Whistler Library and at Whistler
                    Community Services. Experienced with various age groups
                    making technology fun, instead of daunting.
                  </p>
                  <a
                    href="https://calendar.app.google/STmvB6z4EWUkfWsJ8"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-danger"
                  >
                    Book me
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
