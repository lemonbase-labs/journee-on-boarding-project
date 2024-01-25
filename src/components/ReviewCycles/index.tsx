import { Button } from 'antd';
import { RoundContent } from 'components/common/RoundContent';
import useReviewCycleCreateModal from './useReviewCycleCreateModal';
import ReviewCycleTable from './ReviewCycleTable';
import useReviewCycleUpdateModal from './useReviewCycleUpdateModal';
import useSelectedReviewCycle from './useSelectedReviewCycle';

function ReviewCycles() {
  const { selectedReviewCycle } = useSelectedReviewCycle();

  const ReviewCycleCreateModal = useReviewCycleCreateModal();
  const ReviewCycleUpdateModal = useReviewCycleUpdateModal({
    entityId: selectedReviewCycle?.entityId,
  });

  function openReviewCycleCreateModal() {
    ReviewCycleCreateModal.open();
  }

  function openReviewCycleUpdateModal() {
    ReviewCycleUpdateModal.open();
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
      {ReviewCycleCreateModal.render()}
      {ReviewCycleUpdateModal.render()}
    </RoundContent>
  );
}

export default ReviewCycles;
