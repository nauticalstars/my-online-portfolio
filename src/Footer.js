import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <div className="text-center">
      <footer id="footer">
        <div className="container-fluid">
          <div className="social-icons mt-4">
            <a
              href="https://www.shecodes.io/graduates/63416-daria-mikita"
              target="_blank"
              rel="noopener noreferrer"
              className="link-danger fs-5"
            >
              <FontAwesomeIcon
                icon={icon({ name: "code", style: "solid" })}
                className="socialmedia p-2"
              />
            </a>
            <a
              href="https://github.com/nauticalstars/my-online-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="link-danger fs-5"
            >
              <FontAwesomeIcon
                icon={icon({ name: "github-alt", style: "brands" })}
                className="socialmedia p-2"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/daria-mikita-1146468a/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-danger fs-5"
            >
              <FontAwesomeIcon
                icon={icon({ name: "linkedin", style: "brands" })}
                className="socialmedia p-2"
              />
            </a>
          </div>
          <small>Coded by Daria Mikita</small>
        </div>
      </footer>
    </div>
  );
}
