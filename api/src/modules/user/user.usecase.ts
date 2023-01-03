import { User } from './user.domain';
import {
  createUserDriver,
  deleteUserDriver,
  Status,
  updateUserDriver,
  UserModel,
} from './user.driver';
import * as gateway from './user.gateway';

const getUser = async (id: string): Promise<User[]> => {
  return await gateway.getUser(id);
};

const updateUser = async (id: string, name: string): Promise<UserModel> => {
  return await updateUserDriver(id, name);
};

const createUser = async (name: string, age: number): Promise<Status> => {
  return await createUserDriver(name, age);
};

const deleteUser = async (id: string): Promise<Status> => {
  return await deleteUserDriver(id);
};

export {
  getUser,
  updateUser,
  createUser,
  deleteUser
}