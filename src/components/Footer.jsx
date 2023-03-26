import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/images/png/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="bg_footer position-relative ">
      <Container>
        <Row className="py-5">
          <Col sm={2}>
            <ul
              className="ps-0 d-flex flex-column align-items-center align-items-sm-start"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="500"
            >
              <Link to="/">
                <li>
                  <a
                    href="#"
                    className="ff_poiret fw_regular fs_base text_primary opacity_07"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/Kunden">
                <li className=" mt-2">
                  <a
                    href="#"
                    className="ff_poiret fw_regular fs_base text_primary opacity_07"
                  >
                    Kundenrezensionen
                  </a>
                </li>
              </Link>
              <Link to="/Karriere">
                <li className="mt-2">
                  <a
                    href="#"
                    className="ff_poiret fw_regular fs_base text_primary opacity_07 "
                  >
                    We´re hiring!
                  </a>
                </li>
              </Link>
            </ul>
          </Col>
          <Col sm={8}>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <img src={logo} alt="logo" />
              <p className="common_para opacity_08 text-center mt-2">
                Der Sparringspartner für die Skalierung
                <span className="d-lg-block">deines Unternehmens.</span>
              </p>
            </div>
          </Col>
        </Row>
        <div className="border_line position-absolute"></div>
        <p className="common_para opacity_08 text-center mb-0 py-4">
          Impressum | Datenschutz | AGBS
        </p>
      </Container>
    </section>
  );
};

export default Footer;
