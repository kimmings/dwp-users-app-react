import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getUsers } from './api';

function App() {
  const [ usersInRadius, setUsersInRadius ] = useState([]);
  const handleApiError = () => {};

  const getUserData = async () => {
   const users = await getUsers();
    console.log({users});
    if( users.error ) 
      handleApiError(users.error);
    else
      setUsersInRadius(users);
};

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getUserData()
  }, []);

  return (
    <div className="App">
      <div>
      <Button>Display London Users</Button>
      </div>
      { usersInRadius.map(user => {
        return (<div>{user.first_name} {user.last_name}</div>);
      }) }
    </div>
  );
}

export default App;
