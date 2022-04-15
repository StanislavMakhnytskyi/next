import { from, Observable, of, take } from 'rxjs';

export default () => {
  _handmade();
  _of();
  _fromArray();
  _fromPromise();
  _fromGenerator();
};

function _handmade(): void {
  const observable = new Observable<number>((subscriber) => {
    let counter = 1;

    const interval = setInterval(() => subscriber.next(counter++), 1100);

    return () => clearInterval(interval);
  });

  const observer = (value) => console.log(value);

  const subscription = observable.subscribe(observer);

  setTimeout(() => subscription.unsubscribe(), 4000);
}

function _of(): void {
  of<string[]>('of a', 'of b', 'of c').subscribe((value) => console.log(value));
}

function _fromArray(): void {
  from<string[]>(['from a', 'from b', 'from c']).subscribe((value) =>
    console.log(value)
  );
}

function _fromPromise(): void {
  from<Promise<string>>(Promise.resolve('from resolved promise')).subscribe(
    (value) => console.log(value)
  );
}

function _fromGenerator(): void {
  function* generateDoubles(seed) {
    let i = seed;
    while (true) {
      yield i;
      i = 2 * i;
    }
  }

  const iterator = generateDoubles(2);
  const result = from(iterator).pipe(take(10));

  result.subscribe((x) => console.log(x));
}
