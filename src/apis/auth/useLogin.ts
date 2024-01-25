import { API_PATH } from '@apis/constants';
import { usePost } from '@apis/common/useMutation';
import { LoginRequest, Tokens } from './type';
import { get } from 'lodash';
import { setAccessToken } from '@apis/data';

export default function useLogin({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const { trigger, isMutating } = usePost<LoginRequest, Tokens>({
    endpoint: API_PATH.AUTH.LOGIN,
    onSuccess: res => {
      setAccessToken(res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);

      onSuccess();
    },
    onError: err => {
      const errorMessage = get(err, 'response.data.error.message', '로그인에 실패했습니다.');
      onError(errorMessage);
    },
  });

  function login({ email, password }: LoginRequest) {
    trigger({ email, password });
  }

  return {
    login,
    isLoading: isMutating,
  };
}
