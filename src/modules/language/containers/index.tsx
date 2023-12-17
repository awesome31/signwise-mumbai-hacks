import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {strings} from '../../../language';
import COLORS from '../../../theme';
import useLanguage from './useLanguage';

const LANGUAGES = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'हिन्दी',
    code: 'hi',
  },
  {
    name: 'தமிழ்',
    code: 'ta',
  },
  {
    name: 'ਪੰਜਾਬੀ',
    code: 'pa',
  },
];

const Language = () => {
  const {onChangeLanguage} = useLanguage();

  const renderLanguage = (lang: any) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={onChangeLanguage(lang.code)}>
        <Text style={styles.text}>{lang.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.modal}>
        <Text style={styles.headerText}>{strings.chooseLanguage}</Text>
        <View style={styles.spacerOne} />
        {LANGUAGES.map(renderLanguage)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    width: '80%',
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },
  spacerOne: {
    height: 16,
  },
  item: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.primary,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: COLORS.primary,
  },
});

export default Language;
