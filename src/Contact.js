import React from "react";
import PDF from "./pdf/Daria_Mikita_Resume2.pdf";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mt-3 contactContent">
        <h1 className="text-center">Contact Me/ Resume</h1>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div style={{ height: "calc(100vh - 43px)" }}>
              <div
                id="embedmap-canvas"
                style={{ height: "calc(100vh - 43px)" }}
              >
                <object
                  data={PDF}
                  type="application/pdf"
                  width="100%"
                  style={{ height: "calc(100vh - 43px)" }}
                  aria-label="This object displays an PDF file"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label for="subject">Subject:</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label for="message">Message:</label>
                <textarea
                  className="form-control"
                  rows="10"
                  id="message"
                  name="message"
                  required
                />
              </div>
              <div className="form-group">
                <div data-netlify-recaptcha="true"></div>
              </div>{" "}
              <button type="submit" className="btn btn-danger mt-4">
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
