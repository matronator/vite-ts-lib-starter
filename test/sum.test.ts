import { assert, describe, it } from 'vitest';
import { sum } from '../src/index';

describe("construct", () => {
    it("should return 3", () => {
        assert.equal(sum(1, 2), 3);
    });
});
