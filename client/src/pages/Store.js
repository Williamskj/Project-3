

import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { QUERY_USERS } from '../utils/queries';

const Store = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="my-3">
          <h3>Are you a Buyer or Seller?</h3>
          <ul className="flex-row justify-center">
            <Link to="/store/buy">
              <button className="btn btn-dark mb-3">Buyer</button>
            </Link>
            <Link to="/store/sell">
              <button className="btn btn-dark mb-3">Seller</button>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Store;