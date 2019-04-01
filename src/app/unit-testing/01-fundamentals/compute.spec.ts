
import { compute } from './compute';

describe('compute', () => {
   it('should return 0 if the number is negative', () => {
     const result = compute(-1);
     expect(result).toBe(0);
   });

   it('should increment by 1 if the number is positive', () => {
     const result = compute(1);
     expect(result).toBe(2);
   });
});

