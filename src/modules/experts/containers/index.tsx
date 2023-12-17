import {FlatList, StyleSheet, View} from 'react-native';
import LawyerCard from '../../../components/lawyer-card';
import {LAWYER_LANG_MAP} from '../../../dummy';
import {language} from '../../../language';
import {Lawyer} from '../../../types';
import useExperts from './hook';

const Experts = () => {
  const {onConsult, onViewProfile} = useExperts();

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
    return <View style={styles.spacerOne} />;
  };

  return (
    <FlatList
      data={(LAWYER_LANG_MAP as any)[language]}
      renderItem={renderItem}
      contentContainerStyle={styles.main}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 16,
  },
  spacerOne: {
    height: 12,
  },
});

export default Experts;
