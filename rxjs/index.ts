import { Observable, interval } from 'rxjs';

export default () => {
  const observable = new Observable<number>((subscriber) => {
    let counter = 1;

    const interval = setInterval(() => subscriber.next(counter++), 1100);

    return () => clearInterval(interval);
  });

  const observer = (value) => console.log(value);

  const subscription = observable.subscribe(observer);

  setTimeout(() => subscription.unsubscribe(), 4000);
};
