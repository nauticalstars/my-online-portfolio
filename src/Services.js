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
                <i className="fas servicesIcon fa-clock"></i>
                <h4 className="card-title mt-3">
                  Website Development and Design
                </h4>
                <div className="card-text mt-3">
                  Basic knowledge with the help of SheCodes certifications in:
                  <ul className="slist">
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>JSX</li>
                  </ul>
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
                <p className="card-text mt-3">
                  I have been fixing and troubleshooting Apple products for over
                  20 years now. I have extremely well developped skills in
                  software toubleshooting and hardware troubleshhoting. I have
                  been serving the Sea To Sky region for over 9 years with
                  repairing existing devices as well as consulting and
                  transitioning to new devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <i className="far servicesIcon fa-check-circle"></i>
                <h4 className="card-title mt-3">Google Workspace Admin</h4>
                <p className="card-text mt-3">
                  Need help getting a domain for your business and setting up a
                  professional email? No problem! I can get you set up and going
                  with Google Workspace. I have over 10 years' experience in
                  setting up domain hosting as well as email set up and
                  migration. Nothing says professional as having your email as
                  yourname@yourdomain.com versus having
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
                <i className="fas servicesIcon fa-search"></i>
                <h4 className="card-title mt-3">
                  1 on 1 personalized training
                </h4>
                <p className="card-text mt-3">
                  I do offer personalized training for a variety of Apple
                  products. Not only do I have multi-year experience, but I have
                  taught classes locally at the Whistler Library and at Whistler
                  Community Services. I have trained a large age range of
                  people, young and gracefully aged. New technology can be very
                  daunting and overwhelming. This is where I can really help you
                  achieve as much as possible with your products.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <i className="fas servicesIcon fa-shield-alt"></i>
                <h4 className="card-title mt-3">DevOps</h4>
                <p className="card-text mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <i className="fas servicesIcon fa-wrench"></i>
                <h4 className="card-title mt-3">QA</h4>
                <p className="card-text mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
