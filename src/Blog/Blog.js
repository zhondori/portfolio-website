import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Blog.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Footer from "../Footer/Footer";

function Blog() {
  const [post, setPost] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Container className="mt-3">
        <Row>
          <Col md="12" className="text-center my-3">
            <h1>My recently posts</h1>
          </Col>
        </Row>
        <Row>
          {post.slice(5, 21).map((posts, index) => {
            return (
              <Col md="3" sm="6" lg="3" xs="12" key={posts.id} className="my-2">
                <Card className="h-100">
                  <CardHeader>
                    <LazyLoadImage
                      src={`https://picsum.photos/50${index >= 10 ? index - 6: index}`}
                      effect="blur"
                      className="cardImage"
                    />
                    <CardTitle className="p-2">
                      <h4 className="title">{posts.title}</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardText>
                      <span>{posts.body}</span>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default Blog;