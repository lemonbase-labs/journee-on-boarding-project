import { Navigate } from 'react-router-dom';
import { PATHS } from 'router/paths';

function IntroPage() {
  const isLoginValue = false;

  if (isLoginValue) {
    return <Navigate to={PATHS.APP} replace />;
  }

  return <div>메인페이지</div>;
}

export default IntroPage;
