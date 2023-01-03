import { FastifyRequest } from 'fastify';

import { User } from './user.domain';
import { Status, UserModel } from './user.driver';
import { UserCreateBody, UserParam, UserUpdateBody } from './user.schema';
import * as use_case from './user.usecase';

export const getUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
  }>
): Promise<User[]> => {
  const id = req.params.id;
  return use_case.getUser(id);
};

export const updateUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
    Body: UserUpdateBody;
  }>
): Promise<UserModel> => {
  const { id } = req.params;
  const name = req.body.name;
  return await use_case.updateUser(id, name);
};

export const createUserHandler = async (
  req: FastifyRequest<{
    Body: UserCreateBody;
  }>
): Promise<Status> => {
  const { name, age } = req.body;
  return await use_case.createUser(name, age);
};

export const deleteUserHandler = async (
  req: FastifyRequest<{
    Params: UserParam;
  }>
): Promise<Status>  => {
  const { id } = req.params;
  return await use_case.deleteUser(id);
};
