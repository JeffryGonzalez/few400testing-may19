import { add, getFavoriteForeignFilm, returnsAnObservable } from './misc';
import { first, map, filter, tap } from 'rxjs/operators';

describe('a synchronous call', () => {
  it('can add two numbers together', () => {
    const answer = add(2, 3);
    expect(answer).toBe(5);
  });
});

describe('promises', () => {
  it('can be tricky', (done) => {
    const result = getFavoriteForeignFilm();

    // console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL);
    result.then(a => {
      expect(a).toBe('Harakiri');
      done();
    });
  });

  it('using await', async () => {
    const result = await getFavoriteForeignFilm();
    expect(result).toBe('Harakiri');
  });


});

describe('using promises', () => {
  it('using the done thing', (done) => {
    returnsAnObservable().subscribe(r => {
      expect(r).toBe('Eggs');
      done();
    });
  });

  it('using async await', async () => {
    // const meal = await returnsAnObservable().pipe(
    //   first(),
    //   tap(a => console.log(`Got a ${a} in the pipe!`)),
    //   map(a => a.toUpperCase())
    // ).toPromise();

    const meal = await returnsAnObservable().toPromise();
    // returnsAnObservable()
    //   .first()
    //   .map(a=> a.toUpperCase())
    //   .toPromise()

    expect(meal).toBe('Eggs');
  });
});
