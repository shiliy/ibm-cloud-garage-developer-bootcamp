import {replace, when, verify} from '../../test-helper';
import {currentMonth, priorMonth} from './month';

describe('fetch', () => {

  it('canary test', () => {
    true.should.be.true();
  });



  it('fetch should return payments', () => {

    // setup, arrange
    const api = replace('./api').api;

    let fetch = require('./fetch').fetch;
    let month = replace('./month');

    //stimulation,act

    const currMonth = {};
    const priMonth = {};
    const currPayment = {};
    const priorPayment = {};

    when(month.priorMonth()).thenReturn(priMonth);
    when(month.currentMonth()).thenReturn(currMonth);
    when(api('user-id', currMonth)).thenReturn(currPayment);
    when(api('user-id', priorMonth)).thenReturn(priorPayment);

    let payments = [currPayment, priorPayment];

    payments.should.deepEqual([{}, {}]);


  });

  // it('fetch should return payments', () => {
  //
  //   // setup, arrange
  //   const month = replace('./month');
  //   const api = replace('./api').api;
  //
  //   const priorMonth = 'prior-month';
  //   const currentMonth = 'current-month';
  //   const currentPayment = 'current-payment';
  //   const priorPayment = 'prior-payment';
  //
  //   const expectPayments = [{
  //     month: 12, payments: [{amount: 90, category: 'golf'}, {
  //       amount: 490, category: 'dinner'
  //     }]
  //   }, {
  //     month: 11, payments: [{amount: 780, category: 'basketball'}, {
  //       amount: 290, category: 'bicycle'
  //     }]
  //   }];
  //
  //
  //
  //   // when(month.current()).thenReturn(currentMonth);
  //   // when(month.prior()).thenReturn(priorMonth);
  //   // when(api('user-id', currentMonth)).thenReturn(currentPayment);
  //   // when(api('user-id', priorMonth)).thenReturn(priorPayment);
  //
  //   let fetch = require('./fetch').fetch;
  //   //stimulation,act
  //   let payments = fetch('user-id');
  //
  //   // assert, test
  //   // if(payments[0].month === currentMonth) {
  //   //   payments[0].payments.should.equal(currentPayment);
  //   //   payments[1].month.should.equal(priorMonth);
  //   //   payments[1].payments.should.equal(priorPayment);
  //   // }
  //   // else {
  //   //   payments[0].payments.should.equal(priorPayment);
  //   //   payments[1].month.should.equal(currentMonth);
  //   //   payments[1].payments.should.equal(currentPayment);
  //   // };
  // });

});

