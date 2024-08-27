import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg"; // change logo to initalP 
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    <footer className="footer" id="footer">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={logo} alt="Logo"></img>
                </Col>
                <Col md={6}>
                    <div className="social-icon">
                        <a href="/#"><img src={navIcon1} alt=""></img></a>
                        <a href="/#"><img src={navIcon2} alt=""></img></a>
                        <a href="/#"><img src={navIcon3} alt=""></img></a>
                    </div>
                    <p>Copyright 2024. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
}