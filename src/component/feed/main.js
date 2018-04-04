import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../common/header';

class Feed extends React.Component {

  keyExtractor = item => item.id;

  render() {
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

    const GET_POSTS = gql`
      {
        allPost {
          id
          place
          content
          images {
            id
          }
        }
      }
    `;

    return (
      <View style={styles.view}>
        <Header title='Feed' />
        <Query query={GET_POSTS}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading</Text>;
            if (error) return <Text>Error</Text>;

            return (
              <View>
              <FlatList
                data={data.allPost}
                keyExtractor={this.keyExtractor}
                renderItem={({ item, i }) => {
                  if (item.images[0] && item.images[0].id) {
                    return (
                      <View key={i} style={styles.post}>
                        <Image
                          style={styles.image}
                          source={{ uri: `http://localhost:3000/images/${item.id}` }}
                        />
                        <View>
                          <Text style={styles.place}>{item.place}</Text>
                        </View>
                        <View>
                          <Text>{item.content}</Text>
                        </View>
                      </View>
                    );
                  }
                }}
              />
            </View>
            );
          }}
        </Query>
      </View>
    );
  }
}

export default Feed;
