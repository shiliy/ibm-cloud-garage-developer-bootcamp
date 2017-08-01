import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

let makeRentalFrom = (movie, daysRented) => {

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge() {
      return movie.getCharge(daysRented);
    },
    getFrequentRenterPoints () {
      return movie.getFrequentRenterPoints(daysRented);
    }
  };
};

export {makeRentalFrom};
