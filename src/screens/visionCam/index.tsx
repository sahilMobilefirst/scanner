import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {Camera} from "react-native-vision-camera"

const VisionCam =  () => {

const checkPermission = async()=>{
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicroPrms = await Camera.requestMicrophonePermission();
    console.log(newCameraPermission);
    
}
useEffect(()=>{
    checkPermission()
})
  return (
    <View>
        
    </View>
  )
}

export default VisionCam;

const styles = StyleSheet.create({

})