import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Login", () => {
  test("given email, when emply, then show riquired error message", async () => {
    render(<App />);

    const email = screen.getByTestId("email");

    await userEvent.type(email, "anyValue");
    await userEvent.clear(email);

    const requiredError = screen.queryByTestId("email-required");
    expect(requiredError).not.toBeNull();
  });

  test("given email, when as value, then hide riquired error message", async () => {
    render(<App />);

    const email = screen.getByTestId("email");

    await userEvent.type(email, "anyValue");

    const requiredError = screen.queryByTestId("email-required");
    expect(requiredError).toBeNull();
  });

  test("given email, when field bot changed, then hide riquired error message", async () => {
    render(<App />);

    const requiredError = screen.queryByTestId("email-required");
    expect(requiredError).toBeNull();
  });

  test("given email, when invalid, then show invalid error message", async () => {
    render(<App />);

    const email = screen.getByTestId("email");

    await userEvent.type(email, "anyValue");

    const requiredError = screen.queryByTestId("email-invalid");
    expect(requiredError).not.toBeNull();
  });

  /////

  test("given password, when emply, then show riquired error message", async () => {
    render(<App />);

    const password = screen.getByTestId("password");

    await userEvent.type(password, "anyValue");
    await userEvent.clear(password);

    const requiredError = screen.queryByTestId("password-required");
    expect(requiredError).not.toBeNull();
  });

  test("given password, when as value, then hide riquired error message", async () => {
    render(<App />);

    const password = screen.getByTestId("password");

    await userEvent.type(password, "anyValue");

    const requiredError = screen.queryByTestId("password-required");
    expect(requiredError).toBeNull();
  });
});
