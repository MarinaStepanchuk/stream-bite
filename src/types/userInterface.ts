interface ILoginForm {
  email: string;
  password: string;
}

interface IUser {
  id: number;
  email: string;
  name: string;
}

export { ILoginForm, IUser };
