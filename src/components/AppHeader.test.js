import { fireEvent,render, screen } from "@testing-library/react";
import AppHeader from "./AppHeader"
import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter } from "react-router-dom";
it("Home Button", () => {
    render(<BrowserRouter>
    <Provider store={store}>
        <AppHeader />
      </Provider>
      </BrowserRouter>);
        const shareButton = screen.getByRole("button",{name:"Home"});
        expect(shareButton).toBeInTheDocument;
        fireEvent.click(shareButton);
  });
  it("Add Task Button", () => {
    render(<BrowserRouter>
    <Provider store={store}>
        <AppHeader />
      </Provider>
      </BrowserRouter>);
        const shareButton = screen.getByRole("button",{name:"Add Task"});
        expect(shareButton).toBeInTheDocument;
        fireEvent.click(shareButton);
  });
  it("Full List Button", () => {
    render(<BrowserRouter>
    <Provider store={store}>
        <AppHeader />
      </Provider>
      </BrowserRouter>);
        const shareButton = screen.getByRole("button",{name:"Full List"});
        expect(shareButton).toBeInTheDocument;
        fireEvent.click(shareButton);
  });
  it("Check Due Date Button", () => {
    render(<BrowserRouter>
    <Provider store={store}>
        <AppHeader />
      </Provider>
      </BrowserRouter>);
        const shareButton = screen.getByRole("button",{name:"Check Due Date"});
        expect(shareButton).toBeInTheDocument;
        fireEvent.click(shareButton);
  });
  