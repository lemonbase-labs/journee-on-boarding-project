import { usePost } from '@apis/common/useMutation';
import { API_PATH } from '@apis/constants';
import { setAccessToken } from '@apis/data';
import { get } from 'lodash';
import { RefreshRequest, Tokens } from './type';

export default function useRefreshTokenAPI({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const { trigger, isMutating } = usePost<RefreshRequest, Pick<Tokens, 'accessToken'>>({
    endpoint: API_PATH.AUTH.REFRESH,
    onSuccess: res => {
      setAccessToken(res.accessToken);
      onSuccess();
    },
    onError: err => {
      const errorMessage = get(err, 'response.data.error.message', '다시 로그인해주세요.');
      localStorage.removeItem('refreshToken');

      onError(errorMessage);
    },
  });

  function refreshAccessToken({ refreshToken }: RefreshRequest) {
    trigger({ refreshToken });
  }

  return {
    refreshAccessToken,
    isLoading: isMutating,
  };
}
