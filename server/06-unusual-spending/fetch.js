import {currentMonth, priorMonth} from './months';
import {api} from './api';

const fetch = (userId) => {
  let result = [];
  const priorPayment = api(userId, priorMonth());
  const currPayment = api(userId, currentMonth());
  let row = '{month:' + currentMonth() + ','
  result.push({'month:'+ currentMonth(), 'payments:' + currPayment});
  result.push({'month:'+priorMonth(), 'payments:' + priorPayment});


  return result;
};

export {fetch};

