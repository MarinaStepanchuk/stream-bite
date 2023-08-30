import styles from './PostTagSection.module.scss';
import { InputWithButton } from '../../InputWithButton/InputWithButton';
import { Tag } from '../../Tag/Tag';

const PostTagSection = ({
  tags,
  handleAddTag,
  handleRemoveTag,
}: {
  tags: string[];
  handleAddTag: (text: string) => void;
  handleRemoveTag: (text: string) => void;
}) => {
  return (
    <div className={styles.tagSection}>
      <InputWithButton cb={handleAddTag} />
      <div className={styles.tagList}>
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} handleRemoveTag={handleRemoveTag} />
        ))}
      </div>
    </div>
  );
};

export { PostTagSection };
