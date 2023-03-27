import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import greencube from "../assets/images/png/green_cube.png";
import pink_ring from "../assets/images/png/pink_ring.png";
import twomen from "../assets/images/png/twomen.png";
import green_circle from "../assets/images/png/green_circle.png";
const Fragen = () => {
  return (
    <>
      <section className="bg_primary py-md-5 position-relative ">
        <img
          className=" position-absolute greencube_position d-none d-md-block circle_animation"
          src={greencube}
          alt="greencube"
        />
        <img
          className="position-absolute ringpink_position d-none d-md-block "
          src={pink_ring}
          alt="pink_ring"
        />
        <Container>
          <div className="pt-5 mt-md-5 d-flex justify-content-center">
            <p className="mb-0 common_para para text-center">
              <span className="ms-5 ps-1">Du hast noch Fragen?</span>
            </p>
          </div>
          <h2 className="common_heading text-center mb-0 mb-md-3 mt-3">
            <strong>
              Häufig gestellte <span className="d-lg-block">Fragen</span>
            </strong>
          </h2>
          <Row className="justify-content-center position-relative z_index_2">
            <Col sm="8">
              <Accordion defaultActiveKey="0" className="pt-5">
                <Accordion.Item
                  eventKey="0"
                  className="bg-transparent ps-0"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <Accordion.Header className="bg-transparent ps-0">
                    <h2 className="ff_montserrat fw_semibold fs_md text_primary ps-0 pt-0">
                      Was unterscheidet euch von anderen Agenturen?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_08 ps-0 pt-0">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  className="mt-3 bg-transparent ps-0 pt-0"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                >
                  <Accordion.Header className="bg-transparent">
                    <h2 className="ff_montserrat fw_semibold fs_md text_primary ps-0 pt-0">
                      Brauche ich eure Hilfe?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_08 ps-0 pt-0">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                  eventKey="2"
                  className="mt-3 bg-transparent ps-0 pt-0"
                >
                  <Accordion.Header className="bg-transparent ">
                    <h2 className="ff_montserrat fw_semibold fs_md text_primary ps-0 pt-0">
                      Wie könnt ihr mir helfen?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_08 ps-0 pt-0">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                  eventKey="3"
                  className="mt-3 bg-transparent ps-0 pt-0"
                >
                  <Accordion.Header className="bg-transparent ">
                    <h2 className="ff_montserrat fw_semibold fs_md text_primary ps-0 pt-0">
                      Kann man im Internet noch neue Kunden gewinnen?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_08 ps-0 pt-0">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="300"
                  eventKey="4"
                  className="mt-3 bg-transparent"
                >
                  <Accordion.Header className="bg-transparent">
                    <h2 className="ff_montserrat fw_semibold fs_md text_primary ps-0 pt-0">
                      Gibt es eine eins-zu-eins Betreuung?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_08 ps-0 pt-0">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <div className=" py-5 position-relative wirefragen_shadow">
            <img
              className="position-absolute person_position d-none d-md-block circle_animation"
              src={green_circle}
              alt="box2"
            />
            <div className="d-flex justify-content-center z_index_2 position-relative">
              <img className="w-100 image_wh" src={twomen} alt="twomen" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Fragen;
