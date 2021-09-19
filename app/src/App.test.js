import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('All Header elements appears', () => {
  render(<App />);
  const logoElement = screen.getByText(/image/i);
  expect(logoElement).toBeInTheDocument();

  const appTitleElement = screen.getByText(/Ephemerate/i);
  expect(appTitleElement).toBeInTheDocument();

  const loginButtonElement = screen.getByText(/login/i);
  expect(loginButtonElement).toBeInTheDocument();
});

it('All popup page elements appear when clicking on login button', () => {
  render(<App />);

  const loginButtonElement = screen.getByText(/login/i);

  loginButtonElement.click()

  const loginPopupPageTitleElement = screen.getByText(/login to your account/i);
  expect(loginPopupPageTitleElement).toBeInTheDocument();

  const exitButtonElement = screen.getByText(/✕/i);
  expect(exitButtonElement).toBeInTheDocument();

  const usernameInputElement = screen.getByText(/username/i);
  expect(usernameInputElement).toBeInTheDocument();

  const passwordInputElement = screen.getByText(/password/i);
  expect(passwordInputElement).toBeInTheDocument();

  const letsLogButtonElement = screen.getByText(/let's log/i);
  expect(letsLogButtonElement).toBeInTheDocument();

  const swapToSignupElement = screen.getByText(/New \? Create new account/i);
  expect(swapToSignupElement).toBeInTheDocument();
});


it('Popup page disappear when clicking on exit', () => {
  render(<App />);
  const loginButtonElement = screen.getByText(/login/i);

  loginButtonElement.click()

  const exitButtonElement = screen.getByText(/✕/i);

  exitButtonElement.click()

  const loginPopupPageTitleElement = screen.queryByText(/login to your account/i);
  expect(loginPopupPageTitleElement).not.toBeInTheDocument();

  const exitButtonElement2 = screen.queryByText(/✕/i);
  expect(exitButtonElement2).not.toBeInTheDocument();

  const usernameInputElement = screen.queryByText(/username/i);
  expect(usernameInputElement).not.toBeInTheDocument();

  const passwordInputElement = screen.queryByText(/password/i);
  expect(passwordInputElement).not.toBeInTheDocument();

  const letsLogButtonElement = screen.queryByText(/let's log/i);
  expect(letsLogButtonElement).not.toBeInTheDocument();

  const swapToSignupElement = screen.queryByText(/New \? Create new account/i);
  expect(swapToSignupElement).not.toBeInTheDocument();

});


it('Signup page appear when clicking new account text', () => {
  render(<App />);
  const loginButtonElement = screen.getByText(/login/i);

  loginButtonElement.click()

  const signupTextElement = screen.getByText(/New \? Create new account/i);

  signupTextElement.click()

  const loginPopupPageTitleElement = screen.getByText(/Sign Up/i);
  expect(loginPopupPageTitleElement).toBeInTheDocument();

  const exitButtonElement2 = screen.getByText(/✕/i);
  expect(exitButtonElement2).toBeInTheDocument();

  const usernameInputElement = screen.getByText(/username/i);
  expect(usernameInputElement).toBeInTheDocument();

  const passwordInputElement = screen.getByText(/password/i);
  expect(passwordInputElement).toBeInTheDocument();

  const createAccountButtonElement = screen.getByText(/create account/i);
  expect(createAccountButtonElement).toBeInTheDocument();

});


it('Create new account, logout then login with it', () => {
  render(<App />);
  const loginButtonElement = screen.getByText(/login/i);

  loginButtonElement.click()

  const signupTextElement = screen.getByText(/New \? Create new account/i);

  signupTextElement.click()

  const usernameInputElement = screen.getByText(/username/i);
  userEvent.type(usernameInputElement, "test");

  const passwordInputElement = screen.getByText(/password/i);
  userEvent.type(passwordInputElement, "test");

  const createAccountButtonElement = screen.getByText(/create account/i);
  createAccountButtonElement.click()

  // Check that the popup closed
  const loginPopupPageTitleElement2 = screen.queryByText(/Sign Up/i);
  expect(loginPopupPageTitleElement2).not.toBeInTheDocument();

  const exitButtonElement2 = screen.queryByText(/✕/i);
  expect(exitButtonElement2).not.toBeInTheDocument();

  const usernameInputElement2 = screen.queryByText(/username/i);
  expect(usernameInputElement2).not.toBeInTheDocument();

  const passwordInputElement2 = screen.queryByText(/password/i);
  expect(passwordInputElement2).not.toBeInTheDocument();

  const createAccountButtonElement2 = screen.queryByText(/create account/i);
  expect(createAccountButtonElement2).not.toBeInTheDocument();


  // Check that the username appear in the header meaning the connexion is successful
  const usernameElement = screen.getByText(/test/i);
  expect(usernameElement).toBeInTheDocument();

  // Logout
  const logoutButton = screen.getByText(/logout/i);
  logoutButton.click()

  // Check again the username
  const usernameElement2 = screen.getByText(/test/i);
  expect(usernameElement2).not.toBeInTheDocument();

});