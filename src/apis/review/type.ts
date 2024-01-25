export type ReviewCycleRequest = {
  name: string;
  reviewees: number[];
  title: string;
  description: string;
};

export type ReviewCycleResponse = {
  entityId: number;
};
