import { faker } from '@faker-js/faker';
import { personList } from '@mocks/auth/data';
import { v4 as uuidv4 } from 'uuid';

const personCount = personList.length;

export const reviewCycleList = Array.from({ length: 10 }, (_, i) => ({
  entityId: uuidv4(),
  name: faker.lorem.words(),
  creator: personList[Math.floor(Math.random() * personCount)],
  reviewees: shuffleArray(personList).slice(0, Math.floor(Math.random() * personCount) + 1),
  question: {
    title: faker.lorem.words(),
    description: faker.lorem.sentence(),
  },
  updatedAt: faker.date.past().toISOString(),
}));

function shuffleArray<T>(array: T[]) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
