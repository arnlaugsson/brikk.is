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
          {t("sundays")} <span className="pull-right">9:00-17:00</span>
        </li>
        <li className={isToday(1)}>
          {t("mondays")} <span className="pull-right">7:30-17:00</span>
        </li>
        <li className={isToday(2)}>
          {t("tuesdays-31")} <span className="pull-right">{t("closed")}</span>
        </li>
        <li className={isToday(3)}>
          {t("wednesdays-01")} <span className="pull-right">{t("closed")}</span>
        </li>
        <li className={isToday(4)}>
          {t("thursdays")} <span className="pull-right">7:30-17:00</span>
        </li>
        <li className={isToday(5)}>
          {t("fridays")} <span className="pull-right">7:30-17:00</span>
        </li>
        <li className={isToday(6)}>
          {t("saturdays")} <span className="pull-right">9:00-17:00</span>
        </li>
      </ul>
    </div>
  );
}

export default OpeningHours;
