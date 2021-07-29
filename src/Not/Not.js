import React from "react";
import "./NotFound.css";
import Image from "../Images/error.png";
function Not() {
  return (
    <div className="parent">
      <div className="box">
        <h1>404</h1>
        <h3>Not Found</h3>
        <h4>Eng ommabop Error.</h4>
      </div>
      <div className="imgBox">
        <img src={Image} alt="" />
      </div>
    </div>
  );
}

export default Not;
