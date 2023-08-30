import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './ProfilePage.module.scss';
import { useGetAllUserPostsQuery } from '../../redux/services/postsApi';
import { UserDetailsSection } from '../../components/UserDetailsSection/UserDetailsSection';
import { CommonList } from '../../components/CommonList/CommonList';

const ProfilePage = (): JSX.Element => {
  const user = useAppSelector((state) => state.userReducer.user);

  const {
    data = { posts: [], count: 0 },
    isLoading: isPostLoading,
    isError: isPostsError,
  } = useGetAllUserPostsQuery(user!.id);

  useEffect(() => {
    if (isPostsError) {
      alert('Something went wrong, please try again later.');
    }
  }, [isPostsError]);

  {
    return isPostLoading ? (
      <p>Loading....</p>
    ) : (
      <>
        {user && <UserDetailsSection author={user} />}
        <section className={styles.userSection}>
          <CommonList posts={data.posts} withUserName={false} />
        </section>
      </>
    );
  }
};

export { ProfilePage };
