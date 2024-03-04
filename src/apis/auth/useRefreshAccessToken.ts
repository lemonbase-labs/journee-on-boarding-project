import { usePost } from '@apis/common/useMutation';
import { API_PATH } from '@apis/constants';
import { storeAccessToken } from '@apis/data';
import { get } from 'lodash';
import { RefreshRequest, Tokens } from './type';
import { PATHS } from 'router/paths';

export default function useRefreshAccessToken({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const { trigger, isMutating } = usePost<RefreshRequest, Pick<Tokens, 'accessToken'>>({
    endpoint: API_PATH.AUTH.REFRESH,
    onSuccess: res => {
      storeAccessToken(res.accessToken);
      onSuccess();
    },
    onError: err => {
      const errorMessage = get(err, 'response.data.error.message', '다시 로그인해주세요.');
      localStorage.removeItem('refreshToken');

      onError(errorMessage);
      setTimeout(() => {
        window.location.replace(PATHS.LOGIN);
      }, 500);
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
