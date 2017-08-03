import {replace, when, verify} from '../../test-helper';

describe('unusual spending', () => {


  it('canary test', () => {
    true.should.be.true();
  });


  it('orchestrate fetch, categorize and email', () => {
    // setup, arrange
    const userId = {};
    const payments = {};
    const categorizedPayments = {};
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    let unusualSpending;


    when(fetch(userId)).thenReturn(payments);

    when(categorize(payments)).thenReturn(categorizedPayments);
    unusualSpending = require('./unusual-spending').unusualSpending;

    //stimulation,act
    unusualSpending(userId);
    // assert, test
    verify(email(userId, categorizedPayments));
  });

});
