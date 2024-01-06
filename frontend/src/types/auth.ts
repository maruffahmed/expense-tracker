import { IUser } from "./user";

export type ILoginData = {
  email: string;
  password: string;
};

export type Tokens = {
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
};

export type ILoginResponse = {
  user: IUser;
  tokens: Tokens;
};

export type IRegistrationData = {
  name: string;
  email: string;
  password: string;
};

export type IRegistrationResponse = {
  user: IUser;
  tokens: Tokens;
};
