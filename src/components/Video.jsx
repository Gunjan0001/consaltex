import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import video1 from "../assets/images/png/video1.png";
import video2 from "../assets/images/png/video2.png";
import video3 from "../assets/images/png/video3.png";
import line from "../assets/images/png/line.png";
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
      <section className=" py-md-5  bg_primary team_shadow">
        <Container>
          <div className="d-flex justify-content-center pt-5 mt-md-5">
            <p className="mb-0 common_para para text-center">
              <span className="ms-5 ps-1">Videos</span>
            </p>
          </div>

          <h2 className="common_heading text-center mb-4 mt-3">
            <strong>Aktuelle Themen</strong>
          </h2>
          <div className="py-md-5">
            <Slider ref={my_slider} {...settings}>
              <div
                className="pe-md-4"
                data-aos="flip-up"
                data-aos-duration="3000"
                data-aos-offset="500"
              >
                <div className="videocard h-100 d-flex flex-column justify-content-between">
                  <article>
                    <img className="w-100" src={video1} alt="video1" />
                    <p className="common_para opacity_08 mb-0 px-4 pt-3">
                      <i>Oct.05, 2022</i>
                    </p>
                    <p className="ff_montserrat fw_semibold fs_md text_primary px-4">
                      Wie du mit Leichtigkeit Neukunden für dein
                      Hochpreis-Angebot gewinnst
                    </p>
                  </article>
                  <article className=" mb-3">
                    <button className="ff_montserrat fw_semibold fs_md text_tertiary bg-transparent border-0 px-4">
                      Zum Video
                    </button>
                  </article>
                </div>
              </div>
              <div
                className="pe-md-4"
                data-aos="flip-up"
                data-aos-duration="3000"
                data-aos-offset="500"
              >
                <div className="videocard h-100 d-flex flex-column justify-content-between">
                  <article>
                    <img className="w-100" src={video1} alt="video1" />
                    <p className="common_para opacity_08 mb-0 px-4 pt-3">
                      <i>Oct.05, 2022</i>
                    </p>
                    <p className="ff_montserrat fw_semibold fs_md text_primary px-4">
                      Wie du mit Leichtigkeit Neukunden für dein
                      Hochpreis-Angebot gewinnst
                    </p>
                  </article>

                  <div className=" mb-3">
                    <button className="ff_montserrat fw_semibold fs_md text_tertiary bg-transparent border-0 px-4">
                      Zum Video
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="pe-md-4"
                data-aos="flip-up"
                data-aos-duration="3000"
                data-aos-offset="500"
              >
                <div className="videocard h-100 d-flex flex-column justify-content-between">
                  <article>
                    <img className="w-100" src={video3} alt="video3" />
                    <p className="common_para opacity_08 mb-0 px-4 pt-3">
                      <i>Oct.12, 2022</i>
                    </p>
                    <p className="ff_montserrat fw_semibold fs_md text_primary px-4">
                      Wieso du als Agenturinhaber UNBEDINGT einheitliche Pakete
                      haben solltest!
                    </p>
                  </article>

                  <div className=" mb-3">
                    <button className="ff_montserrat fw_semibold fs_md text_tertiary bg-transparent border-0 px-4">
                      Zum Video
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
}
