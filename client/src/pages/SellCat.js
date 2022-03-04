

import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_USERS } from '../utils/queries';

const Sell = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="my-3">
          <h3>Choose Category to Sell From</h3>
          <ul className="flex-row justify-center">
            <button className="btn btn-dark mb-3">(Categories Populated Here)</button>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Sell;