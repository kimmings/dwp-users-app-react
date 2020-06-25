import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import { getUsers, getLondonUsers } from './lib/api';

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0;
  border-top: 1px solid white;
  border-top: 1px solid white;

  @media (min-width: 784px) {
    width: auto;
    border-radius: 5px;
  }
`;

function App() {
  const [ usersInLondon, setUsersInLondon ] = useState([]);
  const [ usersInRadius, setUsersInRadius ] = useState([]);
  const [ showUsersInLondon, setShowUsersInLondon ] = useState(true);

  const handleApiError = () => {};

  const getUsersInRadius = async () => {
   const users = await getUsers();
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
    getLondonUsers().then(users => {
      setUsersInLondon(users);
      getUsersInRadius();
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <StyledButton variant="primary" onClick={getUsersInLondon}>Display Users within 50 miles of London</StyledButton>
        <StyledButton variant="primary" onClick={getUsersInRadius}>Display London Users</StyledButton>
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
