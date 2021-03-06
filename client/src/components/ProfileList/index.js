import React from 'react';
import { Link } from 'react-router-dom';

const userList = ({ users, title, posts }) => {
  if (!posts.length) {
    return <h3>No users Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <div className="card-header bg-dark text-light p-2 m-0">
                  <h4>{post.title}</h4>
                  <br />
                  <body className="card-text card-body">{post.description}</body>
                  {/* By {post.user} */}
                  {/* <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently selling {user.savedPosts ? user.savedPosts.length : 0}{' '}
                    beverage
                    {user.savedPosts && user.savedPosts.length === 1 ? '' : 's'}
                  </span> */}
                </div>

                {/* <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/users/${user._id}`}
                >
                  View all the beverages that this seller has to offer.
                </Link> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default userList;
