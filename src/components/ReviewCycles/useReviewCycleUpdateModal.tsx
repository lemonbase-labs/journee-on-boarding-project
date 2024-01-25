import useModal from 'hooks/useModal';
import { Headline4 } from 'styles/typography';
import ReviewCycleForm from './ReviewCycleForm';
import { message } from 'antd';
import { useGetReviewCycles, useUpdateReviewCycle } from '@apis/review/useReviewCycles';
import useSelectedReviewCycle from './useSelectedReviewCycle';

function useReviewCycleUpdateModal({ entityId }: { entityId?: number }) {
  const modal = useModal();

  const { selectedReviewCycle } = useSelectedReviewCycle();
  const { refetchReviewCycle } = useGetReviewCycles();
  const { updateReviewCycle } = useUpdateReviewCycle({
    entityId,
    onSuccess: () => {
      message.success('리뷰 정책이 수정되었습니다.');
      modal.close();
      refetchReviewCycle();
    },
    onError: message.error,
  });

  function render() {
    return modal.render({
      title: <Headline4>리뷰 정책 수정하기</Headline4>,
      visible: modal.visible,
      children: (
        <ReviewCycleForm
          onFinish={updateReviewCycle}
          onReset={modal.close}
          confirmButtonProps={{ text: '수정하기' }}
          initialValues={{
            name: selectedReviewCycle?.name ?? '',
            reviewees: selectedReviewCycle?.reviewees?.map(r => r.entityId) ?? [],
            title: selectedReviewCycle?.question.title ?? '',
            description: selectedReviewCycle?.question.description ?? '',
          }}
        />
      ),
    });
  }

  return {
    render,
    open: modal.open,
    close: modal.close,
  };
}

export default useReviewCycleUpdateModal;
