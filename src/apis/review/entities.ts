export type Member = {
  entityId: number;
  name: string;
};

export type ReviewCycle = {
  entityId: number;
  name: string;
  creator: string;
  reviewees: Member[];
  question: {
    title: string;
    description: string;
  };
};
