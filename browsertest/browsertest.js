import { Schema } from 'normalizr';
import { CALL_API, isRSAA } from '../src';

console.log('isRSAA: ', isRSAA({
  [CALL_API]: {
    endpoint: '',
    method: 'GET',
    types: ['REQUEST', 'SUCCESS', 'FAILURE'],
    body: {},
    headers: {},
    schema: new Schema('key'),
    bailout: false
  }
}));

console.log('isSchema: ', (new Schema('key')) instanceof Schema);
