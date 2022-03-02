import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($input: SavedPostInput ) {
    addPost(posts: $input) {
      _id
      name
      savedPosts {
        title
        description
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postTitle: String!) {
    removePost(postTitle: $title) {
      _id
      name
      savedPosts {
        title
        description
      }
    }
  }
`;
