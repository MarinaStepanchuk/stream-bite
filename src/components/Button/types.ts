import { Dispatch, SetStateAction } from 'react';

interface IButtonProps {
  disabled?: boolean;
  setDisabled?: Dispatch<SetStateAction<boolean>>;
  cb: () => void;
  content: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  width?: string;
  height?: string;
}

export { IButtonProps };
