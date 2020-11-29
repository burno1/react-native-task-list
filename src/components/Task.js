import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.topic}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <Text>
        {props.content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topic:{
    margin: 10,
    alignContent: 'center'
  },
  title: {
    fontSize: 20,
    alignContent: 'center',
    fontWeight: 'bold'
  }
});

export default Task;