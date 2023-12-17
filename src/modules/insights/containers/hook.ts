import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ROUTES} from '../../../navigation/routes';
import {PastInsightType} from '../types';

const useInsights = () => {
  const {navigate} = useNavigation<any>();

  const [insights, setInsights] = useState<PastInsightType[]>([
    {
      categories: ['Contract Law', 'Property Law'],
      party: 'Analyser’s Party - Rajesh',
      riskType: 'high',
      title: 'Legal Agreement between Rajesh & Reshma',
    },
  ]);

  const onAnalysePress = () => {
    navigate(ROUTES.UPLOAD_DOCUMENTS, {});
  };

  const onInsightPress = (index: number) => () => {};

  return {
    insights,
    onAnalysePress,
    onInsightPress,
  };
};

export default useInsights;
