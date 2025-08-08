/*
Description

One very useful feature of JavaScript (and thus derived languages like TypeScript) are generator functions. 
They allow you to easily create an iterable object for arbitrary purposes.

Unlike arrays these generators don't have to contain their entire contents, which makes them suitable for 
handling infinite sequences, or allows saving on memory if your particular usecase does not have to care 
about the entirety of some sequence of things.

In this Kata we will implement a few generic generator functions for a couple of tasks that crop up when 
dealing with lists and streams of data.

1: range(start, stop, step)
start, stop and step are numbers.
Count upwards from start until stop, with the given step.
step can be assumed to always be positive.
step is an optional argument; If it is not specified, behave as if it is 1.
stop is an optional argument; If it is not specified, count upwards forever.
start is an optional argument; If it is not specified, count starting from 0.

2: generate(start, iterate, continues)
start can be anything.
iterate is a function, that returns the next element of the sequence if given the current element of the sequence.
continues is a function, that returns false if the given returned value of iterate is past the end of the sequence.
Generate a sequence of arbitrary values using the provided starting point and iteration function.
E.g. generate(1, i => i*2, i => i<10) results in the sequence [1, 2, 4, 8]
continues is an optional argument; If it is not specified, the sequence is endless.
if continues(start) is false, the generated sequence is empty.
be prepared to handle null or undefined amongst the generated values

3: delta(sequence, deltaFunction, start)
sequence is an iterable of arbitrary values.
delta is a function accepting a pair of values from sequence.
start is a value to be passed to delta as the element before the first element of sequence.
Generate a sequence of the return values of delta when called for every element of sequence and their precursor 
element.
E.g. delta([1, 3, 2], (a, b) => b-a, 0) results in the sequence [1, 2, -1]
sequence will never contain undefined (but may contain null)
start is an optional argument; If it is not specified, the first element of the resulting sequence will be 
delta(sequence[0], sequence[1]). If start is specified its value will never be undefined.

4: zip(sequence1, sequence2)
sequence1 and sequence2 are iterables of arbitrary values.
Generate a sequence of arrays containing the elements of the given sequences.
Specifically zip(sequence1, sequence2)[x] = [sequence1[x], sequence2[x]].
If any of the given sequences ends, the sequence you are generating ends as well.
In particular this means that if any input sequence has no elements, the resulting sequence has no elements either.
*/

export function* range(
  start: number = 0,
  stop?: number,
  step: number = 1
): Generator<number> {
  let current = start;
  while (stop === undefined || current < stop) {
    yield current;
    current += step;
  }
}

export function* generate<T>(
  start: T,
  iterate: (e: T) => T,
  continues?: (e: T) => boolean
): Generator<T> {
  let current = start;
  while (continues === undefined || continues(current)) {
    yield current;
    current = iterate(current);
  }
}

export function* delta<T, D>(
  sequence: Iterable<T>,
  delta: (a: T, b: T) => D,
  start?: T
): Generator<D> {
  let iterator = sequence[Symbol.iterator]();
  let prev = start !== undefined ? start : iterator.next().value;
  let next = iterator.next();
  while (!next.done) {
    yield delta(prev, next.value);
    prev = next.value;
    next = iterator.next();
  }
}

export function* zip<T, U>(
  sequence1: Iterable<T>,
  sequence2: Iterable<U>
): Generator<[T, U]> {
  let iter1 = sequence1[Symbol.iterator]();
  let iter2 = sequence2[Symbol.iterator]();
  while (true) {
    let next1 = iter1.next();
    let next2 = iter2.next();
    if (next1.done || next2.done) {
      break;
    }
    yield [next1.value, next2.value];
  }
}
