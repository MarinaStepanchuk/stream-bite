import { Avatar } from '../Avatar/Avatar';
import { useAppSelector } from '../../hooks/redux';
import { useGetFeedsQuery } from '../../redux/services/userApi';
import styles from './Feed.module.scss';

const Feed = () => {
  const user = useAppSelector((state) => state.userReducer.user);

  const { data: feedsData } = useGetFeedsQuery(user!.id);
  return (
    <ul className={styles.feed}>
      {feedsData?.subscriptions.map((subscription) => (
        <li key={subscription.id}>
          <Avatar userId={subscription.subscriber.id} size="M" />
          <span>{subscription.subscriber.name}</span>
        </li>
      ))}
    </ul>
  );
};

export { Feed };
