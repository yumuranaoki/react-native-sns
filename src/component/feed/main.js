import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, } from 'react-native';
import Header from '../common/header';

class Feed extends React.Component {

  componentDidMount() {
    this.props.fetchPost();
    console.log(this.props.post);
  }

  render() {
    const data = this.props.post;
    const width = Dimensions.get('window').width - 40;
    const styles = StyleSheet.create({
      place: {
        fontSize: 20,
        backgroundColor: '#fff',
      },
      postImg: {
        borderColor: '#000',
        borderWidth: 1,
        height: 200,
      },
      image: {
        height: width * 0.66,
        width,
      },
      post: {
        padding: 20
      },
      view: {
        marginBottom: 60
      },
    });

    return (
      <View style={styles.view}>
        <Header title='Feed' />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <Image
                style={styles.image}
                source={{ uri: `http://localhost:3000${item.image_arr.url}` }}
              />
              <View>
                <Text style={styles.place}>{item.place}</Text>
              </View>
              <View>
                <Text>{item.content}</Text>
              </View>
            </View>
            )
          }
        />
      </View>
    );
  }
}

export default Feed;
