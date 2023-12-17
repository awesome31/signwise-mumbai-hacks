import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ROUTES} from '../../../navigation/routes';
import {CreditCardHolder} from '../../../types';

const useDetailedInsights = () => {
  const {navigate} = useNavigation<any>();

  const [insights, setInsights] = useState<null | CreditCardHolder>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const {params} = useRoute<any>();

  const getData = () => {
    axios
      .post('https://mumbaihacks.mosaicwellness.in/insight', {
        threadId: params.threadId,
        partyName: params.partyName,
      })
      .then(res => {
        setInsights(res.data.parsed);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onTalkPress = () => {
    navigate(ROUTES.EXPERTS, {});
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    insights,
    loading,
    onTalkPress,
  };
};

export default useDetailedInsights;
