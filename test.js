import test from 'ava';
import 'babel-register';
import Dollar from './dollar';

test('multiplication', (t) => {
  const five = new Dollar(5);
  five.times(2);
  t.is(five.amount, 10);
});
