import React from "react";
import { useTranslation } from "react-i18next";
import { FiClock } from "react-icons/fi";

function OpeningHours(props) {
  const { t } = useTranslation();
  const today = new Date().getDay();
  const isToday = date => {
    if (date === today) {
      return "today";
    } else {
      return "another-day";
    }
  };

  return (
    <div>
      <h3>
        <FiClock /> {t("openingHours")}
      </h3>
      <ul className="opening-hours">
        <li className={isToday(0)}>
          {t("sunday-12")} <span className="pull-right">{t("closed")}</span>
        </li>
        <li className={isToday(1)}>
          {t("monday-13")} <span className="pull-right">{t("closed")}</span>
        </li>
        <li className={isToday(2)}>
          {t("tuesdays")} <span className="pull-right">9:00-16:00</span>
        </li>
        <li className={isToday(3)}>
          {t("wednesdays")} <span className="pull-right">9:00-16:00</span>
        </li>
        <li className={isToday(4)}>
          {t("thursday-9")} <span className="pull-right">9:00-16:00</span>
        </li>
        <li className={isToday(5)}>
          {t("friday-10")} <span className="pull-right">{t("closed")}</span>
        </li>
        <li className={isToday(6)}>
          {t("saturday-11")} <span className="pull-right">{t("closed")}</span>
        </li>
      </ul>
    </div>
  );
}

export default OpeningHours;
