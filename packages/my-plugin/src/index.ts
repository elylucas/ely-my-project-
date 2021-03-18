import { sayHello } from '@ely-my-project/core';

export const sayHelloExtended = (name: string): string => {
  return sayHello(name) + ' extended person!!!';
};
