import { User } from './user.domain';
import {
  createUserDriver,
  deleteUserDriver,
  updateUserDriver,
} from './user.driver';
import * as gateway from './user.gateway'; 

export const userUseCase = () => {
  const getUser = async (id: string): Promise<User[]> => {
    return await gateway.getUser(id);
  };

  const updateUser = async (id: string, name: string) => {
    return await updateUserDriver(id, name);
  };
  const createUser = async (name: string, age: number) => {
    return await createUserDriver(name, age);
  };
  const deleteUser = async (id: string) => {
    return await deleteUserDriver(id);
  };

  return {
    getUser,
    updateUser,
    createUser,
    deleteUser,
  };
};