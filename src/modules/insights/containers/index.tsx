import {ScrollView, StyleSheet, View} from 'react-native';
import AnalyseDocument from '../components/analyse-document';
import PastInsights from '../components/past-insights';
import useInsights from './hook';

const InsightsContainer = () => {
  const {insights, onAnalysePress, onInsightPress} = useInsights();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentStyle}>
      <AnalyseDocument onAnalysePress={onAnalysePress} />
      <View style={styles.spacerOne} />
      <PastInsights insights={insights} onInsightPress={onInsightPress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  contentStyle: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  spacerOne: {
    height: 20,
  },
});

export default InsightsContainer;
