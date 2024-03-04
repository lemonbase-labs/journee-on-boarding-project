import { Rule } from 'antd/lib/form';

export const REVIEW_CYCLE_FORM_NAMES = {
  name: 'name',
  reviewees: 'reviewees',
  question: {
    title: 'title',
    description: 'description',
  },
} as const;

export const REVIEW_CYCLE_RULES: Record<string, Rule[]> = {
  reviewCycleName: [{ required: true, message: '리뷰 정책 이름을 입력하세요.' }],
  reviewees: [{ required: true, message: '리뷰 받는 사람을 선택하세요.' }],
  questionTitle: [{ required: true, message: '질문 제목을 입력하세요.' }],
  questionDescription: [{ required: true, message: '질문 설명을 입력하세요.' }],
};
