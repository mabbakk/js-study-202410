//피연산자 (operand) - 연산의 대상이 되는 데이터
//산술연산 - 피연산자가 숫자여야 함

console.log(3*4);
console.log('김철수' * true);

//비교연산 - 피연산자가 숫자 또는 문자
//논리연산 - 피연산자가 논리여야 함
let t = true;
let f = flase;

console.log('===============================');


// && : 양쪽 항이 모두 true인 경우만 true로 도출
//로그인 로직 : 아이디 일치 + 패스워드 일치 = 성공 (true)

console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

let height = 145;
let age = 7;
console.log(height >= 140 && age >= 6);

console.log('===============================');

console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

console.log('===============================');

// 논리 반전
console.log(!t); //true의 논리를 반대로 뒤집어라!
console.log(!f); //flase의 논리를 반대로 뒤집어라!


