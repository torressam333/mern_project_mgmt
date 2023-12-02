import Client from '../models/Client';
import faker from 'faker';

async function seedClients(numClients: number): Promise<void> {
  const clients = Array.from({ length: numClients }, () => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
  }));

  try {
    // Use bulk insertion
    await Client.insertMany(clients);
    console.log(`${numClients} clients successfully created!`);
  } catch (error) {
    console.error(error);
  }
}

// Example usage:
seedClients(100);

export default seedClients;
