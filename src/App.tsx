import { Global } from '@emotion/react';
import { GlobalStyle } from 'styles/GlobalStyle';
import GlobalError from 'components/common/GlobalError';
import GlobalLoading from 'components/common/GlobalLoading';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import 'antd/dist/antd.css';
import AuthProvider from 'router/components/AuthProvider';

function App() {
  return (
    <ErrorBoundary fallback={<GlobalError />}>
      <Global styles={GlobalStyle} />
      <AuthProvider />
      <Suspense fallback={<GlobalLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
