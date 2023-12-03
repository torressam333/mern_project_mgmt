import Client from '../models/Client';
import { faker } from '@faker-js/faker';

function createRandomClient(): Client {
  return {
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };
}

const CLIENTS: Client[] = faker.helpers.multiple(createRandomClient, {
  count: 10,
});

const seedClients = async () => {
  try {
    // Check if clients exist
    const count = await Client.countDocuments();
    console.log(count);

    if (count < 1) await Client.insertMany(CLIENTS);
  } catch (error) {
    throw new Error(`Problem with client seeder: ${error}`);
  }
};

export default seedClients;
