import { getTagsString } from '../../utils/getTagsString';
import { IPost } from '../../common-types';
import styles from './PostItem.module.scss';

const PostItem = ({ post }: { post: IPost }): JSX.Element => {
  const { userId, name, tags } = post;
  return (
    <li className={styles.commonListItem}>
      <video
        src={`${import.meta.env.VITE_BASE_API_URL}/file/${userId}/${name}`}
        muted
        controls
      ></video>
      {tags.length > 0 && <p className={styles.tagsList}>{getTagsString(tags)}</p>}
      <div className={styles.details}>
        <span>{post.userName}</span>
        <span>
          {new Date(post.createDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
    </li>
  );
};

export { PostItem };
