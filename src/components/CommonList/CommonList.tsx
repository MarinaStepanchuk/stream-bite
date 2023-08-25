import { PostItem } from '../PostItem/PostItem';
import { IPost } from '../../common-types';
import styles from './CommonList.module.scss';

const CommonList = ({ posts }: { posts: IPost[] }): JSX.Element => {
  return (
    <ul className={styles.commonList}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export { CommonList };
