import React from 'react';
import Button from 'react-bootstrap/Button';
import { StyledButton } from './Styled';
import { shallow, mount } from 'enzyme';

describe('Components/StyledButton', () => {
  it('should disable button when selected', () => {
    const component = mount(
      <StyledButton selected={true}>button</StyledButton>
    );

    expect(
      component.find(Button).filterWhere((item) => {
        return item.props().disabled === true;
      })
    ).toHaveLength(1);
  });

  it('should not disable button when not selected', () => {
    const component = shallow(
      <StyledButton selected={false}>button</StyledButton>
    );
    expect(
      component.find(Button).filterWhere((item) => {
        return item.props().disabled === true;
      })
    ).toHaveLength(0);
  });
});
