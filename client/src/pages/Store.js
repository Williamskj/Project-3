import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_PROFILES } from '../utils/queries';

const Store = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="my-3">
          <h3>Are you a Buyer or Seller?</h3>
          <ul className="flex-row justify-center">
            <button className="btn btn-dark mb-3">Buyer</button>
            <button className="btn btn-dark mb-3">Seller</button>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Store;
