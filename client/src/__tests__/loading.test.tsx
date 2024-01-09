import { render, screen } from "@testing-library/react";
import { Loading } from "../components/loading";

describe("Loading Component", () => {
  it("renders loading with default caption", () => {
    render(<Loading />);

    const loadingElement = screen.getByText(/Loading/i);
    const svgElement = screen.getByTestId("svg");

    expect(loadingElement).toBeInTheDocument();
    expect(svgElement).toBeInTheDocument();
  });

  it("renders loading with custom caption", () => {
    const customCaption = "Custom Loading...";

    render(<Loading caption={customCaption} />);

    const loadingElement = screen.getByText(customCaption);
    const svgElement = screen.getByTestId("svg");

    expect(loadingElement).toBeInTheDocument();
    expect(svgElement).toBeInTheDocument();
  });
});
