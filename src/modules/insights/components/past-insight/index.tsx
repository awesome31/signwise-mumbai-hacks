import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {strings} from '../../../../language';
import COLORS from '../../../../theme';
import {PastInsightProps} from './types';

const COLOR_MAP: any = {
  high: COLORS.red,
  medium: COLORS.yellow,
  low: COLORS.green,
};

const STRING_MAP: any = {
  high: 'High Risk',
  medium: 'Medium Risk',
  low: 'Low Risk',
};

const PastInsight = (props: PastInsightProps) => {
  const {categories, onInsightPress, party, riskType, title} = props;

  const renderCategory = (category: string) => {
    return (
      <View style={styles.categoryTag}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.spacerOne} />
      <View style={styles.flexRow}>
        <Text style={styles.partyText}>{party}</Text>
        <View style={styles.hSpacer} />
        <View
          style={{
            ...styles.riskTag,
            backgroundColor: (COLOR_MAP as any)[riskType],
          }}>
          <Text style={styles.riskText}>{STRING_MAP[riskType]}</Text>
        </View>
      </View>
      <View style={styles.spacerOne} />
      <View style={styles.spacerOne} />
      <View style={styles.flexRow}>{categories.map(renderCategory)}</View>
      <View style={styles.spacerTwo} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{strings.getExpertAdvice}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  spacerOne: {
    height: 8,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  partyText: {
    fontSize: 14,
    color: COLORS.primary,
  },
  riskTag: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  riskText: {
    fontSize: 12,
    color: COLORS.white,
  },
  hSpacer: {
    width: 8,
  },
  categoryTag: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: COLORS.white,
    marginRight: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  categoryText: {
    color: COLORS.grey,
    fontSize: 12,
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: 14,
  },
  spacerTwo: {
    height: 20,
  },
});

export default PastInsight;
