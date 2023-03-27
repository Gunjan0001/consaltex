import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import location from "../assets/images/png/location.png";
import mail from "../assets/images/png/mail.png";
import arrowleft from "../assets/images/png/leftarrow.png";
import arrowright from "../assets/images/png/rightarrow.png";
import circle from "../assets/images/png/nochcircle.png";
import line from "../assets/images/png/line.png";
const Noch = () => {
  return (
    <section className="bg_primary py-5 position-relative noch_shadow">
      <img
        className="position-absolute noch_circle d-none d-xl-block "
        src={circle}
        alt="circle"
      />
      <Container>
        <Row className="mb-5 position-relative z_index_2">
          <Col lg={6}>
            <div
              className="ps-md-5  ms-md-5"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="300"
            >
              <div
                className="d-flex justify-content-center justify-content-lg-start
              "
              >
                <p className="mb-0 common_para para ">
                  <span className="ms-5 ps-1">Du hast noch Fragen?</span>
                </p>
              </div>
              <h2 className="common_heading text-center text-lg-start">
                <strong>Jetzt Erstgespräch vereinbaren</strong>
              </h2>
              <p className="common_para opacity_08 mb-4 text-center text-lg-start">
                Fülle das Formular aus und ein Experte aus{" "}
                <span className="d-lg-block">
                  unserem Team wird sich zum ausgewählten
                </span>{" "}
                Zeitfenster bei dir melden.
              </p>
              <div>
                <ul className="ps-0 mb-0 list-unstyled">
                  <li>
                    <a
                      className="d-flex gap-3 align-items-center "
                      target="_blank"
                      href="https://goo.gl/maps/HWXD3h61jtJUofvo7"
                    >
                      {" "}
                      <img
                        className="pt-4 "
                        src={location}
                        alt="locationicon"
                      />
                      <p className="mb-0 common_para border_top pt-4">
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
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div
              className="calender_box pt-5 px-5 pb-4"
              data-aos-duration="3000"
              data-aos-offset="300"
              data-aos="fade-left"
            >
              <div className="d-flex align-items-center justify-content-between mx-3">
                <img src={arrowleft} alt="arrowleft" />
                <h2 className="ff_montserrat fw_semibold fs_base text_primary">
                  October
                </h2>
                <img className="" src={arrowright} alt=" arrowright" />
              </div>
              <table className="w-100  my-4 ">
                <tr className="d-flex justify-content-between">
                  <th className="ff_montserrat fw_semibold fs_base text_primary text-center d-inline-block ">
                    Sun
                  </th>
                  <th className="ff_montserrat fw_semibold fs_base text_primary text-center d-inline-block">
                    Mon
                  </th>
                  <th className="ff_montserrat fw_semibold fs_base text_primary text-center d-inline-block">
                    Tue
                  </th>
                  <th className="ff_montserrat fw_semibold fs_base text_primary text-center d-inline-block">
                    Wed
                  </th>
                  <th className="ff_montserrat fw_semibold fs_base text_primary text-center d-inline-block">
                    Thu
                  </th>
                  <th className="ff_montserrat fw_semibold fs_base text_primary text-center d-inline-block">
                    Fri
                  </th>
                  <th className="ff_montserrat fw_semibold fs_base text_primary text-center d-inline-block">
                    Sat
                  </th>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="common_para  opacity_03 pt-3 text-center d-inline-block calender_hover cursor_pointer">
                    25
                  </td>
                  <td className="common_para  opacity_03 pt-3 text-center d-inline-block calender_hover cursor_pointer">
                    26
                  </td>
                  <td className="common_para opacity_03 pt-3 text-center d-inline-block calender_hover cursor_pointer">
                    27
                  </td>
                  <td className="common_para opacity_03 pt-3 text-center d-inline-block calender_hover cursor_pointer">
                    28
                  </td>
                  <td className="common_para opacity_03 pt-3 text-center d-inline-block calender_hover cursor_pointer">
                    29
                  </td>
                  <td className="common_para opacity_03 pt-3 text-center d-inline-block calender_hover cursor_pointer">
                    30
                  </td>
                  <td className="common_para pt-3 text-center">01</td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    02
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    03
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    04
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    05
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    06
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    07
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    08
                  </td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    09
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    10
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    11
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    12
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    13
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    14
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    15
                  </td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    16
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    17
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    18
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    19
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    20
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    21
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    22
                  </td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer calender_hover cursor_pointer">
                    23
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer calender_hover cursor_pointer">
                    24
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer calender_hover cursor_pointer">
                    25
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer calender_hover cursor_pointer">
                    26
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer calender_hover cursor_pointer">
                    27
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer calender_hover cursor_pointer">
                    28
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer calender_hover cursor_pointer">
                    29
                  </td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    30
                  </td>
                  <td className="common_para pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    31
                  </td>
                  <td className=" common_para opacity_03  pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    01
                  </td>
                  <td className=" common_para opacity_03 pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    02
                  </td>
                  <td className=" common_para opacity_03 pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    03
                  </td>
                  <td className=" common_para opacity_03 pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    04
                  </td>
                  <td className=" common_para opacity_03 pt-2 text-center d-inline-block calender_hover cursor_pointer">
                    05
                  </td>
                </tr>
              </table>
              <h2 className="ff_montserrat fw_semibold fs_base text_primary text-center pt-5 pb-3">
                Timings
              </h2>
              <Row>
                <Col sm={6}>
                  <button className="common_para timming_btn py-2">
                    1.00 PM-2.00 PM
                  </button>
                </Col>
                <Col sm={6}>
                  <button className="common_para timming_btn py-2 mt-3 mt-sm-0">
                    3.00 PM-4.00 PM
                  </button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={6}>
                  <button className="common_para timming_btn py-2">
                    6.00 PM-8.00 PM
                  </button>
                </Col>
              </Row>
              <article className="d-flex justify-content-center mt-5 mt-sm-0 ">
                <button className="common_btn d-flex align-items-center gap-3  mt-4">
                  <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                    <strong>Submit</strong>
                  </p>
                  <img className="ms-5 ps-4" src={line} alt="line" />
                </button>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Noch;
