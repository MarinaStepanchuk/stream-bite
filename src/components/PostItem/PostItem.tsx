import { getTagsString } from '../../utils/getTagsString';
import { IPost } from '../../common-types';
import styles from './PostItem.module.scss';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/constants';
import { useAppSelector } from '../../hooks/redux';

const PostItem = ({ post, withUserName }: { post: IPost; withUserName: boolean }): JSX.Element => {
  const { user, name, tags } = post;
  const activeUser = useAppSelector((state) => state.userReducer.user);

  return (
    <li className={styles.commonListItem}>
      <video
        src={`${import.meta.env.VITE_BASE_API_URL}/file/${user.id}/${name}`}
        muted
        controls
      ></video>
      {tags.length > 0 && <p className={styles.tagsList}>{getTagsString(tags)}</p>}
      <div className={`${!withUserName ? styles.rightPosition : ''} ${styles.details}`}>
        {withUserName && (
          <Link to={activeUser!.id === user.id ? ROUTE.profilePage : ROUTE.userByIdPage(user.id)}>
            <span>{user.name}</span>
          </Link>
        )}
        <span>
          {new Date(post.createdAt).toLocaleDateString('en-US', {
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
