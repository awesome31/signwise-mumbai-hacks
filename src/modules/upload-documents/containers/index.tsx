import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Asset} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {strings} from '../../../language';
import COLORS from '../../../theme';
import useUploadDocuments from './hook';

const UploadDocumentsContainer = () => {
  const {
    addDocument,
    documents,
    onDeletePress,
    previewImage,
    onAddPreview,
    onStartAnalysis,
  } = useUploadDocuments();

  const renderPreviewImage = (document: Asset, index: number) => {
    return (
      <View style={styles.previewItem} key={document.id}>
        <Image source={{uri: document.uri}} style={styles.cameraImage} />

        <View style={styles.previewNumber}>
          <Text style={styles.previewNumberText}>{index + 1}</Text>
        </View>
        <TouchableOpacity
          style={styles.deleteContainer}
          onPress={onDeletePress(index)}>
          <Icon name="trash" size={12} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.cameraContainer}>
          <View style={styles.flexRow}>
            <Icon name="info" size={20} />
            <View style={styles.hSpacer} />
            <Text style={styles.infoText}>
              {strings.pagesShouldBeAddedInSequence}
            </Text>
          </View>
          <View style={styles.spacerOne} />
          <View style={styles.imageContainer}>
            {previewImage ? (
              <Image
                source={{uri: previewImage.uri}}
                resizeMode="cover"
                style={styles.cameraImage}
              />
            ) : (
              <TouchableOpacity style={styles.camera} onPress={onAddPreview}>
                <Icon name="camera" size={50} color={COLORS.primary} />
                <View style={styles.spacerOne} />
                <Text style={styles.clickHereText}>
                  {strings.clickHerToAddPicture}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.spacerOne} />
          <Text style={styles.pageText}>{documents.length} / 15 Pages</Text>
          {previewImage ? (
            <>
              <View style={styles.spacerOne} />
              <TouchableOpacity
                style={styles.addPageContainer}
                onPress={addDocument}>
                <Text style={styles.addPageText}>{strings.addPages}</Text>
              </TouchableOpacity>
            </>
          ) : null}
          {!previewImage ? (
            <>
              <View style={styles.spacerOne} />
              <Text style={styles.uploadAPDf}>{strings.uploadPDFDocument}</Text>
            </>
          ) : null}
        </View>
        <View style={styles.spacerThree} />
        <ScrollView horizontal contentContainerStyle={styles.scroll}>
          {documents.map(renderPreviewImage)}
        </ScrollView>
      </View>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={onStartAnalysis}>
          <Text style={styles.addPageText}>{strings.startAnalysis}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#F6F6F6',
  },
  cameraContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.primary,
  },
  hSpacer: {
    width: 16,
  },
  spacerOne: {
    height: 12,
  },
  imageContainer: {
    height: '65%',
    width: '80%',
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 8,
  },
  camera: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  addPageContainer: {
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPageText: {
    fontSize: 14,
    color: COLORS.white,
  },
  pageText: {
    fontSize: 14,
    color: COLORS.primary,
  },
  clickCamera: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.red,
    position: 'absolute',
  },
  clickCameraContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadAPDf: {
    fontSize: 14,
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  bottomButtonContainer: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 4,
  },
  clickHereText: {
    fontSize: 16,
    textAlign: 'center',
  },
  cameraImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  previewItem: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 12,
  },
  spacerThree: {
    height: 20,
  },
  previewNumber: {
    width: 20,
    height: 20,
    borderRadius: 20,
    position: 'absolute',
    top: -5,
    left: -5,
    backgroundColor: COLORS.primary,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewNumberText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  deleteContainer: {
    width: 22,
    height: 22,
    borderRadius: 4,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {paddingTop: 6, paddingHorizontal: 12},
});

export default UploadDocumentsContainer;
