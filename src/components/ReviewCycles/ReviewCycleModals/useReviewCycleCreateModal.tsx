import useModal from 'hooks/useModal';
import { Headline4 } from 'styles/typography';
import ReviewCycleForm from '../ReviewCycleForm';
import { message } from 'antd';
import { useCreateReviewCycle, useGetReviewCycles } from '@apis/review/useReviewCycles';

function useReviewCycleCreateModal() {
  const modal = useModal();

  const { refetchReviewCycle } = useGetReviewCycles();
  const { createReviewCycle } = useCreateReviewCycle({
    onSuccess: () => {
      message.success('새로운 리뷰 정책을 생성했어요.');
      modal.close();
      refetchReviewCycle();
    },
    onError: message.error,
  });

  function render() {
    return modal.render({
      title: <Headline4>새로운 리뷰 정책 만들기</Headline4>,
      visible: modal.visible,
      children: (
        <ReviewCycleForm onFinish={createReviewCycle} onReset={modal.close} confirmButtonProps={{ text: '생성하기' }} />
      ),
    });
  }

  return {
    render,
    open: modal.open,
    close: modal.close,
  };
}

export default useReviewCycleCreateModal;
