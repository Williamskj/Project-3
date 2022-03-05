import React, { useState } from 'react';

import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import SkillsList from '../components/SkillsList';
import SkillForm from '../components/SkillForm';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';

import Auth from '../utils/auth';

const Profile = () => {
  const { userId } = useParams();

  // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );
  const [addPost] = useMutation(ADD_POST)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    user: ""
  })
  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const user = data?.me || data?.user || {};
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log('formData', formData)
    setFormData({
      ...formData,
      user: Auth.getUser().data.name
    })
    console.log('getUser', formData)
    await addPost({
      variables: {
        input: { ...formData, user: Auth.getUser().name }
      }
    })
    window.location.href = "/"
  }
  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to see your user page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {userId ? `${user.name}'s` : 'Your'} following beverages are for selling:

      </h2>

      {user.savedPosts?.length > 0 && (
        <SkillsList
          savedPosts={user.savedPosts}
          isLoggedInUser={!userId && true}
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm userId={user._id}
        formData = {formData}
        setFormData = {setFormData}
          handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default Profile;