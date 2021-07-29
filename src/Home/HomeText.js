import React from "react";
import Typed from "react-typed";
import { Col } from "reactstrap";
import "./HomeText.css";

function HomeText() {
  return (
    <>
      <Col md="6">
        <Typed
          className="typed-text"
          strings={[
            "Hi, I am Alisher Usmonov.",
            "I am 14 years old.",
            "I am a Frontend Developer.",
          ]}
          typeSpeed={60}
          backSpeed={40}
          backDelay={3000}
          loop
        />
        <p className="heading-text">
          Welcome to my personal website. I used React JS, Html/CSS and
          ReactStrap to create this website.
        </p>
        <div className="btn-box">
            <a href="https://github.com/Alisher-Usmonov" target="_blank" rel="noreferrer">Github</a>
            <a href="https://t.me/alisherbekUsmonov" target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </Col>
    </>
  );
}
export default HomeText;