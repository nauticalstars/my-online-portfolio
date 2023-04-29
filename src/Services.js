import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h1 className="text-center">Services</h1>
        <div className="row">
          <div className="col-lg-4 mt-4">
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
                <div className="card-text mt-3 text-start">
                  Basic knowledge with the help of SheCodes certifications in:{" "}
                  <div> CSS, HTML, JavaScript React, Bootstrap, JSX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="card servicesText text-center">
              <div className="card-body">
                <span className="servicesIcon">
                  <FontAwesomeIcon
                    icon={icon({ name: "screwdriver-wrench", style: "solid" })}
                  />
                </span>
                <h4 className="card-title mt-3">
                  Apple Certified Macintosh Technician
                </h4>
                <p className="card-text mt-3 text-break text-start">
                  Over 20 years experiences in Apple software and hardware
                  repair, servicing the local Sea to Sky for over 9 years.
                  Providing consulting and helping users transition to new
                  devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4">
            <div className="card servicesText text-center">
              <div className="card-body">
                <span className="servicesIcon">
                  <FontAwesomeIcon
                    icon={icon({ name: "bug", style: "solid" })}
                  />
                </span>
                <h4 className="card-title mt-3">Google Workspace Admin</h4>
                <p className="card-text mt-3 text-break text-start">
                  I have over 10 years' experience in setting up domains, email
                  set up and migration. Nothing says professional like having
                  your email display yourname@yourdomain.com versus having
                  mycompanyname@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className="card servicesText text-center">
              <div className="card-body">
                <span className="servicesIcon">
                  <FontAwesomeIcon
                    icon={icon({ name: "graduation-cap", style: "solid" })}
                  />
                </span>
                <h4 className="card-title mt-3">
                  1 on 1 personalized training
                </h4>
                <p className="card-text mt-3">
                  Training on all kinds of Apple products I have taught classes
                  locally at the Whistler Library and at Whistler Community
                  Services. Experienced with various age groups making
                  technology fun, instead of daunting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
