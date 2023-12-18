import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("contact component should load in the page", () => {
    //rendering
    render(<Contact />);
    //querying
    const heading = screen.getByRole("heading");
    // assertion
    expect(heading).toBeInTheDocument();
  });

  test("2 input boxes must be available in the component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
