import React from "react";

const PageTitle = ({ children }) => {
  if (children) {
    return (
      <div className="page-title">
        <h1>{children}</h1>
      </div>
    );
  } else {
    return <></>;
  }
};

export default PageTitle;
