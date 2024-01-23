import { faker } from '@faker-js/faker';

const personList = [
  {
    entityId: 1,
    id: 'journee@onboarding.com',
    userName: 'journee',
    password: '123456',
    joinDate: faker.date.past(),
  },
  ...Array.from({ length: 50 }, (_, i) => ({
    entityId: i + 2,
    id: faker.internet.email(),
    userName: faker.internet.userName(),
    password: faker.internet.password(),
    joinDate: faker.date.past(),
  })),
];

export const personMap = new Map(personList.map(person => [person.id, person]));
