import { Observable, of } from 'rxjs';

export default () => {
  _handmade();
  _of();
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
  of<string[]>('a', 'b', 'c').subscribe((value) => console.log(value));
}
