import styles from './Author.module.scss';
import avatar from '../../assets/avatar.png';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Recorder } from '../Recorder/Recorder';

const Author = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const openRecorder = () => {
    setOpen(true);
  };

  return (
    <div className={styles.author}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <div className={styles.plusIcon} onClick={openRecorder}>
        {' '}
        +{' '}
      </div>
      {open && (
        <Modal open={open} setOpen={setOpen}>
          {<Recorder />}
        </Modal>
      )}
    </div>
  );
};

export { Author };
