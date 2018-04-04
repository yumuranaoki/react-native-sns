import gql from 'graphql-tag';

export const CREATE_POST = gql`
  mutation createPost($place: String!, $content: String!, $img: String!) {
    createPost(place: $place, content: $content, img: $img) {
      id  
    }
  }
`;
