import React from "react";
import { mount } from "../../testkit/dom-test";
import { shallow, configure } from "enzyme";
import Login from "../../../pages/auth/login";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Test case for testing login", () => {
  let wrapper;
  /* if email value is undefined and attribute should be name */
  it("should check email", () => {
    wrapper = mount(<Login />);
    let email = wrapper.find('Input[type="email"]');
    expect(email.attr("name")).toBe("email");
    expect(email.val()).toBe(undefined);
    expect(email.length).toBe(1);
  });

  /* if password value is undefined and attribute should be name */
  it("should check password", () => {
    wrapper = mount(<Login />);
    let password = wrapper.find('Input[type="password"]');
    expect(password.attr("name")).toBe("password");
    expect(password.val()).toBe(undefined);
    expect(password.length).toBe(1);
  });

  /* if button value is undefined and color is primary */
  it("should check login button", () => {
    wrapper = mount(<Login />);
    let button = wrapper.find("Button");
    expect(button.attr("color")).toBe("primary");
    expect(button.val()).toBe(undefined);
    expect(button.length).toBe(1);
  });

  /* if email has some value it failed */
  it("should check failed email", () => {
    wrapper = mount(<Login />);
    let email = wrapper.find('Input[type="email"]');
    expect(email.attr("name")).toBe("email");
    expect(email.val()).toBe("kiran@gmail.com");
    expect(email.length).toBe(1);
  });

  /* if password has some value it failed */
  it("should check failed password", () => {
    wrapper = mount(<Login />);
    let password = wrapper.find('Input[type="password"]');
    expect(password.attr("name")).toBe("password");
    expect(password.val()).toBe("1234");
    expect(password.length).toBe(1);
  });

  /* if button has some value it failed */
  it("should check login button", () => {
    wrapper = mount(<Login />);
    let button = wrapper.find("Button");
    expect(button.attr("color")).toBe("primary");
    expect(button.val()).toBe("submit");
    expect(button.length).toBe(1);
  });

  //   it("password check", () => {
  //     wrapper = shallow(<Login />);
  //     wrapper
  //       .find('input[type="password"]')
  //       .simulate("change", { target: { name: "password", value: "123456" } });
  //     expect(wrapper.state("password")).toEqual("123456");
  //   });
  //   it("login check with right data", () => {
  //     wrapper = shallow(<Login />);
  //     wrapper.find('input[type="text"]').simulate("change", {
  //       target: { name: "email", value: "vipiny@gmail.com" }
  //     });
  //     wrapper
  //       .find('input[type="password"]')
  //       .simulate("change", { target: { name: "password", value: "123456" } });
  //     wrapper.find("button").simulate("click");
  //     expect(wrapper.state("isLogined")).toBe(true);
  //   });
  //   it("login check with wrong data", () => {
  //     wrapper = shallow(<Login />);
  //     wrapper.find('input[type="text"]').simulate("change", {
  //       target: { name: "username", value: "vipiny@gmail.com" }
  //     });
  //     wrapper
  //       .find('input[type="password"]')
  //       .simulate("change", { target: { name: "password", value: "123456" } });
  //     wrapper.find("button").simulate("click");
  //     expect(wrapper.state("isLogined")).toBe(false);
  //   });
});
