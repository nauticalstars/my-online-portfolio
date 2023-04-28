import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h1 className="text-center">Services</h1>
        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <p className="fas servicesIcon fa-clock"></p>
                <h4 className="card-title mt-3">
                  Website Development and Design
                </h4>
                <div className="card-text mt-3">
                  Basic knowledge with the help of SheCodes certifications in:{" "}
                  <div> CSS, HTML, JavaScript React, Bootstrap, JSX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <i className="fas servicesIcon fa-layer-group"></i>
                <h4 className="card-title mt-3">
                  Apple Certified Macintosh Technician
                </h4>
                <p className="card-text mt-3 text-break fs-20">
                  Over 20 years experiences in Apple software and hardware
                  repair, servicing the local Sea to Sky for over 9 years.
                  Providing consulting and helping users transition to new
                  devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <i className="far servicesIcon fa-check-circle"></i>
                <h4 className="card-title mt-3">Google Workspace Admin</h4>
                <p className="card-text mt-3 text-break">
                  Professional email setup on Google Workspace. I have over 10
                  years' experience in setting up domains and email set up and
                  migration. Nothing says professional like having your email
                  display yourname@yourdomain.com versus having
                  mycompanynameisreallylong@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <p className="fas servicesIcon fa-search"></p>
                <h4 className="card-title mt-3">
                  1 on 1 personalized training
                </h4>
                <p className="card-text mt-3">
                  Training on all kinds of Apple products I have taught classes
                  locally at the Whistler Library and at Whistler Community
                  Services. Experienced with various age groups Making
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
