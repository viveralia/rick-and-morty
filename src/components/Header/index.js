import React from "react";
import constants from "../../constants";
import { heading, subheading } from "./header.module.scss";

const Header = () => {
  // Variables inside constants folder
  const { title, subtitle } = constants;

  return (
    <header className="container-fluid mt-4 mb-5">
      <div className="row">
        <div className="col-12">
          <h1 className={heading}>{title}</h1>
          <h2 className={subheading}>{subtitle}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
