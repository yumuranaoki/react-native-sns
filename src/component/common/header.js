import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20
  }
});

const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

export default Header;
