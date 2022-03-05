import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      savedPosts {
        title
        description
        savedComments{
          commmentText
        }
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($email: String!) {
    user(email: $email) {
      _id
      username
      savedPosts {
        title
        description
        savedComments{
          commmentText
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      savedPosts {
        title
        description
        savedComments{
          commmentText
        }
      }
    }
  }
`;

export const QUERY_POSTS = gql `
query posts {
  posts {
    title
    description
    user
    comments {
      commentText
      commentAuthor
    }
  }
}`;

