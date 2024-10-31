// let A = prompt ('정수 A')
// let B = prompt ('정수 B')
// let C = prompt ('정수 C')

// alert (`최솟값은 ${'blabla'}입니다`);

let a = 15;
let b = 11;
let c = 99;

// 가장 작은 수 찾기
let min;
if (a < b) {
  // a가 최소값
  if (a < c) {
    // a가 최소값
    min = a;
  } else {
    // c가 최소값
    min = c;
  }
} else {
  // b가 최소값
  if (b < c) {
    // b가 최소값
    min = b;
  } else {
    // c가 최소값
    min = c;
  }
}
console.log(`최소값: ${min}`);
