import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  // Use useSelector to access the loggedUser state from the Redux store
  const user = useSelector((state) => state.login.loggedUser);
  console.log(user);

  // Render content based on the user's login status
  return (
    <div>
      <h2>Home</h2>
      {user ? (
        <p>
          Welcome,
          {user.user.data.attributes.username}
          {user.user.data.attributes.id}
          !
        </p>
      ) : (
        <p>User not authenticated. Please log in.</p>
      )}
    </div>
  );
};

export default Home;
