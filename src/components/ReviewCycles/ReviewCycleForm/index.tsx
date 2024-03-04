import { Button, Form, Input, Select, Space } from 'antd';
import { REVIEW_CYCLE_FORM_NAMES, REVIEW_CYCLE_RULES } from './constants';
import useMembers from '@apis/review/useMembers';
import { ReviewCycleRequest } from '@apis/review/type';
import { ReviewCycle } from '@apis/review/entities';

interface Props {
  onFinish: (values: ReviewCycleRequest) => void;
  onReset: () => void;
  initialValues?: {
    name: ReviewCycle['name'];
    reviewees: number[];
    title: ReviewCycle['question']['title'];
    description: ReviewCycle['question']['description'];
  };
  confirmButtonProps?: { text: string };
  deleteButtonProps?: { text: string; handleClick: () => void };
}

export default function ReviewCycleForm({
  onFinish,
  onReset,
  initialValues,
  confirmButtonProps = { text: '확인' },
  deleteButtonProps,
}: Props) {
  const { members, isLoading } = useMembers();

  return (
    <Form labelAlign="right" onFinish={onFinish} onReset={onReset} initialValues={initialValues}>
      <Form.Item label="리뷰 정책 이름" name={REVIEW_CYCLE_FORM_NAMES.name} rules={REVIEW_CYCLE_RULES.reviewCycleName}>
        <Input />
      </Form.Item>

      <Form.Item label="리뷰 받는 사람" name={REVIEW_CYCLE_FORM_NAMES.reviewees} rules={REVIEW_CYCLE_RULES.reviewees}>
        <Select
          mode="multiple"
          loading={isLoading}
          placeholder="리뷰 받는 사람을 선택해주세요."
          optionFilterProp="label"
          options={members?.map(m => ({ key: m.entityId, label: m.name, value: m.entityId }))}
        />
      </Form.Item>

      <Form.Item label="질문" name={REVIEW_CYCLE_FORM_NAMES.question.title} rules={REVIEW_CYCLE_RULES.questionTitle}>
        <Input />
      </Form.Item>

      <Form.Item
        label="질문 설명"
        name={REVIEW_CYCLE_FORM_NAMES.question.description}
        rules={REVIEW_CYCLE_RULES.questionDescription}
      >
        <Input />
      </Form.Item>
      <Form.Item style={{ textAlign: 'right' }}>
        <Space size={10}>
          <Button htmlType="reset">취소</Button>
          {deleteButtonProps && <Button onClick={deleteButtonProps.handleClick}>{deleteButtonProps.text}</Button>}
          <Button type="primary" htmlType="submit">
            {confirmButtonProps.text}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
