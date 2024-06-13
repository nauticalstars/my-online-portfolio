import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mt-3 contactContent">
        <h1 className="text-center">Contact Me</h1>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="google-review"></div>
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
              <button type="submit" className="btn btn-outline-danger mt-4">
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
