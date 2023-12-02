import Client from '../models/Client';
import { randomBytes } from 'crypto';

/**
 *
 * @param length
 * @returns
 */
function generateRandomString(length: number): string {
  return randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

/**
 *
 * @param numClients
 * @param nameLength
 */
async function seedClients(
  numClients: number,
  nameLength: number = 10
): Promise<void> {
  const clients = Array.from({ length: numClients }, () => ({
    name: generateRandomString(nameLength),
    email: `${generateRandomString(5)}@example.com`,
    phone: `(123) ${Math.floor(Math.random() * 1000)}-${Math.floor(
      Math.random() * 10000
    )}`,
  }));

  try {
    // Use bulk insertion
    await Client.insertMany(clients);
    console.log(`${numClients} clients successfully created!`);
  } catch (error) {
    console.error(error);
  }
}

export default seedClients;
