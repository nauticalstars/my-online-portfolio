import React from "react";
import "./About.css";
import aboutimg from "./images/1674082900054.jpeg";

export default function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="d-flex text-center">
        <div className="row-2">
          <div className="col">
            <img
              id="headshot"
              src={aboutimg}
              className="img-fluid rounded-circle"
              alt="headshot"
            />
          </div>
          <section className="about-text">
            <div className="col">
              <div className="intro-1">
                {" "}
                <p>
                  I've been living in Whistler, BC now for almost 10 years now.
                  I have led a very interesting life so far. I was a member of
                  the Canadian National team for fencing, which opened me up to
                  plenty of wonderful experiences regarding travel.
                </p>
              </div>
              <div>Things I enjoy:</div>
              <div className="row mt-3">
                <ul className="list-unstyled">
                  <li>Being outdoors / traveling</li>
                  <li>Hiking, biking, snowboarding </li>
                  <li>Spending time with friends, family and my cat</li>
                </ul>
              </div>
              <div className="row mt-3">
                <p>
                  {" "}
                  I've always been passionate about helping people, whether it's
                  teaching someone something new, or fixing computer problems
                  from a young age. Some of my past work experiences include:
                  managing the Canadian branch of IT for an international
                  company. As well as helping small businesses migrate email
                  servers.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
