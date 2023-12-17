import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/Logo';
import COLORS from '../../theme';
import useHeader from './useHeader';

const Header = () => {
  const {onLanguagePress, onWalletPress} = useHeader();

  return (
    <View style={styles.main}>
      <Logo />
      <View style={styles.flexOne} />
      <TouchableOpacity onPress={onLanguagePress}>
        <Icon name="language" size={22} color={COLORS.primary} />
      </TouchableOpacity>
      <View style={styles.hSpacer} />
      <TouchableOpacity onPress={onWalletPress}>
        <Icon name="money" size={22} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  flexOne: {
    flex: 1,
  },
  hSpacer: {
    width: 30,
  },
});

export default Header;
