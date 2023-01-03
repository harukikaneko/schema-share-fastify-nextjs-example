import { describe, expect, test, vi } from 'vitest';

import { User } from '../user.domain';
import * as driver from '../user.driver';
import * as gateway from '../user.gateway';

describe('gateway test', () => {
  test('get users', async () => {
    vi.spyOn(driver, 'getUserDriver').mockReturnValueOnce(
      Promise.resolve([
        {
          name: 'test',
          age: 23,
        } as driver.UserModel,
      ])
    );

    const actual = await gateway.getUser('1');

    const expected = new User('test', 23);

    expect(actual).toStrictEqual([expected]);
  });
});
