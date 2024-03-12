import { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";

function VisionCam() {
    const [showCamera, setShowCamera] = useState(true);
    const [imageSource, setImageSource] = useState('');
    const devices = useCameraDevice("back");
    const camera = useRef<Camera>(null);

    const takePhoto = async () => {
      if (camera.current !== null) {
        const photo = await camera.current.takePhoto();
        setImageSource(photo.path);
        setShowCamera(false);
        console.log(photo.path);
      }
    };
  
    const handleBack = () => {
      setShowCamera(true);
      setImageSource('');
    };

    if (devices == null) {
      return <Text>Camera not available</Text>;
    }
  
    return (
      <View style={styles.container}>
        
        {showCamera ? (
          <>
            <Camera
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={devices}
              isActive={showCamera}
              photo={true}
            />
            <View style={styles.buttonCon}>
              <TouchableOpacity
                style={styles.camButton}
                onPress={() => takePhoto()}
              />
            </View>
          </>
        ) : (
          <>
            {imageSource !== '' ? (
              <Image
                style={styles.image}
                source={{
                  uri: `file://'${imageSource}`,
                }}
              />
            ) : null}
  
            <View style={styles.backButton}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#fff',
                  width: 100,
                }}
                onPress={handleBack}>
                <Text style={{color: 'white', fontWeight: '500'}}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonCon}>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#77c3ec',
                  }}
                  onPress={() => setShowCamera(true)}>
                  <Text style={{color: '#77c3ec', fontWeight: '500'}}>
                    Retake
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#77c3ec',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: 'white',
                  }}
                  onPress={() => {
                    setShowCamera(true)
                    setImageSource('');
                  }}>
                  <Text style={{color: 'white', fontWeight: '500'}}>
                    Use Photo
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    );
  }
  
  export default VisionCam;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'gray',
    },
    backButton: {
      position: 'absolute',
      width: '100%',
      top: 0,
      padding: 20,
    },
    buttonCon: {
      position: 'absolute',
      alignItems: 'center',
      width: '100%',
      bottom: 0,
      padding: 20,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    camButton: {
      height: 80,
      width: 80,
      borderRadius: 40,
      backgroundColor: '#B2BEB5',
  
      alignSelf: 'center',
      borderWidth: 4,
      borderColor: 'white',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });