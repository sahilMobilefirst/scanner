import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import QRCode from 'react-native-qrcode-svg';

const QRGen = () => {
    const [data,setData] = useState("Create QR code");
  return (
    <View style={styles.container}>
      <QRCode
      value={data}
      size={200}
      
      />
      <TextInput
      style={styles.textbox}
      placeholder='Enter data here'
      onChangeText={(text)=>{
        if(text.length==0){
            setData("Enter data")
        }else{
        setData(text)
        }
        }}
      />
    </View>
  )
}

export default QRGen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        gap:30
    },
    textbox:{
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"gray",
        borderRadius:10,
        width:"80%",
        height:50
    }
})