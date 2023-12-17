import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Briefcase from '../../assets/Briefcase';
import Consulted from '../../assets/Consulted';
import {strings} from '../../language';
import COLORS from '../../theme';
import {LawyerCardProps} from './types';

const LawyerCard = (props: LawyerCardProps) => {
  const {
    consultedCount,
    description,
    expertise,
    image,
    name,
    onConsultNow,
    onViewProfile,
    phoneNumber,
    qualification,
    tariff,
    yearsOfExperience,
    languages,
  } = props;

  const renderCategory = (category: string) => {
    return (
      <View style={styles.categoryTag}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.padding10}>
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
            <View style={styles.spacerTwo} />
            <Text style={styles.nameText}>{languages.join(',')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.spacerOne} />
      <View style={styles.line} />
      <View style={styles.spacerOne} />
      <View style={styles.padding10}>
        <View style={styles.flexRow2}>
          <View style={styles.flexRow2}>
            <Consulted />
            <View style={styles.hSpacer2} />
            <Text style={styles.nameText}>
              {consultedCount}+ {strings['consulted']}
            </Text>
          </View>
          <View style={styles.flexRow2}>
            <Briefcase />
            <View style={styles.hSpacer2} />
            <Text style={styles.nameText}>
              {yearsOfExperience} {strings['yearsOfExperience']}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.spacerOne} />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.spacerOne} />
      <View style={styles.padding10}>
        <View style={styles.flexRow}>
          <TouchableOpacity
            style={styles.viewProfileButton}
            onPress={onViewProfile}>
            <Text style={styles.viewProfileText}>{strings['viewProfile']}</Text>
          </TouchableOpacity>
          <View style={styles.hSpacer} />
          <TouchableOpacity
            style={styles.consultNowButton}
            onPress={onConsultNow}>
            <Text style={styles.consultNowText}>{strings['consultNow']}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.grey2,
    borderRadius: 16,
    backgroundColor: COLORS.white,
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
  hSpacer: {
    width: 10,
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
  spacerOne: {
    height: 12,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.grey2,
  },
  flexRow2: {
    flexDirection: 'row',
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  hSpacer2: {
    width: 4,
  },
  description: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: COLORS.grey,
  },
  descriptionText: {
    fontSize: 14,
    color: COLORS.white,
  },
  padding10: {
    paddingHorizontal: 10,
  },
  viewProfileButton: {
    width: 120,
    height: 32,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  viewProfileText: {
    fontSize: 14,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  consultNowButton: {
    flex: 1,
    height: 32,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  consultNowText: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
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
  flexRow3: {
    flexDirection: 'row',
  },
});

export default LawyerCard;
