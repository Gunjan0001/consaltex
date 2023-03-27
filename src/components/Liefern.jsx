import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import liefern from "../assets/images/png/liefern.png";
import line from "../assets/images/png/line.png";
const Liefern = () => {
  return (
    <section className="bg_primary py-5 wirefragen_shadow ">
      <Container>
        <Row className="align-items-center z_index_2 position-relative">
          <Col md={6}>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="3000"
              data-aos-offset="300"
            >
              <h2 className="common_heading text-center text-md-start">
                <strong>Wir liefern Ergebnisse</strong>
              </h2>
              <p className="common_para opacity_08 pt-3 text-center text-md-start">
                Wir sind vielleicht nicht der größte Player in der Branche, aber
                auf dem Weg dorthin. Aber vor allem sind wir hungrig darauf,
                gemeinsam mit Unternehmern wie dir Erfolgsgeschichten zu
                schreiben.
              </p>
              <p className="common_para opacity_08 text-center text-md-start">
                Wenn andere aufgeben, werden wir erst richtig warm. Wir sind der
                Ansprechpartner für umkämpfte Märkte, komplizierte Kunden,
                erklärungsbedürftige Services und scheinbar aussichtslose Fälle.
                Wir sind das Spezialeinsatzkommando für Agenturen.
              </p>
              <p className="common_para opacity_08 text-center text-md-start">
                Unser Herz schlägt für den Underdog: David gegen Goliath -
                Marketing, Vertrieb, interne Prozesse: Unser Team gibt für dich
                110 Prozent - weil dein Erfolg unsere Motivation ist.
              </p>
              <article className="d-flex justify-content-center justify-content-md-start">
                <button className="common_btn d-flex align-items-center gap-3  mt-4">
                  <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                    <strong>Jetzt Erstgespräch vereinbaren</strong>
                  </p>
                  <img src={line} alt="line" />
                </button>
              </article>
            </div>
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <div
              data-aos="zoom-in-left"
              data-aos-duration="3000"
              data-aos-offset="300"
            >
              <img className="w-100" src={liefern} alt="liefern" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Liefern;
