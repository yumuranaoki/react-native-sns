import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 1.5,
    marginTop: 30,
    marginLeft: 80,
    marginRight: 80,
  }
});

const textInputs = (props) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={props.insideInput}
    />
  );
};

export default textInputs;
