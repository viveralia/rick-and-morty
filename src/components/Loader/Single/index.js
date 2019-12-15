import React from "react";
import ContentLoader from "react-content-loader";

const SingleLoader = () => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <ContentLoader
        height={250}
        width={250}
        speed={2}
        primaryColor="#dfdcdc"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="250" height="250" />
      </ContentLoader>
    </div>
  );
};

export default SingleLoader;
