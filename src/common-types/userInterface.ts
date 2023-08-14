interface ILoginForm {
  email: string;
  password: string;
}

interface IRegisterForm extends ILoginForm {
  name: string;
}

interface IUser {
  id: number;
  email: string;
  name: string;
}

interface IUserDataResponse {
  id: number;
  email: string;
  name: string;
  token: string;
}

export { ILoginForm, IRegisterForm, IUser, IUserDataResponse };
