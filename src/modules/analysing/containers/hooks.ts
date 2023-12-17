import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {useEffect} from 'react';
import {language} from '../../../language';
import {ROUTES} from '../../../navigation/routes';

const useAnalysing = () => {
  const {params} = useRoute<any>();
  const {navigate} = useNavigation<any>();

  const fetchInsight = () => {
    const formData = new FormData();

    params.documents.forEach((document: any) => {
      formData.append('files', {
        uri: document.uri,
        name: document.fileName,
        type: document.type,
      });
    });

    axios
      .post(
        `https://mumbaihacks.mosaicwellness.in/file-upload?lang=${language}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then(response => {
        navigate(ROUTES.ANALYSIS_REPORT, {report: response.data});
      });
  };

  useEffect(() => {
    if (!params?.documents) {
      navigate(ROUTES.UPLOAD_DOCUMENTS, {});
    } else {
      fetchInsight();
    }
  }, []);
};

export default useAnalysing;
