import React from "react";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import { FiFacebook, FiMap, FiMapPin, FiInstagram } from "react-icons/fi";
import { withTranslation } from "react-i18next";

import AddressCard from "./components/AddressCard";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import OpeningHours from "./components/OpeningHours";

const locations = [
  {
    id: 1,
    title: "Hafnarfirði",
    street: "Norðurbakki 1b",
    postcode: 220,
    city: "Hafnarfjörður",
    image: "nordurbakki.jpg",
    mapLink: "https://goo.gl/maps/qVUXrmkcZ9J2",
    phone: "5651665",
    email: "brikk@brikk.is"
  },
  {
    id: 2,
    title: "Reykjavík",
    street: "Mýrargata 31",
    postcode: 101,
    city: "Reykjavík",
    image: "myrargata.jpg",
    mapLink: "https://goo.gl/maps/bx67JpxRtc6ZY1uN9",
    phone: "5651665",
    email: "brikk@brikk.is"
  }
];

function App({ t }) {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Header />
        <h3>
          <FiMapPin /> {t("about")}
        </h3>
        <p>{t("introText")}</p>
        <p>
          <strong>{t("socialMedia")}</strong>
        </p>
        <p>
          <FiFacebook />{" "}
          <a href="https://www.facebook.com/brikkbread/">{t("onFacebook")}</a>
        </p>
        <p>
          <FiInstagram />{" "}
          <a href="https://www.instagram.com/brikkbraud/">{t("onInstagram")}</a>
        </p>
        <h3>
          <FiMap /> {t("locations")}
        </h3>
        <p>{t("findUs")}</p>
        <Row>
          {locations.map((location, id) => (
            <Col sm key={location.id} className="addressCol">
              <AddressCard location={location} key={location.id} />
            </Col>
          ))}
        </Row>
        <OpeningHours />
      </Container>
    </div>
  );
}

export default withTranslation()(App);
