import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Button extends React.Component {
  render() {
    const styles = StyleSheet.create({
      button: {
        borderColor: 'rgb(37, 241, 131)',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 40
      },
      textInButton: {
        fontSize: 14,
        fontWeight: 'bold'
      }
    });

    return (
      <View style={styles.button}>
        <Text style={styles.textInButton}>
          {this.props.insideButton}
        </Text>
      </View>
    );
  }
}

export default Button;
