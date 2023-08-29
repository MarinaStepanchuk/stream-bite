import { KeyboardEvent, useState } from 'react';
import styles from './InputWithButton.module.scss';

const InputWithButton = ({
  cb,
  maxLength = 30,
}: {
  cb: (text: string) => void;
  maxLength?: number;
}) => {
  const [text, setText] = useState('');
  const handleAddTag = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && text.length >= 3) {
      cb(text.split(' ').join('_'));
      setText('');
    }
  };

  return (
    <div className={styles.tagInputContainer}>
      <input
        type="text"
        className={styles.tagInput}
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => handleAddTag(event)}
        placeholder="enter tag"
        maxLength={maxLength}
      />
      <div className={styles.cancelButton}>
        <span className={styles.closeLine}></span>
        <span className={styles.closeLine}></span>
      </div>
    </div>
  );
};

export { InputWithButton };
