import React from "react";
import { Container, Row, Col } from "reactstrap"
import "./Footer.css";

function Footer() {
    function date() {
        let date = new Date().getFullYear();
        return date;
    }
    const trueDate = date();
    return (
        <div className="footer bg-dark text-center mt-3 py-3">
            <Container>
                <Row>
                    <Col md="12" sm="12" className="d-flex align-items-center text-white justify-content-center">
                        <h4>Alisher Usmonov {trueDate} | &copy; Alrights reservered.</h4>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;