import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  function styled() {
    document.querySelector(".nav ul").classList.toggle("show");
  }
  
  return (
    <div className="bigComponent">
      <Container className="navbar-container">
        <Row>
          <Col md="12">
            <div className="nav">
              <h3>
                <Link to="/">Alisher<span>Dev</span></Link>
              </h3>
              <FontAwesomeIcon icon={faBars} className="icon" onClick={styled}/>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Navbar;
