import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import QRscan from './screens/QR_Scan';
import DashBoard from './screens/DashBD';
import QRGen from './screens/QR_Generator';
import ImageCropper from './screens/ImageCropper';
import Camera from './screens/Camera';
import VisionCam from './screens/visionCam';


const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  DashBoard:undefined;
  QRscan: undefined;
  QRGen:undefined;
  ImageCropper:undefined;
  Camera:undefined;
  VisionCam:undefined;
};

const App = () => {
  return (
     <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='DashBoard'>
      <Stack.Screen
        name="DashBoard"
        component={DashBoard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRscan"
        component={QRscan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRGen"
        component={QRGen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ImageCropper"
        component={ImageCropper}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="VisionCam"
        component={VisionCam}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
      </NavigationContainer>
     </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"gray"
  }
})