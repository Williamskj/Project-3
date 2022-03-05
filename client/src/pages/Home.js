import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_USERS, QUERY_POSTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const postdata = useQuery(QUERY_POSTS);
  const users = data?.users || [];
  const posts = postdata.data?.posts || [];
  console.log('posts', posts)

  return (
    <main>
      <h1 className='center'>Welcome to</h1>
      <div>
        <img className="logo" src="https://cdn.discordapp.com/attachments/949494830373941291/949580616356233247/Campers_United-logos.jpeg"></img>
      </div>
      <body className='homebody'>Campers United allows users to sign up an account, login, and review all other people’s post about their camping experiences. Or go to their own profiles and create reviews.</body>
    </main>
  );
};

export default Home;