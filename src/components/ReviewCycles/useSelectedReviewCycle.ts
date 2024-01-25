import { ReviewCycle } from '@apis/review/entities';
import { atom, useAtom } from 'jotai';

const selectedReviewCycleAtom = atom<ReviewCycle | null>(null);

export default function useSelectedReviewCycle() {
  const [selectedReviewCycle, setSelectedReviewCycle] = useAtom(selectedReviewCycleAtom);

  function updateSelectedReviewCycle(reviewCycle: ReviewCycle) {
    setSelectedReviewCycle(reviewCycle);
  }

  function resetSelectedReviewCycle() {
    setSelectedReviewCycle(null);
  }

  return {
    selectedReviewCycle,
    updateSelectedReviewCycle,
    resetSelectedReviewCycle,
  };
}
