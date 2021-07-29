import React from "react";
import "./About.css";
import AboutImage from "../Images/about.jpg";
import { Container, Row, Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import C from "../Images/c.png";
import Dart from "../Images/dart.png";
import Flutter from "../Images/flutter.png";
import Python from "../Images/python.png";
import SQL from "../Images/SQL.png";
import ReactImg from "../Images/react.png";
import Go from "../Images/go.png";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="about-sec">
      <Container>
        <Row>
          <Col md="12" sm="12" xs="12" className="heading">
            <h3>About Page</h3>
          </Col>
          <Col md="12" sm="12" xs="12" className="about-me">
            <div className="text-me">
              <h4>
                Hello, I am <span>Alisher Usmonov</span>. I was born on September 25, 2007 in
                Bukhara. I love programming and creating great things. I know
                HTML, CSS, Bootstrap and Sass technologies. Now I am learning
                programming in Javohir Berdiyev's course. My dream is to become
                a Full-Stack programmer.
              </h4>
              <hr />
              <h4>I desire learn C , Dart , Flutter, Python, SQL, React and Go.</h4>
              <div className="lang-imgs">
                <img src={C} alt="C" />
                <img src={Dart} alt="Dart" />
                <img src={Flutter} alt="Flutter" />
                <img src={Python} alt="Python" />
                <img src={SQL} alt="SQL" />
                <img src={ReactImg} alt="React" />
                <img src={Go} alt="Go" />
              </div>
            </div>
            <div className="img-me">
              <LazyLoadImage
                src={AboutImage}
                alt="My Personale Image"
                className="myImage"
                effect="blur"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default About;
