import {StyleSheet, Text, View} from 'react-native';
import {strings} from '../../../../language';
import COLORS from '../../../../theme';
import {PastInsightType} from '../../types';
import PastInsight from '../past-insight';
import {PastInsightsProps} from './types';

const PastInsights = (props: PastInsightsProps) => {
  const {insights, onInsightPress} = props;

  const renderItem = (item: PastInsightType, index: number) => {
    return (
      <>
        <PastInsight {...item} onInsightPress={onInsightPress(index)} />
        <View style={styles.spacerOne} />
      </>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>| {strings.pastInsights}</Text>
      </View>
    );
  };

  return (
    <View>
      {renderHeader()}
      {insights.map(renderItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  spacerOne: {
    height: 16,
  },
  headerText: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  header: {
    marginBottom: 16,
  },
});

export default PastInsights;
