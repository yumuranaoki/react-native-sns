import React from 'react';
import { Text, Button } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_POSTS = gql`
  {
    allPost {
      id
      place
      content
    }
  }
`;


export default () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading</Text>;
      if (error) return <Text>Error</Text>;

      return (
        <Button onPress={() => console.log(data)}>check data</Button>
      );
    }}
  </Query>
);
