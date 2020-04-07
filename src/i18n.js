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
      sundays: "Sundays",
      closed: "Closed",
      // Special days
      "thursday-9": "Maundy Thursday (April 9th)",
      "friday-10": "Good Friday (April 10th)",
      "saturday-11": "Saturday (April 11th)",
      "sunday-12": "Easter Sunday (April 12th)",
      "monday-13": "Easter Monday (April 13th)"
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
      sundays: "Sunnudagar",
      closed: "Lokað",
      // Special days
      "thursday-9": "Skírdagur",
      "friday-10": "Föstudagurinn langi",
      "saturday-11": "Laugardagur",
      "sunday-12": "Páskadagur",
      "monday-13": "Annar í páskum"
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
