import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import slidercard from "../assets/images/png/slidercard.png";
import line from "../assets/images/png/line.png";
import left from "../assets/images/png/left.png";
import right from "../assets/images/png/right.png";
import spring from "../assets/images/png/spring.png";
export default function SimpleSlider() {
  const my_slider = useRef();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-md-5 bg_primary overflow-hidden position-relative">
        <img
          className="spring_position position-absolute d-none d-lg-flex "
          src={spring}
          alt="spring"
        />
        <Container>
          <Row className="py-5 my-md-5">
            <Col md={8}>
              <Slider ref={my_slider} {...settings}>
                <div
                  className="pe-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <div className="cards h-100 ">
                    <img className="w-100" src={slidercard} alt="slidercard" />
                    <p className="common_para mb-0 p-3 opacity_08">
                      Die Metarec GmbH unterstützt unter der Leitung des
                      Geschäftsführers Christian Schmitt kleine- und
                      Mittelständische Unternehmen beim Gewinnen von
                      qualifizierten Fachkräfte zur beseitigung des
                      Fachkräftemangels
                    </p>
                  </div>
                </div>
                <div
                  className="pe-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <div className="cards h-100 ">
                    <img className="w-100" src={slidercard} alt="slidercard" />
                    <p className="common_para mb-0 p-3 opacity_08">
                      Die Metarec GmbH unterstützt unter der Leitung des
                      Geschäftsführers Christian Schmitt kleine- und
                      Mittelständische Unternehmen beim Gewinnen von
                      qualifizierten Fachkräfte zur beseitigung des
                      Fachkräftemangels
                    </p>
                  </div>
                </div>{" "}
                <div
                  className="pe-md-4"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <div className="cards h-100 ">
                    <img className="w-100" src={slidercard} alt="slidercard" />
                    <p className="common_para mb-0 p-3 opacity_08">
                      Die Metarec GmbH unterstützt unter der Leitung des
                      Geschäftsführers Christian Schmitt kleine- und
                      Mittelständische Unternehmen beim Gewinnen von
                      qualifizierten Fachkräfte zur beseitigung des
                      Fachkräftemangels
                    </p>
                  </div>
                </div>
              </Slider>
            </Col>
            <Col md={4}>
              <div
                className="text-center text-md-start mt-5 mt-md-0 pt-4 pt-md-0"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-offset="300"
              >
                <div>
                  <p className="mb-0 common_para para ms-4">
                    <span className="ms-sm-5">Das sagen unsere Kunden</span>
                  </p>
                </div>
                <h2 className="common_heading">
                  <strong>Testimonials</strong>
                </h2>
                <p className="mb-0 common_para opacity_08 mt-3">
                  Unsere Kunden berichten über die Zusammenarbeit
                </p>
                <article className="d-flex justify-content-center justify-content-md-start">
                  <button className="common_btn d-flex align-items-center gap-3  mt-4">
                    <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                      <strong>Mehr ansehen</strong>
                    </p>
                    <img src={line} alt="line" />
                  </button>
                </article>
                <div className="d-flex  align-items-center  py-4 pt-md-5 mt-md-5 gap-3 justify-content-center justify-content-md-start">
                  <img
                    onClick={() => my_slider.current.slickNext()}
                    className="cursor_pointer"
                    src={left}
                    alt="left"
                  />
                  <img
                    onClick={() => my_slider.current.slickPrev()}
                    className="cursor_pointer"
                    src={right}
                    alt="right"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
