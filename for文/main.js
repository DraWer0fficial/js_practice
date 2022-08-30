'use strict';

for (let i = 1; i <= 10; i++ ) {
  if (i % 2 === 0) {
    console.log(`${i}は2の倍数です`);
  } else if (i % 7 === 0) {
    console.log(`${i}は7の倍数です`);
  } else {
    console.log(i);
  }
}