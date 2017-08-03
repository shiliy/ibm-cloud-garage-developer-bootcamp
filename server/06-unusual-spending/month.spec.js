import {currentMonth, priorMonth} from "./months";

describe('months', () => {

  it('canary test', () => {
    true.should.be.true();
  });

  it('months.current() should return 8', () => {
    currentMonth().should.equal(8);
  });
  it('months.prior() should return 7', () => {
    priorMonth().should.equal(7);
  });

});
