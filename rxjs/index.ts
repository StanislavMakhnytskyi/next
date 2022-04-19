import {
  from,
  fromEvent,
  Observable,
  of,
  take,
  forkJoin,
  timer,
  map,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

export default () => {
  // _handmade();
  // _of();
  // _fromArray();
  // _fromPromise();
  // _fromGenerator();
  // _fromEvent();
  // _formJoin();
  _map();
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

function _fromEvent(): void {
  const triggerButton = document.querySelector('.unique-button-classname');

  fromEvent<MouseEvent>(triggerButton, 'click').subscribe((event) =>
    console.log(event.type, event.x, event.y)
  );
}

function _formJoin() {
  const observable = forkJoin<any>({
    foo: of(1, 2, 3),
    bar: Promise.resolve(8),
    baz: timer(4000),
  });
  observable.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed!'),
  });
}

function _map() {
  const API_BASE_URL = 'https://random-data-api.com';
  const randomFirstName$ = ajax<any>(
    `${API_BASE_URL}/api/name/random_name`
  ).pipe(map((ajaxResponse) => ajaxResponse.response.first_name));

  const randomCapital$ = ajax<any>(
    `${API_BASE_URL}/api/nation/random_nation`
  ).pipe(map((ajaxResponse) => ajaxResponse.response.capital));

  const randomDish$ = ajax<any>(`${API_BASE_URL}/api/food/random_food`).pipe(
    map((ajaxResponse) => ajaxResponse.response.dish)
  );

  forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
    ([firstName, capital, dish]) =>
      console.log(`${firstName} is from ${capital} and likes to eat ${dish}.`)
  );
}
