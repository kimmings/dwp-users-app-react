import React from 'react';
import { StyledHeader } from './Styled';

const Header = () => {
  return (
    <StyledHeader expand="md" variant="dark">
      <StyledHeader.Brand href="#home">DWP Test</StyledHeader.Brand>
    </StyledHeader>
  );
};

export default Header;
