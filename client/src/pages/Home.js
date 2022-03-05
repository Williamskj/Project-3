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
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {posts.loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              posts={posts}
              users={users}
              title="Here's are some Reviews:"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;