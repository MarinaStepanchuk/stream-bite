import { PostItem } from '../PostItem/PostItem';
import { IPost } from '../../common-types';
import styles from './CommonList.module.scss';

const CommonList = ({
  posts,
  withUserName,
}: {
  posts: IPost[];
  withUserName: boolean;
}): JSX.Element => {
  return (
    <ul className={styles.commonList}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} withUserName={withUserName} />
      ))}
    </ul>
  );
};

export { CommonList };
