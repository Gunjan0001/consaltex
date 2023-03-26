import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/images/png/logo.png";
import facebook from "../assets/images/svg/facebook.svg";
import guitar from "../assets/images/svg/guitar.svg";
import inter from "../assets/images/svg/in.svg";
import instagram from "../assets/images/svg/instagram.svg";
import utube from "../assets/images/svg/utube.svg";
import line from "../assets/images/png/line.png";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const [openNav, setopenNav] = useState(true);
  if (openNav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <section>
        <div className="bg_secondary py-lg-2 d-md-flex d-none">
          <Container>
            <div className=" d-none d-lg-flex justify-content-between  align-items-center ">
              <ul className="ps-0 mb-0">
                <li>
                  <a
                    href="#"
                    className="text-decoration-none text_primary ff_montserrat fw_regular fs_sm "
                  >
                    22143 Hamburg, Rahlstedter Bahnhofstraße 27-29 |
                    info@consaltex.de
                  </a>
                </li>
              </ul>
              <ul className="ps-0 mb-0  d-flex align-items-center gap-2">
                <li className="icon_hover">
                  <a
                    className={props.HideLogo}
                    href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804923%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804923&key"
                    target="_blank"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="icon_hover">
                  <a
                    className={props.HideLogo}
                    href="https://www.google.com/search?q=tiktok+sign+in&oq=tiktok+sign&aqs=chrome.2.0i433i512j69i57j0i512l8.7142j0j7&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                  >
                    <img src={guitar} alt="guitar" />
                  </a>
                </li>
                <li className="icon_hover">
                  <a
                    className={props.HideLogo}
                    href="https://www.google.com/search?q=in+sign&oq=in&aqs=chrome.2.69i59l3j0i131i433i512j0i67j69i65j69i61j69i60.6054j0j7&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                  >
                    <img src={inter} alt="in" />
                  </a>
                </li>
                <li className="icon_hover">
                  <a
                    className={props.HideLogo}
                    href=" https://www.google.com/search?q=instagram+login&oq=&aqs=chrome.1.69i57j69i59j35i39j0i67j46i67i199i465j0i131i433i512j0i67j5.2573j0j7&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li className="icon_hover">
                  <a
                    className={props.HideLogo}
                    href="https://www.google.com/search?q=utube+signin&oq=utube+signin&aqs=chrome..69i57j0i10i131i433i512j0i10i512l8.7774j0j7&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                  >
                    <img src={utube} alt="utube" />
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <nav className="py-4 position-relative">
          <Container>
            <div className=" d-flex justify-content-between  align-items-center ms-xxl-4 ">
              <ul className="ps-0 mb-0">
                <li>
                  <a href="#">
                    <img className="w-100" src={logo} alt="logo" />
                  </a>
                </li>
              </ul>
              <ul className="ps-0 mb-0 d-none d-lg-flex align-items-center gap-4 mx-auto">
                <Link to="/">
                  <li className="nav_links">
                    <a
                      href="#"
                      className="ff_poiret text_stroke fw_regular fs_base text_primary opacity_07 "
                    >
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/Kunden">
                  <li className="nav_links">
                    <a
                      href="#"
                      className="ff_poiret text_stroke fw_regular fs_base text_primary opacity_07 "
                    >
                      Kundenrezensionen
                    </a>
                  </li>
                </Link>
                <Link to="/Karriere">
                  <li className="nav_links">
                    <a
                      href="#"
                      className="ff_poiret text_stroke fw_regular fs_base text_primary opacity_07 "
                    >
                      Karriere
                    </a>
                  </li>
                </Link>
              </ul>

              <article className="common_btn d-flex align-items-center gap-3  d-none d-lg-flex">
                <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                  <strong>Jetzt Erstgespräch vereinbaren</strong>
                </p>
                <img src={line} alt="line" />
              </article>
              <button
                onClick={() => setopenNav(false)}
                className="d-flex flex-column d-lg-none menu_btn justify-content-evenly"
              >
                <span className="menu_line"></span>
                <span className="menu_line"></span>
                <span className="menu_line"></span>
              </button>
            </div>
          </Container>
          <div
            className={
              openNav
                ? "showNav d-lg-none d-block"
                : "hideNav d-lg-none d-block"
            }
          >
            <div className="mb-0 ps-0 position-relative d-flex flex-column gap-5 justify-content-center w-100 min-vh-100 align-items-center">
              <button
                onClick={() => setopenNav(true)}
                className="btn btn-close fs-4  position-absolute top-0 end-0 mt-4 me-4"
              ></button>
              <div className="d-flex align-items-center gap-3">
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>

                <a className={props.HideLogo} href="#">
                  <img src={guitar} alt="guitar" />
                </a>

                <a className={props.HideLogo} href="#">
                  <img src={inter} alt="in" />
                </a>

                <a className={props.HideLogo} href="#">
                  <img src={instagram} alt="instagram" />
                </a>

                <a className={props.HideLogo} href="#">
                  <img src={utube} alt="utube" />
                </a>
              </div>
              <ul className="ps-0 mb-0  d-flex flex-column align-items-center gap-4 mx-auto">
                <li>
                  <a
                    href="#"
                    className="ff_poiret fw_regular fs_base text_primary opacity_07 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_poiret fw_regular fs_base text_primary opacity_07 "
                  >
                    Kundenrezensionen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_poiret fw_regular fs_base text_primary opacity_07 "
                  >
                    Karriere
                  </a>
                </li>
              </ul>
              <article className="common_btn d-flex align-items-center gap-3   d-flex">
                <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                  <strong>Jetzt Erstgespräch vereinbaren</strong>
                </p>
                <img src={line} alt="line" />
              </article>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
