import ReviewCyclePage from 'pages/ReviewCyclePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../paths';
import PrivateRoutes from 'router/components/PrivateRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route index element={<Navigate to={`${PATHS.APP}${PATHS.REVIEW_CYCLE}`} replace />} />
        <Route path={PATHS.REVIEW_CYCLE} element={<ReviewCyclePage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
