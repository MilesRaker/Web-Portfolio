import React from 'react';
import { shallow, mount } from 'enzyme';
import Mailto from './Mailto';

describe('Mailto', () => {
    it('renders correctly with no props', () => {
        const wrapper = shallow(<Mailto />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with email prop', () => {
        const wrapper = shallow(<Mailto email='test@example.com' />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with subject and body props', () => {
        const wrapper = shallow(
            <Mailto email='test@example.com' subject='Test Subject' body='Test Body' />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a link with correct href', () => {
        const wrapper = mount(<Mailto email='test@example.com'/>);
        expect(wrapper.find('a').props().href).toEqual('mailto:test@example.com');
    });
});