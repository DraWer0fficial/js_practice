'use strict';
const output = function(text1, text2) {
  console.log(`${text1} ${text2}`);
};
output('good morning!', 'What`s up?')


// 無名関数
// const totalPrice = function (price1, price2) {
// return (`${price1}+${price2}は${price1 + price2}です。`);
// }
// console.log(totalPrice(1000, 2000));

// アロー関数に直したもの
const totalPrice = (price1, price2)=>(`${price1}+${price2}は${price1 + price2}です。`);
console.log(totalPrice(1000, 2000));

// window.alert('Hell World');
// document.write('Hell World');
document.getElementById('sample')