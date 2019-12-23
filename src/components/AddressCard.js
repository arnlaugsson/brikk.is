import React from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Obfuscate from "react-obfuscate";
import { FiMail, FiMap, FiPhone } from "react-icons/fi";

const AddressCard = props => {
  const { t } = useTranslation();
  return (
    <Card>
      <Card.Img variant="top" src={props.location.image} />
      <Card.Body>
        <Card.Title>{props.location.title}</Card.Title>
        <Card.Text>
          <strong>{props.location.street}</strong>
          <br />
          {props.location.postcode} {props.location.city}
          <br />
          <FiMap />{" "}
          <a
            href={props.location.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("seeMap")}
          </a>
          <br />
          <FiPhone /> <Obfuscate tel={props.location.phone} />
          <br />
          <FiMail />{" "}
          <Obfuscate
            email={props.location.email}
            headers={{ subject: t("emailSubject") }}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AddressCard;
