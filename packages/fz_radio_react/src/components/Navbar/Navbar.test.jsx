import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
