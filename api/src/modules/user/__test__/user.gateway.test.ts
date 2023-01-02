import { describe, expect, test, vi } from 'vitest';

import { User } from '../user.domain';
import * as driver from '../user.driver';
import * as gateway from '../user.gateway';
import { UserModel } from '../user.schema';

describe('gateway test', () => {
  test('get users', async () => {
    vi.spyOn(driver, 'getUserDriver').mockReturnValueOnce(
      Promise.resolve([
        {
          name: 'test',
          age: 23,
        } as UserModel,
      ])
    );

    const actual = await gateway.getUser('1');

    const expected = new User('test', 23);

    expect(actual).toStrictEqual([expected]);
  });
});
