import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Torch from 'react-native-torch';

const TorchScreen = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);

  const onPress = async () => {
    try {
      Torch.switchState(!isTorchOn);
      setIsTorchOn(!isTorchOn);
    } catch (err) {
      console.error('Error toggling torch:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Torch App</Text>
      <Pressable
      onPress={onPress}
      style={styles.torchContainer}>
        <View style={[styles.torch, { backgroundColor: isTorchOn ? 'yellow' : 'gray' }]} />
      </Pressable>
    </View>
  );
};

export default TorchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#99AAAB"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  torchContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  torch: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
