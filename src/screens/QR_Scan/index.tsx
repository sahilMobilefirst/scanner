
import { Button, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { img1 } from '../../../assets/images';


const QRscan = () => {
  const [data,setData] = useState<ImageSourcePropType>(); 
  return (
       <QRCodeScanner
       containerStyle={{backgroundColor:"#333945"}}
       //@ts-ignore
        onRead={({data})=>setData(data)}
        reactivate={true}
        reactivateTimeout={1000}
        showMarker={true}
        bottomContent={
          <View style={{alignItems:"center"}}>
            <Text numberOfLines={2}
            style={styles.text1}
            >Retrieved Content: </Text>
            
            <Image source={data} style={{height:50,width:50}}/>
          </View>
          
        }
      />
  )
}

export default QRscan;

const styles = StyleSheet.create({
  text1:{
    fontSize:20,
    padding:20
  }
})