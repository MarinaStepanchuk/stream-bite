import { CommonList } from '../../components/CommonList/CommonList';
import { Author } from '../../components/Author/Author';
import { Feed } from '../../components/Feed/Feed';
import styles from './MainPage.module.scss';
import { useGetAllPostsQuery } from '../../redux/services/postsApi';
import { useEffect } from 'react';

const MainPage = (): JSX.Element => {
  const { data = [], isLoading, isError } = useGetAllPostsQuery();

  useEffect(() => {
    if (isError) {
      alert('Something went wrong, please try again later.');
    }
  }, [isError]);

  return (
    <>
      <section className={styles.usersPanel}>
        <Author />
        <Feed />
      </section>
      <section className={styles.postsList}>
        {isLoading && <p>Loading....</p>}
        <CommonList posts={data} withUserName={true} />
      </section>
    </>
  );
};

export { MainPage };
