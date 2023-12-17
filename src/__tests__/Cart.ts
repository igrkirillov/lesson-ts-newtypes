import Cart from "../Cart";
import Movie from "../Movie";

describe('Cart module', () => {
  test ('test add movie', () => {
    const movie1 = new Movie(1, "Мстители", 100000, 2021, "США", "Еху",
      ["Комедия", "Ужасы"], 127);
    const movie2 = new Movie(2, "Мстители2", 200000, 2023, "США", "Еху",
      ["Комедия", "Ужасы"], 90);
    const cart = new Cart();
    cart.addItem(movie1);
    cart.addItem(movie2);
    expect(cart.getAll()).toEqual([movie1, movie2]);
  });
  test ('test empty', () => {
    const cart = new Cart();
    expect(cart.getAll()).toEqual([]);
  });
})