import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
<<<<<<< HEAD
              profiles={profiles}
              title="Here's the current sellers..."
=======
              users={users}
              title="Here's the current roster of friends..."
>>>>>>> 8d636aaba9f808c2a7349a9ed0f4109b32985d9e
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;