import styles from './Modal.module.scss';

interface IModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

const Modal = ({ open, setOpen, children }: IModalProps): JSX.Element => {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={open ? `${styles.modal} ${styles.active}` : styles.modal} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export { Modal };
