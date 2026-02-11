import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// virtual mock so router is not required
jest.mock(
  "react-router-dom",
  () => ({
    Link: ({ children }) => <a>{children}</a>,
  }),
  { virtual: true }
);

import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero"); // ✅ correct alt text
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders signup link", () => {
    render(<Hero />);
    const signupLink = screen.getByText(/sign up for free/i); // ✅ correct text
    expect(signupLink).toBeInTheDocument();
  });
});
