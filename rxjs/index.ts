import { Observable, interval } from 'rxjs';

export default () => {
  const observable = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout(() => subscriber.next('Ben'), 1000);
    setTimeout(() => subscriber.next('Charlie'), 2000);
    setTimeout(() => subscriber.complete(), 3500);
  });

  const observer = {
    next: (value) => console.log(value),
  };

  const subscription = observable.subscribe({
    next: console.log,
    complete: () => console.warn(123),
    error: console.error,
  });

  setTimeout(() => subscription.unsubscribe(), 4000);
};
