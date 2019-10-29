import { NativeModules } from 'react-native'

const TERMS = {};

export function setTerms(i18nLocale, objectTerms) {
  TERMS[i18nLocale] = objectTerms;
}

export function __translate(term) {

  //check if localeIdentifier exists
  if (NativeModules.I18nManager.localeIdentifier) {

    const i18nLocale = NativeModules.I18nManager.localeIdentifier;

    console.log(i18nLocale);

    //Check if has registered terms in current i18nLocale;
    if (TERMS[i18nLocale]){
      
      //Return the registered or empty string to prevent error from the application
      return TERMS[i18nLocale][term] || '';

    } else {
      
      //Check if has language without a especific region like 
      //Example en-CA to en
      const simplei18nLocale = i18nLocale.split('_')[0];

      return TERMS[simplei18nLocale][term] || '';

    }
  }
}

export function pluralOrSingular(term, value) {
  if (value !== 1) {
    return __translate(`${term}_PLURAL`)
  }
  return __translate(`${term}_SINGULAR`)
}
