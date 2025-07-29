"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";
import ta from "../public/locales/ta/common.json";
import te from "../public/locales/te/common.json";
import bn from "../public/locales/bn/common.json";
import mr from "../public/locales/mr/common.json";
import gu from "../public/locales/gu/common.json";
import kn from "../public/locales/kn/common.json";
import ml from "../public/locales/ml/common.json";
import pa from "../public/locales/pa/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    ta: { translation: ta },
    te: { translation: te },
    bn: { translation: bn },
    mr: { translation: mr },
    gu: { translation: gu },
    kn: { translation: kn },
    ml: { translation: ml },
    pa: { translation: pa },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
