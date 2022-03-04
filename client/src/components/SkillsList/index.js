import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_POST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const PostsList = ({ posts, isLoggedInUser = false }) => {
  const [removeSavedPosts, { error }] = useMutation(REMOVE_POST, {
    update(cache, { data: { removeSavedPosts } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeSavedPosts },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveSavedPosts = async (savedPosts) => {
    try {
      const { data } = await removeSavedPosts({
        variables: { savedPosts },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {posts &&
          posts.map((savedPosts) => (
            <div key={savedPosts} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{savedPosts}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveSavedPosts(savedPosts)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default PostsList;
