import Cart from '../service/Cart';
import Movie from '../domain/Movie';

let cart: Cart;
let movie: Movie;

beforeEach(() => {
  cart = new Cart();
  movie = new Movie(1, 'Duna', 2021, ['США', 'Канада', 'Венгрия'], '«Час настал»', ['фантастика', 'боевик', 'драма', 'приключения'], '155 мин', 99);
});

test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('a new movie should be added', () => {
  cart.add(movie);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toEqual(movie);
});
