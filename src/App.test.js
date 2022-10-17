import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import MainNavigation from "./components/layout/MainNavigation";
// import Layout from "./components/layout/Layout";

const setup = () =>
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

describe("Test App, Wrapped with BrowserRouter", () => {
  test("Render App without crashing.", () => {
    setup();
    screen.getByText("React Meetups");
  });

  // test("renders the navigation component", () => {
  //   const wrapper = setup();
  //   expect(wrapper.find(MainNavigation).length).toBe(1);
  // });

  // test("renders the Layout component", () => {
  //   const wrapper = setup();
  //   expect(wrapper.find(Layout).length).toBe(1);
  // });
});
