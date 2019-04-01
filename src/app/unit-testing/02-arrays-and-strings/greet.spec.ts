
import { greet } from './greet';

describe('greet function', () => {
    it('should include the name in the message', () => {
       const result = greet('saroj');
       expect(result).toContain('saroj');
    });
});
