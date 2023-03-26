import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "./Nav";
import line from "../assets/images/png/line.png";
import location from "../assets/images/png/location.png";
import mail from "../assets/images/png/mail.png";
import box1 from "../assets/images/png/box1.png";
import spring from "../assets/images/png/spring.png";
const Karrierehead = () => {
  return (
    <>
      <section className="header_bg min-vh-100 bg_pr imary pb-5 header2_shadow">
        <div className="pb-5 ">
          <img
            className="position-absolute cube_position pink_cube d-none d-sm-block circle_animation"
            src={box1}
            alt="box1"
          />
          <img
            className="pinkspring_position position-absolute d-none d-lg-flex "
            src={spring}
            alt="spring"
          />
          <Container>
            <article className=" pt-5 d-flex flex-column justify-content-center align-items-center">
              <p className="mb-0 common_para para ">
                <span className="ms-5 ps-1">
                  Initiativbewerbung | Consaltex
                </span>
              </p>
              <h2 className="common_heading text-center ">
                <strong>
                  Werde ein Teil unserer
                  <span className="d-lg-block"> Erfolgsgeschichte</span>
                </strong>
              </h2>
            </article>
            <Row className="py-5 align-items-center  position-relative z_index_2 karrie_shadow">
              <Col
                lg={6}
                className="ps-5"
                data-aos="zoom-in-right"
                data-aos-duration="4000"
              >
                <div className="ps-5">
                  <p className="common_para opacity_08 mb-4">
                    Wir suchen nach Menschen, die wissen, was
                    <span className="d-lg-block">
                      sie wollen, wohin sie wollen und die ein klares
                    </span>{" "}
                    Warum haben.
                  </p>
                </div>
                <div className="mt-5 pt-5 ps-5">
                  <ul className="ps-0 mb-0 ">
                    <li>
                      <a
                        className="d-flex gap-3 align-items-center"
                        target="_blank"
                        href="https://goo.gl/maps/HWXD3h61jtJUofvo7"
                      >
                        {" "}
                        <img
                          className="pt-4"
                          src={location}
                          alt="locationicon"
                        />
                        <p className="mb-0 common_para  pt-4">
                          22143 Hamburg, Rahlstedter Bahnhofstraße
                          <span className="d-lg-block">27-29</span>{" "}
                        </p>
                      </a>
                    </li>
                    <li class=" pt-3 pb-4">
                      <a
                        class="d-flex align-items-center gap-3"
                        href="mailto:info@consaltex.de"
                      >
                        <img src={mail} alt="mailicon" />
                        <p className="mb-0 common_para">info@consaltex.de</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  className="order-1 order-lg-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="4000"
                >
                  <form
                    className="form mx-auto"
                    onsubmit="handleSubmitForm(event)"
                  >
                    <div className="d-flex flex-column hiring_form">
                      <label
                        for="your-name"
                        className=" ff_montserrat fw_semibold fs_base text_primary"
                      >
                        Vor- und Nachname
                      </label>
                      <input
                        required
                        className="ff_montserrat fw_semibold fs_base text_primary ps-3"
                        id="your-name"
                        type="text"
                      />
                    </div>
                    <div class="d-flex flex-column hiring_form">
                      <label
                        for="your-mail"
                        className="ff_montserrat fw_semibold fs_base text_primary"
                      >
                        Email
                      </label>
                      <input
                        required
                        className="ff_montserrat fw_semibold fs_base text_primary  ps-3"
                        id="your-mail"
                        placeholder=""
                        type="email"
                      />
                    </div>
                    <div class="d-flex flex-column hiring_form">
                      <label
                        for="textmesage"
                        className="ff_montserrat fw_semibold fs_base text_primary"
                      >
                        Erzähl uns von dir
                      </label>
                      <textarea
                        type="text"
                        required
                        className=" textmesage ff_montserrat fw_semibold fs_base text_primary ps-3 pt-3 outline_0"
                        placeholder=""
                        id="textmesage"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div class="text-center">
                      <article className="d-flex justify-content-center justify-content-md-start">
                        <button
                          className="common_btn d-flex align-items-center gap-3 subm it_btn  mt-4"
                          type="submit"
                          id="submit-btn"
                        >
                          <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                            <strong>Absenden</strong>
                          </p>
                          <img className="ms-5 ps-5" src={line} alt="line" />
                        </button>
                      </article>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Karrierehead;
