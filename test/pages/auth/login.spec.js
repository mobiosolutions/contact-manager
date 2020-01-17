import React from 'react'
import { mount } from '../../testkit/dom-test'
import {shallow, configure} from 'enzyme'
import Login from '../../../pages/auth/login'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('Test case for testing login',() =>{
    let wrapper;
    test('username check',()=>
    {
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'vipiny@gmail.com'}});
        expect(wrapper.state('email')).toEqual('vipiny@gmail.com');
    })
    it('password check',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123456'}});
        expect(wrapper.state('password')).toEqual('123456');
    })
    it('login check with right data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'vipiny@gmail.com'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123456'}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(true);
    })
    it('login check with wrong data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'vipiny@gmail.com'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123456'}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(false);
    })
})
