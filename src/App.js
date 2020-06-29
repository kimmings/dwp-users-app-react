import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from './components/Table';
import { StyledButton, NetworkError } from './components/Styled';
import Header from './components/Header';
import { getUsers, getLondonUsers } from './lib/api';

function App() {
  const [users, setUsers] = useState([]);
  const [showUsersInLondon, setShowUsersInLondon] = useState(false);
  const [showUsersInRadius, setShowUsersInRadius] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApiError = (error) => {
    console.log(error);
    setDisplayError(true);
    setLoading(false);
  };

  const getUsersInRadius = async () => {
    const users = await getUsers();
    if (users.error) {
      handleApiError(users.error);
    } else {
      setUsers(users);
      setLoading(false);
    }
  };

  const getUsersInLondon = async () => {
    const users = await getLondonUsers();
    if (users.error) {
      handleApiError(users.error);
    } else {
      setUsers(users);
      setLoading(false);
    }
  };

  const displayUsersInRadius = () => {
    setShowUsersInLondon(false);
    setShowUsersInRadius(true);
    setLoading(true);
    setUsers([]);
    getUsersInRadius();
  };

  const displayUsersInLondon = () => {
    setShowUsersInLondon(true);
    setShowUsersInRadius(false);
    setLoading(true);
    setUsers([]);
    getUsersInLondon();
  };

  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={12} sm={6} className="px-0">
            <StyledButton
              selected={showUsersInRadius}
              onClick={displayUsersInRadius}
            >
              Users Near London
            </StyledButton>
          </Col>
          <Col xs={12} sm={6} className="px-0">
            <StyledButton
              selected={showUsersInLondon}
              onClick={displayUsersInLondon}
            >
              London Users
            </StyledButton>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 pt-2">
            {displayError && (
              <NetworkError>Oops! There was a Network Error</NetworkError>
            )}

            {loading && <p align="center">Loading data...</p>}

            <Table data={users} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
