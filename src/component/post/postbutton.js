import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class PostButton extends React.Component {
  render() {
    const styles = StyleSheet.create({
      button: {
        height: 50,
        width: 200,
        backgroundColor: 'rgb(228, 81, 94)',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
      },
      buttonView: {
        marginTop: 30,
        alignItems: 'center',
      },
    });

    return (
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={this.props.pressPostButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>投稿する</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PostButton;
