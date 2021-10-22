import React from "react";

const ReturnBtn = ({ history }) => {
  return (
    <button className="btn return" onClick={() => history.goBack()}>
      <div className="arrow">&#10147;</div> Return
    </button>
  );
};

export default ReturnBtn;
