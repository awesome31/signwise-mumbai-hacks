import {useRoute} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {strings} from '../../../language';
import COLORS from '../../../theme';
import useStartConversation from './hook';

const advantages = [
  {
    text: 'Expert available right away!',
    icon: 'https://i.mscwlns.co/media/misc/others/adv_jcc38d.png?tr=w-600',
  },
  {
    text: 'Your conversation is confidential',
    icon: 'https://i.mscwlns.co/media/misc/others/confidential_878bkd.png?tr=w-600',
  },
  {
    text: 'Follow-up again with the expert anytime',
    icon: 'https://i.mscwlns.co/media/misc/others/followup_gnz1tc.png?tr=w-600',
  },
  {
    text: 'Billed only for the duration you talk till the minute',
    icon: 'https://i.mscwlns.co/media/misc/others/timer_exk7q1.png?tr=w-600',
  },
];

const StartConversation = () => {
  const {params} = useRoute<any>();

  const {onStartConversation} = useStartConversation();

  const {image, tariff, name, qualification, expertise} = params.lawyer;

  const renderAdvanatage = (advantage: any) => {
    return (
      <View style={styles.advantage}>
        <Image source={{uri: advantage.icon}} style={styles.image} />
        <View style={styles.hSpacer} />
        <View style={styles.flex}>
          <Text style={styles.text}>{advantage.text}</Text>
        </View>
      </View>
    );
  };

  const renderCategory = (category: string) => {
    return (
      <View style={styles.categoryTag}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.modal}>
        <View style={styles.flexRow3}>
          <View style={styles.avatar}>
            <Image style={styles.avatarImage} source={{uri: image}} />
            <View style={styles.tarrif}>
              <Text style={styles.tarrifText}>₹{tariff}</Text>
            </View>
          </View>
          <View style={styles.hSpacer} />
          <View>
            <Text style={styles.nameTextBold}>{name}</Text>
            <View style={styles.spacerTwo} />
            <Text style={styles.nameText}>{qualification}</Text>
            <View style={styles.spacerTwo} />
            <View style={styles.flexRow}>{expertise.map(renderCategory)}</View>
          </View>
        </View>
        <View style={styles.spacerOne} />

        {advantages.map(renderAdvanatage)}
        <View style={styles.spacerOne} />
        <Text style={styles.tarrifText2}>{strings.get10PercentCashback}</Text>

        <View style={styles.spacer6} />
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={onStartConversation}>
          <Text style={styles.bottomButtonText}>Start Conversation</Text>
        </TouchableOpacity>
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
    width: '90%',
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
  },
  advantage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  hSpacer: {
    width: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 16,
    color: COLORS.primary,
    flexWrap: 'wrap',
  },
  flex: {
    flex: 1,
  },
  bottomButton: {
    height: 40,
    width: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtonText: {
    fontSize: 16,
    color: COLORS.white,
  },
  spacerOne: {
    height: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 48,
    borderWidth: 1,
    borderColor: COLORS.grey2,
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    borderRadius: 48,
  },
  nameTextBold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
    fontFamily: 'Arial',
  },
  spacerTwo: {
    height: 4,
  },
  nameText: {
    fontSize: 12,
    color: COLORS.primary,
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
  tarrif: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: COLORS.secondary,
    position: 'absolute',
    bottom: -10,
    left: 3,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  tarrifText: {
    fontSize: 12,
    color: COLORS.primary,
  },
  tarrifText2: {
    fontSize: 12,
    color: COLORS.primary,
    textAlign: 'center',
  },
  flexRow3: {
    flexDirection: 'row',
  },
  spacer6: {
    height: 8,
  },
});

export default StartConversation;
