import { CommonList } from '../../components/CommonList/CommonList';
import { Author } from '../../components/Author/Author';
import { FriendsList } from '../../components/FriendsList/FriendsList';
import styles from './MainPage.module.scss';
import { useGetAllPostsQuery } from '../../redux/services/postsApi';
import { useEffect } from 'react';

const MainPage = (): JSX.Element => {
  const { data = [], isLoading, isError } = useGetAllPostsQuery();

  useEffect(() => {
    if (isError) {
      alert('Error');
    }
  }, [isError]);

  return (
    <>
      <section className={styles.usersPanel}>
        <Author />
        <FriendsList />
      </section>
      <section className={styles.postsList}>
        {isLoading && <p>Loading....</p>}
        <CommonList posts={data} />
      </section>
    </>
  );
};

export { MainPage };
