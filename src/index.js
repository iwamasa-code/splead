/**
 * スプレット構文　...
 */

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// // sum(arr1[0], arr1[1]);
// // console.log(sum(arr1[0], arr1[1]));
// console.log(sum(...arr1));
// /**
//  * 15行目と16行目は同じ事をしている。
//  */

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; //分割代入方式  //スプレット構文を用いて残りの値がいくつあろうがまとめて配列で受け取る。
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
