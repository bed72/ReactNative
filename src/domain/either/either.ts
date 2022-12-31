export type Either<L, R> = Left<L> | Right<R>;
export type Left<T> = { tag: 'left'; value: T };
export type Right<T> = { tag: 'right'; value: T };

export const Right = <T>(value: T): Right<T> => ({
  tag: 'right',
  value,
});

export const Left = <T>(value: T): Left<T> => ({
  tag: 'left',
  value,
});

export const isRight = <L, R>(input: Either<L, R>): input is Right<R> =>
  input.tag === 'right';

export const isLeft = <L, R>(input: Either<L, R>): input is Left<L> =>
  input.tag === 'left';

export const fold = <T, S, L, R>(
  input: Either<L, R>,
  left: (left: L) => T,
  right: (right: R) => S,
) => {
  switch (input.tag) {
    case 'left':
      return left(input.value);
    case 'right':
      return right(input.value);
  }
};
