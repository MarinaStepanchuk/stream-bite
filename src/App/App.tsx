import { Route, Routes } from 'react-router-dom';
import { ROUTE } from '../constants/constants';
import { MainPage, SignInPage, SignUpPage, NotFoundPage } from '../pages';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={ROUTE.mainPage}>
        <Route path={ROUTE.signInPage} element={<SignInPage />} />
        <Route path={ROUTE.signUpPage} element={<SignUpPage />} />
        <Route path={ROUTE.mainPage} element={<MainPage />} />
        <Route path={ROUTE.errorPage} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { App };
