import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      locations: "Our locations",
      openingHours: "Opening hours",
      socialMedia: "Social media",
      breadAndKitchen: "bread | kitchen",
      introText:
        "At BRIKK we combine baking and cooking to produce a variety of stonebaked bread, sourdough and conventional, pastries and more.",
      findUs: "You'll find us at the following locations",
      about: "About",
      seeMap: "See map",
      onFacebook: "BRIKK on Facebook",
      onInstagram: "BRIKK on Instagram",
      emailSubject: "Website query",
      mondays: "Mondays",
      "mondays-23": "Monday December 23rd",
      tuesdays: "Tuesdays",
      "tuesdays-24": "Tuesday December 24th",
      "tuesdays-31": "Tuesday December 31st",
      wednesdays: "Wednesdays",
      "wednesdays-25": "Wednesday December 25th",
      "wednesdays-31": "Wednesday January 1st",
      thursdays: "Thursdays",
      "thursdays-26": "Thursday December 26th",
      fridays: "Fridays",
      saturdays: "Saturdays",
      sundays: "Sundays",
      closed: "Closed"
    }
  },
  is: {
    translation: {
      locations: "Staðirnir",
      openingHours: "Opnunartímar",
      socialMedia: "Samfélagsmiðlar",
      breadAndKitchen: "brauð | eldhús",
      introText:
        "Á BRIKK sameinum við bakstur og eldamennsku með úrvali af steinbökuðu brauði, súrdeigs sem og öðru, bakkelsi og eftirréttum. Matreiðsla á ýmsum réttum, plöttum og samlokum.",
      findUs: "Þú finnur BRIKK á eftirfarandi stöðum",
      about: "Um Brikk",
      seeMap: "Sjá á korti",
      onFacebook: "BRIKK á Facebook",
      onInstagram: "BRIKK á Instagram",
      emailSubject: "Fyrirspurn af vef",
      mondays: "Mánudagar",
      "mondays-23": "Þorláksmessa",
      tuesdays: "Þriðjudagar",
      "tuesdays-24": "Aðfangadagur",
      "tuesdays-31": "Gamlársdagur",
      wednesdays: "Miðvikudagar",
      "wednesdays-25": "Jóladagur",
      "wednesdays-01": "Nýársdagur",
      thursdays: "Fimmtudagar",
      "thursdays-26": "Annar í jólum",
      fridays: "Föstudagar",
      saturdays: "Laugardagar",
      sundays: "Sunnudagar",
      closed: "Lokað"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "is",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
