import React from 'react';
import { Link } from 'react-router-dom';

const userList = ({ users, title }) => {

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {users &&
          users.map((users) => (
            <div key={users._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {users.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently selling {users.savedPosts ? users.savedPosts.length : 0}{' '}
                    beverage
                    {users.savedPosts && users.savedPosts.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/users/${users._id}`}
                >
                  View all the beverages that this seller has to offer.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default userList;
