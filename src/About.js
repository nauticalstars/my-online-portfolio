import React from "react";
import "./About.css";
import aboutimg from "./images/1674082900054.jpeg";

export default function About() {
  return (
    <section className="mt-5">
      <h1 className="text-center" id="about">
        About Me
      </h1>
      <div className="d-flex mt-6 pt-4">
        <div className="row mt-4">
          <div className="col-sm-4">
            <img
              id="headshot"
              src={aboutimg}
              className="img-fluid img-thumbnail rounded-circle mx-auto d-block"
              alt="headshot"
            />
          </div>

          <div className="col-sm-8 p-2 m-2">
            <div className="intro-1 text-wrap word-break: break-word">
              {" "}
              I've been living in Whistler, BC now for almost 10 years now. I
              have led a very interesting life so far. I was a member of the
              Canadian National team for fencing, which opened me up to plenty
              of wonderful experiences regarding travel.
            </div>
            <div>Things I enjoy:</div>
            <div className="row mt-3">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li>Being outdoors / traveling</li>
                  <li>Hiking, biking, snowboarding </li>
                  <li>Spending time with friends, family and my cat</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="row mt-3">
              <div className="text-wrap word-break: break-word">
                {" "}
                I've always been passionate about helping people, whether it's
                teaching someone something new, or fixing computer problems from
                a young age. Some of my past work experiences include: managing
                the Canadian branch of IT for an international company. As well
                as helping small businesses migrate email servers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
