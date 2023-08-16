import { Author } from '../../components/Author/Author';
import { FriendsList } from '../../components/FriendsList/FriendsList';
import styles from './MainPage.module.scss';

const MainPage = (): JSX.Element => {
  return (
    <>
      <section className={styles.usersPanel}>
        <Author />
        <FriendsList />
      </section>
      <section>List</section>
    </>
  );
};

export { MainPage };
