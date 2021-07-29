import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Col } from "reactstrap";
import Me from "../Images/me.jpg";

function ImageComponent() {
  return (
    <>
      <Col md="6">
        <div className="img-box">
          <LazyLoadImage
            src={Me}
            alt="My Personale Image"
            className="img-fluid me"
            effect="blur"
          />
        </div>
      </Col>
    </>
  );
}

export default ImageComponent;