import { Avatar } from '../Avatar/Avatar';
import { IUser } from '../../common-types';
import styles from './UserDetailsSection.module.scss';
import Button from '../Button/Button';
import {
  useCheckSubscriptionQuery,
  useGetFeedsQuery,
  useGetSubscribersQuery,
  useSubscribeMutation,
  useUnsubscribeMutation,
} from '../../redux/services/userApi';
import { useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';

const UserDetailsSection = ({ author }: { author: IUser }) => {
  const user = useAppSelector((state) => state.userReducer.user);
  const { data: subscribersData } = useGetSubscribersQuery(author.id);
  const { data: feedsData } = useGetFeedsQuery(author.id);
  const { data: isSubscribed } = useCheckSubscriptionQuery({
    subscriberId: user!.id,
    authorId: author.id,
  });
  const [subscribe, { isLoading: isLoadingSubscribe, isError: subscribeError }] =
    useSubscribeMutation();
  const [unsubscribe, { isLoading: isLoadingUnsubscribe, isError: unsubscribeError }] =
    useUnsubscribeMutation();

  const handleSubscribe = async () => {
    await subscribe(author.id);
  };

  const handleUnSubscribe = async () => {
    await unsubscribe(author.id);
  };

  useEffect(() => {
    if (subscribeError || unsubscribeError) {
      alert('Something went wrong, please try again later.');
    }
  }, [subscribeError, unsubscribeError]);

  return (
    <section className={styles.userSection}>
      <Avatar userId={author.id} size="L" />
      <div className={styles.followSection}>
        <p className={styles.userName}>{author?.name}</p>
        {author.id !== user!.id && (
          <Button
            height="35px"
            cb={isSubscribed ? handleUnSubscribe : handleSubscribe}
            content={isSubscribed ? 'UNSUBSCRIBE' : 'SUBSCRIBE'}
            disabled={isLoadingSubscribe || isLoadingUnsubscribe}
          ></Button>
        )}
      </div>
      <div className={styles.subscriptionSection}>
        <div>
          <p>Subscriptions:</p>
          <p>{feedsData?.count || 0}</p>
        </div>
        <div className={styles.followers}>
          <p>Followers:</p>
          <p>{subscribersData?.count || 0}</p>
        </div>
      </div>
    </section>
  );
};

export { UserDetailsSection };
