import { Member, ReviewCycle } from './entities';

export type ReviewCycleRequest = {
  name: ReviewCycle['name'];
  reviewees: Member['entityId'][];
  title: string;
  description: string;
};

export type ReviewCycleResponse = Pick<ReviewCycle, 'entityId'>;
