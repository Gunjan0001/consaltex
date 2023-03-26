import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import big_video from "../assets/images/png/big_video.png";
import slidercard from "../assets/images/png/slidercard.png";
import box3 from "../assets/images/png/box3.png";
import spring from "../assets/images/png/spring.png";
import Nav from "./Nav";
export default function SimpleSlider() {
  const my_slider = useRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className=" bg_primary min-vh-100 header2_shadow position-relative pb-5">
        <img
          className="kunden_position position-absolute d-none d-xl-flex "
          src={spring}
          alt="spring"
        />
        <div className="pb-lg-5 mb-lg-5">
          <img
            className="position-absolute  box3_position circle_animation d-none  d-xl-flex"
            src={box3}
            alt="box3"
          />
          <Container>
            <div
              className="slider_card h-100 mt-5"
              data-aos="zoom-in-up"
              data-aos-duration="4000"
            >
              <img className="w-100" src={big_video} alt="slidercard" />{" "}
              <p className=" mb-0 ff_montserrat fw_medium fs_base text_primary p-3 opacity_08">
                Sit nec cras varius leo sit consectetur eros. Odio egestas
                malesuada interdum scelerisque sed facilisis tincidunt arcu. Ut
                scelerisque sodales senectus feugiat sem nec consequat. Sed erat
                aliquet euismod sed pellentesque ut ornare integer risus. Nam
                varius et scelerisque amet a suscipit felis. Amet odio aliquam
                orci et et ac. Quam non neque condimentum consequat augue odio
                malesuada. Est sit faucibus egestas pretium ipsum elementum
                turpis ultrices lacus. Leo aliquam, orci, in facilisis venenatis
                enim. Feugiat dictumst eget amet eget. Molestie mollis risus
                porta a magna a. Pellentesque at enim ultricies tortor enim.{" "}
              </p>{" "}
            </div>
            <h2 className="common_heading pt-5 mt-4">Kundenstimmen</h2>
            <div className="py-5">
              <div className=" kunden_shadow">
                <Slider ref={my_slider} {...settings}>
                  <div
                    className="pe-md-4"
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
              </div>
              <div className="mt-4 d-lg-block d-none">
                <Slider ref={my_slider} {...settings}>
                  <div
                    className="pe-md-4"
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
              </div>
              <div className="mt-4 d-lg-block d-none">
                <Slider ref={my_slider} {...settings}>
                  <div
                    className="pe-md-4"
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                  >
                    <div className="slider_cards h-100 ">
                      <img
                        className="w-100"
                        src={slidercard}
                        alt="slidercard"
                      />
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
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
