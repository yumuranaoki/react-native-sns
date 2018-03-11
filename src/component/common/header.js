import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.2,
    backgroundColor: '#fff'
  }
});

const Header = () => (
  <View style={styles.header}>
    <Text>Sign in</Text>
  </View>
);

export default Header;
