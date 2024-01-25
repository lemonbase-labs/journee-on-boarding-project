import { API_PATH } from '@apis/constants';
import { usePost } from '@apis/common/useMutation';
import { get } from 'lodash';

export default function useLogout({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const { trigger, isMutating } = usePost({
    endpoint: API_PATH.AUTH.LOGOUT,
    onSuccess,
    onError: err => {
      const errorMessage = get(err, 'response.data.error.message', '로그아웃에 실패했습니다.');
      onError(errorMessage);
    },
  });

  return {
    logout: trigger,
    isLoading: isMutating,
  };
}
