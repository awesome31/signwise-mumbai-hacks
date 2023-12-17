import {PastInsightType} from '../../types';

export interface PastInsightProps extends PastInsightType {
  onInsightPress: () => void;
}
