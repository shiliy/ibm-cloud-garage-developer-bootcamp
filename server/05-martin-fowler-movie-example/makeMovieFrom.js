import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

const moviePriceCode = {};

moviePriceCode[REGULAR] = (daysRented) => {
    let total = 2;
    if (daysRented > 2) total += (daysRented - 2) * 1.5;
    return total;
};

moviePriceCode[NEW_RELEASE] = (daysRented) => {
        let total = 0;
        total += daysRented * 3;
        return total;
};

moviePriceCode[CHILDRENS] = (daysRented) => {
  let total = 1.5;
  if (daysRented > 3) {
    total += (daysRented - 3) * 1.5;
  }
  return total;
};

let makeMovieFrom = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  return {
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; },
    getFrequentRenterPoints (daysRented) {
      // add bonus for a two day new release rental
      if ((priceCode === NEW_RELEASE) && daysRented > 1) return 2;
      return 1;
    },
    getCharge (daysRented) {
      let total = 0;

      const oneMoviePrice = moviePriceCode[priceCode];
      if (oneMoviePrice)
        total += oneMoviePrice(daysRented);
      return total;
    }
  };
};

export {makeMovieFrom};
