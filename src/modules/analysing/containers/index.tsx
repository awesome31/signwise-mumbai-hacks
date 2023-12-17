import LottieView from 'lottie-react-native';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../../../assets/Logo';
import {strings} from '../../../language';
import COLORS from '../../../theme';
import useAnalysing from './hooks';

const AnalysingContainer = () => {
  useAnalysing();

  return (
    <View style={styles.main}>
      <LottieView
        source={{
          uri: 'https://lottie.host/936fb8c3-2cfb-43ac-b98e-a5c9f428f296/sZvdI5RnOs.json',
        }}
        style={styles.animation}
        autoPlay
        loop
      />
      <View style={styles.spacerOne} />
      <Logo />
      <View style={styles.spacerTwo} />
      <Text style={styles.mainText}>{strings.analyseLegalDocument}</Text>
      <View style={styles.spacerTwo} />
      <Text style={styles.mainText}>{strings.thisWillTakeUptoAMinute}</Text>
      <View style={styles.spacerTwo} />
      <Text style={styles.mainText}>
        <Text style={styles.mainTextBold}>{strings.doNot}</Text>{' '}
        {strings.closeTheApp}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 170,
    paddingBottom: 50,
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  spacerOne: {
    height: 120,
  },
  mainText: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: 'Avenir',
  },
  mainTextBold: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  spacerTwo: {
    height: 20,
  },
});

export default AnalysingContainer;
