import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {Lawyer} from '../../../types';

const useExperts = () => {
  const {navigate} = useNavigation<any>();

  const onViewProfile = (lawyer: Lawyer) => () => {};

  const onConsult = (lawyer: Lawyer) => () => {
    navigate(ROUTES.START_CONVERSATION, {
      lawyer,
    });
  };

  return {
    onViewProfile,
    onConsult,
  };
};

export default useExperts;
