import { DeleteOutlined } from '@ant-design/icons';
import { useDeleteReviewCycle, useGetReviewCycles } from '@apis/review/useReviewCycles';
import { message } from 'antd';

function DeleteButton({ entityId }: { entityId: number }) {
  const { refetchReviewCycle } = useGetReviewCycles();
  const { deleteReviewCycle } = useDeleteReviewCycle({
    entityId,
    onSuccess: refetchReviewCycle,
    onError: message.error,
  });

  return (
    <DeleteOutlined
      onClick={e => {
        e.stopPropagation();
        deleteReviewCycle();
      }}
    />
  );
}

export default DeleteButton;
