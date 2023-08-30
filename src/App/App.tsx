import { Route, Routes } from 'react-router-dom';
import { ROUTE } from '../constants/constants';
import { MainPage, AuthPage, NotFoundPage } from '../pages';
import { Layout } from '../layout/Layout';
import { RequireAuth } from '../hoc/RequireAuth';
import { SearchPage } from '../pages/Search/SearchPage';
import { ProfilePage } from '../pages/Profile/ProfilePage';
import { UserPage } from '../pages/UserPage/UserPage';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={ROUTE.mainPage} element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          }
        />
        <Route path={ROUTE.loginPage} element={<AuthPage />} />
        <Route path={ROUTE.errorPage} element={<NotFoundPage />} />
        <Route path={ROUTE.searchPage} element={<SearchPage />} />
        <Route path={ROUTE.profilePage} element={<ProfilePage />} />
        <Route path={`${ROUTE.userPage}/:id`} element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export { App };
