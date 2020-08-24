import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {} from "@material-ui/core";
import "../../Components/Footer/Footer.scss";

const Footer = () => (
  <footer className="border-top  border-warning">
    <Container>
      <Row className="mt-5 footer">
        <Col>
          <Row className="text-warning mb-5 pl-3">SEJA MILONÁRIO</Row>
        </Col>
        <Col className="text-white">
          <ul className="d-flex flex-column align-items-center list">
            <h3 className=" font-weight-bold text-warning">Links</h3>
            <li className="li_links mt-3">Aulas</li>
            <li className="li_links mt-3">Mentoria</li>
            <li className="li_links mt-3">Contato</li>
          </ul>
        </Col>
        <Col className="text-white">
          <ul className="d-flex flex-column align-items-center list">
            <h3 className=" font-weight-bold text-warning">Contato</h3>
            <a
              href="https://www.instagram.com/sejamilionari0/?hl=pt-br"
              target="blank"
              className="links"
            >
              <li className="li_links mt-3">
                Instagram{" "}
                <img
                  src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                  className="ml-3"
                  alt="img-a"
                />
              </li>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?  compose=CllgCJZbjWKnggQMHBbhfrXkblfWCzplwwZxDzdHNLfJsNvZpHKGGwHJsQTffzgqfHtbljqVlhg"
              className="links"
              target="blank"
            >
              <li className="li_links mt-3">
                E-mail{" "}
                <img
                  src="https://img.icons8.com/color/30/000000/filled-sent.png"
                  className="ml-5"
                  alt="img-b"
                />
              </li>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5564981388355&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais!"
              className="links"
              target="blank"
            >
              <li className="li_links mt-3">
                Whatsapp{" "}
                <img
                  src="https://img.icons8.com/color/30/000000/whatsapp.png"
                  className="ml-3"
                  alt="img-c"
                />
              </li>
            </a>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
