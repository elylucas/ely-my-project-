import { sayHello } from '../index';

describe('@ely-my-project/core', () => {
  describe('sayHello', () => {
    it('should return back hello and name', () => {
      const result = sayHello('Ely');
      expect(result).toEqual('Hello Ely');
    });
  });
});
