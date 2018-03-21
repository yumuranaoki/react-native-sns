import React from 'react';
import { Image, ScrollView, CameraRoll, StyleSheet } from 'react-native';

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
  render() {
    const styles = StyleSheet.create({
      image: {
        width: 300,
        height: 100,
      }
    });

    return (
      <ScrollView>
        {this.state.photos.map((p, i) => {
          return (
            <Image
              key={i}
              style={styles.image}
              source={{ uri: p.node.image.uri }}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default PostImage;
