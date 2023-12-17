import {setLanguage} from '../../../language';

const useLanguage = () => {
  const onChangeLanguage = (language: string) => () => {
    setLanguage(language);
  };

  return {
    onChangeLanguage,
  };
};

export default useLanguage;
