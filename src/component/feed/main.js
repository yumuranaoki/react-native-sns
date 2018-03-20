import React from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';
import Header from '../common/header';

class Post extends React.Component {
  render() {
    const data = [
      { place: '宮古島', content: '卒業旅行で宮古島に行ったよ' },
      { place: '奄美大島', content: 'サーフトリップ初日' },
      { place: '奄美大島', content: 'サーフトリップ初日' },
      { place: '奄美大島', content: 'サーフトリップ初日' },
    ];

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
      post: {
        padding: 20
      },
    });

    return (
      <View>
        <Header title='Feed' />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <View style={styles.postImg} />
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

export default Post;
