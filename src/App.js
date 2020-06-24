import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getUsers, getLondonUsers } from './api';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ usersInLondon, setUsersInLondon ] = useState([]);
  const [ usersInRadius, setUsersInRadius ] = useState([]);
  const handleApiError = () => {};

  const getUsersInRadius = async () => {
   const users = await getUsers();
    console.log({users});
    if( users.error ) 
      handleApiError(users.error);
    else
      setUsersInRadius(users);
  };

  const getUsersInLondon = async () => {
    const users = await getLondonUsers();

    setUsersInLondon(users);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getUsersInRadius()
  }, []);

  return (
    <div className="App">
      <div>
      <Button variant="secondary" onClick={getUsersInLondon}>Display Users within 50 miles of London</Button>
      <Button variant="secondary" onClick={getUsersInRadius}>Display London Users</Button>
      </div>
      <div>
        { usersInRadius.map(user => {
              return (<div>{user.first_name} {user.last_name}</div>);
        }) 
        }
      </div>
      <div>{ usersInLondon.map(user => {
              return (<div>{user.first_name} {user.last_name}</div>);
        }) 
        }</div>
    </div>
  );
}

export default App;
