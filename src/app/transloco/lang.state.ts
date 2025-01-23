import { Lang, LangMap } from "./lang.types";

export const fallbackLang = 'en';
export const langList: Lang[] = Object.keys(LangMap).filter(
  (lang): lang is Lang => typeof lang === 'string' && lang in LangMap,
);
