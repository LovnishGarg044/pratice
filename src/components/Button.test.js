import {  render, screen } from "@testing-library/react";
import Button from "./Button"
import React from "react";

it("Button Secondary", () => {
    
    render(<Button type="submit"variant="secondary">Home</Button>)
     
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument;
  });
  it("Button Primary", () => {
    render(<Button variant="primary" style={{ textDecoration: 'none',
    color:"white" }}>Home</Button>)
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument;
  });
