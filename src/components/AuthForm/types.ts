interface IAuthForm {
  cb: () => void;
  register: boolean;
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

type FIELDS = 'name' | 'email' | 'password';

export { IAuthForm, FIELDS };
