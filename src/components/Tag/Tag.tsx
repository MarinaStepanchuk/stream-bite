import styles from './Tag.module.scss';
import { ITagProps } from './types';

const Tag = ({ text, size = 'S', handleRemoveTag }: ITagProps) => {
  return (
    <div className={`${size === 'L' ? styles.bigTag : styles.smallTag} ${styles.tag}`}>
      <span>{text}</span>
      <div className={styles.closeButton} onClick={() => handleRemoveTag(text)}>
        <span className={styles.closeLine}></span>
        <span className={styles.closeLine}></span>
      </div>
    </div>
  );
};

export { Tag };
