/*
Description

Definition
For this task, we will use the term "pseudo-binary" number, defining it as a positive decimal number, which consists of only 1s and/or 0s. 
So, the number 10110011 might look like a regular binary number but it is not.

Task
For every n∈N, there exist an infinite amount of positive integers M = {m1, m2, m3, …}, such that, for any mi ∈ M, the number n×mi results in 
a pseudo-binary number. Your task is to find any such number m based on the input n.

Examples
pseudo_binary(2)  # can return 5;          2 * 5  = 10
pseudo_binary(3)  # can return 37;         3 * 37 = 111
pseudo_binary(10) # can return 1;          10 * 1 = 10
pseudo_binary(9)  # can return 12 345 679; 9 * 12 345 679 = 111 111 111

Random tests
100 small random tests (1≤n≤100)
50 medium random tests (101≤n≤1000)
20 large random tests (1001≤n≤5000)

export function pseudoBinary(n: bigint) {
  for (let i = 1n; ; i++)
    if (/^1[01]*$/.test((n * i).toString()))
      return i;
}
*/

export function pseudoBinary(n: bigint): bigint {
  const visited = new Set<bigint>();
  const queue: { rem: bigint; str: string }[] = [];

  queue.push({ rem: 1n % n, str: "1" });

  while (queue.length > 0) {
    const { rem, str } = queue.shift()!;

    if (rem === 0n) {
      return BigInt(str) / n;
    }

    if (visited.has(rem)) {
      continue;
    }

    visited.add(rem);

    queue.push({
      rem: (rem * 10n) % n,
      str: str + "0"
    });

    queue.push({
      rem: (rem * 10n + 1n) % n,
      str: str + "1"
    });
  }

  return 0n;
}
