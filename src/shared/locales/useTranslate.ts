import { useState, useEffect } from "react";
import i18next, { TOptionsBase } from "i18next";
import { $Dictionary } from "i18next/typescript/helpers";
import NestedKeyOf from "../types/NestedKeyOf";
import ILanguageTexts from "./ILanguageTexts";

export const translate = (
  key: NestedKeyOf<ILanguageTexts>,
  options?: TOptionsBase & $Dictionary
) => {
  return i18next.t(key as string, options);
};

export const useTranslate = () => {
  const [, setUpdate] = useState(0);

  useEffect(() => {
    const handleLanguageChange = () => setUpdate((prev) => prev + 1);
    i18next.on("languageChanged", handleLanguageChange);
    return () => i18next.off("languageChanged", handleLanguageChange);
  }, []);

  return translate;
};
