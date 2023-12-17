import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LawyerCard from '../../../components/lawyer-card';
import {LAWYER_LANG_MAP} from '../../../dummy';
import {language, strings} from '../../../language';
import COLORS from '../../../theme';
import {Lawyer} from '../../../types';
import GetDetailedInsights from '../components/get-detailed-insights';
import useAnalysisReport from './hook';

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

const AnalysisReportContainer = () => {
  const {
    report,
    onSelectParty,
    onUndoSelectParty,
    selectedParty,
    onConsult,
    onViewProfile,
    onDetailedInsightPress,
  } = useAnalysisReport();

  const renderKeyPoint = (keyPoint: string) => {
    return (
      <View key={keyPoint}>
        <Text style={styles.text}>{`\u2022 ${keyPoint}`}</Text>
        <View style={styles.spacerThree} />
      </View>
    );
  };

  const renderCategory = (category: string) => {
    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryContainerText}>{category}</Text>
      </View>
    );
  };

  const renderParty = (selected: boolean) => (party: any) => {
    const style = selected ? styles.selectedPartyCard : styles.partyCard;

    return (
      <TouchableOpacity
        style={style}
        onPress={selected ? onUndoSelectParty : onSelectParty(party)}>
        <Icon name="id-card" size={22} />
        <View style={styles.spacerFour} />
        <Text style={styles.nameText} numberOfLines={2}>
          {party.partyName}
        </Text>
        <Text style={styles.partyTypeText}>{party.partyType}</Text>
        {selected ? (
          <View style={styles.undoView}>
            <Icon
              name="undo"
              size={14}
              onPress={onUndoSelectParty}
              color={COLORS.white}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}: {item: Lawyer; index: number}) => {
    return (
      <LawyerCard
        {...item}
        onConsultNow={onConsult(item)}
        onViewProfile={onViewProfile(item)}
      />
    );
  };

  const renderSeparator = () => {
    return <View style={styles.seperator} />;
  };

  if (!report) return null;

  return (
    <ScrollView
      style={styles.main}
      contentContainerStyle={styles.contentStyle}
      showsHorizontalScrollIndicator>
      <View style={styles.container}>
        <Text style={styles.titleText}>{report.title}</Text>
        <View style={styles.spacerOne} />
        <View style={styles.category}>
          {report.adviceCategory.map(renderCategory)}
        </View>
        <View style={styles.spacerOne} />
        <Text style={styles.text}>{report.natureOfDocument}</Text>
        <View style={styles.spacerTwo} />
        <Text style={styles.textBold}>{strings.keyHighlights}</Text>
        <View style={styles.spacerOne} />
        {report.keyHighlights.map(renderKeyPoint)}
        <View style={styles.spacerTwo} />
        <Text style={styles.textBold}>{strings.selectYourParty}</Text>
        <View style={styles.spacerOne} />
        <View style={styles.partyContainer}>
          {selectedParty ? (
            <>
              {renderParty(true)(selectedParty)}
              <View style={styles.flexOne}>
                <Text style={styles.textBold}>{strings.riskEvaluation}</Text>
                <View style={styles.spacerOne} />
                <View
                  style={{
                    ...styles.riskTag,
                    backgroundColor: (COLOR_MAP as any)[
                      selectedParty.partyRisk
                    ],
                  }}>
                  <Text style={styles.riskText}>
                    {STRING_MAP[selectedParty.partyRisk]}
                  </Text>
                </View>
              </View>
            </>
          ) : (
            report.parties.map(renderParty(false))
          )}
        </View>
        {selectedParty && selectedParty.keyRisks.length ? (
          <>
            <View style={styles.spacerThree} />
            <View style={styles.spacerThree} />
            <Text style={styles.textBold}>{strings.keyRisks}</Text>
            <View style={styles.spacerOne} />
            {selectedParty.keyRisks.map(renderKeyPoint)}
            <View style={styles.spacerTwo} />
            <View style={styles.spacerTwo} />
            <GetDetailedInsights
              onDetailedInsightPress={onDetailedInsightPress}
            />
          </>
        ) : null}
      </View>

      <View style={styles.spacerThree} />
      <View style={styles.spacerThree} />
      <View style={styles.spacerThree} />
      <View>
        <Text style={styles.textBold}>{strings.getFreeExpertise}</Text>
      </View>
      <View style={styles.spacerThree} />
      <View style={styles.spacerThree} />

      <FlatList
        data={(LAWYER_LANG_MAP as any)[language]}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
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
  partyCard: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    flex: 1,
    marginRight: 12,
    height: 120,
  },
  selectedPartyCard: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.red,
    flex: 1,
    marginRight: 12,
    height: 120,
  },
  partyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacerFour: {
    height: 20,
  },
  nameText: {
    fontSize: 12,
  },
  partyTypeText: {
    fontSize: 12,
    color: COLORS.grey,
  },
  flexOne: {
    flex: 1,
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
  undoView: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    height: 12,
  },
});

export default AnalysisReportContainer;
