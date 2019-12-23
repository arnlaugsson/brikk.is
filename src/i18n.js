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
      tuesdays: "Tuesdays",
      wednesdays: "Wednesdays",
      thursdays: "Thursdays",
      fridays: "Fridays",
      saturdays: "Saturdays",
      sundays: "Sundays"
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
      tuesdays: "Þriðjudagar",
      wednesdays: "Miðvikudagar",
      thursdays: "Fimmtudagar",
      fridays: "Föstudagar",
      saturdays: "Laugardagar",
      sundays: "Sunnudagar"
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
