import { render, screen } from "@testing-library/react";
import { Alert } from "../components/alert";

describe("Alert Component", () => {
  it("renders an alert with the correct status and message", () => {
    const props = {
      status: "success",
      message: "This is a success message.",
    };

    render(<Alert {...props} />);

    const alertElement = screen.getByRole("alert");
    const statusElement = screen.getByRole("heading", { name: /success/i });
    const messageElement = screen.getByText(/This is a success message./i);

    expect(alertElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();

    expect(alertElement).toHaveClass("bg-success");
    expect(statusElement).toHaveTextContent("success");
  });
});
