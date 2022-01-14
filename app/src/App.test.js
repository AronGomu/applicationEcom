import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './components/Feed';

jest.setTimeout(30000);

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


test('Create new account, logout then login with it', async () => {
  render(<App />);

  // Check that the popup is not here

  const signupPopupPageTitleElement0 = screen.queryByText(/Sign Up/i);
  expect(signupPopupPageTitleElement0).not.toBeInTheDocument();

  const exitButtonElement0 = screen.queryByText(/✕/i);
  expect(exitButtonElement0).not.toBeInTheDocument();

  // click on login button

  const loginButtonElement = screen.getByText(/login/i);
  loginButtonElement.click()

  //check that signup page doesn't show and that the cross show to allow exit

  const signupPopupPageTitleElement1 = screen.queryByText(/Sign Up/i);
  expect(signupPopupPageTitleElement1).not.toBeInTheDocument();

  const exitButtonElement1 = screen.queryByText(/✕/i);
  expect(exitButtonElement1).toBeInTheDocument();

  // click on create new account

  const signupTextElement = screen.getByText(/New \? Create new account/i);
  signupTextElement.click()

  // Check title and cross

  const signupPopupPageTitleElement2 = screen.queryByText(/Sign Up/i);
  expect(signupPopupPageTitleElement2).toBeInTheDocument();

  const exitButtonElement2 = screen.queryByText(/✕/i);
  expect(exitButtonElement2).toBeInTheDocument();

  // fill form

  const usernameInputElement = screen.getByText(/username/i);
  userEvent.type(usernameInputElement, "test");

  const passwordInputElement = screen.getByText(/password/i);
  userEvent.type(passwordInputElement, "test");

  // Click on creating account button

  const createAccountButtonElement = screen.getByText(/create account/i);
  createAccountButtonElement.click()
  
  await act(new Promise((r) => setTimeout(r, 5000)));

  // Check that all element of popup are closed
  const signupPopupPageTitleElement3 = screen.queryByText(/Sign Up/i);
  expect(signupPopupPageTitleElement3).not.toBeInTheDocument();

  const exitButtonElement3 = screen.queryByText(/✕/i);
  expect(exitButtonElement3).not.toBeInTheDocument();

  const usernameInputElement2 = screen.queryByText(/username/i);
  expect(usernameInputElement2).not.toBeInTheDocument();

  const passwordInputElement2 = screen.queryByText(/password/i);
  expect(passwordInputElement2).not.toBeInTheDocument();

  const createAccountButtonElement2 = screen.queryByText(/create account/i);
  expect(createAccountButtonElement2).not.toBeInTheDocument();


  // Check that the username appear in the header meaning the connexion is successful
  console.log('\n\n\n\n\n');
  console.log(screen.findAllByText('t'));
  console.log('\n\n\n\n\n');
  const usernameElement = screen.queryByText(/test/i);
  expect(usernameElement).toBeInTheDocument();

  // Logout
  const logoutButton = screen.queryByText(/logout/i);
  logoutButton.click()

  // Check again the username
  const usernameElement2 = screen.queryByText(/test/i);
  expect(usernameElement2).not.toBeInTheDocument();

});

