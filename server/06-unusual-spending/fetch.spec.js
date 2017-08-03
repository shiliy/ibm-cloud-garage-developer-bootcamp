import {replace, when, verify} from '../../test-helper';
import {currentMonth, priorMonth} from './months';
import {api} from './api';

describe.only('fetch', () => {

  it('canary test', () => {
    true.should.be.true();
  });

  it('fetch should return payments', () => {

    // setup, arrange
    const api = replace('./api').api;

    let fetch = require('./fetch').fetch;
    let months = replace('./months');

    //stimulation,act

    const currMonth = {};
    const priMonth = {};
    const currPayment = {};
    const priorPayment = {};

    when(months.priorMonth()).thenReturn(priMonth);
    when(months.currentMonth()).thenReturn(currMonth);
    when(api('user-id', currMonth)).thenReturn(currPayment);
    when(api('user-id', priorMonth)).thenReturn(priorPayment);

    let payments = [currPayment, priorPayment];
    payments.should.deepEqual([{}, {}]);

  });


  it('api should return current payment', () => {
    api('user-id', 8).should.deepEqual([{amount: 90, category: 'golf'},{amount: 490, category: 'dinner'}]);
  });

  it('api should return prior payment', () => {
    api('user-id', 7).should.deepEqual([{amount: 780, category: 'basketball'}, {amount: 290, category: 'bicycle'}]);
  });


  it('fetch(user-id) should return actual payments', () => {

    let fetch = require('./fetch').fetch;

    fetch('user-id').should.equal([{
          month: 8, payments: [{amount: 90, category: 'golf'}, {
            amount: 490, category: 'dinner'
          }]
        }, {
          month: 7, payments: [{amount: 780, category: 'basketball'}, {
            amount: 290, category: 'bicycle'
          }]
        }]);
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

