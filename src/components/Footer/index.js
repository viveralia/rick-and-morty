import React from "react";
import { copyright, icon } from "./footer.module.scss";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-fluid mb-3">
      <div className="row">
        <div className="col-12 text-center">
          <small className={copyright}>
            Built with the{" "}
            <a
              href="https://rickandmortyapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick & Morty API
            </a>{" "}
            and{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact className={icon} />
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
