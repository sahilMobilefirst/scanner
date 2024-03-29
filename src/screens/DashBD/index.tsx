import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Camera } from 'react-native-vision-camera';
import { RESULTS } from 'react-native-permissions';

type DashBoardProps =NativeStackScreenProps<RootStackParamList,"DashBoard">;

const DashBoard = ({navigation}:DashBoardProps) => {

    const VP =async (screen:string) => {
        console.log(screen);
        const newCameraPermission = await Camera.requestCameraPermission();
        if(newCameraPermission===RESULTS.GRANTED){
          // @ts-ignore
          navigation.navigate(screen)
        }else {
          console.log('Permission denied');
        }
    }
  return (
    <View style={styles.container}>
      <Pressable
      onPress={()=>{navigation.navigate("QRscan")}}
      style={styles.btn}>
        <Text style={styles.btnText}>QR Scanner</Text>
      </Pressable>
      <Pressable
      onPress={()=>{navigation.navigate("QRGen")}}
      style={styles.btn}>
        <Text style={styles.btnText}>QR Generator</Text>
      </Pressable>
      <Pressable
      onPress={()=>{navigation.navigate("ImageCropper")}}
      style={styles.btn}>
        <Text style={styles.btnText}>Image Cropper</Text>
      </Pressable>
      <Pressable
      onPress={()=>{navigation.navigate("Camera")}}
      style={styles.btn}>
        <Text style={styles.btnText}>Camera</Text>
      </Pressable>
      <Pressable
      onPress={()=>{VP("VisionCam")}}
      style={styles.btn}>
        <Text style={styles.btnText}>Vision Camera</Text>
      </Pressable>
      <Pressable
      onPress={()=>navigation.navigate("Webview")}
      style={styles.btn}>
        <Text style={styles.btnText}>Webv View</Text>
      </Pressable>
      <Pressable
      onPress={()=>VP("Torch")}
      style={styles.btn}>
        <Text style={styles.btnText}>Torch</Text>
      </Pressable>
    </View>
  )
}

export default DashBoard

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        gap:30
    },
    btn:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:"#74B9FF",
        borderRadius:10,
        width:"80%"

    },
    btnText:{
        fontWeight:"bold",
        fontSize:25,
        color:"#192A56",
        alignSelf:"center"
    }
})