import React from "react";
import { withTranslation } from "react-i18next";
import i18n from "../i18n";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation({ t }) {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="#home">BRIKK</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <NavDropdown title="Language">
            <NavDropdown.Item onClick={() => i18n.changeLanguage("is")}>
              Íslenska
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>
              English
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withTranslation()(Navigation);
