import React from 'react';
import { View, Text, TextInput, StyleSheet,
        TouchableOpacity, ScrollView, Button, } from 'react-native';
import PostButton from './postbutton';

class Post extends React.Component {
  static navigationOptions = {
    title: 'Post',
  };

  constructor(props) {
    super(props);
    this.state = {
      place: '',
      content: '',
    };
  }

  pressPostButton = () => {
    this.props.pressPostButton(
      this.state.place,
      this.state.content,
    );
  }

  render() {
    const styles = StyleSheet.create({
      tabTitle: {
        fontSize: 20,
      },
      image: {
        backgroundColor: '#ddd',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageText: {
        fontSize: 20,
      },
      contentInputView: {
        height: 210,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
      },
      contentInput: {
        height: 190,
      },
      placeInputView: {
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
      },
      placeInput: {
        height: 30,
      },
    });

    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Image')}>
          <View style={styles.image}>
            <Text style={styles.imageText}>写真を選択する</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.placeInputView}>
          <TextInput
            style={styles.placeInput}
            placeholder='思い出の場所を記入しよう'
            onChangeText={text => this.setState({ place: { text } })}
          />
        </View>
        <View style={styles.contentInputView}>
          <TextInput
            style={styles.contentInput}
            multiline
            placeholder='旅の記録を綴ろう'
            onChangeText={text => this.setState({ content: { text } })}
          />
        </View>
        <PostButton
          pressPostButton={this.pressPostButton}
        />
      </ScrollView>
    );
  }
}

export default Post;
