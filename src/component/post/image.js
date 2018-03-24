import React from 'react';
import { Image, ScrollView, CameraRoll, StyleSheet, Dimensions, View, TouchableHighlight } from 'react-native';

class PostImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
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

  //複数のimageをselect
  selectImages = uri => {
    console.log(uri);
  }

  render() {
    const width = Dimensions.get('window').width;
    const styles = StyleSheet.create({
      view: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
      },
      image: {
        width: width / 3,
        height: 100,
      }
    });

    return (
      <ScrollView>
        <View style={styles.view}>
          {this.state.photos.map((p, i) => {
            return (
              <TouchableHighlight
                onPress={() => this.selectImages(p.node.image.uri)}
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
      </ScrollView>
    );
  }
}

export default PostImage;
