import React from 'react';
import { Image, ScrollView, CameraRoll, Text, TouchableOpacity,
  StyleSheet, Dimensions, View, TouchableHighlight,
  ImageStore, ImageEditor, Button, } from 'react-native';

//画像の大きさを指定
const getHeight = () => {
  const { height, width } = Dimensions.get('window');
  return [height, width];
};

class PostImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      base64: '',
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
    .then(r => {
      this.setState({ photos: r.edges });
    });
  }

  async pressButton() {
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
              this.props.getBase64(base64); 
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
    const width = Dimensions.get('window').width;
    const styles = StyleSheet.create({
      wrap: {
        flex: 1,
        alignItems: 'center',
      },
      view: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
      },
      image: {
        width: width / 3,
        height: 100,
      },
      button: {
        position: 'absolute',
        width: 200,
        height: 50,
        bottom: 30,
        backgroundColor: 'rgb(228, 81, 94)',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: 'white',
        fontSize: 20,
      },
    });

    return (
      <View style={styles.wrap} >
        <ScrollView>
          <View style={styles.view}>
            {this.state.photos.map((p, i) => {
              return (
                <TouchableHighlight
                  onPress={() => this.props.selectImages(p.node.image)}
                  key={i}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: p.node.image.uri }}
                  />
              </TouchableHighlight>
              );
            })}
          </View>
          <Button title='button' onPress={() => console.log(this.state.base64)} />
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.pressButton()}
        >
            <Text style={styles.text} >決定</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PostImage;
