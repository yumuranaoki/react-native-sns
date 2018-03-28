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

export default GET_POSTS;
