import { sayHelloExtended } from '../index';

describe('@ely-my-project/core', () => {
  describe('sayHelloExtended', () => {
    it('should return back hello and name extended person', () => {
      const result = sayHelloExtended('Ely');
      expect(result).toEqual('Hello Ely extended person!');
    });
  });
});
