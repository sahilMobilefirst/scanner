import { Alert, Button, Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import WebView from 'react-native-webview';

const Webview = () => {
    const [data,setData] = useState("https://www.google.com/")
    const [link,setLink] = useState('')

    const validateLink = async (link:string) => {
        try {
          const response = await fetch(link);
    
          if (response.ok) {
            setData(link);
          } else {
            Alert.alert('Invalid Link', 'The provided link is not valid.');
          }
        } catch (error) {
            Alert.alert('Invalid Link', 'The provided link is not valid.');
        }
      };
  return (
    <View style={styles.container}>
    <WebView source={{ uri: data }} style={{ flex: 0.95 }} />
    <View style={styles.bottomCon}>
    <TextInput
    placeholder='Enter link here'
    style={styles.TextInput}
    onChangeText={(text)=>{
        if(text.length==0){
            setData( 'https://www.google.com/')
        }else{
           setLink(text)
        }
        }}/>
        <Pressable
        style={styles.btn}
        onPress={()=>validateLink(link)}>
            <Text style={{color:"white"}}>Enter</Text>
        </Pressable>
    </View>
   
    </View>
  )
}

export default Webview;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    TextInput:{
        backgroundColor:"gray",
        color:"black",
        width:"80%",
        height:40,
        borderRadius:5
    },
    webView:{
       backgroundColor:"gray"
    },
    btn:{
        backgroundColor:"#3498DB",
        borderRadius:5,
        padding:8,
        height:40,
    },
    bottomCon:{
        flex:0.05,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:10,
        paddingBottom:20
    }
})