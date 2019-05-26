import Footer from '../';
import { shallow } from 'enzyme';
import * as React from 'react';

test('render a footer', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper).toMatchSnapshot();
});
