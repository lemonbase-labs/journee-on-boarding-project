import { Button } from 'antd';
import { RoundContent } from 'components/common/RoundContent';
import useReviewCycleCreateModal from './ReviewCycleModals/useReviewCycleCreateModal';
import ReviewCycleTable from './ReviewCycleTable';
import useReviewCycleUpdateModal from './ReviewCycleModals/useReviewCycleUpdateModal';
import useSelectedReviewCycle from './useSelectedReviewCycle';

function ReviewCycles() {
  const { selectedReviewCycle } = useSelectedReviewCycle();

  const reviewCycleCreateModal = useReviewCycleCreateModal();
  const reviewCycleUpdateModal = useReviewCycleUpdateModal({
    entityId: selectedReviewCycle?.entityId,
  });

  function openReviewCycleCreateModal() {
    reviewCycleCreateModal.open();
  }

  function openReviewCycleUpdateModal() {
    reviewCycleUpdateModal.open();
  }

  return (
    <RoundContent>
      <RoundContent.Header
        title="리뷰 정책 목록"
        rightArea={
          <Button type="primary" size="large" onClick={openReviewCycleCreateModal}>
            리뷰 정책 생성
          </Button>
        }
      />
      <RoundContent.Body>
        <ReviewCycleTable onRowClick={openReviewCycleUpdateModal} />
      </RoundContent.Body>
      {reviewCycleCreateModal.render()}
      {reviewCycleUpdateModal.render()}
    </RoundContent>
  );
}

export default ReviewCycles;
