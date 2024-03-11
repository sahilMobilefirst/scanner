
import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'

const QRscan = () => {
  const [data,setData] = useState("scan something")
  return (
       <QRCodeScanner
       containerStyle={{backgroundColor:"#333945"}}
        onRead={({data})=>setData(data)}
        reactivate={true}
        reactivateTimeout={1000}
        showMarker={true}
        bottomContent={
          <View style={{alignItems:"center"}}>
            <Text numberOfLines={2}
            style={{fontSize:20,
            padding:20}}
            >Retrieved Content: </Text>
            <Text>{data}</Text>
          </View>
          
        }
      />
  )
}

export default QRscan;

const styles = StyleSheet.create({})