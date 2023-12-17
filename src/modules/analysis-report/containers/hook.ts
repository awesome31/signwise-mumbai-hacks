import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {AnalysisReport, Lawyer, Party} from '../../../types';

const useAnalysisReport = () => {
  const [report, setReport] = useState<null | AnalysisReport>(null);
  const [selectedParty, setSelectedParty] = useState<null | Party>(null);
  const [threadId, setThreadId] = useState<string>('');

  const {params} = useRoute<any>();

  useEffect(() => {
    if (params?.report.parsed) {
      setReport(params?.report.parsed);
      setThreadId(params.report.threadId);
    }
  }, [params?.report.parsed, params.report.threadId]);

  const onSelectParty = (party: Party) => () => {
    setSelectedParty(party);
  };

  const onUndoSelectParty = () => {
    setSelectedParty(null);
  };

  const {navigate} = useNavigation<any>();

  const onViewProfile = (lawyer: Lawyer) => () => {};

  const onConsult = (lawyer: Lawyer) => () => {
    navigate(ROUTES.START_CONVERSATION, {
      lawyer,
    });
  };

  const onDetailedInsightPress = () => {
    ToastAndroid.show('Rs 29 deducted from your wallet', ToastAndroid.SHORT);

    navigate(ROUTES.DETAILED_INSIGHTS, {
      ...report,
      threadId,
      partyName: selectedParty?.partyName,
    });
  };

  return {
    report,
    selectedParty,
    onSelectParty,
    onUndoSelectParty,
    onConsult,
    onViewProfile,
    onDetailedInsightPress,
  };
};

export default useAnalysisReport;
