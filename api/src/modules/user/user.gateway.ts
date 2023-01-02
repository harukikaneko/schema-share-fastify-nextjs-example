import { User } from './user.domain';
import * as driver from './user.driver';

export const getUser = async (id: string): Promise<User[]> => {
  const result = await driver.getUserDriver(id);
  const users = result.map((user) => new User(user.name, user.age));

  return users;
};
