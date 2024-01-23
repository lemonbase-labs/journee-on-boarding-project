import useIsLogin from 'hooks/auth/useIsLogin';
import { Navigate, Outlet } from 'react-router';
import { PATHS } from 'router/paths';

function PrivateRoutes() {
  const { isLogin } = useIsLogin();

  return isLogin ? <Outlet /> : <Navigate to={PATHS.LOGIN} />;
}

export default PrivateRoutes;
