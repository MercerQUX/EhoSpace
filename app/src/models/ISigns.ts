export interface ISignUp {
  name: string;
  surname: string;
  country: string;
  email: string;
  login: string;
  password: string;
}

export interface ISignIn {
  email_login: string;
  password: string;
}
