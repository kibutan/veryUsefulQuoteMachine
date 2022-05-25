import { render, screen } from "@testing-library/react";
import Index from "../../pages/index";
import "@testing-library/jest-dom";

describe("Index", () => {
  test("renders", () => {
    render(<Index />);
    expect(screen.getByText("Quote")).toBeInTheDocument();
  });
});
