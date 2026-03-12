import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/shared/i18n/locales/en.json";
import ko from "@/shared/i18n/locales/ko.json";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

//const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  // lng: localStorage.getItem("language") || userLanguage || "en",
  lng: "kr",
  fallbackLng: "kr",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const languages = ["en", "ko"] as const;
export type Languages = (typeof languages)[number]; // 'en' | 'ko'