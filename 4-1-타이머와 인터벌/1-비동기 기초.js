
// 동기 : 코드가 순차적으로 실행된다.
// 비동기 : 코드가 순서 없이 실행된다.

// setTimeout:  비동기 타이머 - 코드를 비동기로 동시에 실행시킴

console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');

console.log('=======================================');



console.log('오늘 할 일은 뭘까용!?');

setTimeout(() => {
  console.log('오늘은 월급 루팡을 할 거예용~ㅋㅋㅎ');
}, 1500);


// setTimeout(() => {
//   for (let i= 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(`hello${i}`);
//     }, 100);
//     console.log(`hello${i}`);  
//   }
// }, 0);

// setTimeout(() => {
//   for (let i= 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(`bye${i}`); 
//     }, 200); 
//   }
// }, 0);