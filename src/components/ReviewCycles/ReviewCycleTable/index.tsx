import { Table } from 'antd';
import { ReviewCycle } from '@apis/review/entities';
import { ColumnsType } from 'antd/lib/table';
import { useGetReviewCycles } from '@apis/review/useReviewCycles';
import useSelectedReviewCycle from '../useSelectedReviewCycle';
import { formatDate } from 'utils';
import { Body1 } from 'styles/typography';
import DeleteButton from './DeleteButton';

function ReviewCycleTable({ onRowClick }: { onRowClick: () => void }) {
  const { reviewCycles } = useGetReviewCycles();
  const { updateSelectedReviewCycle } = useSelectedReviewCycle();

  const columns: ColumnsType<ReviewCycle> = [
    {
      title: <Body1>리뷰 정책 이름</Body1>,
      dataIndex: 'name',
      render: (name: string) => <Body1>{name}</Body1>,
    },
    {
      title: '생성자',
      dataIndex: 'creator',
    },
    {
      title: '최근 수정된 날짜',
      dataIndex: 'updatedAt',
      render: (updatedAt: string) => formatDate(updatedAt),
    },
    {
      title: '삭제',
      dataIndex: 'entityId',
      render: (entityId: number) => <DeleteButton entityId={entityId} />,
    },
  ];

  return (
    <Table
      rowKey={reviewCycle => reviewCycle.entityId}
      columns={columns}
      dataSource={reviewCycles}
      pagination={{ pageSize: 10 }}
      style={{ width: '90vw' }}
      onRow={reviewCycle => ({
        onClick: () => {
          updateSelectedReviewCycle(reviewCycle);
          onRowClick();
        },
      })}
    />
  );
}

export default ReviewCycleTable;
