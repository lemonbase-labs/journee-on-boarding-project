import useRefreshTokenAPI from '@apis/auth/useRefreshTokenAPI';
import { message } from 'antd';
import useIsLogin from 'hooks/auth/useIsLogin';
import { useEffect } from 'react';

function AuthProvider() {
  const { onLogin } = useIsLogin();
  const { refreshAccessToken } = useRefreshTokenAPI({
    onSuccess: onLogin,
    onError: message.error,
  });

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');

    if (refreshToken) {
      refreshAccessToken({ refreshToken });
    }
  }, []);

  return null;
}

export default AuthProvider;
