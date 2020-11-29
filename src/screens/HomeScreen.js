import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View>
      <Button 
        title="To-do list"
        onPress={ () => navigation.navigate('Todo') } />
    </View >
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  }
});

export default HomeScreen;