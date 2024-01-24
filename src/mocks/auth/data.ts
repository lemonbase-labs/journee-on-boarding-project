import { faker } from '@faker-js/faker';

export const personList = [
  {
    entityId: 1,
    id: 'journee@onboarding.com',
    name: 'journee',
    password: '123456',
    joinDate: faker.date.past(),
  },
  ...Array.from({ length: 50 }, (_, i) => ({
    entityId: i + 2,
    id: faker.internet.email(),
    name: faker.internet.userName(),
    password: faker.internet.password(),
    joinDate: faker.date.past(),
  })),
];

export const personMap = new Map(personList.map(person => [person.id, person]));
