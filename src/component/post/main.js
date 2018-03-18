import React from 'react';
import { View, Text, TextInput, StyleSheet, } from 'react-native';
import PostButton from './postbutton';
import Header from '../common/header';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ''
    };
  }

  render() {
    const styles = StyleSheet.create({
      tabTitle: {
        fontSize: 20,
      },
      image: {
        backgroundColor: '#ddd',
        height: 200,
      },
      textInput: {
        height: 250,
        padding: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd'
      },
    });

    return (
      <View>
        <Header title="Post" />
        <View style={styles.image} />
        <View>
          <TextInput
            style={styles.textInput}
            multiline placeholder="旅の記録を綴ろう"
            onChangeText={(text) => this.setState({ detail: { text } })}
          />
        </View>
        <PostButton
          pressPostButton={() => this.props.pressPostButton(this.state.detail)}
        />
      </View>
    );
  }
}

export default Post;
