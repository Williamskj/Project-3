import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            Return
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Campers United</h4>
      </div>
    </footer>
  );
};

export default Footer;
