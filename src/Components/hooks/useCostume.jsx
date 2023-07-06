
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserComponent = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/QuincyLarson')
      .then((response) => {
        setUserData(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); 
      });
  }, []);

  return (
    <>
      {loading ? ( 
        <p>Loading...</p>
      ) : (
        <>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={userData.name} />
          <p>Company: {userData.company}</p>
          <p>Bio: {userData.bio}</p>
        </>
      )}
    </>
  );
};

export default UserComponent;
