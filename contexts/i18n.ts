import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { localeResources, supportedLocales } from '@/config/supported-languages';

import { localStorageConfig } from '@/config/localstorage';
import { appConfig } from '@/config/general';

const savedLang = typeof window !== 'undefined' ? localStorage.getItem(localStorageConfig.configLocale) : null;
const browserLang = typeof window !== 'undefined' ? navigator.language.slice(0, 2) : appConfig.defaultLocale;

i18n.use(initReactI18next).init({
  lng: savedLang || browserLang || appConfig.defaultLocale,
  fallbackLng: appConfig.defaultLocale,
  supportedLngs: supportedLocales.map((locale) => locale.code),
  resources: localeResources,
  interpolation: {escapeValue: false},
  initImmediate: false
});

export default i18n;