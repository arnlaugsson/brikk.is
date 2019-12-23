import React from "react";
import { withTranslation } from "react-i18next";
import Image from "react-bootstrap/Image";

function Header({ t }) {
  return <Image src="brikk_logo.png" fluid />;
}

export default withTranslation()(Header);
