import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import NotFoundPage from 'pages/NotFoundPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../paths';

function PublicRoutes() {
  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={<LoginPage />} />
      <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />

      <Route path="*" element={<Navigate to={PATHS.NOT_FOUND} replace />} />
    </Routes>
  );
}

export default PublicRoutes;
