import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';

import Auth from '../../utils/auth';

const PostForm = ({ userId, handleFormSubmit, formData, setFormData }) => {

  const [post, setPost] = useState('');

  const [addPost, { error }] = useMutation(ADD_POST);

  return (
    <div>
      <h4>Endorse some more Posts below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Endorse some Posts..."
              value={formData.title}
              className="form-input w-100"
              onChange={(event) => setFormData({
                ...formData,
                title: event.target.value
              })}
            />
            <textarea value = {formData.description} onChange = {(event) => setFormData({
              ...formData,
              description: event.target.value
            })}>

            </textarea>
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Endorse Post
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to endorse Posts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
