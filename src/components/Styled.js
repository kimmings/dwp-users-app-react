import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

export const StyledButton = styled(Button).attrs(({ selected }) => ({
  variant: 'primary',
  disabled: selected,
}))`
  width: 100%;
  border-radius: 0;
`;

export const StyledHeader = styled(Navbar)`
  border-bottom: 3px solid #999;
  background-color: #0050a6 !important;
`;

export const NetworkError = styled.p`
  font-size: 20px;
  font-family: 'Courier',
  color: red;
  padding: 20px;
  border: 1px solid red;
`;
