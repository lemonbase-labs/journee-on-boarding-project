import { Navigate, Outlet } from 'react-router';
import { PATHS } from 'router/paths';

function PrivateRoutes() {
  const isLogin = false;

  return isLogin ? <Outlet /> : <Navigate to={PATHS.LOGIN} />;
}

export default PrivateRoutes;
