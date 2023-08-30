import styles from './Avatar.module.scss';
import photo from '../../assets/avatar.png';
import { IAvatarProps } from './type';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/constants';

const Avatar = ({ userId, avatarUrl = photo, size = 'M' }: IAvatarProps) => {
  return (
    <Link to={ROUTE.userByIdPage(userId)}>
      <div
        className={`${
          size === 'L' ? styles.bigAvatar : size === 'M' ? styles.mediumAvatar : styles.smallAvatar
        } ${styles.userAvatar}`}
      >
        <img className={styles.photo} src={avatarUrl} alt="avatar" />
      </div>
    </Link>
  );
};

export { Avatar };
