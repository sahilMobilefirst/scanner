import React, { useState } from 'react';
import { Button, Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import RNFS from 'react-native-fs';

const ImageCropper = () => {
  const [selectedImage, setSelectedImage] = useState<string>();

  const confirmVideo = () => {
    console.log('innnnnnnnn');
    ImagePicker.openCamera({
      cropping: true,
      freeStyleCropEnabled: true,
      mediaType: 'photo',
    }).then((image) => {
      console.log(image);
      setSelectedImage(image.path);
    });
  };

  const handleDownload = async () => {
    if (selectedImage) {
      try {
        const permissionResult = await requestStoragePermission();
        if (permissionResult === RESULTS.GRANTED) {
          const downloadDir = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.DownloadDirectoryPath;
          const fileName = 'image.jpg';
          const localImagePath = `${downloadDir}/${fileName}`;
          await RNFS.copyFile(selectedImage, localImagePath);
          console.log('downloaded successfully:', localImagePath);
        } else {
          console.log('Permission denied');
        }
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    }
  };


  const requestStoragePermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
      );
      return result;
    } catch (error) {
      console.error(error);
      return RESULTS.DENIED;
    }
  }
  return (
    <View style={styles.container}>
      {selectedImage && (
        <View style={{flexDirection:"column"}}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
          <Button title="Download" onPress={handleDownload} />
        </View>
      )}
      <Button title="Camera" onPress={confirmVideo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap:17
  },
  image: {
    width: Dimensions.get("window").width*0.8,
    height: Dimensions.get("window").height*0.5,
    marginVertical: 20,
  },
});

export default ImageCropper;
