import {useRoute} from '@react-navigation/native';
import {Linking} from 'react-native';

const useStartConversation = () => {
  const {params} = useRoute<any>();

  const onStartConversation = () => {
    Linking.openURL(
      `whatsapp://send?text=hello&phone=91${params.lawyer.phoneNumber}`,
    );
  };

  return {
    onStartConversation,
  };
};

export default useStartConversation;
