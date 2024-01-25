import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export type Person = {
  entityId: string;
  id: string;
  name: string;
  password: string;
  joinDate: Date;
};

export const personList = [
  {
    entityId: 1,
    id: 'journee@onboarding.com',
    name: 'journee',
    password: '123456',
    joinDate: faker.date.past(),
  },
  ...Array.from({ length: 50 }, (_, i) => ({
    entityId: uuidv4(),
    id: faker.internet.email(),
    name: faker.internet.userName(),
    password: faker.internet.password(),
    joinDate: faker.date.past(),
  })),
];

export const personMap = new Map(personList.map(person => [person.id, person]));
export const personIDMap = new Map(personList.map(person => [person.entityId, person]));
