import {PastInsightType} from '../../types';

export interface PastInsightsProps {
  insights: PastInsightType[];
  onInsightPress: (index: number) => () => void;
}
