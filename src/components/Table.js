import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DataTable;
