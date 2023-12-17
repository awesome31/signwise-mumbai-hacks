import {useRoute} from '@react-navigation/native';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {strings} from '../../../language';
import COLORS from '../../../theme';
import {KeyRiskData} from '../../../types';
import TalkToExperts from '../components/talk-to-experts';
import useDetailedInsights from './useDetailedInsights';

const COLOR_MAP: any = {
  ['Very High']: COLORS.red,
  High: COLORS.red,
  Medium: COLORS.yellow,
  Low: COLORS.green,
  ['Very Low']: COLORS.green,
};

const STRING_MAP: any = {
  ['Very High']: 'High Risk',
  High: 'High Risk',
  Medium: 'Medium Risk',
  Low: 'Low Risk',
  ['Very Low']: 'Low Risk',
};

const DetailedInsights = () => {
  const {insights, onTalkPress, loading} = useDetailedInsights();
  const {params} = useRoute<any>();

  const {title, adviceCategory, natureOfDocument} = params;

  const renderCategory = (category: string) => {
    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryContainerText}>{category}</Text>
      </View>
    );
  };

  const renderDetailedInsight = (insight: KeyRiskData) => {
    return (
      <View style={styles.detailedOne}>
        <View style={styles.flexRow}>
          <View style={styles.riskName}>
            <Text style={styles.insightTitle}>{insight.riskName}</Text>
          </View>
          <View
            style={{
              ...styles.riskTag,
              backgroundColor: (COLOR_MAP as any)[insight.riskRating],
            }}>
            <Text style={styles.riskText}>
              {STRING_MAP[insight.riskRating]}
            </Text>
          </View>
        </View>
        <View style={styles.spacerOne} />
        <Text style={styles.insightDescription}>{insight.riskExplanation}</Text>
        <View style={styles.spacerOne} />
        <Text style={styles.mitigation}>{strings.mitigationStartegy}</Text>
        <View style={styles.spacerOne} />
        <Text style={styles.insightDescription}>{insight.riskMitigation}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.emptyMain}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!insights) {
    return null;
  }

  return (
    <ScrollView
      style={styles.main}
      contentContainerStyle={styles.contentStyle}
      showsHorizontalScrollIndicator>
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.spacerOne} />
        <View style={styles.category}>
          {adviceCategory.map(renderCategory)}
        </View>
        <View style={styles.spacerOne} />
        <Text style={styles.text}>{natureOfDocument}</Text>
        <View style={styles.spacerTwo} />
        <Text style={styles.textBold}>{strings.keyRiskDetails}</Text>
        <View style={styles.spacerTwo} />
        {insights?.keyRisks.map(renderDetailedInsight)}
        <View style={styles.spacerThree} />
        <View style={styles.spacerThree} />
        <TalkToExperts onTalkPress={onTalkPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  contentStyle: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  spacerOne: {
    height: 6,
  },
  spacerTwo: {
    height: 12,
  },
  text: {
    fontSize: 14,
    color: COLORS.primary,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    fontFamily: 'Arial',
  },
  spacerThree: {
    height: 8,
  },
  categoryContainer: {
    padding: 6,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryContainerText: {
    fontSize: 12,
    color: COLORS.primary,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  riskTag: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  riskText: {
    fontSize: 14,
    color: COLORS.white,
  },
  insightDescription: {
    fontSize: 14,
    color: COLORS.primary,
  },
  mitigation: {
    color: '#6E777A',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  detailedOne: {
    marginBottom: 8,
  },
  riskName: {width: '70%'},
  emptyMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailedInsights;
