import React from 'react';
import { View, Text, TextInput, StyleSheet, Button,
        TouchableOpacity, ScrollView, Dimensions, ImageEditor, ImageStore, } from 'react-native';
import { Mutation } from 'react-apollo';
import PostButton from './postbutton';
import { CREATE_POST } from '../graphql/mutation';

//画像の大きさを指定
const getHeight = () => {
  const { height, width } = Dimensions.get('window');
  return [height, width];
};

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

  componentDidMount() {
    console.log(this.props.selectedImages[0]);
  }

  //imageをpostできれば完全にreplace
  /*
  pressPostButton = () => {
    this.props.pressPostButton(
      this.state.place,
      this.state.content,
      this.props.selectedImages,
    );
  }
  */

  //これをimageを選択するタイミングで実行する
  async pressPostButton() {
    if (this.props.selectedImages[0]) {
      const dimensions = await getHeight();
      const hi = await dimensions[0];
      const wi = await dimensions[1];
      const cropData = await {
        offset: { x: 0, y: 0 },
        size: { width: wi - 100, height: hi - 100 }
      };
      await ImageEditor.cropImage(
        this.props.selectedImages[0].uri,
        cropData,
        uri => {
          console.log(uri);
          ImageStore.getBase64ForTag(uri,
            base64 => {
              this.setState({ base64 });
              ImageStore.removeImageForTag(uri);
            },
            err => console.log(err)
          );
        },
        err => console.log(err.message)
      );
    }
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
      <Mutation mutation={CREATE_POST}>
        {(createPost, { data }) => (
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
              pressPostButton={() => {
                createPost({
                  variables: {
                    place: this.state.place.text,
                    content: this.state.content.text,
                    img: this.props.base64,
                  }
                });
              }}
            />
          <Button title='Button for base64' onPress={() => console.log(this.props.base64)} />
          </ScrollView>
        )}
      </Mutation>
    );
  }
}

export default Post;
