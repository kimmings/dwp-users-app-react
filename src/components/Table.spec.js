import React from 'react';
import Table from './Table';
import { shallow } from 'enzyme';

describe('components/Table', () => {
  it('should return null if data length is 0', () => {
    const component = shallow(<Table data={[]} />);
    expect(component.html()).toBe(null);
  });

  it('should render rows for data passed', () => {
    const data = [
      {
        id: 1,
        first_name: 'julian',
        last_name: 'kimmings',
        email: 'julian.kimmings@somewhere.net',
      },
      {
        id: 2,
        first_name: 'Donald',
        last_name: 'Duck',
        email: 'Donny@somewhere-else.net',
      },
    ];
    const component = shallow(<Table data={data} />);
    expect(component.find('tr')).toHaveLength(3);
    expect(component.text()).toContain('julian');
    expect(component.text()).toContain('kimmings');
    expect(component.text()).toContain('Donald');
    expect(component.text()).toContain('Duck');
  });
});
