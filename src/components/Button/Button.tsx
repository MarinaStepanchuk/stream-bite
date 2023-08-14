import styles from './Button.module.scss';
import { IButtonProps } from './types';

const Button = ({
  width = '120px',
  height = '40px',
  disabled = false,
  cb,
  content,
  type,
}: IButtonProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    cb();
  };

  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={handleClick}
      style={{ width: `${width}`, height: `${height}` }}
      type={type}
    >
      <span>{content}</span>
      <i></i>
    </button>
  );
};

export default Button;
