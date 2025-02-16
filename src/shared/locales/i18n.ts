import i18next, { TOptionsBase } from "i18next";
import { $Dictionary } from "i18next/typescript/helpers";
import { initReactI18next } from "react-i18next";

import en_USLanguage from "./dictionaries/en_US";
import pt_BRLanguage from "./dictionaries/pt_BR";
import { EnumLanguages } from "./EnumLanguages";
import ILanguageTexts from "./ILanguageTexts";
import NestedKeyOf from "../types/NestedKeyOf";

i18next.use(initReactI18next).init({
  lng: "en-US",
  fallbackLng: "en-US",
  supportedLngs: ["en", "en-US", "pt", "pt-BR"],
  debug: false,
  resources: {
    "en-US": { translation: en_USLanguage },
    "pt-BR": { translation: pt_BRLanguage },
  },
});

export const translate = (
  key: NestedKeyOf<ILanguageTexts>,
  options?: TOptionsBase & $Dictionary
) => {
  if (options) {
    return i18next.t(key as string, options);
  }
  return i18next.t(key as string);
};

export const setLanguage = (language: EnumLanguages) => {
  return i18next.changeLanguage(language);
};

export const getSelectedLanguage = (): EnumLanguages => {
  return i18next.language as EnumLanguages;
};

export default i18next;
