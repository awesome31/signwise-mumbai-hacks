import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FurtherAnalysis from '../../../../assets/FurtherAnalysis';
import {strings} from '../../../../language';
import COLORS from '../../../../theme';

const GetDetailedInsights = (props: any) => {
  const {onDetailedInsightPress} = props;

  return (
    <TouchableOpacity style={styles.main}>
      <View style={styles.flexRow}>
        <FurtherAnalysis />
        <View style={styles.hSpacer} />
        <View style={styles.flexOne}>
          <Text style={styles.text}>{strings.unlockLegalTipsToMitigate}</Text>
          <View style={styles.spacerOne} />
          <Text style={styles.text}>{strings.alsoGetADetailedSummary}</Text>
        </View>
      </View>
      <View style={styles.spacerTwo} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onDetailedInsightPress}>
        <Text style={styles.buttonContainerText}>
          {strings.getDetailedInsights}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 8,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  spacerOne: {
    height: 12,
  },
  flexOne: {
    flex: 1,
  },
  hSpacer: {
    width: 30,
  },
  spacerTwo: {
    height: 18,
  },
  buttonContainer: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  buttonContainerText: {
    fontSize: 16,
    color: COLORS.white,
  },
});

export default GetDetailedInsights;
