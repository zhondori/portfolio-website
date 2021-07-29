import React from "react";
import Cards from "./Cards";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
import ImageOne from "../Images/img1.png";
import ImageTwo from "../Images/img2.png";
import ImageThree from "../Images/img3.png";
import ImageFour from "../Images/img4.png";
import ImageFive from "../Images/img5.png";
import ImageSix from "../Images/img6.png";
import ImageSeven from "../Images/img7.png";
import ImageEight from "../Images/img8.png";
import Footer from "../Footer/Footer";

const Portfolio = () => {
  const imgObject = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageSeven,
    ImageEight,
  ];
  const PortfolioObject = [
    {
      id: 1,
      alt: "Project Image",
      name: "Search Fast",
      desc: "With this project, you can use 4 search engines while standing on one site.",
      githubSource: "https://github.com/Alisher-Usmonov/search",
      link: "https://searchfast.netlify.app",
    },
    {
      id: 2,
      alt: "Project Image",
      name: "Rubix",
      desc: "A template designed to test my knowledge.",
      githubSource: "https://github.com/Alisher-Usmonov/rubix-template",
      link: "https://rubix-site.netlify.app",
    },
    {
      id: 3,
      alt: "Project Image",
      name: "See your battery percent",
      desc: "See your battery percent with beautiful design.",
      githubSource: "https://github.com/Alisher-Usmonov/SeeBatteryPercent-page",
      link: "https://seebattery.netlify.app",
    },
    {
      id: 4,
      alt: "Project Image",
      name: "Devicer",
      desc: "Online Shop example website.",
      githubSource: "https://github.com/Alisher-Usmonov/Devicer",
      link: "https://devicer.netlify.app",
    },
    {
      id: 5,
      alt: "Project Image",
      name: "Lotin - Krill translator",
      desc: "With this project, you can translate words latin to cyrillic or cyrillic to latin.",
      githubSource: "https://github.com/Alisher-Usmonov/lotin-krill",
      link: "https://latin-krill.netlify.app",
    },
    {
      id: 6,
      alt: "Project Image",
      name: "Landkit",
      desc: "A template designed to test my knowledge.",
      githubSource: "https://github.com/Alisher-Usmonov/Landkit",
      link: "https://landkit-pro.netlify.app",
    },
    {
      id: 7,
      alt: "Project Image",
      name: "Simple Quiz App",
      desc: "Simple Quiz Applicetion for test my JavaScript knowledge.",
      githubSource: "https://github.com/Alisher-Usmonov/search",
      link: "https://searchfast.netlify.app",
    },
    {
      id: 8,
      alt: "Project Image",
      name: "Bondoka",
      desc: "A template designed to test my knowledge",
      githubSource: "https://github.com/Alisher-Usmonov/Bondoka",
      link: "https://bondokaone.netlify.app",
    },
  ];
  return (
    <div className="parentComponent">
      <Container>
        <Row>
          <Col md="12" className="heading">
            <h3>Portfolio Page</h3>
          </Col>
          <Col md="12" className="cardCol">
            {PortfolioObject.map((el, idx) => {
              return (
                <Cards
                  key={el.id}
                  alternative={el.alt}
                  source={imgObject[idx]}
                  projectName={el.name}
                  projectDescription={el.desc}
                  link={el.link}
                  githubSource={el.githubSource}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
