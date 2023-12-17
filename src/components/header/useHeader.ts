import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';

const useHeader = () => {
  const {navigate} = useNavigation<any>();

  const onLanguagePress = () => {
    navigate(ROUTES.LANGUAGE);
  };

  const onWalletPress = () => {};

  return {
    onLanguagePress,
    onWalletPress,
  };
};

export default useHeader;
