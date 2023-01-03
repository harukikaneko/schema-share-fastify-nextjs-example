import { describe, expect, test } from 'vitest';

import { User } from '../user.domain';

describe('user domain', () => {
    test('user constructor throw error negative number', () => {
        expect(() => new User('hoge', -1)).toThrow('0 以上の数値を入れて下さい')
    });
});