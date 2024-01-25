import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './components/Root';
import { PATHS } from './paths';
import AppRoutes from './routes/AppRoutes';
import PublicRoutes from './routes/PublicRoutes';
import IntroPage from 'pages/IntroPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.ROOT} element={<Root />}>
      <Route index element={<IntroPage />} />
      <Route path={`${PATHS.ROOT}/*`} element={<PublicRoutes />} />
      <Route path={`${PATHS.APP}/*`} element={<AppRoutes />} />
    </Route>,
  ),
);
