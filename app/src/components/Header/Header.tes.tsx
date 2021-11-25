import { mount, render, shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { HeaderContainerCompose } from "./HeaderContainer";

// const setUpRenderWithProps = ({ ...props }: any) =>
//   shallow(
//       <HeaderContainerCompose {...props} />
//   );

  const setUpRenderWithProps = ({ ...props }: any) =>
  shallow(
      <Header {...props} />
  );

describe("Testing the component before authorization", () => {
  it("Login text without an authorized", () => {
    let wrapper = setUpRenderWithProps({}).find(".loginBlock a");
    expect(wrapper.text()).toBe("LOGIN");
  });
  it("Authorization has occurred, but login:undefined", () => {
    let wrapper = setUpRenderWithProps({ isAuth: true }).find(".loginBlock a");
    expect(wrapper.text()).toBe("LOGIN");
  });
});

describe("Testing the component after authorization", () => {
  const defaultProps = {
    isAuth: true,
    login: "userName",
    logOut: function(){defaultProps.isAuth = false}
  };
  it("Login text with an authorized", () => {
    let wrapper = setUpRenderWithProps(defaultProps).find(".loginBlock a");
    expect(wrapper.text()).toBe(defaultProps.login);
  });
  it("LogOut",()=>{
    let wrapper = setUpRenderWithProps(defaultProps).find(".logOut");
    expect(setUpRenderWithProps(defaultProps).find("Header").dive()).toMatchSnapshot();
    setUpRenderWithProps(defaultProps).find("Header").dive().find(".logOut").simulate("click")
    expect(setUpRenderWithProps(defaultProps).find("Header").dive()).toMatchSnapshot();
  })
});


// describe("Test",()=>{
//     const defaultProps = {
//     isAuth: true,
//     login: "userName",
//     logOut: function(){defaultProps.isAuth = false}
//   };
//   it("Testing nodes",()=>{
//     let wrapper = setUpRenderWithProps(defaultProps);
//     expect(wrapper).toMatchSnapshot()
//   })
// })