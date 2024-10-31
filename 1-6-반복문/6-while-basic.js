let i = 1;
while (i <= 5) {
    console.log(`${i}번 학생 안녕하세요!`);
    i++;
}









// 10안에 있는 2의 배수를 가로로 출력하기
let result = '';
let j = 2;
while (j <= 10) {
  result += `${j} `;
  j += 2;
}
console.log(result);



// 1~50 사이 6의 배수 출력하기
console.log('==================');

let k = 1;
while (k <= 50) { // i는 1부터 50까지 1씩 증가하면서 반복
  if (k % 6 === 0) { // 반복하면서 6의 배수인지 확인한다
    console.log(k);  // 6의 배수라면 출력한다
  }
  k++;
}



// 1~100사이 7의 배수이면서 14의 배수가 아닌수 출력하기
console.log('==================');

let n = 1;
while (n <= 100) {
  if (n % 7 === 0 && n % 14 !== 0) {
    console.log(i);
  }
  n++;
}



// 1~7777 안에 있는 3의 배수 개수 알아내기
console.log('==================');

let count = 0;
let m = 1;
while (m <= 7777) {
  if (m % 3 === 0) {
    // 3의 배수일 경우 실행될 코드
    count++;
  }
  m++;
}
console.log(`3의 배수의 총 개수: ${count}개`);

// !!! 반복문 실행했을 때 아래에 exited with code=0 이 안 뜨면 무한루프 돌고 있는 거임.
//우클릭 해서 stop code rinning 해주기!!!