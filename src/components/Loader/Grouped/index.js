import React from "react";
import SingleLoader from "../Single";

const GroupedLoader = () => {
  return (
    <div className="container">
      <div className="row">
        <SingleLoader />
        <SingleLoader />
        <SingleLoader />
        <SingleLoader />
      </div>
    </div>
  );
};

export default GroupedLoader;
