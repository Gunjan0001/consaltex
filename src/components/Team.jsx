import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import linkin from "../assets/images/png/linkin.png";
import member1 from "../assets/images/png/member1.png";
import member2 from "../assets/images/png/member2.png";
import member3 from "../assets/images/png/member3.png";
import green_circle from "../assets/images/png/green_circle.png";
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
      <section className=" py-md-5 position-relative bg_primary team_shadow">
        <img
          className="position-absolute team_circle d-none d-lg-block circle_animation"
          src={green_circle}
          alt="green_circle "
        />
        <Container>
          <div className="d-flex justify-content-center pt-md-5">
            {" "}
            <p className="mb-0 common_para para text-center">
              <span className="ms-5 ps-1">Consaltex</span>{" "}
            </p>{" "}
          </div>{" "}
          <h2 className="common_heading text-center mb-5 mb-sm-3 mt-3">
            <strong>Unser Team</strong>{" "}
          </h2>
          <div className="py-md-5">
            <Slider ref={my_slider} {...settings}>
              <div
                className="pe-md-4"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-offset="300"
              >
                <div className="teamcards cursor_pointer h-100 ">
                  <img className="w-100" src={member1} alt="member1" />
                  <div className="d-flex justify-content-between pt-4  px-3 align-items-center">
                    <div className="d-flex flex-column">
                      <h2 className="ff_montserrat fw_semibold text_primary fs_2xl">
                        Rene Jozic
                      </h2>
                      <p className="ff_montserrat fw_semibold fs_base text_primary mb-3 mb-xl-0">
                        Founder
                      </p>
                    </div>
                    <img
                      className=" cursor_pointer"
                      src={linkin}
                      alt="linkdinicon"
                    />
                  </div>
                </div>{" "}
              </div>
              <div
                className="pe-md-4"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-offset="300"
              >
                <div className="teamcards cursor_pointer h-100 ">
                  <img className="w-100" src={member2} alt="member2" />
                  <div className="d-flex justify-content-between pt-4  px-3 align-items-center">
                    <div className="d-flex flex-column">
                      <h2 className="ff_montserrat fw_semibold text_primary fs_2xl">
                        Selmei Nejahsie
                      </h2>
                      <p className="ff_montserrat fw_semibold fs_base text_primary mb-3 mb-xl-0">
                        Co-Founder
                      </p>
                    </div>
                    <img
                      className=" cursor_pointer"
                      src={linkin}
                      alt="linkdinicon"
                    />
                  </div>
                </div>{" "}
              </div>
              <div
                className="pe-md-4"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-offset="300"
              >
                <div className="teamcards cursor_pointer h-100 ">
                  <img className="w-100" src={member3} alt="member2" />
                  <div className="d-flex justify-content-between pt-4  px-3 align-items-center">
                    <div className="d-flex flex-column">
                      <h2 className="ff_montserrat fw_semibold text_primary fs_2xl">
                        David Saberi
                      </h2>
                      <p className="ff_montserrat fw_semibold fs_base text_primary mb-3 mb-xl-0">
                        Sales Manager
                      </p>
                    </div>
                    <img
                      className=" cursor_pointer"
                      src={linkin}
                      alt="linkdinicon"
                    />
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
