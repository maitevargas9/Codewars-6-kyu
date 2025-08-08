/*
Description

Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for 
odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

For example:
evenOrOdd(2); //'Even'
evenOrOdd[2]; //'Even'
evenOrOdd(7); //'Odd'
evenOrOdd[7]; //'Odd'
*/

function evenOrOdd(n: number) {
  return n % 2 === 0 ? "Even" : "Odd";
}

const handler: ProxyHandler<typeof evenOrOdd> = {
  get: function (target: typeof evenOrOdd, prop: string | symbol) {
    if (typeof prop === "string" && !isNaN(Number(prop))) {
      return target(Number(prop));
    }
    return target[prop as keyof typeof evenOrOdd];
  }
};

const evenOrOddProxy = new Proxy(evenOrOdd, handler);

export { evenOrOddProxy as evenOrOdd };
