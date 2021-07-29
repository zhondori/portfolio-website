import React from "react";
import { Container, Row } from "reactstrap";
import "./Home.css";
import ImageComponent from "./ImageComponent";
import HomeText from "./HomeText";

function Home() {
  return (
    <section className="home-sec">
        <Container className="p-3">
          <Row>
              <ImageComponent />
              <HomeText />
          </Row>
        </Container>
    </section>
  );
};

export default Home;