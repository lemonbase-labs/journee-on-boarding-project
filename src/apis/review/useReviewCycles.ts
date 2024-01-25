import { API_PATH } from '@apis/constants';
import { useQuery } from '@apis/common/useQuery';
import { ReviewCycle } from './entities';
import { ReviewCycleRequest, ReviewCycleResponse } from './type';
import { useDelete, usePost, usePut } from '@apis/common/useMutation';
import { get } from 'lodash';

export function useGetReviewCycles() {
  const {
    data,
    isLoading,
    mutate: refetchReviewCycle,
  } = useQuery<{ reviewCycles: ReviewCycle[] }>(API_PATH.REVIEW_CYCLES);

  return {
    reviewCycles: data?.reviewCycles,
    isLoading,
    refetchReviewCycle,
  };
}

export function useCreateReviewCycle({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const { trigger, isMutating } = usePost<ReviewCycleRequest, ReviewCycleResponse>({
    endpoint: API_PATH.REVIEW_CYCLES,
    onSuccess: onSuccess,
    onError: err => {
      const errorMessage = get(err, 'response.data.error.message', '리뷰 사이클 생성에 실패했습니다.');
      onError(errorMessage);
    },
  });

  return {
    createReviewCycle: (reviewCycle: ReviewCycleRequest) => trigger(reviewCycle),
    isMutating,
  };
}

export function useUpdateReviewCycle({
  entityId,
  onSuccess,
  onError,
}: {
  entityId?: number;
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const { trigger, isMutating } = usePut<ReviewCycleRequest, ReviewCycleResponse>({
    endpoint: entityId ? `${API_PATH.REVIEW_CYCLES}/${entityId}` : null,
    onSuccess: onSuccess,
    onError: err => {
      console.log(err);
      const errorMessage = get(err, 'response.data.error.message', '리뷰 사이클 수정에 실패했습니다.');
      onError(errorMessage);
    },
  });

  return {
    updateReviewCycle: (reviewCycle: ReviewCycleRequest) => trigger(reviewCycle),
    isMutating,
  };
}

export function useDeleteReviewCycle({
  entityId,
  onSuccess,
  onError,
}: {
  entityId: number;
  onSuccess: () => void;
  onError: (message: string) => void;
}) {
  const { trigger, isMutating } = useDelete({
    endpoint: `${API_PATH.REVIEW_CYCLES}/${entityId}`,
    onSuccess,
    onError: err => {
      const errorMessage = get(err, 'response.data.error.message', '리뷰 사이클 삭제에 실패했습니다.');
      onError(errorMessage);
    },
  });

  return {
    deleteReviewCycle: trigger,
    isMutating,
  };
}
