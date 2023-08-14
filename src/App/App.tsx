import { Route, Routes } from 'react-router-dom';
import { ROUTE } from '../constants/constants';
import { MainPage, AuthPage, NotFoundPage } from '../pages';
import { Layout } from '../layout/Layout';
import { RequireAuth } from '../hoc/RequireAuth';

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
      </Route>
    </Routes>
  );
};

export { App };
