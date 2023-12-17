import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import {Asset, launchCamera} from 'react-native-image-picker';
import {ROUTES} from '../../../navigation/routes';

const useUploadDocuments = () => {
  const [previewImage, setPreviewImage] = useState<null | Asset>(null);
  const [documents, setDocuments] = useState<Asset[]>([]);

  const {navigate} = useNavigation<any>();

  const onAddPreview = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Cool Photo App Camera Permission',
      message:
        'Cool Photo App needs access to your camera ' +
        'so you can take awesome pictures.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    }).then(granted => {
      if (granted) {
        launchCamera({
          mediaType: 'photo',
        })
          .then(response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.log('ImagePicker Error: ', response.errorMessage);
            } else {
              if (response.assets) {
                setPreviewImage(response.assets[0]);
              }
            }
          })
          .catch(() => {
            console.log('error');
          });
      }
    });
  };

  const addDocument = () => {
    if (previewImage) {
      setDocuments([...documents, previewImage]);
    }

    setPreviewImage(null);
  };

  const onDeletePress = (index: number) => () => {
    const newDocuments = documents.filter((_: any, i: number) => i !== index);
    setDocuments(newDocuments);
  };

  const onStartAnalysis = () => {
    navigate(ROUTES.ANALYSING, {
      documents,
    });
  };

  return {
    documents,
    addDocument,
    onDeletePress,
    previewImage,
    onAddPreview,
    onStartAnalysis,
  };
};

export default useUploadDocuments;
