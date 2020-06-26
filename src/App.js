import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { StyledButton, NetworkError } from './components/Styled';
import Header from './components/Header';
import { getUsers, getLondonUsers } from './lib/api';

function App() {
  const [ usersInLondon, setUsersInLondon ] = useState([]);
  const [ usersInRadius, setUsersInRadius ] = useState([]);
  const [ showUsersInLondon, setShowUsersInLondon ] = useState(true);
  const [ showUsersInRadius, setShowUsersInRadius ] = useState(false);
  const [ displayError, setDisplayError ] = useState(false);

  const handleApiError = error => {
    console.log(error);
    setDisplayError(true);
  };

  const getUsersInRadius = async () => {
    const users = await getUsers();
    if( users.error ) 
      handleApiError(users.error);
    else
      setUsersInRadius(users);
  };

  const getUsersInLondon = async () => {
    const users = await getLondonUsers();
    if( users.error )
      handleApiError(users.error);
    else
      setUsersInLondon(users);
  };

  const displayUsersInRadius = () => {
    setShowUsersInLondon(false);
    setShowUsersInRadius(true);
  };

  const displayUsersInLondon = () => {
    setShowUsersInLondon(true);
    setShowUsersInRadius(false);   
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getUsersInLondon();
    getUsersInRadius();
  }, []);

  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <Col sm={4} className="px-0 pr-sm-2">
            <StyledButton 
              selected={showUsersInRadius}
              onClick={displayUsersInRadius}>Display Users within 50 miles of London</StyledButton>
            <StyledButton 
              selected={showUsersInLondon}
              onClick={displayUsersInLondon}>Display London Users</StyledButton>
          </Col>
          <Col sm={8}>
            <NetworkError 
              show={displayError}>Oops! There was a Network Error</NetworkError>
            { showUsersInRadius &&
                usersInRadius.map(user => {
                  return (<div>{user.first_name} {user.last_name}</div>);
                }) 
            }
            { showUsersInLondon && 
                usersInLondon.map(user => {
                  return (<div>{user.first_name} {user.last_name}</div>);
                }) 
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
