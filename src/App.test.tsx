import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test.skip('renders "Hello world!"', () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText("AsylumAdvice");
  expect(helloWorld).toBeInTheDocument();
});
