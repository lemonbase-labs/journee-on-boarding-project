import { API_PATH } from '@apis/constants';
import { usePost } from '@apis/common/useMutation';
import { SignUpRequest, Tokens } from './type';
import { get } from 'lodash';
import { setAccessToken } from '@apis/data';

export default function useSignUp({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const { trigger, isMutating } = usePost<SignUpRequest, Tokens>({
    endpoint: API_PATH.AUTH.SIGN_UP,
    onSuccess: res => {
      setAccessToken(res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);

      onSuccess();
    },
    onError: err => {
      const errorMessage = get(
        err,
        'response.data.error.message',
        '회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.',
      );
      onError(errorMessage);
    },
  });

  function signUp({ email, password, name }: SignUpRequest) {
    trigger({ email, password, name });
  }

  return {
    signUp,
    isLoading: isMutating,
  };
}
