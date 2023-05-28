import React from "react";
import "./Heroheader.css";

export default function Heroheader() {
  return (
    <section className="bgimage" id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
            <h2 className="hero_title">Hi, I'm Daria</h2>
            <div className="hero_desc">
              Bilingual Apple IT Consultant and Junior Web Developer{" "}
              <div>in Whistler, BC Canada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
