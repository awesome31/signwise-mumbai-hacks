import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AnalyseLegalDocument from '../../../../assets/AnalyseLegalDocument';
import {strings} from '../../../../language';
import COLORS from '../../../../theme';
import {AnalyseDocumentProps} from './types';

const AnalyseDocument = (props: AnalyseDocumentProps) => {
  const {onAnalysePress} = props;

  return (
    <View style={styles.analyseLegalContainer}>
      <AnalyseLegalDocument />
      <View style={styles.spacerOne} />
      <TouchableOpacity style={styles.buttonContainer} onPress={onAnalysePress}>
        <View style={styles.analyseText}>
          <Text style={styles.text}>{strings.analyseLegalDocument}</Text>
        </View>
        <View style={styles.hSpacer} />
        <View>
          <Icon name="search" size={18} color={COLORS.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  analyseLegalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacerOne: {
    height: 12,
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  hSpacer: {
    width: 8,
  },
  analyseText: {width: 170},
});

export default AnalyseDocument;
