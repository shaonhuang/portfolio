import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import en_US from './locales/en/translation.json';
import zh_CN from './locales/zh/translation.json';
const resources = {
  en: {translation:en_US},
  zh: {translation:zh_CN}
};
i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    lng: "en",
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;