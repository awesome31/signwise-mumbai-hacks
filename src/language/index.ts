import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules

import {ENGLISH, HINDI, PUNJABI, TAMIL} from './strings';

const LANGUAGE_MAP = {
  en: ENGLISH,
  hi: HINDI,
  ta: TAMIL,
  pa: PUNJABI,
};

let language = 'en';
let strings = ENGLISH;

const initLanguage = () => {
  return AsyncStorage.getItem('language').then(value => {
    if (value) {
      console.log(value);

      language = value;
      strings = (LANGUAGE_MAP as any)[value] || ENGLISH;
    }
  });
};

const setLanguage = (lang: string) => {
  AsyncStorage.setItem('language', lang).then(() => {
    language = lang;
    strings = (LANGUAGE_MAP as any)[lang] || ENGLISH;

    RNRestart.restart();
  });
};

export {language, setLanguage, strings, initLanguage};
