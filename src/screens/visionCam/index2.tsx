import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { Text } from 'react-native-svg';
import {useCameraFormat, Camera, Templates, useCameraDevice } from 'react-native-vision-camera';


const V2 = () => {

    const camRef = useRef<Camera>(null)
  const devices = useCameraDevice("back");
  const format = useCameraFormat(devices, Templates.Instagram);
  const [capturedImage, setCapturedImage] = useState<string>();

  const takePicture = async () => {
    const image = await camRef.current?.takePhoto();
    setCapturedImage(image?.path);
  };
  if (devices == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      {capturedImage ? (
        <View>
          <Image source={{ uri: capturedImage }} style={styles.image} />
        </View>
      ) : (
        <Camera
        isActive={true}
        ref={camRef}
        device={devices}
        style={styles.camera}
        format={format}
         />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default V2;
