import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

const Camera = () => {
  const cameraRef = useRef<RNCamera | null>(null);
  const [data, setData] = useState<string>();

  const handleCamera = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const imageData = await cameraRef.current.takePictureAsync(options);
        setData(imageData.uri);
        console.log(imageData.uri);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          cameraRef.current = ref;
        }}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
      />
      <View style={styles.captureCon}>
        <TouchableOpacity style={styles.capture} onPress={handleCamera}>
          <Text style={styles.captureButtonText}>CAPTURE</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureCon: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    alignItems: 'center', 
    width: '100%', 
  },
  capture: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  captureButtonText: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'center',
  },
});

export default Camera;
