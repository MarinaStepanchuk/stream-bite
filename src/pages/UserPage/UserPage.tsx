import { useEffect } from 'react';
import { useGetAllUserPostsQuery } from '../../redux/services/postsApi';
import styles from './UserPage.module.scss';
import { useParams } from 'react-router-dom';
import { CommonList } from '../../components/CommonList/CommonList';
import { UserDetailsSection } from '../../components/UserDetailsSection/UserDetailsSection';
import { useGetUserByIdQuery } from '../../redux/services/userApi';

const UserPage = (): JSX.Element => {
  const { id } = useParams();
  const {
    data = { posts: [], count: 0 },
    isLoading: isPostLoading,
    isError: isPostsError,
  } = useGetAllUserPostsQuery(+(id as string));
  const {
    data: user,
    isLoading: isUserLoading,
    isError: IsUserError,
  } = useGetUserByIdQuery(+(id as string));

  useEffect(() => {
    if (isPostsError && IsUserError) {
      alert('Something went wrong, please try again later.');
    }
  }, [isPostsError, IsUserError]);

  {
    return isPostLoading || isUserLoading ? (
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

export { UserPage };
