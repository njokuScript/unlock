import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-http-backend'
// if English isn't your default language, move Translations to the appropriate language file.
import en, { Translations } from './lang/en'
import es from './lang/es'
import fr from './lang/fr'
import ar from './lang/ar'
import ko from './lang/ko'
import zh from './lang/zh'

const options = {
  // order and from where user language should be detected
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
}

const locales = navigator.languages
// The preferred language is the first element in the array, however, we fallback to en-US, especially for tests.
const preferredLanguage: { languageTag: string; textDirection: 'ltr' | 'rtl' } =
  {
    languageTag: locales[0] || 'en-US',
    textDirection: 'ltr',
  }

i18n
  .use(XHR)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: options,
    fallbackLng: ['en'],
    lng: preferredLanguage.languageTag,
    resources: {
      /**
       * we need always include "*-US" for some valid language codes because when you change the system language,
       * the language code is the suffixed with "-US". i.e. if a device is set to English ("en"),
       * if you change to another language and then return to English language code is now "en-US".
       */
      en: { translation: en, 'en-US': en },
      es: { translation: es },
      fr: { translation: fr },
      ar: { translation: ar },
      ko: { translation: ko },
      zh: { translations: zh, 'zh-cn': zh },
    },
    react: {
      bindI18n: 'languageChanged editorSaved',
    },
  })

export type TxKeyPath = RecursiveKeyOf<Translations>

type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >
}[keyof TObj & (string | number)]

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >
}[keyof TObj & (string | number)]

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
> = TValue extends unknown[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text

export default i18n
