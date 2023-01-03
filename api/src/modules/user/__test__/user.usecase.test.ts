import { describe, expect, test, vi } from 'vitest';

import { User } from '../user.domain';
import * as driver from '../user.driver';
import * as gateway from '../user.gateway';
import * as usecase from '../user.usecase';

describe('test usecase', () => {
  test('get user usecase', async () => {
    vi.spyOn(gateway, 'getUser').mockReturnValueOnce(Promise.resolve([
      new User('test', 23),
    ]));

    const actual = await usecase.getUser('1');
    const expected = new User('test', 23);

    expect(actual).toStrictEqual([expected]);
  });

  test('create user usecase', async () => {
    vi.spyOn(driver, 'createUserDriver').mockReturnValueOnce(Promise.resolve({
        status: 'ok'
    } as driver.Status));

    const actual = await usecase.createUser('test', 23);
    expect(actual).toStrictEqual({ status: 'ok' });
  });

  test('update user usecase', async () => {
    vi.spyOn(driver, 'updateUserDriver').mockReturnValueOnce(Promise.resolve({
      name: 'update',
      age: 1,
    } as driver.UserModel));

    const actual = await usecase.updateUser('1', 'update');
    expect(actual).toStrictEqual({ name: 'update', age: 1 });
  });

  test('delete user usecase', async () => {
    vi.spyOn(driver, 'deleteUserDriver').mockReturnValueOnce(Promise.resolve({
      status: 'ok',
    } as driver.Status));
    const actual = await usecase.deleteUser('1');
    expect(actual).toStrictEqual({ status: 'ok' });
  });
});
