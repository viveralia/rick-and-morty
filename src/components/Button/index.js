import React from "react";
import { primary } from "./button.module.scss";

const Button = ({ children, onClick }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <button onClick={onClick} className={primary}>
            {children}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
